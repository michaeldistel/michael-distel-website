<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';
</script>

<PageLayout>
	<div class="text-center py-8">
		<h1 class="heading-error">404</h1>
		<h2 class="heading-error-subtitle">Page Not Found</h2>
		<p class="mb-8">The page you're looking for doesn't exist or was moved.</p>
		<ExternalLink href="/" newTab={false} linkClass="text-blue-400 hover:text-blue-300">
			Return to Home
		</ExternalLink>
	</div>
</PageLayout>
