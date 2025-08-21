<script lang="ts">
	export let value: string | number;
	export let label: string;
	export let trend: string = '';
	export let trendColor: 'green' | 'red' | 'yellow' = 'green';
</script>

<div class="bg-slate-800 p-4 rounded-lg border border-slate-700">
	<div class="text-2xl font-bold text-blue-400">{value}</div>
	<div class="text-sm text-gray-300">{label}</div>
	{#if trend}
		<div class="text-xs mt-1 text-{trendColor}-400">
			{#if trendColor === 'green'}↗{:else if trendColor === 'red'}↘{:else}→{/if} {trend}
		</div>
	{/if}
</div>
