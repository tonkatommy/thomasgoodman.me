/**
 * =============================================================================
 * TypeScript Type Definitions
 * =============================================================================
 * 
 * Central location for all shared TypeScript types and interfaces.
 * 
 * JAVASCRIPT EQUIVALENT:
 * JavaScript has no equivalent file - types are checked at runtime (if at all).
 * TypeScript provides compile-time type checking for safer code.
 * 
 * KEY CONCEPTS:
 * - `type` = Type alias (can represent any type)
 * - `interface` = Object shape definition (can be extended)
 * - `enum` = Named constants (generates runtime code)
 * - Generic types = Reusable types with parameters like <T>
 * =============================================================================
 */

// -----------------------------------------------------------------------------
// Navigation Types
// -----------------------------------------------------------------------------

/**
 * Navigation link item
 * 
 * JS equivalent: Plain object with no type checking
 * ```javascript
 * const navItem = { label: 'Home', href: '/' };
 * ```
 */
export interface NavItem {
    /** Display text for the link */
    label: string;
    /** URL path or external link */
    href: string;
    /** Optional icon name */
    icon?: string;
    /** Whether to open in new tab */
    external?: boolean;
}

/**
 * Navigation configuration
 */
export interface NavConfig {
    mainNav: NavItem[];
    footerNav: NavItem[];
    socialLinks: SocialLink[];
}

// -----------------------------------------------------------------------------
// Social Links Types
// -----------------------------------------------------------------------------

/**
 * Social media platforms supported
 * 
 * JS equivalent: No type safety, any string accepted
 * ```javascript
 * const platform = 'linkedin'; // Could be any string, no validation
 * ```
 */
export type SocialPlatform = 
    | 'github'
    | 'linkedin'
    | 'twitter'
    | 'email'
    | 'website';

/**
 * Social link configuration
 */
export interface SocialLink {
    platform: SocialPlatform;
    url: string;
    label: string;
}

// -----------------------------------------------------------------------------
// Project Types
// -----------------------------------------------------------------------------

/**
 * Project status enumeration
 * 
 * JS equivalent: Object with frozen values
 * ```javascript
 * const ProjectStatus = Object.freeze({
 *     IN_PROGRESS: 'in_progress',
 *     COMPLETED: 'completed',
 *     ARCHIVED: 'archived',
 * });
 * ```
 */
export type ProjectStatus = 'in_progress' | 'completed' | 'archived';

/**
 * Technology/skill tag
 */
export interface TechTag {
    name: string;
    color?: string;
}

/**
 * Project showcase item
 */
export interface Project {
    /** Unique identifier */
    id: string;
    /** Project title */
    title: string;
    /** Short description (for cards) */
    summary: string;
    /** Full description (for detail page) */
    description: string;
    /** Cover image URL */
    image: string;
    /** Technologies used */
    technologies: TechTag[];
    /** Live demo URL */
    demoUrl?: string;
    /** Source code URL */
    sourceUrl?: string;
    /** Project status */
    status: ProjectStatus;
    /** Featured project flag */
    featured: boolean;
    /** Date started */
    startDate: string;
    /** Date completed (if applicable) */
    endDate?: string;
}

// -----------------------------------------------------------------------------
// Blog Types
// -----------------------------------------------------------------------------

/**
 * Blog post metadata
 */
export interface BlogPost {
    /** URL slug */
    slug: string;
    /** Post title */
    title: string;
    /** Post excerpt */
    excerpt: string;
    /** Full content (MDX/Markdown) */
    content: string;
    /** Cover image URL */
    coverImage?: string;
    /** Publication date (ISO string) */
    publishedAt: string;
    /** Last updated date (ISO string) */
    updatedAt?: string;
    /** Author information */
    author: Author;
    /** Post tags/categories */
    tags: string[];
    /** Reading time in minutes */
    readingTime: number;
    /** Whether post is published */
    published: boolean;
}

/**
 * Author information
 */
export interface Author {
    name: string;
    avatar?: string;
    bio?: string;
}

// -----------------------------------------------------------------------------
// Resume Types
// -----------------------------------------------------------------------------

/**
 * Work experience entry
 */
export interface Experience {
    /** Company name */
    company: string;
    /** Job title */
    position: string;
    /** Company location */
    location: string;
    /** Start date (ISO string) */
    startDate: string;
    /** End date (ISO string), null if current */
    endDate: string | null;
    /** Job description/achievements */
    description: string[];
    /** Technologies used */
    technologies: string[];
}

/**
 * Education entry
 */
export interface Education {
    /** Institution name */
    institution: string;
    /** Degree/certification */
    degree: string;
    /** Field of study */
    field: string;
    /** Location */
    location: string;
    /** Start date */
    startDate: string;
    /** End date */
    endDate: string;
    /** Grade/GPA (optional) */
    grade?: string;
}

/**
 * Skill with proficiency level
 */
export interface Skill {
    name: string;
    /** Proficiency: 1-5 scale */
    level: 1 | 2 | 3 | 4 | 5;
    /** Skill category */
    category: SkillCategory;
}

/**
 * Skill categories
 */
export type SkillCategory = 
    | 'frontend'
    | 'backend'
    | 'database'
    | 'devops'
    | 'tools'
    | 'soft-skills';

// -----------------------------------------------------------------------------
// Contact Form Types
// -----------------------------------------------------------------------------

/**
 * Contact form data
 */
export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

/**
 * Contact form submission response
 */
export interface ContactResponse {
    success: boolean;
    message: string;
}

// -----------------------------------------------------------------------------
// Component Props Types
// -----------------------------------------------------------------------------

/**
 * Base props that all components can receive
 * 
 * This uses React's built-in types for HTML attributes
 */
export interface BaseComponentProps {
    /** Additional CSS classes */
    className?: string;
    /** Children elements */
    children?: React.ReactNode;
}

/**
 * Button variants
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';

/**
 * Button sizes
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

// -----------------------------------------------------------------------------
// Utility Types
// -----------------------------------------------------------------------------

/**
 * Make all properties optional recursively
 * 
 * This is an advanced TypeScript utility type
 * JS equivalent: No equivalent, you'd need runtime validation
 */
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Extract the return type of an async function
 */
export type AsyncReturnType<T extends (...args: unknown[]) => Promise<unknown>> =
    T extends (...args: unknown[]) => Promise<infer R> ? R : never;

/**
 * Make specific keys required
 */
export type RequireKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;
