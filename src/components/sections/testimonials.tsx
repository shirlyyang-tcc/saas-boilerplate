"use client"

import { SectionLayout } from "@/components/layout/section-layout"
import { TestimonialsGrid } from "@/components/ui/testimonials-grid"

interface TestimonialsProps {
  dict?: {
    testimonials: {
      title?: string
      description?: string
      testimonials: {
        rating: number
        content: string
        avatar?: string
        name?: string
        role?: string
      }[]
      stats?: {
        value: string
        label: string
      }[]
    }
  }
  params?: { lang: string }
}

export function Testimonials({ dict, params }: TestimonialsProps) {
  const testimonials = dict?.testimonials.testimonials || []
  const stats = dict?.testimonials.stats || []
  
  return (
    <SectionLayout
      title={dict?.testimonials?.title}
      description={dict?.testimonials?.description}
      locale={params?.lang || 'en'}
      background="muted"
    >
      <TestimonialsGrid 
        testimonials={testimonials} 
        stats={stats}
        showStats={stats.length > 0}
      />
    </SectionLayout>
  )
} 