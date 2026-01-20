/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Allow HTTP localhost only in development for local testing.
      ...(isDev
        ? [
          {
            protocol: 'http',
            hostname: 'localhost',
          },
        ]
        : []),
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
