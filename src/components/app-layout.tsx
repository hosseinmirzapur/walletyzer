'use client'

import { ThemeProvider } from './theme-provider'
import { Toaster } from './ui/sonner'
import React from 'react'

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
      <Toaster />
    </ThemeProvider>
  )
}
