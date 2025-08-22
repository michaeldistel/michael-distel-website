<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import ActionButton from '$lib/components/navigation/ActionButton.svelte';
</script>

<svelte:head>
	<title>Startup Notes | Michael Distel</title>
	<meta name="description" content="Early-stage fundraising and what actually moves companies forward" />
</svelte:head>

<PageLayout>
	<PageHeader 
		title="Startup Notes"
		subtitle="Early-stage fundraising and what actually moves companies forward"
		description="I have spent most of my working life around early-stage startups and fundraising. Early on, I watched small companies get acquired by multinationals and learned how exits work. Later, I bootstrapped my own company and nearly sold it for millions, but the deal fell through because of my arrogance. It was one of the hardest lessons of my life."
	/>
	
	<p class="mb-6 md:text-xl sm:text-base text-gray-300">
		I have pitched countless times, with both successes and failures, and I also spent time inside 
		a VC firm, seeing how investors make decisions. That perspective stayed with me when I returned 
		to startup life and pitched to some of the biggest funds in the US.
	</p>
	
	<p class="mb-6 md:text-xl sm:text-base text-gray-300">
		Even with this background, there is still plenty to learn. One of my frustrations with fundraising 
		is the amount of noise and posturing. It makes it difficult to see what is really happening. My 
		aim on my website is to cut through that and focus on the fundamentals, how VCs actually work 
		and what it takes for a startup to go from zero to unicorn.
	</p>
	
	<p class="mb-6 md:text-xl sm:text-base text-gray-300">
		What it takes is not just strategy and execution. Honestly, there is a large element of luck 
		and timing. Sadly, sometimes it matters more to have gone to the right school or to know the 
		right people than to have built the better product.
	</p>
	
	<p class="mb-6 md:text-xl sm:text-base text-gray-300">
		There is also far more emotion involved than most people admit. Founders swing between blind 
		optimism and soul-crushing pressure. The stress can be relentless. Often, what matters most 
		is not being the smartest person in the room but being able to take the emotional punches and 
		keep going. Smart people can always be hired.
	</p>

	<!-- Section: Notes -->
	<section class="mb-12">
		<h3 class="text-2xl font-semibold mb-4">Notes</h3>
		<p class="mb-6 text-gray-300">
			My working thoughts on companies, markets, and opportunities. These are public to invite 
			conversation and challenge assumptions.
		</p>
		
		<div class="space-y-4">
			<ActionButton href="/startup/notes">
				View All Notes →
			</ActionButton>
		</div>
	</section>

	<!-- Placeholder for content -->
	<p class="mb-6 md:text-xl sm:text-base">
		Content coming soon. This will be a place for thoughts on what actually moves companies forward,
		capital efficiency, and the realities of early-stage investment decisions.
	</p>
</PageLayout>
