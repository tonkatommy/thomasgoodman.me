import type { Metadata } from 'next'
import { ExperienceTimeline } from '@/components/resume/ExperienceTimeline'
import { EducationSection } from '@/components/resume/EducationSection'
import { CertificationsSection } from '@/components/resume/CertificationsSection'
import { SkillsGrid } from '@/components/resume/SkillsGrid'
import { Box, Typography, Paper, Divider } from '@mui/material'
import { prisma } from '@/lib/db/prisma'

export const metadata: Metadata = {
  title: 'Resume - Thomas Goodman',
  description: 'Professional experience, education, certifications, and skills of Thomas Goodman',
}

async function getResumeData() {
  try {
    const [experiences, education, certifications, skills] = await Promise.all([
      prisma.experience.findMany({
        orderBy: [
          { current: 'desc' },
          { startDate: 'desc' },
          { order: 'asc' },
        ],
      }),
      prisma.education.findMany({
        orderBy: [
          { current: 'desc' },
          { startDate: 'desc' },
          { order: 'asc' },
        ],
      }),
      prisma.certification.findMany({
        orderBy: [
          { issueDate: 'desc' },
          { order: 'asc' },
        ],
      }),
      prisma.skill.findMany({
        orderBy: [
          { category: 'asc' },
          { order: 'asc' },
          { proficiency: 'desc' },
        ],
      }),
    ])

    return { experiences, education, certifications, skills }
  } catch (error) {
    // Return empty arrays if database is not available (e.g., during build)
    console.warn('Database not available, returning empty resume data:', error)
    return { experiences: [], education: [], certifications: [], skills: [] }
  }
}

export default async function ResumePage() {
  const { experiences, education, certifications, skills } = await getResumeData()

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Resume
      </Typography>

      {/* Skills Section */}
      <Paper elevation={0} sx={{ p: 3, mb: 4, border: 1, borderColor: 'divider' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
          Skills
        </Typography>
        <SkillsGrid skills={skills} />
      </Paper>

      {/* Experience Section */}
      <Paper elevation={0} sx={{ p: 3, mb: 4, border: 1, borderColor: 'divider' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
          Professional Experience
        </Typography>
        <ExperienceTimeline experiences={experiences} />
      </Paper>

      <Divider sx={{ my: 4 }} />

      {/* Education Section */}
      <Paper elevation={0} sx={{ p: 3, mb: 4, border: 1, borderColor: 'divider' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
          Education
        </Typography>
        <EducationSection education={education} />
      </Paper>

      {/* Certifications Section */}
      {certifications.length > 0 && (
        <Paper elevation={0} sx={{ p: 3, mb: 4, border: 1, borderColor: 'divider' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Certifications
          </Typography>
          <CertificationsSection certifications={certifications} />
        </Paper>
      )}
    </Box>
  )
}
