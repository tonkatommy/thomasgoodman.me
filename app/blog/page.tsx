import type { Metadata } from 'next'
import { BlogPageClient } from '@/components/blog/BlogPageClient'
import { getPublishedBlogPosts } from '@/lib/blog/posts'

export const metadata: Metadata = {
  title: 'Blog - Thomas Goodman',
  description: 'Technical articles and development insights by Thomas Goodman',
}

async function getBlogData() {
  try {
    const posts = await getPublishedBlogPosts()

    const categories = Array.from(new Set(posts.map((p) => p.category).filter(Boolean))) as string[]
    const tags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort() as string[]

    return { posts, categories, tags }
  } catch (error) {
    // Return empty arrays if database is not available (e.g., during build)
    console.warn('Database not available, returning empty blog posts:', error)
    return { posts: [], categories: [], tags: [] }
  }
}

export default async function BlogPage() {
  const { posts, categories, tags } = await getBlogData()
  return <BlogPageClient initialPosts={posts} categories={categories} tags={tags} />
}

