/**
 * =============================================================================
 * Header Component
 * =============================================================================
 * 
 * Site header with navigation, logo, and theme toggle.
 * Uses Next.js client component for interactive features.
 * 
 * JAVASCRIPT EQUIVALENT:
 * ```javascript
 * 'use client';
 * import { useState } from 'react';
 * 
 * export function Header() {
 *     const [isOpen, setIsOpen] = useState(false);
 *     return <header>...</header>;
 * }
 * ```
 * 
 * TypeScript adds:
 * - Type-safe NavItem imports
 * - Typed state with useState<boolean>
 * - Return type annotations
 * =============================================================================
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Import utilities and types
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types';

// Import UI components
import { Button } from '@/components/ui/Button';

// -----------------------------------------------------------------------------
// Navigation Configuration
// -----------------------------------------------------------------------------

/**
 * Main navigation items
 * 
 * Type annotation ensures each item has required properties
 * JS equivalent: Plain array with no type checking
 */
const mainNavItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
];

// -----------------------------------------------------------------------------
// Header Component
// -----------------------------------------------------------------------------

/**
 * Header Component
 * 
 * Features:
 * - Sticky navigation bar
 * - Responsive mobile menu
 * - Active link highlighting
 * - Theme toggle (placeholder)
 * 
 * @returns Header JSX element
 */
export function Header(): JSX.Element {
    // State for mobile menu toggle
    // TypeScript infers boolean type from initial value
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Get current pathname for active link styling
    const pathname = usePathname();

    /**
     * Checks if a navigation link is currently active
     * 
     * @param href - Link href to check
     * @returns True if link is active
     */
    const isActiveLink = (href: string): boolean => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    /**
     * Toggles the mobile menu open/closed
     */
    const toggleMobileMenu = (): void => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    /**
     * Closes the mobile menu (used when clicking a link)
     */
    const closeMobileMenu = (): void => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                {/* Logo / Site Name */}
                <Link
                    href="/"
                    className="flex items-center space-x-2 font-bold text-xl"
                    onClick={closeMobileMenu}
                >
                    <span className="text-gradient">TG</span>
                    <span className="hidden sm:inline-block">Thomas Goodman</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {mainNavItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-primary',
                                isActiveLink(item.href)
                                    ? 'text-primary'
                                    : 'text-muted-foreground'
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* CTA Button */}
                    <Button variant="primary" size="sm" asChild>
                        <Link href="/#contact">Get in Touch</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="md:hidden p-2 rounded-md hover:bg-muted"
                    onClick={toggleMobileMenu}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {/* Hamburger / Close Icon */}
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        {isMobileMenuOpen ? (
                            // Close icon (X)
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            // Hamburger icon
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <nav
                    id="mobile-menu"
                    className="md:hidden border-t bg-background"
                >
                    <div className="container py-4 space-y-3">
                        {mainNavItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'block py-2 text-sm font-medium transition-colors',
                                    isActiveLink(item.href)
                                        ? 'text-primary'
                                        : 'text-muted-foreground hover:text-primary'
                                )}
                                onClick={closeMobileMenu}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Mobile CTA */}
                        <Button
                            variant="primary"
                            size="sm"
                            className="w-full mt-4"
                            asChild
                        >
                            <Link href="/#contact" onClick={closeMobileMenu}>
                                Get in Touch
                            </Link>
                        </Button>
                    </div>
                </nav>
            )}
        </header>
    );
}
