"use client"

import { useState, useEffect } from "react"
import type { Propriedade, Laboratorio } from "../types"

interface ApiData {
  laboratorios: Laboratorio[]
  propriedades: Propriedade[]
  loading: boolean
  error: string | null
}

export const useApi = (): ApiData => {
  const [laboratorios, setLaboratorios] = useState<Laboratorio[]>([])
  const [propriedades, setPropriedades] = useState<Propriedade[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        const [laboratoriosResponse, propriedadesResponse] = await Promise.all([
          fetch(
            "https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/laboratorios.json",
          ),
          fetch(
            "https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/propriedades.json",
          ),
        ])

        if (!laboratoriosResponse.ok) throw new Error("Failed to fetch laboratorios")
        if (!propriedadesResponse.ok) throw new Error("Failed to fetch propriedades")

        const [laboratoriosData, propriedadesData] = await Promise.all([
          laboratoriosResponse.json(),
          propriedadesResponse.json(),
        ])

        setLaboratorios(laboratoriosData)
        setPropriedades(propriedadesData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { laboratorios, propriedades, loading, error }
}
