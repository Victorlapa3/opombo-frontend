import { api } from '@/lib/axios'

export interface CreateUserBody {
  nome: string
  email: string
  cpf: string
  senha: string
}

export async function createUser({ nome, email, cpf, senha }: CreateUserBody) {
  await api.post('/auth/registrar', {
    nome,
    email,
    cpf,
    senha,
  })
}
