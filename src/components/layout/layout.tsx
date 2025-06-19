"use client"

import React from 'react'
import { Header } from './header'
import { Footer } from './footer'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
} 