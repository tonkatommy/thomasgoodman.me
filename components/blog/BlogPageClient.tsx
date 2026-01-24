'use client'

import { useMemo, useState } from 'react'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import type { BlogPostListItem } from '@/lib/blog/posts'
import { BlogPostCard } from './BlogPostCard'

interface BlogPageClientProps {
  initialPosts: BlogPostListItem[]
  categories: string[]
  tags: string[]
}

export function BlogPageClient({ initialPosts, categories, tags }: BlogPageClientProps) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string>('all')
  const [tag, setTag] = useState<string>('all')

  const filteredPosts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return initialPosts.filter((post) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        post.title.toLowerCase().includes(normalizedSearch) ||
        (post.excerpt?.toLowerCase().includes(normalizedSearch) ?? false)

      const matchesCategory = category === 'all' || post.category === category
      const matchesTag = tag === 'all' || post.tags.includes(tag)

      return matchesSearch && matchesCategory && matchesTag
    })
  }, [category, initialPosts, search, tag])

  const clearFilters = () => {
    setSearch('')
    setCategory('all')
    setTag('all')
  }

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Blog
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', mb: 4 }}>
        <TextField
          label="Search posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          sx={{ minWidth: { xs: '100%', sm: 280 } }}
          inputProps={{ 'aria-label': 'Search posts' }}
        />

        <FormControl size="small" sx={{ minWidth: 180 }}>
          <InputLabel id="blog-category-label">Category</InputLabel>
          <Select
            labelId="blog-category-label"
            value={category}
            label="Category"
            onChange={(e) => setCategory(String(e.target.value))}
          >
            <MenuItem value="all">All</MenuItem>
            {categories.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 180 }}>
          <InputLabel id="blog-tag-label">Tag</InputLabel>
          <Select labelId="blog-tag-label" value={tag} label="Tag" onChange={(e) => setTag(String(e.target.value))}>
            <MenuItem value="all">All</MenuItem>
            {tags.map((t) => (
              <MenuItem key={t} value={t}>
                {t}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button onClick={clearFilters} variant="outlined" size="small">
          Clear
        </Button>
      </Box>

      {filteredPosts.length === 0 ? (
        <Typography color="text.secondary">No posts found.</Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredPosts.map((post) => (
            <Grid key={post.id} item xs={12} md={6}>
              <BlogPostCard post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}

