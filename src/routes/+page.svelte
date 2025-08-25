<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import CardGrid from '$lib/components/content/CardGrid.svelte';
	import Card from '$lib/components/content/Card.svelte';
	import ActionButton from '$lib/components/navigation/ActionButton.svelte';
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';
</script>

<PageLayout>
	<PageHeader
		title="Notes and experiments"
		description="This website is mainly for me, but of course feel free to look around. It is a place to think through ideas and keep track of what I am learning. I am curious about early-stage investing, Web3 infrastructure, and industrial automation, themes that keep reappearing as I try to understand what actually works."
	/>

	<!-- Introduction continuation -->
	<p class="mb-4 md:text-xl sm:text-base text-gray-300">
		I have worked on a few companies, helped with fundraising, and built systems where reliability
		matters. These experiences taught me some practical lessons about timing, capital efficiency,
		and what tends to break when systems scale. I am still working out how far those lessons carry
		beyond the specific cases I have seen.
	</p>
	<p class="md:text-xl sm:text-base text-gray-300 mb-8">
		The notes here are part of that process. They reflect ongoing learning rather than fixed
		conclusions. Writing helps me clarify my thinking, and making it public adds just enough
		pressure to be more precise about ideas that might otherwise stay half-formed.
	</p>

	<!-- Topic Cards -->
	<CardGrid columns={3} className="mb-8">
		<Card
			title="Startup & Fundraising"
			description="Early-stage fundraising, founder experiences, capital efficiency. Based on experience raising funds and observing the startup ecosystem."
			titleColor="text-blue-400"
		>
			<ActionButton href="/startup" size="sm">Read notes →</ActionButton>
		</Card>

		<Card
			title="Web3 Infrastructure"
			description="Testing frameworks, stablecoins as practical rails, development workflows. Focused on what actually works over hype."
			titleColor="text-green-400"
		>
			<ActionButton href="/web3" size="sm">Explore topics →</ActionButton>
		</Card>

		<Card title="Industrial Automation" titleColor="text-orange-400">
			<p class="text-sm text-gray-300 mb-3">
				Small workflow improvements, VS Code extensions, testing patterns. Including work on
				<ExternalLink href="https://controlforge.dev">controlforge.dev</ExternalLink>.
			</p>
			<ActionButton href="/industrial" size="sm">View projects →</ActionButton>
		</Card>
	</CardGrid>
</PageLayout>
