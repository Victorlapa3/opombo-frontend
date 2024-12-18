import { LogOut } from 'lucide-react'
import { createContext, useContext, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { MiniProfileCard } from '@/components/mini-profile-card'
import { SearchAndFilters } from '@/components/search-and-filters'
import { Tab } from '@/components/tab'
import { Button } from '@/components/ui/button'

interface FiltersContextType {
  filters: {
    content: string
    createdAtStart?: string
    createdAtEnd?: string
    isLiked: boolean
  }
  setFilters: React.Dispatch<
    React.SetStateAction<{
      content: string
      createdAtStart?: string
      createdAtEnd?: string
      isLiked: boolean
    }>
  >
}

const FiltersContext = createContext({} as FiltersContextType)

export function AppLayout() {
  const [filters, setFilters] = useState<{
    content: string
    createdAtStart?: string
    createdAtEnd?: string
    isLiked: boolean
  }>({
    content: '',
    createdAtStart: undefined,
    createdAtEnd: undefined,
    isLiked: false,
  })

  const navigate = useNavigate()

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      <div className="grid min-h-screen grid-cols-[1fr_2fr_1fr] px-4 lg:px-32 md:px-20 gap-4">
        <div className="flex flex-col border-r border-foreground/15 p-7 gap-6 sticky top-0 h-screen overflow-y-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <span className="font-bold text-2xl">oPombo</span>
            </div>
          </div>

          <Tab />

          <div className="mt-auto ">
            <MiniProfileCard />
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

        <div className="flex flex-col border-l border-foreground/15 p-7 gap-3 sticky top-0 min-h-screen">
          <SearchAndFilters />
        </div>
      </div>
    </FiltersContext.Provider>
  )
}

export function useFilters() {
  return useContext(FiltersContext)
}
