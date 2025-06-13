"use client"

import { Sidebar } from "@/components/sidebar"
import { useSidebar } from "@/app/providers"

export function ClientSidebar() {
  const { isOpen } = useSidebar()
  return <Sidebar isOpen={isOpen} />
}
