<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';
</script>

<svelte:head>
	<title>Japan 2023 | Tokyo to Nasu | Kicking Miles | Michael Distel</title>
	<meta
		name="description"
		content="A 3-day, ~150km kick-scooter trip from Tokyo to Nasu (Tochigi) in October 2023. A shorter return to Japan with a daily journal on Kicking Miles."
	/>
</svelte:head>

<PageLayout>
	<h1 class="heading-page-title">Japan 2023</h1>
	<h2 class="heading-page-subtitle">Tokyo to Nasu Tochigi • ~150km • 3 days</h2>

	<h3 class="heading-adventure">The Trip</h3>
	<p class="mb-6 md:text-xl sm:text-base">
		16 - 18 October 2023. A shorter but meaningful return to Japan with Alex, trading the 2017
		marathon for three days of steady movement, autumn colours, and a quieter pace.
	</p>

	<h3 class="heading-adventure">Read the Full Journal</h3>
	<p class="mb-6 md:text-xl sm:text-base">
		The complete trip (and daily entries) live on Kicking Miles:
		<ExternalLink href="https://kickingmiles.com/trips/japan-2023"
			>Japan 2023: Tokyo to Nasu</ExternalLink
		>.
	</p>

	<h3 class="heading-adventure">Daily Entries</h3>
	<ul class="list-disc list-inside space-y-2 md:text-xl sm:text-base ml-4 mb-6">
		<li>
			<ExternalLink href="https://kickingmiles.com/trips/japan-2023/day-01-tokyo-to-nasu">
				Day 01: Back on the Road
			</ExternalLink>
		</li>
		<li>
			<ExternalLink href="https://kickingmiles.com/trips/japan-2023/day-02-exploring-nasu">
				Day 02: The Grind
			</ExternalLink>
		</li>
		<li>
			<ExternalLink href="https://kickingmiles.com/trips/japan-2023/day-03-nasu-reflections">
				Day 03: Climbing for Love
			</ExternalLink>
		</li>
	</ul>

	<h3 class="heading-adventure">Documentation</h3>
	<p class="mb-6 md:text-xl sm:text-base">
		Updates and photos:
		<ExternalLink href="https://www.instagram.com/heykickingmiles/">Instagram</ExternalLink>
		and
		<ExternalLink href="https://www.facebook.com/HeyKickingMiles/">Facebook</ExternalLink>.
	</p>
</PageLayout>
