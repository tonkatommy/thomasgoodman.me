// Mock NextAuth completely to avoid ESM issues
jest.mock('next-auth', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    GET: jest.fn(),
    POST: jest.fn(),
  })),
}))

jest.mock('@/lib/auth/config', () => ({
  authOptions: {},
}))

jest.mock('@/lib/db/prisma', () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
    },
  },
}))

describe('/api/auth/[...nextauth]', () => {
  it('should export GET and POST handlers', async () => {
    const route = await import('@/app/api/auth/[...nextauth]/route')
    
    // Check that handlers are exported
    expect(route).toHaveProperty('GET')
    expect(route).toHaveProperty('POST')
    expect(route.GET).toBeDefined()
    expect(route.POST).toBeDefined()
  })
})
