import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // App Router is the default in Next.js 15
  // No special config needed for basic setup
  images: {
    // Add domains here if you use next/image with external URLs
    remotePatterns: [],
  },
}

export default nextConfig
