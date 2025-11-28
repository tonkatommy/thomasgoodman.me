/**
 * =============================================================================
 * PostCSS Configuration
 * =============================================================================
 * 
 * PostCSS processes CSS with JavaScript plugins.
 * This file configures Tailwind CSS and Autoprefixer.
 * 
 * NOTE: This file is JavaScript (not TypeScript) because PostCSS
 * doesn't natively support TypeScript configuration files.
 * =============================================================================
 */

module.exports = {
    // -------------------------------------------------------------------------
    // Plugins
    // -------------------------------------------------------------------------
    // PostCSS plugins are applied in order
    plugins: {
        // Tailwind CSS - Utility-first CSS framework
        // Processes @tailwind directives and generates utility classes
        'tailwindcss': {},

        // Autoprefixer - Adds vendor prefixes automatically
        // e.g., -webkit-, -moz-, -ms- for cross-browser compatibility
        'autoprefixer': {},
    },
};
