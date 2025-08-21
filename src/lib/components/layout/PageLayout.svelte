<script lang="ts">
	export let maxWidth: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' = '4xl';
	
	const maxWidthClasses = {
		'sm': 'max-w-sm',
		'md': 'max-w-md', 
		'lg': 'max-w-lg',
		'xl': 'max-w-xl',
		'2xl': 'max-w-2xl',
		'3xl': 'max-w-3xl',
		'4xl': 'max-w-4xl'
	};
</script>

<div class="container mx-auto px-4 py-8 {maxWidthClasses[maxWidth]}">
	<slot />
</div>
