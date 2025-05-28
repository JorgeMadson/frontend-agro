"use client"

import { useForm, Controller } from "react-hook-form"
import { useEffect } from "react"
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  CircularProgress,
  Chip,
  OutlinedInput,
} from "@mui/material"
import { useAppContext } from "../contexts/app-context"
import { useApi } from "../hooks/use-api"
import type { FormData, CadastroData } from "../types"
import { FormContainer, FormGrid, FullWidth } from "./styled-components"

export function CadastroForm() {
  const { state, dispatch } = useAppContext()
  const { laboratorios, propriedades, loading } = useApi()

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      nome: "",
      dataInicial: "",
      dataFinal: "",
      propriedades: [],
      laboratorio: 0,
      observacoes: "",
    },
  })

  useEffect(() => {
    if (state.editingCadastro) {
      setValue("nome", state.editingCadastro.nome)
      setValue("dataInicial", state.editingCadastro.dataInicial.split("T")[0])
      setValue("dataFinal", state.editingCadastro.dataFinal.split("T")[0])
      setValue(
        "propriedades",
        state.editingCadastro.propriedades.map((p) => p.id),
      )
      setValue("laboratorio", state.editingCadastro.laboratorio.id)
      setValue("observacoes", state.editingCadastro.observacoes)
    }
  }, [state.editingCadastro, setValue])

  const onSubmit = (data: FormData) => {
    const selectedPropriedades = propriedades.filter((p) => data.propriedades.includes(p.id))
    const selectedLaboratorio = laboratorios.find((l) => l.id === data.laboratorio)

    if (!selectedLaboratorio) return

    const cadastroData: CadastroData = {
      id: state.editingCadastro?.id || 0,
      nome: data.nome,
      dataInicial: new Date(data.dataInicial).toISOString(),
      dataFinal: new Date(data.dataFinal).toISOString(),
      propriedades: selectedPropriedades,
      laboratorio: selectedLaboratorio,
      observacoes: data.observacoes,
    }

    if (state.editingCadastro) {
      dispatch({ type: "UPDATE_CADASTRO", payload: cadastroData })
    } else {
      dispatch({ type: "ADD_CADASTRO", payload: cadastroData })
    }

    dispatch({ type: "SET_VIEW", payload: "list" })
    dispatch({ type: "SET_EDITING", payload: null })
    reset()
  }

  if (loading) {
    return (
      <FormContainer>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <CircularProgress />
        </Box>
      </FormContainer>
    )
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGrid>
          <Controller
            name="nome"
            control={control}
            rules={{ required: "Nome é obrigatório" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nome"
                required
                error={!!errors.nome}
                helperText={errors.nome?.message}
                fullWidth
              />
            )}
          />

          <Controller
            name="dataInicial"
            control={control}
            rules={{ required: "Data inicial é obrigatória" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Data Inicial"
                type="date"
                required
                error={!!errors.dataInicial}
                helperText={errors.dataInicial?.message}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            )}
          />

          <Controller
            name="dataFinal"
            control={control}
            rules={{ required: "Data final é obrigatória" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Data Final"
                type="date"
                required
                error={!!errors.dataFinal}
                helperText={errors.dataFinal?.message}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            )}
          />

          <Controller
            name="propriedades"
            control={control}
            rules={{ required: "Selecione pelo menos uma propriedade" }}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.propriedades}>
                <InputLabel>Propriedades *</InputLabel>
                <Select
                  {...field}
                  multiple
                  input={<OutlinedInput label="Propriedades *" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {(selected as number[]).map((value) => {
                        const prop = propriedades.find((p) => p.id === value)
                        return prop ? <Chip key={value} label={prop.nome} size="small" /> : null
                      })}
                    </Box>
                  )}
                >
                  {propriedades.map((propriedade) => (
                    <MenuItem key={propriedade.id} value={propriedade.id}>
                      {propriedade.nome}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />

          <Controller
            name="laboratorio"
            control={control}
            rules={{ required: "Laboratório é obrigatório" }}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.laboratorio}>
                <InputLabel>Laboratório *</InputLabel>
                <Select {...field} label="Laboratório *">
                  {laboratorios.map((laboratorio) => (
                    <MenuItem key={laboratorio.id} value={laboratorio.id}>
                      {laboratorio.nome}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </FormGrid>

        <FullWidth>
          <Controller
            name="observacoes"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Observações"
                multiline
                rows={4}
                fullWidth
                inputProps={{ maxLength: 100 }}
                helperText={`${field.value.length}/100`}
              />
            )}
          />
        </FullWidth>

        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button type="submit" variant="contained" color="primary" size="large">
            SALVAR
          </Button>
        </Box>
      </form>
    </FormContainer>
  )
}
