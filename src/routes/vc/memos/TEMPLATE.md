# Investment Memos - Content Template & Style Guide

## Markdown Source Files

Each memo's content lives in a `memo.md` file. This Markdown file is the source of truth for content and gets converted to Svelte HTML structure with AI assistance.

### Writing Workflow
1. **Write in Markdown**: Focus purely on content without HTML concerns
2. **Use AI for conversion**: Let AI handle the Markdown → Svelte HTML conversion
3. **Review and publish**: Check the generated Svelte page and make adjustments

### AI Conversion Tips
When asking AI to convert your Markdown:
- Reference the sample-memo structure
- Specify Tailwind classes for consistency
- Request proper semantic HTML structure
- Ask for the seven-section memo format

## Writing as Michael Distel

### Voice and Tone
- **Personal and reflective**: Write in first person as working notes to yourself
- **Humble and non-prescriptive**: Present analysis without telling readers what to do  
- **Curious and grounded**: Focus on practical insights over hype
- **Calm and understated**: Professional tone with light touches of humanity
- **No-bullshit approach**: Cut through nonsense and call things as they are
- **Honest about uncertainty**: Acknowledge gaps and areas for further research

### Writing Style
- **Simple, direct sentences** with plain vocabulary
- **UK/Australian spelling**: kilometres, organise, colour, realise
- **Minimise contractions**: Prefer "I am", "do not", "cannot"
- **No em dashes**: Use commas, full stops, or parentheses instead
- **Specific over abstract**: Include dates, numbers, concrete examples
- **Short paragraphs** grouped by topic with clear headings
- **Skip the pleasantries**: Get to the point without corporate fluff
- **If something is rubbish, say it is rubbish** (but explain why)

### Content Principles
- **Be transparent about assumptions** and reasoning process
- **Include specific data points** where available
- **Timestamp context** when market conditions matter
- **Acknowledge competing viewpoints** and alternative interpretations
- **Focus on learning** rather than being definitively right
- **Invite conversation**: End sections with questions or areas for discussion

## Required Memo Structure (Markdown)

Every `memo.md` file must include these seven sections in this order:

### 1. Executive Summary
```markdown
## Executive Summary

Company X is building B2B payment infrastructure targeting Australian SMEs. The timing appears favourable with new open banking regulations, though customer acquisition costs are rising across fintech. My preliminary assessment is cautiously optimistic, pending validation of their technical approach and partnership strategy.
```

### 2. Market Opportunity  
```markdown
## Market Opportunity

The Australian B2B payments market processes approximately $2.8 trillion annually, with SMEs representing 35% of transaction volume. Current solutions are fragmented, with most businesses still relying on bank transfers and legacy systems that lack integration capabilities.

**Key market dynamics:**
- Open banking regulations creating new infrastructure opportunities
- SME digital adoption accelerated by COVID-19, now sustaining at higher levels
- Growing demand for integrated accounting and payment workflows
```

### 3. Company Analysis
```markdown
## Company Analysis

Founded in 2023, Company X has built API-first payment infrastructure that connects directly to Australian banks via open banking protocols. Their approach differs from competitors by focusing on embedded finance within existing business software rather than standalone payment apps.

The founding team brings relevant experience from Commonwealth Bank's innovation lab and Xero's platform partnerships. They have secured pilot agreements with three accounting software providers, though commercial terms remain undisclosed.
```

### 4. Financial Considerations
```markdown
## Financial Considerations

Revenue model is transaction-based (0.5% of payment value) plus monthly SaaS fees for enhanced features ($50-200 per business). Unit economics appear promising in theory, though customer acquisition costs have not been validated at scale.

Current burn rate is approximately $300K per month with 18 months of runway remaining. Series A target of $8M would fund 24 months of operations and team expansion to 25 people.
```

### 5. Risk Assessment
```markdown
## Risk Assessment

Primary concerns centre on execution risk and competitive response. The technical infrastructure is complex, requiring ongoing regulatory compliance and bank relationship management. Large incumbents like Stripe and Adyen are expanding into Australian B2B, potentially commoditising the core offering.

Customer concentration risk is notable, with accounting software partnerships representing the primary distribution channel. Relationship changes could significantly impact growth trajectory.
```

### 6. Investment Thesis
```markdown
## Investment Thesis

The opportunity is compelling if Company X can execute on embedded finance partnerships and maintain technical differentiation. Success depends on:

- Expanding accounting software partnerships beyond initial three providers
- Demonstrating sustainable unit economics with CAC payback under 12 months  
- Building regulatory moats through deep compliance expertise
```

### 7. Open Questions
```markdown
## Open Questions

- How defensible is their technical approach as open banking standards evolve?
- Can they maintain pricing power as larger competitors enter the market?
- What is the realistic timeline for accounting software integration cycles?
- How scalable is their customer support model for SME clients?
```

## Markdown Formatting Guidelines

### Standard Markdown Elements
- **Headings**: Use `##` for main sections (Executive Summary, etc.)
- **Paragraphs**: Separate with blank lines for proper spacing
- **Lists**: Use `-` for bullet points, numbers for ordered lists
- **Emphasis**: Use `**bold**` for key terms, `*italic*` for light emphasis
- **Links**: `[Link text](URL)` - external links will automatically get security attributes

### Content Structure Example
```markdown
## Market Opportunity

The Australian B2B payments market processes approximately $2.8 trillion annually, with SMEs representing 35% of transaction volume. Current solutions are fragmented.

**Key market dynamics:**
- Open banking regulations creating new infrastructure opportunities
- SME digital adoption accelerated by COVID-19
- Growing demand for integrated workflows

Based on [EY Australia analysis](https://example.com), the opportunity is larger than initially estimated.
```

### Data Presentation in Markdown
- **Include sources**: Always cite where data comes from
- **Timestamp dynamic info**: "Market cap of $500M (as of March 2025)"
- **Be specific**: "15% growth" not "strong growth"  
- **Show uncertainty**: "Based on publicly available information"
- **Currency**: Specify AUD vs USD clearly

## Naming Conventions

### URL Slugs
- Use kebab-case: `company-name-analysis` 
- Include company name: `stripe-payments-analysis`
- Add sector if helpful: `fintech-embedded-payments-trends`
- Keep under 50 characters for clean URLs

### Titles
- **Company memos**: "Company Name: [Focus Area] Analysis"
- **Sector memos**: "Australian Fintech: [Specific Topic] Trends"  
- **Theme memos**: "B2B Payments: Infrastructure Opportunity Assessment"

### Dates
- Always use: "21 August 2025" (day month year, no ordinals)
- UK style consistent with site voice

## Quality Checklist

Before publishing:
- [ ] **Voice consistency**: Written in Michael Distel's personal, reflective style  
- [ ] **UK spelling**: organise, colour, realise, kilometres
- [ ] **No contractions**: "I am" not "I'm", "do not" not "don't"
- [ ] **Specific data**: Numbers, dates, concrete examples included
- [ ] **Honest uncertainty**: Acknowledges gaps and questions
- [ ] **Proper structure**: All seven required sections present
- [ ] **Sources cited**: Financial figures and market data attributed
- [ ] **Print test**: Content readable in browser print preview

This template ensures consistency while preserving authenticity in each memo's analysis and insights.
