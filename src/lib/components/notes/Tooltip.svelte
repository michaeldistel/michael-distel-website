<script lang="ts">
	export let text: string;
	export let tooltip: string;
	export let className: string = '';
	export let position: 'top' | 'bottom' = 'top';

	$: positionClasses =
		position === 'bottom'
			? 'top-full left-1/2 transform -translate-x-1/2 mt-2'
			: 'bottom-full left-1/2 transform -translate-x-1/2 note-space-xs';
</script>

<span class="relative group {className}">
	<span class="underline decoration-dotted decoration-blue-400 cursor-help">{text}</span>
	<span
		class="absolute {positionClasses} px-3 py-2 note-text-label note-bg-surface-elevated text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10"
	>
		{tooltip}
	</span>
</span>
