<script lang="ts">
	export let sectionId: string;
	export let title: string;
	export let isCollapsed: boolean = false;
	export let onToggle: (sectionId: string) => void;
</script>

<section id={sectionId}>
	<div class="flex items-center justify-between mb-4">
		<h2 class="text-2xl font-bold">{title}</h2>
		<button 
			class="no-print text-gray-400 hover:text-white transition-colors"
			on:click={() => onToggle(sectionId)}
			title="Toggle section"
		>
			<svg class="w-5 h-5 transition-transform {isCollapsed ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
			</svg>
		</button>
	</div>
	{#if !isCollapsed}
		<div class="section-content">
			<slot />
		</div>
	{/if}
</section>
