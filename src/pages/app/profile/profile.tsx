import { DialogTrigger } from '@radix-ui/react-dialog'
import { useQuery } from '@tanstack/react-query'

import { fetchPublications } from '@/api/fetch-publications'
import { getAuthenticatedUser } from '@/api/get-authenticated-user'
import { Avatar } from '@/components/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Dialog } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { useFilters } from '@/pages/_layouts/app'

import { PublicationCard } from '../feed/publication-card'
import { EditProfileDialog } from './edit-profile-dialog'

export function Profile() {
  const { filters } = useFilters()

  const { data: authenticatedUser } = useQuery({
    queryKey: ['authenticatedUser'],
    queryFn: getAuthenticatedUser,
  })

  const { data: publications } = useQuery({
    queryKey: ['publications', filters, authenticatedUser?.id],
    queryFn: () =>
      fetchPublications({
        pagina: 1,
        limite: 10,
        usuarioId: authenticatedUser?.id,
        conteudo: filters.content || undefined,
        criadoEmInicio: filters.createdAtStart || undefined,
        criadoEmFim: filters.createdAtEnd || undefined,
      }),
    enabled: !!authenticatedUser,
  })

  return (
    <div className="flex flex-col h-screen p-7 gap-5 ">
      <Card className="border-0">
        <CardHeader className="flex flex-row gap-5 ">
          <Avatar src={authenticatedUser?.fotoPerfil} alt="" size="xl" />
          <div className="flex flex-col gap-1">
            <CardTitle>{authenticatedUser?.nome}</CardTitle>
            <CardDescription>{authenticatedUser?.email}</CardDescription>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-bold ml-auto text-lg h-8 flex rounded-full">
                Editar perfil
              </Button>
            </DialogTrigger>

            <EditProfileDialog />
          </Dialog>
        </CardHeader>
      </Card>
      <Separator />
      {publications && publications.length > 0
        ? publications.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))
        : null}
    </div>
  )
}
