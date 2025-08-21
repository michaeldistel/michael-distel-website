<script lang="ts">
	export let title: string;
	export let subtitle: string = '';
	export let description: string = '';
	export let titleClass: string = 'text-3xl sm:text-4xl font-bold mb-4';
	export let subtitleClass: string = 'text-xl sm:text-2xl font-semibold mb-6 text-gray-300';
	export let descriptionClass: string = 'mb-6 md:text-xl sm:text-base text-gray-300';
</script>

<!-- Main Heading -->
<h1 class={titleClass}>{title}</h1>

{#if subtitle}
	<h2 class={subtitleClass}>{subtitle}</h2>
{/if}

{#if description}
	<p class={descriptionClass}>{description}</p>
{/if}

<!-- Additional content slot -->
<slot />
