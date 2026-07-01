# Sentry Setup Guide for Next.js (App Router)

This guide describes how to set up Sentry for error tracking and performance monitoring in our Next.js project.

---

## 1. Create a Sentry Account & Project
1. Go to [Sentry.io](https://sentry.io/) and log in (or sign up).
2. Create or select your organization (e.g., `germanyconstruction`).
3. Click **Create Project**.
4. Select **Next.js** as your platform.
5. Name your project (e.g., `germany-construction-web`).
6. Click **Create Project**.

---

## 2. Run the Sentry Wizard
Sentry provides a CLI wizard that automates the entire installation and configuration process for Next.js.

In your project root directory, run the following command:
```bash
npx @sentry/wizard@latest -i nextjs
```

### What the Wizard Does Automatically:
* Installs the `@sentry/nextjs` SDK dependency.
* Prompts you to log in to your Sentry account in the browser to authorize the CLI.
* Selects your Sentry project.
* Creates the three environment-specific configuration files:
  * `sentry.client.config.ts` (or `.js`)
  * `sentry.server.config.ts` (or `.js`)
  * `sentry.edge.config.ts` (or `.js`)
* Configures `next.config.js` (or `next.config.mjs`) to instrument build-time source maps uploads.
* Adds the following environment variables to your `.env.local` file:
  ```env
  SENTRY_DSN=your_sentry_dsn_here
  SENTRY_AUTH_TOKEN=your_sentry_auth_token_here
  ```

---

## 3. Verify the Setup
To verify that Sentry is catching errors, add a test error route or component:

### Client-side Test
Create a page/component (e.g., `app/test-sentry/page.tsx`):
```tsx
'use client';

export default function TestPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Sentry Test Page</h1>
      <button
        onClick={() => {
          throw new Error("Sentry Client-Side Test Error");
        }}
        style={{
          padding: '0.5rem 1rem',
          background: '#e15656',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Throw Client Error
      </button>
    </div>
  );
}
```

### Server-side Test
Create an API route (e.g., `app/api/test-sentry/route.ts`):
```typescript
import { NextResponse } from "next/server";

export function GET() {
  throw new Error("Sentry Server-Side Test Error");
  return NextResponse.json({ status: "ok" });
}
```

Deploy or run locally, trigger these errors, and check your Sentry dashboard to ensure they are reported.
