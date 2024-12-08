import { api } from '@/lib/axios'

export interface FetchComplaintsBody {
  pagina: number
  limite: number
  usuarioId?: string
  publicacaoId?: string
  motivo?: string
  situacao?: string
  criadoEmInicio?: string
  criadoEmFim?: string
}

export interface Complaint {
  id: string
  usuario: {
    nome: string
  }
  motivo: string
  situacao: string
  criadoEm: string
}

export async function fetchComplaints({
  pagina,
  limite,
  usuarioId,
  publicacaoId,
  motivo,
  situacao,
  criadoEmInicio,
  criadoEmFim,
}: FetchComplaintsBody) {
  const response = await api.post<Complaint[]>('/denuncias/admin/filtro', {
    pagina,
    limite,
    usuarioId,
    publicacaoId,
    motivo,
    situacao,
    criadoEmInicio,
    criadoEmFim,
  })

  return response.data
}
