# Michael Distel's Personal Website

Personal website and digital garden covering industrial automation, travel and
slow adventures, and whatever else is worth writing down.

**Live:** [michaeldistel.com](https://michaeldistel.com)

## Tech Stack

- **Framework:** SvelteKit 2 (static site generation via `adapter-static`)
- **Styling:** Tailwind CSS 4 with a custom design system
- **Hosting:** Cloudflare Pages
- **DNS and CDN:** Cloudflare

## Project Structure

```
src/
├── routes/              # Pages and content
│   ├── about/           # Personal background
│   ├── adventures/      # Long-form trip write-ups
│   ├── travel/          # Travel index
│   ├── industrial/      # Industrial automation projects
│   ├── contact/         # Contact details
│   ├── bot-info/        # Notes for crawlers and agents
│   └── 404, 50x/        # Error pages
├── lib/
│   ├── components/      # Reusable Svelte components
│   └── styles/          # Typography & design system CSS
scripts/                 # Build utilities (build-info generation)
static/                  # Static assets and _headers
```

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Type checking
pnpm check

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Design System

Custom design system with:

- Typography scale based on modular scale ratio
- Semantic spacing system
- Component prop abstractions for consistency
- Color system with semantic naming

Components live in `src/lib/components/`. Compose pages from them rather than
writing bespoke layout markup - see `AGENTS.md` for the conventions.

## Deployment

Deployed to **Cloudflare Pages** as a static build:

```bash
pnpm cf:deploy
```

Response headers (CSP, HSTS, permissions policy) and cache rules are defined in
`static/_headers`, which Cloudflare Pages applies at deploy time.

### Previously

The site used to be served by containerised nginx behind Traefik on a
self-hosted server, deployed over rsync and Docker Compose. That path is
**retired**. The leftover `nginx/`, `prod.compose.yml` and
`prod.deploy.files.txt` files are kept for reference only and have no effect on
production.

## Contributing

This is a personal website, but feel free to open issues for bugs or
suggestions. PRs welcome for typos/fixes.
