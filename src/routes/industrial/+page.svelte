<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';
</script>

<PageLayout>
	<PageHeader title="Industrial" subtitle="Automation workflows and small efficiency gains" />

	<!-- Introduction -->
	<p class="mb-6 note-text-body-lg">
		Notes on industrial automation, small workflow tweaks, and systems that make everyday work
		calmer and faster. Based on experience with power plants, water treatment facilities, and the VS
		Code extension at <ExternalLink href="https://controlforge.dev">controlforge.dev</ExternalLink>.
	</p>

	<!-- Placeholder for content -->
	<p class="mb-6 md:text-xl sm:text-base">
		Content coming soon. This will cover workflow improvements, testing patterns, and the small
		utilities that can save surprising amounts of effort in industrial environments.
	</p>
</PageLayout>
