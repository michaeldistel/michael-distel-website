<script lang="ts">
	export let text: string;
	export let tooltip: string;
</script>

<span class="relative group">
	<span class="underline decoration-dotted decoration-blue-400 cursor-help">{text}</span>
	<span class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs bg-slate-700 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
		{tooltip}
	</span>
</span>
