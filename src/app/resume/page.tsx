// app/resume/page.tsx — thomasgoodman.me
// Serves or redirects to the resume PDF

import { redirect } from 'next/navigation'

// When you add your actual PDF to /public/resume.pdf, update this path.
// For now it redirects to the home page as a placeholder.
export default function ResumePage() {
  // TODO: replace with actual PDF path once resume.pdf is added to /public
  // e.g. redirect('/resume.pdf')
  redirect('/resume/resume.pdf')
}

export const metadata = {
  title: 'Resume — Thomas Goodman',
}
