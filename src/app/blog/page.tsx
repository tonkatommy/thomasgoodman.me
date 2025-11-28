/**
 * =============================================================================
 * Blog Page
 * =============================================================================
 * 
 * Displays all blog posts with search and filtering.
 * =============================================================================
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

// -----------------------------------------------------------------------------
// Metadata
// -----------------------------------------------------------------------------

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Articles about web development, TypeScript, React, and software engineering best practices.',
};

// -----------------------------------------------------------------------------
// Sample Blog Posts Data
// -----------------------------------------------------------------------------

/**
 * Sample blog posts
 * In production, these would come from a CMS or MDX files
 */
const blogPosts: BlogPost[] = [
    {
        slug: 'getting-started-with-typescript',
        title: 'Getting Started with TypeScript in 2024',
        excerpt: 'A comprehensive guide to starting your TypeScript journey, from basic types to advanced patterns.',
        content: '',
        coverImage: '/blog/typescript.png',
        publishedAt: '2024-01-15',
        author: {
            name: 'Thomas Goodman',
            avatar: '/avatar.png',
        },
        tags: ['TypeScript', 'JavaScript', 'Tutorial'],
        readingTime: 8,
        published: true,
    },
    {
        slug: 'nextjs-app-router-guide',
        title: 'Understanding Next.js App Router',
        excerpt: 'Deep dive into the Next.js App Router, server components, and the new data fetching patterns.',
        content: '',
        coverImage: '/blog/nextjs.png',
        publishedAt: '2024-01-10',
        author: {
            name: 'Thomas Goodman',
            avatar: '/avatar.png',
        },
        tags: ['Next.js', 'React', 'Tutorial'],
        readingTime: 12,
        published: true,
    },
    {
        slug: 'tailwind-css-best-practices',
        title: 'Tailwind CSS Best Practices',
        excerpt: 'Tips and tricks for writing maintainable Tailwind CSS in large-scale applications.',
        content: '',
        coverImage: '/blog/tailwind.png',
        publishedAt: '2024-01-05',
        author: {
            name: 'Thomas Goodman',
            avatar: '/avatar.png',
        },
        tags: ['CSS', 'Tailwind', 'Best Practices'],
        readingTime: 6,
        published: true,
    },
];

// -----------------------------------------------------------------------------
// Blog Post Card Component
// -----------------------------------------------------------------------------

interface BlogPostCardProps {
    post: BlogPost;
}

function BlogPostCard({ post }: BlogPostCardProps): JSX.Element {
    return (
        <article className="card group">
            {/* Cover Image */}
            <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-primary/20 to-purple-500/20">
                    📝
                </div>
            </div>

            {/* Post Info */}
            <div className="space-y-3">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h2 className="font-semibold text-xl group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm line-clamp-2">
                    {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                    <time dateTime={post.publishedAt}>
                        {formatDate(post.publishedAt)}
                    </time>
                    <span>·</span>
                    <span>{post.readingTime} min read</span>
                </div>
            </div>
        </article>
    );
}

// -----------------------------------------------------------------------------
// Blog Page Component
// -----------------------------------------------------------------------------

export default function BlogPage(): JSX.Element {
    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <section className="section bg-muted/30">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Blog
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Thoughts on web development, TypeScript, and building
                        modern applications.
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="section">
                <div className="container">
                    {blogPosts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {blogPosts.map((post) => (
                                <BlogPostCard key={post.slug} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground text-lg">
                                No blog posts yet. Check back soon!
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
