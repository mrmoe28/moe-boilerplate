"use client"
import { ThemeProvider } from "next-themes"
import { ClerkProvider } from "@clerk/nextjs"
import { ReactNode } from "react"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ClerkProvider>
  )
}