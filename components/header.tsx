"use client"
import { Toolbar, IconButton, Button } from "@mui/material"
import { TreePine, ArrowUpIcon as ArrowBack } from "lucide-react"
import { useAppContext } from "../contexts/app-context"
import { StyledAppBar, LogoContainer, NavigationContainer, BreadcrumbContainer, Logo } from "./styled-components"
import LogoAgrotis from "./logo-agrotis"

export function Header() {
  const { state, dispatch } = useAppContext()

  const handleNavigate = (view: "list" | "form") => {
    dispatch({ type: "SET_VIEW", payload: view })
  }

  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <LogoContainer>
            
            <LogoAgrotis />
            AGROTIS
          </LogoContainer>
        </Toolbar>
      </StyledAppBar>

      <NavigationContainer>
        <BreadcrumbContainer>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {state.currentView === "form" && (
              <IconButton onClick={() => handleNavigate("list")} size="small" style={{ color: "white" }}>
                <ArrowBack />
              </IconButton>
            )}
            <span>Teste Front-End / {state.currentView === "list" ? "Listagem" : "Novo Cadastro"}</span>
          </div>

          {state.currentView === "list" && (
            <Button variant="contained" color="success" onClick={() => handleNavigate("form")}>
              NOVO CADASTRO
            </Button>
          )}
        </BreadcrumbContainer>
      </NavigationContainer>
    </>
  )
}
