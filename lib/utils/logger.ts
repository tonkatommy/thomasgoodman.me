const isProduction = process.env.NODE_ENV === 'production'

/**
 * Sanitized logger that strips sensitive data in production.
 * Use instead of console.warn/console.error in server code.
 */
export function logWarn(message: string, error?: unknown): void {
  if (isProduction) {
    console.warn(message)
  } else {
    console.warn(message, error)
  }
}