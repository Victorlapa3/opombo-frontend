import { useQuery } from '@tanstack/react-query'
import { Check, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

import { getComplaintById } from '@/api/find-complaint-by-id'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { PublicationCard } from '@/pages/app/feed/publication-card'

import { ComplaintCard } from '../complaints/complaint-card'

export function Details() {
  const { complaintId } = useParams()

  if (!complaintId) {
    throw new Error('Complaint ID undefined')
  }

  const { data: complaint } = useQuery({
    queryKey: ['complaint', complaintId],
    queryFn: () => getComplaintById(complaintId),
  })

  return (
    <>
      <Helmet title="Detalhes" />
      <div className="flex flex-col h-screen p-7 gap-8">
        <h1 className="text-2xl font-bold text-foreground">
          Denuncias - Detalhe
        </h1>
        <div className="flex flex-col gap-5">
          <div className="w-2/3">
            {complaint?.publicacao ? (
              <PublicationCard publication={complaint?.publicacao} />
            ) : (
              <div>Publicacao nao encontrada</div>
            )}
          </div>
          <Separator className="w-2/3" />
          <div className="flex flex-col gap-3">
            {complaint ? (
              <ComplaintCard complaint={complaint} />
            ) : (
              <div>Denuncia nao encontrada</div>
            )}
            <div className="flex w-2/3 gap-3">
              <Button variant="default" className="w-full">
                <Check />
                Aceitar
              </Button>
              <Button variant="default" className="w-full">
                <X />
                Recusar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
