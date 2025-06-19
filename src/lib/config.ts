import siteConfig from '@/config/site.json'
import navigationConfig from '@/config/navigation.json'
import pricingConfig from '@/config/pricing.json'
import featuresConfig from '@/config/features.json'
import testimonialsConfig from '@/config/testimonials.json'
import faqConfig from '@/config/faq.json'
import blocksConfig from '@/config/blocks.json'

// Type definitions for better TypeScript support
export interface SiteConfig {
  site: {
    name: string
    description: string
    url: string
    email: string
    author: string
    logo: string
    copyright: string
    tagline: string
  }
  social: Array<{
    name: string
    url: string
    icon: string
  }>
}

export interface NavigationConfig {
  header: {
    navigation: Array<{
      name: string
      href: string
    }>
    cta: {
      text: string
      href: string
    }
  }
  footer: {
    sections: Array<{
      title: string
      links: Array<{
        name: string
        href: string
      }>
    }>
  }
}

export interface PricingPlan {
  name: string
  price: string
  originalPrice?: string
  period: string
  description: string
  features: string[]
  limitations: string[]
  popular: boolean
  buttonText: string
  buttonVariant: string
}

export interface ComparisonFeature {
  name: string
  starter: string | boolean
  professional: string | boolean
  enterprise: string | boolean
}

export interface PricingConfig {
  plans: PricingPlan[]
  comparison: Array<{
    category: string
    features: ComparisonFeature[]
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
}

export interface Feature {
  icon: string
  title: string
  description: string
  benefits?: string[]
}

export interface FeatureCategory {
  category: string
  description: string
  features: Feature[]
}

export interface FeaturesConfig {
  hero: Feature[]
  main: Feature[]
  categories: FeatureCategory[]
  support: Feature[]
}

export interface Testimonial {
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}

export interface TestimonialsConfig {
  testimonials: Testimonial[]
  stats: Array<{
    value: string
    label: string
  }>
}

export interface FAQConfig {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export interface BlockComponent {
  id: string
  name: string
  description: string
  category: string
  previewUrl?: string
}

export interface BlockCategory {
  name: string
  id: string
  components: BlockComponent[]
}

export interface BlockPreview {
  title: string
  description: string
  code: string
}

export interface BlocksConfig {
  categories: BlockCategory[]
  previews: Record<string, BlockPreview>
}

// Export typed configurations
export const site: SiteConfig = siteConfig
export const navigation: NavigationConfig = navigationConfig
export const pricing: PricingConfig = pricingConfig
export const features: FeaturesConfig = featuresConfig
export const testimonials: TestimonialsConfig = testimonialsConfig
export const faq: FAQConfig = faqConfig
export const blocks: BlocksConfig = blocksConfig

// Helper functions for common operations
export const getSiteInfo = () => site.site
export const getSocialLinks = () => site.social
export const getHeaderNavigation = () => navigation.header
export const getFooterNavigation = () => navigation.footer
export const getPricingPlans = () => pricing.plans
export const getPricingComparison = () => pricing.comparison
export const getPricingFAQs = () => pricing.faqs
export const getMainFeatures = () => features.main
export const getHeroFeatures = () => features.hero
export const getFeatureCategories = () => features.categories
export const getSupportFeatures = () => features.support
export const getTestimonials = () => testimonials.testimonials
export const getTestimonialStats = () => testimonials.stats
export const getFAQs = () => faq.faqs
export const getBlockCategories = () => blocks.categories
export const getBlockPreviews = () => blocks.previews

// Icon mapping utility (since we can't import React components in JSON)
export const getIconComponent = (iconName: string) => {
  // This will be used in components to map string icon names to actual icon components
  return iconName
} 