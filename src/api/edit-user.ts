import { api } from '@/lib/axios'

export interface UpdateUserBody {
  id?: string
  nome: string
  email: string
  cpf: string
  senha: string
}

export async function updateUser({
  id,
  nome,
  email,
  cpf,
  senha,
}: UpdateUserBody) {
  await api.put('/usuarios', {
    id,
    nome,
    email,
    cpf,
    senha,
  })
}
