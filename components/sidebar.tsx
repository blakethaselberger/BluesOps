"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, FileText, Home, Settings, Users, Video, FileSpreadsheet, Activity } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useState, useEffect } from "react"

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    title: "Player Database",
    href: "/players",
    icon: Users,
  },
  {
    title: "Reports",
    href: "/scouting",
    icon: FileText,
  },
  {
    title: "Analytics Hub",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Video Analysis",
    href: "/video",
    icon: Video,
  },
  {
    title: "Player Tracking",
    href: "/tracking",
    icon: Activity,
  },
  {
    title: "Meeting Notes",
    href: "/notes",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

interface SidebarProps {
  isOpen?: boolean
  className?: string
  isCollapsed?: boolean
}

export function Sidebar({ isOpen = true, className, isCollapsed = false }: SidebarProps) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className={cn(
        "relative flex flex-col border-r border-slate-200/60 bg-gradient-to-b from-white via-blue-50/30 to-slate-50/80 backdrop-blur-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-300 ease-in-out h-full group",
        // Desktop sizing with collapse functionality
        isCollapsed ? "lg:w-16 lg:min-w-16" : "lg:w-64 lg:min-w-64",
        // Mobile sizing - always full width in sheet
        "w-full lg:relative",
        "transform-gpu overflow-hidden", // Use GPU for smoother animations
        className
      )}
    >
      {/* Header with Logo */}
      <div className={cn(
        "flex items-center border-b border-slate-200/60 dark:border-gray-800 transition-all duration-300",
        isCollapsed ? "h-16 px-1 justify-center" : "h-16 px-4"
      )}>
        <Link
          href="/"
          className={cn(
            "flex items-center gap-3 font-semibold transition-all duration-300 hover:opacity-80",
            isCollapsed && "lg:justify-center lg:gap-0"
          )}
        >
          <div className="relative">
            <img
              src="/st-louis-blues.svg"
              alt="Blues Logo"
              className={cn(
                "object-contain transition-all duration-300 hover:scale-110",
                isCollapsed ? "h-6 w-6" : "h-8 w-8"
              )}
            />
          </div>
          <span className={cn(
            "text-lg font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 bg-clip-text text-transparent transition-all duration-300",
            isCollapsed && "lg:opacity-0 lg:w-0 lg:overflow-hidden lg:absolute"
          )}>
            BluesOps
          </span>
        </Link>
      </div>
      {/* Navigation */}
      <ScrollArea className="flex-1 py-4">
        <TooltipProvider>
          <div className={cn(
            "flex flex-col gap-1 transition-all duration-300",
            isCollapsed ? "px-2" : "px-3"
          )}>
            {navItems.map((item) => (
              <Tooltip key={item.href} delayDuration={isCollapsed ? 300 : 1000}>
                <TooltipTrigger asChild>
                  <Button
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className={cn(
                      "transition-all duration-200 text-left relative group/item",
                      isCollapsed
                        ? "h-12 w-12 p-0 justify-center"
                        : "justify-start gap-3 h-11 px-3",
                      pathname === item.href && [
                        "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200/50 shadow-sm",
                        "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-blue-600 before:rounded-r-full"
                      ],
                      pathname !== item.href && [
                        "hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/50 hover:text-slate-900 hover:shadow-sm",
                        "hover:before:absolute hover:before:left-0 hover:before:top-0 hover:before:bottom-0 hover:before:w-0.5 hover:before:bg-blue-300 hover:before:rounded-r-full hover:before:transition-all hover:before:duration-200"
                      ]
                    )}
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon
                        className={cn(
                          "transition-all duration-200 flex-shrink-0",
                          isCollapsed ? "h-5 w-5" : "h-4 w-4",
                          pathname === item.href ? "text-blue-600" : "text-slate-600 group-hover/item:text-slate-700",
                        )}
                      />
                      <span className={cn(
                        "font-medium text-sm truncate transition-all duration-300",
                        isCollapsed && "lg:opacity-0 lg:w-0 lg:overflow-hidden"
                      )}>
                        {item.title}
                      </span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className={cn(
                    "transition-all duration-200",
                    !isCollapsed && "lg:hidden"
                  )}
                  sideOffset={10}
                >
                  <span className="font-medium">{item.title}</span>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </ScrollArea>

      {/* Footer - User info */}
      <div className={cn(
        "border-t border-slate-200/60 dark:border-gray-800 p-3 transition-all duration-300",
        isCollapsed && "lg:px-2"
      )}>
        <div className={cn(
          "flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer",
          isCollapsed && "lg:justify-center lg:gap-0"
        )}>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium text-sm">
            JD
          </div>
          <div className={cn(
            "flex-1 min-w-0 transition-all duration-300",
            isCollapsed && "lg:opacity-0 lg:w-0 lg:overflow-hidden"
          )}>
            <p className="text-sm font-medium text-slate-900 dark:text-white truncate">John Doe</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Coach</p>
          </div>
        </div>
      </div>
    </div>
  )
}
