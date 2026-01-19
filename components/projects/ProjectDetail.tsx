'use client'

import { Box, Typography, Paper, Chip, Button, Divider, Grid } from '@mui/material'
import { GitHub, Launch, ArrowBack } from '@mui/icons-material'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription?: string | null
  image?: string | null
  images: string[]
  technologies: string[]
  category?: string | null
  featured: boolean
  githubUrl?: string | null
  liveUrl?: string | null
  startDate?: Date | null
  endDate?: Date | null
}

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <Box sx={{ py: 4 }}>
      <Button
        LinkComponent={Link}
        href="/projects"
        startIcon={<ArrowBack />}
        sx={{ mb: 4 }}
      >
        Back to Projects
      </Button>

      <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: 'divider' }}>
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 600 }}>
              {project.title}
            </Typography>
            {project.featured && (
              <Chip label="Featured" color="primary" />
            )}
          </Box>

          {project.category && (
            <Chip
              label={project.category}
              variant="outlined"
              sx={{ mb: 2 }}
            />
          )}

          {(project.startDate || project.endDate) && (
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {project.startDate && formatDate(project.startDate, { month: 'long', year: 'numeric' })}
              {project.startDate && project.endDate && ' - '}
              {project.endDate && formatDate(project.endDate, { month: 'long', year: 'numeric' })}
            </Typography>
          )}

          <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                startIcon={<GitHub />}
              >
                View Code
              </Button>
            )}
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="secondary"
                startIcon={<Launch />}
              >
                View Live Site
              </Button>
            )}
          </Box>
        </Box>

        {project.image && (
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: 400,
              mb: 4,
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </Box>
        )}

        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
          About This Project
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, whiteSpace: 'pre-line' }}>
          {project.longDescription || project.description}
        </Typography>

        {project.technologies.length > 0 && (
          <>
            <Divider sx={{ my: 4 }} />
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              Technologies Used
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {project.technologies.map((tech) => (
                <Chip key={tech} label={tech} variant="outlined" />
              ))}
            </Box>
          </>
        )}

        {project.images.length > 0 && (
          <>
            <Divider sx={{ my: 4 }} />
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              Project Images
            </Typography>
            <Grid container spacing={2}>
              {project.images.map((imageUrl, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: 300,
                      borderRadius: 2,
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={imageUrl}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Paper>
    </Box>
  )
}
