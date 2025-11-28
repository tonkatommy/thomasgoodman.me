/**
 * =============================================================================
 * Projects Section Component
 * =============================================================================
 * 
 * Displays featured projects in a card grid layout.
 * =============================================================================
 */

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import type { Project } from '@/types';

// -----------------------------------------------------------------------------
// Sample Projects Data
// -----------------------------------------------------------------------------

/**
 * Featured projects data
 * In production, this would come from a CMS or database
 */
const featuredProjects: Project[] = [
    {
        id: '1',
        title: 'Portfolio Website',
        summary: 'Personal portfolio and blog built with Next.js and TypeScript',
        description: 'A modern portfolio website showcasing projects and blog posts.',
        image: '/projects/portfolio.png',
        technologies: [
            { name: 'Next.js', color: 'blue' },
            { name: 'TypeScript', color: 'blue' },
            { name: 'Tailwind CSS', color: 'cyan' },
        ],
        demoUrl: 'https://thomasgoodman.me',
        sourceUrl: 'https://github.com/tonkatommy/thomasgoodman.me',
        status: 'in_progress',
        featured: true,
        startDate: '2024-01-01',
    },
    {
        id: '2',
        title: 'Project Two',
        summary: 'A full-stack application with React and Node.js',
        description: 'Description of project two.',
        image: '/projects/project2.png',
        technologies: [
            { name: 'React', color: 'blue' },
            { name: 'Node.js', color: 'green' },
            { name: 'PostgreSQL', color: 'blue' },
        ],
        status: 'completed',
        featured: true,
        startDate: '2023-06-01',
        endDate: '2023-12-01',
    },
    {
        id: '3',
        title: 'Project Three',
        summary: 'Mobile-first web application with modern UI',
        description: 'Description of project three.',
        image: '/projects/project3.png',
        technologies: [
            { name: 'React', color: 'blue' },
            { name: 'MUI', color: 'blue' },
            { name: 'Firebase', color: 'orange' },
        ],
        status: 'completed',
        featured: true,
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
 * Individual project card
 */
function ProjectCard({ project }: ProjectCardProps): JSX.Element {
    return (
        <article className="card group">
            {/* Project Image Placeholder */}
            <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-primary/20 to-blue-500/20">
                    🚀
                </div>
            </div>

            {/* Project Info */}
            <div className="space-y-3">
                <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                    {project.summary}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech.name}
                            className="px-2 py-1 text-xs bg-muted rounded-full"
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                        >
                            Live Demo →
                        </a>
                    )}
                    {project.sourceUrl && (
                        <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary"
                        >
                            Source Code
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

// -----------------------------------------------------------------------------
// Projects Section Component
// -----------------------------------------------------------------------------

/**
 * Projects Section Component
 * 
 * @returns Projects section JSX
 */
export function ProjectsSection(): JSX.Element {
    return (
        <section id="projects" className="section bg-muted/30">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of projects I&apos;ve worked on
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/projects">View All Projects</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
