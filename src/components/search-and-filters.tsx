import { Filter } from 'lucide-react'

import { FiltersDialog } from './filters-dialog'
import { ThemeToggle } from './theme/theme-toggle'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'

export function SearchAndFilters() {
  return (
    <div className="flex w-full justify-between gap-2">
      <div className="w-full">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="w-full">
              <Filter />
              Filtros
            </Button>
          </DialogTrigger>

          <FiltersDialog />
        </Dialog>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  )
}
