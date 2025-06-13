import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { Player } from "@/data/players-data"

interface PlayerTableEnhancedProps {
  players: Player[]
}

export function PlayerTableEnhanced({ players }: PlayerTableEnhancedProps) {
  return (
    <div className="rounded-lg border border-slate-200/60 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-slate-50 to-blue-50/50">
            <TableHead className="w-12">#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id} className="hover:bg-blue-50/30 transition-colors">
              <TableCell className="font-medium">{player.number}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`/players/${player.name.toLowerCase().replace(' ', '-')}.jpg`} />
                    <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                      {player.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{player.name}</div>
                    <div className="text-xs text-slate-500">{player.birthplace}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="border-blue-200 text-blue-700 text-xs">
                  {player.position}
                </Badge>
              </TableCell>
              <TableCell className="text-sm">{player.age}</TableCell>
              <TableCell className="text-sm">{player.team}</TableCell>
              <TableCell>
                <Badge
                  variant={player.status === "Active" ? "default" : "secondary"}
                  className={cn(
                    "text-xs",
                    player.status === "Active" && "bg-green-100 text-green-800 border-green-200",
                    player.status === "Prospect" && "bg-blue-100 text-blue-800 border-blue-200"
                  )}
                >
                  {player.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={cn(
                    "font-semibold text-xs",
                    player.rating.startsWith('A') && "border-green-300 text-green-700 bg-green-50",
                    player.rating.startsWith('B') && "border-blue-300 text-blue-700 bg-blue-50",
                    player.rating.startsWith('C') && "border-orange-300 text-orange-700 bg-orange-50"
                  )}
                >
                  {player.rating}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="shadow-soft border-slate-200/60">
                    <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/50">
                      View Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/50">
                      Edit Player
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/50">
                      View Stats
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {players.length === 0 && (
        <div className="text-center py-8 text-slate-500">
          No players found matching your criteria
        </div>
      )}
    </div>
  )
}
