<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import CardGrid from '$lib/components/content/CardGrid.svelte';
	import Card from '$lib/components/content/Card.svelte';
	import ActionButton from '$lib/components/navigation/ActionButton.svelte';
</script>

<PageLayout>
	<PageHeader 
		title="Slow Adventures"
		subtitle="Notes on Travel, Persistence, and Small Daily Progress"
	/>

	<!-- Adventures Grid -->
	<CardGrid columns={2} className="mb-8">
		<!-- Kicking Miles Japan 2017 -->
		<Card 
			title="Kicking Miles Japan 2017"
			badge="March 1 - April 9, 2017 • 40 days • 1,800km"
			titleColor="text-blue-400"
		>
			<p class="text-sm text-gray-300 mb-4">
				Four friends, kick-scooters, and 35 cities from Fukuoka to Hakodate. A lesson in persistence
				and the value of small daily progress.
			</p>
			<div class="flex justify-between items-center">
				<ActionButton href="/adventures/kicking-miles-japan-2017" size="sm">
					Read the full journey →
				</ActionButton>
				<div class="text-xs text-gray-500">Interactive map • Daily logs • Equipment details</div>
			</div>
		</Card>

		<!-- Placeholder for Next Adventure -->
		<Card 
			title="Next Adventure"
			badge="TBD • Planning stage"
			variant="placeholder"
			titleColor="text-gray-400"
		>
			<p class="text-sm text-gray-400 mb-4">
				The next slow adventure is in the planning stages. Each journey builds on lessons from the
				previous ones.
			</p>
			<div class="text-xs text-gray-500">Coming when the timing is right...</div>
		</Card>
	</CardGrid>

	<!-- Adventure Categories -->
	<div class="mb-8">
		<h3 class="text-lg font-semibold mb-4 text-gray-300">Adventure Types</h3>
		<CardGrid columns={3}>
			<Card variant="category" title="Human-Powered" titleColor="text-blue-400">
				<div class="text-2xl mb-2">🛴</div>
				<p class="text-xs text-gray-400">Kick-scooters, walking, cycling</p>
				<div class="text-xs text-blue-400 mt-2">1 completed</div>
			</Card>

			<Card variant="category" title="Mountain & Remote" titleColor="text-gray-400" className="opacity-60">
				<div class="text-2xl mb-2">🏔️</div>
				<p class="text-xs text-gray-400">High altitude, wilderness</p>
				<div class="text-xs text-gray-500 mt-2">Future category</div>
			</Card>

			<Card variant="category" title="Water & Islands" titleColor="text-gray-400" className="opacity-60">
				<div class="text-2xl mb-2">🌊</div>
				<p class="text-xs text-gray-400">Coastal routes, island hopping</p>
				<div class="text-xs text-gray-500 mt-2">Future category</div>
			</Card>
		</CardGrid>
	</div>

	<!-- Adventure Philosophy -->
	<div class="bg-slate-800 p-6 rounded-lg">
		<h3 class="text-lg font-semibold mb-3 text-gray-300">On Slow Travel</h3>
		<p class="text-sm text-gray-300 mb-3">
			These are not typical travel stories. They are about choosing the slow path, finding rhythm in
			daily progress, and discovering what becomes possible when you break impossible-seeming goals
			into sustainable daily segments.
		</p>
		<p class="text-xs text-gray-400">
			Each adventure includes detailed daily logs, route information, equipment notes, and lessons
			learned about persistence and planning.
		</p>
	</div>
</PageLayout>
