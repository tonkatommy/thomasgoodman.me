'use client'

import { Box, Typography, Button, Container, Paper } from '@mui/material'
import Link from 'next/link'
import { ArrowForward } from '@mui/icons-material'

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
          Thomas Goodman
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mb: 4 }}>
          Full-Stack Developer
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 6 }}>
          Welcome to my personal portfolio. Explore my projects, read my blog, and learn more about my journey as a developer.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 8 }}>
          <Button
            LinkComponent={Link}
            href="/resume"
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
          >
            View Resume
          </Button>
          <Button
            LinkComponent={Link}
            href="/projects"
            variant="outlined"
            size="large"
            endIcon={<ArrowForward />}
          >
            View Projects
          </Button>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3, mt: 8 }}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Resume
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              View my professional experience, education, and skills
            </Typography>
            <Button LinkComponent={Link} href="/resume" size="small">
              View Resume →
            </Button>
          </Paper>

          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Projects
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Explore my development projects and work
            </Typography>
            <Button LinkComponent={Link} href="/projects" size="small">
              View Projects →
            </Button>
          </Paper>

          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Blog
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Read my technical articles and insights
            </Typography>
            <Button LinkComponent={Link} href="/blog" size="small">
              Read Blog →
            </Button>
          </Paper>
        </Box>
      </Box>
    </Container>
  )
}
