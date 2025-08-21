# Investment Memos System

A simple system for creating and publishing investment exploration memos as static pages with consistent formatting and built-in print functionality.

## Overview

Investment memos are public explorations of startups and market opportunities, written as transparent working thoughts to invite conversation and challenge assumptions. Each memo is a standalone static page following a standardized format.

## Features

- **Simple static pages** - Each memo is its own Svelte page, no complex routing
- **Consistent structure** with standardized sections and formatting
- **Professional styling** that matches the site's dark theme aesthetic
- **Print-optimized layout** for clean physical documents and PDF generation
- **Easy maintenance** - Just create new folders and pages as needed

## File Structure

```
src/routes/startup/memos/
├── +page.svelte              # Memos index page (manually maintained list)
├── README.md                 # This documentation
├── sample-memo/
│   └── +page.svelte          # Example memo page
└── your-memo-name/
    └── +page.svelte          # Your memo page
```

## Adding a New Memo

### Step 1: Create Memo Directory
```bash
mkdir src/routes/startup/memos/your-memo-slug
```

### Step 2: Copy Template
Copy `sample-memo/+page.svelte` as your starting template:
```bash
cp src/routes/startup/memos/sample-memo/+page.svelte src/routes/startup/memos/your-memo-slug/+page.svelte
```

### Step 3: Update Content
Edit the new file and update:
- `<title>` in svelte:head
- `<meta name="description">` in svelte:head  
- Header title, date, and summary
- All memo content sections

### Step 4: Add to Index
Manually add your memo to the index page (`+page.svelte`) by uncommenting and updating the example article block.

### Step 5: Test
```bash
pnpm dev
# Visit /startup/memos/your-memo-slug
```

## Content Standards & Style Guide

### Writing Tone (Michael Distel Voice)
- **Personal and reflective**: Write in first person as working notes to yourself
- **Humble and non-prescriptive**: Present analysis without telling readers what to do
- **Curious and grounded**: Focus on practical insights over hype
- **Calm and understated**: Professional tone with light touches of humanity
- **Honest about uncertainty**: Acknowledge gaps and areas for further research

### Writing Style
- **Simple, direct sentences** with plain vocabulary
- **UK/Australian spelling**: kilometres, organise, colour, realise
- **Minimise contractions**: Prefer "I am", "do not", "cannot"
- **No em dashes**: Use commas, full stops, or parentheses instead
- **Specific over abstract**: Include dates, numbers, concrete examples
- **Short paragraphs** grouped by topic with clear headings
- **Invite conversation**: End sections with questions or areas for discussion

### Content Principles
- **Be transparent about assumptions** and reasoning process
- **Include specific data points** where available
- **Timestamp context** when market conditions matter
- **Acknowledge competing viewpoints** and alternative interpretations
- **Focus on learning** rather than being definitively right
- **Prefer revision over deletion** when thinking evolves

## Standard Memo Template

### Required Structure

Every memo must include these sections in this order:

#### 1. Executive Summary
- **Purpose**: Key thesis and investment rationale in 2-3 clear sentences
- **Content**: What the company does, why it matters, and your preliminary view
- **Length**: 50-100 words maximum

#### 2. Market Opportunity  
- **Market size and dynamics**: TAM/SAM with realistic assessment
- **Timing considerations**: Why now? What has changed?
- **Competitive landscape**: Key players and market structure
- **Regulatory environment**: Relevant constraints or enablers

#### 3. Company Analysis
- **Business model**: How they make money, unit economics where known
- **Competitive positioning**: What differentiates them
- **Execution assessment**: Team, progress, operational capabilities
- **Customer validation**: Evidence of product-market fit

#### 4. Financial Considerations
- **Revenue model**: Recurring vs transactional, pricing strategy
- **Unit economics**: CAC, LTV, gross margins where available
- **Capital requirements**: Funding needs and capital efficiency
- **Path to profitability**: Realistic timeline and key drivers

#### 5. Risk Assessment
- **Market risks**: Competition, regulation, timing
- **Company-specific risks**: Team, execution, technology
- **Financial risks**: Burn rate, funding gaps, scalability
- **Macro risks**: Economic conditions, sector trends

#### 6. Investment Thesis
- **Core investment case**: 3-5 key reasons for potential investment
- **Success metrics**: What would need to be true for success
- **Exit scenarios**: Realistic paths to returns
- **Investment timeline**: Expected holding period and milestones

#### 7. Open Questions
- **Market dynamics**: What you need to learn about the space
- **Company specifics**: Areas requiring deeper due diligence  
- **Operational concerns**: Scaling challenges to validate
- **Strategic questions**: Partnership opportunities, competitive responses

## HTML Content Guidelines

### Semantic Structure
- **Use proper heading hierarchy**: h2 for main sections, h3 for subsections
- **Paragraph tags**: Each distinct thought in its own `<p>` tag
- **Lists**: Use `<ul>` for unordered lists, `<ol>` for numbered sequences
- **Strong emphasis**: Use `<strong>` for key terms or important points
- **External links**: Always include `target="_blank" rel="noopener noreferrer"`

### Content Formatting Examples

```html
<!-- Section Header -->
<h2>Market Opportunity</h2>

<!-- Standard paragraph -->
<p>The Australian fintech market is estimated at $4.2 billion in 2025, growing at 15% annually. This represents a significant opportunity, though the competitive landscape has intensified considerably.</p>

<!-- Key insight with emphasis -->
<p>The <strong>critical insight</strong> is that most competitors focus on consumer banking, leaving B2B payment infrastructure relatively underserved.</p>

<!-- Bullet points for analysis -->
<ul>
    <li>Market timing appears favourable with new open banking regulations</li>
    <li>Customer acquisition costs have increased 40% year-on-year across the sector</li>
    <li>Regulatory clarity expected by Q2 2026 following APRA consultation</li>
</ul>

<!-- Numbered list for process/timeline -->
<ol>
    <li>Series A funding to build core infrastructure (12 months)</li>
    <li>Pilot partnerships with 5-10 SMEs (6 months)</li>
    <li>Series B to scale go-to-market (18 months)</li>
</ol>

<!-- Blockquote for key statements -->
<blockquote>
    <p>"We are building infrastructure that makes B2B payments as simple as consumer transfers" - CEO interview, March 2025</p>
</blockquote>

<!-- External link example -->
<p>Recent analysis by <a href="https://example.com/report" target="_blank" rel="noopener noreferrer">EY Australia</a> suggests the opportunity is larger than initially estimated.</p>
```

### Data Presentation Standards
- **Always include sources** for financial figures and market data
- **Timestamp dynamic information**: Market caps, funding amounts, team size
- **Use specific numbers**: "15% growth" not "strong growth"
- **Include context**: "$50M ARR (as of March 2025)"
- **Acknowledge limitations**: "Based on publicly available information"

## Adding a New Memo

### Manual Process

### Step 1: Add Memo Data

Add your memo to `src/routes/startup/memos/[slug]/+page.ts`:

## Memo Template Structure

Each memo page should include:

### Svelte Head
```html
<svelte:head>
	<title>Your Memo Title | Michael Distel</title>
	<meta name="description" content="Brief summary of the memo" />
	<!-- Print styles included -->
</svelte:head>
```

### Header Section
- Back navigation to memos index
- Print/PDF button
- Memo title, date, author
- Summary paragraph

### Content Sections (Required)
1. **Executive Summary** - Key thesis in 2-3 sentences
2. **Market Opportunity** - Market size, dynamics, timing
3. **Company Analysis** - Positioning, advantages, execution  
4. **Financial Considerations** - Revenue model, unit economics
5. **Risk Assessment** - Key risks and challenges
6. **Investment Thesis** - Core case and success metrics
7. **Open Questions** - Areas needing further research

### Footer
- Publication URL and date
- Disclaimer about exploratory thoughts

## URLs and Navigation

- **Main VC page**: `/vc` (links to memos section)
- **Memos index**: `/startup/memos` (manually maintained list)
- **Individual memo**: `/startup/memos/your-memo-slug` (static page)

Navigation flow: VC Notes → Investment Memos → Individual Memo → Print/PDF

## Development Commands

```bash
# Type checking
pnpm check

# Build for production  
pnpm build

# Local development server
pnpm dev

# Preview production build
pnpm preview
```

## Print & PDF Functionality

- **Single button**: "Print / Save as PDF" triggers browser print dialog
- **Print-optimized CSS**: Converts dark theme to clean black-and-white for printing
- **No external dependencies**: Uses browser's built-in print-to-PDF capability
- **Professional layout**: Maintains structure and readability on paper

This simplified system removes all the complexity while keeping the professional presentation and functionality you need.
