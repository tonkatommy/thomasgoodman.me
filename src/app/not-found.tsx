/**
 * =============================================================================
 * 404 Not Found Page
 * =============================================================================
 * 
 * Custom 404 error page displayed when a route is not found.
 * 
 * JAVASCRIPT EQUIVALENT:
 * ```javascript
 * // not-found.jsx
 * import Link from 'next/link';
 * 
 * export default function NotFound() {
 *     return <div>404 - Page Not Found</div>;
 * }
 * ```
 * =============================================================================
 */

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

/**
 * Not Found Page Component
 * 
 * Displays a user-friendly 404 error page with navigation options.
 * 
 * @returns Not found page JSX
 */
export default function NotFound(): JSX.Element {
    return (
        <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
            <div className="container text-center">
                {/* Large 404 Text */}
                <h1 className="text-9xl font-bold text-muted-foreground/20 mb-4">
                    404
                </h1>

                {/* Error Message */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Page Not Found
                </h2>

                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist
                    or has been moved.
                </p>

                {/* Navigation Options */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="primary" asChild>
                        <Link href="/">Go Home</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/projects">View Projects</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
