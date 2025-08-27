<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';
</script>

<PageLayout maxWidth="3xl">
	<PageHeader title="Research Bot Information" />

	<section class="note-space-xl">
		<h2 class="heading-section">About the Bot</h2>
		<p class="mb-4">
			The MichaelDistelResearchBot (version 1.0) is a web crawler that helps gather information for
			research purposes. This bot operates under the following user agent string:
		</p>
		<h3 class="heading-subsection">Allow with Restrictions</h3>
		<pre
			class="note-bg-surface p-4 rounded-lg mb-4">MichaelDistelResearchBot/1.0 (+https://michaeldistel.com/bot-info)</pre>
	</section>

	<section class="note-space-xl">
		<h2 class="heading-section">Purpose</h2>
		<p class="mb-4">
			MichaelDistelResearchBot/1.0 is a small-scale, academic research crawler operated by Michael
			Distel. The bot's mission is to gather publicly available, non-personal data from the web to
			support a research project on economics within the venture capital (VC) ecosystem.
		</p>

		<h3 class="heading-subsection">Research Focus Areas</h3>
		<ul class="list-disc pl-6 mb-4 space-y-2">
			<li>Identifying who participates in the VC space</li>
			<li>Understanding the primary areas of focus across different VC firms</li>
			<li>Estimating the number of active VC firms globally</li>
			<li>Tracking general metrics such as investment trends, sector focus, and fund sizes</li>
		</ul>

		<h3 class="heading-subsection">Ethical Framework</h3>
		<p class="mb-4">The bot operates within a strictly ethical framework that includes:</p>
		<ul class="list-disc pl-6 mb-4 space-y-2">
			<li>Respecting robots.txt directives</li>
			<li>Avoiding login-restricted or paywalled content</li>
			<li>Ensuring low impact on website performance through rate limiting</li>
			<li>Collecting only publicly available, non-personal data</li>
		</ul>
	</section>

	<section class="note-space-xl">
		<h2 class="heading-section">Robots.txt Configuration</h2>
		<p class="mb-4">
			Website owners can control this bot's access using their robots.txt file. Here are example
			configurations:
		</p>

		<h3 class="heading-subsection">Allow with Restrictions</h3>
		<pre class="note-bg-surface p-4 rounded-lg mb-4">
User-agent: MichaelDistelResearchBot
Disallow: /private-data/
Allow: /</pre>

		<h3 class="heading-subsection">Block Completely</h3>
		<pre class="note-bg-surface p-4 rounded-lg mb-4">
User-agent: MichaelDistelResearchBot
Disallow: /</pre>
	</section>

	<section class="note-space-xl">
		<h2 class="heading-section">Privacy & Opt-Out</h2>
		<p class="mb-4">
			MichaelDistelResearchBot only collects publicly available data related to the venture capital
			industry.
		</p>

		<p class="mb-4">
			If you would like to request exclusion of your website from this research, you can:
		</p>
		<ul class="list-disc pl-6 mb-4 space-y-2">
			<li>
				Add a Disallow rule for MichaelDistelResearchBot in your robots.txt (see configuration
				above), or
			</li>
			<li>
				Contact Michael Distel directly at <ExternalLink href="mailto:bot@distel.me"
					>bot@distel.me</ExternalLink
				> with your request.
			</li>
		</ul>

		<p class="mb-4">All opt-out requests will be respected and promptly acted upon.</p>
	</section>

	<section class="note-space-xl">
		<h2 class="heading-section">Contact Information</h2>
		<p>
			If you have any questions or concerns about this bot's behavior, please contact me through:
			<ExternalLink href="mailto:bot@distel.me">bot@distel.me</ExternalLink>
		</p>
	</section>
</PageLayout>
