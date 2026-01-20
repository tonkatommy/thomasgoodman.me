import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProjectDetail } from '@/components/projects/ProjectDetail'
import { prisma } from '@/lib/db/prisma'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

async function getProject(slug: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { slug },
    })

    if (!project || !project.published) {
      return null
    }

    return project
  } catch (error) {
    // Return null if database is not available
    console.warn('Database not available:', error)
    return null
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Thomas Goodman`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
