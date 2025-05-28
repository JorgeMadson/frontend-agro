"use client"

import styled from "styled-components"
import { AppBar } from "@mui/material"

export const StyledAppBar = styled(AppBar)`
  background-color: #00876E;
`

verde_agrotis: '#00876E';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`

export const HeaderDivContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const NavigationContainer = styled.div`
  background-color: #388e3c;
  color: white;
  padding: 1rem 2rem;
`

export const BreadcrumbContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e0e0e0;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`

export const NavBar = styled.div`
  background-color: #00876E;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
`

export const Content = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

export const FormContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: full-width;
  margin: 0 auto;
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const FullWidth = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 1.5rem;
`

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const StyledTable = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`
