/**
 * =============================================================================
 * Jest Setup File
 * =============================================================================
 * 
 * This file runs before each test file and sets up the testing environment.
 * 
 * JAVASCRIPT EQUIVALENT:
 * ```javascript
 * // jest.setup.js
 * require('@testing-library/jest-dom');
 * ```
 * 
 * The TypeScript version provides type-safe imports and better IDE support.
 * =============================================================================
 */

// Import jest-dom matchers for DOM assertions
// This adds custom matchers like toBeInTheDocument(), toHaveClass(), etc.
// JS equivalent: require('@testing-library/jest-dom');
import '@testing-library/jest-dom';

/**
 * Mock the Next.js router
 * 
 * This prevents errors when components use useRouter() or Link
 * 
 * JAVASCRIPT EQUIVALENT:
 * ```javascript
 * jest.mock('next/navigation', () => ({
 *     useRouter() { return { push: jest.fn() }; },
 *     usePathname() { return '/'; },
 * }));
 * ```
 */
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
        replace: jest.fn(),
        prefetch: jest.fn(),
        back: jest.fn(),
        forward: jest.fn(),
    }),
    usePathname: () => '/',
    useSearchParams: () => new URLSearchParams(),
}));

/**
 * Mock window.matchMedia
 * 
 * Required for components that use media queries (e.g., dark mode detection)
 */
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),       // Deprecated
        removeListener: jest.fn(),    // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

/**
 * Mock IntersectionObserver
 * 
 * Required for components that use intersection observer (lazy loading, etc.)
 */
class MockIntersectionObserver {
    observe = jest.fn();
    disconnect = jest.fn();
    unobserve = jest.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: MockIntersectionObserver,
});

/**
 * Suppress specific console warnings during tests
 * 
 * This keeps test output clean while still showing important errors
 */
const originalError = console.error;
beforeAll(() => {
    console.error = (...args: unknown[]) => {
        // Suppress React act() warnings (common in async tests)
        if (
            typeof args[0] === 'string' &&
            args[0].includes('Warning: An update to')
        ) {
            return;
        }
        originalError.call(console, ...args);
    };
});

afterAll(() => {
    console.error = originalError;
});
