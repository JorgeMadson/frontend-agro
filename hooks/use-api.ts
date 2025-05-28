"use client"

import { useState, useEffect } from "react"
import type { Propriedade, Laboratorio } from "../types"

const MOCK_LABORATORIOS: Laboratorio[] = [
  { id: 1, nome: "Laboratório Modelo 1" },
  { id: 2, nome: "Laboratório Modelo 2" },
  { id: 3, nome: "Laboratório Modelo 3" },
  { id: 4, nome: "Laboratório Modelo 4" },
  { id: 5, nome: "Laboratório Modelo 5" },
  { id: 6, nome: "Laboratório Modelo 6" },
]

const MOCK_PROPRIEDADES: Propriedade[] = [
  { id: 1, nome: "Fazenda Modelo 1" },
  { id: 2, nome: "Fazenda Modelo 2" },
  { id: 3, nome: "Fazenda Modelo 3" },
  { id: 4, nome: "Fazenda Modelo 4" },
  { id: 5, nome: "Propriedade Rural Norte" },
  { id: 6, nome: "Sítio São João" },
]

export function useApi() {
  const [laboratorios, setLaboratorios] = useState<Laboratorio[]>([])
  const [propriedades, setPropriedades] = useState<Propriedade[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 500))
        setLaboratorios(MOCK_LABORATORIOS)
        setPropriedades(MOCK_PROPRIEDADES)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { laboratorios, propriedades, loading }
}
