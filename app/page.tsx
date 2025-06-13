import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { TeamOverview } from "@/components/dashboard/team-overview"
import { Button } from "@/components/ui/button"
import {
  PlusCircle,
  Calendar,
  DollarSign,
  ClipboardList,
  MessageSquare,
  TrendingUp,
  Users,
  Trophy,
  Target,
} from "lucide-react"
import { SystemNotes } from "@/components/dashboard/system-notes"

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 p-6 md:gap-8 md:p-8">
      {/* Personalized greeting and quick actions */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
          Good morning, John
        </h1>
        <p className="text-slate-600 text-lg">Here's what's happening with the Blues today</p>
      </div>

      {/* Quick action cards */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Button
          variant="outline"
          className="h-auto flex-col items-start gap-2 p-6 justify-start text-left border-slate-200/60 hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 hover:scale-105 hover:shadow-soft group"
          asChild
        >
          <a href="/scouting/new">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-200">
              <PlusCircle className="h-5 w-5" />
            </div>
            <div className="font-semibold text-slate-900">Add Scouting Report</div>
            <div className="text-xs text-slate-600">Create a new player evaluation</div>
          </a>
        </Button>

        <Button
          variant="outline"
          className="h-auto flex-col items-start gap-2 p-6 justify-start text-left border-slate-200/60 hover:border-emerald-300 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 transition-all duration-200 hover:scale-105 hover:shadow-soft group"
          asChild
        >
          <a href="/players/free-agents">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all duration-200">
              <ClipboardList className="h-5 w-5" />
            </div>
            <div className="font-semibold text-slate-900">View Free Agents</div>
            <div className="text-xs text-slate-600">Upcoming free agents list</div>
          </a>
        </Button>

        <Button
          variant="outline"
          className="h-auto flex-col items-start gap-2 p-6 justify-start text-left border-slate-200/60 hover:border-amber-300 hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50 transition-all duration-200 hover:scale-105 hover:shadow-soft group"
          asChild
        >
          <a href="/analytics/cap">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white group-hover:from-amber-600 group-hover:to-amber-700 transition-all duration-200">
              <DollarSign className="h-5 w-5" />
            </div>
            <div className="font-semibold text-slate-900">Cap Summary</div>
            <div className="text-xs text-slate-600">Current salary cap situation</div>
          </a>
        </Button>

        <Button
          variant="outline"
          className="h-auto flex-col items-start gap-2 p-6 justify-start text-left border-slate-200/60 hover:border-purple-300 hover:bg-gradient-to-br hover:from-purple-50 hover:to-violet-50 transition-all duration-200 hover:scale-105 hover:shadow-soft group"
          asChild
        >
          <a href="/notes/schedule">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white group-hover:from-purple-600 group-hover:to-purple-700 transition-all duration-200">
              <Calendar className="h-5 w-5" />
            </div>
            <div className="font-semibold text-slate-900">Schedule Meeting</div>
            <div className="text-xs text-slate-600">Set up internal team meeting</div>
          </a>
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="tabs-list">
          <TabsTrigger value="overview" className="tab-trigger">
            Overview
          </TabsTrigger>
          <TabsTrigger value="analytics" className="tab-trigger">
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" className="tab-trigger">
            Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="metric-card shadow-soft hover:shadow-glow transition-all duration-200 hover:scale-105 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-600">Total Players</p>
                    <div className="text-3xl font-bold text-slate-900">42</div>
                    <p className="text-xs text-emerald-600 font-medium">+2 from last month</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-200">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="metric-card shadow-soft hover:shadow-glow transition-all duration-200 hover:scale-105 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-600">Scouting Reports</p>
                    <div className="text-3xl font-bold text-slate-900">128</div>
                    <p className="text-xs text-emerald-600 font-medium">+14 from last month</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all duration-200">
                    <Target className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="metric-card shadow-soft hover:shadow-glow transition-all duration-200 hover:scale-105 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-600">Upcoming Games</p>
                    <div className="text-3xl font-bold text-slate-900">6</div>
                    <p className="text-xs text-slate-600">Next: Chicago Blackhawks</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white group-hover:from-amber-600 group-hover:to-amber-700 transition-all duration-200">
                    <Calendar className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="metric-card shadow-soft hover:shadow-glow transition-all duration-200 hover:scale-105 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-600">Team Rating</p>
                    <div className="text-3xl font-bold text-slate-900">A-</div>
                    <p className="text-xs text-emerald-600 font-medium">+2 points from last month</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white group-hover:from-purple-600 group-hover:to-purple-700 transition-all duration-200">
                    <Trophy className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 gradient-card shadow-soft border-slate-200/60 hover:shadow-glow transition-all duration-200">
              <CardContent className="p-6">
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-slate-900">Team Overview</h3>
                  </div>
                  <p className="text-sm text-slate-600">Performance metrics for the current season</p>
                </div>
                <div className="h-[350px]">
                  <TeamOverview />
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3 gradient-card shadow-soft border-slate-200/60 hover:shadow-glow transition-all duration-200">
              <CardContent className="p-6">
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-emerald-600" />
                    <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
                  </div>
                  <p className="text-sm text-slate-600">Latest updates and changes</p>
                </div>
                <div>
                  <RecentActivity />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System-wide notes feed */}
          <Card className="gradient-card shadow-soft border-slate-200/60 hover:shadow-glow transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-slate-900">System Notes</h3>
                  </div>
                  <p className="text-sm text-slate-600">Team-wide communication and updates</p>
                </div>
                <Button
                  size="sm"
                  className="gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  New Note
                </Button>
              </div>
              <SystemNotes />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card className="gradient-card shadow-soft border-slate-200/60">
            <CardContent className="p-6">
              <div className="space-y-2 mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Analytics Dashboard</h3>
                <p className="text-sm text-slate-600">Detailed team and player analytics</p>
              </div>
              <div className="h-96 flex items-center justify-center border-t border-slate-200/60 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-lg">
                <p className="text-slate-500">Analytics content will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card className="gradient-card shadow-soft border-slate-200/60">
            <CardContent className="p-6">
              <div className="space-y-2 mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Reports</h3>
                <p className="text-sm text-slate-600">Generated reports and summaries</p>
              </div>
              <div className="h-96 flex items-center justify-center border-t border-slate-200/60 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-lg">
                <p className="text-slate-500">Reports content will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
