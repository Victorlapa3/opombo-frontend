import { api } from '@/lib/axios'

export interface ReportPublicationBody {
  // eslint-disable-next-line @typescript-eslint/ban-types
  usuario: {}
  publicacao: {
    id: string
  }
  motivo:
    | 'SPAM'
    | 'DISCURSO_DE_ODIO'
    | 'ASSEDIO_OU_BULLYING'
    | 'GOLPE'
    | 'INFORMACAO_FALSA'
}

export async function reportPublication({
  usuario,
  publicacao,
  motivo,
}: ReportPublicationBody) {
  await api.post('/denuncias', {
    usuario,
    publicacao,
    motivo,
  })
}
