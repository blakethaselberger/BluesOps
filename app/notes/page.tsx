"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MeetingNotes } from "@/components/notes/meeting-notes"
import { PlayerNotes } from "@/components/notes/player-notes"
import { DraftNotes } from "@/components/notes/draft-notes"
import { Plus } from "lucide-react"
import { Search } from "@/components/ui/search"

export default function NotesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Meeting Notes</h1>
          <p className="text-muted-foreground">Collaborative notes and discussions</p>
        </div>
        <Button className="sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          New Note
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <Search placeholder="Search notes..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="all" className="flex-1 sm:flex-none">
              All Notes
            </TabsTrigger>
            <TabsTrigger value="players" className="flex-1 sm:flex-none">
              Player Notes
            </TabsTrigger>
            <TabsTrigger value="meetings" className="flex-1 sm:flex-none">
              Meeting Notes
            </TabsTrigger>
            <TabsTrigger value="draft" className="flex-1 sm:flex-none">
              Draft Prep
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>All Notes</CardTitle>
                <CardDescription>All notes across categories</CardDescription>
              </CardHeader>
              <CardContent>
                <MeetingNotes searchQuery={searchQuery} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="players" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Player Notes</CardTitle>
                <CardDescription>Notes specific to players</CardDescription>
              </CardHeader>
              <CardContent>
                <PlayerNotes searchQuery={searchQuery} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="meetings" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Meeting Notes</CardTitle>
                <CardDescription>Notes from team meetings</CardDescription>
              </CardHeader>
              <CardContent>
                <MeetingNotes searchQuery={searchQuery} category="meeting" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="draft" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Draft Preparation</CardTitle>
                <CardDescription>Notes related to draft strategy</CardDescription>
              </CardHeader>
              <CardContent>
                <DraftNotes searchQuery={searchQuery} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
