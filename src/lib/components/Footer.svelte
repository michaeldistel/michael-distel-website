<script>
	import { BUILD_COMMIT } from '$lib/build-info';
</script>

<footer class="bg-gray-900 text-gray-400 py-8 mt-auto">
	<div class="container mx-auto px-4">
		<div class="flex flex-col items-center">
			<div>
				<p class="note-text-label-muted">Build: {BUILD_COMMIT}</p>
			</div>
		</div>
	</div>
</footer>
