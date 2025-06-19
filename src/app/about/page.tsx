import React from 'react'
import { Layout } from '@/components/layout/layout'
import { Users, Target, Lightbulb, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AboutSection } from '@/components/ui/content-section'
import { CompanyStats } from '@/components/ui/stats-section'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Our mission is to empower developers to build and launch their SaaS products faster than ever before.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in building a strong community of developers who support and learn from each other.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly innovate and improve our tools to stay ahead of the latest technologies and trends.'
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'We are committed to delivering high-quality, production-ready code that you can trust.'
    }
  ]

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      avatar: '👨‍💻',
      bio: 'Full-stack developer with 10+ years of experience building SaaS products.'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Designer',
      avatar: '👩‍🎨',
      bio: 'UI/UX expert passionate about creating beautiful and intuitive user experiences.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Technical Lead',
      avatar: '👨‍🔬',
      bio: 'DevOps engineer focused on scalability, security, and performance optimization.'
    },
    {
      name: 'Emily Davis',
      role: 'Community Manager',
      avatar: '👩‍💼',
      bio: 'Dedicated to building and nurturing our developer community worldwide.'
    }
  ]

  return (
    <Layout>
      <div className="pt-24">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-responsive-xl font-bold text-foreground mb-6">
              About{' '}
              <span className="text-primary">SaaS Starter</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a team of passionate developers and designers who understand the challenges 
              of building SaaS products from scratch. That's why we created this comprehensive 
              starter template to help you skip the boring stuff and focus on what matters most - 
              your unique product features.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AboutSection title="Our Story">
              <p>
                It all started when our founder, Alex, spent months building the same authentication, 
                payment, and dashboard components for the third time. He realized that every SaaS 
                product needs the same foundational features, yet developers keep rebuilding them 
                from scratch.
              </p>
              <p>
                That's when the idea for SaaS Starter was born. We wanted to create a comprehensive, 
                production-ready template that would save developers months of work and help them 
                launch their products faster.
              </p>
              <p>
                Today, we're proud to have helped over 250+ developers and teams launch their 
                SaaS products successfully. Our template has been battle-tested in production 
                and continues to evolve with the latest best practices.
              </p>
            </AboutSection>
            
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-responsive-lg font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-0 shadow-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-responsive-lg font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground">
                The people behind SaaS Starter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-0 shadow-sm">
                  <CardHeader>
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                      {member.avatar}
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-primary font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <CompanyStats />
      </div>
    </Layout>
  )
} 