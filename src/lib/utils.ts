/**
 * =============================================================================
 * Utility Functions Library
 * =============================================================================
 * 
 * Collection of reusable utility functions for the application.
 * 
 * JAVASCRIPT EQUIVALENT:
 * The logic is identical, but TypeScript adds:
 * - Parameter type annotations
 * - Return type annotations
 * - Generic type parameters
 * - Compile-time error checking
 * =============================================================================
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// -----------------------------------------------------------------------------
// CSS Class Utilities
// -----------------------------------------------------------------------------

/**
 * Merges Tailwind CSS classes intelligently
 * 
 * Combines clsx for conditional classes with tailwind-merge to handle
 * conflicting Tailwind classes (e.g., 'px-2' and 'px-4' → 'px-4')
 * 
 * @param inputs - Class values to merge (strings, objects, arrays)
 * @returns Merged class string
 * 
 * @example
 * // TypeScript
 * cn('px-2 py-1', isActive && 'bg-blue-500', { 'opacity-50': isDisabled })
 * 
 * // JavaScript equivalent:
 * // function cn(...inputs) {
 * //     return twMerge(clsx(inputs));
 * // }
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

// -----------------------------------------------------------------------------
// String Utilities
// -----------------------------------------------------------------------------

/**
 * Capitalises the first letter of a string
 * 
 * @param str - Input string
 * @returns String with first letter capitalised
 * 
 * @example
 * capitalise('hello world') // 'Hello world'
 * 
 * // JavaScript equivalent:
 * // function capitalise(str) {
 * //     if (!str) return '';
 * //     return str.charAt(0).toUpperCase() + str.slice(1);
 * // }
 */
export function capitalise(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to URL-friendly slug
 * 
 * @param str - Input string
 * @returns URL-safe slug
 * 
 * @example
 * slugify('Hello World!') // 'hello-world'
 */
export function slugify(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')     // Remove non-word chars
        .replace(/[\s_-]+/g, '-')      // Replace spaces/underscores with hyphens
        .replace(/^-+|-+$/g, '');      // Remove leading/trailing hyphens
}

/**
 * Truncates a string to a specified length with ellipsis
 * 
 * @param str - Input string
 * @param maxLength - Maximum length before truncation
 * @returns Truncated string with ellipsis if needed
 * 
 * @example
 * truncate('This is a long string', 10) // 'This is a...'
 */
export function truncate(str: string, maxLength: number): string {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength).trim() + '...';
}

// -----------------------------------------------------------------------------
// Date Utilities
// -----------------------------------------------------------------------------

/**
 * Formats a date string to a human-readable format
 * 
 * @param dateString - ISO date string or Date object
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 * 
 * @example
 * formatDate('2024-01-15') // 'January 15, 2024'
 * formatDate('2024-01-15', { month: 'short' }) // 'Jan 15, 2024'
 * 
 * // JavaScript equivalent (identical logic, no type safety):
 * // function formatDate(dateString, options = {}) {
 * //     const date = new Date(dateString);
 * //     const defaultOptions = { year: 'numeric', month: 'long', day: 'numeric' };
 * //     return date.toLocaleDateString('en-NZ', { ...defaultOptions, ...options });
 * // }
 */
export function formatDate(
    dateString: string | Date,
    options: Intl.DateTimeFormatOptions = {}
): string {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    
    const defaultOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return date.toLocaleDateString('en-NZ', { ...defaultOptions, ...options });
}

/**
 * Calculates relative time from a date (e.g., "2 days ago")
 * 
 * @param dateString - ISO date string or Date object
 * @returns Relative time string
 * 
 * @example
 * getRelativeTime('2024-01-13') // '2 days ago' (if today is Jan 15)
 */
export function getRelativeTime(dateString: string | Date): string {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    // Define time intervals in seconds
    const intervals: { label: string; seconds: number }[] = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'week', seconds: 604800 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(diffInSeconds / interval.seconds);
        if (count >= 1) {
            const plural = count === 1 ? '' : 's';
            return `${count} ${interval.label}${plural} ago`;
        }
    }

    return 'just now';
}

/**
 * Formats a date range (e.g., for work experience)
 * 
 * @param startDate - Start date string
 * @param endDate - End date string or null for "Present"
 * @returns Formatted date range
 * 
 * @example
 * formatDateRange('2022-01-01', '2024-06-01') // 'Jan 2022 - Jun 2024'
 * formatDateRange('2022-01-01', null) // 'Jan 2022 - Present'
 */
export function formatDateRange(
    startDate: string,
    endDate: string | null
): string {
    const start = formatDate(startDate, { year: 'numeric', month: 'short' });
    const end = endDate 
        ? formatDate(endDate, { year: 'numeric', month: 'short' })
        : 'Present';
    
    return `${start} - ${end}`;
}

// -----------------------------------------------------------------------------
// Number Utilities
// -----------------------------------------------------------------------------

/**
 * Calculates reading time for text content
 * 
 * @param text - Text content to analyse
 * @param wordsPerMinute - Reading speed (default: 200)
 * @returns Reading time in minutes
 * 
 * @example
 * calculateReadingTime('Lorem ipsum...') // 3
 */
export function calculateReadingTime(
    text: string,
    wordsPerMinute: number = 200
): number {
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return Math.max(1, readingTime); // Minimum 1 minute
}

/**
 * Formats a number with thousands separators
 * 
 * @param num - Number to format
 * @returns Formatted number string
 * 
 * @example
 * formatNumber(1234567) // '1,234,567'
 */
export function formatNumber(num: number): string {
    return num.toLocaleString('en-NZ');
}

// -----------------------------------------------------------------------------
// Array Utilities
// -----------------------------------------------------------------------------

/**
 * Groups an array of objects by a key
 * 
 * Generic type T ensures type safety for the array items
 * 
 * @param array - Array to group
 * @param key - Key to group by
 * @returns Object with grouped items
 * 
 * @example
 * // TypeScript
 * const posts = [{ category: 'tech', title: 'A' }, { category: 'life', title: 'B' }];
 * groupBy(posts, 'category')
 * // { tech: [{ category: 'tech', title: 'A' }], life: [{ category: 'life', title: 'B' }] }
 * 
 * // JavaScript equivalent (no type safety):
 * // function groupBy(array, key) {
 * //     return array.reduce((acc, item) => {
 * //         const group = item[key];
 * //         acc[group] = acc[group] || [];
 * //         acc[group].push(item);
 * //         return acc;
 * //     }, {});
 * // }
 */
export function groupBy<T extends Record<string, unknown>>(
    array: T[],
    key: keyof T
): Record<string, T[]> {
    return array.reduce((acc, item) => {
        const group = String(item[key]);
        acc[group] = acc[group] || [];
        acc[group].push(item);
        return acc;
    }, {} as Record<string, T[]>);
}

/**
 * Removes duplicate items from an array
 * 
 * @param array - Array with potential duplicates
 * @param key - Optional key for object arrays
 * @returns Array with unique items
 * 
 * @example
 * unique([1, 2, 2, 3]) // [1, 2, 3]
 * unique([{ id: 1 }, { id: 1 }, { id: 2 }], 'id') // [{ id: 1 }, { id: 2 }]
 */
export function unique<T>(array: T[], key?: keyof T): T[] {
    if (key) {
        const seen = new Set();
        return array.filter((item) => {
            const value = item[key];
            if (seen.has(value)) return false;
            seen.add(value);
            return true;
        });
    }
    return [...new Set(array)];
}

// -----------------------------------------------------------------------------
// Validation Utilities
// -----------------------------------------------------------------------------

/**
 * Validates an email address format
 * 
 * @param email - Email string to validate
 * @returns True if valid email format
 * 
 * @example
 * isValidEmail('test@example.com') // true
 * isValidEmail('invalid-email') // false
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validates a URL format
 * 
 * @param url - URL string to validate
 * @returns True if valid URL format
 */
export function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

// -----------------------------------------------------------------------------
// Async Utilities
// -----------------------------------------------------------------------------

/**
 * Delays execution for a specified duration
 * 
 * @param ms - Milliseconds to wait
 * @returns Promise that resolves after delay
 * 
 * @example
 * await sleep(1000); // Wait 1 second
 */
export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Retries an async function with exponential backoff
 * 
 * @param fn - Async function to retry
 * @param maxRetries - Maximum number of retries
 * @param baseDelay - Base delay in milliseconds
 * @returns Result of the function
 * 
 * @example
 * const data = await retry(() => fetch('/api/data'), 3, 1000);
 */
export async function retry<T>(
    fn: () => Promise<T>,
    maxRetries: number = 3,
    baseDelay: number = 1000
): Promise<T> {
    let lastError: Error | undefined;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error instanceof Error ? error : new Error(String(error));
            
            if (attempt < maxRetries) {
                // Exponential backoff: 1s, 2s, 4s, etc.
                const delay = baseDelay * Math.pow(2, attempt);
                await sleep(delay);
            }
        }
    }

    throw lastError;
}
