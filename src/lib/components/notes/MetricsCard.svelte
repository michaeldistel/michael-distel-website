<script lang="ts">
	export let value: string | number;
	export let label: string;
	export let trend: string = '';
	export let trendColor: 'green' | 'red' | 'yellow' = 'green';
	export let className: string = '';

	$: cardClasses = `metric-card ${className}`;
	$: trendColorClass = `text-${trendColor}-400`;
</script>

<div class={cardClasses}>
	<div class="text-2xl font-bold mb-1">{value}</div>
	<div class="note-text-caption">{label}</div>
	{#if trend}
		<div class="note-text-label mt-1 {trendColorClass}">
			{trend}
		</div>
	{/if}
</div>
