<script>
	import { page } from '$app/stores';

	// Single source of truth for per-page head tags. Nothing here may also live
	// in src/app.html, or every page ships two of each and Google reads the first.
	export let title;
	export let description;
	export let ogType = 'website';
	export let noindex = false;

	$: url = `https://michaeldistel.com${$page.url.pathname}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	{#if noindex}
		<meta name="robots" content="noindex, follow" />
	{/if}

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={url} />

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>
