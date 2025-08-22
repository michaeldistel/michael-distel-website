<script lang="ts">
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';
	import type { StartupNote } from '$lib/startup-notes';

	export let note: StartupNote;
	export let showStatus: boolean = false; // For development preview
</script>

<article class="border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors relative">
	{#if showStatus && note.status !== 'published'}
		<div class="absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-full
			{note.status === 'draft' ? 'bg-yellow-600/20 text-yellow-400' : ''}
			{note.status === 'archived' ? 'bg-gray-600/20 text-gray-400' : ''}
		">
			{note.status.toUpperCase()}
		</div>
	{/if}

	<h2 class="text-xl font-semibold mb-2">
		<ExternalLink 
			href="/startup/notes/{note.slug}"
			newTab={false}
			linkClass="text-blue-600 dark:text-blue-500 hover:text-blue-400 transition-colors"
		>
			{note.title}
		</ExternalLink>
	</h2>
	
	<div class="text-sm text-gray-400 mb-3">
		{note.publishDate} • by {note.author}
		{#if note.lastModified && note.lastModified !== note.publishDate}
			• Updated {note.lastModified}
		{/if}
	</div>

	{#if note.tags && note.tags.length > 0}
		<div class="flex flex-wrap gap-2 mb-3">
			{#each note.tags as tag}
				<span class="px-2 py-1 text-xs bg-slate-800 text-gray-300 rounded-full">
					{tag}
				</span>
			{/each}
		</div>
	{/if}
	
	<p class="text-gray-300 mb-4">
		{note.description}
	</p>
	
	<div class="flex gap-3">
		<ExternalLink 
			href="/startup/notes/{note.slug}"
			newTab={false}
		>
			Read note →
		</ExternalLink>
	</div>
</article>
