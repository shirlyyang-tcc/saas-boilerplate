import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

function getPostsDirectory(lang: string = 'en') {
  return path.join(process.cwd(), 'content', lang, 'blog')
}

// BlogPost type is now in @/types/blog
import type { BlogPost } from '@/types/blog'
export type { BlogPost }

export function getAllPosts(lang: string = 'en'): BlogPost[] {
  const postsDirectory = getPostsDirectory(lang)
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title || '',
        date: matterResult.data.date || '',
        excerpt: matterResult.data.excerpt || '',
        author: matterResult.data.author || '',
        tags: matterResult.data.tags || [],
        readTime: matterResult.data.readTime || '5 min read',
        image: matterResult.data.image || '',
        imageAlt: matterResult.data.imageAlt || '',
      }
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string, lang: string = 'en'): Promise<BlogPost | null> {
  try {
    const postsDirectory = getPostsDirectory(lang)
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: matterResult.data.title || '',
      date: matterResult.data.date || '',
      excerpt: matterResult.data.excerpt || '',
      author: matterResult.data.author || '',
      tags: matterResult.data.tags || [],
      readTime: matterResult.data.readTime || '5 min read',
      content: contentHtml,
    }
  } catch (error) {
    return null
  }
}

export function getPostsByTag(tag: string, lang: string = 'en'): BlogPost[] {
  const allPosts = getAllPosts(lang)
  return allPosts.filter((post) => post.tags.includes(tag))
}

export function getAllTags(lang: string = 'en'): string[] {
  const allPosts = getAllPosts(lang)
  const tags = allPosts.flatMap((post) => post.tags)
  return Array.from(new Set(tags))
} 