import { getDictionary } from './dictionaries'
import { Locale, defaultLocale } from './i18n'

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
  preview: {
    title: string
    description: string
    code: string
  }
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
}

// Helper functions for common operations that now use dictionaries
export const getSiteInfo = async (locale: Locale = defaultLocale) => {
  const dict = await getDictionary(locale)
  return dict.site
}

export const getSocialLinks = async (locale: Locale = defaultLocale) => {
  const dict = await getDictionary(locale)
  return dict.social
}

export const getHeaderNavigation = async (locale: Locale = defaultLocale) => {
  const dict = await getDictionary(locale)
  return dict.header
}

export const getFooterNavigation = async (locale: Locale = defaultLocale) => {
  const dict = await getDictionary(locale)
  return dict.footer
}

export const getPricingPlans = async (locale: Locale = defaultLocale) => {
  const dict = await getDictionary(locale)
  return dict.pricing.plans
}

export const getPricingComparison = async (locale: Locale = defaultLocale) => {
  // Note: comparison data might need to be added to dictionaries if needed
  return []
}

export const getPricingFAQs = async (locale: Locale = defaultLocale) => {
  const dict = await getDictionary(locale)
  return dict.pricing.faqs
}

export const getMainFeatures = async (locale: Locale = defaultLocale) => {
  const dict = await getDictionary(locale)
  return dict.features.main
}

export const getHeroFeatures = async (locale: Locale = defaultLocale) => {
  const dict = await getDictionary(locale)
  return dict.features.hero
}

export const getFeatureCategories = async (locale: Locale = defaultLocale) => {
  // Note: categories data might need to be added to dictionaries if needed
  return []
}

export const getSupportFeatures = async (locale: Locale = defaultLocale) => {
  const dict = await getDictionary(locale)
  return dict.features.support
}

export const getTestimonials = async (locale: Locale = defaultLocale) => {
  const dict = await getDictionary(locale)
  return dict.testimonials.testimonials
}

export const getTestimonialStats = async (locale: Locale = defaultLocale) => {
  const dict = await getDictionary(locale)
  return dict.testimonials.stats
}

export const getFAQs = async (locale: Locale = defaultLocale) => {
  const dict = await getDictionary(locale)
  return dict.faq.faqs
}

export const getBlockCategories = async (locale: Locale = defaultLocale) => {
  const dict = await getDictionary(locale)
  return dict.blocks.categories
}



// Icon mapping utility (since we can't import React components in JSON)
export const getIconComponent = (iconName: string) => {
  // This will be used in components to map string icon names to actual icon components
  return iconName
} 