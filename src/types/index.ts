// types/index.ts — thomasgoodman.me
// Shared TypeScript type definitions

export interface NavLink {
  label: string
  href: string
}

export interface ProjectData {
  name: string
  period: string
  context: string
  desc: string
  highlight: string | null
  tags: string[]
  link: string | null
  badge: string | null
}

export interface ExperienceItem {
  org: string
  title: string
  period: string
  location: string
  note: string | null
  bullets: string[]
  tags: string[]
}

export interface EducationItem {
  type: 'diploma' | 'certificate' | 'university'
  title: string
  org: string
  period: string
  note: string | null
}

export interface HonourItem {
  title: string
  desc: string
}

export interface StackGroup {
  label: string
  comment: string
  items: string[]
  tier: 'strong' | 'working' | 'elementary' | 'coursework' | 'learning'
}

export interface WhyCard {
  title: string
  body: string
}

export interface HobbyItem {
  label: string
  desc: string
}

export interface ContactLink {
  label: string
  value: string
  href: string | null
}
