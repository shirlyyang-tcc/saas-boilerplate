"use client"

import React from 'react'
import { 
  Zap, 
  Shield, 
  Palette, 
  Code, 
  Database, 
  Globe,
  Smartphone,
  BarChart3,
  Lock
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getMainFeatures } from '@/lib/config'

// Icon mapping
const iconMap = {
  Zap,
  Shield,
  Palette,
  Code,
  Database,
  Globe,
  Smartphone,
  BarChart3,
  Lock
} as const

export function Features() {
  const features = getMainFeatures()
  
  return (
    <section id="features" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-bold text-foreground mb-4">
            Everything You Need to{' '}
            <span className="text-primary">Ship Fast</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our SaaS starter template comes packed with all the features and components 
            you need to build and launch your product quickly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
            <span>And much more...</span>
            <span className="text-primary">→</span>
            <a 
              href="/blocks/" 
              className="font-medium text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
            >
              30+ Components Ready to Use
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 