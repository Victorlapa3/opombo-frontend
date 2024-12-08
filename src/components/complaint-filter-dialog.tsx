import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useComplaintFilters } from '@/pages/_layouts/admin'

import { Button } from './ui/button'
import { DatePicker } from './ui/date-picker'
import { DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

const complaintFiltersFormSchema = z.object({
  motivo: z.enum([
    'SPAM',
    'DISCURSO_DE_ODIO',
    'ASSEDIO_OU_BULLYING',
    'GOLPE',
    'INFORMACAO_FALSA',
  ]),
  situacao: z.enum(['PENDENTE', 'ACEITADA', 'RECUSADA']),
  criadoEmInicio: z.string(),
  criadoEmFim: z.string(),
})

type ComplaintFilterForm = z.infer<typeof complaintFiltersFormSchema>

export function ComplaintFiltersDialog() {
  const { setComplaintFilters } = useComplaintFilters()

  const { handleSubmit, watch, setValue } = useForm<ComplaintFilterForm>({
    defaultValues: {
      situacao: 'PENDENTE',
    },
  })

  async function handleSetComplaintFilters(data: ComplaintFilterForm) {
    // console.log('Complaint filters: ', data)
    setComplaintFilters(data)
  }

  return (
    <DialogContent className="max-w-lg mx-auto">
      <DialogHeader>
        <DialogTitle>Filtros</DialogTitle>
      </DialogHeader>

      <form
        onSubmit={handleSubmit(handleSetComplaintFilters)}
        className="space-y-4"
      >
        <div className="flex gap-5">
          <div className="w-1/2">
            <Label>Motivo</Label>
            <Select
              onValueChange={(value) =>
                setValue('motivo', value as ComplaintFilterForm['motivo'])
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SPAM">Spam</SelectItem>
                <SelectItem value="DISCURSO_DE_ODIO">
                  Discurso de Ódio
                </SelectItem>
                <SelectItem value="ASSEDIO_OU_BULLYING">
                  Assédio ou Bullying
                </SelectItem>
                <SelectItem value="GOLPE">Golpe</SelectItem>
                <SelectItem value="INFORMACAO_FALSA">
                  Informação Falsa
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-1/2">
            <Label>Status</Label>
            <Select
              onValueChange={(value) =>
                setValue('situacao', value as ComplaintFilterForm['situacao'])
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pendente" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PENDENTE">Pendente</SelectItem>
                <SelectItem value="ACEITADA">Aceita</SelectItem>
                <SelectItem value="RECUSADA">Rejeitada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="created-at-start">Data de criação (inicio)</Label>
            <DatePicker
              value={
                watch('criadoEmInicio')
                  ? new Date(watch('criadoEmInicio'))
                  : undefined
              }
              onChange={(date) =>
                setValue('criadoEmInicio', date ? date.toISOString() : '')
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="created-at-end">Data de criação (final)</Label>
            <DatePicker
              value={
                watch('criadoEmFim')
                  ? new Date(watch('criadoEmFim'))
                  : undefined
              }
              onChange={(date) =>
                setValue('criadoEmFim', date ? date.toISOString() : '')
              }
            />
          </div>
        </div>
        <Button className="w-full bg-primary" type="submit">
          <Search />
          Pesquisar
        </Button>
      </form>
    </DialogContent>
  )
}
