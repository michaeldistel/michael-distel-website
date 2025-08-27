<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/navigation/Navigation.svelte';
	import { page } from '$app/stores';

	$: canonicalUrl = `https://michaeldistel.com${$page.url.pathname}`;
</script>

<svelte:head>
	<link rel="canonical" href={canonicalUrl} />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<!-- Navigation -->
	<Navigation />
	
	<main class="flex-grow md:pt-16">
		<slot />
	</main>
	<Footer />
</div>
