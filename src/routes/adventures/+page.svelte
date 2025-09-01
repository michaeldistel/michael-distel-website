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
				<div class="note-text-label-muted">Interactive map • Daily logs • Equipment details</div>
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

	<!-- Adventure Categories -->
	<div class="note-space-xl">
		<h3 class="heading-subheading heading-gray">Adventure Types</h3>
		<CardGrid columns={3}>
			<Card variant="category" title="Human-Powered" titleColor="note-color-primary">
				<div class="text-2xl note-space-xs">🛴</div>
				<p class="note-text-label">Kick-scooters, walking, cycling</p>
				<div class="note-text-label note-color-primary mt-2">1 completed</div>
			</Card>

			<Card
				variant="category"
				title="Mountain & Remote"
				titleColor="text-gray-400"
				className="opacity-60"
			>
				<div class="text-2xl note-space-xs">🏔️</div>
				<p class="note-text-label">High altitude, wilderness</p>
				<div class="note-text-label-muted mt-2">Future category</div>
			</Card>

			<Card
				variant="category"
				title="Water & Islands"
				titleColor="text-gray-400"
				className="opacity-60"
			>
				<div class="text-2xl note-space-xs">🌊</div>
				<p class="note-text-label">Coastal routes, island hopping</p>
				<div class="note-text-label-muted mt-2">Future category</div>
			</Card>
		</CardGrid>
	</div>

	<!-- Adventure Philosophy -->
	<div class="note-bg-surface p-6 rounded-lg">
		<h3 class="heading-subheading heading-gray">On Slow Travel</h3>
		<p class="note-text-caption mb-3">
			These are not typical travel stories. They are about choosing the slow path, finding rhythm in
			daily progress, and discovering what becomes possible when you break impossible-seeming goals
			into sustainable daily segments.
		</p>
		<p class="note-text-label">
			Each adventure includes detailed daily logs, route information, equipment notes, and lessons
			learned about persistence and planning.
		</p>
	</div>
</PageLayout>
