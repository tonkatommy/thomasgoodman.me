/**
 * =============================================================================
 * Hero Section Component
 * =============================================================================
 * 
 * The main hero/banner section displayed at the top of the home page.
 * Features animated introduction text and call-to-action buttons.
 * 
 * JAVASCRIPT EQUIVALENT:
 * ```javascript
 * // HeroSection.jsx
 * import Link from 'next/link';
 * import { Button } from '@/components/ui/Button';
 * 
 * export function HeroSection() {
 *     return <section>...</section>;
 * }
 * ```
 * 
 * TypeScript adds:
 * - Return type annotation (JSX.Element)
 * - Type-safe component imports
 * =============================================================================
 */

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

// -----------------------------------------------------------------------------
// Hero Section Component
// -----------------------------------------------------------------------------

/**
 * Hero Section Component
 * 
 * Displays:
 * - Greeting and name
 * - Professional title
 * - Brief description
 * - Call-to-action buttons
 * - Animated background elements
 * 
 * @returns Hero section JSX
 */
export function HeroSection(): JSX.Element {
    return (
        <section
            id="hero"
            className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
        >
            {/* Background Gradient */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"
                aria-hidden="true"
            />

            {/* Animated Background Circles */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Content Container */}
            <div className="container relative z-10 px-4 py-20 md:py-32">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    {/* Greeting Badge */}
                    <div className="animate-fade-in">
                        <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full">
                            👋 Welcome to my portfolio
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-up">
                        Hi, I&apos;m{' '}
                        <span className="text-gradient">Thomas Goodman</span>
                    </h1>

                    {/* Professional Title */}
                    <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up animate-delay-100">
                        Full-Stack Developer
                    </p>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animate-delay-200">
                        I build modern, performant web applications using React, Next.js,
                        and TypeScript. Passionate about clean code, great user experiences,
                        and continuous learning.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-slide-up animate-delay-300">
                        <Button variant="primary" size="lg" asChild>
                            <Link href="/projects">View My Work</Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/#contact">Get in Touch</Link>
                        </Button>
                    </div>

                    {/* Tech Stack Preview */}
                    <div className="pt-8 animate-fade-in animate-delay-300">
                        <p className="text-sm text-muted-foreground mb-4">
                            Technologies I work with
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {/* Tech Icons - Using simple text badges */}
                            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind'].map(
                                (tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
                                    >
                                        {tech}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <Link
                    href="/#about"
                    className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Scroll to About section"
                >
                    <span className="text-xs mb-2">Scroll</span>
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
