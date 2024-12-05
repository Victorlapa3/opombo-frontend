import { api } from '@/lib/axios'

import { Usuario } from './get-authenticated-user'

export interface FetchPublicationsBody {
  pagina: number
  limite: number
  usuarioId?: string
  conteudo?: string
  criadoEmInicio?: string
  criadoEmFim?: string
}

export interface Publication {
  id: string
  usuario: Usuario
  conteudo: string
  publicacaoImagem: string | null
  curtidas: Usuario[]
  bloqueado: boolean
  excluido: boolean
  criadoEm: string
}

export async function fetchPublications({
  pagina,
  limite,
  usuarioId,
  conteudo,
  criadoEmInicio,
  criadoEmFim,
}: FetchPublicationsBody) {
  const response = await api.post<Publication[]>('/publicacoes/filtro', {
    pagina,
    limite,
    usuarioId,
    conteudo,
    criadoEmInicio,
    criadoEmFim,
  })

  return response.data
}
