"use client"

import { Sidebar } from "@/components/sidebar"
import { useSidebar } from "@/app/providers"

interface ClientSidebarProps {
  isCollapsed?: boolean
}

export function ClientSidebar({ isCollapsed = false }: ClientSidebarProps) {
  const { isOpen } = useSidebar()
  return <Sidebar isOpen={isOpen} isCollapsed={isCollapsed} />
}
