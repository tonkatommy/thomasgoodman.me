/**
 * =============================================================================
 * Projects Page
 * =============================================================================
 * 
 * Displays all projects with filtering and sorting capabilities.
 * =============================================================================
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import type { Project } from '@/types';

// -----------------------------------------------------------------------------
// Metadata
// -----------------------------------------------------------------------------

/**
 * Page metadata for SEO
 * TypeScript ensures all metadata properties are valid
 */
export const metadata: Metadata = {
    title: 'Projects',
    description: 'Explore my portfolio of web development projects built with React, Next.js, TypeScript, and more.',
};

// -----------------------------------------------------------------------------
// Projects Data
// -----------------------------------------------------------------------------

/**
 * All projects data
 * In production, this would come from a CMS or database
 */
const projects: Project[] = [
    {
        id: '1',
        title: 'Portfolio Website',
        summary: 'Personal portfolio and blog built with Next.js and TypeScript',
        description: 'A modern portfolio website showcasing projects and blog posts. Built with Next.js 14, TypeScript, Tailwind CSS, and deployed on Vercel.',
        image: '/projects/portfolio.png',
        technologies: [
            { name: 'Next.js' },
            { name: 'TypeScript' },
            { name: 'Tailwind CSS' },
            { name: 'React' },
        ],
        demoUrl: 'https://thomasgoodman.me',
        sourceUrl: 'https://github.com/tonkatommy/thomasgoodman.me',
        status: 'in_progress',
        featured: true,
        startDate: '2024-01-01',
    },
    {
        id: '2',
        title: 'E-Commerce Platform',
        summary: 'Full-stack e-commerce solution with payment integration',
        description: 'A complete e-commerce platform with product management, cart functionality, and Stripe payment integration.',
        image: '/projects/ecommerce.png',
        technologies: [
            { name: 'React' },
            { name: 'Node.js' },
            { name: 'PostgreSQL' },
            { name: 'Stripe' },
        ],
        status: 'completed',
        featured: true,
        startDate: '2023-06-01',
        endDate: '2023-12-01',
    },
    {
        id: '3',
        title: 'Task Management App',
        summary: 'Collaborative task management with real-time updates',
        description: 'A Trello-like task management application with drag-and-drop, real-time collaboration, and team features.',
        image: '/projects/taskapp.png',
        technologies: [
            { name: 'React' },
            { name: 'Firebase' },
            { name: 'MUI' },
        ],
        status: 'completed',
        featured: false,
        startDate: '2023-01-01',
        endDate: '2023-05-01',
    },
];

// -----------------------------------------------------------------------------
// Project Card Component
// -----------------------------------------------------------------------------

/**
 * Props for ProjectCard component
 */
interface ProjectCardProps {
    project: Project;
}

/**
 * Individual project card for the grid
 */
function ProjectCard({ project }: ProjectCardProps): JSX.Element {
    // Format status for display
    const statusLabel: Record<Project['status'], string> = {
        in_progress: 'In Progress',
        completed: 'Completed',
        archived: 'Archived',
    };

    return (
        <article className="card group h-full flex flex-col">
            {/* Project Image */}
            <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden relative">
                <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-primary/20 to-blue-500/20">
                    🚀
                </div>
                {/* Status Badge */}
                <span className="absolute top-2 right-2 px-2 py-1 text-xs bg-background/80 rounded-full">
                    {statusLabel[project.status]}
                </span>
            </div>

            {/* Project Info */}
            <div className="flex-1 flex flex-col">
                <h2 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.summary}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech.name}
                            className="px-2 py-1 text-xs bg-muted rounded-full"
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto pt-4 border-t">
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                            Live Demo
                        </a>
                    )}
                    {project.sourceUrl && (
                        <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            Source
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

// -----------------------------------------------------------------------------
// Projects Page Component
// -----------------------------------------------------------------------------

/**
 * Projects Page Component
 * 
 * @returns Projects page JSX
 */
export default function ProjectsPage(): JSX.Element {
    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <section className="section bg-muted/30">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        My Projects
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        A collection of projects I&apos;ve built, from personal experiments
                        to production applications.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-muted/30">
                <div className="container text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        Interested in working together?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        I&apos;m always open to discussing new projects and opportunities.
                    </p>
                    <Button variant="primary" size="lg" asChild>
                        <Link href="/#contact">Get in Touch</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
