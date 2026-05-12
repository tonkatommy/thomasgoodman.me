'use client'

// lib/useActiveSection.ts — thomasgoodman.me
// Tracks which section is currently in the viewport for nav highlighting

import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        {
          threshold: 0.35,
          rootMargin: '-64px 0px 0px 0px',
        }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [sectionIds])

  return active
}
