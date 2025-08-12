<script>
	import '../app.css';
	import CookieBanner from '$lib/components/CookieBanner.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	
	$: canonicalUrl = `https://michaeldistel.com${$page.url.pathname}`;
</script>

<svelte:head>
	<link rel="canonical" href={canonicalUrl} />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>

<CookieBanner />
