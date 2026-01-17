/**
 * Environment variable utilities
 * Provides type-safe access to environment variables with validation
 */

export function getEnv(key: string, defaultValue?: string): string {
  const value = process.env[key] || defaultValue
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
  return value
}

export function getEnvOptional(key: string, defaultValue?: string): string | undefined {
  return process.env[key] || defaultValue
}

// Lazy-loaded environment variables to avoid crashes during build/startup
// Use these getter functions instead of direct constants

export function getDatabaseUrl(): string {
  return getEnv('DATABASE_URL')
}

export function getMongodbUri(): string {
  return getEnv('MONGODB_URI')
}

export function getNextAuthUrl(): string {
  return getEnvOptional('NEXTAUTH_URL', 'http://localhost:3000')!
}

export function getNextAuthSecret(): string {
  return getEnv('NEXTAUTH_SECRET')
}

export function getNodeEnv(): string {
  return getEnvOptional('NODE_ENV', 'development')!
}

export function isProduction(): boolean {
  return getNodeEnv() === 'production'
}

export function isDevelopment(): boolean {
  return getNodeEnv() === 'development'
}

// Optional: Payment
export function getStripeSecretKey(): string | undefined {
  return getEnvOptional('STRIPE_SECRET_KEY')
}

export function getStripePublishableKey(): string | undefined {
  return getEnvOptional('STRIPE_PUBLISHABLE_KEY')
}

export function getStripeWebhookSecret(): string | undefined {
  return getEnvOptional('STRIPE_WEBHOOK_SECRET')
}
