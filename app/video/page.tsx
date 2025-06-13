import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VideoLibrary } from "@/components/video/video-library"
import { TrackingData } from "@/components/video/tracking-data"

export default function VideoPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Video & Tracking</h1>
          <p className="text-muted-foreground">Game footage and player tracking data</p>
        </div>
      </div>
      <Tabs defaultValue="library" className="space-y-4">
        <TabsList>
          <TabsTrigger value="library">Video Library</TabsTrigger>
          <TabsTrigger value="tracking">Tracking Data</TabsTrigger>
        </TabsList>
        <TabsContent value="library" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Video Library</CardTitle>
              <CardDescription>Game footage and player highlights</CardDescription>
            </CardHeader>
            <CardContent>
              <VideoLibrary />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tracking" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Player Tracking Data</CardTitle>
              <CardDescription>Advanced metrics from player tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <TrackingData />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
