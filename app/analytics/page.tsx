import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EnhancedCard, EnhancedCardContent, EnhancedCardHeader, EnhancedCardTitle } from "@/components/ui/enhanced-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeamPerformance } from "@/components/analytics/team-performance"
import { PlayerComparison } from "@/components/analytics/player-comparison"
import { GoalieStats } from "@/components/analytics/goalie-stats"
import { AdvancedMetrics } from "@/components/analytics/advanced-metrics"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">Analytics Hub</h1>
          <p className="text-slate-600 text-sm md:text-base">Advanced statistics and performance metrics</p>
        </div>
      </div>
      <Tabs defaultValue="team" className="space-y-4">
        <div className="bg-white rounded-lg p-1 shadow-sm border">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto gap-1 md:gap-2 bg-transparent">
            <TabsTrigger
              value="team"
              className="data-[state=active]:bg-blue-50 data-[state=active]:text-primary data-[state=active]:font-semibold data-[state=active]:shadow-none rounded-md py-2 md:py-3 font-medium text-xs md:text-sm"
            >
              <span className="md:hidden">Team</span>
              <span className="hidden md:inline">Team Performance</span>
            </TabsTrigger>
            <TabsTrigger
              value="players"
              className="data-[state=active]:bg-blue-50 data-[state=active]:text-primary data-[state=active]:font-semibold data-[state=active]:shadow-none rounded-md py-2 md:py-3 font-medium text-xs md:text-sm"
            >
              <span className="md:hidden">Players</span>
              <span className="hidden md:inline">Player Comparison</span>
            </TabsTrigger>
            <TabsTrigger
              value="goalies"
              className="data-[state=active]:bg-blue-50 data-[state=active]:text-primary data-[state=active]:font-semibold data-[state=active]:shadow-none rounded-md py-2 md:py-3 font-medium text-xs md:text-sm"
            >
              <span className="md:hidden">Goalies</span>
              <span className="hidden md:inline">Goalie Stats</span>
            </TabsTrigger>
            <TabsTrigger
              value="advanced"
              className="data-[state=active]:bg-blue-50 data-[state=active]:text-primary data-[state=active]:font-semibold data-[state=active]:shadow-none rounded-md py-2 md:py-3 font-medium text-xs md:text-sm"
            >
              <span className="md:hidden">Advanced</span>
              <span className="hidden md:inline">Advanced Metrics</span>
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="team" className="space-y-4">
          <Card className="border-none shadow-sm bg-white">
            <CardHeader className="bg-gradient-to-b from-slate-50 to-white pb-4 p-4 md:p-6">
              <CardTitle className="text-base md:text-xl font-bold text-primary">Team Performance</CardTitle>
              <CardDescription className="text-gray-800 font-medium text-xs md:text-sm">
                Key performance indicators for the current season
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 md:pl-2">
              <TeamPerformance />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="players" className="space-y-4">
          <Card className="border-none shadow-sm bg-white">
            <CardHeader className="bg-gradient-to-b from-slate-50 to-white pb-4 p-4 md:p-6">
              <CardTitle className="text-base md:text-xl font-bold text-primary">Player Comparison</CardTitle>
              <CardDescription className="text-gray-800 font-medium text-xs md:text-sm">
                Compare statistics between players
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 md:pl-2">
              <PlayerComparison />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="goalies" className="space-y-4">
          <Card className="border-none shadow-sm bg-white">
            <CardHeader className="bg-gradient-to-b from-slate-50 to-white pb-4 p-4 md:p-6">
              <CardTitle className="text-base md:text-xl font-bold text-primary">Goalie Statistics</CardTitle>
              <CardDescription className="text-gray-800 font-medium text-xs md:text-sm">Detailed goaltending metrics</CardDescription>
            </CardHeader>
            <CardContent className="p-2 md:pl-2">
              <GoalieStats />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="advanced" className="space-y-4">
          <Card className="border-none shadow-sm bg-white">
            <CardHeader className="bg-gradient-to-b from-slate-50 to-white pb-4 p-4 md:p-6">
              <CardTitle className="text-base md:text-xl font-bold text-primary">Advanced Metrics</CardTitle>
              <CardDescription className="text-gray-800 font-medium text-xs md:text-sm">In-depth analytical data</CardDescription>
            </CardHeader>
            <CardContent className="p-2 md:pl-2">
              <AdvancedMetrics />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
