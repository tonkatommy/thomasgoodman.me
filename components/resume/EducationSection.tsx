'use client'

import { Box, Typography, Card, CardContent, Grid } from '@mui/material'
import { School as SchoolIcon } from '@mui/icons-material'
import { formatDate } from '@/lib/utils'

interface Education {
  id: string
  institution: string
  degree: string
  field?: string | null
  location?: string | null
  startDate: Date
  endDate?: Date | null
  current: boolean
  description?: string | null
  gpa?: string | null
}

interface EducationSectionProps {
  education: Education[]
}

export function EducationSection({ education }: EducationSectionProps) {
  if (education.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
        No education entries yet.
      </Typography>
    )
  }

  return (
    <Grid container spacing={3}>
      {education.map((edu) => (
        <Grid item xs={12} md={6} key={edu.id}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'start', gap: 2, mb: 2 }}>
                <SchoolIcon color="primary" sx={{ fontSize: 40 }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {edu.degree}
                    {edu.field && ` in ${edu.field}`}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {edu.institution}
                  </Typography>
                  {edu.location && (
                    <Typography variant="body2" color="text.secondary">
                      {edu.location}
                    </Typography>
                  )}
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {formatDate(edu.startDate, { month: 'short', year: 'numeric' })} -{' '}
                {edu.current ? 'Present' : edu.endDate ? formatDate(edu.endDate, { month: 'short', year: 'numeric' }) : 'N/A'}
              </Typography>
              {edu.gpa && (
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>GPA:</strong> {edu.gpa}
                </Typography>
              )}
              {edu.description && (
                <Typography variant="body2" sx={{ mt: 2, whiteSpace: 'pre-line' }}>
                  {edu.description}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
