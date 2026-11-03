# Solution Sahab website

Marketing and lead-generation site for Solution Sahab (invisible grills, pleated mesh and related products, Delhi NCR). Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4. The app lives in [`storefront/`](storefront).

## Getting started

```bash
cd storefront
npm install
cp .env.example .env   # fill in the CRM values
npm run dev            # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` / `npm start` | Production build / serve it |
| `npm run lint` | ESLint |
| `npm test` | Unit tests (`src/**/*.test.ts`, Node's built-in runner) |

## Environment variables

See [`storefront/.env.example`](storefront/.env.example). Secrets go only in `.env` (git-ignored) or the hosting provider's settings, never in code.

| Variable | Required | Purpose |
|---|---|---|
| `CRATIO_API_KEY` | In production | Cratio CRM key. Without it, leads are only logged in dev and rejected in production. |
| `CRATIO_LEAD_CREATED_BY` | With the key | CRM "Created By" user |
| `CRATIO_ASSIGNED_TO` | With the key | CRM user new leads are assigned to |
| `CRATIO_LEAD_SOURCE` | No | Overrides the per-form lead source for every lead |

## Folder map (`storefront/src`)

```
app/                    Routes (App Router)
  (info)/               About, contact, gallery, team, privacy, payments pages
  (posts)/[slug]/       Blog posts
  (products)/           One folder per product page
  blog-list/            Blog index with prebuilt category/page paths
  api/leads/route.ts    POST endpoint for every lead form
  error.tsx, not-found.tsx
components/
  ui/                   Base building blocks (Button)
  common/               Shared pieces (forms, hero, breadcrumbs, rich text...)
  layout/               Header, Footer
  sections/             Home page sections
  product/common/       Sections shared by all product pages
  blog/                 Blog card and post view
lib/
  constants.ts          Asset paths and contact details
  leads.ts              Lead validation + browser-side submit (shared with the API)
  crm.ts                Server-only Cratio CRM client
  state/                Client hooks for forms, FAQ and navigation
  blog.ts, products.ts, product-page-configs.ts, info-pages.ts   Page content
  seo.ts, site-links.ts, facts.ts                                SEO and link helpers
proxy.ts                Redirects old /blog-list?cat=&page= URLs
```

## How a lead flows

Form (`ContactForm` / `BookingSection`) → `useBookingForm` in `lib/state/booking-state.ts` validates → `submitLead()` in `lib/leads.ts` POSTs to `/api/leads` → the route re-validates and calls `insertLead()` in `lib/crm.ts` → Cratio CRM. Any failure shows the visitor a message with the phone number to call.

## Conventions

- Components: `PascalCase.tsx`, named exports. Lib and state files: `kebab-case.ts`.
- Import through the `@/` alias (`@/lib/constants`, `@/components/...`).
- Page content is data in `lib/`; components only render it.
