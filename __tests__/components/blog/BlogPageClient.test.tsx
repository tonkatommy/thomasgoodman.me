import { render, screen, fireEvent, within } from '@testing-library/react'
import { BlogPageClient } from '@/components/blog/BlogPageClient'

const mockPosts = [
  {
    id: '1',
    title: 'Next.js MDX Setup',
    slug: 'nextjs-mdx-setup',
    excerpt: 'How to render MDX in Next.js',
    author: 'Thomas Goodman',
    publishedAt: '2026-01-01T00:00:00.000Z',
    tags: ['Next.js', 'MDX'],
    category: 'Engineering',
    featuredImage: undefined,
    views: 0,
  },
  {
    id: '2',
    title: 'MongoDB with Mongoose',
    slug: 'mongodb-with-mongoose',
    excerpt: 'Using Mongoose safely in Next.js',
    author: 'Thomas Goodman',
    publishedAt: '2026-01-02T00:00:00.000Z',
    tags: ['MongoDB'],
    category: 'Backend',
    featuredImage: undefined,
    views: 0,
  },
]

describe('BlogPageClient', () => {
  it('should render all posts initially', () => {
    render(<BlogPageClient initialPosts={mockPosts} categories={['Engineering', 'Backend']} tags={['Next.js', 'MDX', 'MongoDB']} />)

    expect(screen.getByText('Next.js MDX Setup')).toBeInTheDocument()
    expect(screen.getByText('MongoDB with Mongoose')).toBeInTheDocument()
  })

  it('should filter by search query', () => {
    render(<BlogPageClient initialPosts={mockPosts} categories={['Engineering', 'Backend']} tags={['Next.js', 'MDX', 'MongoDB']} />)

    const searchInput = screen.getByLabelText('Search posts')
    fireEvent.change(searchInput, { target: { value: 'mongo' } })

    expect(screen.queryByText('Next.js MDX Setup')).not.toBeInTheDocument()
    expect(screen.getByText('MongoDB with Mongoose')).toBeInTheDocument()
  })

  it('should filter by category', () => {
    render(<BlogPageClient initialPosts={mockPosts} categories={['Engineering', 'Backend']} tags={['Next.js', 'MDX', 'MongoDB']} />)

    fireEvent.mouseDown(screen.getByLabelText('Category'))
    const listbox = screen.getByRole('listbox')
    fireEvent.click(within(listbox).getByText('Engineering'))

    expect(screen.getByText('Next.js MDX Setup')).toBeInTheDocument()
    expect(screen.queryByText('MongoDB with Mongoose')).not.toBeInTheDocument()
  })

  it('should filter by tag', () => {
    render(<BlogPageClient initialPosts={mockPosts} categories={['Engineering', 'Backend']} tags={['Next.js', 'MDX', 'MongoDB']} />)

    fireEvent.mouseDown(screen.getByLabelText('Tag'))
    const listbox = screen.getByRole('listbox')
    fireEvent.click(within(listbox).getByText('MDX'))

    expect(screen.getByText('Next.js MDX Setup')).toBeInTheDocument()
    expect(screen.queryByText('MongoDB with Mongoose')).not.toBeInTheDocument()
  })

  it('should clear filters', () => {
    render(<BlogPageClient initialPosts={mockPosts} categories={['Engineering', 'Backend']} tags={['Next.js', 'MDX', 'MongoDB']} />)

    const searchInput = screen.getByLabelText('Search posts')
    fireEvent.change(searchInput, { target: { value: 'mongo' } })
    expect(screen.queryByText('Next.js MDX Setup')).not.toBeInTheDocument()

    fireEvent.click(screen.getByText('Clear'))
    expect((searchInput as HTMLInputElement).value).toBe('')
    expect(screen.getByText('Next.js MDX Setup')).toBeInTheDocument()
    expect(screen.getByText('MongoDB with Mongoose')).toBeInTheDocument()
  })
})

