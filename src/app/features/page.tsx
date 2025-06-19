"use client";

import { 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Users, 
  Smartphone, 
  Clock, 
  Database,
  Settings,
  Palette,
  Lock,
  Headphones,
  Rocket,
  Target,
  Layers,
  Code
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GradientCTA } from "@/components/ui/cta-section";
import { StatsSection } from "@/components/ui/stats-section";
import { Layout } from "@/components/layout/layout";

const heroFeatures = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed with optimized performance and instant loading times"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance"
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Worldwide CDN and infrastructure for seamless global delivery"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights and real-time data to drive your business forward"
  }
];

const featureCategories = [
  {
    category: "Core Platform",
    description: "Essential features that power your business",
    features: [
      {
        icon: Database,
        title: "Smart Data Management",
        description: "Intelligent data organization with automated backups and real-time sync across all devices.",
        benefits: ["Automated backups", "Real-time sync", "Data encryption", "Version control"]
      },
      {
        icon: Users,
        title: "Team Collaboration",
        description: "Seamless collaboration tools with role-based permissions and real-time editing.",
        benefits: ["Role-based access", "Real-time editing", "Comment system", "Activity tracking"]
      },
      {
        icon: Settings,
        title: "Workflow Automation",
        description: "Automate repetitive tasks and create custom workflows to boost productivity.",
        benefits: ["Custom workflows", "Task automation", "Trigger conditions", "Integration rules"]
      },
      {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Comprehensive analytics dashboard with custom reports and data visualization.",
        benefits: ["Custom dashboards", "Real-time metrics", "Export reports", "Data insights"]
      }
    ]
  },
  {
    category: "User Experience",
    description: "Features designed for the best user experience",
    features: [
      {
        icon: Smartphone,
        title: "Mobile Responsive",
        description: "Perfect experience across all devices with native mobile app support.",
        benefits: ["Responsive design", "Mobile apps", "Offline support", "Touch optimized"]
      },
      {
        icon: Palette,
        title: "Customizable Interface",
        description: "Personalize your workspace with themes, layouts, and custom branding options.",
        benefits: ["Custom themes", "Layout options", "Brand colors", "Logo upload"]
      },
      {
        icon: Globe,
        title: "Multi-language Support",
        description: "Support for 50+ languages with automatic translation and localization.",
        benefits: ["50+ languages", "Auto translation", "RTL support", "Currency formats"]
      },
      {
        icon: Clock,
        title: "Real-time Updates",
        description: "Instant notifications and live updates keep everyone in sync.",
        benefits: ["Live notifications", "Real-time sync", "Status updates", "Activity feeds"]
      }
    ]
  },
  {
    category: "Security & Compliance",
    description: "Enterprise-grade security and compliance features",
    features: [
      {
        icon: Shield,
        title: "Advanced Security",
        description: "Multi-layer security with encryption, 2FA, and advanced threat protection.",
        benefits: ["End-to-end encryption", "Two-factor auth", "Threat detection", "Audit logs"]
      },
      {
        icon: Lock,
        title: "Access Control",
        description: "Granular permissions and role-based access control for maximum security.",
        benefits: ["Role-based access", "Permission levels", "IP restrictions", "Session management"]
      },
      {
        icon: Target,
        title: "Compliance Ready",
        description: "Built-in compliance features for GDPR, HIPAA, SOC 2, and other standards.",
        benefits: ["GDPR compliance", "HIPAA ready", "SOC 2 certified", "Data residency"]
      }
    ]
  },
  {
    category: "Integration & Development",
    description: "Connect and extend with powerful integration options",
    features: [
      {
        icon: Code,
        title: "API & Webhooks",
        description: "Robust REST API and webhooks for seamless integration with your existing tools.",
        benefits: ["REST API", "Webhooks", "SDK libraries", "API documentation"]
      },
      {
        icon: Layers,
        title: "Third-party Integrations",
        description: "Pre-built integrations with popular tools and services you already use.",
        benefits: ["100+ integrations", "Zapier support", "Custom connectors", "Data sync"]
      },
      {
        icon: Rocket,
        title: "Developer Tools",
        description: "Comprehensive developer tools including sandbox environment and testing suite.",
        benefits: ["Sandbox environment", "Testing tools", "Code samples", "Developer support"]
      }
    ]
  }
];

const supportFeatures = [
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock support from our expert team"
  },
  {
    icon: Rocket,
    title: "Onboarding",
    description: "Guided setup and personalized onboarding experience"
  },
  {
    icon: Target,
    title: "Training",
    description: "Comprehensive training materials and certification programs"
  }
];

export default function FeaturesPage() {
  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-primary text-white">Features</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-primary">Succeed</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Powerful features designed to streamline your workflow and accelerate your business growth.
          </p>
          
          {/* Hero Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {heroFeatures.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 px-4 ${categoryIndex % 2 === 1 ? 'bg-muted/50' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary text-white">{category.category}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {category.category}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.features.map((feature, featureIndex) => (
                <Card key={featureIndex} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {feature.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Support Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-white">Support & Success</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We're Here to Help You Succeed
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive support and resources to ensure your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection
        title="Trusted by Industry Leaders"
        description="Numbers that speak for themselves"
        variant="default"
        columns={4}
        stats={[
          { value: "99.9", suffix: "%", label: "Uptime Guarantee" },
          { value: "10", suffix: "M+", label: "Active Users" },
          { value: "150", suffix: "+", label: "Countries Served" },
          { value: "24/7", label: "Expert Support" }
        ]}
      />

      {/* CTA Section */}
      <GradientCTA
        title="Ready to Experience These Features?"
        description="Start your free trial today and see how our features can transform your business."
        primaryText="Start Free Trial"
        secondaryText="Schedule Demo"
        className="bg-primary text-white"
      />
    </Layout>
  );
} 