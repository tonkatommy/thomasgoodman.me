/**
 * =============================================================================
 * Utility Functions Tests
 * =============================================================================
 * 
 * Unit tests for utility functions in lib/utils.ts.
 * =============================================================================
 */

import {
    capitalise,
    slugify,
    truncate,
    formatDate,
    getRelativeTime,
    formatDateRange,
    calculateReadingTime,
    formatNumber,
    groupBy,
    unique,
    isValidEmail,
    isValidUrl,
    sleep,
} from '@/lib/utils';

// -----------------------------------------------------------------------------
// String Utilities Tests
// -----------------------------------------------------------------------------

describe('String Utilities', () => {
    describe('capitalise', () => {
        it('capitalises the first letter of a string', () => {
            expect(capitalise('hello')).toBe('Hello');
        });

        it('handles already capitalised strings', () => {
            expect(capitalise('Hello')).toBe('Hello');
        });

        it('handles empty strings', () => {
            expect(capitalise('')).toBe('');
        });

        it('handles single character strings', () => {
            expect(capitalise('a')).toBe('A');
        });
    });

    describe('slugify', () => {
        it('converts string to lowercase slug', () => {
            expect(slugify('Hello World')).toBe('hello-world');
        });

        it('removes special characters', () => {
            expect(slugify('Hello! World?')).toBe('hello-world');
        });

        it('handles multiple spaces', () => {
            expect(slugify('Hello   World')).toBe('hello-world');
        });

        it('handles leading and trailing spaces', () => {
            expect(slugify('  Hello World  ')).toBe('hello-world');
        });

        it('handles underscores', () => {
            expect(slugify('hello_world')).toBe('hello-world');
        });
    });

    describe('truncate', () => {
        it('truncates long strings', () => {
            expect(truncate('Hello World', 5)).toBe('Hello...');
        });

        it('does not truncate short strings', () => {
            expect(truncate('Hello', 10)).toBe('Hello');
        });

        it('handles exact length strings', () => {
            expect(truncate('Hello', 5)).toBe('Hello');
        });
    });
});

// -----------------------------------------------------------------------------
// Date Utilities Tests
// -----------------------------------------------------------------------------

describe('Date Utilities', () => {
    describe('formatDate', () => {
        it('formats date with default options', () => {
            // Note: This test might need adjustment based on locale
            const result = formatDate('2024-01-15');
            expect(result).toContain('2024');
            expect(result).toContain('15');
        });

        it('accepts Date objects', () => {
            const date = new Date('2024-01-15');
            const result = formatDate(date);
            expect(result).toContain('2024');
        });

        it('accepts custom options', () => {
            const result = formatDate('2024-01-15', { month: 'short' });
            expect(result).toContain('Jan');
        });
    });

    describe('getRelativeTime', () => {
        it('returns "just now" for recent dates', () => {
            const now = new Date();
            expect(getRelativeTime(now)).toBe('just now');
        });

        // Note: More tests would require mocking Date.now()
    });

    describe('formatDateRange', () => {
        it('formats date range correctly', () => {
            const result = formatDateRange('2022-01-01', '2024-06-01');
            expect(result).toContain('2022');
            expect(result).toContain('2024');
        });

        it('shows "Present" for null end date', () => {
            const result = formatDateRange('2022-01-01', null);
            expect(result).toContain('Present');
        });
    });
});

// -----------------------------------------------------------------------------
// Number Utilities Tests
// -----------------------------------------------------------------------------

describe('Number Utilities', () => {
    describe('calculateReadingTime', () => {
        it('calculates reading time for short text', () => {
            const text = 'word '.repeat(100);
            expect(calculateReadingTime(text)).toBe(1);
        });

        it('calculates reading time for longer text', () => {
            const text = 'word '.repeat(400);
            expect(calculateReadingTime(text)).toBe(2);
        });

        it('returns minimum of 1 minute', () => {
            expect(calculateReadingTime('short')).toBe(1);
        });

        it('accepts custom words per minute', () => {
            const text = 'word '.repeat(300);
            expect(calculateReadingTime(text, 100)).toBe(3);
        });
    });

    describe('formatNumber', () => {
        it('formats numbers with thousands separators', () => {
            const result = formatNumber(1234567);
            // Note: Format depends on locale
            expect(result).toContain('1');
            expect(result.length).toBeGreaterThan(6);
        });

        it('handles small numbers', () => {
            expect(formatNumber(123)).toBe('123');
        });
    });
});

// -----------------------------------------------------------------------------
// Array Utilities Tests
// -----------------------------------------------------------------------------

describe('Array Utilities', () => {
    describe('groupBy', () => {
        it('groups array by key', () => {
            const items = [
                { category: 'a', name: '1' },
                { category: 'b', name: '2' },
                { category: 'a', name: '3' },
            ];

            const result = groupBy(items, 'category');

            expect(result['a']).toHaveLength(2);
            expect(result['b']).toHaveLength(1);
        });

        it('handles empty arrays', () => {
            const result = groupBy([], 'category');
            expect(Object.keys(result)).toHaveLength(0);
        });
    });

    describe('unique', () => {
        it('removes duplicates from primitive array', () => {
            expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
        });

        it('removes duplicates from string array', () => {
            expect(unique(['a', 'b', 'a'])).toEqual(['a', 'b']);
        });

        it('removes duplicates from object array by key', () => {
            const items = [
                { id: 1, name: 'a' },
                { id: 1, name: 'b' },
                { id: 2, name: 'c' },
            ];

            const result = unique(items, 'id');
            expect(result).toHaveLength(2);
        });

        it('handles empty arrays', () => {
            expect(unique([])).toEqual([]);
        });
    });
});

// -----------------------------------------------------------------------------
// Validation Utilities Tests
// -----------------------------------------------------------------------------

describe('Validation Utilities', () => {
    describe('isValidEmail', () => {
        it('validates correct email addresses', () => {
            expect(isValidEmail('test@example.com')).toBe(true);
            expect(isValidEmail('user.name@domain.co.nz')).toBe(true);
        });

        it('rejects invalid email addresses', () => {
            expect(isValidEmail('invalid')).toBe(false);
            expect(isValidEmail('invalid@')).toBe(false);
            expect(isValidEmail('@domain.com')).toBe(false);
            expect(isValidEmail('no spaces@domain.com')).toBe(false);
        });
    });

    describe('isValidUrl', () => {
        it('validates correct URLs', () => {
            expect(isValidUrl('https://example.com')).toBe(true);
            expect(isValidUrl('http://localhost:3000')).toBe(true);
            expect(isValidUrl('https://sub.domain.com/path?query=1')).toBe(true);
        });

        it('rejects invalid URLs', () => {
            expect(isValidUrl('not-a-url')).toBe(false);
            expect(isValidUrl('example.com')).toBe(false);
        });
    });
});

// -----------------------------------------------------------------------------
// Async Utilities Tests
// -----------------------------------------------------------------------------

describe('Async Utilities', () => {
    describe('sleep', () => {
        it('delays execution', async () => {
            const start = Date.now();
            await sleep(50);
            const end = Date.now();

            // Allow some tolerance for timing
            expect(end - start).toBeGreaterThanOrEqual(45);
        });
    });
});
