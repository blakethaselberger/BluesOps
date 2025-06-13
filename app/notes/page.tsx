"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EnhancedCard, EnhancedCardContent, EnhancedCardHeader, EnhancedCardTitle } from "@/components/ui/enhanced-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MeetingNotes } from "@/components/notes/meeting-notes"
import { MeetingNotesDialog } from "@/components/notes/meeting-notes-dialog"
import { PlayerNotes } from "@/components/notes/player-notes"
import { DraftNotes } from "@/components/notes/draft-notes"
import { Plus } from "lucide-react"
import { Search } from "@/components/ui/search"

export default function NotesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
      <div className="flex flex-col gap-3 md:gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">Meeting Notes</h1>
          <p className="text-slate-600 text-sm md:text-base">Collaborative notes and discussions</p>
        </div>
        <MeetingNotesDialog mode="add">
          <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 h-10 md:h-11">
            <Plus className="mr-2 h-4 w-4" />
            <span className="text-sm md:text-base">New Note</span>
          </Button>
        </MeetingNotesDialog>
      </div>
      <div className="flex flex-col gap-4">
        <Search
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-10 md:h-11"
        />
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:w-auto md:grid-cols-none md:flex gap-1">
            <TabsTrigger value="all" className="text-xs md:text-sm px-2 md:px-4">
              All Notes
            </TabsTrigger>
            <TabsTrigger value="players" className="text-xs md:text-sm px-2 md:px-4">
              Player Notes
            </TabsTrigger>
            <TabsTrigger value="meetings" className="text-xs md:text-sm px-2 md:px-4">
              Meeting Notes
            </TabsTrigger>
            <TabsTrigger value="draft" className="text-xs md:text-sm px-2 md:px-4">
              Draft Prep
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <Card>
              <CardHeader className="pb-2 p-4 md:p-6">
                <CardTitle className="text-base md:text-lg">All Notes</CardTitle>
                <CardDescription className="text-xs md:text-sm">All notes across categories</CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <MeetingNotes searchQuery={searchQuery} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="players" className="mt-4">
            <Card>
              <CardHeader className="pb-2 p-4 md:p-6">
                <CardTitle className="text-base md:text-lg">Player Notes</CardTitle>
                <CardDescription className="text-xs md:text-sm">Notes specific to players</CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <PlayerNotes searchQuery={searchQuery} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="meetings" className="mt-4">
            <Card>
              <CardHeader className="pb-2 p-4 md:p-6">
                <CardTitle className="text-base md:text-lg">Meeting Notes</CardTitle>
                <CardDescription className="text-xs md:text-sm">Notes from team meetings</CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <MeetingNotes searchQuery={searchQuery} category="meeting" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="draft" className="mt-4">
            <Card>
              <CardHeader className="pb-2 p-4 md:p-6">
                <CardTitle className="text-base md:text-lg">Draft Preparation</CardTitle>
                <CardDescription className="text-xs md:text-sm">Notes related to draft strategy</CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <DraftNotes searchQuery={searchQuery} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
