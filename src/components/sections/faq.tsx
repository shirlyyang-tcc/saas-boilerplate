"use client"

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { getFAQs } from '@/lib/config'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const faqs = getFAQs()

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-bold text-foreground mb-4">
            Frequently Asked{' '}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our SaaS starter template.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-card hover:bg-muted/50 transition-colors duration-200 flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-foreground pr-8">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="mailto:support@saas-starter.com"
            className="text-primary hover:text-primary/80 font-medium"
          >
            Contact Support →
          </a>
        </div>
      </div>
    </section>
  )
} 