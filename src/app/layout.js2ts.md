# layout.tsx - JavaScript to TypeScript Guide

## Overview

The root layout file (`layout.tsx`) is a required file in Next.js App Router. It wraps all pages and provides the HTML document structure.

## Side-by-Side Comparison

### JavaScript Version

```javascript
// src/app/layout.jsx

import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

// Metadata object (no type checking)
export const metadata = {
    title: 'Thomas Goodman',
    description: 'Full-Stack Developer',
};

// Component with destructured props (no type annotations)
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
```

### TypeScript Version

```typescript
// src/app/layout.tsx

import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

// Type-safe metadata object
export const metadata: Metadata = {
    title: 'Thomas Goodman',
    description: 'Full-Stack Developer',
};

// Props interface definition
interface RootLayoutProps {
    children: React.ReactNode;
}

// Component with typed props and return type
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
```

## Key Differences Explained

### 1. Type Imports

```typescript
// TypeScript - Import types from Next.js
import type { Metadata, Viewport } from 'next';

// The 'type' keyword indicates this is a type-only import
// It's removed at compile time and doesn't add to bundle size
```

**JavaScript:** No equivalent. Types don't exist in JavaScript.

### 2. Metadata Type Safety

```typescript
// TypeScript - Metadata is type-checked
export const metadata: Metadata = {
    title: 'My Site',
    description: 'Description',
    // IDE will show error if you use invalid properties
    invalidProperty: 'value', // ❌ Error: Object literal may only specify known properties
};
```

**JavaScript:** No validation. Invalid properties are silently ignored:
```javascript
export const metadata = {
    title: 'My Site',
    invalidProperty: 'value', // ✅ No error, but won't work
};
```

### 3. Props Interface

```typescript
// TypeScript - Explicit props definition
interface RootLayoutProps {
    children: React.ReactNode;
}

// React.ReactNode accepts:
// - JSX elements
// - strings
// - numbers
// - arrays
// - null/undefined
// - fragments
```

**JavaScript:** Props are untyped. Any value can be passed:
```javascript
// No way to enforce that 'children' is provided or valid
export default function RootLayout({ children }) { ... }
```

### 4. Return Type Annotation

```typescript
// TypeScript - Explicit return type
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
    return <html>...</html>;
}
```

**Benefits:**
- Documents what the function returns
- Catches errors if you forget to return JSX
- IDE autocomplete for return value

**JavaScript:** No return type validation.

### 5. React.ReactNode Type

| Type | What it Accepts |
|------|-----------------|
| `React.ReactNode` | Any renderable content (most flexible) |
| `React.ReactElement` | Only JSX elements |
| `JSX.Element` | Only JSX elements (similar to ReactElement) |
| `string` | Only strings |
| `number` | Only numbers |

```typescript
interface Props {
    // Most flexible - accepts anything renderable
    children: React.ReactNode;
    
    // Only accepts JSX elements
    header: React.ReactElement;
    
    // Only accepts strings
    title: string;
}
```

## Metadata Type Reference

The `Metadata` type from Next.js includes:

```typescript
type Metadata = {
    title?: string | { default: string; template: string };
    description?: string;
    keywords?: string | string[];
    authors?: { name: string; url?: string }[];
    openGraph?: {
        title?: string;
        description?: string;
        images?: { url: string; width?: number; height?: number }[];
        // ... more properties
    };
    twitter?: {
        card?: 'summary' | 'summary_large_image' | 'app' | 'player';
        // ... more properties
    };
    robots?: {
        index?: boolean;
        follow?: boolean;
        // ... more properties
    };
    // ... many more properties
};
```

**IDE Benefits:** With TypeScript, your IDE will autocomplete all these properties and show errors for invalid values.

## Common Patterns

### Conditional Metadata

```typescript
// TypeScript allows type-safe conditional metadata
export const metadata: Metadata = {
    title: {
        default: 'Thomas Goodman',
        template: '%s | Thomas Goodman', // %s is replaced with page title
    },
};
```

### Dynamic Metadata (generateMetadata)

```typescript
// For dynamic pages, use generateMetadata function
export async function generateMetadata({ 
    params 
}: { 
    params: { slug: string } 
}): Promise<Metadata> {
    const post = await getPost(params.slug);
    
    return {
        title: post.title,
        description: post.excerpt,
    };
}
```

## Migration Checklist

When converting `layout.jsx` to `layout.tsx`:

1. ☐ Rename file from `.jsx` to `.tsx`
2. ☐ Add type imports: `import type { Metadata } from 'next'`
3. ☐ Add `: Metadata` annotation to metadata export
4. ☐ Create props interface with `children: React.ReactNode`
5. ☐ Add props type to function parameter
6. ☐ Add return type annotation (`: JSX.Element`)

## Learning Resources

- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
