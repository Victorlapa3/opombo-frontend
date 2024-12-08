import { api } from '@/lib/axios'

import { Publication } from './fetch-publications'

export interface ComplaintDetailsResponse {
  id: string
  publicacao: Publication
  usuario: {
    nome: string
  }
  motivo: string
  situacao: string
  criadoEm: string
}

export async function getComplaintById(complaintId: string) {
  const response = await api.get<ComplaintDetailsResponse>(
    `/denuncias/admin/${complaintId}`,
  )

  return response.data
}
