/**
 * =============================================================================
 * Tailwind CSS Configuration (TypeScript Version)
 * =============================================================================
 * 
 * Configures Tailwind CSS for the portfolio website.
 * 
 * JAVASCRIPT EQUIVALENT:
 * ```javascript
 * // tailwind.config.js
 * /** @type {import('tailwindcss').Config} *\/
 * module.exports = {
 *     content: ['./src/**/*.{js,jsx}'],
 *     theme: { extend: {} },
 *     plugins: [],
 * };
 * ```
 * =============================================================================
 */

// Import the Config type from Tailwind CSS
// JS equivalent: Uses JSDoc comment for type hints
import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS configuration
 * 
 * @description Defines custom theme, plugins, and content paths
 */
const config: Config = {
    // -------------------------------------------------------------------------
    // Content Paths
    // -------------------------------------------------------------------------
    // Tells Tailwind which files to scan for class names
    // This enables tree-shaking of unused CSS
    content: [
        './src/pages/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
        './src/app/**/*.{ts,tsx}',
    ],

    // -------------------------------------------------------------------------
    // Dark Mode Configuration
    // -------------------------------------------------------------------------
    // 'class' = Toggle via .dark class on <html>
    // 'media' = Follow system preference
    darkMode: 'class',

    // -------------------------------------------------------------------------
    // Theme Customisation
    // -------------------------------------------------------------------------
    theme: {
        // Override default container settings
        container: {
            center: true,
            padding: '1rem',
            screens: {
                '2xl': '1400px',
            },
        },

        // Extend default theme (keeps Tailwind defaults + adds custom values)
        extend: {
            // -----------------------------------------------------------------
            // Custom Colour Palette
            // -----------------------------------------------------------------
            colors: {
                // Brand colours
                brand: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',  // Primary brand colour
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#172554',
                },
                // Semantic colours for UI states
                surface: {
                    DEFAULT: 'hsl(var(--surface))',
                    foreground: 'hsl(var(--surface-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
            },

            // -----------------------------------------------------------------
            // Custom Font Families
            // -----------------------------------------------------------------
            fontFamily: {
                // Sans-serif stack for body text
                sans: [
                    'Inter',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'sans-serif',
                ],
                // Monospace stack for code
                mono: [
                    'JetBrains Mono',
                    'ui-monospace',
                    'SFMono-Regular',
                    'monospace',
                ],
            },

            // -----------------------------------------------------------------
            // Custom Spacing Values
            // -----------------------------------------------------------------
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },

            // -----------------------------------------------------------------
            // Custom Border Radius
            // -----------------------------------------------------------------
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },

            // -----------------------------------------------------------------
            // Custom Animations
            // -----------------------------------------------------------------
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.3s ease-out',
                'spin-slow': 'spin 3s linear infinite',
            },

            // -----------------------------------------------------------------
            // Keyframes for Custom Animations
            // -----------------------------------------------------------------
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },

            // -----------------------------------------------------------------
            // Custom Box Shadows
            // -----------------------------------------------------------------
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
            },
        },
    },

    // -------------------------------------------------------------------------
    // Plugins
    // -------------------------------------------------------------------------
    // Add official or custom Tailwind plugins
    plugins: [
        // Add plugins here as needed, e.g.:
        // require('@tailwindcss/typography'),
        // require('@tailwindcss/forms'),
    ],
};

// Export the configuration
// JS equivalent: module.exports = config;
export default config;
