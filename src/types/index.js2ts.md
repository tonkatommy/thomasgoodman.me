# types/index.ts - JavaScript to TypeScript Guide

## Overview

TypeScript's type system is its defining feature. This file demonstrates various TypeScript type constructs that have no direct JavaScript equivalent.

## Key Concepts

### 1. Interfaces vs Types

Both can define object shapes, but have subtle differences:

```typescript
// Interface - can be extended and merged
interface User {
    name: string;
    email: string;
}

interface Admin extends User {
    role: 'admin';
}

// Type alias - more flexible, can represent any type
type UserOrNull = User | null;
type ID = string | number;
```

**JavaScript equivalent:** None. You'd use JSDoc comments or runtime checks:

```javascript
/**
 * @typedef {Object} User
 * @property {string} name
 * @property {string} email
 */

// Runtime validation (no compile-time safety)
function validateUser(user) {
    if (!user.name || !user.email) {
        throw new Error('Invalid user');
    }
}
```

### 2. Union Types

TypeScript allows a value to be one of several types:

```typescript
// TypeScript - compile-time type safety
type Status = 'pending' | 'approved' | 'rejected';

function setStatus(status: Status) {
    // Only 'pending', 'approved', or 'rejected' allowed
}

setStatus('pending');    // ✅ OK
setStatus('invalid');    // ❌ Compile error
```

**JavaScript equivalent:**

```javascript
// Runtime validation required
const VALID_STATUSES = ['pending', 'approved', 'rejected'];

function setStatus(status) {
    if (!VALID_STATUSES.includes(status)) {
        throw new Error(`Invalid status: ${status}`);
    }
    // ... rest of function
}

setStatus('pending');    // ✅ OK
setStatus('invalid');    // ❌ Runtime error (not caught until code runs)
```

### 3. Generics

Generics allow creating reusable types:

```typescript
// TypeScript - Generic type
interface ApiResponse<T> {
    data: T;
    success: boolean;
    timestamp: Date;
}

// Usage
const userResponse: ApiResponse<User> = {
    data: { name: 'Tom', email: 'tom@example.com' },
    success: true,
    timestamp: new Date(),
};

const projectResponse: ApiResponse<Project> = {
    data: { id: '1', title: 'Portfolio' },
    success: true,
    timestamp: new Date(),
};
```

**JavaScript equivalent:**

```javascript
// No type safety - relies on documentation
/**
 * @template T
 * @typedef {Object} ApiResponse
 * @property {T} data
 * @property {boolean} success
 * @property {Date} timestamp
 */

// Any object can be passed - no validation
const userResponse = {
    data: { name: 'Tom', email: 'tom@example.com' },
    success: true,
    timestamp: new Date(),
};
```

### 4. Optional Properties

```typescript
// TypeScript - optional with ?
interface User {
    name: string;        // Required
    email: string;       // Required
    avatar?: string;     // Optional (string | undefined)
}

const user1: User = { name: 'Tom', email: 'tom@ex.com' };           // ✅ OK
const user2: User = { name: 'Tom', email: 'tom@ex.com', avatar: 'url' }; // ✅ OK
const user3: User = { name: 'Tom' };                                // ❌ Error: missing email
```

**JavaScript equivalent:**

```javascript
// No enforcement - optional properties are implicit
const user1 = { name: 'Tom', email: 'tom@ex.com' };
const user2 = { name: 'Tom' }; // No error, but might break later
```

### 5. Literal Types

```typescript
// TypeScript - specific values only
type ButtonSize = 'sm' | 'md' | 'lg';

function Button({ size }: { size: ButtonSize }) {
    // size can ONLY be 'sm', 'md', or 'lg'
}

<Button size="sm" />      // ✅ OK
<Button size="medium" />  // ❌ Compile error
```

**JavaScript equivalent:**

```javascript
// Runtime validation or PropTypes (React)
function Button({ size }) {
    const validSizes = ['sm', 'md', 'lg'];
    if (!validSizes.includes(size)) {
        console.warn(`Invalid size: ${size}`);
    }
}
```

### 6. Type Guards

```typescript
// TypeScript - narrowing types with type guards
function isProject(item: Project | BlogPost): item is Project {
    return 'technologies' in item;
}

function displayItem(item: Project | BlogPost) {
    if (isProject(item)) {
        // TypeScript knows item is Project here
        console.log(item.technologies);
    } else {
        // TypeScript knows item is BlogPost here
        console.log(item.readingTime);
    }
}
```

**JavaScript equivalent:**

```javascript
// Same logic, but no type inference
function isProject(item) {
    return 'technologies' in item;
}

function displayItem(item) {
    if (isProject(item)) {
        // We hope item has technologies...
        console.log(item.technologies);
    } else {
        console.log(item.readingTime);
    }
}
```

## Utility Types

TypeScript includes built-in utility types:

| Utility | Description | Example |
|---------|-------------|---------|
| `Partial<T>` | All properties optional | `Partial<User>` |
| `Required<T>` | All properties required | `Required<User>` |
| `Pick<T, K>` | Select specific properties | `Pick<User, 'name'>` |
| `Omit<T, K>` | Remove specific properties | `Omit<User, 'password'>` |
| `Record<K, V>` | Object with key type K and value type V | `Record<string, number>` |
| `ReturnType<T>` | Extract function return type | `ReturnType<typeof fn>` |

## When to Use Types vs Interfaces

| Use Interface When | Use Type When |
|-------------------|---------------|
| Defining object shapes | Creating unions (`A \| B`) |
| Extending other interfaces | Creating intersections (`A & B`) |
| Declaration merging needed | Aliasing primitives |
| Class implementation | Tuple types |

## Benefits Summary

| Aspect | JavaScript | TypeScript |
|--------|------------|------------|
| Error Detection | Runtime | Compile-time |
| IDE Support | Limited | Full autocomplete |
| Refactoring | Risky | Safe |
| Documentation | Manual | Built into types |
| Team Scaling | Harder | Easier |
