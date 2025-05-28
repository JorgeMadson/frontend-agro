"use client"

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material"

interface ObservacoesModalProps {
  open: boolean
  onClose: () => void
  observacoes: string
  nome: string
}

export function ObservacoesModal({ open, onClose, observacoes, nome }: ObservacoesModalProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Observações - {nome}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" style={{ whiteSpace: "pre-wrap", minHeight: "100px" }}>
          {observacoes || "Nenhuma observação registrada."}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
