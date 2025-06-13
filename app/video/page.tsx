"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { EnhancedCard, EnhancedCardContent, EnhancedCardHeader, EnhancedCardTitle } from "@/components/ui/enhanced-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Video,
  Search,
  Play,
  Clock,
  MessageCircle,
  Share,
  Download,
  Bookmark,
  Grid3X3,
  List,
  Calendar,
  Users,
  MoreHorizontal,
  Upload,
  Eye,
  Star
} from "lucide-react"
import Link from "next/link"

interface VideoItem {
  id: string
  title: string
  thumbnail: string
  duration: string
  date: string
  league: string
  teams: string
  gameType: string
  tags: string[]
  views: number
  comments: number
  isBookmarked: boolean
  uploadedBy: string
}

const videoLibrary: VideoItem[] = [
  {
    id: "1",
    title: "Blues vs. Blackhawks - Game Highlights",
    thumbnail: "/api/placeholder/400/225",
    duration: "10:24",
    date: "March 15, 2024",
    league: "NHL",
    teams: "STL vs CHI",
    gameType: "Regular Season",
    tags: ["Game", "Highlights", "Power Play"],
    views: 156,
    comments: 12,
    isBookmarked: true,
    uploadedBy: "Coach Johnson"
  },
  {
    id: "2",
    title: "Player Analysis: Jordan Binnington",
    thumbnail: "/api/placeholder/400/225",
    duration: "8:15",
    date: "March 12, 2024",
    league: "NHL",
    teams: "STL",
    gameType: "Analysis",
    tags: ["Analysis", "Goalie", "Individual"],
    views: 89,
    comments: 7,
    isBookmarked: false,
    uploadedBy: "Sarah Johnson"
  },
  {
    id: "3",
    title: "Power Play Breakdown",
    thumbnail: "/api/placeholder/400/225",
    duration: "12:37",
    date: "March 10, 2024",
    league: "NHL",
    teams: "STL",
    gameType: "Tactical",
    tags: ["Power Play", "Tactics", "Breakdown"],
    views: 234,
    comments: 18,
    isBookmarked: true,
    uploadedBy: "Mike Wilson"
  },
  {
    id: "4",
    title: "Defensive Zone Coverage",
    thumbnail: "/api/placeholder/400/225",
    duration: "15:42",
    date: "March 8, 2024",
    league: "NHL",
    teams: "STL",
    gameType: "Training",
    tags: ["Defense", "Zone Coverage", "Training"],
    views: 198,
    comments: 15,
    isBookmarked: false,
    uploadedBy: "David Park"
  },
  {
    id: "5",
    title: "Rookie Development Session",
    thumbnail: "/api/placeholder/400/225",
    duration: "18:33",
    date: "March 5, 2024",
    league: "AHL",
    teams: "Springfield Thunderbirds",
    gameType: "Development",
    tags: ["Rookies", "Development", "Skills"],
    views: 67,
    comments: 4,
    isBookmarked: false,
    uploadedBy: "Lisa Wong"
  },
  {
    id: "6",
    title: "Special Teams Analysis",
    thumbnail: "/api/placeholder/400/225",
    duration: "14:28",
    date: "March 3, 2024",
    league: "NHL",
    teams: "STL",
    gameType: "Analysis",
    tags: ["Special Teams", "PK", "Analysis"],
    views: 145,
    comments: 9,
    isBookmarked: true,
    uploadedBy: "Alex Thompson"
  }
]

export default function VideoAnalysisPage() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLeague, setSelectedLeague] = useState("all")
  const [selectedGameType, setSelectedGameType] = useState("all")
  const [selectedTab, setSelectedTab] = useState("all")

  const filteredVideos = videoLibrary.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesLeague = selectedLeague === "all" || video.league === selectedLeague
    const matchesGameType = selectedGameType === "all" || video.gameType === selectedGameType
    const matchesTab = selectedTab === "all" ||
      (selectedTab === "bookmarked" && video.isBookmarked) ||
      (selectedTab === "my-videos" && video.uploadedBy.includes("Johnson"))

    return matchesSearch && matchesLeague && matchesGameType && matchesTab
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-white to-blue-50/30 rounded-xl p-6 shadow-soft border border-slate-200/60">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Video Analysis</h1>
            <p className="text-slate-600">Professional video analysis and game footage library</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
            <Upload className="mr-2 h-4 w-4" />
            Upload Video
          </Button>
        </div>
      </div>

      {/* Filters & Search */}
      <EnhancedCard>
        <EnhancedCardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search */}
            <div className="md:col-span-4">
              <Label htmlFor="search" className="text-sm font-medium text-slate-700 mb-2 block">
                Search Videos
              </Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  id="search"
                  placeholder="Search by title, tags, or teams..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* League Filter */}
            <div className="md:col-span-2">
              <Label className="text-sm font-medium text-slate-700 mb-2 block">League</Label>
              <Select value={selectedLeague} onValueChange={setSelectedLeague}>
                <SelectTrigger>
                  <SelectValue placeholder="All Leagues" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Leagues</SelectItem>
                  <SelectItem value="NHL">NHL</SelectItem>
                  <SelectItem value="AHL">AHL</SelectItem>
                  <SelectItem value="ECHL">ECHL</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Game Type Filter */}
            <div className="md:col-span-2">
              <Label className="text-sm font-medium text-slate-700 mb-2 block">Type</Label>
              <Select value={selectedGameType} onValueChange={setSelectedGameType}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Regular Season">Regular Season</SelectItem>
                  <SelectItem value="Playoffs">Playoffs</SelectItem>
                  <SelectItem value="Analysis">Analysis</SelectItem>
                  <SelectItem value="Training">Training</SelectItem>
                  <SelectItem value="Development">Development</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date Range */}
            <div className="md:col-span-2">
              <Label className="text-sm font-medium text-slate-700 mb-2 block">Date Range</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="All Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="week">Last Week</SelectItem>
                  <SelectItem value="month">Last Month</SelectItem>
                  <SelectItem value="season">This Season</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Toggle */}
            <div className="md:col-span-2 flex items-end justify-end gap-2">
              <Button
                variant={view === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setView("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={view === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setView("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </EnhancedCardContent>
      </EnhancedCard>

      {/* Content Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 md:w-auto md:grid-cols-none md:flex gap-1">
          <TabsTrigger value="all" className="text-xs md:text-sm px-2 md:px-4">
            <Video className="mr-2 h-4 w-4" />
            All Videos
          </TabsTrigger>
          <TabsTrigger value="bookmarked" className="text-xs md:text-sm px-2 md:px-4">
            <Bookmark className="mr-2 h-4 w-4" />
            Bookmarked
          </TabsTrigger>
          <TabsTrigger value="my-videos" className="text-xs md:text-sm px-2 md:px-4">
            <Users className="mr-2 h-4 w-4" />
            My Videos
          </TabsTrigger>
          <TabsTrigger value="shared" className="text-xs md:text-sm px-2 md:px-4">
            <Share className="mr-2 h-4 w-4" />
            Shared
          </TabsTrigger>
          <TabsTrigger value="recent" className="text-xs md:text-sm px-2 md:px-4">
            <Clock className="mr-2 h-4 w-4" />
            Recent
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="mt-6">
          <EnhancedCard variant="elevated">
            <EnhancedCardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <EnhancedCardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-blue-600" />
                    Video Library
                    <Badge variant="secondary" className="ml-2">
                      {filteredVideos.length} videos
                    </Badge>
                  </EnhancedCardTitle>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Sort by Date
                      <MoreHorizontal className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Date (Newest)</DropdownMenuItem>
                    <DropdownMenuItem>Date (Oldest)</DropdownMenuItem>
                    <DropdownMenuItem>Most Viewed</DropdownMenuItem>
                    <DropdownMenuItem>Duration</DropdownMenuItem>
                    <DropdownMenuItem>Title (A-Z)</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </EnhancedCardHeader>
            <EnhancedCardContent className="p-6">
              {view === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVideos.map((video) => (
                    <Link key={video.id} href={`/video/${video.id}`}>
                      <div className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-lg bg-slate-200 aspect-video mb-3 hover:shadow-lg transition-all duration-200">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded z-20">
                            {video.duration}
                          </div>
                          <div className="absolute top-2 left-2 z-20">
                            <Badge
                              className={`text-xs ${video.gameType === 'Analysis' ? 'bg-blue-500' :
                                  video.gameType === 'Training' ? 'bg-green-500' :
                                    video.gameType === 'Development' ? 'bg-purple-500' :
                                      'bg-orange-500'
                                }`}
                            >
                              {video.gameType}
                            </Badge>
                          </div>
                          {video.isBookmarked && (
                            <div className="absolute top-2 right-2 z-20">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            </div>
                          )}
                          <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-all duration-200">
                              <Play className="h-6 w-6 text-white fill-current" />
                            </div>
                          </div>
                          <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400" />
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-semibold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {video.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Calendar className="h-3 w-3" />
                            {video.date}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Users className="h-3 w-3" />
                            {video.teams}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {video.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {video.tags.length > 2 && (
                              <Badge variant="secondary" className="text-xs">
                                +{video.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center justify-between text-xs text-slate-500">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {video.views}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageCircle className="h-3 w-3" />
                                {video.comments}
                              </span>
                            </div>
                            <span>by {video.uploadedBy}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredVideos.map((video) => (
                    <Link key={video.id} href={`/video/${video.id}`}>
                      <div className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer group">
                        <div className="relative w-32 h-18 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="h-6 w-6 text-slate-600" />
                          </div>
                          <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                            {video.duration}
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {video.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-slate-600 mt-1">
                            <span>{video.date}</span>
                            <span>{video.teams}</span>
                            <Badge variant="secondary" className="text-xs">
                              {video.gameType}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {video.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {video.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            {video.comments}
                          </span>
                          {video.isBookmarked && (
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          )}
                        </div>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Play className="mr-2 h-4 w-4" />
                              Play Video
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Bookmark className="mr-2 h-4 w-4" />
                              {video.isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Share className="mr-2 h-4 w-4" />
                              Share
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </EnhancedCardContent>
          </EnhancedCard>
        </TabsContent>
      </Tabs>
    </div>
  )
}
