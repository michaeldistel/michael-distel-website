<script lang="ts">
	export let href: string;
	export let newTab: boolean = true;
	export let linkClass: string = 'font-medium text-blue-600 dark:text-blue-500 hover:underline';
	export let rel: string = 'noopener noreferrer';
	
	// Auto-detect external links
	$: isExternal = href.startsWith('http') || href.startsWith('mailto:');
	$: targetAttr = (newTab && isExternal) ? '_blank' : undefined;
	$: relAttr = (isExternal) ? rel : undefined;
</script>

<a 
	{href} 
	class={linkClass}
	target={targetAttr}
	rel={relAttr}
>
	<slot />
</a>
