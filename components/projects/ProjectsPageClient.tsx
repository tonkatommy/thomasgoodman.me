'use client'

import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { ProjectGrid } from './ProjectGrid'
import { ProjectFilters } from './ProjectFilters'

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

interface ProjectsPageClientProps {
  initialProjects: Project[]
  categories: string[]
  technologies: string[]
}

export function ProjectsPageClient({ initialProjects, categories, technologies }: ProjectsPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTechnologies, setSelectedTechnologies] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      // Category filter
      if (selectedCategory && project.category !== selectedCategory) {
        return false
      }

      // Technology filter
      if (selectedTechnologies.size > 0) {
        const hasSelectedTech = Array.from(selectedTechnologies).some((tech) =>
          project.technologies.includes(tech)
        )
        if (!hasSelectedTech) {
          return false
        }
      }

      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesTitle = project.title.toLowerCase().includes(query)
        const matchesDescription = project.description.toLowerCase().includes(query)
        const matchesTech = project.technologies.some((tech) =>
          tech.toLowerCase().includes(query)
        )
        if (!matchesTitle && !matchesDescription && !matchesTech) {
          return false
        }
      }

      return true
    })
  }, [initialProjects, selectedCategory, selectedTechnologies, searchQuery])

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
        Projects
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        A collection of my development projects and work
      </Typography>

      <ProjectFilters
        categories={categories}
        technologies={technologies}
        selectedCategory={selectedCategory}
        selectedTechnologies={selectedTechnologies}
        searchQuery={searchQuery}
        onCategoryChange={setSelectedCategory}
        onTechnologiesChange={setSelectedTechnologies}
        onSearchChange={setSearchQuery}
      />

      <ProjectGrid projects={filteredProjects} />
    </Box>
  )
}
