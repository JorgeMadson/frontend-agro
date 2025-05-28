"use client"

import { useCallback } from "react"
import type { FormData } from "../types"

export function useFormValidation() {
  const validateForm = useCallback((data: FormData): Record<string, string> => {
    const errors: Record<string, string> = {}

    if (!data.nome.trim()) {
      errors.nome = "Nome é obrigatório"
    }

    if (!data.dataInicial) {
      errors.dataInicial = "Data inicial é obrigatória"
    }

    if (!data.dataFinal) {
      errors.dataFinal = "Data final é obrigatória"
    }

    if (data.dataInicial && data.dataFinal && new Date(data.dataInicial) > new Date(data.dataFinal)) {
      errors.dataFinal = "Data final deve ser posterior à data inicial"
    }

    if (!data.propriedades.length) {
      errors.propriedades = "Selecione pelo menos uma propriedade"
    }

    if (!data.laboratorio) {
      errors.laboratorio = "Laboratório é obrigatório"
    }

    return errors
  }, [])

  return { validateForm }
}
