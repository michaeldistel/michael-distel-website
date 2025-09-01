<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import Breadcrumbs from '$lib/components/navigation/Breadcrumbs.svelte';
	import StartupNoteCard from '$lib/components/startup/StartupNoteCard.svelte';
	import { getNotesChronological, getDraftNotes } from '$lib/startup-notes';

	const publishedNotes = getNotesChronological();
	const draftNotes = getDraftNotes();

	// Show drafts in development (you can control this)
	const showDrafts = false; // Set to true for development preview
	
	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Startup', href: '/startup' },
		{ label: 'Notes' }
	];
</script>

<svelte:head>
	<title>Startup Notes | Michael Distel</title>
	<meta
		name="description"
		content="Personal notes on startups and early-stage investing. Working through ideas about fundraising, timing, and what actually moves companies forward, based on direct experience."
	/>
</svelte:head>

<PageLayout>
	<Breadcrumbs items={breadcrumbs} />

	<PageHeader
		title="Notes"
		description="Public exploration of startups and market opportunities. Each note represents working thoughts shared transparently to invite conversation and challenge assumptions."
	/>

	<!-- Notes List -->
	<div class="space-y-6">
		{#if publishedNotes.length > 0}
			{#each publishedNotes as note}
				<StartupNoteCard {note} />
			{/each}
		{:else}
			<!-- No published notes yet -->
			<div class="text-center py-12 text-gray-400">
				<h3 class="text-lg font-medium mb-2">No published notes yet</h3>
				<p>Notes will appear here once they're ready for public viewing.</p>
			</div>
		{/if}

		<!-- Development Preview (only shown when showDrafts is true) -->
		{#if showDrafts && draftNotes.length > 0}
			<div class="border-t border-gray-700 pt-8 mt-8">
				<h3 class="text-lg font-semibold mb-4 text-yellow-400">
					🚧 Draft Notes (Development Preview)
				</h3>
				<div class="space-y-4">
					{#each draftNotes as note}
						<StartupNoteCard {note} showStatus={true} />
					{/each}
				</div>
			</div>
		{/if}
	</div>
</PageLayout>
