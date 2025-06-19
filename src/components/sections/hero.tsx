"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* 网格背景层 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background/80"></div>
      </div>

      {/* 几何动态背景 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 大圆形 */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/15 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-primary/8 rounded-full animate-bounce opacity-40" style={{ animationDelay: '2s' }}></div>
        
        {/* 几何形状 */}
        <div className="absolute top-32 right-1/3 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 transform rotate-45 animate-spin-slow opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-tr from-accent/15 to-primary/15 transform rotate-12 animate-float opacity-40" style={{ animationDelay: '3s' }}></div>
        
        {/* 三角形 */}
        <div className="absolute top-60 left-1/3 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-primary/20 animate-float opacity-50" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-accent/25 animate-pulse opacity-40" style={{ animationDelay: '2.5s' }}></div>
      
        {/* 移动的粒子效果 */}
        <div className="absolute top-1/4 left-10 w-1 h-1 bg-primary rounded-full animate-drift opacity-70"></div>
        <div className="absolute top-1/2 right-16 w-1 h-1 bg-accent rounded-full animate-drift-reverse opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary/80 rounded-full animate-drift opacity-50" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm bg-primary/10 text-primary border border-primary/20 mb-8">
            <Zap className="w-4 h-4 mr-2" />
            🚀 Ship Your SaaS in Hours, Not Months
          </div>

          {/* Main Heading */}
          <h1 className="text-responsive-xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
            Build Your Next{' '}
            <span className="text-primary">SaaS Product</span>{' '}
            with Our Starter Template
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            A complete SaaS starter template with authentication, payments, 
            dashboard, and all the components you need to launch fast.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="btn-gradient text-white">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary/80 border-2 border-background flex items-center justify-center text-white text-xs font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span>Trusted by 250+ developers</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-primary" />
              <span>30+ Ready Components</span>
            </div>
            <div className="flex items-center">
              <Rocket className="w-4 h-4 mr-2 text-primary" />
              <span>Ship in 5 Minutes</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Video Placeholder */}
        <div className="mt-16 lg:mt-24">
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl p-8 lg:p-12 border border-primary/20">
              <div className="bg-card rounded-xl shadow-2xl border p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                  <div className="h-20 bg-gradient-to-r from-primary/20 to-primary/10 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
} 