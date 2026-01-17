# Setup Instructions

## Prerequisites

- Node.js (v18.x or higher)
- npm or yarn
- Docker (optional, for containerized development)
- PostgreSQL (if not using Docker)
- MongoDB (if not using Docker)

## Initial Setup

1. **Install dependencies**

   ```powershell
   npm install
   ```

2. **Set up environment variables**

   Copy `.env.example` to `.env.local` and fill in the values:

   ```powershell
   # For Windows PowerShell
   Copy-Item .env.example .env.local
   ```

   Then edit `.env.local` with your actual values.

   **Generate NextAuth secret:**
   ```powershell
   # Using OpenSSL (if available)
   openssl rand -base64 32
   
   # Or use an online generator
   # https://generate-secret.vercel.app/32
   ```

3. **Set up databases**

   **Option A: Using Docker (Recommended)**
   ```powershell
   docker-compose up -d postgres mongodb
   ```

   **Option B: Local installation**
   - Install PostgreSQL and MongoDB locally
   - Update `DATABASE_URL` and `MONGODB_URI` in `.env.local`

4. **Initialize Prisma**

   ```powershell
   # Generate Prisma Client
   npm run db:generate

   # Push schema to database (for development)
   npm run db:push

   # Or create a migration (for production)
   npm run db:migrate
   ```

5. **Start development server**

   ```powershell
   npm run dev
   ```

   The app will be available at `http://localhost:3000`

## Docker Development

To run the entire stack with Docker:

```powershell
docker-compose up --build
```

This will start:
- PostgreSQL on port 5432
- MongoDB on port 27017
- Next.js app on port 3000

## Database Management

- **Prisma Studio** (PostgreSQL GUI):
  ```powershell
  npm run db:studio
  ```

- **MongoDB Compass**: Connect to `mongodb://localhost:27017/thomasgoodman`

## Project Structure

```
thomasgoodman.me/
├── app/                    # Next.js App Router
│   ├── (portfolio)/       # Portfolio routes (grouped)
│   ├── (blog)/            # Blog routes (grouped)
│   ├── (shop)/            # Shop routes (grouped)
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Layout components
│   ├── providers/         # Context providers
│   ├── ui/                # Base UI components
│   ├── portfolio/         # Portfolio-specific
│   ├── blog/              # Blog-specific
│   └── shop/              # Shop-specific
├── lib/
│   ├── db/                # Database clients
│   ├── models/            # Mongoose models
│   └── utils/             # Utility functions
├── prisma/
│   └── schema.prisma      # Prisma schema
├── public/                # Static assets
└── types/                 # TypeScript types
```

## Next Steps

1. Create your first admin user (via Prisma Studio or a seed script)
2. Start building features following the roadmap
3. Customize the theme and branding
4. Add your content (resume, projects, blog posts)

## Troubleshooting

**Database connection errors:**
- Ensure PostgreSQL and MongoDB are running
- Check `DATABASE_URL` and `MONGODB_URI` in `.env.local`
- Verify database credentials

**NextAuth errors:**
- Ensure `NEXTAUTH_SECRET` is set in `.env.local`
- Check that `NEXTAUTH_URL` matches your app URL

**Build errors:**
- Run `npm run db:generate` after schema changes
- Clear `.next` folder: `rm -rf .next` (or `Remove-Item -Recurse -Force .next` on Windows)
