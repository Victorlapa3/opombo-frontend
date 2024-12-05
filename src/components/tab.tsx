import { HomeIcon, SearchIcon, UserIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Button } from './ui/button'
import { CardContent } from './ui/card'

export function Tab() {
  const navigate = useNavigate()
  return (
    <CardContent className="flex flex-col h-full justify-evenly w-full py-12">
      <Button
        variant="outline"
        className="w-full justify-center h-16 text-xl "
        onClick={() => {
          navigate('/')
        }}
      >
        <HomeIcon />
        <span>Página Inicial</span>
      </Button>

      <Button variant="outline" className="w-full justify-center h-16 text-xl">
        <SearchIcon />
        <span>Explorar</span>
      </Button>

      <Button
        variant="outline"
        className="w-full justify-center h-16 text-xl"
        onClick={() => {
          navigate('/profile')
        }}
      >
        <UserIcon />
        <span>Perfil</span>
      </Button>
    </CardContent>
  )
}
