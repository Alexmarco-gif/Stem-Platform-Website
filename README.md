# Stem-Cogent

Premium decision-intelligence website for Stem Systems Ltd, built with Next.js,
React, and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3002`.

## Production build

```bash
npm run build
npm start
```

## Waitlist delivery

The form works locally without external credentials and completes in preview
mode. To deliver production notifications, copy `.env.example` to `.env.local`
and provide:

- `RESEND_API_KEY`
- `NOTIFICATION_EMAIL`
- `FROM_EMAIL` from a verified sending domain

Server-side validation, input length limits, consent capture, and HTML escaping
are included. Before a public launch, add persistent CRM/database storage and
edge rate limiting to the API route.

## Routes

- `/` — Home
- `/platform` — Platform
- `/about` — About and team
- `/waitlist` — Private-access form
- `/privacy` — Privacy notice

Legacy paths such as `/solutions` and `/insights` permanently redirect to their
canonical destinations.
