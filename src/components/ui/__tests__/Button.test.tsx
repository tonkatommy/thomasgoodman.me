/**
 * =============================================================================
 * Button Component Tests
 * =============================================================================
 * 
 * Unit tests for the Button component using Jest and React Testing Library.
 * 
 * JAVASCRIPT EQUIVALENT:
 * The test logic is identical, but TypeScript adds:
 * - Type-safe imports
 * - Typed mock functions
 * - Better IDE autocomplete for assertions
 * =============================================================================
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

// -----------------------------------------------------------------------------
// Test Suite: Button Component
// -----------------------------------------------------------------------------

describe('Button Component', () => {
    // -------------------------------------------------------------------------
    // Rendering Tests
    // -------------------------------------------------------------------------

    describe('Rendering', () => {
        /**
         * Test: Button renders with children text
         */
        it('renders children correctly', () => {
            // Arrange & Act
            render(<Button>Click me</Button>);

            // Assert
            expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
        });

        /**
         * Test: Button renders with correct default variant styles
         */
        it('renders with primary variant by default', () => {
            // Arrange & Act
            render(<Button>Primary Button</Button>);
            const button = screen.getByRole('button');

            // Assert - Check for primary variant class
            expect(button).toHaveClass('bg-primary');
        });

        /**
         * Test: Button renders with correct default size styles
         */
        it('renders with medium size by default', () => {
            // Arrange & Act
            render(<Button>Medium Button</Button>);
            const button = screen.getByRole('button');

            // Assert - Check for medium size class
            expect(button).toHaveClass('h-10');
        });
    });

    // -------------------------------------------------------------------------
    // Variant Tests
    // -------------------------------------------------------------------------

    describe('Variants', () => {
        /**
         * Test: Secondary variant applies correct styles
         */
        it('applies secondary variant styles', () => {
            // Arrange & Act
            render(<Button variant="secondary">Secondary</Button>);
            const button = screen.getByRole('button');

            // Assert
            expect(button).toHaveClass('bg-secondary');
        });

        /**
         * Test: Outline variant applies correct styles
         */
        it('applies outline variant styles', () => {
            // Arrange & Act
            render(<Button variant="outline">Outline</Button>);
            const button = screen.getByRole('button');

            // Assert
            expect(button).toHaveClass('border');
        });

        /**
         * Test: Ghost variant applies correct styles
         */
        it('applies ghost variant styles', () => {
            // Arrange & Act
            render(<Button variant="ghost">Ghost</Button>);
            const button = screen.getByRole('button');

            // Assert
            expect(button).toHaveClass('hover:bg-accent');
        });

        /**
         * Test: Link variant applies correct styles
         */
        it('applies link variant styles', () => {
            // Arrange & Act
            render(<Button variant="link">Link</Button>);
            const button = screen.getByRole('button');

            // Assert
            expect(button).toHaveClass('underline-offset-4');
        });
    });

    // -------------------------------------------------------------------------
    // Size Tests
    // -------------------------------------------------------------------------

    describe('Sizes', () => {
        /**
         * Test: Small size applies correct styles
         */
        it('applies small size styles', () => {
            // Arrange & Act
            render(<Button size="sm">Small</Button>);
            const button = screen.getByRole('button');

            // Assert
            expect(button).toHaveClass('h-9');
        });

        /**
         * Test: Large size applies correct styles
         */
        it('applies large size styles', () => {
            // Arrange & Act
            render(<Button size="lg">Large</Button>);
            const button = screen.getByRole('button');

            // Assert
            expect(button).toHaveClass('h-11');
        });
    });

    // -------------------------------------------------------------------------
    // Interaction Tests
    // -------------------------------------------------------------------------

    describe('Interactions', () => {
        /**
         * Test: Button calls onClick handler when clicked
         */
        it('calls onClick handler when clicked', () => {
            // Arrange
            const handleClick = jest.fn();
            render(<Button onClick={handleClick}>Click me</Button>);
            const button = screen.getByRole('button');

            // Act
            fireEvent.click(button);

            // Assert
            expect(handleClick).toHaveBeenCalledTimes(1);
        });

        /**
         * Test: Disabled button does not call onClick handler
         */
        it('does not call onClick when disabled', () => {
            // Arrange
            const handleClick = jest.fn();
            render(
                <Button onClick={handleClick} disabled>
                    Disabled
                </Button>
            );
            const button = screen.getByRole('button');

            // Act
            fireEvent.click(button);

            // Assert
            expect(handleClick).not.toHaveBeenCalled();
        });

        /**
         * Test: Button is disabled when disabled prop is true
         */
        it('is disabled when disabled prop is true', () => {
            // Arrange & Act
            render(<Button disabled>Disabled</Button>);
            const button = screen.getByRole('button');

            // Assert
            expect(button).toBeDisabled();
        });
    });

    // -------------------------------------------------------------------------
    // Loading State Tests
    // -------------------------------------------------------------------------

    describe('Loading State', () => {
        /**
         * Test: Button shows loading spinner when isLoading is true
         */
        it('shows loading spinner when isLoading is true', () => {
            // Arrange & Act
            render(<Button isLoading>Loading</Button>);
            const button = screen.getByRole('button');

            // Assert - Check for spinner SVG
            const spinner = button.querySelector('svg.animate-spin');
            expect(spinner).toBeInTheDocument();
        });

        /**
         * Test: Button is disabled when loading
         */
        it('is disabled when loading', () => {
            // Arrange & Act
            render(<Button isLoading>Loading</Button>);
            const button = screen.getByRole('button');

            // Assert
            expect(button).toBeDisabled();
        });

        /**
         * Test: onClick is not called when loading
         */
        it('does not call onClick when loading', () => {
            // Arrange
            const handleClick = jest.fn();
            render(
                <Button onClick={handleClick} isLoading>
                    Loading
                </Button>
            );
            const button = screen.getByRole('button');

            // Act
            fireEvent.click(button);

            // Assert
            expect(handleClick).not.toHaveBeenCalled();
        });
    });

    // -------------------------------------------------------------------------
    // Custom Class Tests
    // -------------------------------------------------------------------------

    describe('Custom Classes', () => {
        /**
         * Test: Button applies custom className
         */
        it('applies custom className', () => {
            // Arrange & Act
            render(<Button className="custom-class">Custom</Button>);
            const button = screen.getByRole('button');

            // Assert
            expect(button).toHaveClass('custom-class');
        });

        /**
         * Test: Custom classes don't override base styles
         */
        it('merges custom classes with default styles', () => {
            // Arrange & Act
            render(<Button className="my-custom-class">Merged</Button>);
            const button = screen.getByRole('button');

            // Assert - Should have both custom and default classes
            expect(button).toHaveClass('my-custom-class');
            expect(button).toHaveClass('inline-flex');
        });
    });

    // -------------------------------------------------------------------------
    // Accessibility Tests
    // -------------------------------------------------------------------------

    describe('Accessibility', () => {
        /**
         * Test: Button has correct role
         */
        it('has button role', () => {
            // Arrange & Act
            render(<Button>Accessible</Button>);

            // Assert
            expect(screen.getByRole('button')).toBeInTheDocument();
        });

        /**
         * Test: Button can receive focus
         */
        it('can receive focus', () => {
            // Arrange & Act
            render(<Button>Focusable</Button>);
            const button = screen.getByRole('button');
            button.focus();

            // Assert
            expect(button).toHaveFocus();
        });

        /**
         * Test: Disabled button has aria-disabled attribute
         */
        it('has disabled attribute when disabled', () => {
            // Arrange & Act
            render(<Button disabled>Disabled</Button>);
            const button = screen.getByRole('button');

            // Assert
            expect(button).toHaveAttribute('disabled');
        });
    });
});
