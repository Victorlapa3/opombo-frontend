import { useMutation } from '@tanstack/react-query'
import { Megaphone } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { reportPublication } from '@/api/report-publication'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const reportForm = z.object({
  reason: z.enum([
    'SPAM',
    'DISCURSO_DE_ODIO',
    'ASSEDIO_OU_BULLYING',
    'GOLPE',
    'INFORMACAO_FALSA',
  ]),
})

type ReportForm = z.infer<typeof reportForm>

export interface ReportPublicationDialogProps {
  publicationId: string
}

export function ReportPublicationDialog({
  publicationId,
}: ReportPublicationDialogProps) {
  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<ReportForm>()

  const { mutateAsync: report } = useMutation({
    mutationFn: reportPublication,
  })

  async function handleReport(data: ReportForm) {
    try {
      await report({
        usuario: {},
        publicacao: {
          id: publicationId,
        },
        motivo: data.reason,
      })

      window.location.reload()
    } catch {
      toast.error('Erro ao denunciar pruu.')
    }
  }

  return (
    <DialogContent className="max-w-lg mx-auto">
      <DialogHeader>
        <DialogTitle>Denunciar</DialogTitle>
        <DialogDescription>Qual o motivo da sua denuncia?</DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleReport)} className="space-y-4">
        <RadioGroup
          className="py-3 space-y-3"
          onValueChange={(value: ReportForm['reason']) =>
            setValue('reason', value)
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="SPAM" id="SPAM" />
            <Label htmlFor="SPAM">Spam</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="DISCURSO_DE_ODIO" id="DISCURSO_DE_ODIO" />
            <Label htmlFor="DISCURSO_DE_ODIO">Discurso de ódio</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="ASSEDIO_OU_BULLYING"
              id="ASSEDIO_OU_BULLYING"
            />
            <Label htmlFor="ASSEDIO_OU_BULLYING">Bullying ou assédio</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="GOLPE" id="GOLPE" />
            <Label htmlFor="GOLPE">Golpe</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="INFORMACAO_FALSA" id="INFORMACAO_FALSA" />
            <Label htmlFor="INFORMACAO_FALSA">Informação falsa</Label>
          </div>
        </RadioGroup>
        <Button
          disabled={isSubmitting}
          className="w-full bg-primary"
          type="submit"
        >
          <Megaphone />
          Denunciar
        </Button>
      </form>
    </DialogContent>
  )
}
