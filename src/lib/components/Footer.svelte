<script>
	import { BUILD_COMMIT } from '$lib/build-info';
</script>

<footer class="bg-gray-900 text-gray-400 py-8 mt-auto">
	<div class="container mx-auto px-4">
		<div class="flex flex-col items-center">
			<div class="flex flex-wrap justify-center gap-4 mb-2">
				<a href="/" class="text-[rgb(96,165,250)] hover:text-[rgb(96,165,250)]/80 transition-colors"
					>Home</a
				>
				<a
					href="/about"
					class="text-[rgb(96,165,250)] hover:text-[rgb(96,165,250)]/80 transition-colors">About</a
				>
				<a
					href="/adventures"
					class="text-[rgb(96,165,250)] hover:text-[rgb(96,165,250)]/80 transition-colors"
					>Adventures</a
				>
				<a
					href="/blog"
					class="text-[rgb(96,165,250)] hover:text-[rgb(96,165,250)]/80 transition-colors">Blog</a
				>
				<a
					href="/contact"
					class="text-[rgb(96,165,250)] hover:text-[rgb(96,165,250)]/80 transition-colors"
					>Contact</a
				>
				<a
					href="/privacy"
					class="text-[rgb(96,165,250)] hover:text-[rgb(96,165,250)]/80 transition-colors"
					>Privacy & Cookie Policy</a
				>
			</div>
			<div>
				<p class="text-xs text-gray-500">Build: {BUILD_COMMIT}</p>
			</div>
		</div>
	</div>
</footer>
