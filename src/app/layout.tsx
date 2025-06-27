import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'SaaS Starter - Build Your Next SaaS Product',
    template: '%s | SaaS Starter'
  },
  description: 'A modern SaaS starter template with all the components you need to build your next product.',
  keywords: ['SaaS', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'SaaS Starter' }],
  creator: 'SaaS Starter',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saas-starter.com',
    title: 'SaaS Starter - Build Your Next SaaS Product',
    description: 'A modern SaaS starter template with all the components you need to build your next product.',
    siteName: 'SaaS Starter',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Starter - Build Your Next SaaS Product',
    description: 'A modern SaaS starter template with all the components you need to build your next product.',
    creator: '@saas_starter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 