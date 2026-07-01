# Sentry Setup Guide

This guide describes how to set up Sentry for error tracking and performance monitoring.

---

## 1. Create a Sentry Account & Organization
1. Go to [Sentry.io](https://sentry.io/) and sign up.
2. Create an organization (e.g., `germanyconstruction`).

## 2. Create a Project
1. In the Sentry dashboard, click **Create Project**.
2. Select your platform (e.g., React, Next.js, Node.js, etc.).
3. Name your project (e.g., `germany-construction-app`).
4. Click **Create Project**.

## 3. Get Your DSN
1. Navigate to **Project Settings** > **Client Keys (DSN)**.
2. Copy the **DSN** value.

## 4. Install Sentry SDK
Install the Sentry SDK package appropriate for your platform:

### Javascript / Node.js
```bash
npm install @sentry/node
```
```javascript
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});
```

### React / Frontend
```bash
npm install @sentry/react
```
```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [Sentry.browserTracingIntegration()],
  tracesSampleRate: 1.0,
});
```

## 5. Configure Environment Variables
Add your DSN to the local `.env` file:
```env
SENTRY_DSN=your_sentry_dsn_here
```
