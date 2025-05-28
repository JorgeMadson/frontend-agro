"use client"

import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { TreePine, ChevronLeft } from "lucide-react"
import { AppProvider, useAppContext } from "../contexts/app-context"
import { CadastroForm } from "../components/cadastro-form"
import { CadastroList } from "../components/cadastro-list"
import { Container, Header, Logo, NavBar, Content } from "../components/styled-components"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    success: {
      main: "#00876E",
    },
  },
})

function AppContent() {
  const { state, dispatch } = useAppContext()

  return (
    <Container>
      <Header>
        <Logo>
          <TreePine size={24} color="#00876E" />
          AGROTIS
        </Logo>
      </Header>

      <Content>
        <NavBar>
          {state.currentView === "form" && (
            <ChevronLeft
              size={20}
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch({ type: "SET_VIEW", payload: "list" })
                dispatch({ type: "SET_EDITING", payload: null })
              }}
            />
          )}
          <span>
            Teste Front-End
            {state.currentView === "form" && (
              <span> / {state.editingCadastro ? "Editar Cadastro" : "Novo Cadastro"}</span>
            )}
          </span>

        </NavBar>
        {state.currentView === "list" ? <CadastroList /> : <CadastroForm />}
      </Content>
    </Container>
  )
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ThemeProvider>
  )
}
