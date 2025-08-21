<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import BackLink from '$lib/components/navigation/BackLink.svelte';
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';
</script>

<svelte:head>
	<title>Analysis Notes | Michael Distel</title>
	<meta name="description" content="Public analysis notes exploring different startups and market opportunities" />
</svelte:head>

<PageLayout>
	<BackLink href="/startup" text="Back to Startup Notes" />

	<PageHeader 
		title="Analysis Notes"
		description="Public exploration of startups and market opportunities. Each note represents working thoughts shared transparently to invite conversation and challenge assumptions."
	/>

	<!-- Notes List -->
	<div class="space-y-6">
		<!-- BuildBear Labs Note - Hidden for now -->
		<!-- 
		<article class="border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
			<h2 class="text-xl font-semibold mb-2">
				<ExternalLink 
					href="/startup/notes/2025-08-buildbear-labs"
					newTab={false}
					linkClass="text-blue-600 dark:text-blue-500 hover:text-blue-400 transition-colors"
				>
					BuildBear Labs Analysis Note
				</ExternalLink>
			</h2>
			
			<div class="text-sm text-gray-400 mb-3">
				21 August 2025 • by Michael Distel
			</div>
			
			<p class="text-gray-300 mb-4">
				Analysis of BuildBear Labs' blockchain testing infrastructure platform and Series A opportunity. 
				Exploring market dynamics, technical differentiation, and investment considerations for this 
				Singapore-based developer tools company.
			</p>
			
			<div class="flex gap-3">
				<ExternalLink 
					href="/startup/notes/2025-08-buildbear-labs"
					newTab={false}
				>
					Read note →
				</ExternalLink>
			</div>
		</article>
		-->
	</div>
</PageLayout>
