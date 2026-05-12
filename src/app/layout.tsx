// app/layout.tsx — thomasgoodman.me

import type { Metadata } from 'next'
import { Exo_2, Open_Sans, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'

const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Thomas Goodman — Full-Stack Developer',
  description:
    "Thomas 'Tommy' Goodman — Full-stack developer based in Helensville, Auckland, NZ. Former RNZAF Avionics Technician turned software developer. Open to junior-intermediate full-stack roles.",
  keywords: [
    'Tommy Goodman',
    'Thomas Goodman',
    'Full-Stack Developer',
    'Auckland',
    'New Zealand',
    'React',
    'Next.js',
    'Node.js',
    'RNZAF',
  ],
  authors: [{ name: 'Thomas Goodman', url: 'https://thomasgoodman.me' }],
  openGraph: {
    title: 'Thomas Goodman — Full-Stack Developer',
    description:
      'Avionics technician turned full-stack developer. 15+ years of disciplined systems thinking, now building reliable web applications.',
    url: 'https://thomasgoodman.me',
    siteName: 'thomasgoodman.me',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Goodman — Full-Stack Developer',
    description:
      'Avionics technician turned full-stack developer. Based in Auckland, NZ.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${exo2.variable} ${openSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
