import { Box, Chip, Divider, Paper, Typography } from '@mui/material'
import type { BlogPostDetail as BlogPostDetailType } from '@/lib/blog/posts'
import { formatDate } from '@/lib/utils'
import { BlogPostContent } from './BlogPostContent'

interface BlogPostDetailProps {
  post: BlogPostDetailType
}

export function BlogPostDetail({ post }: BlogPostDetailProps) {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        {post.title}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {post.publishedAt ? formatDate(post.publishedAt) : 'Unpublished'}
        {post.category ? ` • ${post.category}` : ''}
        {post.author ? ` • ${post.author}` : ''}
      </Typography>

      {post.tags.length > 0 && (
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
          {post.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" variant="outlined" />
          ))}
        </Box>
      )}

      <Divider sx={{ mb: 3 }} />

      <Paper elevation={0} sx={{ p: { xs: 2, sm: 3 }, border: 1, borderColor: 'divider' }}>
        <BlogPostContent content={post.content} />
      </Paper>
    </Box>
  )
}

