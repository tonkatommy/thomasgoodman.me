import Link from 'next/link'
import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from '@mui/material'
import type { BlogPostListItem } from '@/lib/blog/posts'
import { formatDate } from '@/lib/utils'

interface BlogPostCardProps {
  post: BlogPostListItem
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card elevation={0} sx={{ border: 1, borderColor: 'divider', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
          {post.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {post.publishedAt ? formatDate(post.publishedAt) : 'Unpublished'}
          {post.category ? ` • ${post.category}` : ''}
        </Typography>

        {post.excerpt && (
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {post.excerpt}
          </Typography>
        )}

        {post.tags.length > 0 && (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {post.tags.slice(0, 6).map((tag) => (
              <Chip key={tag} label={tag} size="small" variant="outlined" />
            ))}
          </Box>
        )}
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button LinkComponent={Link} href={`/blog/${post.slug}`} size="small">
          Read →
        </Button>
      </CardActions>
    </Card>
  )
}

