"use client"

import { useState, createContext, useContext, type ReactNode } from "react"

type SidebarContextType = {
  isOpen: boolean
  toggle: () => void
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  toggle: () => {},
})

export const useSidebar = () => useContext(SidebarContext)

export function Providers({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => setIsOpen(!isOpen)

  return <SidebarContext.Provider value={{ isOpen, toggle }}>{children}</SidebarContext.Provider>
}
