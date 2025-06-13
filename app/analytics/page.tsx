import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeamPerformance } from "@/components/analytics/team-performance"
import { PlayerComparison } from "@/components/analytics/player-comparison"
import { GoalieStats } from "@/components/analytics/goalie-stats"
import { AdvancedMetrics } from "@/components/analytics/advanced-metrics"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Analytics Hub</h1>
          <p className="text-gray-800 font-medium">Advanced statistics and performance metrics</p>
        </div>
      </div>
      <Tabs defaultValue="team" className="space-y-4">
        <div className="bg-white rounded-lg p-1 shadow-sm border">
          <TabsList className="w-full grid grid-cols-4 h-auto gap-2 bg-transparent">
            <TabsTrigger
              value="team"
              className="data-[state=active]:bg-blue-50 data-[state=active]:text-primary data-[state=active]:font-semibold data-[state=active]:shadow-none rounded-md py-2 font-medium"
            >
              Team Performance
            </TabsTrigger>
            <TabsTrigger
              value="players"
              className="data-[state=active]:bg-blue-50 data-[state=active]:text-primary data-[state=active]:font-semibold data-[state=active]:shadow-none rounded-md py-2 font-medium"
            >
              Player Comparison
            </TabsTrigger>
            <TabsTrigger
              value="goalies"
              className="data-[state=active]:bg-blue-50 data-[state=active]:text-primary data-[state=active]:font-semibold data-[state=active]:shadow-none rounded-md py-2 font-medium"
            >
              Goalie Stats
            </TabsTrigger>
            <TabsTrigger
              value="advanced"
              className="data-[state=active]:bg-blue-50 data-[state=active]:text-primary data-[state=active]:font-semibold data-[state=active]:shadow-none rounded-md py-2 font-medium"
            >
              Advanced Metrics
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="team" className="space-y-4">
          <Card className="border-none shadow-sm bg-white">
            <CardHeader className="bg-gradient-to-b from-slate-50 to-white pb-4">
              <CardTitle className="text-xl font-bold text-primary">Team Performance</CardTitle>
              <CardDescription className="text-gray-800 font-medium">
                Key performance indicators for the current season
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <TeamPerformance />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="players" className="space-y-4">
          <Card className="border-none shadow-sm bg-white">
            <CardHeader className="bg-gradient-to-b from-slate-50 to-white pb-4">
              <CardTitle className="text-xl font-bold text-primary">Player Comparison</CardTitle>
              <CardDescription className="text-gray-800 font-medium">
                Compare statistics between players
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <PlayerComparison />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="goalies" className="space-y-4">
          <Card className="border-none shadow-sm bg-white">
            <CardHeader className="bg-gradient-to-b from-slate-50 to-white pb-4">
              <CardTitle className="text-xl font-bold text-primary">Goalie Statistics</CardTitle>
              <CardDescription className="text-gray-800 font-medium">Detailed goaltending metrics</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <GoalieStats />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="advanced" className="space-y-4">
          <Card className="border-none shadow-sm bg-white">
            <CardHeader className="bg-gradient-to-b from-slate-50 to-white pb-4">
              <CardTitle className="text-xl font-bold text-primary">Advanced Metrics</CardTitle>
              <CardDescription className="text-gray-800 font-medium">In-depth analytical data</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <AdvancedMetrics />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
