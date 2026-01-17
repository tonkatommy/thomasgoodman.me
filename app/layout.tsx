import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { AuthProvider } from '@/components/providers/AuthProvider'
import { MainLayout } from '@/components/layout/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thomas Goodman - Full-Stack Developer',
  description: 'Personal portfolio, blog, and shop showcasing my journey as a Full-Stack Developer',
  keywords: ['portfolio', 'developer', 'full-stack', 'blog', 'resume'],
  authors: [{ name: 'Thomas Goodman' }],
  creator: 'Thomas Goodman',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thomasgoodman.me',
    siteName: 'Thomas Goodman',
    title: 'Thomas Goodman - Full-Stack Developer',
    description: 'Personal portfolio, blog, and shop showcasing my journey as a Full-Stack Developer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <MainLayout>
              {children}
            </MainLayout>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
