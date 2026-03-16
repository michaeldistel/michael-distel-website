<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';
</script>

<svelte:head>
	<title>Industrial Automation | Michael Distel</title>
	<meta
		name="description"
		content="Industrial automation workflows and efficiency improvements. Experience with power plants, water treatment facilities, and VS Code extension development at controlforge.dev."
	/>
</svelte:head>

<PageLayout>
	<PageHeader title="Industrial" subtitle="Automation workflows and small efficiency gains" />

	<!-- Introduction -->
	<p class="mb-6 note-text-body-lg">
		Notes on industrial automation, small workflow tweaks, and systems that make everyday work
		calmer and faster. Based on experience with power plants, water treatment facilities, and the VS
		Code extension at <ExternalLink href="https://controlforge.dev">controlforge.dev</ExternalLink>.
	</p>

	<!-- Content -->
	<div class="space-y-8">
		<!-- Blog Posts / Notes -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Notes</h2>
			<div class="space-y-4">
				<article
					class="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
				>
					<h3 class="text-xl font-semibold mb-2">
						<a href="/industrial/automation-repo-map" class="hover:text-blue-400 transition-colors">
							Industrial Automation Repo Map
						</a>
					</h3>
					<time class="text-gray-400 text-sm mb-3 block">27 February 2026</time>
					<p class="text-gray-300 mb-4">
						Analysis of 90 industrial automation open source repos: protocol plumbing, edge tooling,
						and developer experience. Where the real adoption sits and what matters operationally.
					</p>
					<a
						href="/industrial/automation-repo-map"
						class="text-blue-400 hover:text-blue-300 text-sm font-medium"
					>
						Read more →
					</a>
				</article>
			</div>
		</section>
	</div>
</PageLayout>
