<!-- Example showing how to refactor BuildBear Labs note using the new components -->
<script lang="ts">
	import AnalysisNote from '$lib/components/analysis/AnalysisNote.svelte';
	import CollapsibleSection from '$lib/components/analysis/CollapsibleSection.svelte';
	import MetricsCard from '$lib/components/analysis/MetricsCard.svelte';
	import Tooltip from '$lib/components/analysis/Tooltip.svelte';
	
	// Analysis note configuration
	const noteConfig = {
		title: 'BuildBear Labs Analysis Note',
		description: 'Analysis of BuildBear Labs\' blockchain testing infrastructure platform and Series A opportunity.',
		publishDate: '21 August 2025',
		currentUrl: '/startup/notes/2025-08-buildbear-labs',
		sections: [
			{ id: 'quick-take', title: 'Quick Take' },
			{ id: 'company-summary', title: 'Company Summary' },
			{ id: 'problem-statement', title: 'Problem Statement' },
			{ id: 'vision', title: 'Vision' },
			{ id: 'market-opportunity', title: 'Market Opportunity' },
			{ id: 'competitive-analysis', title: 'Competitive Analysis' },
			{ id: 'strategic-positioning', title: 'Strategic Positioning' },
			{ id: 'business-model', title: 'Business & Revenue Model' },
			{ id: 'traction', title: 'Traction' },
			{ id: 'strategy-roadmap', title: 'Strategy & Roadmap' },
			{ id: 'financial-forecast', title: 'Financial Forecast' },
			{ id: 'risk-factors', title: 'Risk Factors & Mitigation' },
			{ id: 'team', title: 'The Team' },
			{ id: 'investment-thesis', title: 'My Investment Thesis' },
			{ id: 'valuation', title: 'Valuation & Raise Details' },
			{ id: 'exit-paths', title: 'Exit Paths' },
			{ id: 'open-questions', title: 'Open Questions' }
		]
	};
	
	let analysisNote: any;
	
	$: collapsedSections = analysisNote?.collapsedSections || new Set();
	
	function toggleSection(sectionId: string) {
		if (analysisNote) {
			analysisNote.toggleSection(sectionId);
		}
	}
</script>

<AnalysisNote bind:this={analysisNote} {...noteConfig}>
	<!-- Startup Overview Slot -->
	<div slot="overview" class="mb-12 p-6 bg-slate-800 rounded-lg border border-slate-700">
		<h2 class="text-xl font-semibold mb-6 text-blue-400">Startup Overview</h2>
		
		<div class="grid md:grid-cols-2 gap-8">
			<!-- Company Details -->
			<div>
				<h3 class="text-lg font-medium mb-4 text-gray-200">Company Details</h3>
				<div class="space-y-2 text-gray-300">
					<p><strong class="text-gray-200">Registered Name:</strong> BuildBear Labs</p>
					<p><strong class="text-gray-200">Founders:</strong> Dipesh Sukhani, Emmanuel Antony</p>
					<p><strong class="text-gray-200">Location:</strong> Singapore</p>
					<p><strong class="text-gray-200">Operations:</strong> Global (remote-first)</p>
					<p><strong class="text-gray-200">Team Size:</strong> 12 people</p>
				</div>
			</div>

			<!-- Stage & Investment -->
			<div>
				<h3 class="text-lg font-medium mb-4 text-gray-200">Stage & Investment</h3>
				<div class="space-y-2 text-gray-300">
					<p><strong class="text-gray-200">Startup Stage:</strong> Growth (established product, scaling)</p>
					<p><strong class="text-gray-200">Investment Stage:</strong> Series A</p>
					<p><strong class="text-gray-200">Current Round:</strong> Series A targeting institutional growth</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Transparency Disclosure -->
	<div class="bg-slate-800 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-md">
		<h3 class="text-lg font-semibold mb-3 text-yellow-400">Transparency</h3>
		<div class="text-sm text-gray-300 space-y-3">
			<p>
				I am a shareholder of BuildBear Labs, as a member of a syndicate that invested in 2023. I also 
				received ESOP during my time as Operations lead from February 2024 to July 2025. I therefore have 
				both a personal and financial interest in the company's success. This will naturally influence 
				how I think about BuildBear Labs, and my view is not entirely free of bias.
			</p>
			<p>
				With that in mind, I aim to keep these notes as analytical as I can. I will try to distinguish 
				between evidence and my own interpretation, and I expect to revise my view as more information 
				comes in. I welcome any comments if anyone feels my analysis has bias bullshit.
			</p>
		</div>
	</div>

	<!-- Analysis Sections -->
	<CollapsibleSection 
		sectionId="quick-take" 
		title="Quick Take" 
		isCollapsed={collapsedSections.has('quick-take')}
		onToggle={toggleSection}
	>
		<p class="mb-4">
			[To be completed]
		</p>
	</CollapsibleSection>

	<CollapsibleSection 
		sectionId="company-summary" 
		title="Company Summary" 
		isCollapsed={collapsedSections.has('company-summary')}
		onToggle={toggleSection}
	>
		<p class="mb-4">
			BuildBear Labs is a Singapore-based infrastructure company building a full-stack DevOps platform 
			for Web3. Its core product is a set of persistent blockchain sandboxes, CI/CD automation, 
			multi-chain simulation, and collaboration tools that mirror the reliability of modern Web2 
			engineering environments. Supporting more than 700 EVM-compatible networks, BuildBear enables 
			developers to create production-grade environments that replicate mainnet conditions without 
			the cost, latency, or instability of public testnets.
		</p>
	</CollapsibleSection>

	<CollapsibleSection 
		sectionId="market-opportunity" 
		title="Market Opportunity" 
		isCollapsed={collapsedSections.has('market-opportunity')}
		onToggle={toggleSection}
	>
		<p class="mb-4">
			BuildBear positions itself at the intersection of two fast-growing markets: blockchain development 
			infrastructure and enterprise-grade DevOps tooling. The global software development tools market 
			is projected to grow from 
			<Tooltip text="$6.6 billion in 2024 to $19.7 billion by 2032" tooltip="14.5% CAGR growth rate" />, a 14.5% CAGR.
		</p>
		<p class="mb-4">
			They highlight several indicators: the number of active Web3 developers is projected to grow to 
			<Tooltip text="658,000 by 2032" tooltip="From ~23,000 in 2023 (29x growth)" /> (from around 23,000 in 2023), annual spend on blockchain security testing is 
			expected to exceed $1 billion by 2026, and projects today already spend more than $500,000 on 
			average per dApp, with roughly $300,000 allocated to testing and QA.
		</p>
	</CollapsibleSection>

	<CollapsibleSection 
		sectionId="traction" 
		title="Traction" 
		isCollapsed={collapsedSections.has('traction')}
		onToggle={toggleSection}
	>
		<p class="mb-4">
			BuildBear Labs has demonstrated strong acceleration across key metrics throughout 2024 and early 2025, 
			showing both user growth and deepening engagement with their platform.
		</p>

		<!-- Interactive Metrics Cards -->
		<div class="grid md:grid-cols-3 gap-4 mb-6 not-prose">
			<MetricsCard 
				value="700+" 
				label="Monthly Active Users" 
				trend="49% growth (6 months)" 
				trendColor="green" 
			/>
			<MetricsCard 
				value="250K+" 
				label="Total Sandboxes" 
				trend="13x growth (4 months)" 
				trendColor="green" 
			/>
			<MetricsCard 
				value="81%" 
				label="2-Month Retention" 
				trend="From 72% baseline" 
				trendColor="green" 
			/>
		</div>

		<h3 class="text-xl font-semibold mb-3 text-blue-400">User Growth & Activity</h3>
		<p class="mb-4">
			Monthly Active Users (MAU) rose from 552 in November 2024 to 820 by April 2025, representing 
			nearly 50% growth in just six months. Average month-over-month growth in active users during 
			this period was 10.9%, with a notable rebound starting January 2025.
		</p>
	</CollapsibleSection>

	<!-- Add more sections as needed... -->

</AnalysisNote>
