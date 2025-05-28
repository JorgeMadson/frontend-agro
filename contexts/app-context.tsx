"use client"

import React, { createContext, useContext, useReducer, type ReactNode } from "react"
import type { CadastroData } from "../types"

interface AppState {
  cadastros: CadastroData[]
  currentView: "list" | "form"
  editingCadastro: CadastroData | null
  searchTerm: string
}

type AppAction =
  | { type: "ADD_CADASTRO"; payload: CadastroData }
  | { type: "UPDATE_CADASTRO"; payload: CadastroData }
  | { type: "DELETE_CADASTRO"; payload: number }
  | { type: "SET_VIEW"; payload: "list" | "form" }
  | { type: "SET_EDITING"; payload: CadastroData | null }
  | { type: "SET_SEARCH"; payload: string }
  | { type: "LOAD_CADASTROS"; payload: CadastroData[] }

interface AppContextType {
  state: AppState
  dispatch: React.Dispatch<AppAction>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const initialState: AppState = {
  cadastros: [],
  currentView: "list",
  editingCadastro: null,
  searchTerm: "",
}

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "ADD_CADASTRO":
      const newId = Math.max(...state.cadastros.map((c) => c.id), 9990) + 1
      const newCadastro = { ...action.payload, id: newId }
      const newCadastros = [...state.cadastros, newCadastro]
      localStorage.setItem("agrotis-cadastros", JSON.stringify(newCadastros))
      return {
        ...state,
        cadastros: newCadastros,
      }
    case "UPDATE_CADASTRO":
      const updatedCadastros = state.cadastros.map((c) => (c.id === action.payload.id ? action.payload : c))
      localStorage.setItem("agrotis-cadastros", JSON.stringify(updatedCadastros))
      return {
        ...state,
        cadastros: updatedCadastros,
      }
    case "DELETE_CADASTRO":
      const filteredCadastros = state.cadastros.filter((c) => c.id !== action.payload)
      localStorage.setItem("agrotis-cadastros", JSON.stringify(filteredCadastros))
      return {
        ...state,
        cadastros: filteredCadastros,
      }
    case "SET_VIEW":
      return {
        ...state,
        currentView: action.payload,
      }
    case "SET_EDITING":
      return {
        ...state,
        editingCadastro: action.payload,
      }
    case "SET_SEARCH":
      return {
        ...state,
        searchTerm: action.payload,
      }
    case "LOAD_CADASTROS":
      return {
        ...state,
        cadastros: action.payload,
      }
    default:
      return state
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  React.useEffect(() => {
    const savedCadastros = localStorage.getItem("agrotis-cadastros")
    if (savedCadastros) {
      try {
        const parsedCadastros = JSON.parse(savedCadastros)
        dispatch({ type: "LOAD_CADASTROS", payload: parsedCadastros })
      } catch (error) {
        console.error("Error loading saved data:", error)
      }
    }
  }, [])

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}
