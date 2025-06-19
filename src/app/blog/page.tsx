import React from 'react'
import { Layout } from '@/components/layout/layout'
import { BlogCard } from '@/components/ui/blog-card'
import { getAllPosts } from '@/lib/blog'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <Layout>
      <div className="pt-24">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-responsive-xl font-bold text-foreground mb-6">
              Our{' '}
              <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Insights, tutorials, and updates from the SaaS Starter team. 
              Learn how to build better SaaS products and grow your business.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  No blog posts yet
                </h3>
                <p className="text-muted-foreground mb-8">
                  We're working on some great content. Check back soon!
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>To add blog posts, create markdown files in the <code>content/blog</code> directory.</p>
                  <p>Each file should have frontmatter with title, date, excerpt, author, and tags.</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} variant="wide" className="h-full" />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  )
} 