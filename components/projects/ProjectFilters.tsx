'use client'

import { Box, Chip, Typography, TextField, InputAdornment } from '@mui/material'
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material'

interface ProjectFiltersProps {
  categories: string[]
  technologies: string[]
  selectedCategory: string | null
  selectedTechnologies: Set<string>
  searchQuery: string
  onCategoryChange: (category: string | null) => void
  onTechnologiesChange: (technologies: Set<string>) => void
  onSearchChange: (query: string) => void
}

export function ProjectFilters({
  categories,
  technologies,
  selectedCategory,
  selectedTechnologies,
  searchQuery,
  onCategoryChange,
  onTechnologiesChange,
  onSearchChange,
}: ProjectFiltersProps) {
  const handleCategoryClick = (category: string) => {
    onCategoryChange(selectedCategory === category ? null : category)
  }

  const handleTechnologyClick = (tech: string) => {
    const newSet = new Set(selectedTechnologies)
    if (newSet.has(tech)) {
      newSet.delete(tech)
    } else {
      newSet.add(tech)
    }
    onTechnologiesChange(newSet)
  }

  const clearFilters = () => {
    onCategoryChange(null)
    onTechnologiesChange(new Set())
    onSearchChange('')
  }

  const hasActiveFilters = selectedCategory !== null || selectedTechnologies.size > 0 || searchQuery.length > 0

  return (
    <Box sx={{ mb: 4 }}>
        <TextField
        fullWidth
        placeholder="Search projects..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: searchQuery && (
            <InputAdornment position="end">
              <ClearIcon
                sx={{ cursor: 'pointer' }}
                onClick={() => onSearchChange('')}
              />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      {categories.length > 0 && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
            Categories
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => handleCategoryClick(category)}
                color={selectedCategory === category ? 'primary' : 'default'}
                variant={selectedCategory === category ? 'filled' : 'outlined'}
                sx={{ cursor: 'pointer' }}
              />
            ))}
          </Box>
        </Box>
      )}

      {technologies.length > 0 && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
            Technologies
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                onClick={() => handleTechnologyClick(tech)}
                color={selectedTechnologies.has(tech) ? 'primary' : 'default'}
                variant={selectedTechnologies.has(tech) ? 'filled' : 'outlined'}
                size="small"
                sx={{ cursor: 'pointer' }}
              />
            ))}
          </Box>
        </Box>
      )}

      {hasActiveFilters && (
        <Box sx={{ mt: 2 }}>
          <Chip
            label="Clear Filters"
            onClick={clearFilters}
            color="secondary"
            variant="outlined"
            icon={<ClearIcon />}
            sx={{ cursor: 'pointer' }}
          />
        </Box>
      )}
    </Box>
  )
}
