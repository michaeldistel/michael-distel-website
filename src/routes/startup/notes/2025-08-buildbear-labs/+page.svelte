<script lang="ts">
	import AnalysisNote from '$lib/components/analysis/AnalysisNote.svelte';

	// Section data for navigation
	const sections = [
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
	];

	// Component bindings - these will be bound from AnalysisNote component
	let analysisNote: AnalysisNote;
	let toggleSection: (sectionId: string) => void;
	let collapsedSections: Set<string>;
</script>

<AnalysisNote
	bind:this={analysisNote}
	bind:toggleSection
	bind:collapsedSections
	title="BuildBear Labs Note"
	description="Note on BuildBear Labs' blockchain testing infrastructure platform and Series A opportunity."
	publishDate="21 August 2025"
	{sections}
>
	<!-- Startup Overview in the overview slot -->
	<section slot="overview" class="mb-12 p-6 bg-slate-800 rounded-lg border border-slate-700">
		<h2 class="text-xl font-semibold mb-6 text-blue-400">Startup Overview</h2>

		<div class="grid md:grid-cols-2 gap-8">
			<!-- Company Details -->
			<div>
				<h3 class="text-lg font-medium mb-4 text-gray-200">Company Details</h3>
				<div class="space-y-2 text-gray-300">
					<p><strong class="text-gray-200">Registered Name:</strong> BuildBear Labs</p>
					<p><strong class="text-gray-200">Founders:</strong> Dipesh Sukhani, Emmanuel Antony</p>
					<p><strong class="text-gray-200">Founder Equity:</strong> [To be confirmed]</p>
					<p><strong class="text-gray-200">Location:</strong> Singapore</p>
					<p><strong class="text-gray-200">Operations:</strong> Global (remote-first)</p>
					<p>
						<strong class="text-gray-200">Team Size:</strong> [To be confirmed - approximately 8-12 people]
					</p>
				</div>
			</div>

			<!-- Stage & Investment -->
			<div>
				<h3 class="text-lg font-medium mb-4 text-gray-200">Stage & Investment</h3>
				<div class="space-y-2 text-gray-300">
					<p>
						<strong class="text-gray-200">Startup Stage:</strong> Growth (established product, scaling)
					</p>
					<p><strong class="text-gray-200">Investment Stage:</strong> Series A</p>
					<p><strong class="text-gray-200">Accelerator:</strong> N/A</p>
					<p>
						<strong class="text-gray-200">Funds Raised:</strong> [Previous rounds including syndicate
						2023]
					</p>
					<p>
						<strong class="text-gray-200">Current Round:</strong> Series A targeting institutional growth
					</p>
				</div>
			</div>
		</div>

		<!-- Transparency Disclosure -->
		<div class="bg-slate-800 border-l-4 border-yellow-500 p-6 mt-8 rounded-r-md">
			<h3 class="text-lg font-semibold mb-3 text-yellow-400">Transparency</h3>
			<div class="text-sm text-gray-300 space-y-3">
				<p>
					I am a shareholder of BuildBear Labs, as a member of a syndicate that invested in 2023. I
					also received ESOP during my time as Operations lead from February 2024 to July 2025. I
					therefore have both a personal and financial interest in the company's success. This will
					naturally influence how I think about BuildBear Labs, and my view is not entirely free of
					bias.
				</p>
				<p>
					With that in mind, I aim to keep these notes as analytical as I can. I will try to
					distinguish between evidence and my own interpretation, and I expect to revise my view as
					more information comes in. I welcome any comments if anyone feels my analysis has bias
					bullshit.
				</p>
			</div>
		</div>
	</section>

	<!-- Main Analysis Content -->
	<section id="quick-take">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">Quick Take</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('quick-take')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('quick-take')
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('quick-take')}
			<p class="mb-4">[To be completed]</p>
		{/if}
	</section>

	<section id="company-summary">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">Company Summary</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('company-summary')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('company-summary')
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('company-summary')}
			<p class="mb-4">
				BuildBear Labs is a Singapore-based infrastructure company building a full-stack DevOps
				platform for Web3. Its core product is a set of persistent blockchain sandboxes, CI/CD
				automation, multi-chain simulation, and collaboration tools that mirror the reliability of
				modern Web2 engineering environments. Supporting more than 700 EVM-compatible networks,
				BuildBear enables developers to create production-grade environments that replicate mainnet
				conditions without the cost, latency, or instability of public testnets.
			</p>
		{/if}
	</section>

	<section id="problem-statement">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">Problem Statement</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('problem-statement')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('problem-statement')
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('problem-statement')}
			<p class="mb-4">
				BuildBear describes the Web3 development lifecycle as alarmingly immature compared to Web2.
				While traditional software teams rely on integrated DevOps stacks, CI/CD pipelines, and
				scalable staging environments, Web3 developers are left with fragmented toolchains,
				unreliable testnets, and manual sandboxes that fail to mirror production conditions. The
				result is inefficiency at scale: projects often take eight months and more than $500,000 to
				build, with the majority of that time and cost tied up in testing and debugging.
			</p>
			<p class="mb-4">
				They point to security as the most serious outcome of this gap. In H1 2023, $471 million in
				Web3 losses were linked to vulnerabilities caused by poor testing, and even audited
				protocols suffered from flawed logic. Public testnets add to the problem, being slow,
				unstable, and expensive at scale. For Web2 companies used to GitHub Actions, Docker, and
				Kubernetes, the current stack feels immature and ill-suited for collaboration. Until better
				infrastructure is in place, BuildBear argues that Web3 will remain a high-friction
				environment where costs are inflated, risks are systemic, and mass adoption stays just
				"around the corner."
			</p>
		{/if}
	</section>

	<section id="vision">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">Vision</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('vision')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('vision')
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('vision')}
			<p class="mb-4">
				BuildBear describes itself as "the GitHub of Web3," aiming to become the default DevOps
				layer for decentralised software. In their long-term roadmap they highlight a few pillars:
			</p>
			<ul class="list-disc ml-6 space-y-2 mb-4">
				<li>A chain-agnostic starting point for all smart contract and protocol development.</li>
				<li>
					An ecosystem built around a plugin marketplace for tooling, analytics, and integrations.
				</li>
				<li>Adoption by enterprises and auditors as the default simulation and security layer.</li>
				<li>Expansion into deployment orchestration, observability, and developer analytics.</li>
				<li>Helping Web2 companies make the shift into Web3 with tools they already trust.</li>
			</ul>
			<p class="mb-4">
				The phrasing they use is simple and ambitious: no decentralised application should ever go
				live without passing through BuildBear Labs.
			</p>
		{/if}
	</section>

	<section id="market-opportunity">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">Market Opportunity</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('market-opportunity')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('market-opportunity')
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('market-opportunity')}
			<p class="mb-4">
				BuildBear positions itself at the intersection of two fast-growing markets: blockchain
				development infrastructure and enterprise-grade DevOps tooling. The global software
				development tools market is projected to grow from
				<span class="relative group">
					<span class="underline decoration-dotted decoration-blue-400 cursor-help"
						>$6.6 billion in 2024 to $19.7 billion by 2032</span
					>
					<span
						class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs bg-slate-700 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10"
					>
						14.5% CAGR growth rate
					</span>
				</span>, a 14.5% CAGR. Historically, this market has been dominated by Web2 platforms like
				GitHub, Docker, and Jenkins, but BuildBear argues that demand is shifting toward
				blockchain-native tooling that offers the same level of collaboration, automation, and
				security.
			</p>
			<p class="mb-4">
				They highlight several indicators: the number of active Web3 developers is projected to grow
				to
				<span class="relative group">
					<span class="underline decoration-dotted decoration-blue-400 cursor-help"
						>658,000 by 2032</span
					>
					<span
						class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs bg-slate-700 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10"
					>
						From ~23,000 in 2023 (29x growth)
					</span>
				</span> (from around 23,000 in 2023), annual spend on blockchain security testing is expected
				to exceed $1 billion by 2026, and projects today already spend more than $500,000 on average
				per dApp, with roughly $300,000 allocated to testing and QA. BuildBear estimates its short-term
				serviceable opportunity at around $300 million, within a $3 billion Web3 developer tooling market.
			</p>
			<p class="mb-4">
				Their strategy is to win high-value enterprise and protocol accounts while scaling bottom-up
				through a freemium model, integrations, and partnerships. They see themselves becoming the
				default starting point for Web3 developers, capturing foundational infrastructure value
				similar to what GitHub, Postman, and Docker achieved in traditional software ecosystems.
			</p>
		{/if}
	</section>

	<section id="competitive-analysis">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">Competitive Analysis</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('competitive-analysis')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('competitive-analysis')
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('competitive-analysis')}
			<p class="mb-4">
				BuildBear identifies several categories of competitors in the Web3 development
				infrastructure space, though they argue no single player offers their comprehensive
				full-stack approach. The competitive landscape includes established blockchain
				infrastructure providers, emerging Web3 developer tools, and traditional DevOps platforms
				attempting to adapt for blockchain development.
			</p>
			<p class="mb-4"><strong>Direct competitors include:</strong></p>
			<ul class="list-disc ml-6 space-y-2 mb-4">
				<li>
					<strong>Alchemy:</strong> Dominant in node infrastructure but limited testing capabilities
				</li>
				<li>
					<strong>Infura:</strong> Similar to Alchemy with basic RPC services, no comprehensive testing
					suite
				</li>
				<li>
					<strong>Tenderly:</strong> Strong in simulation and debugging but lacks persistent environments
				</li>
				<li>
					<strong>Ganache/Hardhat Network:</strong> Local development tools that don't scale for teams
				</li>
			</ul>
			<p class="mb-4"><strong>Adjacent competitors:</strong></p>
			<ul class="list-disc ml-6 space-y-2 mb-4">
				<li>
					<strong>Foundry:</strong> Excellent testing framework but requires significant setup and maintenance
				</li>
				<li>
					<strong>Remix IDE:</strong> Browser-based development but limited for production workflows
				</li>
				<li>
					<strong>Chainlink VRF/Functions:</strong> Specific infrastructure services, not comprehensive
					platforms
				</li>
			</ul>
			<p class="mb-4">
				BuildBear's differentiation centers on providing persistent, production-like environments
				with CI/CD integration, team collaboration features, and multi-chain support in a single
				platform. They argue competitors either focus too narrowly on single features or lack the
				reliability and scalability needed for enterprise adoption.
			</p>
		{/if}
	</section>

	<section id="strategic-positioning">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">Strategic Positioning</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('strategic-positioning')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('strategic-positioning')
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('strategic-positioning')}
			<p class="mb-4">
				BuildBear Labs is not coming to market to compete as another contract debugger or local
				framework. BuildBear is creating a DevOps layer for Web3, analogous to what GitHub, Docker,
				and Vercel provided for Web2. Its emphasis on collaboration, extensibility, and automation
				enables it to scale from solo developers to protocol teams, enterprise clients, and
				compliance-focused security firms.
			</p>
			<p class="mb-4">
				This ecosystem-first approach creates defensibility through network effects: as more teams
				use BuildBear Labs, the value of shared environments, plugins, and best-practice
				integrations increases, locking BuildBear Labs into the core workflows of Web3 development.
			</p>
		{/if}
	</section>

	<section id="business-model">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">Business & Revenue Model</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('business-model')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('business-model')
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('business-model')}
			<p class="mb-4">
				BuildBear Labs operates a multi-tiered SaaS model designed to scale with developer needs
				from solo builders to large protocol teams and enterprises. The pricing structure combines
				subscription, usage-based, and platform revenue-sharing components to maximise revenue
				across user segments.
			</p>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">Revenue Streams</h3>

			<h4 class="text-lg font-medium mb-2 text-gray-200">1. Tiered Subscription Plans</h4>
			<ul class="list-disc ml-6 space-y-1 mb-4 text-gray-300">
				<li>
					<strong>Free Tier ($0/month):</strong> 5 active sandboxes, 1,000 transactions/month, limited
					API access, and access to free plugins
				</li>
				<li>
					<strong>Professional Tier ($200/month):</strong> 10 active sandboxes (plus $5 per additional),
					5,000 transactions/month (plus $0.007 per extra transaction), access to advanced debugging
					tools and paid plugins
				</li>
				<li>
					<strong>Enterprise Tier (Custom pricing):</strong> Unlimited sandboxes, custom API integrations,
					dedicated account manager, and value-added services (consulting, training, deployment support)
				</li>
			</ul>

			<h4 class="text-lg font-medium mb-2 text-gray-200">2. Usage-Based Pricing</h4>
			<p class="mb-4 text-gray-300">
				Transaction throughput and sandbox count scale dynamically across tiers. This usage model
				ensures monetisation increases proportionally with customer growth and engagement.
			</p>

			<h4 class="text-lg font-medium mb-2 text-gray-200">
				3. Plugin Marketplace (30% Revenue Share)
			</h4>
			<ul class="list-disc ml-6 space-y-1 mb-4 text-gray-300">
				<li>
					BuildBear's plugin ecosystem enables developers, auditors, and vendors to create and
					distribute tools (analytics, security, automation)
				</li>
				<li>
					BuildBear takes a 30% commission on paid plugins, creating a high-margin, platform-level
					revenue stream similar to GitHub Marketplace or Atlassian's app ecosystem
				</li>
			</ul>

			<h4 class="text-lg font-medium mb-2 text-gray-200">4. Enterprise Integrations</h4>
			<ul class="list-disc ml-6 space-y-1 mb-4 text-gray-300">
				<li>
					Custom deployments for large institutions include on-premise/VPC support, SLAs, and
					consulting services under flexible pricing agreements
				</li>
				<li>High ACV ($10,000+/yr) with strategic long-term retention and upsell potential</li>
			</ul>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">Growth Levers</h3>
			<ul class="list-disc ml-6 space-y-2 mb-4 text-gray-300">
				<li>
					<strong>Freemium Funnel → Paid Expansion:</strong> Developers start free, scale into Professional
					or Enterprise tiers as project needs evolve
				</li>
				<li>
					<strong>Usage Scaling:</strong> Monetisation increases with sandbox count, transactions, and
					API demand
				</li>
				<li>
					<strong>Plugin Ecosystem:</strong> Network effects from marketplace activity drive engagement,
					expand use cases, and increase margin
				</li>
				<li>
					<strong>Cross-Ecosystem Integration:</strong> BuildBear is becoming the native test/deploy
					layer for emerging L1s, L2s, and zk-rollups, with co-marketing and revenue-share potential
				</li>
			</ul>

			<p class="mb-4">
				The long-term opportunity lies in owning the pre-deployment layer of the Web3 stack,
				embedding BuildBear into every smart contract development lifecycle. With modular pricing,
				enterprise extensibility, and compounding platform dynamics, BuildBear Labs is structurally
				positioned to scale both horizontally across ecosystems and vertically across the stack.
			</p>
		{/if}
	</section>

	<section id="traction">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">Traction</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('traction')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('traction')
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('traction')}
			<p class="mb-4">
				BuildBear Labs has demonstrated strong acceleration across key metrics throughout 2024 and
				early 2025, showing both user growth and deepening engagement with their platform.
			</p>

			<!-- Interactive Metrics Cards -->
			<div class="grid md:grid-cols-3 gap-4 mb-6 not-prose">
				<div class="bg-slate-800 p-4 rounded-lg border border-slate-700">
					<div class="text-2xl font-bold text-blue-400">700+</div>
					<div class="text-sm text-gray-300">Monthly Active Users</div>
					<div class="text-xs text-green-400 mt-1">↗ 49% growth (6 months)</div>
				</div>
				<div class="bg-slate-800 p-4 rounded-lg border border-slate-700">
					<div class="text-2xl font-bold text-blue-400">250K+</div>
					<div class="text-sm text-gray-300">Total Sandboxes</div>
					<div class="text-xs text-green-400 mt-1">↗ 13x growth (4 months)</div>
				</div>
				<div class="bg-slate-800 p-4 rounded-lg border border-slate-700">
					<div class="text-2xl font-bold text-blue-400">81%</div>
					<div class="text-sm text-gray-300">2-Month Retention</div>
					<div class="text-xs text-green-400 mt-1">↗ From 72% baseline</div>
				</div>
			</div>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">User Growth & Activity</h3>
			<p class="mb-4">
				Monthly Active Users (MAU) rose from 552 in November 2024 to 820 by April 2025, representing
				nearly 50% growth in just six months. Average month-over-month growth in active users during
				this period was 10.9%, with a notable rebound starting January 2025. Two-month retention
				surged from 72% (November cohort) to 81% (February cohort), indicating stronger product
				stickiness and onboarding effectiveness.
			</p>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">Platform Usage Metrics</h3>
			<p class="mb-4">
				Sandbox creation shows explosive growth, with total sandboxes reaching approximately 250,000
				by March 2025. Monthly new sandbox creation has accelerated dramatically, jumping from under
				3,000 per month in late 2024 to over 40,000 in March 2025 - representing more than 13x
				growth in just four months.
			</p>
			<p class="mb-4">
				The user engagement data reveals strong retention patterns, with distinct monthly active
				user cohorts showing consistent growth over time. The platform now supports over 700 monthly
				active users as of early 2025, with clear acceleration beginning in Q4 2024 and continuing
				through Q1 2025.
			</p>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">Growth Trajectory</h3>
			<p class="mb-4">
				The data shows BuildBear Labs hitting an inflection point in late 2024, with both user
				acquisition and platform utilization accelerating simultaneously. The compound growth in
				sandbox creation (from 775 in June 2024 to 40,384 in March 2025) demonstrates not just user
				growth but increasing per-user engagement, suggesting strong product-market fit and
				expanding use cases within teams.
			</p>
		{/if}
	</section>

	<section id="strategy-roadmap">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">Strategy & Roadmap</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('strategy-roadmap')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('strategy-roadmap')
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('strategy-roadmap')}
			<h3 class="text-xl font-semibold mb-3 text-blue-400">
				Short-Term Strategy (Next 12-18 Months)
			</h3>
			<p class="mb-4">
				BuildBear Labs' near-term go-to-market focus is centred on maximising adoption and embedding
				itself into developer workflows across both Web2 and Web3. The goal is to become the default
				testing and simulation layer for blockchain applications, whether they're built by
				Web3-native teams or Web2 developers entering the space.
			</p>
			<p class="mb-4"><strong>Key near-term initiatives include:</strong></p>
			<ul class="list-disc ml-6 space-y-2 mb-4">
				<li>
					Deepening integrations across ecosystems, including Web3 tools (Remix, Sourcify, Runtime
					Verification) and Web2 platforms (GitHub Actions, CI/CD pipelines)
				</li>
				<li>
					Partnering with L1s, L2s, and protocol teams to embed BuildBear Labs as the default
					development and testing layer
				</li>
				<li>
					Driving plugin marketplace adoption, unlocking third-party monetisation, and expanding
					developer use cases
				</li>
				<li>
					Activating free-to-paid conversion levers through usage-based pricing, enterprise
					deployments, and value-added services
				</li>
				<li>
					Expanding content and community growth, leveraging educational tutorials, starter
					templates, and integrations with popular developer ecosystems
				</li>
			</ul>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">Long-Term Strategy (2+ Years)</h3>
			<p class="mb-4">
				In the long term, BuildBear Labs aims to own the pre-deployment and simulation layer for all
				decentralised software. Its broader ambition is to provide developers with an operating
				system for Web3: chain-agnostic, modular, and tightly integrated with both legacy and modern
				infrastructure.
			</p>
			<p class="mb-4"><strong>Strategic goals include:</strong></p>
			<ul class="list-disc ml-6 space-y-2 mb-4">
				<li>
					Owning the full DevOps lifecycle for smart contracts from prototyping and simulation to
					deployment, monitoring, and compliance
				</li>
				<li>
					Becoming a core part of enterprise-grade Web3 stacks, enabling financial institutions and
					Web2 companies to transition securely into decentralised applications
				</li>
				<li>
					Expanding horizontal capabilities into observability, deployment orchestration, and
					AI-assisted testing
				</li>
				<li>
					Building long-term defensibility through the plugin marketplace, usage-based scale, and
					institutional integration
				</li>
			</ul>
		{/if}
	</section>

	<section id="financial-forecast">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">Financial Forecast</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('financial-forecast')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('financial-forecast')
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('financial-forecast')}
			<p class="mb-4">
				BuildBear Labs is building a high-growth, high-margin SaaS business positioned to scale
				across the entire Web3 developer ecosystem. While monetisation has only recently begun, the
				company projects $60M in ARR by the end of 2027, driven by the compounding effect of
				platform usage, ecosystem partnerships, and expansion into enterprise and marketplace
				revenue streams.
			</p>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">Revenue Breakdown & Growth Strategy</h3>
			<ul class="list-disc ml-6 space-y-2 mb-4">
				<li>
					<strong>Subscription Revenue</strong> (Professional & Enterprise plans) will provide predictable
					base income as developer teams scale their usage
				</li>
				<li>
					<strong>Pay-per-Usage Revenue</strong> from sandbox overages and high-volume teams begins ramping
					in mid-2026
				</li>
				<li>
					<strong>Enterprise Revenue</strong> from custom deployments, SLAs, and value-added services
					scales with protocol and infrastructure integrations
				</li>
				<li>
					<strong>Marketplace Revenue</strong> (30% commission) is expected to grow into a significant
					contributor as plugin adoption increases across toolchains
				</li>
			</ul>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">Strategic Monetisation Approach</h3>
			<p class="mb-4">
				BuildBear Labs is deliberately prioritising developer adoption in the near term, with
				monetisation scaling as usage compounds. This mirrors the land-and-expand model successfully
				executed by DevOps platforms like GitHub, Postman, and Vercel, where adoption precedes
				monetisation, enabling strong retention, workflow stickiness, and long-term pricing
				leverage.
			</p>
			<p class="mb-4"><strong>Key financial positioning:</strong></p>
			<ul class="list-disc ml-6 space-y-1 mb-4">
				<li>High gross margins (85%+)</li>
				<li>Low CAC, primarily through ecosystem and L2 integrations</li>
				<li>Recurring usage tied to essential developer workflows</li>
				<li>Compounding platform revenue via plugin marketplace and CI/CD extensions</li>
			</ul>
		{/if}
	</section>

	<section id="risk-factors">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">Risk Factors & Mitigation</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('risk-factors')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('risk-factors')
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('risk-factors')}
			<h3 class="text-xl font-semibold mb-3 text-blue-400">Market Risk</h3>
			<p class="mb-2">
				<strong>Risk:</strong> The broader Web3 market remains volatile, with cyclical funding, uncertain
				regulation, and inconsistent developer activity. A slowdown in blockchain adoption, especially
				by enterprises, could delay monetisation or reduce market size.
			</p>
			<p class="mb-4"><strong>Mitigation:</strong></p>
			<ul class="list-disc ml-6 space-y-1 mb-4">
				<li>
					BuildBear's tooling is chain-agnostic and applicable across L1s, L2s, and private
					blockchain deployments
				</li>
				<li>
					Expanding into regulated Web2 environments where demand for pre-deployment simulation and
					compliance tooling is increasing
				</li>
				<li>
					Positioning as infrastructure rather than application layer provides more stability, as
					dev tooling is required in both bull and bear markets
				</li>
			</ul>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">External Risk</h3>
			<p class="mb-2">
				<strong>Risk:</strong> BuildBear's growth depends on integration with external toolchains, protocols,
				and developer ecosystems. Shifts in open standards, API deprecations, or ecosystem fragmentation
				could create dependency risk.
			</p>
			<p class="mb-4"><strong>Mitigation:</strong></p>
			<ul class="list-disc ml-6 space-y-1 mb-4">
				<li>
					Prioritises open standards and modular architecture, reducing integration overhead and
					maintaining long-term flexibility
				</li>
				<li>
					Maintains multiple concurrent partnerships across verticals to avoid single points of
					failure
				</li>
				<li>
					Growing plugin marketplace strategy allows developers and partners to build directly into
					the platform, decentralising growth
				</li>
			</ul>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">Company Risk</h3>
			<p class="mb-2">
				<strong>Risk:</strong> As an early-stage company, BuildBear Labs faces classic execution risks,
				including product scaling, hiring, revenue timing, and organisational focus.
			</p>
			<p class="mb-4"><strong>Mitigation:</strong></p>
			<ul class="list-disc ml-6 space-y-1 mb-4">
				<li>
					Founding team combines deep domain expertise (Web3, DevOps, Rust, ML) with substantial
					operational experience
				</li>
				<li>
					Revenue already diversified across subscriptions, usage-based pricing, enterprise
					contracts, and marketplace commissions
				</li>
				<li>
					Deliberately pacing monetisation behind adoption, using proven "land-and-expand" strategy
				</li>
				<li>
					Strong traction with leading ecosystem partners providing validation and distribution
				</li>
			</ul>
		{/if}
	</section>

	<section id="team">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">The Team</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('team')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('team') ? 'rotate-180' : ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('team')}
			<p class="mb-4">
				BuildBear Labs is led by a technical founding team with complementary backgrounds in Web3
				development, enterprise software, and blockchain infrastructure.
			</p>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">Leadership Team</h3>
			<p class="mb-4">
				<strong
					>CEO <a
						href="https://www.linkedin.com/in/dipeshsukhani"
						target="_blank"
						rel="noopener noreferrer"
						class="text-blue-500 hover:text-blue-400 underline">Dipesh Sukhani</a
					>:</strong
				>
				Former VP of Growth at Instadapp, one of the largest DeFi protocols. Multiple successful exits
				in the DeFi space with deep understanding of Web3 developer pain points and protocol-level partnerships.
				Strong network within the Ethereum and broader Web3 ecosystem.
			</p>
			<p class="mb-4">
				<strong
					>CTO <a
						href="https://www.linkedin.com/in/emmanuel-antony"
						target="_blank"
						rel="noopener noreferrer"
						class="text-blue-500 hover:text-blue-400 underline">Emmanuel Antony</a
					>:</strong
				>
				Former Microsoft engineer with extensive experience in distributed systems and enterprise software.
				Brings critical Web2 infrastructure knowledge needed to build enterprise-grade developer tooling
				that can scale to large organizations.
			</p>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">Team Assessment</h3>
			<p class="mb-4">
				The founding team combines domain expertise (Web3 protocols, enterprise infrastructure) with
				proven execution experience. Dipesh's DeFi background provides credibility with Web3
				developers, while Emmanuel's enterprise experience is crucial for the "Web2 companies
				entering Web3" segment they are targeting.
			</p>
			<p class="mb-4">
				<strong>Current team size:</strong> 12 people split between India and remote locations. The team
				has remained lean while hitting technical milestones, suggesting good capital discipline and
				execution focus.
			</p>
		{/if}
	</section>

	<section id="investment-thesis">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">My Investment Thesis</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('investment-thesis')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('investment-thesis')
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('investment-thesis')}
			<p class="mb-4">
				BuildBear Labs represents a rare infrastructure play that could capture significant value as
				Web3 development matures. Here are the key reasons why this opportunity stands out:
			</p>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">1. Right Product, Right Time</h3>
			<p class="mb-4">
				Web3 development is reaching a complexity inflection point where professional-grade tooling
				becomes essential, not optional. The $471M in H1 2023 security losses due to poor testing
				creates both urgency and budget justification for better infrastructure.
			</p>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">2. Platform Economics</h3>
			<p class="mb-4">
				BuildBear is building platform-level network effects through their plugin marketplace and
				shared environments. Unlike point solutions, this creates switching costs and defensibility
				that scales with adoption. The GitHub/Docker analogy is apt - infrastructure that becomes
				foundational is extremely valuable.
			</p>

			<h3 class="text-xl font-semibel mb-3 text-blue-400">3. Enterprise Bridge</h3>
			<p class="mb-4">
				The combination of Web3-native functionality with Web2-grade reliability positions BuildBear
				uniquely for the eventual enterprise adoption wave. Most Web3 dev tools are built for crypto
				natives - BuildBear can serve both markets.
			</p>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">Success Metrics to Track</h3>
			<ul class="list-disc ml-6 space-y-2 mb-4">
				<li>
					<strong>Free-to-paid conversion:</strong> Progression from 1,400+ free users to Professional/Enterprise
					tiers
				</li>
				<li>
					<strong>Enterprise traction:</strong> Landing $10K+ annual contracts with protocols and institutions
				</li>
				<li>
					<strong>Plugin ecosystem:</strong> Third-party developer activity and marketplace revenue
				</li>
				<li>
					<strong>Multi-chain adoption:</strong> Usage across L1s, L2s beyond just Ethereum ecosystem
				</li>
			</ul>
		{/if}
	</section>

	<section id="valuation">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">Valuation & Raise Details</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('valuation')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('valuation')
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('valuation')}
			<p class="mb-4">
				BuildBear Labs is raising a Series A round, though specific valuation details are not
				disclosed in the available materials. The round includes participation from existing backers
				alongside new investors.
			</p>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">Valuation Context</h3>
			<p class="mb-4">
				Based on comparable Web3 infrastructure companies at similar stages, Series A valuations in
				this space typically range from $20M-$100M depending on traction and growth trajectory.
				Given BuildBear's strong metrics (250K+ sandboxes, 13x growth, 700+ MAUs), they likely
				command a premium within this range.
			</p>
			<p class="mb-4">
				<strong>Comparable references:</strong> Developer infrastructure companies like Alchemy, Infura,
				and Tenderly have raised at progressively higher valuations as Web3 tooling demand has grown.
				BuildBear's more comprehensive platform approach could justify premium pricing.
			</p>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">Use of Funds</h3>
			<p class="mb-4">
				While specific allocation is not detailed, Series A funds typically support team scaling,
				product development acceleration, and go-to-market expansion. For BuildBear, priorities
				likely include enterprise sales capabilities, plugin marketplace development, and
				infrastructure scaling to support growing usage.
			</p>
		{/if}
	</section>

	<section id="exit-paths">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">Exit Paths</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('exit-paths')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('exit-paths')
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('exit-paths')}
			<p class="mb-4">
				BuildBear Labs has multiple potential exit paths given its position as foundational Web3
				infrastructure, though timeline depends on market maturation and company scale.
			</p>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">Strategic Acquisition Candidates</h3>
			<ul class="list-disc ml-6 space-y-2 mb-4">
				<li>
					<strong>GitHub/Microsoft:</strong> Natural fit for expanding developer tools into Web3, similar
					to GitHub's Codespaces evolution
				</li>
				<li>
					<strong>Major blockchain infrastructure providers:</strong> Alchemy, Infura, or ConsenSys could
					acquire to complete their developer stack
				</li>
				<li>
					<strong>Cloud providers:</strong> AWS, Google Cloud, or Azure seeking to dominate Web3 enterprise
					infrastructure
				</li>
				<li>
					<strong>DevOps platforms:</strong> Atlassian, GitLab, or HashiCorp expanding into blockchain
					development workflows
				</li>
			</ul>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">IPO Potential</h3>
			<p class="mb-4">
				If BuildBear achieves their $60M ARR target by 2027 with strong growth and margins, an
				independent public listing becomes viable. Developer infrastructure companies with recurring
				revenue and platform economics can command strong public market multiples.
			</p>

			<h3 class="text-xl font-semibold mb-3 text-blue-400">Timeline Considerations</h3>
			<p class="mb-4">
				<strong>3-5 years:</strong> Strategic acquisition most likely as Web3 infrastructure
				consolidates<br />
				<strong>5-7 years:</strong> IPO potential if they achieve platform scale and market
				leadership<br />
				<strong>Key trigger:</strong> Enterprise adoption inflection point where Web2 companies systematically
				adopt Web3 tooling
			</p>
		{/if}
	</section>

	<section id="open-questions">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">Open Questions</h2>
			<button
				class="no-print text-gray-400 hover:text-white transition-colors"
				on:click={() => toggleSection?.('open-questions')}
				title="Toggle section"
			>
				<svg
					class="w-5 h-5 transition-transform {collapsedSections?.has('open-questions')
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
		</div>
		{#if !collapsedSections?.has('open-questions')}
			<ul class="list-disc ml-6 space-y-2 mb-4">
				<li>What aspects of the market dynamics need further research?</li>
				<li>Which company-specific areas require deeper due diligence?</li>
				<li>What operational scaling challenges need validation?</li>
				<li>How might competitive responses impact the opportunity?</li>
			</ul>
			<p class="mb-4">
				These questions represent areas where more information is needed before forming a final
				investment view.
			</p>
		{/if}
	</section>
</AnalysisNote>
