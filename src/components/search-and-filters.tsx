import { Search, SlidersHorizontal } from 'lucide-react'

import { ThemeToggle } from './theme/theme-toggle'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function SearchAndFilters() {
  return (
    <>
      <div className="flex w-full gap-2">
        <div className="flex flex-row items-center border rounded-lg w-full">
          <Search className="mx-3 text text-muted-foreground" />
          <Input placeholder="Buscar" className="border-none w-full" />
        </div>

        <div>
          <ThemeToggle />
        </div>
      </div>

      <div className="w-full">
        <Button variant="secondary" className="w-full">
          <SlidersHorizontal />
          Filtros
        </Button>
      </div>
    </>
  )
}
