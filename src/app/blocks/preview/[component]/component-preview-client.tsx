"use client";

import { Button, PrimaryButton, GradientButton, OutlineButton, LinkButton } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FeatureCard, HeroFeatureCard, DetailedFeatureCard, CompactFeatureCard, MinimalFeatureCard } from "@/components/ui/feature-card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { BlogCard } from "@/components/ui/blog-card";
import { ContentSection, AboutSection, FeatureSection } from "@/components/ui/content-section";
import { CTASection, PrimaryCTA, GradientCTA, MinimalCTA } from "@/components/ui/cta-section";
import { StatsSection, CompanyStats, BusinessMetrics, ProductStats } from "@/components/ui/stats-section";
import { ComponentShowcase } from "@/components/ui/component-showcase";
import { ContactForm, CompactContactForm, MinimalContactForm, SupportContactForm, ContactFormData } from "@/components/ui/contact-form";
import { Users, Globe, Clock, Star, TrendingUp, Shield, Zap, Database, Settings, Rocket, Lock, Code } from "lucide-react";

interface ComponentPreviewClientProps {
  component: string;
}

// 组件映射表
const componentMap = {
  // UI Components
  button: () => (
    <div className="p-8 bg-background min-h-screen">
      <div className="space-y-6">
        {/* Default Button Variants */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">Default Button Variants</h3>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton>Primary Button</PrimaryButton>
            <GradientButton>Gradient Button</GradientButton>
            <OutlineButton>Outline Button</OutlineButton>
            <LinkButton>Link Button</LinkButton>
          </div>
        </div>

        {/* Standard Variants */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">Standard Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        {/* Special Variants */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">Special Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="gradient">Gradient</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        {/* Size Variants */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">Size Variants</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </div>

        {/* State Variants */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">State and Functionality</h3>
          <div className="flex flex-wrap gap-4">
            <Button loading>Loading...</Button>
            <Button disabled>Disabled</Button>
            <Button fullWidth>Full Width Button</Button>
          </div>
        </div>

        {/* Icon Buttons */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">Icon Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button icon={Users} iconPosition="left">With Left Icon</Button>
            <Button icon={Star} iconPosition="right">With Right Icon</Button>
            <Button variant="outline" icon={TrendingUp}>Outline with Icon</Button>
            <Button size="icon" icon={Globe} />
          </div>
        </div>
      </div>
    </div>
  ),
  
  card: () => (
    <div className="p-8 bg-background min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the card content area where you can put any content.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Another Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Cards are flexible and can contain various types of content.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
  
  badge: () => (
    <div className="p-8 bg-background min-h-screen">
      <div className="flex flex-wrap gap-4">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    </div>
  ),

  "feature-card": () => (
    <div className="p-8 bg-background min-h-screen">
      <div className="space-y-12">
        {/* Hero Variant */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Hero Variant</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HeroFeatureCard 
              feature={{
                icon: Zap,
                title: "Lightning Fast",
                description: "Built for speed with optimized performance and instant loading times",
                link: { href: "#", text: "Learn more" }
              }}
            />
            <HeroFeatureCard 
              feature={{
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security with end-to-end encryption and compliance"
              }}
            />
            <HeroFeatureCard 
              feature={{
                icon: Globe,
                title: "Global Scale",
                description: "Worldwide CDN and infrastructure for seamless global delivery"
              }}
            />
            <HeroFeatureCard 
              feature={{
                icon: Database,
                title: "Smart Data",
                description: "Intelligent data organization with automated backups"
              }}
            />
          </div>
        </div>

        {/* Detailed Variant */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Detailed Variant (Default)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DetailedFeatureCard 
              feature={{
                icon: Database,
                title: "Smart Data Management",
                description: "Intelligent data organization with automated backups and real-time sync across all devices.",
                benefits: ["Automated backups", "Real-time sync", "Data encryption", "Version control"],
                link: { href: "#", text: "Explore features" }
              }}
            />
            <DetailedFeatureCard 
              feature={{
                icon: Settings,
                title: "Workflow Automation",
                description: "Automate repetitive tasks and create custom workflows to boost productivity.",
                benefits: ["Custom workflows", "Task automation", "Trigger conditions", "Integration rules"]
              }}
            />
          </div>
        </div>

        {/* Compact Variant */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Compact Variant</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CompactFeatureCard 
              feature={{
                icon: Rocket,
                title: "Quick Setup",
                description: "Get started in minutes with our guided setup process"
              }}
            />
            <CompactFeatureCard 
              feature={{
                icon: Lock,
                title: "Secure Access",
                description: "Multi-factor authentication and role-based permissions"
              }}
            />
            <CompactFeatureCard 
              feature={{
                icon: Code,
                title: "Developer Friendly",
                description: "RESTful APIs and comprehensive documentation"
              }}
            />
          </div>
        </div>

        {/* Minimal Variant */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Minimal Variant</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MinimalFeatureCard 
              feature={{
                icon: Star,
                title: "24/7 Support",
                description: "Round-the-clock support from our expert team",
                link: { href: "#", text: "Contact us" }
              }}
            />
            <MinimalFeatureCard 
              feature={{
                icon: TrendingUp,
                title: "Analytics",
                description: "Comprehensive analytics dashboard with real-time insights"
              }}
            />
            <MinimalFeatureCard 
              feature={{
                icon: Users,
                title: "Team Collaboration",
                description: "Seamless collaboration tools for your entire team"
              }}
            />
          </div>
        </div>

        {/* Color Variants */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Icon Color Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <FeatureCard 
              variant="compact"
              iconColor="primary"
              feature={{
                icon: Shield,
                title: "Primary",
                description: "Primary color scheme"
              }}
            />
            <FeatureCard 
              variant="compact"
              iconColor="success"
              feature={{
                icon: TrendingUp,
                title: "Success",
                description: "Success color scheme"
              }}
            />
            <FeatureCard 
              variant="compact"
              iconColor="warning"
              feature={{
                icon: Clock,
                title: "Warning",
                description: "Warning color scheme"
              }}
            />
            <FeatureCard 
              variant="compact"
              iconColor="destructive"
              feature={{
                icon: Lock,
                title: "Destructive",
                description: "Destructive color scheme"
              }}
            />
            <FeatureCard 
              variant="compact"
              iconColor="secondary"
              feature={{
                icon: Settings,
                title: "Secondary",
                description: "Secondary color scheme"
              }}
            />
          </div>
        </div>

        {/* Without Benefits */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Without Benefits List</h3>
          <div className="max-w-md">
            <FeatureCard 
              showBenefits={false}
              feature={{
                icon: Rocket,
                title: "Simple Feature Card",
                description: "This feature card doesn't show the benefits list, making it more compact and focused on the main description.",
                benefits: ["This won't show", "Neither will this"],
                link: { href: "#", text: "Learn more" }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  ),
  
  // Enhanced Component Showcase
  "component-showcase": () => (
    <div className="p-8 bg-background min-h-screen">
      <ComponentShowcase />
    </div>
  ),
  
  // Layout Components
  header: () => (
    <div className="bg-background min-h-screen">
      <Header />
      <div className="pt-20 p-8">
        <p className="text-muted-foreground">This is a preview of the Header component in action.</p>
      </div>
    </div>
  ),
  
  footer: () => (
    <div className="bg-background min-h-screen flex flex-col">
      <div className="flex-1 p-8">
        <p className="text-muted-foreground">This is a preview of the Footer component.</p>
      </div>
      <Footer />
    </div>
  ),
  
  // Page Sections
  hero: () => (
    <div className="bg-background min-h-screen">
      <Hero />
    </div>
  ),
  
  features: () => (
    <div className="bg-background min-h-screen">
      <Features />
    </div>
  ),
  
  pricing: () => (
    <div className="bg-background min-h-screen">
      <Pricing />
    </div>
  ),
  
  testimonials: () => (
    <div className="bg-background min-h-screen">
      <Testimonials />
    </div>
  ),
  
  faq: () => (
    <div className="bg-background min-h-screen">
      <FAQ />
    </div>
  ),

  "case-study-card": () => (
    <div className="p-8 bg-background min-h-screen">
      <div className="max-w-2xl mx-auto">
        <CaseStudyCard
          caseStudy={{
            slug: "example-case",
            title: "E-commerce Platform Transformation",
            client: "TechCorp Solutions",
            industry: "Technology",
            timeline: "6 months",
            challenge: "Legacy system causing performance issues and limiting growth potential. The existing infrastructure couldn't handle increasing traffic and was becoming a bottleneck for business growth.",
            solution: "Implemented modern architecture with microservices and cloud infrastructure. Migrated to a scalable cloud-native solution with automated deployment pipelines and monitoring.",
            results: [
              "50% improvement in page load times",
              "99.9% uptime achieved",
              "300% increase in user engagement",
              "Reduced infrastructure costs by 40%",
              "Improved developer productivity by 60%"
            ],
            technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker", "Kubernetes"]
          }}
        />
      </div>
    </div>
  ),

  "blog-card": () => (
    <div className="p-8 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Default variant */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Default Variant</h3>
          <div className="max-w-md">
            <BlogCard
              post={{
                slug: "default-example",
                title: "Getting Started with Next.js",
                excerpt: "Learn how to build modern web applications using Next.js. This guide covers the fundamentals and best practices.",
                author: "John Doe",
                date: "2024-01-15",
                readTime: "5 min read",
                tags: ["Next.js", "React", "Web Development"]
              }}
              variant="default"
            />
          </div>
        </div>

        {/* Wide variant */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Wide Variant (Used in Blog Page)</h3>
          <BlogCard
            post={{
              slug: "wide-example",
              title: "Building Scalable SaaS Applications with TypeScript",
              excerpt: "Discover how to create robust and maintainable SaaS applications using TypeScript. This comprehensive guide covers architecture patterns, best practices, and real-world examples that will help you build production-ready applications.",
              author: "Jane Smith",
              date: "2024-01-20",
              readTime: "8 min read",
              tags: ["TypeScript", "SaaS", "Architecture", "Best Practices", "Scalability"]
            }}
            variant="wide"
          />
        </div>
      </div>
    </div>
  ),

  "content-section": () => (
    <div className="p-8 bg-background min-h-screen space-y-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Text Only Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-center">Text Only Section</h3>
          <div className="max-w-4xl mx-auto">
            <AboutSection title="Our Story">
              <p>
                This is an example of a text-only content section. It's perfect for stories, 
                about sections, or any content that doesn't need accompanying images.
              </p>
              <p>
                The component automatically handles spacing, typography, and responsive design 
                to ensure your content looks great on all devices.
              </p>
            </AboutSection>
          </div>
        </div>

        {/* Text Left, Image Right */}
        <div className="bg-muted/30 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold mb-6 text-center">Text Left, Image Right</h3>
          <ContentSection
            title="Advanced Analytics Dashboard"
            layout="text-left"
            image={{
              src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
              alt: "Analytics dashboard",
              width: 600,
              height: 400
            }}
          >
            <p>
              Our advanced analytics dashboard provides real-time insights into your business 
              performance. Track key metrics, monitor user behavior, and make data-driven decisions.
            </p>
            <p>
              With customizable widgets and interactive charts, you can visualize your data 
              exactly how you need it. Export reports, set up alerts, and collaborate with your team.
            </p>
          </ContentSection>
        </div>

        {/* Text Right, Image Left */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-center">Text Right, Image Left</h3>
          <FeatureSection
            title="Seamless Integration"
            layout="text-right"
            image={{
              src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
              alt: "Integration illustration"
            }}
          >
            <p>
              Connect with over 100+ popular tools and services. Our API-first approach 
              ensures that you can integrate with any system, no matter how complex.
            </p>
            <p>
              From CRM systems to marketing automation tools, we've got you covered. 
              Set up integrations in minutes, not hours.
            </p>
          </FeatureSection>
        </div>
      </div>
    </div>
  ),

  "cta-section": () => (
    <div className="bg-background min-h-screen space-y-0">
      {/* Primary CTA */}
      <PrimaryCTA
        title="Ready to Get Started?"
        description="Join thousands of satisfied customers and transform your business today"
        primaryText="Start Free Trial"
        secondaryText="Learn More"
      />
      
      {/* Gradient CTA */}
      <GradientCTA
        title="Experience the Difference"
        description="See how our platform can revolutionize your workflow and boost productivity"
        primaryText="Start Free Trial"
        secondaryText="Schedule Demo"
      />
      
      {/* Minimal CTA */}
      <MinimalCTA
        title="Simple and Effective"
        description="Perfect for subtle conversions without overwhelming your users"
        buttonText="Get Started"
      />
      
      {/* Custom Multi-button CTA */}
      <CTASection
        title="Custom Configuration"
        description="Fully customizable with multiple buttons and actions"
        variant="primary"
        buttons={[
          { text: "Primary Action", variant: "secondary" },
          { text: "Secondary Action", variant: "outline" },
          { text: "Learn More", variant: "ghost" }
        ]}
      />
      
      {/* Secondary Variant */}
      <CTASection
        title="Secondary Style"
        description="Alternative styling for different contexts and brand requirements"
        variant="secondary"
        buttons={[
          { text: "Get Started", variant: "default" },
          { text: "Contact Sales", variant: "outline" }
        ]}
      />
    </div>
  ),

  "stats-section": () => (
    <div className="bg-background min-h-screen space-y-0">
      {/* Company Stats (Default) */}
      <div className="py-8">
        <h3 className="text-xl font-semibold mb-6 text-center">Company Stats (Default)</h3>
        <CompanyStats />
      </div>
      
      {/* Business Metrics (Cards) */}
      <div className="py-8">
        <h3 className="text-xl font-semibold mb-6 text-center">Business Metrics (Cards)</h3>
        <BusinessMetrics />
      </div>
      
      {/* Product Stats (Highlight) */}
      <div className="py-8">
        <h3 className="text-xl font-semibold mb-6 text-center">Product Stats (Highlight)</h3>
        <ProductStats />
      </div>
      
      {/* Custom Stats with Icons */}
      <div className="py-8">
        <h3 className="text-xl font-semibold mb-6 text-center">Custom Stats with Icons</h3>
        <StatsSection
          title="Platform Performance"
          description="Real-time metrics that matter"
          variant="cards"
          columns={4}
          stats={[
            { value: "2.5M", suffix: "+", label: "Global Users", icon: Users, color: "primary" },
            { value: "180", suffix: "+", label: "Countries", icon: Globe, color: "secondary" },
            { value: "99.9", suffix: "%", label: "Uptime", icon: Clock, color: "success" },
            { value: "4.9", suffix: "/5", label: "User Rating", icon: Star, color: "warning" }
          ]}
        />
      </div>
      
      {/* Minimal Variant */}
      <div className="py-8 bg-muted/30">
        <h3 className="text-xl font-semibold mb-6 text-center">Minimal Variant</h3>
        <StatsSection
          variant="minimal"
          columns={5}
          stats={[
            { value: "1M+", label: "Downloads" },
            { value: "4.9", suffix: "/5", label: "Rating" },
            { value: "150+", label: "Countries" },
            { value: "24/7", label: "Support" },
            { value: "99%", label: "Uptime" }
          ]}
        />
      </div>
      
      {/* Growth Stats */}
      <div className="py-8">
        <h3 className="text-xl font-semibold mb-6 text-center">Growth Metrics</h3>
        <StatsSection
          title="Amazing Growth"
          description="Our journey in numbers"
          variant="default"
          columns={3}
          stats={[
            { value: "300", suffix: "%", label: "YoY Growth", icon: TrendingUp, color: "success" },
            { value: "$50M", suffix: "+", label: "Revenue", color: "primary" },
            { value: "1000", suffix: "+", label: "Enterprise Clients", color: "secondary" }
          ]}
        />
      </div>
    </div>
  ),

  "contact-form": () => {
    const handleFormSubmit = async (formData: ContactFormData) => {
      console.log("Form submitted:", formData);
      alert(`Thank you ${formData.name}! Your message has been sent.`);
    };

    return (
      <div className="p-8 bg-background min-h-screen">
        <div className="space-y-12">
          {/* Default Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground">Default Contact Form</h3>
            <div className="max-w-2xl">
              <ContactForm onSubmit={handleFormSubmit} />
            </div>
          </div>

          {/* Compact Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground">Compact Contact Form</h3>
            <div className="max-w-lg">
              <CompactContactForm onSubmit={handleFormSubmit} />
            </div>
          </div>

          {/* Support Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground">Support Contact Form</h3>
            <div className="max-w-2xl">
              <SupportContactForm onSubmit={handleFormSubmit} />
            </div>
          </div>

          {/* Minimal Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground">Minimal Contact Form</h3>
            <div className="max-w-2xl">
              <MinimalContactForm onSubmit={handleFormSubmit} />
            </div>
          </div>

          {/* Custom Configuration */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground">Custom Configuration</h3>
            <div className="max-w-2xl">
              <ContactForm
                title="Custom Contact Form"
                description="This form has custom subjects and no company field."
                subjects={["Custom Inquiry", "Partnership", "Investment", "Press"]}
                showCompany={false}
                onSubmit={handleFormSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export function ComponentPreviewClient({ component }: ComponentPreviewClientProps) {
  // 检查组件是否存在
  if (!componentMap[component as keyof typeof componentMap]) {
    return (
      <div className="p-8 bg-background min-h-screen text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Component Not Found</h1>
        <p className="text-muted-foreground">The component "{component}" does not exist.</p>
      </div>
    );
  }
  
  // 渲染对应的组件
  const ComponentRenderer = componentMap[component as keyof typeof componentMap];
  
  return <ComponentRenderer />;
}

// 导出组件列表，供静态生成使用
export const componentList = Object.keys(componentMap); 