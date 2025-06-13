import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Providers } from "./providers"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Blues Team Management",
  description: "Internal management tool for NHL team operations",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} font-manrope antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Providers>
            <AppLayout>{children}</AppLayout>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <ClientSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <ClientHeader />
        <main className="flex-1 overflow-auto bg-white dark:bg-gray-900">{children}</main>
      </div>
    </div>
  )
}

// These components are needed to avoid hydration errors with useState
import dynamic from "next/dynamic"

const ClientSidebar = dynamic(() => import("@/components/client-sidebar").then((mod) => mod.ClientSidebar), {
  ssr: false,
})

const ClientHeader = dynamic(() => import("@/components/client-header").then((mod) => mod.ClientHeader), {
  ssr: false,
})
