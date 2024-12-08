import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Complaint } from '@/api/fetch-complaints'
import { Card } from '@/components/ui/card'

export interface ComplaintCardProps {
  complaint: Complaint
}

export function ComplaintCard({ complaint }: ComplaintCardProps) {
  return (
    <Card className="flex py-6 px-8 w-2/3 justify-between">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground font-bold">
          Denunciante
        </span>
        <span>{complaint.usuario.nome}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground font-bold">Motivo</span>
        <strong>{complaint.motivo}</strong>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground font-bold">
          Situacao
        </span>
        <strong>{complaint.situacao}</strong>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground font-bold">Data</span>
        <span>
          {format(new Date(complaint.criadoEm), 'dd/MM/yyyy', {
            locale: ptBR,
          })}
        </span>
      </div>
    </Card>
  )
}
