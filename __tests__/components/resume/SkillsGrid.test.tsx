import { render, screen } from '@testing-library/react'
import { SkillsGrid } from '@/components/resume/SkillsGrid'

const mockSkills = [
  {
    id: '1',
    name: 'React',
    category: 'Frontend',
    proficiency: 90,
    icon: null,
  },
  {
    id: '2',
    name: 'TypeScript',
    category: 'Frontend',
    proficiency: 85,
    icon: null,
  },
  {
    id: '3',
    name: 'Node.js',
    category: 'Backend',
    proficiency: 80,
    icon: null,
  },
  {
    id: '4',
    name: 'Python',
    category: 'Backend',
    proficiency: 70,
    icon: null,
  },
]

describe('SkillsGrid', () => {
  it('should render skills grouped by category', () => {
    render(<SkillsGrid skills={mockSkills} />)

    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
  })

  it('should display skill names', () => {
    render(<SkillsGrid skills={mockSkills} />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
  })

  it('should display proficiency bars for skills under 100%', () => {
    render(<SkillsGrid skills={mockSkills} />)

    // Check for proficiency percentages
    expect(screen.getByText('90%')).toBeInTheDocument()
    expect(screen.getByText('85%')).toBeInTheDocument()
    expect(screen.getByText('80%')).toBeInTheDocument()
    expect(screen.getByText('70%')).toBeInTheDocument()
  })

  it('should handle empty skills array', () => {
    render(<SkillsGrid skills={[]} />)

    // Should not crash, but may show empty state
    expect(screen.queryByText('Frontend')).not.toBeInTheDocument()
  })
})
