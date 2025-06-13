"use client"

import { Header } from "@/components/header"
import { useSidebar } from "@/app/providers"

export function ClientHeader() {
  const { isOpen, toggle } = useSidebar()
  return <Header toggleSidebar={toggle} sidebarOpen={isOpen} />
}
