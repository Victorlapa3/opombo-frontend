import { api } from '@/lib/axios'

export async function likePublication(publicationId: string) {
  const response = await api.post<boolean>(
    `/publicacoes/curtir/${publicationId}`,
  )

  return response.data
}
