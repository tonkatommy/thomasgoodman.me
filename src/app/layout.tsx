/**
 * =============================================================================
 * Root Layout Component
 * =============================================================================
 * 
 * The root layout wraps all pages in the application.
 * This file is REQUIRED for Next.js App Router.
 * 
 * JAVASCRIPT EQUIVALENT:
 * ```javascript
 * // layout.jsx
 * export const metadata = { title: 'Thomas Goodman' };
 * 
 * export default function RootLayout({ children }) {
 *     return (
 *         <html lang="en">
 *             <body>{children}</body>
 *         </html>
 *     );
 * }
 * ```
 * 
 * TypeScript adds:
 * - Type-safe metadata object
 * - Typed children prop via React.ReactNode
 * - Props interface for clarity
 * =============================================================================
 */

// Import global styles
// This import has no JS equivalent - it's handled by the bundler
import '@/app/globals.css';

// Import Next.js types and components
import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

// Import custom components
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// -----------------------------------------------------------------------------
// Font Configuration
// -----------------------------------------------------------------------------
// Next.js optimises Google Fonts with automatic self-hosting

/**
 * Primary font (Inter) - Used for body text
 * 
 * JS equivalent:
 * const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
 */
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sans',
});

/**
 * Monospace font (JetBrains Mono) - Used for code blocks
 */
const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mono',
});

// -----------------------------------------------------------------------------
// Metadata Configuration
// -----------------------------------------------------------------------------

/**
 * Site metadata for SEO and social sharing
 * 
 * Type annotation ensures all metadata properties are valid
 * JS equivalent: Plain object with no type checking
 */
export const metadata: Metadata = {
    // Basic metadata
    title: {
        default: 'Thomas Goodman | Full-Stack Developer',
        template: '%s | Thomas Goodman',
    },
    description: 'Full-Stack Developer specialising in React, Next.js, Node.js, and cloud technologies. Explore my portfolio, blog, and professional experience.',
    
    // Indexing
    metadataBase: new URL('https://thomasgoodman.me'),
    
    // Keywords
    keywords: [
        'Thomas Goodman',
        'Full-Stack Developer',
        'React Developer',
        'Next.js',
        'TypeScript',
        'Node.js',
        'Web Developer',
        'New Zealand',
    ],

    // Author
    authors: [{ name: 'Thomas Goodman', url: 'https://thomasgoodman.me' }],
    creator: 'Thomas Goodman',

    // Open Graph (Facebook, LinkedIn)
    openGraph: {
        type: 'website',
        locale: 'en_NZ',
        url: 'https://thomasgoodman.me',
        siteName: 'Thomas Goodman',
        title: 'Thomas Goodman | Full-Stack Developer',
        description: 'Full-Stack Developer specialising in React, Next.js, Node.js, and cloud technologies.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Thomas Goodman - Full-Stack Developer',
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Thomas Goodman | Full-Stack Developer',
        description: 'Full-Stack Developer specialising in React, Next.js, Node.js, and cloud technologies.',
        images: ['/og-image.png'],
    },

    // Icons
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },

    // Manifest for PWA
    manifest: '/site.webmanifest',

    // Robots
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

/**
 * Viewport configuration for responsive design
 */
export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
    ],
    width: 'device-width',
    initialScale: 1,
};

// -----------------------------------------------------------------------------
// Layout Component
// -----------------------------------------------------------------------------

/**
 * Props interface for the RootLayout component
 * 
 * In JavaScript, you wouldn't define this - props are untyped
 */
interface RootLayoutProps {
    /** Child components/pages to render */
    children: React.ReactNode;
}

/**
 * Root Layout Component
 * 
 * Wraps all pages with:
 * - HTML document structure
 * - Font classes
 * - Header navigation
 * - Footer
 * 
 * @param props - Component props
 * @param props.children - Page content to render
 * @returns Root layout JSX
 * 
 * JS equivalent:
 * export default function RootLayout({ children }) { ... }
 */
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${jetbrainsMono.variable}`}
            // Suppress hydration warning for theme class
            suppressHydrationWarning
        >
            <body className="min-h-screen bg-background font-sans antialiased">
                {/* Skip to content link for accessibility */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
                >
                    Skip to main content
                </a>

                {/* Site header with navigation */}
                <Header />

                {/* Main content area */}
                <main id="main-content" className="flex-1">
                    {children}
                </main>

                {/* Site footer */}
                <Footer />
            </body>
        </html>
    );
}
