"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { EnhancedCard, EnhancedCardContent, EnhancedCardHeader, EnhancedCardTitle, EnhancedCardDescription } from "@/components/ui/enhanced-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Activity, Download, Filter, Plus, TrendingUp, Users, Zap } from "lucide-react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts"

const trackingData = [
    { date: "Oct", speed: 28.5, distance: 5.2, acceleration: 4.1 },
    { date: "Nov", speed: 29.1, distance: 5.4, acceleration: 4.3 },
    { date: "Dec", speed: 30.2, distance: 5.8, acceleration: 4.5 },
    { date: "Jan", speed: 29.8, distance: 5.6, acceleration: 4.4 },
    { date: "Feb", speed: 31.1, distance: 6.1, acceleration: 4.7 },
    { date: "Mar", speed: 30.5, distance: 5.9, acceleration: 4.6 },
]

const playerStats = [
    { name: "Connor McDavid", avgSpeed: 31.2, maxSpeed: 39.1, distance: 6.4, efficiency: 92 },
    { name: "Nathan MacKinnon", avgSpeed: 30.8, maxSpeed: 38.7, distance: 6.2, efficiency: 89 },
    { name: "Jordan Kyrou", avgSpeed: 30.1, maxSpeed: 37.9, distance: 5.9, efficiency: 87 },
    { name: "Pavel Buchnevich", avgSpeed: 28.9, maxSpeed: 36.2, distance: 5.7, efficiency: 85 },
]

export default function TrackingPage() {
    const [selectedPlayer, setSelectedPlayer] = useState("all")
    const [dateRange, setDateRange] = useState("season")

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-white to-slate-50 rounded-xl p-6 shadow-soft border border-slate-200/60">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Player Tracking</h1>
                <p className="text-slate-600">Advanced player movement and performance tracking data</p>
            </div>

            {/* Filters */}
            <EnhancedCard>
                <EnhancedCardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                            <Label htmlFor="player-select" className="text-sm font-medium text-slate-700">Player</Label>
                            <Select value={selectedPlayer} onValueChange={setSelectedPlayer}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select player" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Players</SelectItem>
                                    <SelectItem value="mcdavid">Connor McDavid</SelectItem>
                                    <SelectItem value="mackinnon">Nathan MacKinnon</SelectItem>
                                    <SelectItem value="kyrou">Jordan Kyrou</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="date-range" className="text-sm font-medium text-slate-700">Date Range</Label>
                            <Select value={dateRange} onValueChange={setDateRange}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select range" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="season">Full Season</SelectItem>
                                    <SelectItem value="month">Last Month</SelectItem>
                                    <SelectItem value="week">Last Week</SelectItem>
                                    <SelectItem value="game">Last Game</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="metric" className="text-sm font-medium text-slate-700">Metric</Label>
                            <Select defaultValue="speed">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select metric" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="speed">Speed</SelectItem>
                                    <SelectItem value="distance">Distance</SelectItem>
                                    <SelectItem value="acceleration">Acceleration</SelectItem>
                                    <SelectItem value="efficiency">Efficiency</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-end">
                            <Button className="w-full">
                                <Filter className="mr-2 h-4 w-4" />
                                Apply Filters
                            </Button>
                        </div>
                    </div>
                </EnhancedCardContent>
            </EnhancedCard>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <EnhancedCard variant="elevated">
                    <EnhancedCardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600 mb-1">Avg Speed</p>
                                <p className="text-2xl font-bold text-blue-600">29.8 km/h</p>
                                <p className="text-xs text-green-600 font-medium">+2.1% from last month</p>
                            </div>
                            <div className="p-3 rounded-lg bg-blue-50">
                                <Zap className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                    </EnhancedCardContent>
                </EnhancedCard>

                <EnhancedCard variant="elevated">
                    <EnhancedCardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600 mb-1">Distance</p>
                                <p className="text-2xl font-bold text-green-600">5.9 km</p>
                                <p className="text-xs text-green-600 font-medium">+0.3 from last game</p>
                            </div>
                            <div className="p-3 rounded-lg bg-green-50">
                                <Activity className="h-6 w-6 text-green-600" />
                            </div>
                        </div>
                    </EnhancedCardContent>
                </EnhancedCard>

                <EnhancedCard variant="elevated">
                    <EnhancedCardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600 mb-1">Acceleration</p>
                                <p className="text-2xl font-bold text-orange-600">4.6 m/s²</p>
                                <p className="text-xs text-orange-600 font-medium">Peak performance</p>
                            </div>
                            <div className="p-3 rounded-lg bg-orange-50">
                                <TrendingUp className="h-6 w-6 text-orange-600" />
                            </div>
                        </div>
                    </EnhancedCardContent>
                </EnhancedCard>

                <EnhancedCard variant="elevated">
                    <EnhancedCardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600 mb-1">Efficiency</p>
                                <p className="text-2xl font-bold text-blue-600">88%</p>
                                <p className="text-xs text-blue-600 font-medium">Above league avg</p>
                            </div>
                            <div className="p-3 rounded-lg bg-blue-50">
                                <Users className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                    </EnhancedCardContent>
                </EnhancedCard>
            </div>

            {/* Charts and Data */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <EnhancedCard variant="elevated">
                    <EnhancedCardHeader>
                        <EnhancedCardTitle>Performance Trends</EnhancedCardTitle>
                        <EnhancedCardDescription>Speed, distance, and acceleration over time</EnhancedCardDescription>
                    </EnhancedCardHeader>
                    <EnhancedCardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={trackingData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                                <YAxis stroke="#64748b" fontSize={12} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                    }}
                                />
                                <Line type="monotone" dataKey="speed" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2 }} />
                                <Line type="monotone" dataKey="distance" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', strokeWidth: 2 }} />
                                <Line type="monotone" dataKey="acceleration" stroke="#f59e0b" strokeWidth={3} dot={{ fill: '#f59e0b', strokeWidth: 2 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </EnhancedCardContent>
                </EnhancedCard>

                <EnhancedCard variant="elevated">
                    <EnhancedCardHeader>
                        <EnhancedCardTitle>Player Leaderboard</EnhancedCardTitle>
                        <EnhancedCardDescription>Top performers by tracking metrics</EnhancedCardDescription>
                    </EnhancedCardHeader>
                    <EnhancedCardContent>
                        <div className="space-y-4">
                            {playerStats.map((player, index) => (
                                <div key={player.name} className="flex items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm font-bold">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">{player.name}</p>
                                            <p className="text-sm text-slate-600">{player.avgSpeed} km/h avg</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                                            {player.efficiency}% efficient
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </EnhancedCardContent>
                </EnhancedCard>
            </div>

            {/* Data Table */}
            <EnhancedCard variant="elevated">
                <EnhancedCardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <EnhancedCardTitle>Detailed Tracking Data</EnhancedCardTitle>
                            <EnhancedCardDescription>Comprehensive performance metrics</EnhancedCardDescription>
                        </div>
                        <Button variant="outline">
                            <Download className="mr-2 h-4 w-4" />
                            Export Data
                        </Button>
                    </div>
                </EnhancedCardHeader>
                <EnhancedCardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-200">
                                    <th className="text-left p-3 font-medium text-slate-700">Player</th>
                                    <th className="text-left p-3 font-medium text-slate-700">Avg Speed</th>
                                    <th className="text-left p-3 font-medium text-slate-700">Max Speed</th>
                                    <th className="text-left p-3 font-medium text-slate-700">Distance</th>
                                    <th className="text-left p-3 font-medium text-slate-700">Efficiency</th>
                                    <th className="text-left p-3 font-medium text-slate-700">Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                {playerStats.map((player) => (
                                    <tr key={player.name} className="border-b border-slate-100 hover:bg-slate-50">
                                        <td className="p-3 font-medium text-slate-900">{player.name}</td>
                                        <td className="p-3 text-slate-600">{player.avgSpeed} km/h</td>
                                        <td className="p-3 text-slate-600">{player.maxSpeed} km/h</td>
                                        <td className="p-3 text-slate-600">{player.distance} km</td>
                                        <td className="p-3">
                                            <Badge variant={player.efficiency > 85 ? "default" : "secondary"}>
                                                {player.efficiency}%
                                            </Badge>
                                        </td>
                                        <td className="p-3">
                                            <Progress value={player.efficiency} className="w-16" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </EnhancedCardContent>
            </EnhancedCard>
        </div>
    )
}
