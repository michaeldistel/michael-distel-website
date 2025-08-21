<script lang="ts">
	export let href: string;
	export let text: string;
	export let linkClass: string = 'font-medium text-blue-600 dark:text-blue-500 hover:underline mb-2 inline-block';
</script>

<div class="mb-6">
	<a {href} class={linkClass}>
		← {text}
	</a>
</div>
