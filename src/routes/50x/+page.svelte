<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';
</script>

<PageLayout>
	<div class="text-center py-8">
		<h1 class="text-6xl font-bold mb-8">500</h1>
		<h2 class="text-2xl mb-4">Server Error</h2>
		<p class="mb-8">Sorry, something went wrong on our end. Please try again later.</p>
		<ExternalLink href="/" newTab={false} linkClass="text-blue-400 hover:text-blue-300">
			Return to Home
		</ExternalLink>
	</div>
</PageLayout>
