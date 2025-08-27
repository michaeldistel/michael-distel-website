<script lang="ts">
	export let columns: 1 | 2 | 3 | 4 = 2;
	export let gap: 'sm' | 'md' | 'lg' = 'md';
	export let className: string = '';

	const columnClasses = {
		1: 'grid-cols-1',
		2: 'md:grid-cols-2',
		3: 'md:grid-cols-3',
		4: 'md:grid-cols-2 lg:grid-cols-4'
	};

	const gapClasses = {
		sm: 'note-gap-md',
		md: 'note-gap-lg', 
		lg: 'note-gap-xl'
	};
</script>

<div class="grid {columnClasses[columns]} {gapClasses[gap]} {className}">
	<slot />
</div>
