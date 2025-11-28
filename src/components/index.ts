/**
 * =============================================================================
 * Components Index - Barrel Exports
 * =============================================================================
 * 
 * Central export file for all components.
 * Enables cleaner imports throughout the application.
 * 
 * JAVASCRIPT EQUIVALENT:
 * ```javascript
 * // index.js
 * export { Button } from './ui/Button';
 * export { Header } from './layout/Header';
 * ```
 * 
 * TypeScript adds:
 * - Type exports alongside component exports
 * - Better tree-shaking support
 * =============================================================================
 */

// -----------------------------------------------------------------------------
// UI Components
// -----------------------------------------------------------------------------
export { Button } from './ui/Button';
export type { ButtonProps } from './ui/Button';

// -----------------------------------------------------------------------------
// Layout Components
// -----------------------------------------------------------------------------
export { Header } from './layout/Header';
export { Footer } from './layout/Footer';

// -----------------------------------------------------------------------------
// Section Components
// -----------------------------------------------------------------------------
export { HeroSection } from './sections/HeroSection';
export { AboutSection } from './sections/AboutSection';
export { SkillsSection } from './sections/SkillsSection';
export { ProjectsSection } from './sections/ProjectsSection';
export { ContactSection } from './sections/ContactSection';
