<script lang="ts">
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';
	import type { StartupNote } from '$lib/startup-notes';

	export let note: StartupNote;
	export let showStatus: boolean = false;
	export let className: string = '';

	$: cardClasses = `note-card-md hover:border-gray-600 transition-colors relative ${className}`;
</script>

<article class={cardClasses}>
	{#if showStatus && note.status !== 'published'}
		<div
			class="absolute top-3 right-3 px-2 py-1 note-text-label font-medium rounded-full
			{note.status === 'draft' ? 'note-bg-warning note-color-warning' : ''}
			{note.status === 'archived' ? 'note-bg-neutral note-color-neutral' : ''}
		"
		>
			{note.status.toUpperCase()}
		</div>
	{/if}

	<h2 class="heading-card">
		<ExternalLink
			href="/startup/notes/{note.slug}"
			newTab={false}
			className="note-color-primary hover:note-color-primary-hover transition-colors"
		>
			{note.title}
		</ExternalLink>
	</h2>

	<div class="note-text-caption-muted note-space-sm">
		{new Date(note.publishDate).toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		})}
	</div>
	{#if note.tags && note.tags.length > 0}
		<div class="flex flex-wrap note-gap-xs note-space-sm">
			{#each note.tags as tag}
				<span class="px-2 py-1 note-text-label bg-slate-800 rounded-full">
					{tag}
				</span>
			{/each}
		</div>
	{/if}

	<p class="note-text-body note-space-md">
		{note.description}
	</p>

	<div class="flex gap-3">
		<ExternalLink href="/startup/notes/{note.slug}" newTab={false} className="note-link-internal">
			Read note →
		</ExternalLink>
	</div>
</article>
