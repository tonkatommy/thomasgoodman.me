'use client'

import { Box, Typography, Paper, Chip } from '@mui/material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab'
import { Work as WorkIcon } from '@mui/icons-material'
import { formatDate } from '@/lib/utils'

interface Experience {
  id: string
  title: string
  company: string
  location?: string | null
  description: string
  startDate: Date
  endDate?: Date | null
  current: boolean
  skills: string[]
  type?: string | null
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  if (experiences.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
        No experience entries yet.
      </Typography>
    )
  }

  return (
    <Timeline position="alternate">
      {experiences.map((exp, index) => (
        <TimelineItem key={exp.id}>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
            {index < experiences.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent sx={{ py: 3 }}>
            <Paper elevation={2} sx={{ p: 3, maxWidth: 500 }}>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                {exp.title}
              </Typography>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                {exp.company}
                {exp.location && ` • ${exp.location}`}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {formatDate(exp.startDate, { month: 'short', year: 'numeric' })} -{' '}
                {exp.current ? 'Present' : exp.endDate ? formatDate(exp.endDate, { month: 'short', year: 'numeric' }) : 'N/A'}
                {exp.type && ` • ${exp.type}`}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, whiteSpace: 'pre-line' }}>
                {exp.description}
              </Typography>
              {exp.skills.length > 0 && (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                  {exp.skills.map((skill) => (
                    <Chip key={skill} label={skill} size="small" variant="outlined" />
                  ))}
                </Box>
              )}
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
