<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';
</script>

<svelte:head>
	<title>About Michael Distel</title>
	<meta
		name="description"
		content="Personal notes and reflections from someone exploring ideas about startups, industrial automation, and Web3 through direct experience and ongoing learning."
	/>
	
	<!-- Structured Data for Person -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Michael Distel",
			"url": "https://michaeldistel.com",
			"sameAs": [
				"https://www.linkedin.com/in/michaeldistel/",
				"https://t.me/michaeldistel"
			],
			"jobTitle": "Entrepreneur",
			"worksFor": {
				"@type": "Organization",
				"name": "Independent"
			},
			"knowsAbout": [
				"Startup Fundraising",
				"Web3 Infrastructure", 
				"Industrial Automation",
				"Early Stage Investing"
			],
			"alumniOf": {
				"@type": "Organization",
				"name": "Cocoon Capital"
			},
			"address": {
				"@type": "PostalAddress",
				"addressCountry": "SG"
			}
		}
	</script>
</svelte:head>

<PageLayout>
	<PageHeader
		title="Michael Distel"
		description="Writing about yourself feels strange. There is something inherently awkward about summarising a life in a few paragraphs, deciding which parts matter and which to leave out. This page is mainly for me to reflect and think about my journey so far, to see the connections between different chapters and notice what patterns emerge. But if any of it is useful or interesting to you, that is a welcome bonus. It is not complete, and it will probably change, but it is honest enough for now."
	/>

	<!-- Section: A Path to Singapore -->
	<h3 class="heading-subheading">A Path to Singapore</h3>
	<p class="mb-6 md:text-xl sm:text-base">
		I have been calling Singapore home since 2005. When I first arrived, I had little more than a
		few dreams and a backpack, no job, just the hope of building something here. Not long after
		settling in, I found work at Citect (2006–2008) and then
		<ExternalLink href="https://www.se.com">Schneider Electric</ExternalLink>
		(2008–2011), writing software for power plants and water treatment facilities. Schneider acquired
		Citect in 2008 for around A$287 million. The work was not as flashy as Web3 or AI, but I learned
		to appreciate the precision required when things absolutely cannot fail. Eventually, though, the
		slower pace did not suit me, and I started looking for something different.
	</p>

	<!-- Section: Early Ventures -->
	<h3 class="heading-subheading">Early Ventures</h3>
	<p class="mb-6 md:text-xl sm:text-base">
		In 2011, I co-founded Feel Beautiful, importing skincare products across Southeast Asia. It
		sounds simple but taught me about logistics, compliance, and the daily reality of running a
		business. The company continues at
		<ExternalLink href="https://feelbeautiful.com.sg">feelbeautiful.com.sg</ExternalLink>. We grew
		to around twenty people across multiple countries. I learned more about finance and operations
		than I expected. After that, I did freelance consulting (2017–2021) and worked as an interim
		CTO, helping startups with technology questions. This was also when I first encountered Web3,
		building a Bitcoin exchange for a private bank in Australia and working on other crypto
		projects.
	</p>

	<!-- Section: Learning about VC -->
	<h3 class="heading-subheading">Learning about VC</h3>
	<p class="mb-6 md:text-xl sm:text-base">
		In 2018, I became CTO at
		<ExternalLink href="https://foodrazor.com">FoodRazor</ExternalLink>
		until 2020, working on restaurant back-end systems. The company raised S$900k in 2021 led by
		<ExternalLink href="https://cocooncap.com">Cocoon Capital</ExternalLink>. That fundraising
		process gave me my first real look at how investors think. FoodRazor was acquired by
		<ExternalLink href="https://orderez.co">OrderEZ</ExternalLink> in February 2023. I had the opportunity
		to join Cocoon Capital as an Investment Associate (2021–2024), the same firm that had led FoodRazor's
		investment. This let me sit on the other side of the table and learn about timing, founder-market
		fit, and how much of early-stage investing comes down to signals versus stories.
	</p>

	<!-- Section: Recent Work and What's Next -->
	<h3 class="heading-subheading">What's Next</h3>
	<p class="mb-6 md:text-xl sm:text-base">
		I spent 2024 and early 2025 working at
		<ExternalLink href="https://buildbear.io">BuildBear Labs</ExternalLink>
		on Web3 testing infrastructure, helping developers test their applications against blockchain networks
		without the usual complexity. At the moment, I do not have anything solid planned and am hunting
		around for the next thing to do. I am curious about what problems are worth solving and where I might
		be useful.
	</p>
</PageLayout>
