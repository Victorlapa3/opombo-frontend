import { useInfiniteQuery } from '@tanstack/react-query'
import { ChevronRight } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import { fetchComplaints } from '@/api/fetch-complaints'
import { Button } from '@/components/ui/button'
import { useComplaintFilters } from '@/pages/_layouts/admin'

import { ComplaintCard } from './complaint-card'

export function Complaints() {
  const { complaintFilters } = useComplaintFilters()
  const navigate = useNavigate()

  const { data } = useInfiniteQuery({
    queryKey: ['complaints', complaintFilters],
    queryFn: ({ pageParam = 1 }) =>
      fetchComplaints({
        pagina: pageParam,
        limite: 10,
        motivo: complaintFilters.motivo || undefined,
        situacao: complaintFilters.situacao || 'PENDENTE',
        criadoEmInicio: complaintFilters.criadoEmInicio || undefined,
        criadoEmFim: complaintFilters.criadoEmFim || undefined,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 1 ? allPages.length + 1 : undefined,
  })

  const currentPageComplaints = data?.pages[data.pages.length - 1] || []

  return (
    <>
      <Helmet title="Admin" />
      <div className="flex flex-col h-screen p-7 gap-8">
        <h1 className="text-2xl font-bold text-foreground">Denuncias</h1>
        <div className="flex flex-col gap-5">
          {currentPageComplaints?.map((complaint) => {
            return (
              <div key={complaint.id} className="flex gap-2">
                <ComplaintCard complaint={complaint} />
                <Button
                  variant="secondary"
                  className="h-full"
                  onClick={() => navigate(`/details/${complaint.id}`)}
                >
                  <ChevronRight />
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
