import { render, screen } from '@testing-library/react'
import { ExperienceTimeline } from '@/components/resume/ExperienceTimeline'

const mockExperiences = [
  {
    id: '1',
    title: 'Senior Developer',
    company: 'Tech Corp',
    location: 'Remote',
    description: 'Led development team',
    startDate: new Date('2022-01-01'),
    endDate: null,
    current: true,
    skills: ['React', 'TypeScript'],
    type: 'full-time',
  },
  {
    id: '2',
    title: 'Developer',
    company: 'Startup Inc',
    location: 'San Francisco',
    description: 'Built web applications',
    startDate: new Date('2020-01-01'),
    endDate: new Date('2021-12-31'),
    current: false,
    skills: ['JavaScript', 'Node.js'],
    type: 'full-time',
  },
]

describe('ExperienceTimeline', () => {
  it('should render experience entries', () => {
    render(<ExperienceTimeline experiences={mockExperiences} />)

    expect(screen.getByText('Senior Developer')).toBeInTheDocument()
    expect(screen.getByText(/Tech Corp/i)).toBeInTheDocument()
    expect(screen.getByText('Developer')).toBeInTheDocument()
    expect(screen.getByText(/Startup Inc/i)).toBeInTheDocument()
  })

  it('should display current position correctly', () => {
    render(<ExperienceTimeline experiences={mockExperiences} />)

    expect(screen.getByText(/Present/i)).toBeInTheDocument()
  })

  it('should display skills as chips', () => {
    render(<ExperienceTimeline experiences={mockExperiences} />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
  })

  it('should handle empty experiences', () => {
    render(<ExperienceTimeline experiences={[]} />)

    expect(screen.getByText(/No experience entries yet/i)).toBeInTheDocument()
  })

  it('should display location when provided', () => {
    render(<ExperienceTimeline experiences={mockExperiences} />)

    expect(screen.getByText(/Remote/i)).toBeInTheDocument()
    expect(screen.getByText(/San Francisco/i)).toBeInTheDocument()
  })
})
