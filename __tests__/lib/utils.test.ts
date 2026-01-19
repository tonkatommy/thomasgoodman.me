import { formatCurrency, formatDate, slugify, truncate, debounce } from '@/lib/utils'

describe('Utility Functions', () => {
  describe('formatCurrency', () => {
    it('should format USD currency correctly', () => {
      expect(formatCurrency(100)).toBe('$100.00')
      expect(formatCurrency(1234.56)).toBe('$1,234.56')
      expect(formatCurrency(0)).toBe('$0.00')
    })

    it('should format with custom currency', () => {
      expect(formatCurrency(100, 'EUR')).toMatch(/100/)
    })
  })

  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = new Date('2024-01-15')
      const formatted = formatDate(date)
      expect(formatted).toContain('2024')
      expect(formatted).toContain('January')
    })

    it('should format date string', () => {
      const formatted = formatDate('2024-01-15')
      expect(formatted).toContain('2024')
    })

    it('should format with custom options', () => {
      const date = new Date('2024-01-15')
      const formatted = formatDate(date, { month: 'short', year: 'numeric' })
      expect(formatted).toMatch(/Jan|2024/)
    })
  })

  describe('slugify', () => {
    it('should convert text to slug', () => {
      expect(slugify('Hello World')).toBe('hello-world')
      expect(slugify('Test 123')).toBe('test-123')
    })

    it('should handle special characters', () => {
      expect(slugify('Hello, World!')).toBe('hello-world')
      expect(slugify('Test@#$%')).toBe('test')
    })

    it('should handle multiple spaces', () => {
      expect(slugify('Hello    World')).toBe('hello-world')
    })

    it('should trim leading and trailing dashes', () => {
      expect(slugify('---Hello World---')).toBe('hello-world')
    })
  })

  describe('truncate', () => {
    it('should truncate long text', () => {
      const longText = 'This is a very long text that needs to be truncated'
      expect(truncate(longText, 20)).toBe('This is a very long ...')
      expect(truncate(longText, 20).length).toBe(23)
    })

    it('should not truncate short text', () => {
      const shortText = 'Short text'
      expect(truncate(shortText, 20)).toBe('Short text')
    })

    it('should handle exact length', () => {
      const text = 'Exactly twenty chars'
      expect(truncate(text, 20)).toBe('Exactly twenty chars')
    })
  })

  describe('debounce', () => {
    jest.useFakeTimers()

    it('should debounce function calls', () => {
      const mockFn = jest.fn()
      const debouncedFn = debounce(mockFn, 100)

      debouncedFn('arg1')
      debouncedFn('arg2')
      debouncedFn('arg3')

      expect(mockFn).not.toHaveBeenCalled()

      jest.advanceTimersByTime(100)

      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith('arg3')
    })

    it('should reset timer on new calls', () => {
      const mockFn = jest.fn()
      const debouncedFn = debounce(mockFn, 100)

      debouncedFn('call1')
      jest.advanceTimersByTime(50)
      debouncedFn('call2')
      jest.advanceTimersByTime(50)
      debouncedFn('call3')
      jest.advanceTimersByTime(100)

      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith('call3')
    })

    afterEach(() => {
      jest.clearAllTimers()
    })
  })
})
