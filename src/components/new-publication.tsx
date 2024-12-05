import profilePic from '../assets/Monark.jpg'
import { Button } from './ui/button'
import { Card, CardFooter, CardHeader } from './ui/card'
import { Input } from './ui/input'

export function NewPublicationCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-5">
        <img
          src={profilePic}
          alt=""
          className="w-12 h-12 rounded-full outline outline-offset-2 outline-primary"
        />
        <Input
          id="novaPublicacao"
          placeholder="O que está acontencendo?"
          className="w-full h-12 resize-none p-2 border border-gray-300 rounded-full"
        />
      </CardHeader>
      <CardFooter className="flex justify-end gap-6">
        <Button className="bg-primary rounded-full">Postar</Button>
      </CardFooter>
    </Card>
  )
}
