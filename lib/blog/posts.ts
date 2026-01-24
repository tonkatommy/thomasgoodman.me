import connectDB from '@/lib/db/mongodb'
import BlogPost from '@/lib/models/BlogPost'

export interface BlogPostListItem {
  id: string
  title: string
  slug: string
  excerpt?: string
  author: string
  publishedAt?: string
  tags: string[]
  category?: string
  featuredImage?: string
  views: number
}

export interface BlogPostDetail extends BlogPostListItem {
  content: string
}

type BlogPostLean = {
  _id: unknown
  title: string
  slug: string
  content?: string
  excerpt?: string
  author: string
  publishedAt?: Date
  tags?: string[]
  category?: string
  featuredImage?: string
  views?: number
  createdAt?: Date
}

function serializeListItem(doc: BlogPostLean): BlogPostListItem {
  return {
    id: String(doc._id),
    title: doc.title,
    slug: doc.slug,
    excerpt: doc.excerpt,
    author: doc.author,
    publishedAt: doc.publishedAt?.toISOString(),
    tags: Array.isArray(doc.tags) ? doc.tags : [],
    category: doc.category,
    featuredImage: doc.featuredImage,
    views: typeof doc.views === 'number' ? doc.views : 0,
  }
}

function serializeDetail(doc: BlogPostLean): BlogPostDetail {
  return {
    ...serializeListItem(doc),
    content: doc.content ?? '',
  }
}

/**
 * Fetch all published blog posts (newest first).
 *
 * Notes:
 * - Uses MongoDB (Mongoose) and returns plain serializable objects for RSC/client boundaries.
 * - Callers should wrap in try/catch if MongoDB isn't configured in the current environment.
 */
export async function getPublishedBlogPosts(): Promise<BlogPostListItem[]> {
  await connectDB()

  const docs = (await BlogPost.find({ published: true })
    .sort({ publishedAt: -1, createdAt: -1 })
    .select({
      title: 1,
      slug: 1,
      excerpt: 1,
      author: 1,
      publishedAt: 1,
      tags: 1,
      category: 1,
      featuredImage: 1,
      views: 1,
      createdAt: 1,
    })
    .lean()) as BlogPostLean[]

  return docs.map(serializeListItem)
}

/**
 * Fetch a single published blog post by slug.
 *
 * Returns null if not found or not published.
 */
export async function getPublishedBlogPostBySlug(slug: string): Promise<BlogPostDetail | null> {
  await connectDB()

  const doc = (await BlogPost.findOne({ slug, published: true })
    .select({
      title: 1,
      slug: 1,
      content: 1,
      excerpt: 1,
      author: 1,
      publishedAt: 1,
      tags: 1,
      category: 1,
      featuredImage: 1,
      views: 1,
      createdAt: 1,
    })
    .lean()) as BlogPostLean | null

  if (!doc) return null
  return serializeDetail(doc)
}

