import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReportsTable } from "@/components/reports/reports-table"
import { Button } from "@/components/ui/button"
import { PlusCircle, FileText, Users, Target, BarChart3, Layers, Video } from "lucide-react"
import { AddReportDialog } from "@/components/reports/add-report-dialog"

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-6 p-6 md:gap-8 md:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Reports</h1>
          <p className="text-slate-600 text-lg">View and manage all team reports</p>
        </div>
        <AddReportDialog>
          <Button className="sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Report
          </Button>
        </AddReportDialog>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="tabs-list w-full sm:w-auto">
          <TabsTrigger value="all" className="tab-trigger flex-1 sm:flex-none">
            All Reports
          </TabsTrigger>
          <TabsTrigger value="scouting" className="tab-trigger flex-1 sm:flex-none">
            Scouting
          </TabsTrigger>
          <TabsTrigger value="free-agent" className="tab-trigger flex-1 sm:flex-none">
            Free Agent
          </TabsTrigger>
          <TabsTrigger value="trade" className="tab-trigger flex-1 sm:flex-none">
            Trade Target
          </TabsTrigger>
          <TabsTrigger value="internal" className="tab-trigger flex-1 sm:flex-none">
            Internal
          </TabsTrigger>
          <TabsTrigger value="analytical" className="tab-trigger flex-1 sm:flex-none">
            Analytical
          </TabsTrigger>
          <TabsTrigger value="organizational" className="tab-trigger flex-1 sm:flex-none">
            Organizational
          </TabsTrigger>
          <TabsTrigger value="game" className="tab-trigger flex-1 sm:flex-none">
            Game
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Card className="gradient-card shadow-soft border-slate-200/60 hover:shadow-glow transition-all duration-200">
            <CardHeader className="pb-4 bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-slate-200/60">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-slate-900">All Reports</CardTitle>
              </div>
              <CardDescription className="text-slate-600">View all reports across categories</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ReportsTable type="all" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scouting" className="mt-6">
          <Card className="gradient-card shadow-soft border-slate-200/60 hover:shadow-glow transition-all duration-200">
            <CardHeader className="pb-4 bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-slate-200/60">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-slate-900">Scouting Reports</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                Evaluations of prospects and potential draft picks
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ReportsTable type="scouting" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="free-agent" className="mt-6">
          <Card className="gradient-card shadow-soft border-slate-200/60 hover:shadow-glow transition-all duration-200">
            <CardHeader className="pb-4 bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-slate-200/60">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-slate-900">Free Agent Reports</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                Assessments of upcoming and available free agents
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ReportsTable type="free-agent" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trade" className="mt-6">
          <Card className="gradient-card shadow-soft border-slate-200/60 hover:shadow-glow transition-all duration-200">
            <CardHeader className="pb-4 bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-slate-200/60">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-slate-900">Trade Target Reports</CardTitle>
              </div>
              <CardDescription className="text-slate-600">Evaluations of potential trade acquisitions</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ReportsTable type="trade" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="internal" className="mt-6">
          <Card className="gradient-card shadow-soft border-slate-200/60 hover:shadow-glow transition-all duration-200">
            <CardHeader className="pb-4 bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-slate-200/60">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-slate-900">Internal Player Reports</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                Detailed assessments of current roster players
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ReportsTable type="internal" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytical" className="mt-6">
          <Card className="gradient-card shadow-soft border-slate-200/60 hover:shadow-glow transition-all duration-200">
            <CardHeader className="pb-4 bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-slate-200/60">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-slate-900">Analytical Reports</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                Data-driven analysis and statistical evaluations
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ReportsTable type="analytical" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="organizational" className="mt-6">
          <Card className="gradient-card shadow-soft border-slate-200/60 hover:shadow-glow transition-all duration-200">
            <CardHeader className="pb-4 bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-slate-200/60">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-slate-900">Organizational Reports</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                Depth charts and organizational planning documents
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ReportsTable type="organizational" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="game" className="mt-6">
          <Card className="gradient-card shadow-soft border-slate-200/60 hover:shadow-glow transition-all duration-200">
            <CardHeader className="pb-4 bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-slate-200/60">
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-slate-900">Game Reports</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                Pre-game and post-game analysis and evaluations
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ReportsTable type="game" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
