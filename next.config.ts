/**
 * =============================================================================
 * Next.js Configuration File (TypeScript Version)
 * =============================================================================
 * 
 * This file configures Next.js behaviour for the application.
 * 
 * JAVASCRIPT EQUIVALENT:
 * In JavaScript, this would be `next.config.js` using CommonJS:
 * 
 * ```javascript
 * // next.config.js (JavaScript/CommonJS)
 * /** @type {import('next').NextConfig} *\/
 * const nextConfig = {
 *     reactStrictMode: true,
 * };
 * module.exports = nextConfig;
 * ```
 * 
 * TypeScript provides:
 * - Full type safety for configuration options
 * - Autocomplete in your IDE
 * - Compile-time error checking
 * =============================================================================
 */

// Import the NextConfig type for type safety
// JS equivalent: No import needed, uses JSDoc comment for types
import type { NextConfig } from 'next';

/**
 * Next.js configuration object
 * 
 * @description Defines build-time and runtime configuration for the app
 */
const nextConfig: NextConfig = {
    // -------------------------------------------------------------------------
    // React Strict Mode
    // -------------------------------------------------------------------------
    // Enables additional checks and warnings for React components
    // Helps identify potential problems in the application
    reactStrictMode: true,

    // -------------------------------------------------------------------------
    // Image Optimisation Configuration
    // -------------------------------------------------------------------------
    // Configures the Next.js Image component behaviour
    images: {
        // Allowed external image domains
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
        ],
        // Image formats to generate (modern formats for better compression)
        formats: ['image/avif', 'image/webp'],
    },

    // -------------------------------------------------------------------------
    // Environment Variables (Public)
    // -------------------------------------------------------------------------
    // Variables exposed to the browser (prefix with NEXT_PUBLIC_ in .env)
    env: {
        SITE_URL: 'https://thomasgoodman.me',
    },

    // -------------------------------------------------------------------------
    // Experimental Features
    // -------------------------------------------------------------------------
    // Enable experimental Next.js features (use with caution)
    experimental: {
        // Enables typed routes for better type safety in navigation
        typedRoutes: true,
    },

    // -------------------------------------------------------------------------
    // Headers Configuration
    // -------------------------------------------------------------------------
    // Custom HTTP headers for security and caching
    async headers() {
        return [
            {
                // Apply to all routes
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                ],
            },
        ];
    },
};

// Export the configuration
// JS equivalent: module.exports = nextConfig;
export default nextConfig;
