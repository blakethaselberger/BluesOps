"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, List, Grid, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { AdvancedPlayerFilters } from "@/components/players/player-filters"
import { PlayerTableEnhanced } from "@/components/players/player-table-enhanced"
import { players, getLeagueIcon, type Player } from "@/data/players-data"

export default function PlayersPage() {
  const [viewMode, setViewMode] = useState<"table" | "cards">("table")
  const [searchTerm, setSearchTerm] = useState("")
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)

  // Advanced filter states
  const [filters, setFilters] = useState({
    position: "all",
    ageMin: "",
    ageMax: "",
    status: "all",
    rating: "all",
    shoots: "all",
    team: "",
  })

  // Group players by league
  const playersByLeague = (players || []).reduce((acc, player) => {
    if (!acc[player.league]) {
      acc[player.league] = []
    }
    acc[player.league].push(player)
    return acc
  }, {} as Record<string, Player[]>)

  const resetFilters = () => {
    setFilters({
      position: "all",
      ageMin: "",
      ageMax: "",
      status: "all",
      rating: "all",
      shoots: "all",
      team: "",
    })
    setSearchTerm("")
  }

  const filterPlayers = (leaguePlayers: Player[]) => {
    return leaguePlayers.filter(player => {
      // Basic search
      const matchesSearch = searchTerm === "" ||
        player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.birthplace.toLowerCase().includes(searchTerm.toLowerCase())

      // Advanced filters
      const matchesPosition = filters.position === "all" || player.position === filters.position
      const matchesAge = (!filters.ageMin || player.age >= parseInt(filters.ageMin)) &&
        (!filters.ageMax || player.age <= parseInt(filters.ageMax))
      const matchesStatus = filters.status === "all" || player.status === filters.status
      const matchesRating = filters.rating === "all" || player.rating === filters.rating
      const matchesShoots = filters.shoots === "all" || player.shoots === filters.shoots
      const matchesTeam = !filters.team || player.team.toLowerCase().includes(filters.team.toLowerCase())

      return matchesSearch && matchesPosition && matchesAge && matchesStatus && matchesRating && matchesShoots && matchesTeam
    })
  }

  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900">Player Database</h1>
          <p className="text-slate-600 text-sm md:text-base lg:text-lg">View and manage player information across all leagues</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex border border-slate-200 rounded-lg p-1">
            <Button
              variant={viewMode === "table" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("table")}
              className={cn(
                "h-8 px-3",
                viewMode === "table" && "bg-blue-600 text-white"
              )}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "cards" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("cards")}
              className={cn(
                "h-8 px-3",
                viewMode === "cards" && "bg-blue-600 text-white"
              )}
            >
              <Grid className="h-4 w-4" />
            </Button>
          </div>
          <Button className="sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 h-11 touch-target">
            <Plus className="mr-2 h-4 w-4" />
            Add Player
          </Button>
        </div>
      </div>

      {/* Search and Advanced Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search players by name, team, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-slate-200/60 bg-white/80 backdrop-blur-sm focus:border-blue-300 focus:ring-blue-200 transition-all duration-200"
          />
        </div>

        <AdvancedPlayerFilters
          filters={filters}
          setFilters={setFilters}
          isAdvancedOpen={isAdvancedOpen}
          setIsAdvancedOpen={setIsAdvancedOpen}
          resetFilters={resetFilters}
        />
      </div>

      <Tabs defaultValue="NHL" className="space-y-4 md:space-y-6">
        <div className="bg-white rounded-lg p-1 shadow-sm border overflow-hidden">
          <TabsList className="w-full h-auto gap-1 bg-transparent grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            {Object.keys(playersByLeague).map((league) => (
              <TabsTrigger
                key={league}
                value={league}
                className="tab-trigger data-[state=active]:bg-blue-50 data-[state=active]:text-primary data-[state=active]:font-semibold data-[state=active]:shadow-none rounded-md py-2 font-medium text-xs md:text-sm lg:col-span-1"
              >
                <span className="flex items-center gap-2">
                  <span>{getLeagueIcon(league)}</span>
                  <span className="font-medium">{league}</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                    {filterPlayers(playersByLeague[league]).length}
                  </Badge>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {Object.entries(playersByLeague).map(([league, leaguePlayers]) => (
          <TabsContent key={league} value={league} className="mt-4 md:mt-6">
            <Card className="gradient-card shadow-soft border-slate-200/60 hover:shadow-glow transition-all duration-200">
              <CardHeader className="pb-4 bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-slate-200/60 p-4 md:p-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{getLeagueIcon(league)}</span>
                  <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  <CardTitle className="text-slate-900 text-base md:text-lg">{league} Players</CardTitle>
                </div>
                <p className="text-slate-600 text-xs md:text-sm">
                  Showing {filterPlayers(leaguePlayers).length} of {leaguePlayers.length} players
                </p>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <PlayerTableEnhanced players={filterPlayers(leaguePlayers)} />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

