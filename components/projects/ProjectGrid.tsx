'use client'

import { Grid, Card, CardContent, CardMedia, Typography, Box, Chip, Button, CardActions } from '@mui/material'
import { GitHub, Launch } from '@mui/icons-material'
import Link from 'next/link'
import Image from 'next/image'
import { slugify } from '@/lib/utils'

interface Project {
  id: string
  title: string
  slug: string
  description: string
  image?: string | null
  technologies: string[]
  category?: string | null
  featured: boolean
  githubUrl?: string | null
  liveUrl?: string | null
}

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 8 }}>
        No projects available yet.
      </Typography>
    )
  }

  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <Card
            elevation={project.featured ? 4 : 2}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 6,
              },
            }}
          >
            {project.image && (
              <CardMedia
                sx={{
                  height: 200,
                  position: 'relative',
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                />
              </CardMedia>
            )}
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, flexGrow: 1 }}>
                  {project.title}
                </Typography>
                {project.featured && (
                  <Chip label="Featured" size="small" color="primary" sx={{ ml: 1 }} />
                )}
              </Box>
              {project.category && (
                <Chip
                  label={project.category}
                  size="small"
                  variant="outlined"
                  sx={{ mb: 1, alignSelf: 'flex-start' }}
                />
              )}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: 2,
                  flexGrow: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {project.description}
              </Typography>
              {project.technologies.length > 0 && (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Chip key={tech} label={tech} size="small" variant="outlined" />
                  ))}
                  {project.technologies.length > 4 && (
                    <Chip label={`+${project.technologies.length - 4}`} size="small" variant="outlined" />
                  )}
                </Box>
              )}
            </CardContent>
            <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
              <Button
                LinkComponent={Link}
                href={`/projects/${project.slug}`}
                variant="contained"
                size="small"
                sx={{ mr: 1 }}
              >
                View Details
              </Button>
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHub />}
                  size="small"
                  variant="outlined"
                >
                  Code
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<Launch />}
                  size="small"
                  variant="outlined"
                >
                  Live
                </Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
