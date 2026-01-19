'use client'

import { Box, Chip, Typography, Paper } from '@mui/material'
import { useMemo } from 'react'

interface Skill {
  id: string
  name: string
  category: string
  proficiency: number
  icon?: string | null
}

interface SkillsGridProps {
  skills: Skill[]
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const skillsByCategory = useMemo(() => {
    const grouped: Record<string, Skill[]> = {}
    skills.forEach((skill) => {
      if (!grouped[skill.category]) {
        grouped[skill.category] = []
      }
      grouped[skill.category].push(skill)
    })
    return grouped
  }, [skills])

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 80) return 'success'
    if (proficiency >= 60) return 'info'
    if (proficiency >= 40) return 'warning'
    return 'default'
  }

  return (
    <Box>
      {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            {category}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {categorySkills.map((skill) => (
              <Chip
                key={skill.id}
                label={skill.name}
                color={getProficiencyColor(skill.proficiency) as any}
                variant="outlined"
                sx={{
                  height: 'auto',
                  py: 1.5,
                  '& .MuiChip-label': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  },
                }}
              />
            ))}
          </Box>
          {categorySkills.some((s) => s.proficiency < 100) && (
            <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {categorySkills
                .filter((s) => s.proficiency < 100)
                .map((skill) => (
                  <Box key={skill.id} sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 200 }}>
                    <Typography variant="body2" sx={{ minWidth: 100 }}>
                      {skill.name}:
                    </Typography>
                    <Box
                      sx={{
                        flexGrow: 1,
                        height: 8,
                        bgcolor: 'divider',
                        borderRadius: 1,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          width: `${skill.proficiency}%`,
                          height: '100%',
                          bgcolor: getProficiencyColor(skill.proficiency) === 'success' ? 'success.main' :
                                   getProficiencyColor(skill.proficiency) === 'info' ? 'info.main' :
                                   getProficiencyColor(skill.proficiency) === 'warning' ? 'warning.main' :
                                   'text.secondary',
                          transition: 'width 0.3s ease',
                        }}
                      />
                    </Box>
                    <Typography variant="caption" sx={{ minWidth: 35, textAlign: 'right' }}>
                      {skill.proficiency}%
                    </Typography>
                  </Box>
                ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  )
}
