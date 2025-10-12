<script lang="ts">
	export let href: string;
	export let variant: 'primary' | 'secondary' | 'link' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let className: string = '';
	export let newTab: boolean = false;

	// Base classes that apply to all buttons
	const baseClasses = 'inline-block font-medium transition-all duration-200 focus:outline-none';

	// Variant-specific styling
	$: variantClasses = {
		primary:
			'bg-blue-500 hover:bg-blue-400 focus:ring-2 focus:ring-blue-300 rounded-lg border border-transparent font-semibold',
		secondary:
			'note-bg-surface-elevated text-gray-200 hover:bg-slate-600 focus:ring-2 focus:ring-slate-400 rounded-lg border border-transparent font-semibold',
		link: 'text-blue-400 hover:text-blue-300 hover:underline underline-offset-4 decoration-2'
	}[variant];

	// Size-specific styling
	$: sizeClasses = {
		sm: variant === 'link' ? 'text-sm' : 'px-4 py-2 text-sm',
		md: variant === 'link' ? 'text-base' : 'px-6 py-3 text-base',
		lg: variant === 'link' ? 'text-lg' : 'px-8 py-3 text-lg'
	}[size];

	// Combine all classes
	$: allClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${variant === 'primary' ? 'primary-button' : ''} ${className}`;

	$: linkTarget = newTab ? '_blank' : undefined;
	$: linkRel = newTab ? 'noopener noreferrer' : undefined;
</script>

<a {href} class={allClasses} target={linkTarget} rel={linkRel}>
	<slot />
</a>

<style>
	/* Override global link styles specifically for primary buttons */
	:global(a.primary-button) {
		color: white !important;
		text-decoration: none !important;
	}

	:global(a.primary-button:hover) {
		color: white !important;
		text-decoration: none !important;
	}
</style>
