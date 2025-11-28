# next.config.ts - JavaScript to TypeScript Guide

## Overview

Next.js configuration can be written in either JavaScript (`next.config.js`) or TypeScript (`next.config.ts`). The TypeScript version provides better developer experience with type checking.

## Side-by-Side Comparison

### JavaScript Version (CommonJS)

```javascript
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'example.com',
            },
        ],
    },
};

module.exports = nextConfig;
```

### TypeScript Version (ES Modules)

```typescript
// next.config.ts

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'example.com',
            },
        ],
    },
};

export default nextConfig;
```

## Key Differences

| Aspect | JavaScript | TypeScript |
|--------|------------|------------|
| File Extension | `.js` | `.ts` |
| Type Safety | JSDoc comments (optional) | Native type annotations |
| Module System | CommonJS (`module.exports`) | ES Modules (`export default`) |
| IDE Support | Limited autocomplete | Full autocomplete & error checking |
| Import Types | N/A | `import type { NextConfig }` |

## Type Imports Explained

### What is `import type`?

```typescript
// This is a TYPE-ONLY import
// It's removed at compile time and produces no runtime code
import type { NextConfig } from 'next';

// vs regular import (creates runtime code)
import { NextConfig } from 'next';
```

**Why use `import type`?**
- Smaller bundle size (types are stripped out)
- Clearer intent (this is only for type checking)
- Avoids potential circular dependency issues

## The `NextConfig` Type

The `NextConfig` type provides autocomplete for all valid configuration options:

```typescript
const nextConfig: NextConfig = {
    // IDE will suggest all valid options here:
    // - reactStrictMode
    // - images
    // - env
    // - headers
    // - redirects
    // - rewrites
    // ... and many more
};
```

## Async Functions in Config

### JavaScript
```javascript
module.exports = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [{ key: 'X-Custom', value: 'value' }],
            },
        ];
    },
};
```

### TypeScript
```typescript
const nextConfig: NextConfig = {
    async headers() {
        // Return type is inferred, but you could be explicit:
        // async headers(): Promise<Header[]>
        return [
            {
                source: '/:path*',
                headers: [{ key: 'X-Custom', value: 'value' }],
            },
        ];
    },
};

export default nextConfig;
```

## Common Patterns

### Environment-Specific Configuration

```typescript
import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
    // TypeScript ensures these are valid NextConfig properties
    reactStrictMode: true,
    
    // Conditional configuration
    ...(isDev && {
        // Development-only settings
        logging: {
            fetches: {
                fullUrl: true,
            },
        },
    }),
};

export default nextConfig;
```

## Migration Steps

To convert from JavaScript to TypeScript:

1. Rename `next.config.js` to `next.config.ts`
2. Change `module.exports =` to `export default`
3. Add the type import: `import type { NextConfig } from 'next'`
4. Add type annotation: `const nextConfig: NextConfig = { ... }`
5. Remove JSDoc type comments (no longer needed)

## Learning Resources

- [Next.js Configuration Documentation](https://nextjs.org/docs/app/api-reference/next-config-js)
- [TypeScript Type-Only Imports](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export)
