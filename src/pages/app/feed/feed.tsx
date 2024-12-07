import { useInfiniteQuery } from '@tanstack/react-query'

import { fetchPublications } from '@/api/fetch-publications.ts'
import { NewPublicationCard } from '@/components/new-publication.tsx'
import { useFilters } from '@/pages/_layouts/app.tsx'

import { PublicationCard } from './publication-card.tsx'

export function Feed() {
  const { filters } = useFilters()

  const { data } = useInfiniteQuery({
    queryKey: ['publications', filters],
    queryFn: ({ pageParam = 1 }) =>
      fetchPublications({
        pagina: pageParam,
        limite: 10,
        conteudo: filters.content || undefined,
        criadoEmInicio: filters.createdAtStart || undefined,
        criadoEmFim: filters.createdAtEnd || undefined,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 1 ? allPages.length + 1 : undefined,
  })

  const publications = data?.pages.flat() || []

  return (
    <div className="flex flex-col h-screen p-7 gap-5">
      <NewPublicationCard />
      <div className="flex flex-col h-screen p-7 gap-5 items-center">
        {publications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>
    </div>
  )
}
