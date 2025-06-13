"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, FileText, Home, Settings, Users, Video, FileSpreadsheet } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

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
    title: "Video / Tracking",
    href: "/video",
    icon: Video,
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
  isOpen: boolean
}

export function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "relative flex flex-col border-r border-slate-200/60 gradient-sidebar shadow-soft dark:border-gray-800 dark:bg-gray-950 transition-all duration-300 ease-in-out",
        isOpen ? "md:w-64" : "md:w-16",
        "transform-gpu", // Use GPU for smoother animations
      )}
    >
      <div className="flex h-14 items-center border-b border-slate-200/60 dark:border-gray-800 px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm">
            <FileSpreadsheet className="h-5 w-5 text-white" />
          </div>
          {isOpen && (
            <span className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent transition-opacity duration-300">
              Blues Management
            </span>
          )}
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-3.5rem)] flex-1">
        <TooltipProvider>
          <div className="flex flex-col gap-1 p-3">
            {navItems.map((item) => (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Button
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className={cn(
                      "justify-start gap-3 h-11 transition-all duration-200",
                      pathname === item.href &&
                        "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200/50 shadow-sm hover:from-blue-100 hover:to-indigo-100",
                      pathname !== item.href &&
                        "hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/50 hover:text-slate-900",
                      !isOpen && "justify-center px-2",
                    )}
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon
                        className={cn(
                          "h-5 w-5 transition-colors duration-200",
                          pathname === item.href ? "text-blue-600" : "text-slate-600",
                        )}
                      />
                      {isOpen && <span className="transition-opacity duration-300 font-medium">{item.title}</span>}
                    </Link>
                  </Button>
                </TooltipTrigger>
                {!isOpen && <TooltipContent side="right">{item.title}</TooltipContent>}
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </ScrollArea>
    </div>
  )
}
