"use client"

import type React from "react"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
  Button,
  TextField,
  InputAdornment,
  Typography,
  Link,
  Box,
  Tooltip,
} from "@mui/material"
import { Search, Plus, MoreVertical, MessageSquare } from "lucide-react"
import { useAppContext } from "../contexts/app-context"
import { ObservacoesModal } from "./observacoes-modal"
import { PropriedadesModal } from "./propriedades-modal"
import { HeaderDivContainer, ListHeader, SearchContainer, StyledTable } from "./styled-components"
import type { CadastroData } from "../types"

export function CadastroList() {
  const { state, dispatch } = useAppContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedCadastro, setSelectedCadastro] = useState<CadastroData | null>(null)
  const [observacoesModal, setObservacoesModal] = useState(false)
  const [propriedadesModal, setPropriedadesModal] = useState(false)

  const filteredCadastros = state.cadastros.filter((cadastro) =>
    cadastro.nome.toLowerCase().includes(state.searchTerm.toLowerCase()),
  )

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, cadastro: CadastroData) => {
    setAnchorEl(event.currentTarget)
    setSelectedCadastro(cadastro)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setSelectedCadastro(null)
  }

  const handleEdit = () => {
    if (selectedCadastro) {
      dispatch({ type: "SET_EDITING", payload: selectedCadastro })
      dispatch({ type: "SET_VIEW", payload: "form" })
    }
    handleMenuClose()
  }

  const handleDelete = () => {
    if (selectedCadastro) {
      dispatch({ type: "DELETE_CADASTRO", payload: selectedCadastro.id })
    }
    handleMenuClose()
  }

  const handleObservacoesClick = (cadastro: CadastroData) => {
    setSelectedCadastro(cadastro)
    setObservacoesModal(true)
  }

  const handlePropriedadesClick = (cadastro: CadastroData) => {
    setSelectedCadastro(cadastro)
    setPropriedadesModal(true)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR")
  }

  return (
    <>
      <ListHeader>
        <HeaderDivContainer>
          <Typography variant="h6">Registros ({filteredCadastros.length})</Typography>
          <Button
            variant="text"
            color="success"
            startIcon={<Plus size={16} />}
            onClick={() => {
              dispatch({ type: "SET_EDITING", payload: null })
              dispatch({ type: "SET_VIEW", payload: "form" })
            }}
          >
            ADICIONAR
          </Button>
        </HeaderDivContainer>
        <SearchContainer>
          <TextField
            size="small"
            placeholder="Pesquisar..."
            value={state.searchTerm}
            onChange={(e) => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={20} />
                </InputAdornment>
              ),
            }}
          />
        </SearchContainer>
      </ListHeader>

      <StyledTable>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Código</strong>
                </TableCell>
                <TableCell>
                  <strong>Nome</strong>
                </TableCell>
                <TableCell>
                  <strong>Data Inicial</strong>
                </TableCell>
                <TableCell>
                  <strong>Data Final</strong>
                </TableCell>
                <TableCell>
                  <strong>Propriedade(s)</strong>
                </TableCell>
                <TableCell>
                  <strong>Laboratório</strong>
                </TableCell>
                <TableCell><strong>Obs.</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCadastros.map((cadastro) => (
                <TableRow key={cadastro.nome} hover>
                  <TableCell>{cadastro.id}</TableCell>
                  <TableCell>{cadastro.nome}</TableCell>
                  <TableCell>{formatDate(cadastro.dataInicial)}</TableCell>
                  <TableCell>{formatDate(cadastro.dataFinal)}</TableCell>
                  <TableCell>
                    {cadastro.propriedades.length === 1 ? (
                      cadastro.propriedades[0].nome
                    ) : (
                      <Link
                        component="button"
                        variant="body2"
                        onClick={() => handlePropriedadesClick(cadastro)}
                        sx={{ textDecoration: "none" }}
                      >
                        ({cadastro.propriedades.length}) propriedades
                      </Link>
                    )}
                  </TableCell>
                  <TableCell>{cadastro.laboratorio.nome}</TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <IconButton
                        size="small"
                        onClick={() => handleObservacoesClick(cadastro)}
                        disabled={!cadastro.observacoes}
                      >
                        <MessageSquare size={16} />
                      </IconButton>
                      <Tooltip title="Opções">
                        <IconButton size="small" onClick={(e) => handleMenuClick(e, cadastro)}>
                          <MoreVertical size={16} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledTable>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleEdit}>Editar</MenuItem>
        <MenuItem onClick={handleDelete}>Excluir</MenuItem>
      </Menu>

      {selectedCadastro && (
        <>
          <ObservacoesModal
            open={observacoesModal}
            onClose={() => setObservacoesModal(false)}
            observacoes={selectedCadastro.observacoes}
            nome={selectedCadastro.nome}
          />
          <PropriedadesModal
            open={propriedadesModal}
            onClose={() => setPropriedadesModal(false)}
            propriedades={selectedCadastro.propriedades}
            nome={selectedCadastro.nome}
          />
        </>
      )}
    </>
  )
}
