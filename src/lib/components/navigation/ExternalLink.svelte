<script lang="ts">
	export let href: string;
	export let newTab: boolean = true;
	export let className: string = 'note-link-external';
	export let rel: string = 'noopener noreferrer';

	// Auto-detect external links
	$: isExternal = href.startsWith('http') || href.startsWith('mailto:');
	$: targetAttr = newTab && isExternal ? '_blank' : undefined;
	$: relAttr = isExternal ? rel : undefined;
</script>

<a {href} class={className} target={targetAttr} rel={relAttr}>
	<slot />
</a>
