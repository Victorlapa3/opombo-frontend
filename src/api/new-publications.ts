import { api } from '@/lib/axios'

export interface CreatePublicationBody {
  // eslint-disable-next-line @typescript-eslint/ban-types
  usuario: {}
  conteudo: string
}

export async function createPublication({
  usuario,
  conteudo,
}: CreatePublicationBody) {
  await api.post('/publicacoes', {
    usuario,
    conteudo,
  })
}
