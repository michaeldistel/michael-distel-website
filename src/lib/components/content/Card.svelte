<script lang="ts">
	export let title: string;
	export let description: string = '';
	export let href: string = '';
	export let badge: string = '';
	export let variant: 'default' | 'placeholder' | 'category' = 'default';
	export let titleColor: string = 'text-blue-400';
	export let hoverEffect: boolean = true;
	export let className: string = '';
	
	$: baseClasses = variant === 'placeholder' 
		? 'bg-slate-800 p-6 rounded-lg border-2 border-dashed border-slate-600'
		: variant === 'category'
		? 'bg-slate-800 p-4 rounded-lg text-center'
		: 'bg-slate-800 p-6 rounded-lg';
		
	$: hoverClasses = hoverEffect && variant !== 'placeholder' 
		? 'hover:bg-slate-750 transition-colors' 
		: '';
		
	$: cardClasses = `${baseClasses} ${hoverClasses} ${className}`;
</script>

{#if href}
	<a {href} class={cardClasses}>
		{#if badge}
			<div class="text-sm text-gray-400 mb-3">{badge}</div>
		{/if}
		<h3 class="text-lg font-semibold mb-2 {titleColor}">{title}</h3>
		{#if description}
			<p class="text-sm text-gray-300 mb-3">{description}</p>
		{/if}
		<slot />
	</a>
{:else}
	<div class={cardClasses}>
		{#if badge}
			<div class="text-sm text-gray-400 mb-3">{badge}</div>
		{/if}
		<h3 class="text-lg font-semibold mb-2 {titleColor}">{title}</h3>
		{#if description}
			<p class="text-sm text-gray-300 mb-3">{description}</p>
		{/if}
		<slot />
	</div>
{/if}
