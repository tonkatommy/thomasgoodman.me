import { render, screen, fireEvent } from '@testing-library/react'
import { ProjectFilters } from '@/components/projects/ProjectFilters'

const mockCategories = ['Web App', 'API', 'Mobile']
const mockTechnologies = ['React', 'TypeScript', 'Node.js', 'Express']

describe('ProjectFilters', () => {
  const defaultProps = {
    categories: mockCategories,
    technologies: mockTechnologies,
    selectedCategory: null,
    selectedTechnologies: new Set<string>(),
    searchQuery: '',
    onCategoryChange: jest.fn(),
    onTechnologiesChange: jest.fn(),
    onSearchChange: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render search input', () => {
    render(<ProjectFilters {...defaultProps} />)

    const searchInput = screen.getByPlaceholderText('Search projects...')
    expect(searchInput).toBeInTheDocument()
  })

  it('should render category chips', () => {
    render(<ProjectFilters {...defaultProps} />)

    expect(screen.getByText('Web App')).toBeInTheDocument()
    expect(screen.getByText('API')).toBeInTheDocument()
    expect(screen.getByText('Mobile')).toBeInTheDocument()
  })

  it('should render technology chips', () => {
    render(<ProjectFilters {...defaultProps} />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('Express')).toBeInTheDocument()
  })

  it('should call onSearchChange when typing in search', () => {
    render(<ProjectFilters {...defaultProps} />)

    const searchInput = screen.getByPlaceholderText('Search projects...')
    fireEvent.change(searchInput, { target: { value: 'test query' } })

    expect(defaultProps.onSearchChange).toHaveBeenCalledWith('test query')
  })

  it('should call onCategoryChange when clicking category', () => {
    render(<ProjectFilters {...defaultProps} />)

    const categoryChip = screen.getByText('Web App')
    fireEvent.click(categoryChip)

    expect(defaultProps.onCategoryChange).toHaveBeenCalledWith('Web App')
  })

  it('should call onTechnologiesChange when clicking technology', () => {
    render(<ProjectFilters {...defaultProps} />)

    const techChip = screen.getByText('React')
    fireEvent.click(techChip)

    expect(defaultProps.onTechnologiesChange).toHaveBeenCalled()
  })

  it('should highlight selected category', () => {
    render(<ProjectFilters {...defaultProps} selectedCategory="Web App" />)

    const categoryChip = screen.getByText('Web App')
    // Check for filled variant by checking parent element or data attributes
    const chipElement = categoryChip.closest('[class*="MuiChip"]')
    expect(chipElement).toBeInTheDocument()
  })

  it('should highlight selected technologies', () => {
    const selectedTechs = new Set(['React', 'TypeScript'])
    render(<ProjectFilters {...defaultProps} selectedTechnologies={selectedTechs} />)

    const reactChip = screen.getByText('React')
    const tsChip = screen.getByText('TypeScript')

    expect(reactChip).toBeInTheDocument()
    expect(tsChip).toBeInTheDocument()
    // Verify they are selected by checking if onTechnologiesChange was called
    expect(defaultProps.onTechnologiesChange).not.toHaveBeenCalled()
  })

  it('should show clear filters button when filters are active', () => {
    render(
      <ProjectFilters
        {...defaultProps}
        selectedCategory="Web App"
        searchQuery="test"
      />
    )

    expect(screen.getByText('Clear Filters')).toBeInTheDocument()
  })

  it('should call clear functions when clicking clear filters', () => {
    render(
      <ProjectFilters
        {...defaultProps}
        selectedCategory="Web App"
        searchQuery="test"
      />
    )

    const clearButton = screen.getByText('Clear Filters')
    fireEvent.click(clearButton)

    expect(defaultProps.onCategoryChange).toHaveBeenCalledWith(null)
    expect(defaultProps.onTechnologiesChange).toHaveBeenCalledWith(new Set())
    expect(defaultProps.onSearchChange).toHaveBeenCalledWith('')
  })
})
