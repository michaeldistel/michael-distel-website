<script lang="ts">
	export let title: string;
	export let subtitle: string = '';
	export let description: string = '';
	export let titleClass: string = 'heading-page-title';
	export let subtitleClass: string = 'heading-page-subtitle';
	export let descriptionClass: string = 'heading-page-description';
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
