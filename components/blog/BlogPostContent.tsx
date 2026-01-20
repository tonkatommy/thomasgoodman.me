import type { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { Box, Typography } from '@mui/material'

interface BlogPostContentProps {
  content: string
}

/**
 * Render MDX content safely in a server component.
 *
 * Notes:
 * - Uses `next-mdx-remote/rsc` so posts can be stored as MDX strings (e.g., in MongoDB).
 * - Keep the component mapping small and predictable to avoid surprising rendering differences.
 */
export function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <MDXRemote
      source={content}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
      components={{
        h1: (props: ComponentPropsWithoutRef<'h1'>) => (
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }} {...props} />
        ),
        h2: (props: ComponentPropsWithoutRef<'h2'>) => (
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700, mt: 3 }} {...props} />
        ),
        h3: (props: ComponentPropsWithoutRef<'h3'>) => (
          <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 700, mt: 2 }} {...props} />
        ),
        p: (props: ComponentPropsWithoutRef<'p'>) => <Typography variant="body1" sx={{ mb: 2 }} {...props} />,
        ul: (props: ComponentPropsWithoutRef<'ul'>) => <Box component="ul" sx={{ pl: 3, mb: 2 }} {...props} />,
        ol: (props: ComponentPropsWithoutRef<'ol'>) => <Box component="ol" sx={{ pl: 3, mb: 2 }} {...props} />,
        a: ({ href, ...props }: ComponentPropsWithoutRef<'a'>) => {
          const url = href ?? '#'
          const isInternal = url.startsWith('/')

          if (isInternal) {
            return <Link href={url} {...props} />
          }

          return <a href={url} target="_blank" rel="noreferrer" {...props} />
        },
        code: (props: ComponentPropsWithoutRef<'code'>) => <Box component="code" sx={{ fontFamily: 'monospace' }} {...props} />,
        pre: (props: ComponentPropsWithoutRef<'pre'>) => (
          <Box
            component="pre"
            sx={{
              p: 2,
              borderRadius: 1,
              overflowX: 'auto',
              backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'),
              mb: 2,
            }}
            {...props}
          />
        ),
      }}
    />
  )
}

