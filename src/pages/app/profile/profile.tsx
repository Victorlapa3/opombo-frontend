import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import profilePic from '../../../assets/Monark.jpg'
import { PublicationCard } from '../feed/publication-card'

export function Profile() {
  return (
    <div className="flex flex-col h-screen p-7 gap-5 ">
      <Card className="border-0">
        <CardHeader className="flex flex-row gap-5 ">
          <img
            src={profilePic}
            alt=""
            className="h-20 w-20 outline outline-offset-2 outline-primary rounded-full"
          />
          <div className="flex flex-col gap-1">
            <CardTitle>Monark</CardTitle>
            <CardDescription>monark@example.com</CardDescription>
          </div>

          <Button className="font-bold ml-auto text-lg h-8 flex rounded-full">
            Editar perfil
          </Button>
        </CardHeader>
      </Card>
      <Separator />
      {Array.from({ length: 15 }).map((_, i) => {
        return <PublicationCard key={i} />
      })}
    </div>
  )
}
