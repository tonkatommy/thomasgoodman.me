# tsconfig.json - JavaScript to TypeScript Guide

## Overview

The `tsconfig.json` file is **TypeScript-only** and has no direct JavaScript equivalent. This file configures the TypeScript compiler (`tsc`) and tells it how to process your code.

## Why This File Exists

| Aspect | JavaScript | TypeScript |
|--------|------------|------------|
| Configuration File | None required | `tsconfig.json` required |
| Type Checking | Runtime errors only | Compile-time type checking |
| Module Resolution | Handled by bundler | Configured in tsconfig + bundler |
| Path Aliases | Webpack/Babel config | tsconfig.json `paths` option |

## Key Concepts Explained

### 1. Strict Mode (`"strict": true`)

**JavaScript behaviour:**
```javascript
// No errors - JavaScript allows this
function greet(name) {
    return "Hello, " + name;
}
greet(); // Runtime: "Hello, undefined"
```

**TypeScript with strict mode:**
```typescript
// Error: Parameter 'name' implicitly has an 'any' type
function greet(name) {
    return "Hello, " + name;
}

// Correct TypeScript:
function greet(name: string): string {
    return "Hello, " + name;
}
greet(); // Compile Error: Expected 1 argument, got 0
```

### 2. Path Aliases (`"paths"`)

**JavaScript (requires webpack/babel config):**
```javascript
// Without aliases - messy relative imports
import Button from '../../../components/Button';
import { formatDate } from '../../../../lib/utils';
```

**TypeScript (configured in tsconfig.json):**
```typescript
// With path aliases - clean imports
import Button from '@/components/Button';
import { formatDate } from '@/lib/utils';
```

### 3. Module Resolution (`"moduleResolution": "bundler"`)

This setting determines how TypeScript finds modules when you import them. The `bundler` option is optimised for modern build tools like Next.js's webpack/turbopack.

### 4. JSX Configuration (`"jsx": "preserve"`)

| Setting | Output | Use Case |
|---------|--------|----------|
| `preserve` | Keeps JSX as-is | Next.js (handles transformation) |
| `react` | Transforms to `React.createElement` | Older React setups |
| `react-jsx` | Uses new JSX transform | React 17+ standalone |

## Files Created by TypeScript

When you run the TypeScript compiler or Next.js dev server, these files are auto-generated:

- `next-env.d.ts` - Next.js type definitions reference
- `.next/types/**/*.ts` - Generated route types

## Common Errors and Solutions

### Error: "Cannot find module '@/components/Button'"

**Solution:** Ensure your `tsconfig.json` has the correct paths configuration AND your bundler (Next.js) is configured to resolve them.

### Error: "Parameter 'x' implicitly has an 'any' type"

**Solution:** Add explicit type annotations:
```typescript
// Before
const handleClick = (event) => { ... }

// After
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => { ... }
```

## Learning Resources

- [TypeScript Handbook - tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [Next.js TypeScript Documentation](https://nextjs.org/docs/basic-features/typescript)
