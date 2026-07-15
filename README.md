# Yuxuan Cheng Portfolio

A refined personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

Positioning:

**AI Governance · Privacy Engineering · Responsible AI Systems**

## Pages

- `/` — portfolio landing page
- `/about` — personal bio and life cards
- `/contact` — CV, LinkedIn, and email
- `/work/ai-generated-actor-compliance` — synthetic-media privacy engineering case-management prototype
- `/research/china-aigc-legal-clause-to-control` — legal-clause-to-control governance research framework
- `/projects/china-ai-compliance` — legacy redirect to the China framework
- `/research` — current research focus

## Local Development

```bash
pnpm install
pnpm dev
```

Open:

```text
http://127.0.0.1:3000
```

## Build

```bash
pnpm build
```

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. Go to Vercel and import the GitHub repository.
3. Keep the default Next.js settings.
4. Deploy.

Vercel should automatically detect:

- Framework: Next.js
- Build command: `pnpm build`
- Output: Next.js default
