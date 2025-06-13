"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlayerTable } from "@/components/players/player-table"
import { PlayerCards } from "@/components/players/player-cards"
import { Filter, Plus, Users, Grid3X3, List, Target, Search } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function PlayersPage() {
  const [view, setView] = useState<"table" | "cards">("table")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col gap-6 p-6 md:gap-8 md:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Player Database</h1>
          <p className="text-slate-600 text-lg">View and manage player information</p>
        </div>
        <Button className="sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
          <Plus className="mr-2 h-4 w-4" />
          Add Player
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search
              placeholder="Search players..."
              className="border-slate-200/60 bg-white/80 backdrop-blur-sm focus:border-blue-300 focus:ring-blue-200 transition-all duration-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="sm:w-auto border-slate-200/60 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 shadow-soft border-slate-200/60">
              <DropdownMenuLabel className="text-slate-900 font-semibold">Position</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked
                className="hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/50"
              >
                Forward
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked
                className="hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/50"
              >
                Defense
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked
                className="hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/50"
              >
                Goalie
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-slate-900 font-semibold">Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked
                className="hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/50"
              >
                Active
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem className="hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/50">
                Injured
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem className="hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/50">
                Prospect
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center gap-2">
            <Button
              variant={view === "table" ? "default" : "outline"}
              size="icon"
              onClick={() => setView("table")}
              className={
                view === "table"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-sm"
                  : "border-slate-200/60 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50"
              }
            >
              <List className="h-4 w-4" />
              <span className="sr-only">Table view</span>
            </Button>
            <Button
              variant={view === "cards" ? "default" : "outline"}
              size="icon"
              onClick={() => setView("cards")}
              className={
                view === "cards"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-sm"
                  : "border-slate-200/60 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50"
              }
            >
              <Grid3X3 className="h-4 w-4" />
              <span className="sr-only">Card view</span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="tabs-list w-full sm:w-auto">
            <TabsTrigger value="all" className="tab-trigger flex-1 sm:flex-none">
              All Players
            </TabsTrigger>
            <TabsTrigger value="forwards" className="tab-trigger flex-1 sm:flex-none">
              Forwards
            </TabsTrigger>
            <TabsTrigger value="defense" className="tab-trigger flex-1 sm:flex-none">
              Defense
            </TabsTrigger>
            <TabsTrigger value="goalies" className="tab-trigger flex-1 sm:flex-none">
              Goalies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <Card className="gradient-card shadow-soft border-slate-200/60 hover:shadow-glow transition-all duration-200">
              <CardHeader className="pb-4 bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-slate-200/60">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-slate-900">All Players</CardTitle>
                </div>
                <CardDescription className="text-slate-600">Showing all players in the database</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {view === "table" ? (
                  <PlayerTable searchQuery={searchQuery} />
                ) : (
                  <PlayerCards searchQuery={searchQuery} />
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forwards" className="mt-6">
            <Card className="gradient-card shadow-soft border-slate-200/60 hover:shadow-glow transition-all duration-200">
              <CardHeader className="pb-4 bg-gradient-to-r from-emerald-50 to-teal-50/50 border-b border-slate-200/60">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-emerald-600" />
                  <CardTitle className="text-slate-900">Forwards</CardTitle>
                </div>
                <CardDescription className="text-slate-600">Showing all forwards in the database</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {view === "table" ? (
                  <PlayerTable position="Forward" searchQuery={searchQuery} />
                ) : (
                  <PlayerCards position="Forward" searchQuery={searchQuery} />
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="defense" className="mt-6">
            <Card className="gradient-card shadow-soft border-slate-200/60 hover:shadow-glow transition-all duration-200">
              <CardHeader className="pb-4 bg-gradient-to-r from-amber-50 to-orange-50/50 border-b border-slate-200/60">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <CardTitle className="text-slate-900">Defense</CardTitle>
                </div>
                <CardDescription className="text-slate-600">Showing all defensemen in the database</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {view === "table" ? (
                  <PlayerTable position="Defense" searchQuery={searchQuery} />
                ) : (
                  <PlayerCards position="Defense" searchQuery={searchQuery} />
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goalies" className="mt-6">
            <Card className="gradient-card shadow-soft border-slate-200/60 hover:shadow-glow transition-all duration-200">
              <CardHeader className="pb-4 bg-gradient-to-r from-purple-50 to-violet-50/50 border-b border-slate-200/60">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <CardTitle className="text-slate-900">Goalies</CardTitle>
                </div>
                <CardDescription className="text-slate-600">Showing all goalies in the database</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {view === "table" ? (
                  <PlayerTable position="Goalie" searchQuery={searchQuery} />
                ) : (
                  <PlayerCards position="Goalie" searchQuery={searchQuery} />
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
