"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, ChevronDown, ChevronUp, Calendar, MapPin, Target, TrendingUp } from "lucide-react"

interface PlayerFilters {
  position: string
  ageMin: string
  ageMax: string
  status: string
  rating: string
  shoots: string
  team: string
}

interface PlayerFiltersProps {
  filters: PlayerFilters
  setFilters: (filters: PlayerFilters) => void
  isAdvancedOpen: boolean
  setIsAdvancedOpen: (open: boolean) => void
  resetFilters: () => void
}

export function AdvancedPlayerFilters({ 
  filters, 
  setFilters, 
  isAdvancedOpen, 
  setIsAdvancedOpen, 
  resetFilters 
}: PlayerFiltersProps) {
  return (
    <div className="space-y-4">
      <Button
        onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
        variant="outline"
        className="w-full justify-between"
      >
        <span className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Advanced Filters
        </span>
        {isAdvancedOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </Button>

      {isAdvancedOpen && (
        <Card className="gradient-card shadow-soft border-slate-200/60">
          <CardHeader className="pb-4 bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-slate-200/60">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              Player Attributes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Position</Label>
                <Select value={filters.position} onValueChange={(value) => setFilters({ ...filters, position: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Positions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Positions</SelectItem>
                    <SelectItem value="Center">Center</SelectItem>
                    <SelectItem value="Left Wing">Left Wing</SelectItem>
                    <SelectItem value="Right Wing">Right Wing</SelectItem>
                    <SelectItem value="Defense">Defense</SelectItem>
                    <SelectItem value="Goalie">Goalie</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Status</Label>
                <Select value={filters.status} onValueChange={(value) => setFilters({ ...filters, status: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Injured">Injured</SelectItem>
                    <SelectItem value="Prospect">Prospect</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Shoots</Label>
                <Select value={filters.shoots} onValueChange={(value) => setFilters({ ...filters, shoots: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="Left">Left</SelectItem>
                    <SelectItem value="Right">Right</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Age Range
                </Label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="Min"
                    value={filters.ageMin}
                    onChange={(e) => setFilters({ ...filters, ageMin: e.target.value })}
                  />
                  <Input
                    type="number"
                    placeholder="Max"
                    value={filters.ageMax}
                    onChange={(e) => setFilters({ ...filters, ageMax: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Rating
                </Label>
                <Select value={filters.rating} onValueChange={(value) => setFilters({ ...filters, rating: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Ratings" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ratings</SelectItem>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="A">A</SelectItem>
                    <SelectItem value="A-">A-</SelectItem>
                    <SelectItem value="B+">B+</SelectItem>
                    <SelectItem value="B">B</SelectItem>
                    <SelectItem value="B-">B-</SelectItem>
                    <SelectItem value="C+">C+</SelectItem>
                    <SelectItem value="C">C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Team/Organization
              </Label>
              <Input
                placeholder="Search by team name..."
                value={filters.team}
                onChange={(e) => setFilters({ ...filters, team: e.target.value })}
              />
            </div>

            <div className="flex gap-2 pt-4 border-t border-slate-200/60">
              <Button
                onClick={resetFilters}
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                Clear Filters
              </Button>
              <Button
                onClick={() => setIsAdvancedOpen(false)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              >
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
