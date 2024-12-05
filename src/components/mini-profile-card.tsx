import profilePic from '../assets/Monark.jpg'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'

export function MiniProfileCard() {
  return (
    <Card className="flex flex-col items-center border-none">
      <CardContent className="flex flex-row items-center gap-4">
        <img
          src={profilePic}
          alt=""
          className="w-16 h-16 rounded-full outline outline-offset-2 outline-primary"
        />
        <div className="flex flex-col">
          <CardTitle className="text-lg">Monark</CardTitle>
          <CardDescription>monark@example.com</CardDescription>
        </div>
      </CardContent>
    </Card>
  )
}
