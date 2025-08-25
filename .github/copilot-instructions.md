# Copilot Instructions for Michael Distel's Website

## Project Overview

SvelteKit-based personal website with statiion, Docker containerization, and remote deployment pipeline. Built for simplicity with production-ready infrastructure.

## Architecture & Stack

- **Framework**: SvelteKit with `@sveltejs/adapter-static` for static site generation
- **Styling**: Tailwind CSS with dark theme (`bg-slate-900 text-gray-100`)
- **Build**: Vite, TypeScript, pnpm package manager
- **Deployment**: Docker + nginx, deployed to homelab via rsync + Docker Compose
- **Analytics**: Simple Google Tag Manager integration
- **CDN**: Cloudflare (free tier) for DNS, caching, and security
- **Git Management**: GitHub CLI (`gh`) for repository operations and workflow management

## Key Development Patterns

### Routing & Page Structure

- Uses SvelteKit file-based routing in `src/routes/`
- Global layout in `+layout.svelte` includes Footer and canonical URLs
- All pages prerendered via `export const prerender = true` in `+layout.ts`
- Error pages: `404/+page.svelte` and `50x/+page.svelte` for custom error handling

### Styling Conventions

**Use components instead of repeating patterns:**

- Page containers: Use `PageLayout.svelte` instead of manual container divs
- Typography hierarchy: Use `PageHeader.svelte` for titles and descriptions
- Link styling: Use `ExternalLink.svelte` for all external links (auto-adds security attributes)
- Card grids: Use `CardGrid.svelte` + `Card.svelte` instead of manual grid layouts
- CTA buttons: Use `ActionButton.svelte` for consistent button styling
- Responsive design: Built into all components, avoid custom breakpoint classes

### Privacy & Analytics

- Basic Google Tag Manager integration loaded directly in `src/app.html`
- Simple analytics setup without privacy consent requirements

## Critical Workflows

### Local Development

```bash
pnpm dev              # Start development server
pnpm check           # Type checking and svelte-check
pnpm format          # Prettier formatting
```

### Production Deployment

```bash
pnpm prod:deploy     # Full deployment pipeline:
  # 1. pnpm prebuild  - Generates build info with git commit
  # 2. pnpm build     - SvelteKit static build
  # 3. rsync to homelab with prod.deploy.files.txt filter
  # 4. Docker Compose restart on remote server
```

### Build System

- `scripts/generate-build-info.cjs` creates `src/lib/build-info.ts` with git commit hash
- Build info displayed in Footer component for deployment tracking
- Uses `prod.compose.yml` for containerized nginx serving from `/usr/share/nginx/html`

## Infrastructure Details

### nginx Configuration (`nginx/default.conf`)

- Domain redirect: `distel.me` → `michaeldistel.com`
- Cloudflare IP trust configuration for real IP detection (free tier limitations considered)
- Static asset caching with `expires 1y` for immutable assets
- Comprehensive security headers including CSP, HSTS, permissions policy
- Health check endpoint at `/nginx-health` returns configuration version
- Works with Cloudflare's free tier proxy and caching features

### Docker Setup

- nginx:alpine base with build folder mounted as read-only
- Resource limits: 0.10 CPU, 100M memory
- External proxy network for reverse proxy integration
- Health checks via curl to nginx-health endpoint

## Component Architecture

### Core Principle: Avoid Code Duplication

Use the established component system to maintain visual consistency and eliminate repeated patterns. Never copy-paste layout or styling code - use components instead.

### Layout Components (`src/lib/components/layout/`)

- `PageLayout.svelte`: Universal page container (replaces `<div class="container mx-auto px-4 py-8 max-w-4xl">`)
- `PageHeader.svelte`: Consistent page titles, subtitles, descriptions
- `PrintablePage.svelte`: Print-optimized wrapper for documents and analysis notes

### Content Components (`src/lib/components/content/`)

- `CardGrid.svelte`: Flexible grid system (1-4 columns, configurable gaps)
- `Card.svelte`: Reusable cards with variants (default, placeholder, category)

### Navigation Components (`src/lib/components/navigation/`)

- `ExternalLink.svelte`: Auto-handles external links with security attributes
- `BackLink.svelte`: Consistent "← Back to..." navigation pattern
- `ActionButton.svelte`: CTA buttons with primary/secondary variants

### Analysis Note System (`src/lib/components/analysis/`)

- `AnalysisNote.svelte`: Interactive wrapper with TOC, reading progress, print handling
- `CollapsibleSection.svelte`: Expandable content sections
- `MetricsCard.svelte`: Data visualization cards with trend indicators
- `Tooltip.svelte`: Contextual information display

### Shared Components (`src/lib/components/`)

- `Footer.svelte`: Displays build commit hash, copyright, navigation links

### Component Usage Rules

- **Always use PageLayout** instead of manual container divs
- **All external links** must use ExternalLink component for security
- **Card layouts** must use CardGrid + Card components
- **CTA buttons** must use ActionButton component
- **Page headers** should use PageHeader for consistency
- **Analysis notes** must use the complete analysis note system

### Page Content Patterns

- Use semantic HTML with proper heading hierarchy
- Section comments: `<!-- Section: Name -->`
- Compose pages from components rather than custom HTML/CSS
- Maintain visual consistency through component usage

## Key Files to Reference

- `package.json`: Scripts show deployment pipeline and build process
- `src/routes/+layout.svelte`: Global layout patterns and canonical URL handling
- `src/app.html`: GTM analytics integration and meta tags
- `nginx/default.conf`: Production server configuration and security setup
- `prod.compose.yml`: Containerization and deployment configuration

## Project-Specific Conventions

- All external links use `target="_blank" rel="noopener noreferrer"`
- Build commit tracking via auto-generated `build-info.ts`
- Consistent dark theme color palette throughout
- Mobile-responsive design with consistent breakpoint usage

When making changes, ensure they align with the existing dark theme, maintain the simple analytics setup, and follow the established Tailwind class patterns for consistency.

## Writing and Content

You are writing as Michael Distel.

Tone

- Curious and grounded. Practical over hype.
- Calm and understated. Light humour is fine.
- No-bullshit approach. Cut through nonsense and call things as they are.
- A bit edgy is fine. Occasional swearing acceptable when it serves the point.

Style

- Simple, direct sentences with plain vocabulary.
- UK/Australian spelling (kilometres, organise, colour).
- Minimise contractions ("I am", "do not" preferred).
- Do not use em dashes; use commas or full stops.
- Prefer specifics over abstractions: dates, numbers, concrete examples.
- Keep paragraphs short and grouped by topic. Clear headings are fine if helpful.
- Skip the pleasantries. Get to the point without corporate fluff.
- If something is rubbish, say it is rubbish (but explain why).

Content focus

- VC and investment topics at the early stage: timing, founder–market fit, capital efficiency, signals vs story.
- Web3 with emphasis on testing and stablecoins as practical rails.
- Industrial automation and my VS Code extension at controlforge.dev (workflows, small utilities, testing, handover).
- Travel and slow adventures, including Kicking Miles (1,800 kilometres, 35 cities, 40 days). Rockets and the physics that make them fly. Motorbike and occasional games.

Principles

- Be honest about uncertainty. It is fine to be wrong and to revise later.
- Timestamp or note context when it matters.
- Invite conversation rather than push conclusions.
- Call out bad ideas, poor execution, or obvious nonsense when you see it.
- Use direct language. If something does not work, say it does not work.

Avoid

- Imperatives, prescriptive advice, sales or marketing language, buzzwords, long metaphors, filler, and em dashes.
- Corporate speak, jargon, and unnecessary politeness that obscures meaning.
- Hedging when you have a clear view (though acknowledge when you do not).
