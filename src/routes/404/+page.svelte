<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Page not found | Michael Distel"
	description="The page you are looking for does not exist or was moved."
	noindex
/>

<PageLayout>
	<div class="text-center py-8">
		<h1 class="heading-error">404</h1>
		<h2 class="heading-error-subtitle">Page Not Found</h2>
		<p class="mb-8">The page you're looking for doesn't exist or was moved.</p>
		<ExternalLink href="/" newTab={false} className="note-link-primary">
			Return to Home
		</ExternalLink>
	</div>
</PageLayout>
