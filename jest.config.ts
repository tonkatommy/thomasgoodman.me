/**
 * =============================================================================
 * Jest Configuration (TypeScript Version)
 * =============================================================================
 * 
 * Configures Jest for testing React components and utilities.
 * 
 * JAVASCRIPT EQUIVALENT:
 * ```javascript
 * // jest.config.js
 * const nextJest = require('next/jest');
 * const createJestConfig = nextJest({ dir: './' });
 * module.exports = createJestConfig({ ... });
 * ```
 * =============================================================================
 */

// Import Next.js Jest configuration helper
// JS equivalent: const nextJest = require('next/jest');
import nextJest from 'next/jest';

// Import Jest types for configuration
// JS equivalent: No import, uses JSDoc
import type { Config } from 'jest';

/**
 * Create Next.js-aware Jest configuration
 * This handles module resolution, transforms, and environment setup
 */
const createJestConfig = nextJest({
    // Path to Next.js app for loading next.config.ts and .env files
    dir: './',
});

/**
 * Custom Jest configuration
 * 
 * @description Test configuration for React/Next.js components
 */
const customJestConfig: Config = {
    // -------------------------------------------------------------------------
    // Test Environment
    // -------------------------------------------------------------------------
    // jsdom simulates a browser environment for React components
    testEnvironment: 'jsdom',

    // -------------------------------------------------------------------------
    // Setup Files
    // -------------------------------------------------------------------------
    // Runs before each test file
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

    // -------------------------------------------------------------------------
    // Module Path Aliases
    // -------------------------------------------------------------------------
    // Maps to tsconfig.json paths for consistent imports
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@/components/(.*)$': '<rootDir>/src/components/$1',
        '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
        '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^@/types/(.*)$': '<rootDir>/src/types/$1',
    },

    // -------------------------------------------------------------------------
    // Test Patterns
    // -------------------------------------------------------------------------
    // Which files Jest considers as tests
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
    ],

    // -------------------------------------------------------------------------
    // Coverage Configuration
    // -------------------------------------------------------------------------
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/*.stories.{ts,tsx}',
        '!src/types/**/*',
    ],

    // Coverage thresholds (fail if below)
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
    },

    // -------------------------------------------------------------------------
    // Transformations
    // -------------------------------------------------------------------------
    // Transform TypeScript files
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }],
    },

    // -------------------------------------------------------------------------
    // Module Extensions
    // -------------------------------------------------------------------------
    // File extensions Jest will look for
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

    // -------------------------------------------------------------------------
    // Verbose Output
    // -------------------------------------------------------------------------
    // Show individual test results
    verbose: true,
};

// Export the configuration wrapped with Next.js enhancements
// JS equivalent: module.exports = createJestConfig(customJestConfig);
export default createJestConfig(customJestConfig);
