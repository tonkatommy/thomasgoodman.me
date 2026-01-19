import { render, screen } from '@testing-library/react'
import { ProjectGrid } from '@/components/projects/ProjectGrid'

const mockProjects = [
  {
    id: '1',
    title: 'Project One',
    slug: 'project-one',
    description: 'A great project',
    image: null,
    technologies: ['React', 'TypeScript'],
    category: 'Web App',
    featured: true,
    githubUrl: 'https://github.com/example',
    liveUrl: 'https://example.com',
  },
  {
    id: '2',
    title: 'Project Two',
    slug: 'project-two',
    description: 'Another project',
    image: null,
    technologies: ['Node.js', 'Express'],
    category: 'API',
    featured: false,
    githubUrl: null,
    liveUrl: null,
  },
]

describe('ProjectGrid', () => {
  it('should render project cards', () => {
    render(<ProjectGrid projects={mockProjects} />)

    expect(screen.getByText('Project One')).toBeInTheDocument()
    expect(screen.getByText('Project Two')).toBeInTheDocument()
  })

  it('should display project descriptions', () => {
    render(<ProjectGrid projects={mockProjects} />)

    expect(screen.getByText('A great project')).toBeInTheDocument()
    expect(screen.getByText('Another project')).toBeInTheDocument()
  })

  it('should show featured badge for featured projects', () => {
    render(<ProjectGrid projects={mockProjects} />)

    expect(screen.getByText('Featured')).toBeInTheDocument()
  })

  it('should display technology tags', () => {
    render(<ProjectGrid projects={mockProjects} />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('Express')).toBeInTheDocument()
  })

  it('should display category chips', () => {
    render(<ProjectGrid projects={mockProjects} />)

    expect(screen.getByText('Web App')).toBeInTheDocument()
    expect(screen.getByText('API')).toBeInTheDocument()
  })

  it('should show View Details button', () => {
    render(<ProjectGrid projects={mockProjects} />)

    const buttons = screen.getAllByText('View Details')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('should show GitHub link when available', () => {
    render(<ProjectGrid projects={mockProjects} />)

    const githubLinks = screen.getAllByText('Code')
    expect(githubLinks.length).toBeGreaterThan(0)
  })

  it('should handle empty projects array', () => {
    render(<ProjectGrid projects={[]} />)

    expect(screen.getByText(/No projects available yet/i)).toBeInTheDocument()
  })
})
