<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import CardGrid from '$lib/components/content/CardGrid.svelte';
	import Card from '$lib/components/content/Card.svelte';
	import ActionButton from '$lib/components/navigation/ActionButton.svelte';
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';
</script>

<svelte:head>
	<!-- Structured Data for Website -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "Michael Distel",
			"url": "https://michaeldistel.com",
			"description": "Personal website for exploring ideas about startups, blockchain development, and industrial automation",
			"author": {
				"@type": "Person",
				"name": "Michael Distel"
			},
			"mainEntity": {
				"@type": "Blog",
				"name": "Michael Distel's Notes",
				"description": "Notes and experiments on startups, blockchain testing, and industrial automation"
			}
		}
	</script>
</svelte:head>

<PageLayout>
	<PageHeader
		title="Notes and experiments"
		subtitle="This website is mainly for me, but of course feel free to look around. It is a place to think through ideas and keep track of what I am learning. I am curious about early-stage investing, blockchain infrastructure, and industrial automation, themes that keep reappearing as I try to understand what actually works."
	/>

	<!-- Introduction continuation -->
	<p class="mb-4 note-text-body-lg">
		I have worked on a few companies, helped with <a href="/startup" class="note-link-primary"
			>fundraising</a
		>, and built systems where reliability matters. These experiences taught me some practical
		lessons about timing, capital efficiency, and what tends to break when systems scale. I am still
		working out how far those lessons carry beyond the specific cases I have seen.
	</p>
	<p class="note-text-body-lg mb-8">
		The <a href="/startup/notes" class="note-link-primary">notes here</a> are part of that process. They
		reflect ongoing learning rather than fixed conclusions. Writing helps me clarify my thinking, and
		making it public adds just enough pressure to be more precise about ideas that might otherwise stay
		half-formed.
	</p>

	<!-- Topic Cards -->
	<CardGrid columns={3} className="mb-8">
		<Card
			title="Startup & Fundraising"
			subtitle="Early-stage fundraising, founder experiences, capital efficiency. Based on experience raising funds and observing the startup ecosystem."
			titleColor="note-color-primary"
		>
			<ActionButton href="/startup" size="sm">Read notes →</ActionButton>
		</Card>

		<Card
			title="Adventures"
			subtitle="Slow travel, persistence, and small daily progress. Including Kicking Miles journeys across Japan and Korea."
			titleColor="text-green-400"
		>
			<ActionButton href="/adventures" size="sm">Read adventures →</ActionButton>
		</Card>

		<Card title="Industrial Automation" titleColor="text-orange-400">
			<p class="note-text-caption mb-3">
				Small workflow improvements, VS Code extensions, testing patterns. Including work on
				<ExternalLink href="https://controlforge.dev">controlforge.dev</ExternalLink>.
			</p>
			<ActionButton href="/industrial" size="sm">View projects →</ActionButton>
		</Card>
	</CardGrid>
</PageLayout>
