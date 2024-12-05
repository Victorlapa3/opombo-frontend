import { useQuery } from '@tanstack/react-query'

import { getAuthenticatedUser } from '@/api/get-authenticated-user'

import { Avatar } from './avatar'
import { Button } from './ui/button'
import { Card, CardFooter, CardHeader } from './ui/card'
import { Input } from './ui/input'

export function NewPublicationCard() {
  const { data: authenticatedUser } = useQuery({
    queryKey: ['authenticatedUser'],
    queryFn: getAuthenticatedUser,
  })

  console.log(authenticatedUser)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-5">
        <Avatar src={authenticatedUser?.fotoPerfil} size="md" alt="" />
        <Input
          id="novaPublicacao"
          placeholder="O que está acontencendo?"
          className="w-full h-12 resize-none p-2 border border-gray-300 rounded-full"
        />
      </CardHeader>
      <CardFooter className="flex justify-end gap-6">
        <Button className="bg-primary rounded-full">Postar</Button>
      </CardFooter>
    </Card>
  )
}
