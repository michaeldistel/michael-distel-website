<script lang="ts">
	export let title: string;
	export let subtitle: string = '';
	export let href: string = '';
	export let badge: string = '';
	export let variant: 'default' | 'placeholder' | 'category' = 'default';
	export let titleColor: string = 'text-blue-400';
	export let hoverEffect: boolean = true;
	export let newTab: boolean = false;
	export let className: string = '';

	$: baseClasses =
		variant === 'placeholder'
			? 'note-card-md border-2 border-dashed border-slate-600'
			: variant === 'category'
				? 'note-card-sm text-center'
				: 'note-card-md';

	$: hoverClasses =
		hoverEffect && variant !== 'placeholder' ? 'hover:bg-slate-750 transition-colors' : '';

	$: linkTarget = newTab ? '_blank' : undefined;
	$: linkRel = newTab ? 'noopener noreferrer' : undefined;

	$: cardClasses = `${baseClasses} ${hoverClasses} ${className}`;
</script>

{#if href}
	<a {href} class={cardClasses} target={linkTarget} rel={linkRel}>
		{#if badge}
			<div class="note-text-caption-muted note-space-sm">{badge}</div>
		{/if}
		<h3 class="heading-card {titleColor}">{title}</h3>
		{#if subtitle}
			<p class="note-text-caption note-space-sm">{subtitle}</p>
		{/if}
		<slot />
	</a>
{:else}
	<div class={cardClasses}>
		{#if badge}
			<div class="note-text-caption-muted note-space-sm">{badge}</div>
		{/if}
		<h3 class="heading-card {titleColor}">{title}</h3>
		{#if subtitle}
			<p class="note-text-caption note-space-sm">{subtitle}</p>
		{/if}
		<slot />
	</div>
{/if}
