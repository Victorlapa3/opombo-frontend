import { Filter } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useFilters } from '@/pages/_layouts/app'

import { Button } from './ui/button'
import { DatePicker } from './ui/date-picker'
import { DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

const filtersFormSchema = z.object({
  content: z.string(),
  createdAtStart: z.string(),
  createdAtEnd: z.string(),
  isLiked: z.boolean(),
})

type FilterForm = z.infer<typeof filtersFormSchema>

export function FiltersDialog() {
  const { setFilters } = useFilters()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
  } = useForm<FilterForm>({
    defaultValues: {
      isLiked: false,
    },
  })

  async function handleSetFilters(data: FilterForm) {
    // console.log('Filters submitted:', data)
    setFilters(data)
  }

  return (
    <DialogContent className="max-w-lg mx-auto">
      <DialogHeader>
        <DialogTitle>Filtros</DialogTitle>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleSetFilters)} className="space-y-4">
        <div className="flex flex-col gap-5">
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="created-at-start">Data de criação (inicio)</Label>
            <DatePicker
              value={
                watch('createdAtStart')
                  ? new Date(watch('createdAtStart'))
                  : undefined
              }
              onChange={(date) =>
                setValue('createdAtStart', date ? date.toISOString() : '')
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="created-at-end">Data de criação (final)</Label>
            <DatePicker
              value={
                watch('createdAtEnd')
                  ? new Date(watch('createdAtEnd'))
                  : undefined
              }
              onChange={(date) =>
                setValue('createdAtEnd', date ? date.toISOString() : '')
              }
            />
          </div>
        </div>
        <div className="flex w-full gap-5">
          <div className="flex flex-col gap-2 w-full">
            <Label>Conteúdo</Label>
            <Input
              placeholder="Texto do pruu"
              className="resize-none"
              id="content"
              {...register('content')}
            />
          </div>
        </div>
        <Button
          disabled={isSubmitting}
          className="w-full bg-primary"
          type="submit"
        >
          <Filter />
          Filtrar
        </Button>
      </form>
    </DialogContent>
  )
}
