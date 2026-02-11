/**
 * Validate required environment variables at startup.
 * Called from instrumentation.ts to fail fast with clear errors.
 */
export function validateEnv(): void {
  const required = [
    'DATABASE_URL',
    'MONGODB_URI',
    'NEXTAUTH_SECRET',
  ]

  const missing = required.filter((key) => !process.env[key])

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}. ` +
        'See .env.example for the full list.'
    )
  }

  const secret = process.env.NEXTAUTH_SECRET!
  if (secret.length < 32) {
    throw new Error(
      'NEXTAUTH_SECRET must be at least 32 characters. ' +
        'Generate one with: openssl rand -base64 32'
    )
  }
}
