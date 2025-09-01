<script lang="ts">
	export let items: Array<{ label: string; href?: string }> = [];
</script>

{#if items.length > 1}
	<nav class="mb-6" aria-label="Breadcrumb">
		<ol class="flex items-center space-x-2 text-sm note-text-caption-muted">
			{#each items as item, index}
				<li class="flex items-center">
					{#if item.href && index < items.length - 1}
						<a href={item.href} class="note-link-primary text-sm">
							{item.label}
						</a>
					{:else}
						<span class="note-text-caption">{item.label}</span>
					{/if}
					
					{#if index < items.length - 1}
						<span class="mx-2 note-text-label-muted">→</span>
					{/if}
				</li>
			{/each}
		</ol>
		
		<!-- Structured Data for Breadcrumbs -->
		<script type="application/ld+json">
			{
				"@context": "https://schema.org",
				"@type": "BreadcrumbList",
				"itemListElement": [
					{#each items as item, index}
						{
							"@type": "ListItem",
							"position": {index + 1},
							"name": "{item.label}",
							{#if item.href}"item": "https://michaeldistel.com{item.href}"{/if}
						}{#if index < items.length - 1},{/if}
					{/each}
				]
			}
		</script>
	</nav>
{/if}
