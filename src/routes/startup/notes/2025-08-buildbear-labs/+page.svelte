<script lang="ts">
	import DetailedNote from '$lib/components/notes/DetailedNote.svelte';
	import LineChart from '$lib/components/charts/LineChart.svelte';

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
		{ id: 'open-questions', title: 'Open Questions' },
		{ id: 'references', title: 'References & Data Sources' }
	];

	// Component bindings - these will be bound from DetailedNote component
	let detailedNote: DetailedNote;
	
	// Breadcrumbs for this note
	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Startup', href: '/startup' },
		{ label: 'Notes', href: '/startup/notes' },
		{ label: 'BuildBear Labs Note' }
	];

	// Chart data for Web3 developer growth based on Electric Capital data
	const developerGrowthData = {
		labels: ['2024', '2025', '2027', '2029', '2032'],
		datasets: [
			{
				label: "BuildBear's Optimistic (658k by 2032)",
				data: [23.6, 22, 85, 220, 658],
				borderColor: '#10b981',
				backgroundColor: '#10b981',
				borderWidth: 2,
				borderDash: [8, 4],
				fill: false,
				tension: 0
			},
			{
				label: 'My Skeptical View (~100k by 2032)',
				data: [23.6, 22, 35, 55, 100],
				borderColor: '#f59e0b',
				backgroundColor: '#f59e0b',
				borderWidth: 2,
				fill: false,
				tension: 0
			},
			{
				label: 'Electric Capital Reality (slow growth)',
				data: [23.6, 22, 24, 28, 35],
				borderColor: '#ef4444',
				backgroundColor: '#ef4444',
				borderWidth: 2,
				fill: false,
				tension: 0
			}
		]
	};
</script>

<DetailedNote
	bind:this={detailedNote}
	title="BuildBear Labs Note"
	description="Note on BuildBear Labs' blockchain testing infrastructure platform and Series A opportunity."
	publishDate="21 August 2025"
	{sections}
	{breadcrumbs}
>
	<!-- Startup Overview in the overview slot -->
	<section slot="overview" class="note-space-2xl note-card-md">
		<h2 class="note-heading-h2">Startup Overview</h2>
		<div class="note-section-break"></div>

		<div class="grid md:grid-cols-2 note-gap-xl">
			<!-- Company Details -->
			<div>
				<h3 class="note-heading-h3">Company Details</h3>
				<div class="note-list">
					<p><strong class="note-text-emphasis">Registered Name:</strong> BuildBear Labs Pte Ltd</p>
					<div>
						<p><strong class="note-text-emphasis">Founders:</strong></p>
						<p class="ml-4">
							<a
								href="https://www.linkedin.com/in/dipeshsukhani/"
								target="_blank"
								rel="noopener noreferrer"
								class="note-link-primary"
							>
								Dipesh Sukhani
							</a>
						</p>
						<p class="ml-4">
							<a
								href="https://www.linkedin.com/in/emmanuelantony/"
								target="_blank"
								rel="noopener noreferrer"
								class="note-link-primary"
							>
								Emmanuel Antony
							</a>
						</p>
					</div>
					<p><strong class="note-text-emphasis">Location:</strong> Singapore</p>
					<p>
						<strong class="note-text-emphasis">Team Size:</strong> 12
					</p>
				</div>
			</div>

			<!-- Stage & Investment -->
			<div>
				<h3 class="note-heading-h3">Stage & Investment</h3>
				<div class="note-list">
					<p>
						<strong class="note-text-emphasis">Startup Stage:</strong> Seeking product-market fit
					</p>
					<p><strong class="note-text-emphasis">Investment Stage:</strong> Seed</p>
					<p><strong class="note-text-emphasis">Funds Raised to Date:</strong> USD 1.9 million</p>
					<p>
						<strong class="note-text-emphasis">Key Investors:</strong> 1kx, Superscrypt, Tribe Capital
					</p>
					<p><strong class="note-text-emphasis">Accelerators:</strong> Iterative, Plug and Play</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Main Analysis Content -->
	<section id="quick-take">
		<h2 class="note-heading-h2">Quick Take</h2>
		<div class="note-section-break"></div>

		<p class="note-space-md">
			I should mention upfront that I have already invested in BuildBear and worked with them, so I
			am biased here. I was also part of the investment team at Cocoon Capital that offered them a
			term sheet during the seed round, though we were ultimately priced out on valuation. I later
			worked as Operations lead at BuildBear from February 2024 to July 2025. While I no longer work
			there, I am still an investor in the business and friends with the founders. I know both
			founders well and have seen the business from the inside.
		</p>

		<p class="note-space-md">
			BuildBear Labs is one of the more compelling Web3 infrastructure plays I have worked with.
			They have built something genuinely useful that developers actually want to use, evidenced by
			their organic growth to 700+ MAUs without significant marketing spend. The product addresses
			real pain points rather than manufactured problems.
		</p>

		<p class="note-space-md">
			What stands out is their platform approach rather than point solution thinking. The
			sandbox-as-a-service model with plugin marketplace creates genuine network effects and
			switching costs. Unlike most dev tools that solve narrow problems, this could end up being
			infrastructure that developers rely on daily.
		</p>

		<p class="note-space-md">
			Having worked closely with Dipesh and Emmanuel, I can say the founding team has both the
			technical chops and business sense to execute. Dipesh's Web3 experience (Zapper.xyz) gives
			them credibility with both crypto natives and enterprises navigating compliance. Emmanuel's
			Rust expertise and Google ML background means he can build at the technical depth required for
			production-grade infrastructure.
		</p>

		<p class="note-space-md">
			However, timing remains the biggest question mark. Web3 is still early, with market research
			suggesting maybe less than 30,000 active full-time Web3 developers working on sophisticated
			projects, and some research suggesting a lot less than that. Developer tooling typically gets
			commoditised over time, and we are in a bear market where DevTool valuations are compressed.
			They need to capture significant market share before larger players (Alchemy, Infura) or
			traditional DevOps companies like GitLab decide this space is worth their attention.
		</p>

		<p class="note-space-md">
			From what I have seen working inside the business, this is worth backing if the valuation is
			reasonable. The product-market fit signals are there, the team can execute, and the market
			timing, while risky, could work in their favour if Web3 development complexity continues to
			increase. The downside is limited if they stay capital efficient, but the upside is
			significant if they become the default testing infrastructure for Web3.
		</p>
	</section>

	<section id="company-summary">
		<h2 class="note-heading-h2">Company Summary</h2>
		<div class="note-section-break"></div>

		<p class="note-space-md">
			BuildBear Labs is a Singapore-based company that I got to know well during my time there. They
			are building what they call a full-stack DevOps platform for Web3, but what it really comes
			down to is solving a basic problem: Web3 development tooling is rubbish compared to what
			developers expect in Web2.
		</p>

		<p class="note-space-md">
			Their main product is persistent blockchain sandboxes that actually work. Instead of dealing
			with slow, unreliable public testnets that cost money and break constantly, developers get
			private environments that mirror mainnet conditions. They support over 700 EVM-compatible
			networks, which sounds impressive until you realise most developers only care about a handful
			of them.
		</p>

		<p class="note-space-md">
			What made sense to me when I worked with them is that they are not just building another
			testing tool. They are trying to bring Web2-grade reliability to Web3 development with proper
			CI/CD automation and collaboration features. Whether they can execute on that vision while the
			market is still tiny is the real question.
		</p>
	</section>

	<section id="problem-statement">
		<h2 class="note-heading-h2">Problem Statement</h2>
		<div class="note-section-break"></div>

		<p class="note-space-md">
			Having worked in Web3 development environments and served as CTO multiple times, including at
			a VC-backed B2B solution with a team of engineers, I can confirm that the tooling is genuinely
			terrible compared to what you get in Web2. While traditional software teams have proper DevOps
			stacks, CI/CD pipelines, and staging environments that actually work, Web3 developers are
			stuck with fragmented tools, testnets that break constantly, and manual sandboxes that bear no
			resemblance to production.
		</p>

		<p class="note-space-md">
			The numbers tell the story. Projects regularly take eight months and over $500,000 to build,
			with most of that time wasted on testing and debugging. This is not because Web3 is inherently
			complex; it is because the infrastructure is rubbish. But at the same time, the consequences
			of getting it wrong are huge.
		</p>

		<p class="note-space-md">
			The security angle is where it gets serious. That $471 million lost in H1 2023 due to poor
			testing is not an abstract statistic when you have worked with teams struggling with
			unreliable testnets and inadequate simulation environments. Even audited protocols get caught
			out because the testing infrastructure does not reflect real-world conditions. For any Web2
			company used to GitHub Actions and Docker, the Web3 stack feels like stepping back a decade.
		</p>
	</section>

	<section id="vision">
		<h2 class="note-heading-h2">Vision</h2>
		<div class="note-section-break"></div>

		<p class="note-space-md">
			BuildBear wants to be "the GitHub of Web3," which sounds like typical startup hyperbole until
			you see what they are actually building. The vision is to become the default DevOps layer for
			Web3 development, and having worked with them, I think they have a realistic shot at it.
		</p>

		<p class="note-space-md">Their roadmap covers the basics you would expect:</p>

		<ul class="list-disc ml-6 space-y-2 note-space-md">
			<li>
				Chain-agnostic development environment (sensible, since most developers do not want to learn
				new tools for every blockchain)
			</li>
			<li>Plugin marketplace for integrations and analytics (classic platform play)</li>
			<li>Enterprise and auditor adoption for security testing (this is where the money is)</li>
			<li>Expansion into deployment and monitoring (natural evolution)</li>
			<li>Bridge for Web2 companies moving into Web3 (huge market if Web3 ever goes mainstream)</li>
		</ul>

		<p class="note-space-md">
			Their north star is ambitious: no decentralised application should go live without passing
			through BuildBear first. Given how many projects get exploited after launch, this is not as
			unrealistic as it sounds.
		</p>
	</section>

	<section id="market-opportunity">
		<h2 class="note-heading-h2">Market Opportunity</h2>
		<div class="note-section-break"></div>

		<p class="note-space-md">
			The market opportunity story sounds compelling on paper, but the reality is messier. Yes, the
			global software development tools market is projected to grow from $6.6 billion to $19.7
			billion by 2032, but that includes all development tools, not just Web3. The Web3 slice is
			much smaller and more fragmented.
		</p>

		<p class="note-space-md">
			The timing is particularly challenging. While Web3 had momentum at the end of 2024, 2025 has
			seen a sharp drop in interest as the industry shifted focus to AI. The VC funding numbers tell
			the story. Crypto VC fundraising collapsed from $86B in 2022 to $3.7B year-to-date in 2025.
			LPs are backing away from crypto funds, preferring ETFs and AI investments instead.
		</p>

		<p class="note-space-md">
			This creates a difficult environment for Web3 infrastructure companies like BuildBear. Even if
			the technology is solid and the team can execute, they are raising capital in a sector where
			institutional money has largely disappeared and only top-tier funds with exceptional track
			records can attract meaningful capital.
		</p>

		<p class="note-space-md">
			BuildBear likes to quote projections that Web3 developers will grow to 658,000 by 2032. The <a
				href="https://www.developerreport.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="note-link-primary"
			>
				Electric Capital Developer Report 2024
			</a> shows the reality is much more modest: 23,613 monthly active crypto developers in 2024, down
			7% year-over-year. Even accounting for private repositories and enterprise development not captured
			in their GitHub analysis, we are talking about maybe 50,000-80,000 total developers globally, not
			the hundreds of thousands BuildBear is banking on.
		</p>

		<!-- Web3 Developer Growth Projections Chart -->
		<div class="mb-8 note-card-md">
			<h3 class="text-lg font-semibold note-space-md text-center">
				Web3 Developer Growth: Electric Capital Reality vs Projections
			</h3>
			<div class="flex justify-center">
				<LineChart data={developerGrowthData} height={320} width={800} />
			</div>
			<p class="note-text-caption-muted mt-4 text-center">
				Electric Capital data shows 23.6k monthly active developers in 2024 (down 7% YoY).
				BuildBear's 658k projection requires 28x growth from current reality.
			</p>
		</div>

		<p class="note-space-md">
			The chart above shows the gap between hype and reality. Electric Capital's 2024 report reveals
			the developer market actually contracted 7% year-over-year to about 24,000 monthly active
			developers. Even accounting for private repositories and enterprise development they cannot
			track, the total addressable market is probably closer to 50,000-80,000 developers globally,
			nowhere near the explosive growth BuildBear's business model assumes.
		</p>

		<p class="note-space-md">
			The bright spot is developer quality. Electric Capital found that experienced developers (2+
			years) now contribute 70% of code commits and reached an all-time high. This suggests the
			market is professionalising, which plays to BuildBear's enterprise-focused strategy. But it
			also means the addressable market might be smaller but higher-value than the raw numbers
			suggest.
		</p>

		<p class="note-space-md">
			That said, the economics could still work if they focus on the right customers. The projects
			that survive this downturn will likely have better funding and more serious development
			budgets. BuildBear's enterprise-first approach makes sense in this environment, even if the
			overall market is smaller than the hype suggested.
		</p>
	</section>

	<section id="competitive-analysis">
		<h2 class="note-heading-h2">Competitive Analysis</h2>
		<div class="note-section-break"></div>

		<p class="note-space-lg">
			The competitive landscape in Web3 dev tools is fragmented, which works in BuildBear's favour.
			Most players focus on one piece of the puzzle rather than offering a complete solution. Having
			used many of these tools myself, I can see where BuildBear fits and where they have
			advantages.
		</p>

		<!-- Infrastructure Giants -->
		<h3 class="note-heading-h3">Infrastructure Giants</h3>
		<div class="card-grid-3 mb-8">
			<div class="note-card-md">
				<h4 class="note-card-title mb-2">Tenderly</h4>
				<p class="note-text-caption mb-3">Simulation and debugging</p>
				<div class="note-list-sm">
					<p><span class="note-color-success">✓</span> Excellent debugging tools</p>
					<p><span class="note-color-success">✓</span> Good simulation environment</p>
					<p><span class="note-color-error">✗</span> No persistent environments</p>
				</div>
				<div class="mt-3 note-text-label">
					Threat Level: <span class="note-color-risk-high">High</span> (closest competitor)
				</div>
			</div>

			<div class="note-card-md">
				<h4 class="note-card-title mb-2">Alchemy</h4>
				<p class="note-text-caption mb-3">Node infrastructure leader</p>
				<div class="note-list-sm">
					<p><span class="note-color-success">✓</span> Massive scale, reliable RPC</p>
					<p><span class="note-color-error">✗</span> Basic testing capabilities</p>
					<p><span class="note-color-error">✗</span> Not focused on dev tooling</p>
				</div>
				<div class="mt-3 note-text-label">
					Threat Level: <span class="note-color-warning">Medium</span> (resources to expand)
				</div>
			</div>

			<div class="note-card-md">
				<div class="note-list-sm">
					<p><span class="note-color-success">✓</span> Enterprise credibility</p>
					<p><span class="note-color-success">✓</span> Strong institutional ties</p>
					<p><span class="note-color-error">✗</span> Limited development workflow tools</p>
				</div>
				<div class="mt-3 note-text-label">
					Threat Level: <span class="note-color-warning">Medium</span> (could bundle)
				</div>
			</div>
		</div>

		<!-- Developer Tools -->
		<h3 class="note-heading-h3">Developer Tools</h3>
		<div class="card-grid-3 note-space-lg">
			<div class="note-card-md">
				<h4 class="note-card-title mb-2">Foundry</h4>
				<p class="note-text-caption mb-3">Testing framework standard</p>
				<div class="note-list-sm">
					<p><span class="note-color-success">✓</span> Excellent testing capabilities</p>
					<p><span class="note-color-success">✓</span> Developer favourite</p>
					<p><span class="note-color-error">✗</span> Complex setup and maintenance</p>
				</div>
				<div class="mt-3 note-text-label">
					Threat Level: <span class="note-color-success">Low</span> (complementary)
				</div>
			</div>

			<div class="note-card-md">
				<h4 class="note-card-title mb-2">Hardhat Network</h4>
				<p class="note-text-caption mb-3">Local development environment</p>
				<div class="note-list-sm">
					<p><span class="note-color-success">✓</span> Good for solo development</p>
					<p><span class="note-color-success">✓</span> Easy to start with</p>
					<p><span class="note-color-error">✗</span> Poor collaboration features</p>
				</div>
				<div class="mt-3 note-text-label">
					Threat Level: <span class="note-color-success">Low</span> (different use case)
				</div>
			</div>

			<div class="note-card-md">
				<h4 class="note-card-title mb-2">Remix IDE</h4>
				<p class="note-text-caption mb-3">Browser-based development</p>
				<div class="note-list-sm">
					<p><span class="note-color-success">✓</span> Great for prototyping</p>
					<p><span class="note-color-success">✓</span> Has BuildBear plugin</p>
					<p><span class="note-color-error">✗</span> Limited production use</p>
				</div>
				<div class="mt-3 note-text-label">
					Threat Level: <span class="note-color-success">Partnership</span> (distribution channel)
				</div>
			</div>
		</div>

		<div class="note-card-sm">
			<h4 class="note-card-title mb-2">BuildBear's Competitive Edge</h4>
			<p class="note-text-caption">
				Comprehensive without being complicated. Most competitors either do one thing well or try to
				do everything poorly. The persistent environments with proper CI/CD integration is genuinely
				differentiated, at least for now.
			</p>
		</div>
	</section>

	<section id="strategic-positioning">
		<h2 class="note-heading-h2">Strategic Positioning</h2>
		<div class="note-section-break"></div>

		<p class="note-space-md">
			BuildBear is not trying to be just another debugging tool or local development framework. They
			are positioning themselves as the DevOps layer for Web3, similar to what GitHub, Docker, and
			Vercel did for traditional web development. From my time working with them, this positioning
			makes sense and is actually achievable.
		</p>

		<p class="note-space-md">
			The platform approach creates real defensibility. Once teams start using shared environments
			and integrating BuildBear into their workflows, switching becomes painful. The plugin
			ecosystem adds another layer of lock-in. From what I observed, it does seem to get harder to
			migrate away once you are deeply integrated.
		</p>
	</section>

	<section id="business-model">
		<h2 class="note-heading-h2">Business & Revenue Model</h2>
		<div class="note-section-break"></div>

		<p class="note-space-md">
			BuildBear runs a straightforward SaaS model with four pricing tiers. From what I saw working
			on their operations, the unit economics seem to work and the pricing feels reasonable for what
			you get.
		</p>

		<div class="info-callout-blue">
			<p class="text-sm text-blue-200">
				<strong>Pricing Update (August 2025):</strong> BuildBear introduced a new four-tier pricing model
				with clearer value propositions and Resource Unit (RU) based usage tracking, replacing the previous
				transaction-based system.
			</p>
		</div>

		<h3 class="note-heading-h3">How They Make Money</h3>

		<!-- Revenue Stream Cards -->
		<div class="card-grid-2 note-space-lg">
			<!-- Subscription Tiers -->
			<div class="note-card-md">
				<div class="flex items-center note-space-md">
					<div class="w-3 h-3 note-dot-info rounded-full mr-3"></div>
					<h4 class="note-card-title">Subscription Tiers</h4>
				</div>
				<div class="space-y-3 text-sm">
					<div class="flex justify-between items-center py-2 border-b border-slate-600">
						<div>
							<span class="font-medium note-text-emphasis">Explorer</span>
							<span class="note-color-success ml-2">Free</span>
						</div>
						<span class="text-gray-400">2 sandboxes, 1k RU</span>
					</div>
					<div class="flex justify-between items-center py-2 border-b border-slate-600">
						<div>
							<span class="font-medium note-text-emphasis">Developer</span>
							<span class="text-blue-400 ml-2">$49/mo</span>
						</div>
						<span class="text-gray-400">5 sandboxes, 2k RU</span>
					</div>
					<div class="flex justify-between items-center py-2 border-b border-slate-600">
						<div>
							<span class="font-medium note-text-emphasis">Team</span>
							<span class="text-purple-400 ml-2">$199/mo</span>
						</div>
						<span class="text-gray-400">30 sandboxes, 5k RU</span>
					</div>
					<div class="flex justify-between items-center py-2">
						<div>
							<span class="font-medium note-text-emphasis">Enterprise</span>
							<span class="note-color-risk-high ml-2">$499+/mo</span>
						</div>
						<span class="text-gray-400">Unlimited, custom</span>
					</div>
				</div>
			</div>

			<!-- Usage-Based Revenue -->
			<div class="note-card-md">
				<div class="flex items-center note-space-md">
					<div class="w-3 h-3 note-dot-success rounded-full mr-3"></div>
					<h4 class="text-lg font-semibold note-color-success">Resource Units</h4>
				</div>
				<p class="note-text-caption mb-3">
					Smart usage-based pricing that accounts for computational complexity, not just transaction
					volume.
				</p>
				<div class="note-list-sm">
					<p><span class="note-color-success">✓</span> Prevents gaming the system</p>
					<p><span class="note-color-success">✓</span> Aligns pricing with costs</p>
					<p><span class="note-color-success">✓</span> Scales with customer usage</p>
				</div>
			</div>

			<!-- Plugin Marketplace -->
			<div class="note-card-md">
				<div class="flex items-center note-space-md">
					<div class="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
					<h4 class="text-lg font-semibold text-purple-400">Plugin Marketplace</h4>
				</div>
				<div class="flex items-center justify-between mb-3">
					<span class="text-2xl font-bold text-purple-400">30%</span>
					<span class="note-text-caption-muted">revenue share</span>
				</div>
				<p class="note-text-caption mb-3">
					The platform play. Third-party developers build tools, BuildBear takes 30%.
				</p>
				<div class="note-text-label">
					High-margin revenue that scales with ecosystem growth
				</div>
			</div>

			<!-- Enterprise Deals -->
			<div class="note-card-md">
				<div class="flex items-center note-space-md">
					<div class="w-3 h-3 note-dot-warning rounded-full mr-3"></div>
					<h4 class="text-lg font-semibold note-color-risk-high">Enterprise Deals</h4>
				</div>
				<div class="flex items-center justify-between mb-3">
					<span class="text-2xl font-bold note-color-risk-high">$10k+</span>
					<span class="note-text-caption-muted">annual ACV</span>
				</div>
				<div class="space-y-2 note-text-caption">
					<p>• Custom deployments</p>
					<p>• On-premise options</p>
					<p>• SLAs and consulting</p>
				</div>
			</div>
		</div>

		<div class="note-card-sm note-space-lg">
			<p class="note-text-caption">
				<strong class="text-blue-400">The model works</strong> because it scales with customer success.
				Start free, grow into paid tiers as projects get serious, upgrade as teams expand. The plugin
				marketplace creates additional stickiness and higher-margin revenue.
			</p>
		</div>
	</section>

	<section id="traction">
		<h2 class="note-heading-h2">Traction</h2>
		<div class="note-section-break"></div>

		<p class="note-space-md">
			The numbers look good, and having been inside the business, I can say they reflect real usage
			rather than vanity metrics. The growth acceleration from Q4 2024 through Q1 2025 has been
			noticeable.
		</p>

		<!-- Interactive Metrics Cards -->
		<div class="card-grid-metrics">
			<div class="metric-card">
				<div class="text-2xl font-bold text-blue-400">700+</div>
				<div class="note-text-caption">Monthly Active Users</div>
				<div class="text-xs note-color-success mt-1">↗ 49% growth (Jan-Jul 2025)</div>
			</div>
			<div class="metric-card">
				<div class="text-2xl font-bold text-blue-400">250K+</div>
				<div class="note-text-caption">Total Sandboxes</div>
				<div class="text-xs note-color-success mt-1">↗ 13x growth (Mar-Jul 2025)</div>
			</div>
			<div class="metric-card">
				<div class="text-2xl font-bold text-blue-400">81%</div>
				<div class="note-text-caption">2-Month Retention</div>
				<div class="text-xs note-color-success mt-1">↗ From 72% (Q1 2025 baseline)</div>
			</div>
		</div>

		<h3 class="note-heading-h3">What the Numbers Actually Mean</h3>
		<p class="note-space-md">
			700+ monthly active users might not sound massive, but in the Web3 developer space, this is
			decent traction. The 49% growth from January to July 2025 shows sustained momentum, not just a
			one-time spike.
		</p>

		<p class="note-space-md">
			The sandbox growth is more impressive: 250,000+ total sandboxes created with 13x growth from
			March to July 2025. This suggests developers are not just trying the platform once; they are
			using it regularly. When sandbox creation jumps from under 3,000 per month to over 40,000,
			that indicates real product-market fit.
		</p>

		<p class="note-space-md">
			The retention numbers tell the real story. Two-month retention improving from 72% (Q1 2025
			baseline) to 81% means the product is getting stickier. In developer tools, if people come
			back after two months, they usually stick around.
		</p>

		<h3 class="note-heading-h3">Growth Pattern</h3>
		<p class="note-space-md">
			What I found encouraging during my time there was the acceleration starting in Q4 2024. Both
			user acquisition and usage intensity increased together, which suggests the product hit an
			inflection point rather than just benefiting from market timing. When sandbox creation per
			user goes up alongside total users, that is genuine product-market fit.
		</p>
	</section>

	<section id="strategy-roadmap">
		<h2 class="note-heading-h2">Strategy & Roadmap</h2>
		<div class="note-section-break"></div>

		<h3 class="note-heading-h3">What They Are Actually Building Toward</h3>
		<p class="note-space-lg">
			The strategy is sensible. Become the default testing layer for Web3 developers, then expand
			from there. Having watched the team execute, I think they understand the importance of nailing
			one thing before trying to own everything.
		</p>

		<div class="note-card-md mb-8">
			<h4 class="text-lg font-semibold text-center note-space-md">Core Strategy Progression</h4>
			<div class="flex items-center justify-center space-x-8 text-center">
				<div class="flex flex-col items-center">
					<div
						class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2"
					>
						1
					</div>
					<p class="note-text-caption max-w-24">Nail testing infrastructure</p>
				</div>
				<div class="text-gray-500 text-2xl">→</div>
				<div class="flex flex-col items-center">
					<div
						class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2"
					>
						2
					</div>
					<p class="note-text-caption max-w-24">Build platform ecosystem</p>
				</div>
				<div class="text-gray-500 text-2xl">→</div>
				<div class="flex flex-col items-center">
					<div
						class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2"
					>
						3
					</div>
					<p class="note-text-caption max-w-24">Own full DevOps lifecycle</p>
				</div>
			</div>
		</div>

		<h3 class="note-heading-h3">Near Term Focus (Next 12-18 Months)</h3>
		<p class="note-space-md">The immediate priorities make sense given where the product is today.</p>

		<div class="grid md:grid-cols-2 gap-4 note-space-lg not-prose">
			<div class="note-card-md">
				<div class="flex items-center note-space-md">
					<div class="w-3 h-3 note-dot-warning rounded-full mr-3"></div>
					<h4 class="text-lg font-semibold note-color-risk-high">High Priority</h4>
				</div>
				<div class="space-y-3 text-sm">
					<div class="flex items-start space-x-3">
						<span class="note-color-risk-high font-bold">•</span>
						<div>
							<p class="font-medium note-text-emphasis">Integration Everywhere</p>
							<p class="text-gray-400">GitHub Actions, CI/CD pipelines, existing dev tools</p>
						</div>
					</div>
					<div class="flex items-start space-x-3">
						<span class="note-color-risk-high font-bold">•</span>
						<div>
							<p class="font-medium note-text-emphasis">Free → Paid Conversion</p>
							<p class="text-gray-400">Unit economics need to work for scale</p>
						</div>
					</div>
				</div>
			</div>

			<div class="note-card-md">
				<div class="flex items-center note-space-md">
					<div class="w-3 h-3 note-dot-info rounded-full mr-3"></div>
					<h4 class="note-card-title">Medium Priority</h4>
				</div>
				<div class="space-y-3 text-sm">
					<div class="flex items-start space-x-3">
						<span class="text-blue-400 font-bold">•</span>
						<div>
							<p class="font-medium note-text-emphasis">Chain Partnerships</p>
							<p class="text-gray-400">L1s/L2s as distribution channels</p>
						</div>
					</div>
					<div class="flex items-start space-x-3">
						<span class="text-blue-400 font-bold">•</span>
						<div>
							<p class="font-medium note-text-emphasis">Plugin Marketplace</p>
							<p class="text-gray-400">30% revenue share model + community building</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="space-y-4 mb-8">
			<p>
				<strong>Integration everywhere.</strong> Getting BuildBear into existing developer workflows
				through GitHub Actions, CI/CD pipelines, and the tools people already use like Remix. This is
				smart because friction kills adoption.
			</p>
			<p>
				<strong>Chain partnerships.</strong> Working with L1s and L2s to become their recommended testing
				solution. I have seen some of these partnerships in action, and they provide good distribution
				channels.
			</p>
			<p>
				<strong>Plugin marketplace.</strong> The 30% revenue share model needs developer buy in to work.
				Early signs are encouraging, but this requires sustained community building.
			</p>
			<p>
				<strong>Free to paid conversion.</strong> Moving users from Explorer to Developer tiers through
				usage based pricing. The unit economics need to work here for the business model to scale.
			</p>
		</div>

		<h3 class="note-heading-h3">Long Term Vision (2+ Years)</h3>
		<div class="note-card-md note-space-lg">
			<h4 class="text-xl font-semibold text-purple-400 note-space-md">
				Become the Operating System for Web3 Development
			</h4>

			<div class="grid md:grid-cols-3 gap-6 note-space-md">
				<div class="text-center">
					<div
						class="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3"
					>
						<span class="text-purple-400 text-2xl">⚒️</span>
					</div>
					<h5 class="font-medium note-text-emphasis mb-2">Testing Foundation</h5>
					<p class="note-text-label">Current strength</p>
				</div>
				<div class="text-center">
					<div
						class="w-16 h-16 note-bg-info rounded-lg flex items-center justify-center mx-auto mb-3"
					>
						<span class="text-blue-400 text-2xl">🚀</span>
					</div>
					<h5 class="font-medium note-text-emphasis mb-2">Deployment</h5>
					<p class="note-text-label">Next expansion</p>
				</div>
				<div class="text-center">
					<div
						class="w-16 h-16 note-bg-success rounded-lg flex items-center justify-center mx-auto mb-3"
					>
						<span class="note-color-success text-2xl">📊</span>
					</div>
					<h5 class="font-medium note-text-emphasis mb-2">Monitoring</h5>
					<p class="note-text-label">Full DevOps lifecycle</p>
				</div>
			</div>
		</div>

		<p class="note-space-md">
			The big picture is ambitious. Becoming the operating system for Web3 development. This means
			expanding beyond testing into deployment, monitoring, and the full DevOps lifecycle.
		</p>
		<p class="note-space-md">
			From what I saw working with enterprise clients in Web3, there seems to be demand for
			integrated toolchains rather than point solutions. If BuildBear can own more of the developer
			experience from prototype to production, that would create some switching costs, though
			execution is everything.
		</p>
		<p class="note-space-md">
			The question is execution and timing. Web3 tooling is still fragmented, which creates
			opportunity but also means the market might not be ready for a full stack solution. The team
			seems to understand this. They are building horizontally from a strong testing foundation
			rather than trying to solve everything at once.
		</p>

		<h3 class="note-heading-h3">What Could Go Wrong</h3>
		<div class="info-callout-red">
			<p class="note-text-caption">
				<strong class="note-color-error">⚠️ Key Risk:</strong> Strategy assumes continued Web3 adoption and
				developer growth. If the space stagnates, BuildBear becomes a niche tool for a niche market.
				Enterprise focus helps hedge this risk, but execution remains the key variable.
			</p>
		</div>
	</section>

	<section id="financial-forecast">
		<h2 class="note-heading-h2">Financial Forecast</h2>
		<div class="note-section-break"></div>

		<!-- ARR Target Callout -->
		<div class="bg-green-900/30 border border-green-600/50 p-6 rounded-lg mb-8 text-center">
			<div class="text-4xl font-bold note-color-success mb-2">$60M ARR</div>
			<div class="text-lg note-text-body mb-2">Target by end of 2027</div>
			<div class="note-text-caption-muted">
				Optimistic but not completely unrealistic given current growth trajectory and enterprise
				interest
			</div>
		</div>

		<h3 class="note-heading-h3">Revenue Stream Breakdown</h3>

		<!-- Revenue Stream Cards -->
		<div class="grid md:grid-cols-2 gap-6 mb-8 not-prose">
			<div class="note-card-md">
				<div class="flex items-center justify-between note-space-md">
					<h4 class="note-card-title">Subscription Revenue</h4>
					<div class="text-2xl font-bold text-blue-400">60%</div>
				</div>
				<div class="note-list-sm">
					<p class="note-text-body">
						Professional and Enterprise plans providing predictable income
					</p>
					<div class="note-bg-info p-3 rounded">
						<p class="text-blue-200 font-medium">Key driver: Team scaling</p>
						<p class="text-blue-300 text-xs">As teams grow, subscription tiers increase</p>
					</div>
				</div>
			</div>

			<div class="note-card-md">
				<div class="flex items-center justify-between note-space-md">
					<h4 class="text-lg font-semibold note-color-success">Usage-Based Revenue</h4>
					<div class="text-2xl font-bold note-color-success">25%</div>
				</div>
				<div class="note-list-sm">
					<p class="note-text-body">Sandbox overages and high-volume teams</p>
					<div class="note-bg-success p-3 rounded">
						<p class="text-green-200 font-medium">Timeline: Meaningful by mid-2026</p>
						<p class="text-green-300 text-xs">Scales with customer success</p>
					</div>
				</div>
			</div>

			<div class="note-card-md">
				<div class="flex items-center justify-between note-space-md">
					<h4 class="text-lg font-semibold note-color-risk-high">Enterprise Deals</h4>
					<div class="text-2xl font-bold note-color-risk-high">10%</div>
				</div>
				<div class="note-list-sm">
					<p class="note-text-body">Custom deployments, SLAs, consulting services</p>
					<div class="note-bg-warning p-3 rounded">
						<p class="text-orange-200 font-medium">Where the real money is</p>
						<p class="text-orange-300 text-xs">High ACV if execution works</p>
					</div>
				</div>
			</div>

			<div class="note-card-md">
				<div class="flex items-center justify-between note-space-md">
					<h4 class="text-lg font-semibold text-purple-400">Marketplace Revenue</h4>
					<div class="text-2xl font-bold text-purple-400">5%</div>
				</div>
				<div class="note-list-sm">
					<p class="note-text-body">30% commission from plugin ecosystem</p>
					<div class="bg-purple-500/20 p-3 rounded">
						<p class="text-purple-200 font-medium">Long-term potential</p>
						<p class="text-purple-300 text-xs">Requires sustained ecosystem growth</p>
					</div>
				</div>
			</div>
		</div>

		<h3 class="note-heading-h3">The Financial Model</h3>

		<!-- Unit Economics -->
		<div class="note-card-md note-space-lg">
			<h4 class="text-lg font-semibold note-color-warning note-space-md">Unit Economics Snapshot</h4>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="text-center">
					<div class="text-2xl font-bold note-color-success mb-1">85%+</div>
					<div class="note-text-caption mb-2">Gross Margins</div>
					<div class="note-text-label">Infrastructure costs relatively fixed</div>
				</div>
				<div class="text-center">
					<div class="text-2xl font-bold text-blue-400 mb-1">Low</div>
					<div class="note-text-caption mb-2">CAC</div>
					<div class="note-text-label">
						Ecosystem partnerships vs traditional SaaS marketing
					</div>
				</div>
				<div class="text-center">
					<div class="text-2xl font-bold text-purple-400 mb-1">High</div>
					<div class="note-text-caption mb-2">Switching Costs</div>
					<div class="note-text-label">Essential workflow integration</div>
				</div>
			</div>
		</div>

		<div class="space-y-4 note-space-lg">
			<p>
				The approach makes sense. Focus on developer adoption first, monetise later. This worked for
				GitHub, Postman, and others in the DevOps space. The question is whether Web3 developer
				tools follow the same playbook.
			</p>
			<p>
				The unit economics look promising from what I saw. High gross margins should be achievable
				since the infrastructure costs are relatively fixed. Customer acquisition through ecosystem
				partnerships and integrations keeps costs low compared to traditional SaaS marketing.
			</p>
			<p>
				The recurring usage model ties revenue to essential developer workflows, which creates
				stickiness. If teams depend on BuildBear for their testing and deployment pipeline,
				switching costs become meaningful.
			</p>
		</div>

		<!-- Reality Check -->
		<div class="info-callout-yellow">
			<h4 class="note-color-warning font-semibold mb-2">📊 Reality Check</h4>
			<p class="note-text-caption">
				The $60M ARR target assumes the Web3 developer market grows significantly and BuildBear
				captures meaningful market share. Given the current market size (~24k active developers per
				Electric Capital), this requires either massive market expansion or very high revenue per
				developer.
			</p>
		</div>
	</section>

	<section id="risk-factors">
		<h2 class="note-heading-h2">Risk Factors & Mitigation</h2>
		<div class="note-section-break"></div>

		<!-- Risk Factor Cards -->
		<div class="space-y-6 mb-8">
			<!-- Web3 Volatility Risk -->
			<div class="risk-card-high">
				<div class="flex items-center justify-between note-space-md">
					<h3 class="note-heading-h3 mb-0 note-color-error">The Web3 Volatility Problem</h3>
					<div class="risk-badge-high">HIGH RISK</div>
				</div>

				<div class="grid md:grid-cols-2 gap-6">
					<div>
						<h4 class="text-sm font-semibold text-red-300 mb-2">Risk</h4>
						<p class="note-text-caption mb-3">
							Web3 is cyclical and unpredictable. When crypto crashes, funding dries up and
							developer activity drops. If Web3 adoption stagnates or regulatory pressure kills
							innovation, BuildBear becomes a niche tool for a shrinking market.
						</p>
					</div>
					<div>
						<h4 class="text-sm font-semibold text-green-300 mb-2">Mitigation</h4>
						<p class="note-text-caption mb-3">
							Chain agnostic approach means not tied to any single protocol. Expansion into
							regulated Web2 environments is smart hedging. Developer tooling tends to be more
							resilient than applications since teams still need to build and test code even in bear
							markets.
						</p>
					</div>
				</div>
			</div>

			<!-- Integration Dependencies Risk -->
			<div class="risk-card-medium">
				<div class="flex items-center justify-between note-space-md">
					<h3 class="note-heading-h3 mb-0 text-amber-400">Integration Dependencies</h3>
					<div class="risk-badge-medium">MEDIUM RISK</div>
				</div>

				<div class="grid md:grid-cols-2 gap-6">
					<div>
						<h4 class="text-sm font-semibold text-amber-300 mb-2">Risk</h4>
						<p class="note-text-caption mb-3">
							Heavily depends on external integrations with toolchains, protocols, and developer
							ecosystems. API changes, ecosystem fragmentation, or platform shifts could break their
							product overnight.
						</p>
					</div>
					<div>
						<h4 class="text-sm font-semibold text-green-300 mb-2">Mitigation</h4>
						<p class="note-text-caption mb-3">
							Focus on open standards and multiple partnerships. Plugin marketplace approach lets
							the community build integrations rather than relying entirely on the core team. Still,
							this remains a structural risk for any infrastructure business.
						</p>
					</div>
				</div>
			</div>

			<!-- Execution Risk -->
			<div class="risk-card-medium">
				<div class="flex items-center justify-between note-space-md">
					<h3 class="note-heading-h3 mb-0 text-amber-400">Execution Risk</h3>
					<div class="risk-badge-medium">MEDIUM RISK</div>
				</div>

				<div class="grid md:grid-cols-2 gap-6">
					<div>
						<h4 class="text-sm font-semibold text-amber-300 mb-2">Risk</h4>
						<p class="note-text-caption mb-3">
							Early stage company trying to build complex infrastructure while scaling a team and
							chasing enterprise deals. Product scaling, hiring, revenue timing, and maintaining
							focus are classic startup challenges that kill most companies.
						</p>
					</div>
					<div>
						<h4 class="text-sm font-semibold text-green-300 mb-2">Mitigation</h4>
						<p class="note-text-caption mb-3">
							Founding team has relevant experience and current traction suggests decent execution
							so far. Lean team size shows capital discipline. But execution risk is always the
							biggest variable with early stage companies, and Web3 adds extra complexity.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Summary Assessment -->
		<div class="note-card-md">
			<h3 class="note-heading-h3 text-slate-300">Risk Assessment Summary</h3>
			<p class="note-text-body note-space-md">
				The risks are real but not unusual for a Web3 infrastructure play. Market risk is partially
				hedged through diversification. Integration risk is managed through open standards and
				community development. Execution risk comes down to the team, and they seem capable based on
				what I have observed.
			</p>

			<div class="grid md:grid-cols-3 gap-4 text-center">
				<div class="note-bg-error p-3 rounded">
					<div class="note-color-error font-semibold">Market Risk</div>
					<div class="text-xs text-red-300">Partially hedged</div>
				</div>
				<div class="note-bg-warning p-3 rounded">
					<div class="text-amber-400 font-semibold">Tech Risk</div>
					<div class="text-xs text-amber-300">Actively managed</div>
				</div>
				<div class="note-bg-warning p-3 rounded">
					<div class="text-amber-400 font-semibold">Execution Risk</div>
					<div class="text-xs text-amber-300">Team dependent</div>
				</div>
			</div>
		</div>
	</section>

	<section id="team">
		<h2 class="note-heading-h2">The Team</h2>
		<div class="note-section-break"></div>

		<p class="note-space-md">
			The founding team has the right mix of technical depth and operational experience. Both
			founders come from backgrounds that matter for this particular problem.
		</p>

		<h3 class="note-heading-h3">The Founders</h3>
		<p class="note-space-md">
			<strong
				>CEO <a
					href="https://www.linkedin.com/in/dipeshsukhani"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-500 hover:text-blue-400 underline">Dipesh Sukhani</a
				></strong
			> has eight years in Web3 development and co founded Zapper.xyz, which became a significant DeFi
			dashboard. His background as an international tax lawyer is actually useful here because it gives
			him credibility with enterprise clients who care about compliance and regulation. He also mentored
			developers at ConsenSys, so he understands the pain points BuildBear is trying to solve.
		</p>
		<p class="note-space-md">
			<strong
				>CTO <a
					href="https://www.linkedin.com/in/emmanuel-antony"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-500 hover:text-blue-400 underline">Emmanuel Antony</a
				></strong
			> is well known in the Rust community for contributing to core language components. Former Google
			Machine Learning Facilitator with expertise in AI and scalable systems. Having worked with the
			technical architecture, I can say Emmanuel understands how to build infrastructure that needs to
			handle complex, persistent environments across multiple blockchain networks.
		</p>

		<h3 class="note-heading-h3">Team Assessment</h3>
		<p class="note-space-md">
			This is a strong technical founding team. Dipesh brings the Web3 domain expertise and
			enterprise credibility. Emmanuel brings the systems engineering skills needed to build complex
			infrastructure. The combination of regulatory knowledge, Web3 experience, and deep technical
			ability is exactly what this problem requires.
		</p>
		<p class="note-space-md">
			The team is currently 12 people split between India and remote locations. They have stayed
			lean while shipping meaningful technical milestones, which suggests good capital discipline
			and execution focus. In my experience, teams that can deliver complex technical products with
			small teams tend to scale better than those that throw people at problems.
		</p>
	</section>

	<section id="investment-thesis">
		<h2 class="note-heading-h2">My Investment Thesis</h2>
		<div class="note-section-break"></div>

		<!-- Investment Summary -->
		<div class="bg-blue-900/20 border border-blue-600/50 p-6 rounded-lg mb-8">
			<p class="text-lg text-blue-200 mb-0">
				I invested in BuildBear because I think they are solving a real problem at the right time
				with a team that can execute. Web3 infrastructure plays are rare, and this one has several
				things going for it.
			</p>
		</div>

		<!-- Investment Thesis Cards -->
		<div class="space-y-6 mb-8">
			<!-- Timing Challenge -->
			<div class="bg-slate-800 border border-slate-600 rounded-lg p-6">
				<div class="flex items-center note-space-md">
					<h3 class="note-heading-h3 mb-0 note-color-warning">The Timing Challenge</h3>
					<div class="ml-4 bg-yellow-500/20 px-3 py-1 rounded text-yellow-300 text-sm">
						KEY RISK
					</div>
				</div>

				<div class="space-y-4 text-sm">
					<div class="note-bg-error p-4 rounded border-l-4 border-red-500">
						<p class="note-text-body mb-2">
							<strong class="text-red-300">The Challenge:</strong> Web3 development has reached the point
							where professional tooling is becoming necessary, but the funding environment is brutal.
							Crypto VC fundraising collapsed from $86B in 2022 to $3.7B year-to-date in 2025.
						</p>
					</div>
					<div class="bg-green-500/10 p-4 rounded border-l-4 border-green-500">
						<p class="note-text-body">
							<strong class="text-green-300">The Opportunity:</strong> Fewer Web3 projects overall, but
							the ones that survive likely have better funding and more serious development needs. BuildBear
							could benefit from this flight to quality if they can position themselves with the right
							customers.
						</p>
					</div>
				</div>
			</div>

			<!-- Platform Potential -->
			<div class="bg-slate-800 border border-slate-600 rounded-lg p-6">
				<h3 class="note-heading-h3 text-purple-400 note-space-md">Platform Potential</h3>
				<div class="bg-purple-500/10 p-4 rounded">
					<p class="note-text-body text-sm mb-3">
						BuildBear is not just building another developer tool. The plugin marketplace and shared
						environments create network effects that get stronger as more developers use the
						platform.
					</p>
					<div class="flex items-center text-purple-300 text-sm">
						<span class="font-semibold">Analogy:</span>
						<span class="ml-2">Similar to how GitHub became essential infrastructure</span>
					</div>
				</div>
			</div>

			<!-- Enterprise Bridge Strategy -->
			<div class="bg-slate-800 border border-slate-600 rounded-lg p-6">
				<h3 class="note-heading-h3 note-color-success note-space-md">Enterprise Bridge Strategy</h3>
				<div class="bg-green-500/10 p-4 rounded">
					<p class="note-text-body text-sm mb-3">
						Most Web3 tools are built for crypto natives and fail when enterprises try to use them.
						BuildBear combines Web3 functionality with enterprise reliability.
					</p>
					<div class="text-green-300 text-sm font-medium">
						Positioning advantage when institutions move seriously into blockchain development
					</div>
				</div>
			</div>
		</div>

		<!-- Tracking Metrics -->
		<div class="note-card-md note-space-lg">
			<h3 class="note-heading-h3 text-blue-400 note-space-md">What I Am Tracking</h3>
			<div class="grid md:grid-cols-2 gap-4">
				<div class="bg-blue-500/10 p-4 rounded">
					<h4 class="text-blue-300 font-semibold mb-2">Conversion Metrics</h4>
					<p class="note-text-body text-sm">
						Do free users actually upgrade to paid tiers as their projects mature?
					</p>
				</div>
				<div class="bg-green-500/10 p-4 rounded">
					<h4 class="text-green-300 font-semibold mb-2">Enterprise Momentum</h4>
					<p class="note-text-body text-sm">
						Can they land meaningful contracts with protocols and institutions?
					</p>
				</div>
				<div class="bg-purple-500/10 p-4 rounded">
					<h4 class="text-purple-300 font-semibold mb-2">Plugin Ecosystem</h4>
					<p class="note-text-body text-sm">
						Does the marketplace generate meaningful third party developer activity?
					</p>
				</div>
				<div class="bg-orange-500/10 p-4 rounded">
					<h4 class="text-orange-300 font-semibold mb-2">Multi-chain Adoption</h4>
					<p class="note-text-body text-sm">
						Usage beyond Ethereum ecosystem shows broader market penetration.
					</p>
				</div>
			</div>
		</div>

		<!-- Risk Calculation -->
		<div class="note-card-md">
			<h3 class="note-heading-h3 text-slate-300 note-space-md">The Risk Calculation</h3>
			<div class="grid md:grid-cols-2 gap-6">
				<div class="note-bg-error p-4 rounded border-l-4 border-red-500">
					<h4 class="text-red-300 font-semibold mb-2">Downside Risk</h4>
					<p class="note-text-body text-sm">
						Web3 infrastructure bet depends on continued adoption and developer growth. If Web3
						stagnates, BuildBear becomes a niche tool.
					</p>
				</div>
				<div class="bg-green-500/10 p-4 rounded border-l-4 border-green-500">
					<h4 class="text-green-300 font-semibold mb-2">Upside Case</h4>
					<p class="note-text-body text-sm">
						Infrastructure tends to be more resilient than applications, and the team has shown they
						can execute in a difficult market.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="valuation">
		<h2 class="note-heading-h2">Valuation & Raise Details</h2>
		<div class="note-section-break"></div>

		<!-- Raise Overview -->
		<div class="note-card-md mb-8">
			<div class="flex items-center justify-between note-space-md">
				<h3 class="note-card-title">Series A Round</h3>
				<div class="note-bg-info px-3 py-1 rounded text-blue-300 text-sm">ACTIVE</div>
			</div>
			<p class="note-text-body mb-0">
				BuildBear is raising a Series A, though the specific valuation is not public. I participated
				in the round alongside existing and new investors.
			</p>
		</div>

		<h3 class="note-heading-h3">Valuation Reality Check</h3>

		<!-- Valuation Range -->
		<div class="note-card-md note-space-lg">
			<div class="flex items-center justify-between note-space-md">
				<h4 class="text-lg font-semibold note-color-success">Market Range</h4>
				<div class="text-2xl font-bold note-color-success">$20M - $100M</div>
			</div>
			<p class="note-text-caption note-space-md">
				Web3 infrastructure companies at this stage typically see valuations in this range depending
				on traction. BuildBear has decent metrics (250K+ sandboxes, 700+ MAUs, 13x growth).
			</p>

			<!-- Valuation Factors -->
			<div class="grid md:grid-cols-2 gap-4">
				<div class="note-bg-error p-4 rounded border-l-4 border-red-500">
					<h5 class="text-red-300 font-semibold mb-2">Headwinds</h5>
					<ul class="note-text-caption space-y-1">
						<li>• DevTool companies get conservative valuations</li>
						<li>• Bear market pricing discipline</li>
						<li>• Web3 sector discount</li>
					</ul>
				</div>
				<div class="bg-green-500/10 p-4 rounded border-l-4 border-green-500">
					<h5 class="text-green-300 font-semibold mb-2">Tailwinds</h5>
					<ul class="note-text-caption space-y-1">
						<li>• Strong traction metrics</li>
						<li>• Comprehensive platform approach</li>
						<li>• Enterprise interest</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="note-space-lg">
			<p class="note-space-md">
				Companies like Alchemy, Infura, and Tenderly raised at higher valuations as Web3 tooling
				demand grew, but current market conditions likely constrain pricing despite BuildBear having
				a more comprehensive platform approach.
			</p>
		</div>

		<h3 class="note-heading-h3">How They Plan to Spend the Money</h3>

		<!-- Funding Estimate -->
		<div class="bg-blue-900/20 border border-blue-600/50 p-4 rounded-lg note-space-lg text-center">
			<div class="text-2xl font-bold text-blue-400 mb-1">$3M - $9M</div>
			<div class="text-sm text-blue-300">
				Estimated raise size given stage and market conditions
			</div>
		</div>

		<!-- Capital Allocation -->
		<div class="space-y-4 note-space-lg">
			<div class="note-card-sm">
				<div class="flex items-center justify-between mb-3">
					<h4 class="note-color-success font-semibold">Team Expansion</h4>
					<div class="text-2xl font-bold note-color-success">45%</div>
				</div>
				<p class="note-text-caption">
					Engineering talent for multi-chain support, debugging tools, and enterprise security
					features. Sales and customer success people for enterprise deals.
				</p>
			</div>

			<div class="note-card-sm">
				<div class="flex items-center justify-between mb-3">
					<h4 class="text-blue-400 font-semibold">Product Development</h4>
					<div class="text-2xl font-bold text-blue-400">30%</div>
				</div>
				<p class="note-text-caption">
					Core platform enhancements including plugin marketplace, analytics dashboards, integration
					capabilities. AI-powered testing recommendations and automated vulnerability detection.
				</p>
			</div>

			<div class="note-card-sm">
				<div class="flex items-center justify-between mb-3">
					<h4 class="text-purple-400 font-semibold">Infrastructure & Scaling</h4>
					<div class="text-2xl font-bold text-purple-400">15%</div>
				</div>
				<p class="note-text-caption">
					Server capacity expansion, performance optimization, enterprise security. Multi-region
					deployment capabilities for enterprise clients.
				</p>
			</div>

			<div class="note-card-sm">
				<div class="flex items-center justify-between mb-3">
					<h4 class="note-color-risk-high font-semibold">Go-to-Market</h4>
					<div class="text-2xl font-bold note-color-risk-high">10%</div>
				</div>
				<p class="note-text-caption">
					Enterprise sales capabilities, marketing to Web3 development teams, conference presence,
					and developer community building.
				</p>
			</div>
		</div>
	</section>

	<section id="exit-paths">
		<h2 class="note-heading-h2">Exit Paths</h2>
		<div class="note-section-break"></div>

		<!-- Exit Overview -->
		<div class="note-card-md mb-8">
			<p class="note-text-body mb-0">
				BuildBear has several potential exit routes, though the timeline depends on how quickly Web3
				tooling becomes mainstream and how well the company executes.
			</p>
		</div>

		<h3 class="note-heading-h3">Most Likely Acquirers</h3>

		<!-- Acquirer Categories -->
		<div class="grid md:grid-cols-2 gap-6 mb-8">
			<div class="bg-blue-900/20 border border-blue-600/50 rounded-lg p-6">
				<div class="flex items-center justify-between note-space-md">
					<h4 class="text-blue-400 font-semibold">Developer Platforms</h4>
					<div class="note-bg-info px-3 py-1 rounded text-blue-300 text-sm font-medium">
						HIGH FIT
					</div>
				</div>
				<div class="space-y-3">
					<div class="bg-blue-500/10 p-3 rounded">
						<p class="text-blue-300 font-medium mb-1">GitHub/Microsoft</p>
						<p class="note-text-caption">
							Already own developer workflow. Web3 testing would be natural extension, similar to
							Codespaces evolution.
						</p>
					</div>
					<div class="bg-blue-500/10 p-3 rounded">
						<p class="text-blue-300 font-medium mb-1">DevOps Platforms</p>
						<p class="note-text-caption">
							Atlassian, GitLab, HashiCorp expanding into blockchain workflows as Web3 becomes
							mainstream.
						</p>
					</div>
				</div>
			</div>

			<div class="bg-green-900/20 border border-green-600/50 rounded-lg p-6">
				<div class="flex items-center justify-between note-space-md">
					<h4 class="note-color-success font-semibold">Infrastructure Players</h4>
					<div class="note-bg-success px-3 py-1 rounded text-green-300 text-sm font-medium">
						STRATEGIC FIT
					</div>
				</div>
				<div class="space-y-3">
					<div class="bg-green-500/10 p-3 rounded">
						<p class="text-green-300 font-medium mb-1">Web3 Infrastructure</p>
						<p class="note-text-caption">
							Alchemy, Infura, ConsenSys could acquire to complete developer stack and offer
							end-to-end tooling.
						</p>
					</div>
					<div class="bg-green-500/10 p-3 rounded">
						<p class="text-green-300 font-medium mb-1">Cloud Providers</p>
						<p class="note-text-caption">
							AWS, Google Cloud, Azure trying to dominate enterprise infrastructure with Web3 as
							part of broader platform strategy.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Exit Scenarios -->
		<div class="space-y-6 mb-8">
			<div class="bg-slate-800 border border-slate-600 rounded-lg p-6">
				<div class="flex items-center justify-between note-space-md">
					<h3 class="note-heading-h3 mb-0 note-color-success">Strategic Acquisition</h3>
					<div class="note-bg-success px-3 py-1 rounded text-green-300 text-sm font-medium">
						MOST LIKELY
					</div>
				</div>
				<div class="grid md:grid-cols-2 gap-6">
					<div>
						<h4 class="text-green-300 font-semibold mb-2">Timeline</h4>
						<p class="note-text-caption mb-3">3-5 years as Web3 infrastructure consolidates</p>
						<h4 class="text-green-300 font-semibold mb-2">Trigger</h4>
						<p class="note-text-caption">
							Enterprise adoption inflection point where Web2 companies systematically adopt Web3
							tooling
						</p>
					</div>
					<div>
						<h4 class="text-green-300 font-semibold mb-2">Strategic Value</h4>
						<ul class="note-text-caption space-y-1">
							<li>• Complete developer workflow coverage</li>
							<li>• Enterprise-ready Web3 capabilities</li>
							<li>• Ecosystem integration advantages</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="bg-slate-800 border border-slate-600 rounded-lg p-6">
				<div class="flex items-center justify-between note-space-md">
					<h3 class="note-heading-h3 mb-0 text-amber-400">IPO Potential</h3>
					<div class="bg-amber-500/20 px-3 py-1 rounded text-amber-300 text-sm font-medium">
						LIMITED
					</div>
				</div>
				<div class="grid md:grid-cols-2 gap-6">
					<div class="bg-green-500/10 p-4 rounded border-l-4 border-green-500">
						<h4 class="text-green-300 font-semibold mb-2">Theoretical Case</h4>
						<p class="note-text-caption">
							If BuildBear hits $60M ARR target by 2027 with strong margins, IPO could work.
							Developer infrastructure companies with recurring revenue get decent public market
							multiples.
						</p>
					</div>
					<div class="note-bg-error p-4 rounded border-l-4 border-red-500">
						<h4 class="text-red-300 font-semibold mb-2">Reality Check</h4>
						<p class="note-text-caption">
							Web3 market still relatively small. For IPO scale, Web3 would need to become default
							for application development rather than niche specialty. That level of adoption could
							take years.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="open-questions">
		<h2 class="note-heading-h2">Open Questions</h2>
		<div class="note-section-break"></div>

		<p class="note-space-md">
			Despite working with the team and having insider access, there are still things I am watching
			closely or would like to understand better.
		</p>

		<ul class="list-disc ml-6 space-y-2 note-space-md">
			<li>
				How quickly can they convert free users to paid tiers as projects mature? The unit economics
				depend on this working at scale.
			</li>
			<li>
				What happens when Alchemy, Infura, or other infrastructure players decide to build competing
				testing environments? Competition could get intense quickly.
			</li>
			<li>
				Can the plugin marketplace generate meaningful third party revenue, or will it remain a nice
				to have feature that does not move the business?
			</li>
			<li>
				How will enterprise sales cycles actually play out? Web3 enterprise deals can be
				unpredictable and slow.
			</li>
			<li>
				Does the Web3 developer market grow fast enough to support their revenue projections, or are
				they too optimistic about adoption timing?
			</li>
		</ul>

		<p class="note-space-md">
			These are the variables that will determine whether BuildBear becomes a meaningful business or
			remains a useful but niche tool. Most of them come down to execution and market timing, which
			are always the hardest things to predict.
		</p>
	</section>

	<section id="references">
		<h2 class="note-heading-h2">References & Data Sources</h2>
		<div class="note-section-break"></div>

		<h3 class="note-heading-h3">Company Information</h3>
		<ul class="list-disc ml-6 space-y-1 note-space-md note-text-body">
			<li>
				<a
					href="https://buildbear.io"
					target="_blank"
					rel="noopener noreferrer"
					class="note-link-primary"
				>
					BuildBear Labs official website
				</a>
				and documentation
			</li>
			<li>Company pitch deck and investor materials (Series A, 2025)</li>
			<li>Internal traction metrics and user analytics (2024-2025)</li>
			<li>Team LinkedIn profiles and professional backgrounds</li>
		</ul>

		<h3 class="note-heading-h3">Market Research</h3>
		<ul class="list-disc ml-6 space-y-1 note-space-md note-text-body">
			<li>
				<a
					href="https://www.developerreport.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="note-link-primary"
				>
					Electric Capital Developer Report 2024
				</a>
				- Comprehensive analysis of crypto developer activity and trends
			</li>
			<li>Global software development tools market reports (2024)</li>
			<li>
				<a
					href="https://www.alchemy.com/developer-report-2023"
					target="_blank"
					rel="noopener noreferrer"
					class="note-link-primary"
				>
					Web3 developer ecosystem studies and surveys
				</a>
			</li>
			<li>
				<a
					href="https://rekt.news"
					target="_blank"
					rel="noopener noreferrer"
					class="note-link-primary"
				>
					Blockchain security incident reports
				</a>
				(H1 2023 data)
			</li>
			<li>Developer tooling spend analysis and industry benchmarks</li>
		</ul>

		<h3 class="note-heading-h3">Competitive Intelligence</h3>
		<ul class="list-disc ml-6 space-y-1 note-space-md note-text-body">
			<li>
				Public information on
				<a
					href="https://alchemy.com"
					target="_blank"
					rel="noopener noreferrer"
					class="note-link-primary"
				>
					Alchemy
				</a>,
				<a
					href="https://infura.io"
					target="_blank"
					rel="noopener noreferrer"
					class="note-link-primary"
				>
					Infura
				</a>,
				<a
					href="https://tenderly.co"
					target="_blank"
					rel="noopener noreferrer"
					class="note-link-primary"
				>
					Tenderly
				</a>
				funding and metrics
			</li>
			<li>Developer tool ecosystem mapping and feature comparisons</li>
			<li>Web3 infrastructure provider positioning and pricing</li>
			<li>
				Traditional DevOps platform analogies (
				<a
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
					class="note-link-primary"
				>
					GitHub
				</a>,
				<a
					href="https://docker.com"
					target="_blank"
					rel="noopener noreferrer"
					class="note-link-primary"
				>
					Docker
				</a>,
				<a
					href="https://vercel.com"
					target="_blank"
					rel="noopener noreferrer"
					class="note-link-primary"
				>
					Vercel
				</a>)
			</li>
		</ul>

		<h3 class="note-heading-h3">Industry Analysis</h3>
		<ul class="list-disc ml-6 space-y-1 note-space-md note-text-body">
			<li>Web3 development lifecycle and pain point research</li>
			<li>Enterprise blockchain adoption trends and forecasts</li>
			<li>
				Accelerator program data (
				<a
					href="https://iterative.vc"
					target="_blank"
					rel="noopener noreferrer"
					class="note-link-primary"
				>
					Iterative
				</a>,
				<a
					href="https://plugandplay.vc"
					target="_blank"
					rel="noopener noreferrer"
					class="note-link-primary"
				>
					Plug and Play
				</a>)
			</li>
			<li>Investment thesis frameworks for infrastructure companies</li>
		</ul>

		<h3 class="note-heading-h3">Disclosure</h3>
		<p class="note-text-caption-muted mt-6">
			This analysis combines publicly available information with insights gained during my time as
			Operations Lead at BuildBear Labs (February 2024 - July 2025). All forward-looking statements
			and projections are based on available data and should be considered estimates subject to
			significant uncertainty.
		</p>
	</section>
</DetailedNote>
