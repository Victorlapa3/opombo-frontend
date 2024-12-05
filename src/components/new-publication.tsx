import { useMutation, useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getAuthenticatedUser } from '@/api/get-authenticated-user'
import { createPublication } from '@/api/new-publications'

import { Avatar } from './avatar'
import { Button } from './ui/button'
import { Card, CardFooter, CardHeader } from './ui/card'
import { Input } from './ui/input'

const newPublicationForm = z.object({
  content: z.string(),
})

type NewPublicationForm = z.infer<typeof newPublicationForm>

export function NewPublicationCard() {
  const { data: authenticatedUser } = useQuery({
    queryKey: ['authenticatedUser'],
    queryFn: getAuthenticatedUser,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewPublicationForm>()

  const { mutateAsync: newPublication } = useMutation({
    mutationFn: createPublication,
  })

  async function handleNewPublication(data: NewPublicationForm) {
    try {
      await newPublication({
        usuario: {},
        conteudo: data.content,
      })

      window.location.reload()
    } catch {
      toast.error('Erro ao criar pruu.')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(handleNewPublication)}>
        <CardHeader className="flex flex-row items-center gap-5">
          <Avatar src={authenticatedUser?.fotoPerfil} size="md" alt="" />
          <Input
            id="content"
            placeholder="O que está acontencendo?"
            className="w-full h-12 resize-none p-2 border border-gray-300 rounded-full"
            {...register('content')}
          />
        </CardHeader>
        <CardFooter className="flex justify-end gap-6">
          <Button
            disabled={isSubmitting}
            type="submit"
            className="bg-primary rounded-full"
          >
            Postar
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
