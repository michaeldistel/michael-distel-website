<script lang="ts">
	export let href: string;
	export let variant: 'primary' | 'secondary' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let className: string = '';
	
	$: variantClasses = variant === 'primary' 
		? 'bg-blue-600 text-white hover:bg-blue-700'
		: 'bg-slate-700 text-gray-200 hover:bg-slate-600';
		
	$: sizeClasses = size === 'sm' 
		? 'px-3 py-2 text-sm'
		: size === 'lg'
		? 'px-8 py-3 text-lg'
		: 'px-6 py-3';
		
	$: buttonClasses = `inline-block ${sizeClasses} ${variantClasses} rounded font-medium transition-colors ${className}`;
</script>

<a {href} class={buttonClasses}>
	<slot />
</a>
