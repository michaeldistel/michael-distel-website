<script lang="ts">
	let printMode = false;
	
	function handlePrint() {
		printMode = true;
		// Small delay to ensure styles are applied before printing
		setTimeout(() => {
			window.print();
			printMode = false;
		}, 100);
	}
</script>

<svelte:head>
	<title>Sample Investment Memo | Michael Distel</title>
	<meta name="description" content="An example exploration of a hypothetical startup opportunity, demonstrating the memo format and structure." />
	<style>
		@media print {
			.no-print {
				display: none !important;
			}
			body {
				font-size: 12pt;
				line-height: 1.5;
				color: black !important;
				background: white !important;
			}
			.container {
				max-width: none !important;
				padding: 0 !important;
				margin: 0 !important;
			}
			h1, h2, h3, h4, h5, h6, p, li {
				color: black !important;
			}
		}
	</style>
</svelte:head>

<div class="container mx-auto px-4 py-8 max-w-4xl" class:print-optimized={printMode}>
	<!-- Header with controls -->
	<div class="no-print mb-6 flex justify-between items-start">
		<div>
			<a href="/vc/memos" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mb-2 inline-block">
				← Back to Investment Memos
			</a>
		</div>
		<div class="flex gap-3">
			<button 
				on:click={handlePrint}
				class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
			>
				Print / Save as PDF
			</button>
		</div>
	</div>

	<!-- Memo Header -->
	<header class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold mb-2">Sample Investment Memo</h1>
		<div class="text-gray-400 mb-4">
			<span>Investment Exploration Memo</span> • 
			<span>21 August 2025</span> • 
			<span>by Michael Distel</span>
		</div>
		<p class="text-xl text-gray-300 font-medium">
			An example exploration of a hypothetical startup opportunity, demonstrating the memo format and structure.
		</p>
	</header>

	<!-- Memo Content -->
	<article class="prose prose-invert prose-lg max-w-none space-y-6">
		<section>
			<h2 class="text-2xl font-bold mb-4">Executive Summary</h2>
			<p class="mb-4">
				This is a sample memo demonstrating the format and structure for investment exploration memos. 
				In practice, this would contain detailed analysis of a specific company or market opportunity, 
				written as transparent working thoughts to invite conversation and challenge assumptions.
			</p>
		</section>

		<section>
			<h2 class="text-2xl font-bold mb-4">Market Opportunity</h2>
			<p class="mb-4">
				The market opportunity section would describe the size, dynamics, and timing considerations for 
				the space this company operates in. This includes competitive landscape analysis and regulatory 
				environment assessment.
			</p>
			<p class="mb-4"><strong>Key market dynamics:</strong></p>
			<ul class="list-disc ml-6 space-y-2 mb-4">
				<li>Market size and growth rates with specific data points</li>
				<li>Timing considerations - why now?</li>
				<li>Competitive landscape and market structure</li>
				<li>Regulatory environment impacts</li>
			</ul>
		</section>

		<section>
			<h2 class="text-2xl font-bold mb-4">Company Analysis</h2>
			<p class="mb-4">
				Here I would provide a detailed look at the company's approach, competitive positioning, 
				and execution capabilities. This includes business model analysis and customer validation evidence.
			</p>
			<p class="mb-4">
				The founding team background and relevant experience would be assessed, along with any 
				partnership agreements or pilot programmes they have secured.
			</p>
		</section>

		<section>
			<h2 class="text-2xl font-bold mb-4">Financial Considerations</h2>
			<p class="mb-4">
				Revenue model analysis would go here - whether it is transaction-based, subscription-based, 
				or hybrid. Unit economics like CAC, LTV, and gross margins would be included where available.
			</p>
			<p class="mb-4">
				Current funding situation, burn rate, and runway would be detailed, along with their Series A 
				or next funding round targets and how they plan to use the capital.
			</p>
		</section>

		<section>
			<h2 class="text-2xl font-bold mb-4">Risk Assessment</h2>
			<p class="mb-4">Key risks would be broken down into categories:</p>
			
			<p class="mb-2"><strong>Market risks:</strong></p>
			<ul class="list-disc ml-6 space-y-1 mb-4">
				<li>Competition from incumbents and new entrants</li>
				<li>Regulatory changes that could impact the business</li>
				<li>Market timing and adoption challenges</li>
			</ul>
			
			<p class="mb-2"><strong>Company-specific risks:</strong></p>
			<ul class="list-disc ml-6 space-y-1 mb-4">
				<li>Team and execution capabilities</li>
				<li>Technology and operational scaling</li>
				<li>Customer concentration and partnership dependencies</li>
			</ul>
		</section>

		<section>
			<h2 class="text-2xl font-bold mb-4">Investment Thesis</h2>
			<p class="mb-4">
				The core investment case would be laid out with 3-5 key reasons why this could be an 
				attractive investment opportunity.
			</p>
			<p class="mb-4">
				Success metrics would be defined - what would need to be true for this investment to succeed. 
				This includes specific milestones and key performance indicators to track.
			</p>
		</section>

		<section>
			<h2 class="text-2xl font-bold mb-4">Open Questions</h2>
			<ul class="list-disc ml-6 space-y-2 mb-4">
				<li>What aspects of the market dynamics need further research?</li>
				<li>Which company-specific areas require deeper due diligence?</li>
				<li>What operational scaling challenges need validation?</li>
				<li>How might competitive responses impact the opportunity?</li>
			</ul>
			<p class="mb-4">
				These questions represent areas where more information is needed before forming a final investment view.
			</p>
		</section>
	</article>

	<!-- Footer for print -->
	<footer class="mt-12 pt-6 border-t border-gray-700">
		<p class="text-sm text-gray-400">
			This memo was published on <strong>michaeldistel.com/vc/memos/sample-memo</strong> 
			on 21 August 2025. These are exploratory thoughts and not investment advice.
		</p>
	</footer>
</div>

<style>
	@media print {
		:global(body) {
			background: white !important;
			color: black !important;
		}
	}
</style>
