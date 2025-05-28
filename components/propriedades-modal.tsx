"use client"

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, ListItemText } from "@mui/material"
import type { Propriedade } from "../types"

interface PropriedadesModalProps {
  open: boolean
  onClose: () => void
  propriedades: Propriedade[]
  nome: string
}

export function PropriedadesModal({ open, onClose, propriedades, nome }: PropriedadesModalProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Propriedades - {nome}</DialogTitle>
      <DialogContent>
        <List>
          {propriedades.map((prop) => (
            <ListItem key={prop.id}>
              <ListItemText primary={prop.nome} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
