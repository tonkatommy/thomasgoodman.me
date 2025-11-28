/**
 * =============================================================================
 * Button Component
 * =============================================================================
 * 
 * A reusable, accessible button component with multiple variants and sizes.
 * Supports rendering as different HTML elements via the `asChild` prop.
 * 
 * JAVASCRIPT EQUIVALENT:
 * ```javascript
 * // Button.jsx
 * import { forwardRef } from 'react';
 * 
 * const Button = forwardRef(({ variant, size, className, ...props }, ref) => {
 *     return <button ref={ref} className={className} {...props} />;
 * });
 * ```
 * 
 * TypeScript adds:
 * - Strict prop type definitions
 * - Variant and size union types
 * - Ref typing with forwardRef
 * - HTML attribute type inheritance
 * =============================================================================
 */

import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import type { ButtonVariant, ButtonSize } from '@/types';

// -----------------------------------------------------------------------------
// Variant Styles Configuration
// -----------------------------------------------------------------------------

/**
 * CSS classes for each button variant
 * 
 * Type annotation with Record ensures all variants are covered
 * JS equivalent: Plain object with no type checking
 */
const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
};

/**
 * CSS classes for each button size
 */
const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-9 px-3 text-xs rounded-md',
    md: 'h-10 px-4 py-2 text-sm rounded-md',
    lg: 'h-11 px-8 text-base rounded-md',
};

// -----------------------------------------------------------------------------
// Component Props Interface
// -----------------------------------------------------------------------------

/**
 * Button component props
 * 
 * Extends HTML button attributes for full compatibility
 * 
 * JS equivalent:
 * Button.propTypes = {
 *     variant: PropTypes.oneOf(['primary', 'secondary', ...]),
 *     size: PropTypes.oneOf(['sm', 'md', 'lg']),
 *     asChild: PropTypes.bool,
 *     ...
 * };
 */
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style variant */
    variant?: ButtonVariant;
    /** Size preset */
    size?: ButtonSize;
    /** 
     * Render as child element instead of button
     * Useful for rendering as Link or other components
     */
    asChild?: boolean;
    /** Loading state - disables button and shows spinner */
    isLoading?: boolean;
}

// -----------------------------------------------------------------------------
// Button Component
// -----------------------------------------------------------------------------

/**
 * Button Component
 * 
 * A versatile button component with multiple variants and sizes.
 * Uses forwardRef for ref forwarding (required for some UI libraries).
 * 
 * @example
 * // Primary button
 * <Button variant="primary">Click me</Button>
 * 
 * @example
 * // As a link
 * <Button asChild>
 *     <Link href="/about">About</Link>
 * </Button>
 * 
 * @example
 * // With loading state
 * <Button isLoading>Submitting...</Button>
 * 
 * JS equivalent using forwardRef:
 * ```javascript
 * const Button = forwardRef(function Button(props, ref) {
 *     const { variant = 'primary', size = 'md', ...rest } = props;
 *     return <button ref={ref} {...rest} />;
 * });
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    function Button(
        {
            className,
            variant = 'primary',
            size = 'md',
            asChild = false,
            isLoading = false,
            disabled,
            children,
            ...props
        },
        ref
    ) {
        // Determine which element to render
        // Slot from Radix UI allows passing all props to child element
        const Component = asChild ? Slot : 'button';

        // Combine disabled states
        const isDisabled = disabled || isLoading;

        return (
            <Component
                ref={ref}
                className={cn(
                    // Base styles
                    'inline-flex items-center justify-center whitespace-nowrap font-medium',
                    'ring-offset-background transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    'disabled:pointer-events-none disabled:opacity-50',
                    // Variant and size styles
                    variantStyles[variant],
                    sizeStyles[size],
                    // Custom classes
                    className
                )}
                disabled={isDisabled}
                {...props}
            >
                {/* Loading Spinner */}
                {isLoading && (
                    <svg
                        className="mr-2 h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                )}
                {children}
            </Component>
        );
    }
);

// Set display name for debugging
Button.displayName = 'Button';
