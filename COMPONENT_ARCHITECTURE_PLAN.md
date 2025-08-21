# Website Component Architecture Plan

## Executive Summary

After reviewing the entire website, I've identified 15+ repeated patterns that can be componentized to reduce code duplication, improve maintainability, and create a more consistent user experience. The biggest wins are in layout containers, card grids, links, and specialized content types.

## Current Code Duplication Assessment

### High-Impact Patterns (Most Repeated)

1. **Page Container**: Used on every single page (15+ instances)
2. **Card Grids**: Used on homepage, adventures, startup pages (8+ instances)
3. **Link Styling**: External/internal links with consistent styling (50+ instances)
4. **Page Headers**: Title + subtitle pattern (12+ instances)
5. **Print-Optimized Pages**: Analysis notes and VC memos (3+ instances, growing)

### Medium-Impact Patterns

6. **Equipment/Spec Lists**: Adventure pages equipment grids (2+ instances)
7. **Navigation Back Links**: "← Back to..." pattern (5+ instances)
8. **Action Buttons**: CTA buttons with consistent styling (8+ instances)
9. **Content Sections**: Section headers with consistent spacing (20+ instances)
10. **Introduction Paragraphs**: Large text introductions (10+ instances)

## Proposed Component Architecture

### Core Layout Components

#### 1. `PageLayout.svelte`
**Purpose:** Replace the repeated container pattern
**Current duplication:** 15+ pages with identical container structure
**Usage:**
```svelte
<PageLayout>
  <slot />
</PageLayout>
```

#### 2. `PageHeader.svelte`
**Purpose:** Standardize page titles and descriptions
**Props:** title, subtitle, description
**Usage:**
```svelte
<PageHeader 
  title="Web3" 
  subtitle="Testing infrastructure and practical rails"
  description="Notes on Web3 development..."
/>
```

#### 3. `PrintablePage.svelte`
**Purpose:** Wrapper for pages that need print functionality
**Features:** Print button, print CSS, no-print classes
**Usage:**
```svelte
<PrintablePage title="Analysis Note" description="...">
  <slot />
</PrintablePage>
```

### Content Components

#### 4. `CardGrid.svelte`
**Purpose:** Consistent card layout grids
**Props:** columns (2|3), gap size
**Usage:**
```svelte
<CardGrid columns={3}>
  <Card title="..." description="..." href="..." />
  <Card title="..." description="..." href="..." />
</CardGrid>
```

#### 5. `Card.svelte`
**Purpose:** Individual cards with consistent styling
**Props:** title, description, href, badge, image
**Variants:** Standard, placeholder (dashed border), category cards

#### 6. `ContentSection.svelte`
**Purpose:** Consistent section styling with headers
**Props:** title, id (for anchors)
**Usage:**
```svelte
<ContentSection title="Market Opportunity" id="market">
  <slot />
</ContentSection>
```

### Navigation Components

#### 7. `BackLink.svelte`
**Purpose:** Standardize "← Back to..." navigation
**Props:** href, text
**Usage:**
```svelte
<BackLink href="/vc" text="Back to VC Notes" />
```

#### 8. `ExternalLink.svelte`
**Purpose:** External links with security attributes and consistent styling
**Props:** href, text (or slot)
**Auto-adds:** `target="_blank" rel="noopener noreferrer"`

#### 9. `ActionButton.svelte`
**Purpose:** CTA buttons with consistent styling
**Props:** href, variant (primary|secondary), size
**Usage:**
```svelte
<ActionButton href="/vc/notes" variant="primary">
  View All Analysis Notes →
</ActionButton>
```

### Specialized Content Components

#### 10. `SpecificationGrid.svelte`
**Purpose:** Equipment/specification lists from adventure pages
**Props:** specifications (array of { category, items })
**Usage:**
```svelte
<SpecificationGrid {specifications} />
```

#### 11. `IntroText.svelte`
**Purpose:** Large introduction paragraphs with consistent styling
**Props:** size (normal|large)
**Usage:**
```svelte
<IntroText size="large">
  This website is mainly for me, but...
</IntroText>
```

#### 12. `ContactLinks.svelte`
**Purpose:** Consistent contact information display
**Usage:** Extract the contact links pattern from contact page

### Advanced Components (Already Created)

#### 13. Analysis Note System
- ✅ `AnalysisNote.svelte` - Main wrapper with TOC, reading progress
- ✅ `CollapsibleSection.svelte` - Expandable sections
- ✅ `MetricsCard.svelte` - Data visualization cards
- ✅ `Tooltip.svelte` - Contextual information display

## Implementation Priority

### Phase 1: High-Impact Layout (Immediate wins)
1. `PageLayout.svelte` - Replace container pattern everywhere
2. `PageHeader.svelte` - Standardize page headers
3. `ExternalLink.svelte` - Fix link security and consistency
4. `CardGrid.svelte` + `Card.svelte` - Homepage and section pages

### Phase 2: Content Standardization
5. `ContentSection.svelte` - Section headers and spacing
6. `ActionButton.svelte` - CTA consistency
7. `BackLink.svelte` - Navigation consistency
8. `IntroText.svelte` - Introduction paragraph styling

### Phase 3: Specialized Content
9. `PrintablePage.svelte` - VC memos and analysis notes
10. `SpecificationGrid.svelte` - Adventure equipment lists
11. `ContactLinks.svelte` - Contact information display

### Phase 4: Integration Testing
- Refactor existing pages to use new components
- Test print functionality across all printable pages
- Verify responsive behaviour
- Check accessibility compliance

## Benefits of This Architecture

### Code Reduction
- **Estimated 60% reduction** in repeated container/layout code
- **50+ link instances** standardized with security attributes
- **Consistent styling** across all similar elements

### Maintainability
- **Single source of truth** for common patterns
- **Easy global changes** (e.g., changing card hover effects)
- **Reduced testing surface** - test components once, use everywhere

### User Experience
- **Perfect consistency** across all pages
- **Accessibility improvements** built into components
- **Print optimization** standardized across document types

### Developer Experience
- **Faster page creation** - compose with components instead of copy-paste
- **Clear component contracts** - props define usage patterns
- **TypeScript integration** - type safety for all component props

## Migration Strategy

1. **Create components incrementally** - Start with `PageLayout`
2. **Migrate page by page** - Update existing pages one at a time
3. **Test thoroughly** - Ensure no visual or functional regressions
4. **Document usage patterns** - Create component usage guide
5. **Update build process** - Ensure components are included in build

## File Structure

```
src/lib/components/
├── layout/
│   ├── PageLayout.svelte
│   ├── PageHeader.svelte
│   └── PrintablePage.svelte
├── content/
│   ├── CardGrid.svelte
│   ├── Card.svelte
│   ├── ContentSection.svelte
│   ├── IntroText.svelte
│   └── SpecificationGrid.svelte
├── navigation/
│   ├── BackLink.svelte
│   ├── ExternalLink.svelte
│   └── ActionButton.svelte
├── analysis/           # Already exists
│   ├── AnalysisNote.svelte
│   ├── CollapsibleSection.svelte
│   ├── MetricsCard.svelte
│   └── Tooltip.svelte
└── contact/
    └── ContactLinks.svelte
```

## Success Metrics

- **Lines of code reduction**: Target 30% reduction in template code
- **Consistency score**: All similar elements use same styling
- **Maintenance time**: Faster to make global styling changes
- **Page creation speed**: New pages can be built 50% faster

This architecture maintains the website's current aesthetic and functionality while significantly reducing code duplication and improving maintainability.
