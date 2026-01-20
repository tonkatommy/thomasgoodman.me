import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogPostDetail } from '@/components/blog/BlogPostDetail'
import { getPublishedBlogPostBySlug } from '@/lib/blog/posts'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
  try {
    return await getPublishedBlogPostBySlug(slug)
  } catch (error) {
    // Return null if database is not available
    console.warn('Database not available:', error)
    return null
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: `${post.title} - Thomas Goodman`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : [],
      type: 'article',
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return <BlogPostDetail post={post} />
}

