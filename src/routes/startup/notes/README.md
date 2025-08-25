# Startup Notes Publishing System

## Overview

This system provides controlled publishing and unpublishing of startup analysis notes. Notes are managed through a centralized registry with status control and automatic route protection.

## Publishing Workflow

### 1. Create a New Note

1. Create note directory: `src/routes/startup/notes/YYYY-MM-company-name/`
2. Add your analysis note as `+page.svelte` in that directory
3. Register the note in `src/lib/startup-notes.ts` with status `'draft'`
4. Add component import to `src/routes/startup/notes/[slug]/+page.svelte`

### 2. Publishing Controls

**Command Line:**

```bash
# List all notes and their status
pnpm notes:list

# Publish a note (make it publicly visible)
pnpm notes:publish 2025-08-buildbear-labs

# Unpublish a note (remove from public view)
pnpm notes:unpublish 2025-08-buildbear-labs

# Show drafts in development (for preview)
pnpm notes:show-drafts

# Hide drafts (normal mode)
pnpm notes:hide-drafts
```

**Manual Control:**
Edit `src/lib/startup-notes.ts` and change the note status:

- `'draft'` - Not publicly visible
- `'published'` - Publicly visible in notes index
- `'archived'` - Hidden but preserved

### 3. Route Protection

Unpublished notes automatically return 404 errors when accessed directly, ensuring they remain private until you're ready to publish.

## Note Registry Structure

Each note in `src/lib/startup-notes.ts` includes:

```typescript
{
  slug: '2025-08-buildbear-labs',           // URL slug
  title: 'BuildBear Labs Analysis Note',    // Display title
  description: '...',                       // Meta description
  publishDate: '21 August 2025',           // Publication date
  author: 'Michael Distel',                // Author name
  status: 'draft',                         // Publication status
  tags: ['Web3', 'Series A'],             // Optional tags
  company: 'BuildBear Labs',               // Optional company
  lastModified: '22 August 2025'          // Optional update date
}
```

## Features

- **Status Management**: Draft, published, archived states
- **Route Protection**: Unpublished notes return 404
- **Automatic Discovery**: Published notes appear in index automatically
- **Metadata Management**: Tags, dates, descriptions
- **Development Preview**: Optional draft viewing for development
- **Chronological Sorting**: Notes sorted by publish date

## Development Preview

Set `showDrafts = true` in `src/routes/startup/notes/+page.svelte` to preview draft notes during development. Draft notes will be clearly marked with status badges.

## Security

- Unpublished notes are completely inaccessible via direct URL
- No sensitive information leaks through sitemap or navigation
- Status changes require code modification (intentional friction)

This system provides you with complete control over when notes become publicly visible while maintaining clean URLs and proper metadata management.
