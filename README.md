# Michael Distel's Personal Website

Personal website and digital garden for exploring ideas about startups, Web3 infrastructure, and industrial automation.

**Live:** [michaeldistel.com](https://michaeldistel.com)

## Tech Stack

- **Framework:** SvelteKit 2 (static site generation)
- **Styling:** Tailwind CSS 3 with custom design system
- **Deployment:** Docker + nginx
- **Reverse Proxy:** Traefik with automatic TLS

## Project Structure

```
src/
├── routes/              # Pages and content
│   ├── startup/         # Startup & fundraising notes
│   ├── web3/            # Web3 infrastructure topics
│   ├── industrial/      # Industrial automation projects
│   └── about/           # Personal background
├── lib/
│   ├── components/      # Reusable Svelte components
│   └── styles/          # Typography & design system CSS
scripts/                 # Build & note management utilities
nginx/                   # Production nginx config
```

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Note Management

Built-in CLI for managing startup notes:

```bash
pnpm notes:list           # List all notes with status
pnpm notes:publish        # Publish a draft note
pnpm notes:unpublish      # Unpublish a note
pnpm notes:show-drafts    # Show drafts in production
pnpm notes:hide-drafts    # Hide drafts in production
```

## Design System

Custom design system with:

- Typography scale based on modular scale ratio
- Semantic spacing system
- Component prop abstractions for consistency
- Color system with semantic naming

## Deployment

Manual deployment via rsync + Docker Compose:

```bash
pnpm prod:deploy
```

Serves via nginx:alpine with:

- Gzip compression
- Security headers (CSP, HSTS, etc.)
- Cloudflare IP trust configuration
- Static asset caching (1yr immutable)

## Contributing

This is a personal website, but feel free to open issues for bugs or suggestions. PRs welcome for typos/fixes.
