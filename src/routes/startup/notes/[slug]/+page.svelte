<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import { getNoteBySlug } from '$lib/startup-notes.js';
	import Breadcrumbs from '$lib/components/navigation/Breadcrumbs.svelte';
	import PageLayout from '$lib/components/layout/PageLayout.svelte';

	// Import all possible note components
	import BuildBearLabsNote from '../2025-08-buildbear-labs/+page.svelte';
	import StartupGameNote from '../2025-09-startup-game/+page.svelte';

	// Map slugs to components
	const noteComponents: Record<string, any> = {
		'2025-08-buildbear-labs': BuildBearLabsNote,
		'2025-09-startup-game': StartupGameNote
	};

	$: slug = $page.params.slug;
	$: note = getNoteBySlug(slug || '');
	$: CurrentComponent = slug ? noteComponents[slug] || null : null;

	// Throw 404 if note exists but no component (shouldn't happen in production)
	$: if (note && !CurrentComponent) {
		throw error(404, 'Note component not found');
	}

	$: breadcrumbs = note
		? [
				{ label: 'Home', href: '/' },
				{ label: 'Startup', href: '/startup' },
				{ label: 'Notes', href: '/startup/notes' },
				{ label: note.title }
			]
		: [];
</script>

<svelte:head>
	{#if note}
		<title>{note.title} | Michael Distel</title>
		<meta name="description" content={note.description} />

		<!-- Open Graph / Facebook -->
		<meta property="og:type" content="article" />
		<meta property="og:url" content="https://michaeldistel.com/startup/notes/{slug}" />
		<meta property="og:title" content={note.title} />
		<meta property="og:description" content={note.description} />
		<meta property="og:site_name" content="Michael Distel" />
		<meta property="article:published_time" content={note.publishDate} />
		<meta property="article:author" content="Michael Distel" />
		<meta property="article:section" content="Startup Analysis" />

		<!-- Twitter -->
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:url" content="https://michaeldistel.com/startup/notes/{slug}" />
		<meta name="twitter:title" content={note.title} />
		<meta name="twitter:description" content={note.description} />

		<!-- Structured Data for Article -->
		<script type="application/ld+json">
			{
				"@context": "https://schema.org",
				"@type": "Article",
				"headline": "{note.title}",
				"description": "{note.description}",
				"author": {
					"@type": "Person",
					"name": "Michael Distel",
					"url": "https://michaeldistel.com/about"
				},
				"publisher": {
					"@type": "Person",
					"name": "Michael Distel"
				},
				"datePublished": "{note.publishDate}",
				"dateModified": "{note.lastModified || note.publishDate}",
				"url": "https://michaeldistel.com/startup/notes/{slug}",
				"mainEntityOfPage": "https://michaeldistel.com/startup/notes/{slug}",
				"articleSection": "Startup Notes"
			}
		</script>
	{/if}
</svelte:head>

{#if CurrentComponent}
	<svelte:component this={CurrentComponent} />
{:else}
	<!-- Fallback for missing components -->
	<PageLayout>
		<h1 class="heading-page-title">Note Not Available</h1>
		<p class="text-gray-400">This analysis note is not yet available.</p>
	</PageLayout>
{/if}
