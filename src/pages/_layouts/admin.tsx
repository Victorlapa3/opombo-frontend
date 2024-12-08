import { Filter, LogOut } from 'lucide-react'
import { createContext, useContext, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { ComplaintFiltersDialog } from '@/components/complaint-filter-dialog'
import { MiniProfileCard } from '@/components/mini-profile-card'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

interface ComplaintFiltersContextType {
  complaintFilters: {
    motivo?:
      | 'SPAM'
      | 'DISCURSO_DE_ODIO'
      | 'ASSEDIO_OU_BULLYING'
      | 'GOLPE'
      | 'INFORMACAO_FALSA'
    situacao: 'PENDENTE' | 'ACEITADA' | 'RECUSADA'
    criadoEmInicio?: string
    criadoEmFim?: string
  }
  setComplaintFilters: React.Dispatch<
    React.SetStateAction<{
      motivo?:
        | 'SPAM'
        | 'DISCURSO_DE_ODIO'
        | 'ASSEDIO_OU_BULLYING'
        | 'GOLPE'
        | 'INFORMACAO_FALSA'
      situacao: 'PENDENTE' | 'ACEITADA' | 'RECUSADA'
      criadoEmInicio?: string
      criadoEmFim?: string
    }>
  >
}

const ComplaintFiltersContext = createContext({} as ComplaintFiltersContextType)

export function AdminLayout() {
  const [complaintFilters, setComplaintFilters] = useState<{
    motivo?:
      | 'SPAM'
      | 'DISCURSO_DE_ODIO'
      | 'ASSEDIO_OU_BULLYING'
      | 'GOLPE'
      | 'INFORMACAO_FALSA'
    situacao: 'PENDENTE' | 'ACEITADA' | 'RECUSADA'
    criadoEmInicio?: string
    criadoEmFim?: string
  }>({
    motivo: undefined,
    situacao: 'PENDENTE',
    criadoEmInicio: undefined,
    criadoEmFim: undefined,
  })

  const navigate = useNavigate()

  return (
    <ComplaintFiltersContext.Provider
      value={{ complaintFilters, setComplaintFilters }}
    >
      <div className="grid min-h-screen grid-cols-[auto_1fr] px-4 lg:px-32 md:px-20 gap-4">
        <div className="flex flex-col border-r border-foreground/15 p-7 gap-6 sticky top-0 h-screen overflow-y-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <span className="font-bold text-2xl">oPombo - Administrador</span>
            </div>
          </div>

          <div className="mt-5">
            <MiniProfileCard />
          </div>
          <div className="flex w-full justify-between gap-2">
            <div className="w-full">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="w-full">
                    <Filter />
                    Filtros
                  </Button>
                </DialogTrigger>

                <ComplaintFiltersDialog />
              </Dialog>
            </div>
            <div>
              <ThemeToggle />
            </div>
          </div>
          <a href="/sign-in">
            <div className="mt-auto">
              <Button
                variant="secondary"
                className="w-full rounded-full text-rose-500 "
                onClick={() => {
                  localStorage.removeItem('pombo-auth-token')
                  navigate('/sign-in')
                }}
              >
                <LogOut />
                <span className="">Sair</span>
              </Button>
            </div>
          </a>
        </div>

        <div className="overflow-y-auto scrollbar-hide mb-7">
          <Outlet />
        </div>
      </div>
    </ComplaintFiltersContext.Provider>
  )
}

export function useComplaintFilters() {
  return useContext(ComplaintFiltersContext)
}
