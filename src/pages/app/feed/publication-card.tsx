import { DialogTrigger } from '@radix-ui/react-dialog'
import { useMutation, useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CircleAlert, Heart, Trash } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { deletePublication } from '@/api/delete-publication'
import { Publication } from '@/api/fetch-publications'
import { getAuthenticatedUser } from '@/api/get-authenticated-user'
import { likePublication } from '@/api/like'
import { Avatar } from '@/components/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Dialog } from '@/components/ui/dialog'

import { ReportPublicationDialog } from './report-dialog'

export interface PublicationCardProps {
  publication: Publication
}

export function PublicationCard({ publication }: PublicationCardProps) {
  // const navigate = useNavigate()

  const [likes, setLikes] = useState(publication.curtidas || [])

  const { data: authenticatedUser } = useQuery({
    queryKey: ['authenticatedUser'],
    queryFn: getAuthenticatedUser,
  })

  const { mutateAsync: like } = useMutation({
    mutationFn: likePublication,
  })

  async function handleLikePublication(publicationId: string) {
    try {
      const response = await like(publicationId)

      if (response) {
        setLikes((state) => {
          const userId = authenticatedUser
          if (userId) {
            return [...state, userId]
          }
          return state
        })
      } else {
        setLikes((state) => {
          const userId = authenticatedUser
          if (userId) {
            return state.filter((id) => id !== userId)
          }
          return state
        })
      }
    } catch {
      toast.error('Erro ao curtir pruu.')
    }
  }

  const isLiked = likes.some((user) => user.id === authenticatedUser?.id)

  const { mutateAsync: deletePub } = useMutation({
    mutationFn: deletePublication,
  })

  if (publication.usuario.email === 'usuario1@usuario.com') {
    console.log(publication.usuario)
  }

  async function handleDeletePublication(publicationId: string) {
    try {
      await deletePub(publicationId)
      window.location.reload()
    } catch {
      toast.error('Erro ao deletar pruu.')
    }
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4">
          <Avatar src={publication.usuario.fotoPerfil} size="sm" />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <CardTitle className="text-md">
                {publication.usuario.nome}
              </CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                {publication.usuario.email}
              </CardDescription>
              <span className="text-xs text-muted-foreground">
                •{' '}
                {format(new Date(publication.criadoEm), 'dd MMM', {
                  locale: ptBR,
                })}
              </span>
            </div>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className="ml-auto flex items-center gap-2 h-6"
            >
              <CircleAlert className="h-5 w-5 text-muted-foreground" />
            </Button>
          </DialogTrigger>

          <ReportPublicationDialog publicationId={publication.id} />
        </Dialog>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {publication.conteudo}
        {publication.publicacaoImagem && (
          <img
            src={`data:image/png;base64,${publication.publicacaoImagem}`}
            alt=""
            className="object-contain h-96 w-full"
          />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {publication.usuario.id === authenticatedUser?.id ? (
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-rose-500 hover:bg-transparent p-0"
            onClick={() => handleDeletePublication(publication.id)}
          >
            <Trash />
          </Button>
        ) : null}
        {!isLiked ? (
          <Button
            variant="ghost"
            className="ml-auto h-2 hover:bg-transparent flex items-center gap-2 px-0"
            onClick={() => handleLikePublication(publication.id)}
          >
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground text-sm">
              {likes.length}
            </span>
          </Button>
        ) : (
          <Button
            variant="ghost"
            className="ml-auto h-2 hover:bg-transparent flex items-center gap-2 px-0"
            onClick={() => handleLikePublication(publication.id)}
          >
            <Heart fill="#7C3AED" className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground text-sm font-mono font-semibold">
              {likes.length}
            </span>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
