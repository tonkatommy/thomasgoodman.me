/**
 * =============================================================================
 * Footer Component
 * =============================================================================
 * 
 * Site footer with navigation links, social links, and copyright.
 * 
 * JAVASCRIPT EQUIVALENT:
 * ```javascript
 * import Link from 'next/link';
 * 
 * export function Footer() {
 *     const currentYear = new Date().getFullYear();
 *     return <footer>...</footer>;
 * }
 * ```
 * 
 * TypeScript adds:
 * - Type-safe imports from types/index
 * - Typed arrays for navigation items
 * - Return type annotation
 * =============================================================================
 */

import Link from 'next/link';
import type { NavItem, SocialLink } from '@/types';

// -----------------------------------------------------------------------------
// Footer Configuration
// -----------------------------------------------------------------------------

/**
 * Footer navigation links
 * Type annotation ensures each item matches NavItem interface
 */
const footerNavItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
];

/**
 * Social media links
 * Type annotation ensures each item matches SocialLink interface
 */
const socialLinks: SocialLink[] = [
    {
        platform: 'github',
        url: 'https://github.com/tonkatommy',
        label: 'GitHub',
    },
    {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/tgnz',
        label: 'LinkedIn',
    },
    {
        platform: 'website',
        url: 'https://tommytinkers.nz',
        label: 'Portfolio',
    },
];

// -----------------------------------------------------------------------------
// Social Icon Component
// -----------------------------------------------------------------------------

/**
 * Props for the SocialIcon component
 */
interface SocialIconProps {
    /** Social platform identifier */
    platform: SocialLink['platform'];
    /** CSS class name */
    className?: string;
}

/**
 * Renders an SVG icon for a social platform
 * 
 * @param props - Component props
 * @returns SVG icon element
 */
function SocialIcon({ platform, className = 'h-5 w-5' }: SocialIconProps): JSX.Element {
    // Icon paths for each platform
    const icons: Record<SocialLink['platform'], JSX.Element> = {
        github: (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        linkedin: (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        twitter: (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
        email: (
            <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
        website: (
            <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        ),
    };

    return icons[platform];
}

// -----------------------------------------------------------------------------
// Footer Component
// -----------------------------------------------------------------------------

/**
 * Footer Component
 * 
 * Displays:
 * - Site navigation links
 * - Social media links
 * - Copyright notice
 * 
 * @returns Footer JSX element
 */
export function Footer(): JSX.Element {
    // Get current year for copyright
    // TypeScript infers this as number
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-muted/50">
            <div className="container py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-gradient font-bold text-2xl">TG</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Full-Stack Developer crafting modern web experiences
                            with React, Next.js, and TypeScript.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            {footerNavItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Social Column */}
                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label={link.label}
                                >
                                    <SocialIcon platform={link.platform} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        &copy; {currentYear} Thomas Goodman. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Built with{' '}
                        <a
                            href="https://nextjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary"
                        >
                            Next.js
                        </a>
                        {' '}and{' '}
                        <a
                            href="https://tailwindcss.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary"
                        >
                            Tailwind CSS
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
