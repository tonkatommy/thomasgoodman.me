'use client'

// app/page.tsx — thomasgoodman.me
// Home page — all sections rendered in order

import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { TechStack } from '@/components/sections/TechStack'
import { Education } from '@/components/sections/Education'
import { WhyMe } from '@/components/sections/WhyMe'
import { Hobbies } from '@/components/sections/Hobbies'
import { Contact } from '@/components/sections/Contact'
import { useActiveSection } from '@/lib/useActiveSection'

const SECTION_IDS = [
  'about',
  'experience',
  'projects',
  'stack',
  'education',
  'why-me',
  'hobbies',
  'contact',
]

export default function HomePage() {
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <>
      <Nav activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Education />
        <WhyMe />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
