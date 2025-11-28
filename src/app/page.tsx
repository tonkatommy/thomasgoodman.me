/**
 * =============================================================================
 * Home Page Component
 * =============================================================================
 * 
 * The landing page for thomasgoodman.me portfolio website.
 * 
 * JAVASCRIPT EQUIVALENT:
 * ```javascript
 * // page.jsx
 * export default function HomePage() {
 *     return (
 *         <div>...</div>
 *     );
 * }
 * ```
 * 
 * TypeScript adds:
 * - Return type annotation (JSX.Element)
 * - Type-safe component imports
 * =============================================================================
 */

// Import custom components
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

/**
 * Home Page Component
 * 
 * Renders the main landing page with multiple sections:
 * - Hero: Introduction and call-to-action
 * - About: Brief biography and background
 * - Skills: Technical skills and expertise
 * - Projects: Featured project showcase
 * - Contact: Contact form and social links
 * 
 * @returns Home page JSX
 * 
 * JS equivalent:
 * export default function HomePage() { ... }
 */
export default function HomePage(): JSX.Element {
    return (
        <>
            {/* 
                Hero Section
                Primary introduction with name, title, and CTAs
            */}
            <HeroSection />

            {/* 
                About Section
                Brief introduction and background
            */}
            <AboutSection />

            {/* 
                Skills Section
                Technical skills displayed in categories
            */}
            <SkillsSection />

            {/* 
                Projects Section
                Featured projects showcase
            */}
            <ProjectsSection />

            {/* 
                Contact Section
                Contact form and social links
            */}
            <ContactSection />
        </>
    );
}
