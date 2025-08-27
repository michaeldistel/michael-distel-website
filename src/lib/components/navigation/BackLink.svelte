<script lang="ts">
	export let href: string;
	export let text: string;
	export let className: string = 'font-medium note-link-primary note-space-xs inline-block';
</script>

<div class="note-space-lg">
	<a {href} class={className}>
		← {text}
	</a>
</div>
