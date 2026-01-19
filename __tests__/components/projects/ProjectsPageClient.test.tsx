import { render, screen, fireEvent } from '@testing-library/react'
import { ProjectsPageClient } from '@/components/projects/ProjectsPageClient'

const mockProjects = [
  {
    id: '1',
    title: 'React Project',
    slug: 'react-project',
    description: 'A React application',
    image: null,
    technologies: ['React', 'TypeScript'],
    category: 'Web App',
    featured: true,
    githubUrl: 'https://github.com/example',
    liveUrl: null,
  },
  {
    id: '2',
    title: 'Node API',
    slug: 'node-api',
    description: 'A Node.js API',
    image: null,
    technologies: ['Node.js', 'Express'],
    category: 'API',
    featured: false,
    githubUrl: null,
    liveUrl: null,
  },
]

describe('ProjectsPageClient', () => {
  it('should render all projects initially', () => {
    render(
      <ProjectsPageClient
        initialProjects={mockProjects}
        categories={['Web App', 'API']}
        technologies={['React', 'TypeScript', 'Node.js', 'Express']}
      />
    )

    expect(screen.getByText('React Project')).toBeInTheDocument()
    expect(screen.getByText('Node API')).toBeInTheDocument()
  })

  it('should filter by category', () => {
    render(
      <ProjectsPageClient
        initialProjects={mockProjects}
        categories={['Web App', 'API']}
        technologies={['React', 'TypeScript', 'Node.js', 'Express']}
      />
    )

    // Get all "Web App" elements and click the first one (should be in filters)
    const webAppChips = screen.getAllByText('Web App')
    fireEvent.click(webAppChips[0])

    expect(screen.getByText('React Project')).toBeInTheDocument()
    expect(screen.queryByText('Node API')).not.toBeInTheDocument()
  })

  it('should filter by technology', () => {
    render(
      <ProjectsPageClient
        initialProjects={mockProjects}
        categories={['Web App', 'API']}
        technologies={['React', 'TypeScript', 'Node.js', 'Express']}
      />
    )

    // Get all "React" elements and click the first one (should be in filters)
    const reactChips = screen.getAllByText('React')
    fireEvent.click(reactChips[0])

    expect(screen.getByText('React Project')).toBeInTheDocument()
    expect(screen.queryByText('Node API')).not.toBeInTheDocument()
  })

  it('should filter by search query', () => {
    render(
      <ProjectsPageClient
        initialProjects={mockProjects}
        categories={['Web App', 'API']}
        technologies={['React', 'TypeScript', 'Node.js', 'Express']}
      />
    )

    const searchInput = screen.getByPlaceholderText('Search projects...')
    fireEvent.change(searchInput, { target: { value: 'React' } })

    expect(screen.getByText('React Project')).toBeInTheDocument()
    expect(screen.queryByText('Node API')).not.toBeInTheDocument()
  })

  it('should combine multiple filters', () => {
    render(
      <ProjectsPageClient
        initialProjects={mockProjects}
        categories={['Web App', 'API']}
        technologies={['React', 'TypeScript', 'Node.js', 'Express']}
      />
    )

    // Select category - get filter chip (not project card)
    const webAppChips = screen.getAllByText('Web App')
    fireEvent.click(webAppChips[0]) // First one should be in filters

    // Select technology - get filter chip
    const reactChips = screen.getAllByText('React')
    fireEvent.click(reactChips[0]) // First one should be in filters

    // Should still show React Project
    expect(screen.getByText('React Project')).toBeInTheDocument()
    expect(screen.queryByText('Node API')).not.toBeInTheDocument()
  })
})
