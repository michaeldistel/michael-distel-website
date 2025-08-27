<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';
</script>

<PageLayout>
	<div class="text-center py-8">
		<h1 class="heading-error">500</h1>
		<h2 class="heading-error-subtitle">Server Error</h2>
		<p class="mb-8">Sorry, something went wrong on our end. Please try again later.</p>
		<ExternalLink href="/" newTab={false} className="note-link-primary">
			Return to Home
		</ExternalLink>
	</div>
</PageLayout>
