import type { MetadataRoute } from 'next'
import { prisma } from '@/lib/db/prisma'
import { getPublishedBlogPosts } from '@/lib/blog/posts'
import { getNextAuthUrl } from '@/lib/utils/env'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getNextAuthUrl().replace(/\/$/, '')
  const now = new Date()

  const entries: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/resume`, lastModified: now },
    { url: `${baseUrl}/projects`, lastModified: now },
    { url: `${baseUrl}/blog`, lastModified: now },
  ]

  try {
    const projects = await prisma.project.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    })

    for (const project of projects) {
      entries.push({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: project.updatedAt,
      })
    }
  } catch (error) {
    // Database may not be available during build; keep sitemap best-effort.
    console.warn('Database not available for project sitemap entries:', error)
  }

  try {
    const posts = await getPublishedBlogPosts()
    for (const post of posts) {
      entries.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
      })
    }
  } catch (error) {
    // MongoDB may not be available during build; keep sitemap best-effort.
    console.warn('Database not available for blog sitemap entries:', error)
  }

  return entries
}

