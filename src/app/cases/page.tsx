import React from 'react'
import { Layout } from '@/components/layout/layout'
import { CaseStudyCard } from '@/components/ui/case-study-card'
import { getAllCases } from '@/lib/cases'

export default function CasesPage() {
  const cases = getAllCases()

  return (
    <Layout>
      <div className="pt-24">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-responsive-xl font-bold text-foreground mb-6">
              Success{' '}
              <span className="text-primary">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See how our SaaS Starter template has helped companies build and launch 
              successful products faster than ever before.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cases.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-responsive-lg font-bold text-foreground mb-6">
              Ready to Build Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join these successful companies and launch your SaaS product with our proven template.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="border border-input bg-background px-8 py-3 rounded-md font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
} 