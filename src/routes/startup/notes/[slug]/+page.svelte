<script lang="ts">
	import { page } from '$app/stores';
	import { getNoteBySlug } from '$lib/startup-notes.js';

	// Import all possible note components
	import BuildBearLabsNote from '../2025-08-buildbear-labs/+page.svelte';

	// Map slugs to components
	const noteComponents: Record<string, any> = {
		'2025-08-buildbear-labs': BuildBearLabsNote
	};

	$: slug = $page.params.slug;
	$: note = getNoteBySlug(slug || '');
	$: CurrentComponent = slug ? noteComponents[slug] || null : null;
</script>

<svelte:head>
	{#if note}
		<title>{note.title} | Michael Distel</title>
		<meta name="description" content={note.description} />
	{/if}
</svelte:head>

{#if CurrentComponent}
	<svelte:component this={CurrentComponent} />
{:else}
	<!-- Fallback for missing components -->
	<div class="container mx-auto px-4 py-8 max-w-4xl">
		<h1 class="text-3xl font-bold mb-4">Note Not Available</h1>
		<p class="text-gray-400">This analysis note is not yet available.</p>
	</div>
{/if}
