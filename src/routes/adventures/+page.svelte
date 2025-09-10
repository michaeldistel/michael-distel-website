<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import CardGrid from '$lib/components/content/CardGrid.svelte';
	import Card from '$lib/components/content/Card.svelte';
	import ActionButton from '$lib/components/navigation/ActionButton.svelte';
</script>

<svelte:head>
	<title>Adventures | Michael Distel</title>
	<meta
		name="description"
		content="Adventure stories and lessons in persistence, including the 1,800km kick-scooter journey across Japan. Notes on slow travel, daily progress, and what you learn when you take the long way."
	/>
</svelte:head>

<PageLayout>
	<PageHeader
		title="Slow Adventures"
		subtitle="Notes on Travel, Persistence, and Small Daily Progress"
	/>

	<!-- Adventures Grid -->
	<CardGrid columns={2} className="note-space-xl">
		<!-- Kicking Miles Japan 2017 -->
		<Card
			title="Kicking Miles Japan 2017"
			badge="March 1 - April 9, 2017 • 40 days • 1,800km"
			titleColor="note-color-primary"
		>
			<p class="note-text-caption note-space-md">
				Four friends, kick-scooters, and 35 cities from Fukuoka to Hakodate. A lesson in persistence
				and the value of small daily progress.
			</p>
			<div class="flex justify-between items-center">
				<ActionButton href="/adventures/kicking-miles-japan-2017" size="sm">
					Read the full journey →
				</ActionButton>
			</div>
		</Card>

		<!-- Placeholder for Next Adventure -->
		<Card
			title="Next Adventure"
			badge="TBD • Planning stage"
			variant="placeholder"
			titleColor="text-gray-400"
		>
			<p class="note-text-caption-muted note-space-md">
				The next slow adventure is in the planning stages. Each journey builds on lessons from the
				previous ones.
			</p>
			<div class="note-text-label-muted">Coming when the timing is right...</div>
		</Card>
	</CardGrid>
</PageLayout>
