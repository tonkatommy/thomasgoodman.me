/**
 * =============================================================================
 * Contact Section Component
 * =============================================================================
 * 
 * Contact form and social links section.
 * Uses client-side form handling with TypeScript types.
 * =============================================================================
 */

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import type { ContactFormData } from '@/types';

// -----------------------------------------------------------------------------
// Contact Section Component
// -----------------------------------------------------------------------------

/**
 * Contact Section Component
 * 
 * Features:
 * - Contact form with validation
 * - Social links
 * - Email link
 * 
 * @returns Contact section JSX
 */
export function ContactSection(): JSX.Element {
    // Form state with TypeScript type
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // Loading and success states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    /**
     * Handles form input changes
     * 
     * @param e - Input change event
     */
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    /**
     * Handles form submission
     * 
     * @param e - Form submit event
     */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call (replace with actual API endpoint)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Reset form and show success
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSuccess(true);
        setIsSubmitting(false);

        // Hide success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="max-w-2xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-muted-foreground">
                            Have a project in mind or just want to say hello?
                            I&apos;d love to hear from you.
                        </p>
                    </div>

                    {/* Success Message */}
                    {isSuccess && (
                        <div className="mb-6 p-4 bg-green-500/10 text-green-600 rounded-lg text-center">
                            Thanks for your message! I&apos;ll get back to you soon.
                        </div>
                    )}

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name & Email Row */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="space-y-2">
                            <label
                                htmlFor="subject"
                                className="text-sm font-medium"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="What's this about?"
                            />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label
                                htmlFor="message"
                                className="text-sm font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Your message..."
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full"
                            isLoading={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>

                    {/* Alternative Contact */}
                    <div className="mt-8 text-center text-sm text-muted-foreground">
                        <p>
                            Or email me directly at{' '}
                            <a
                                href="mailto:hello@thomasgoodman.me"
                                className="text-primary hover:underline"
                            >
                                hello@thomasgoodman.me
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
