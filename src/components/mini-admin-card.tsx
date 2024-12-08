import { useQuery } from '@tanstack/react-query'

import { getAuthenticatedUser } from '@/api/get-authenticated-user'

import { Avatar } from './avatar'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'

export function MiniAdminCard() {
  const { data: authenticatedUser } = useQuery({
    queryKey: ['authenticatedUser'],
    queryFn: getAuthenticatedUser,
  })

  return (
    <Card className="flex flex-col items-center border-none">
      <CardContent className="flex flex-row items-center gap-4">
        <Avatar src={authenticatedUser?.fotoPerfil} size="lg" />
        <div className="flex flex-col">
          <CardTitle className="text-lg">{authenticatedUser?.nome}</CardTitle>
          <CardDescription>{authenticatedUser?.email}</CardDescription>
        </div>
      </CardContent>
    </Card>
  )
}
