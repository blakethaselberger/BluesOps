"use client"

import dynamic from "next/dynamic"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useSidebar } from "@/app/providers"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const ClientSidebar = dynamic(() => import("@/components/client-sidebar").then((mod) => mod.ClientSidebar))

const ClientHeader = dynamic(() => import("@/components/client-header").then((mod) => mod.ClientHeader))

const AIChatbot = dynamic(() => import("@/components/ai-assistant/ai-chatbot").then((mod) => mod.AIChatbot))

interface LayoutWrapperProps {
    children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
    const { isOpen, toggle } = useSidebar()
    const [isCollapsed, setIsCollapsed] = useState(false)

    useEffect(() => {
        // Check localStorage for saved collapse state
        const saved = localStorage.getItem('sidebar-collapsed')
        if (saved) {
            setIsCollapsed(JSON.parse(saved))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('sidebar-collapsed', JSON.stringify(isCollapsed))
    }, [isCollapsed])

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div className="flex h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-blue-100/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            {/* Desktop Sidebar - Hidden on mobile */}
            <div className="hidden lg:block relative">
                <ClientSidebar isCollapsed={isCollapsed} />
                {/* Collapse Button - Outside sidebar */}
                <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleCollapse}
                    className={cn(
                        "absolute -right-3 top-20 z-10 h-6 w-6 rounded-full border border-slate-200 bg-white shadow-md hover:bg-slate-50 transition-all duration-200",
                        "hidden lg:flex items-center justify-center"
                    )}
                >
                    {isCollapsed ? (
                        <ChevronRight className="h-3 w-3" />
                    ) : (
                        <ChevronLeft className="h-3 w-3" />
                    )}
                </Button>
            </div>

            {/* Mobile Sidebar - Sheet overlay */}
            <Sheet open={isOpen} onOpenChange={toggle}>
                <SheetContent side="left" className="p-0 w-64 lg:hidden bg-white/95 backdrop-blur-sm">
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <ClientSidebar isCollapsed={false} />
                </SheetContent>
            </Sheet>

            <div className="flex flex-col flex-1 overflow-hidden min-w-0">
                <ClientHeader />
                <main className="flex-1 overflow-auto p-3 sm:p-4 md:p-6 lg:p-8 relative">
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent pointer-events-none opacity-50"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }} />
                    <div className="relative z-10">
                        {children}
                    </div>
                </main>
            </div>

            {/* AI Chatbot - Available on all pages */}
            <AIChatbot />
        </div>
    )
}
