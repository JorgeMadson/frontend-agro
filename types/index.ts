export interface Propriedade {
  id: number
  nome: string
}

export interface Laboratorio {
  id: number
  nome: string
}

export interface CadastroData {
  id: number
  nome: string
  dataInicial: string
  dataFinal: string
  propriedades: Propriedade[]
  laboratorio: Laboratorio
  observacoes: string
}

export interface FormData {
  nome: string
  dataInicial: string
  dataFinal: string
  propriedades: number[]
  laboratorio: number
  observacoes: string
}
