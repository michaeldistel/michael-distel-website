<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';
</script>

<svelte:head>
	<title>Korea 2025 | Busan to Seoul | Kicking Miles | Michael Distel</title>
	<meta
		name="description"
		content="A 560km, 11-day kick-scooter trip across South Korea from Busan to Seoul in October 2025. Daily journal and route notes on Kicking Miles."
	/>
</svelte:head>

<PageLayout>
	<h1 class="heading-page-title">Korea 2025</h1>
	<h2 class="heading-page-subtitle">Busan to Seoul • 560km • 11 days</h2>

	<h3 class="heading-adventure">The Trip</h3>
	<p class="mb-6 md:text-xl sm:text-base">
		October 2025. Alex and I kick-scootered 560 kilometres from Busan to Seoul. This time, instead
		of improvising roads, we leaned on South Korea's long-distance bike path network.
	</p>

	<h3 class="heading-adventure">Read the Full Journal</h3>
	<p class="mb-6 md:text-xl sm:text-base">
		The complete trip (and daily entries) live on Kicking Miles:
		<ExternalLink href="https://kickingmiles.com/trips/korea-2025"
			>Korea 2025: Busan to Seoul</ExternalLink
		>.
	</p>

	<h3 class="heading-adventure">Route Notes</h3>
	<p class="mb-4 md:text-xl sm:text-base">
		We aimed to follow the Nakdonggang, Saejae, Namhangang, and Hangang paths through major stops on
		the way to Seoul.
	</p>
	<ul class="list-disc list-inside space-y-2 md:text-xl sm:text-base ml-4 mb-6">
		<li>Busan (start)</li>
		<li>Daegu (rest day + reset)</li>
		<li>Mungyeong (mountain pass)</li>
		<li>Chungju / Yangpyeong (river paths)</li>
		<li>Seoul (finish)</li>
	</ul>

	<h3 class="heading-adventure">Documentation</h3>
	<p class="mb-6 md:text-xl sm:text-base">
		Updates and photos:
		<ExternalLink href="https://www.instagram.com/heykickingmiles/">Instagram</ExternalLink>
		and
		<ExternalLink href="https://www.facebook.com/HeyKickingMiles/">Facebook</ExternalLink>.
	</p>
</PageLayout>
