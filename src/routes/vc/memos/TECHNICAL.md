# Investment Memos - Technical Documentation

## System Overview

Simple static page system for investment memos using Markdown as the source of truth for content. Each memo has a `.md` file for version control and editing, and a Svelte page that contains the same content with consistent styling and print functionality.

## File Structure

```
src/routes/vc/memos/
├── +page.svelte              # Memos index page (manually maintained list)
├── TECHNICAL.md              # This technical documentation
├── TEMPLATE.md               # Content structure and style guide
├── sample-memo/
│   ├── +page.svelte          # Svelte page with content and styling
│   └── memo.md               # Markdown reference (source of truth)
└── your-memo-name/
    ├── +page.svelte          # Svelte page with content and styling
    └── memo.md               # Markdown reference (source of truth)
```

## Adding a New Memo

### Step 1: Create Memo Directory
```bash
mkdir src/routes/vc/memos/your-memo-slug
```

### Step 2: Create Markdown Reference
Create `memo.md` with your content (see [TEMPLATE.md](./TEMPLATE.md) for structure):
```bash
touch src/routes/vc/memos/your-memo-slug/memo.md
```

### Step 3: Copy Svelte Template
Copy the Svelte page template:
```bash
cp src/routes/vc/memos/sample-memo/+page.svelte src/routes/vc/memos/your-memo-slug/+page.svelte
```

### Step 4: Convert with AI
1. **Write content in `memo.md`**: Focus on the content without worrying about HTML
2. **Use AI to convert**: Ask AI (GitHub Copilot, ChatGPT, etc.) to convert the Markdown to Svelte HTML structure
3. **Update metadata**: Title, description, date, summary in the Svelte file head section

Example AI prompt:
```
"Convert this markdown memo to Svelte HTML using the same structure as sample-memo/+page.svelte. 
Use proper Tailwind classes: h2='text-2xl font-bold mb-4', p='mb-4', ul='list-disc ml-6 space-y-2'. 
Keep the seven-section structure with proper semantic HTML."
```

### Step 5: Add to Index
Manually add your memo to the index page (`+page.svelte`) by adding the memo entry.

### Step 6: Test
```bash
pnpm dev
# Visit /vc/memos/your-memo-slug
```

## Content Workflow (AI-Assisted)

1. **Write in Markdown**: Create your `memo.md` file with all content - this is your primary writing environment
2. **AI conversion**: Use AI (like GitHub Copilot) to read the Markdown and generate the Svelte page HTML structure
3. **Review and adjust**: Check the AI-generated Svelte page for proper formatting and styling
4. **Version control**: Both files are tracked, but `.md` is your source of truth for content changes
5. **Maintain consistency**: When updating content, edit the Markdown first, then use AI to update the Svelte page

### AI Prompt for Conversion
When asking AI to convert your Markdown to Svelte, use something like:

> "Convert this markdown memo content to a Svelte page following the structure in sample-memo/+page.svelte. Use proper HTML tags with Tailwind classes: h2 with 'text-2xl font-bold mb-4', paragraphs with 'mb-4', lists with 'list-disc ml-6 space-y-2', etc."

This approach leverages AI to handle the tedious HTML conversion while keeping your writing workflow simple and focused.

## Svelte Page Template Structure

Each memo page should include:

### Script Section
```html
<script lang="ts">
    let printMode = false;
    
    function handlePrint() {
        printMode = true;
        setTimeout(() => {
            window.print();
            printMode = false;
        }, 100);
    }
</script>
```

### Svelte Head
```html
<svelte:head>
    <title>Your Memo Title | Michael Distel</title>
    <meta name="description" content="Brief summary of the memo" />
    <style>
        @media print {
            .no-print { display: none !important; }
            body { font-size: 12pt; line-height: 1.5; color: black !important; background: white !important; }
            .container { max-width: none !important; padding: 0 !important; margin: 0 !important; }
            h1, h2, h3, h4, h5, h6, p, li { color: black !important; }
        }
    </style>
</svelte:head>
```

### Content Structure
```html
<!-- Memo Content -->
<article class="prose prose-invert prose-lg max-w-none space-y-6">
    <section>
        <h2 class="text-2xl font-bold mb-4">Executive Summary</h2>
        <p class="mb-4">Your content here...</p>
    </section>
    <!-- More sections... -->
</article>
```

### Header Section
- Back navigation to memos index
- Print/PDF button
- Memo title, date, author
- Summary paragraph

### Content Structure
Use semantic HTML with proper styling:
- `<section>` for each main part
- `<h2>` for section headings
- `<p>` for paragraphs
- `<ul>` and `<li>` for lists
- Consistent spacing with `mb-4` classes

### Footer Section
```html
<footer class="mt-12 pt-6 border-t border-gray-700">
    <p class="text-sm text-gray-400">
        This memo was published on <strong>michaeldistel.com/vc/memos/your-slug</strong> 
        on 21 August 2025. These are exploratory thoughts and not investment advice.
    </p>
</footer>
```

## Styling Guidelines

### CSS Classes
- Container: `container mx-auto px-4 py-8 max-w-4xl`
- Headings: `text-3xl sm:text-4xl font-bold` (h1), `text-2xl font-bold` (h2)
- Body text: `mb-4` for paragraphs
- Links: `font-medium text-blue-600 dark:text-blue-500 hover:underline`
- Buttons: `px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors`

### Print Optimization
- Use `.no-print` class to hide navigation and buttons
- Print styles convert dark theme to black-and-white
- Maintains semantic structure for readability

## URLs and Navigation

- **Main VC page**: `/vc` (links to memos section)
- **Memos index**: `/vc/memos` (manually maintained list)
- **Individual memo**: `/vc/memos/your-memo-slug` (static page)

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

This system keeps everything simple while providing professional presentation and functionality.
