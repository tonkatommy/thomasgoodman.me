import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'
import { connectDB } from '@/lib/db/mongodb'

export async function GET() {
  const checks: Record<string, 'ok' | 'error'> = {}

  try {
    await prisma.$queryRaw`SELECT 1`
    checks.postgres = 'ok'
  } catch {
    checks.postgres = 'error'
  }

  try {
    await connectDB()
    checks.mongodb = 'ok'
  } catch {
    checks.mongodb = 'error'
  }

  const healthy = Object.values(checks).every((v) => v === 'ok')

  return NextResponse.json(
    { status: healthy ? 'healthy' : 'degraded', checks },
    { status: healthy ? 200 : 503 }
  )
}
