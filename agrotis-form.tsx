"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, ChevronLeft, TreePine } from "lucide-react"

export default function Component() {
  const [observations, setObservations] = useState("")
  const maxObservations = 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2">
          <TreePine className="w-6 h-6 text-teal-600" />
          <span className="text-xl font-semibold text-gray-800">AGROTIS</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-teal-600 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ChevronLeft className="w-5 h-5" />
            <span className="text-lg">
              Teste Front-End / <span className="font-semibold">Novo Cadastro</span>
            </span>
          </div>
          <Button variant="ghost" className="text-white hover:bg-teal-700 hover:text-white font-medium">
            SALVAR
          </Button>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nome */}
            <div className="md:col-span-1">
              <Label htmlFor="nome" className="text-gray-600 text-sm mb-2 block">
                Nome *
              </Label>
              <div className="relative">
                <Input
                  id="nome"
                  className="border-0 border-b-2 border-gray-300 rounded-none px-0 pb-2 focus:border-teal-600 focus:ring-0 bg-transparent"
                  placeholder=""
                />
              </div>
            </div>

            {/* Data Inicial */}
            <div>
              <Label htmlFor="data-inicial" className="text-gray-600 text-sm mb-2 block">
                Data Inicial *
              </Label>
              <div className="relative">
                <Input
                  id="data-inicial"
                  type="date"
                  className="border border-gray-300 rounded px-3 py-2 pr-10 focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Data Final */}
            <div>
              <Label htmlFor="data-final" className="text-gray-600 text-sm mb-2 block">
                Data Final *
              </Label>
              <div className="relative">
                <Input
                  id="data-final"
                  type="date"
                  className="border border-gray-300 rounded px-3 py-2 pr-10 focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Propriedades */}
            <div>
              <Label htmlFor="propriedades" className="text-gray-600 text-sm mb-2 block">
                Propriedades *
              </Label>
              <Input
                id="propriedades"
                className="border border-gray-300 rounded px-3 py-2 focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                placeholder=""
              />
            </div>

            {/* Laboratório */}
            <div>
              <Label htmlFor="laboratorio" className="text-gray-600 text-sm mb-2 block">
                Laboratório *
              </Label>
              <Input
                id="laboratorio"
                className="border border-gray-300 rounded px-3 py-2 focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                placeholder=""
              />
            </div>

            {/* Empty space for grid alignment */}
            <div></div>

            {/* Observações */}
            <div className="md:col-span-3">
              <Label htmlFor="observacoes" className="text-gray-600 text-sm mb-2 block">
                Observações
              </Label>
              <div className="relative">
                <Textarea
                  id="observacoes"
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                  maxLength={maxObservations}
                  className="border border-gray-300 rounded px-3 py-2 min-h-[120px] resize-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  placeholder=""
                />
                <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                  {observations.length}/{maxObservations}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
