export interface CaseStudy {
  slug: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  timeline: string
  image?: string
}

export function getAllCases(): CaseStudy[] {
  return [
    {
      slug: 'techflow-analytics',
      title: 'TechFlow Analytics Platform',
      client: 'TechFlow Inc.',
      industry: 'Technology',
      challenge: 'Needed a scalable analytics dashboard for their growing user base',
      solution: 'Built a real-time analytics platform with custom dashboards and reporting',
      results: [
        '300% increase in user engagement',
        '50% reduction in data processing time',
        '99.9% uptime achieved'
      ],
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Chart.js'],
      timeline: '3 months',
      image: '/images/case-techflow.jpg'
    },
    {
      slug: 'datasync-platform',
      title: 'DataSync Integration Platform',
      client: 'DataSync Solutions',
      industry: 'Data Management',
      challenge: 'Required a unified platform to sync data across multiple sources',
      solution: 'Developed a comprehensive data integration platform with real-time sync capabilities',
      results: [
        '80% faster data synchronization',
        '40% reduction in operational costs',
        'Support for 50+ data sources'
      ],
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Kafka', 'Docker'],
      timeline: '4 months'
    },
    {
      slug: 'ecommerce-suite',
      title: 'E-commerce Management Suite',
      client: 'RetailPro',
      industry: 'E-commerce',
      challenge: 'Needed a comprehensive solution to manage multiple online stores',
      solution: 'Created a multi-tenant e-commerce management platform with inventory tracking',
      results: [
        '200% increase in sales efficiency',
        '60% reduction in inventory management time',
        'Integrated with 10+ payment gateways'
      ],
      technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      timeline: '5 months'
    }
  ]
} 