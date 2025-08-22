<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';
</script>

<PageLayout>
	<PageHeader 
		title="Contact"
		description="If you want to get in touch, these are the best ways to reach me. I try to respond to emails within a reasonable time, though I am not always quick about it."
	/>

	<!-- Contact Details -->
	<div class="space-y-4">
		<div class="mb-4">
			<h3 class="heading-contact">Email</h3>
			<ExternalLink 
				href="mailto:michael@distel.me"
				linkClass="font-medium text-blue-600 dark:text-blue-500 hover:underline md:text-xl sm:text-base"
			>
				michael@distel.me
			</ExternalLink>
		</div>

		<div class="mb-4">
			<h3 class="heading-contact">LinkedIn</h3>
			<ExternalLink 
				href="https://www.linkedin.com/in/michaeldistel/"
				linkClass="font-medium text-blue-600 dark:text-blue-500 hover:underline md:text-xl sm:text-base"
			>
				linkedin.com/in/michaeldistel/
			</ExternalLink>
		</div>

		<div class="mb-4">
			<h3 class="heading-contact">Telegram</h3>
			<ExternalLink 
				href="https://t.me/michaeldistel"
				linkClass="font-medium text-blue-600 dark:text-blue-500 hover:underline md:text-xl sm:text-base"
			>
				@michaeldistel
			</ExternalLink>
		</div>
	</div>
</PageLayout>
