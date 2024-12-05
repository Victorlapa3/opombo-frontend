import { api } from '@/lib/axios'

export interface Usuario {
  id: string
  nome: string
  email: string
  fotoPerfil: string | null
  criadoEm: string
}

export async function getAuthenticatedUser() {
  const response = await api.get<Usuario>('/usuarios/authenticated')

  return response.data
}
