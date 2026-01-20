import type { Metadata } from 'next'
import { ProjectsPageClient } from '@/components/projects/ProjectsPageClient'
import { prisma } from '@/lib/db/prisma'

export const metadata: Metadata = {
  title: 'Projects - Thomas Goodman',
  description: 'Portfolio of development projects by Thomas Goodman',
}

async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      where: {
        published: true,
      },
      orderBy: [
        { featured: 'desc' },
        { order: 'asc' },
        { createdAt: 'desc' },
      ],
    })

    // Extract unique categories and technologies for filtering
    const categories = Array.from(new Set(projects.map((p: { category: string | null }) => p.category).filter(Boolean))) as string[]
    const technologies = Array.from(
      new Set(projects.flatMap((p: { technologies: string[] }) => p.technologies))
    ).sort() as string[]

    return { projects, categories, technologies }
  } catch (error) {
    // Return empty arrays if database is not available (e.g., during build)
    console.warn('Database not available, returning empty projects:', error)
    return { projects: [], categories: [], technologies: [] }
  }
}

export default async function ProjectsPage() {
  const { projects, categories, technologies } = await getProjects()

  return <ProjectsPageClient initialProjects={projects} categories={categories} technologies={technologies} />
}
