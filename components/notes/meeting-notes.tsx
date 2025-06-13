import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"

interface MeetingNotesProps {
  searchQuery?: string
  category?: string
}

const notes = [
  {
    id: 1,
    title: "Pre-Game Strategy Meeting - Chicago Blackhawks",
    content:
      "Discussed defensive strategies against Chicago's top line. Need to focus on limiting their zone entries and maintaining pressure in the neutral zone.",
    author: "Coach Johnson",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "CJ",
    date: "March 12, 2024",
    category: "meeting",
    tags: ["Strategy", "Pre-Game"],
  },
  {
    id: 2,
    title: "Player Development - Robert Thomas",
    content:
      "Robert has shown significant improvement in faceoff percentage. Working on his defensive positioning in the defensive zone.",
    author: "Skills Coach Davis",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SD",
    date: "March 10, 2024",
    category: "player",
    tags: ["Development", "Forward"],
  },
  {
    id: 3,
    title: "Draft Strategy Meeting",
    content:
      "Identified key prospects to target in the upcoming draft. Focus on defensemen with strong skating abilities and offensive upside.",
    author: "GM Smith",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "GS",
    date: "March 8, 2024",
    category: "draft",
    tags: ["Draft", "Strategy"],
  },
  {
    id: 4,
    title: "Post-Game Analysis - Minnesota Wild",
    content:
      "Reviewed game footage against Minnesota. Power play needs improvement - too static and predictable. Penalty kill was effective.",
    author: "Video Coach Wilson",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "VW",
    date: "March 5, 2024",
    category: "meeting",
    tags: ["Analysis", "Post-Game"],
  },
  {
    id: 5,
    title: "Goaltending Review - Jordan Binnington",
    content:
      "Jordan has been showing excellent positioning and rebound control. Working on puck handling behind the net to improve transitions.",
    author: "Goalie Coach Martinez",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "GM",
    date: "March 3, 2024",
    category: "player",
    tags: ["Goaltending", "Development"],
  },
]

export function MeetingNotes({ searchQuery = "", category }: MeetingNotesProps) {
  const filteredNotes = notes
    .filter((note) => !category || note.category === category)
    .filter(
      (note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.author.toLowerCase().includes(searchQuery.toLowerCase()),
    )

  return (
    <div className="space-y-4">
      {filteredNotes.map((note) => (
        <Card key={note.id}>
          <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
            <div>
              <h3 className="font-semibold">{note.title}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{note.date}</span>
                <span>•</span>
                <span>{note.author}</span>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Actions</span>
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{note.content}</p>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div className="flex gap-2">
              {note.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={note.avatar || "/placeholder.svg"} alt={note.author} />
                <AvatarFallback>{note.initials}</AvatarFallback>
              </Avatar>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
