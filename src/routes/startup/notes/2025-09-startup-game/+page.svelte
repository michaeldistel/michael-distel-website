<script lang="ts">
	import DetailedNote from '$lib/components/notes/DetailedNote.svelte';

	// Section data for navigation
	const sections = [
		{ id: 'purpose', title: 'Purpose of this document' },
		{ id: 'quick-take', title: 'Quick Take' },
		{ id: 'company-summary', title: 'Startup Idea Summary' },
		{ id: 'vision', title: 'Vision' },
		{ id: 'concept', title: 'The Game Concept' },
		{ id: 'market-opportunity', title: 'Market Opportunity' },
		{ id: 'competitive-landscape', title: 'Competitive Analysis' },
		{ id: 'business-model', title: 'Business & Revenue Model' },
		{ id: 'monetisation', title: 'Monetisation Strategy' },
		{ id: 'go-to-market', title: 'Go-To-Market Strategy' },
		{ id: 'key-metrics', title: 'Key Metrics' },
		{ id: 'development-roadmap', title: 'Strategy & Roadmap' },
		{ id: 'financial-forecast', title: 'Financial Forecast' },
		{ id: 'team', title: 'The Team' },
		{ id: 'risks', title: 'Risk Factors & Mitigation' },
		{ id: 'investment-thesis', title: 'My Investment Thesis' },
		{ id: 'valuation-raise', title: 'Valuation & Raise Details' },
		{ id: 'exit-paths', title: 'Exit Paths' },
		{ id: 'open-questions', title: 'Open Questions' },
		{ id: 'references', title: 'References' }
	];

	// Component bindings
	let detailedNote: DetailedNote;

	// Breadcrumbs for this note
	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Startup', href: '/startup' },
		{ label: 'Notes', href: '/startup/notes' },
		{ label: 'The Startup Game Note' }
	];
</script>

<svelte:head>
	<title>The Startup Game Note - Michael Distel</title>
	<meta
		name="description"
		content="Analysis of a gaming startup creating an educational simulation game about building startups. Exploring the intersection of entertainment, education, and entrepreneurship."
	/>
	<meta property="og:title" content="The Startup Game Note - Michael Distel" />
	<meta
		property="og:description"
		content="Analysis of a gaming startup creating an educational simulation game about building startups."
	/>
	<meta property="og:type" content="article" />
</svelte:head>

<DetailedNote
	bind:this={detailedNote}
	title="The Startup Game"
	description="Educational Gaming Meets Entrepreneurship"
	publishDate="21 August 2025"
	{sections}
	{breadcrumbs}
>
	<!-- Startup Overview in the overview slot -->
	<section slot="overview" class="note-space-xl note-card-md">
		<h2 class="note-heading-h2">Startup Overview</h2>
		<div class="note-section-break"></div>

		<div class="grid md:grid-cols-2 note-gap-xl">
			<!-- Company Details -->
			<div>
				<h3 class="note-heading-h3">Company Details</h3>
				<div class="note-list">
					<p><strong class="note-text-emphasis">Registered Name:</strong> N/A</p>
					<p><strong class="note-text-emphasis">Location:</strong> Singapore</p>
					<p><strong class="note-text-emphasis">Team Size:</strong> 2</p>
				</div>
			</div>

			<!-- Stage & Investment -->
			<div>
				<h3 class="note-heading-h3">Stage & Investment</h3>
				<div class="note-list">
					<p><strong class="note-text-emphasis">Startup Stage:</strong> Concept</p>
					<p><strong class="note-text-emphasis">Investment Stage:</strong> Pre-Funding</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Purpose of this document -->
	<section id="purpose" class="note-section">
		<h2 class="note-heading-h2">Purpose of this document</h2>
		<div class="note-section-break"></div>

		<p>
			This is not a deep analysis but a way to explore and share my thoughts about the founder's
			business idea. It sits somewhere between an off-the-cuff comment and a full analysis that an
			associate at a VC firm would do for their investment memo.
		</p>

		<p>
			This analysis is based on conversations with the founder, publicly available information, and
			standard business evaluation frameworks. It represents my personal perspective and should not
			be considered formal investment advice or a comprehensive due diligence report.
		</p>
	</section>

	<!-- Quick Take -->
	<section id="quick-take" class="note-section">
		<h2 class="note-heading-h2">Quick Take</h2>
		<div class="note-section-break"></div>

		<p class="note-space-md">
			The Startup Games is an ambitious attempt to reimagine founder education through a gamified
			simulation powered by AI. The product vision is clear and differentiated, with strong
			potential for engagement and learning. However, the business side is less convincing. The
			addressable market is limited, monetisation through consumers will be difficult, and
			institutional adoption is slow. Revenue forecasts show a viable company but not a
			venture-scale one, which raises questions about fit with traditional VC. The concept may be
			better suited to strategic investors, accelerators, or corporates who value impact and steady
			growth rather than outsized returns.
		</p>
	</section>

	<!-- Company Summary -->
	<section id="company-summary" class="note-section">
		<h2 class="note-heading-h2">Startup Idea Summary</h2>
		<div class="note-section-break"></div>

		<p class="note-space-md">
			The Startup Games is a gamified simulator powered by a custom-built AI engine. At its core is
			a rule-based system that generates dynamic scenarios and interactions, combining structured
			outcomes with randomly generated events. Players take on roles such as founder, investor, or
			team member and navigate realistic startup situations including fundraising pressure, user
			retention challenges, and strategic pivots.
		</p>

		<p class="note-space-md">
			Gameplay blends actions, which directly influence startup metrics like valuation, revenue, and
			daily active users, with discussions, which capture peer advice, debate, and investor
			feedback. The AI system ensures that no two playthroughs are the same, creating a balance
			between structured learning and unpredictable real-world dynamics.
		</p>

		<p class="note-space-md">
			The result is an experiential and social platform where users can practise the realities of
			entrepreneurship. Unlike traditional business simulations that focus narrowly on financial
			models, The Startup Games delivers narrative, role-play, and emotional decision-making through
			AI-driven scenarios that feel authentic and immersive.
		</p>

		<p class="note-space-md">
			What is missing is a stronger case for urgency and necessity. The product vision is clear, but
			it does not yet answer why this is the right time to launch or whether it solves a must-have
			problem rather than a nice-to-have gap. The description explains what the product is, but it
			gives less attention to the business side how it will generate revenue, scale, and become
			sustainable. Without sharper articulation of why now and why essential, the idea risks
			sounding more like an interesting concept than a fundable startup.
		</p>
	</section>

	<!-- Vision -->
	<section id="vision" class="note-section">
		<h2 class="note-heading-h2">Vision</h2>
		<div class="note-section-break"></div>

		<p class="note-space-md">
			When the Founder started his own startup, he discovered firsthand how many new founders lack
			reliable guidance and structured knowledge. This observation reflects a broader reality:
			early-stage entrepreneurs often face critical knowledge gaps that undermine their ability to
			make informed decisions. A 2024 systematic review found that foundational decisions like
			product strategy, team structure, and market focus are still poorly supported in academic and
			practical resources, limiting the development of effective tools for founders.
		</p>

		<p class="note-space-md">
			Financial know-how, in particular, remains a widespread weakness. A recent survey reveals that
			half of small business owners face fiscal challenges linked to insufficient financial literacy
			even though 55 percent rate their skills as high. Fifteen percent of respondents had not yet
			recovered from financial missteps. The implications are serious: gaps in budgeting, cash flow,
			and metrics interpretation create real obstacles for business survival.
		</p>

		<p class="note-space-md">
			Taken together, these findings show that founders often venture into building startups with
			limited support, especially around critical business competencies. This insight lies at the
			heart of the Founder's vision for The Startup Games, a platform designed to fill that gap by
			allowing aspiring entrepreneurs to learn through immersive, scenario-based gameplay rather
			than trial and error.
		</p>
	</section>

	<!-- Game Concept -->
	<section id="concept" class="note-section">
		<h2 class="note-heading-h2">The Game Concept</h2>
		<div class="note-section-break"></div>

		<h3 class="note-heading-h3">Core Gameplay</h3>
		<p>
			Players start with a basic idea and limited resources, making strategic decisions across
			multiple dimensions:
		</p>

		<ul>
			<li>
				<strong>Product Development:</strong> Feature prioritisation, technical debt management, user
				feedback integration
			</li>
			<li>
				<strong>Market Strategy:</strong> Customer acquisition, pricing models, market positioning
			</li>
			<li>
				<strong>Team Building:</strong> Hiring decisions, equity distribution, culture development
			</li>
			<li>
				<strong>Fundraising:</strong> Pitch preparation, investor negotiations, valuation discussions
			</li>
			<li>
				<strong>Operations:</strong> Resource allocation, scaling challenges, crisis management
			</li>
		</ul>

		<h3 class="note-heading-h3">Game Mechanics</h3>
		<p>
			The game incorporates various mechanics to maintain engagement while delivering educational
			value:
		</p>

		<div class="note-info-box">
			<h4 class="note-card-title">Key Features</h4>
			<ul>
				<li>
					<strong>Dynamic Events:</strong> Market crashes, competitor actions, regulatory changes
				</li>
				<li><strong>Resource Management:</strong> Capital, time, team capacity constraints</li>
				<li>
					<strong>Networking System:</strong> Building relationships with investors, advisors, partners
				</li>
				<li>
					<strong>Multiple Endings:</strong> IPO, acquisition, failure, lifestyle business outcomes
				</li>
				<li>
					<strong>Real-world Data:</strong> Market conditions based on actual industry metrics
				</li>
			</ul>
		</div>
	</section>

	<!-- Market Opportunity -->
	<section id="market-opportunity" class="note-section">
		<h2 class="note-heading-h2">Market Opportunity</h2>
		<div class="note-section-break"></div>

		<p class="note-space-md">
			Many people worry that the startup market might feel too niche. How many new founders are
			there, after all? It helps to look at the numbers. Every year, globally, around 50 million new
			startups are launched that work out to roughly 137,000 new ventures each day DemandSage
			Source. In the United States alone, over 5 million new business applications were filed in
			2023, marking a continuing upward trend that started during the pandemic Commerce Institute AP
			News.
		</p>

		<p class="note-space-md">
			Still, while those figures are large, they also include a wide range of small businesses, many
			are side hustles or lifestyle ventures, not necessarily high-growth, venture-scale startups
			that would engage deeply with The Startup Games. And the reality that only a fraction of new
			businesses aim at building scalable startups means the highly active, growth-focused founder
			population is smaller than raw numbers might suggest.
		</p>

		<p class="note-space-md">
			Yet this doesn't weaken the opportunity. In markets like India, the number of formally
			recognized startups is already approaching 180,000, with over 21,000 new entities added in
			just the first half of 2025 The Economic Times. Plus, regions around the world are doubling
			down on entrepreneurship ecosystems, for instance the initiative in Maharashtra, India,
			targets creating 125,000 entrepreneurs and 50,000 new startups over five years, The Times of
			India.
		</p>

		<p class="note-space-md">
			What these data points reveal is a dynamic and growing pool of aspiring founders and new
			startups. The core challenge is not the number of startups per se, but creating a product that
			appeals deeply to this meaningful subset of founders who want immersive, impactful learning
			tools. The Startup Games, with its narrative-driven simulation and role-based design, aligns
			squarely with this need. If deeply engaging to even a small percent of new founder cohorts
			each year, the platform can carve out not just a niche, but a foundational position in edtech
			for entrepreneurship.
		</p>

		<h3 class="note-heading-h3">Bottom-Up Calculation</h3>

		<h4 class="note-heading-h4">Universities and Business Schools</h4>
		<ul>
			<li>Globally there are about 25,000 universities</li>
			<li>
				Roughly 10 percent (2,500) have entrepreneurship, MBA, or business simulation courses that
				could adopt a tool like this
			</li>
			<li>
				Assume an average licence fee of USD 20,000 per year per institution (covering multiple
				cohorts and faculty access)
			</li>
		</ul>
		<p class="note-space-sm">
			<strong>Market size = 2,500 × USD 20,000 = USD 50m annually</strong>
		</p>

		<h4 class="note-heading-h4">Accelerators and Incubators</h4>
		<ul>
			<li>Globally there are around 7,000 active accelerators and incubators</li>
			<li>
				A smaller share will pay for simulation-based training, assume 20 percent adoption (1,400)
			</li>
			<li>Average fee USD 10,000 per year (smaller budgets than universities)</li>
		</ul>
		<p class="note-space-sm">
			<strong>Market size = 1,400 × USD 10,000 = USD 14m annually</strong>
		</p>

		<h4 class="note-heading-h4">Corporates (Innovation and L&D Budgets)</h4>
		<ul>
			<li>
				Focus on large corporations with innovation or leadership training programmes, around 10,000
				companies globally
			</li>
			<li>Assume 5 percent adoption (500 corporates)</li>
			<li>Average fee USD 50,000 per year for tailored scenario packs and facilitator tools</li>
		</ul>
		<p class="note-space-sm"><strong>Market size = 500 × USD 50,000 = USD 25m annually</strong></p>

		<h4 class="note-heading-h4">Consumer Subscriptions (Secondary)</h4>
		<ul>
			<li>
				Assume 100,000 engaged users worldwide (drawn from founder communities, MBAs, and startup
				enthusiasts)
			</li>
			<li>Conversion of 5 percent to paid at USD 120 annually = 5,000 × 120 = USD 0.6m annually</li>
		</ul>

		<h3 class="note-heading-h3">TAM (Total Addressable Market)</h3>
		<ul>
			<li>Universities: USD 50m.</li>
			<li>Accelerators: USD 14m.</li>
			<li>Corporates: USD 25m.</li>
			<li>Consumers: USD 0.6m.</li>
		</ul>
		<p class="note-space-sm"><strong>Total Addressable Market ≈ USD 90m annually</strong></p>

		<h3 class="note-heading-h3">SAM (Serviceable Available Market)</h3>
		<p class="note-space-sm">
			Not all of TAM is realistically within reach in the first 5 years. The more relevant SAM is:
		</p>
		<ul>
			<li>
				Universities in regions where English-language edtech is widely adopted, such as North
				America, Europe, and Southeast Asia, about 1,000 institutions × USD 20k = USD 20m.
			</li>
			<li>
				Accelerators that run structured, cohort-based programmes and have budgets for training,
				around 500 × USD 10k = USD 5m.
			</li>
			<li>
				Corporates that already purchase L&D simulations, estimated at 200 × USD 50k = USD 10m.
			</li>
		</ul>
		<p class="note-space-sm"><strong>Combined SAM = USD 35m annually.</strong></p>

		<h3 class="note-heading-h3">SOM (Serviceable Obtainable Market)</h3>
		<p class="note-space-sm">
			This is what The Startup Games could reasonably capture in its first 3–5 years. Assuming:
		</p>
		<ul>
			<li>50 universities onboard at USD 20k = USD 1m ARR</li>
			<li>50 accelerators at USD 10k = USD 0.5m ARR</li>
			<li>20 corporates at USD 50k = USD 1m ARR</li>
			<li>Consumer subscriptions of 2,000 paid users at USD 120 = USD 0.24m ARR</li>
		</ul>
		<p class="note-space-sm">
			<strong>Total SOM ≈ USD 2.7–3m ARR in a realistic 3–5 year horizon.</strong>
		</p>
	</section>

	<!-- Competitive Analysis -->
	<section id="competitive-landscape" class="note-section">
		<h2 class="note-heading-h2">Competitive Analysis</h2>
		<div class="note-section-break"></div>

		<p>
			There are several notable platforms in the business simulation space, each delivering distinct
			strengths but also raising important questions about market dynamics and traction.
		</p>

		<p>
			Marketplace Simulations powers experiential entrepreneurship, marketing, and strategy games
			that are often integrated into university curricula. Over 1.5 million students and
			professionals across more than 700 schools have used their simulations, and their vendor
			includes instructor support tools, LMS integration, and structured learning scaffolds. The
			simulations target second- and third-year undergrads through EMBA programs, offering
			competitive team-based learning with rich metrics and scenario planning.
		</p>

		<p>
			Virtonomics offers a web-based, turn-based multiplayer business simulator. Its ecosystem spans
			economic modeling, company management, production, R&D, marketing, competition, and even
			political dynamics. Many users praise its depth and realism, and its startup-focused mode
			allows players to prototype a company, experience growth challenges, and test strategy
			execution without real-world risk.
		</p>

		<p>
			Markstrat is a flagship marketing strategy simulation developed by StratX. It is used by over
			500 academic institutions globally, including many of the world's top business schools.
			Players manage marketing budgets, product development, market research, and competitive
			positioning in sequential rounds.
		</p>

		<p>
			Other credible platforms like SimVenture Evolution or Intopia tend to emphasize functionality
			such as business operations, structured curriculum alignment, and teamwork, but lack narrative
			layers or AI-driven variability. Research indicates that while serious games and simulations
			enhance learning outcomes for instance, boosting entrepreneurial competence and engagement
			successful integration depends heavily on curriculum fit, instructor facilitation, and
			scenario realism.
		</p>

		<p>
			This leads to a critical question: with so many simulations already available, why have few
			broken through toward broader adoption?
		</p>

		<p>
			The answer seems to lie in several constraints. Educational simulations are costly and
			technically complex to develop. Many tools struggle because they do not align deeply with
			learning needs, or they are too rigid for diverse teaching styles. They often lack strong
			emotional hooks or replayability, and they may not integrate well into academic or accelerator
			workflows. As noted in game design research, even well-intended projects falter if they fail
			on execution or user engagement.
		</p>

		<p>
			The Startup Games seeks to overcome this by combining structured gameplay with narrative
			realism, AI-driven scenario generation, and built-in social feedback. Players step into
			roles—founder, team member, investor—and face randomly generated yet rule-based challenges.
			They make choices that matter in two ways: metrics-altering actions and discussion-triggering
			reflections. This multi-layered approach aims to facilitate emotional engagement, learning
			through immersion, and flexible integration into various learning settings. It positions the
			platform to offer something that both traditional academic simulations and turn-based strategy
			games do not currently deliver.
		</p>
	</section>

	<!-- Business & Revenue Model -->
	<section id="business-model" class="note-section">
		<h2 class="note-heading-h2">Business & Revenue Model</h2>
		<div class="note-section-break"></div>

		<p>
			The Startup Games can draw revenue from a mix of consumer subscriptions, institutional
			licensing, and corporate partnerships. A freemium model lowers the barrier to entry by
			offering basic gameplay for free, with premium features such as advanced scenarios or
			analytics positioned as add-ons. However, it is likely to be very difficult to build a
			meaningful business around premium upgrades alone. The market of active founders and aspiring
			entrepreneurs is relatively small, which limits the pool of individuals willing to pay
			out-of-pocket.
		</p>

		<p>
			Advertising could supplement this, although the audience size again makes it unlikely to be a
			major driver. The advantage is that because this is a highly targeted segment, ad performance
			could be stronger than on broader consumer platforms, potentially yielding better engagement
			and conversion rates.
		</p>

		<p>
			The more dependable revenues will come from universities, accelerators, and corporations.
			These institutions already budget for experiential learning tools and leadership training, and
			they have the resources to license structured simulations at scale. By tailoring scenario
			packs and providing facilitator tools, The Startup Games can integrate directly into
			classrooms, accelerator programmes, and corporate L&D pipelines.
		</p>

		<p>
			Corporate training offers another opportunity. Many companies invest in intrapreneurship and
			innovation programmes, and the platform can be marketed as a way to simulate high-pressure
			decision-making in a safe environment. Sponsored content can also add value, with industry
			players funding scenario packs that highlight challenges in payments, compliance, or
			infrastructure.
		</p>

		<p>
			As the user base grows, in-app purchases such as avatars, cosmetic upgrades, or additional
			scenario packs can provide incremental income, but they are unlikely to be the main engine of
			growth. The long-term sustainability will come from positioning The Startup Games as an
			institutional product rather than relying only on consumers, using licensing and enterprise
			channels to build recurring and scalable revenue.
		</p>
	</section>

	<!-- Monetisation Strategy -->
	<section id="monetisation" class="note-section">
		<h2 class="note-heading-h2">Monetisation Strategy</h2>
		<div class="note-section-break"></div>

		<h3 class="note-heading-h3">Launch Strategy</h3>
		<p>
			The monetisation approach follows a staged rollout to build audience and validate different
			revenue streams:
		</p>

		<ol>
			<li>
				<strong>Phase 1 - Consumer Launch:</strong> Focus on direct-to-consumer sales to build user base
				and gather feedback
			</li>
			<li>
				<strong>Phase 2 - Educational Partnerships:</strong> Develop relationships with universities
				and business schools
			</li>
			<li>
				<strong>Phase 3 - Enterprise Expansion:</strong> Scale to corporate training market with premium
				features
			</li>
		</ol>

		<h3 class="note-heading-h3">Pricing Considerations</h3>
		<div class="note-pricing-analysis">
			<p>
				<strong>Consumer Pricing:</strong> Competitive with premium indie games while reflecting educational
				value
			</p>
			<p>
				<strong>Educational Pricing:</strong> Per-student licensing model similar to other educational
				software
			</p>
			<p>
				<strong>Enterprise Pricing:</strong> Value-based pricing reflecting training cost savings and
				outcomes
			</p>
		</div>
	</section>

	<!-- Go-To-Market Strategy -->
	<section id="go-to-market" class="note-section">
		<h2 class="note-heading-h2">Go-To-Market Strategy</h2>
		<div class="note-section-break"></div>

		<p>
			The first priority is to build credibility and engagement within the founder community. Early
			adoption will be driven by working with accelerators, incubators, and university
			entrepreneurship programmes. These organisations are already looking for ways to make founder
			education more experiential, and The Startup Games can be positioned as a lightweight,
			engaging tool that complements workshops and courses. Offering free pilot access or sponsored
			sessions will help generate initial case studies and testimonials.
		</p>

		<p>
			Alongside institutional partnerships, the product can be seeded into existing founder
			networks. Founder communities on LinkedIn, Slack, and Discord, as well as student
			entrepreneurship clubs, are natural entry points. A referral system where users invite peers
			to join their startup "teams" can create organic growth loops, since the game is inherently
			social.
		</p>

		<p>
			Content marketing will play a role in building authority. Scenario highlights, playthrough
			snippets, and "what would you do" founder dilemmas can be shared across social media to spark
			engagement and curiosity. This also positions the game as both a learning tool and a
			conversation starter within the startup ecosystem.
		</p>

		<p>
			Corporate innovation teams represent the next tier of outreach. Many companies run
			intrapreneurship challenges and leadership development programmes. By tailoring scenario packs
			to corporate needs, The Startup Games can expand into enterprise learning budgets.
		</p>

		<p>
			The GTM focus, therefore, is not on mass consumer acquisition but on targeted distribution
			into communities where startup education is already taking place. Accelerators, universities,
			and corporations provide concentrated audiences with both need and budget. Consumer usage
			remains important for virality and community building, but the revenue and scale will come
			from institutional and enterprise adoption.
		</p>
	</section>

	<!-- Key Metrics -->
	<section id="key-metrics" class="note-section">
		<h2 class="note-heading-h2">Key Metrics</h2>
		<div class="note-section-break"></div>

		<p>
			The Startup Games will need to demonstrate traction through usage, engagement, and
			institutional adoption.
		</p>

		<p>
			At the product level, the focus will be on daily active users, session length, and repeat play
			rates. A healthy benchmark is to reach 5,000 monthly active users within the first year, with
			at least 30 percent of users returning weekly. Average session length should trend toward
			15–20 minutes, showing that players are engaging with full scenarios rather than dropping out
			early. Scenario completion rates above 60 percent will suggest that the gameplay loop is
			compelling.
		</p>

		<p>
			Growth metrics will come from the number of startups created inside the platform, the number
			of roles filled per startup, and referral-driven sign-ups. A realistic benchmark is 500
			startups created per month by the end of year one, with at least two additional users invited
			for every new startup created. This will confirm that social mechanics are driving organic
			growth.
		</p>

		<p>
			For institutional adoption, early traction will be measured by pilot partnerships. The target
			is 5–10 universities or accelerators in the first year, expanding to 25–30 institutions by
			year two. Each institution should ideally run 2–3 cohorts per semester with an average cohort
			size of 30–50 participants, which provides a path to recurring revenue.
		</p>

		<p>
			On the revenue side, the goal is to achieve an initial ARR of USD 500,000 by year two, driven
			primarily by institutional licensing. Consumer revenue will be incremental, with a realistic
			benchmark of 5 percent conversion from free to paid tiers in the first year of premium
			features.
		</p>

		<p>
			In the longer term, impact metrics will matter as much as scale. Post-simulation surveys
			should show at least 70 percent of players reporting improved confidence in startup
			decision-making. Institutions will expect evidence of measurable learning outcomes, which will
			help with renewals and expansion.
		</p>
	</section>

	<!-- Strategy & Roadmap -->
	<section id="development-roadmap" class="note-section">
		<h2 class="note-heading-h2">Strategy & Roadmap</h2>
		<div class="note-section-break"></div>

		<p>
			The strategy is to establish The Startup Games first as a credible learning tool for early
			founders, then expand its reach into institutions and enterprises. The roadmap follows a
			phased approach that balances product maturity with market adoption.
		</p>

		<h3 class="note-heading-h3">Phase 1: Prototype and Validation (0–2 months)</h3>
		<p>
			Build the core AI-driven game engine and release a closed prototype. Test with a small group
			of founders and students to validate gameplay mechanics, scenario quality, and replayability.
			Early pilots with one or two accelerators or university programmes will provide initial case
			studies.
		</p>

		<h3 class="note-heading-h3">Phase 2: Closed Beta and Community Building (2–6 months)</h3>
		<p>
			Launch a closed beta with broader access. Focus on engaging founder communities, student
			entrepreneurship clubs, and accelerator cohorts. Add referral and team-formation features to
			encourage viral growth. Begin generating early data on session length, retention, and startup
			creation rates.
		</p>

		<h3 class="note-heading-h3">Phase 3: Institutional Rollout (6–18 months)</h3>
		<p>
			Expand pilots into structured partnerships with accelerators, universities, and incubators.
			Develop facilitator dashboards and custom scenario packs to make integration seamless. Secure
			5–10 institutional customers and run multiple cohorts per semester.
		</p>

		<h3 class="note-heading-h3">Phase 4: Enterprise Expansion (18–30 months)</h3>
		<p>
			Introduce tailored scenario packs for corporate innovation and leadership programmes. Target
			intrapreneurship teams and corporate L&D budgets. Position The Startup Games as a scalable
			training platform that complements existing innovation frameworks.
		</p>

		<h3 class="note-heading-h3">Phase 5: Scale and Secondary Revenue (30 months onward)</h3>
		<p>
			Grow institutional partnerships beyond 30 universities and accelerators. Expand enterprise
			customers, add sponsored content from industry partners, and refine monetisation through
			licensing and secondary revenue streams. Use accumulated data to publish benchmark reports on
			founder decision-making, positioning the platform as both an educational tool and a knowledge
			base.
		</p>
	</section>

	<!-- Financial Forecast -->
	<section id="financial-forecast" class="note-section">
		<h2 class="note-heading-h2">Financial Forecast</h2>
		<div class="note-section-break"></div>

		<p>
			The model assumes that revenue will come primarily from institutional licensing and corporate
			partnerships, with consumer subscriptions and in-app purchases contributing only marginally.
		</p>

		<h3 class="note-heading-h3">Year 1 (Prototype and Closed Beta)</h3>
		<p>
			The priority is product development and pilot validation, not revenue. Costs will be
			concentrated on engineering, scenario design, and partnership development, estimated at USD
			400k–500k for the year, covered by the pre-seed raise. Revenue is expected to be negligible,
			limited to small pilot fees.
		</p>

		<h3 class="note-heading-h3">Year 2 (Institutional Rollout)</h3>
		<p>
			The first real revenue arrives from early institutional licences. The target is 5–10
			universities or accelerators, each paying USD 15k–25k annually, which brings in USD 100k–200k.
			A consumer conversion of 5 percent of 10,000 MAUs at USD 10 per month could add another USD
			60k ARR. Combined, the revenue target is USD 200k–300k ARR.
		</p>

		<h3 class="note-heading-h3">Year 3 (Enterprise Expansion)</h3>
		<p>
			With validation in place, expansion into corporate innovation budgets begins. The goal is
			25–30 institutions paying USD 25k annually and 5–10 corporates paying USD 50k–75k annually,
			for a total of USD 1.2m–1.5m ARR. Consumer subscriptions may add USD 200k ARR, but
			institutional and enterprise deals will remain the growth driver.
		</p>

		<h3 class="note-heading-h3">Year 4 and beyond (Scale and Secondary Revenue)</h3>
		<p>
			The path forward is to scale to 50+ institutions and 20+ corporates, reaching USD 4m–6m ARR.
			Sponsored content and secondary streams such as branded scenario packs can supplement this,
			while operating leverage improves as costs are largely frontloaded in development.
		</p>

		<p>
			These forecasts, however, raise a structural concern. From a venture capital perspective, a
			business reaching USD 5–6m ARR in four years is unlikely to deliver the 20x return profile
			that most funds target. Even with strong execution, the revenue potential points to a company
			that may be valuable, but not "venture scale" in the traditional sense. This could make The
			Startup Games difficult to fund through mainstream VC, and instead suggest a better fit with
			strategic investors, accelerators, or alternative funding routes that value impact, education,
			or corporate alignment over outsized financial multiples.
		</p>
	</section>

	<!-- Team -->
	<section id="team" class="note-section">
		<h2 class="note-heading-h2">The Team</h2>
		<div class="note-section-break"></div>

		<h3 class="note-heading-h3">Founder Profile</h3>

		<h4 class="note-heading-h4">Background & Experience</h4>
		<p>
			The founder serves as CTO of The Startup Games and is currently co-founding a Singapore-based
			startup since 2021. Previously worked as a Research Assistant at a top-tier university,
			focusing on applied physics and molecular biophysics.
		</p>

		<h4 class="note-heading-h4">Education</h4>
		<ul>
			<li>BSc in Physics from a globally ranked university (top 10 worldwide)</li>
			<li>Exchange programme in Molecular Biophysics at a European research university</li>
		</ul>

		<h4 class="note-heading-h4">Motivation & Vision</h4>
		<p>
			The founder brings a scientific and analytical approach to startup building, combining physics
			training with entrepreneurial drive. Current startup experience provides firsthand insight
			into the founder journey, which informs the realism of The Startup Games.
		</p>

		<h4 class="note-heading-h4">Relevant Skills & Expertise</h4>
		<ul>
			<li>Startup operations and product development (via current venture)</li>
			<li>Strong research and analytical background</li>
			<li>Technical leadership as CTO</li>
			<li>Cross-cultural and international exposure</li>
		</ul>

		<h4 class="note-heading-h4">Fit for The Startup Games</h4>
		<p>
			The founder's unique blend of scientific rigour, entrepreneurial experience, and product
			leadership equips them to design a simulation that is both realistic and educational. Their
			own founder journey provides authentic context to the game's scenarios, especially around
			challenges like raising capital, retention, and pivots.
		</p>

		<h3 class="note-heading-h3">Team Weaknesses</h3>
		<p>
			As a first-time founder building in education technology and gaming, the founder does not yet
			have a track record of scaling a venture-backed business. Their background is rooted in
			physics and research, which brings analytical rigour but less exposure to commercial
			go-to-market execution. While current startup experience provides valuable insight, they have
			not yet proven success in acquiring large institutional customers or navigating the enterprise
			sales cycle.
		</p>

		<p>
			Another limitation is team depth. At this stage the founding team is small, and there is no
			clear commercial co-founder or senior operator with experience in scaling B2B SaaS or
			enterprise education products. This may slow progress on revenue generation and partnerships
			if not addressed early.
		</p>

		<p>
			These weaknesses are not unusual at the pre-seed stage, but they highlight the importance of
			surrounding the founder with experienced advisors, early hires, and possibly co-founders who
			can complement their technical and product vision with commercial and operational expertise.
		</p>
	</section>

	<!-- Risk Factors & Mitigation -->
	<section id="risks" class="note-section">
		<h2 class="note-heading-h2">Risk Factors & Mitigation</h2>
		<div class="note-section-break"></div>

		<h3 class="note-heading-h3">Small addressable market</h3>
		<p>
			The number of active founders and aspiring entrepreneurs is meaningful but not massive. This
			creates a ceiling for purely consumer-driven growth. Mitigation comes from focusing on
			institutions and corporates, where budgets and cohorts aggregate demand. Universities,
			accelerators, and L&D teams can deliver recurring revenue without relying on consumer volume.
		</p>

		<h3 class="note-heading-h3">Monetisation challenges</h3>
		<p>
			Consumer willingness to pay for premium features is likely to be low. Ad revenue may also be
			limited by audience size. Mitigation is to treat consumer monetisation as secondary and
			instead prioritise licensing to institutions, corporates, and sponsors, which offers
			higher-value contracts.
		</p>

		<h3 class="note-heading-h3">Funding risk</h3>
		<p>
			The financial forecast suggests a revenue trajectory that may not meet venture capital
			expectations for a 20x return. This could make the company unfundable by traditional VC.
			Mitigation is to target strategic investors, corporate partners, and education-focused funds
			who value impact and steady growth rather than pure venture-scale returns.
		</p>

		<h3 class="note-heading-h3">Content and replayability</h3>
		<p>
			A simulation without fresh content risks becoming stale. Mitigation comes from the custom
			AI-driven scenario engine, which can generate varied and unpredictable challenges, and from
			enabling user-generated or partner-created scenario packs to keep the platform fresh.
		</p>

		<h3 class="note-heading-h3">Competitive landscape</h3>
		<p>
			There are several existing simulation platforms, and some have struggled to gain traction
			despite well-designed products. Mitigation is to differentiate through emotional realism,
			role-play mechanics, and AI variability, delivering a more engaging experience than
			traditional financial or operational simulators.
		</p>

		<h3 class="note-heading-h3">Adoption barriers in education</h3>
		<p>
			Universities and corporations can be slow to adopt new tools, particularly if they require
			integration into curriculum or training structures. Mitigation is to build facilitator
			dashboards, keep the product lightweight, and start with pilots that can be adopted quickly
			before pushing for long-term contracts.
		</p>

		<h3 class="note-heading-h3">Execution risk</h3>
		<p>
			As with any early-stage product, the challenge is turning a strong concept into a polished,
			usable platform. Mitigation lies in keeping the initial scope narrow, validating the core
			gameplay loop, and proving value in early pilots before scaling.
		</p>
	</section>

	<!-- My Investment Thesis -->
	<section id="investment-thesis" class="note-section">
		<h2 class="note-heading-h2">My Investment Thesis</h2>
		<div class="note-section-break"></div>

		<p>
			The Startup Games is tackling a real gap in founder education. Most new entrepreneurs do not
			have access to structured, realistic training, and existing simulations miss the emotional and
			social side of building a company. The product's AI-driven scenario engine, combined with
			role-play and community feedback, creates a more authentic and engaging way to practise the
			founder journey.
		</p>

		<p>
			The founder brings credibility through their background at top-tier universities and hands-on
			startup experience. Their own exposure to the knowledge gaps and struggles of early founders
			provides authenticity to the product vision.
		</p>

		<p>
			The business model makes sense in principle. Institutional licensing and corporate
			partnerships are proven channels in edtech, and universities and accelerators are already
			looking for tools to make founder training more experiential. Consumer adoption will drive
			community and virality, but the real revenue will come from secondary channels like
			institutions and corporations.
		</p>

		<p>
			The concern is scale. Even with solid execution, the financial trajectory may not deliver the
			kind of returns venture capital usually requires. ARR in the single-digit millions by year
			four will not excite VCs who are looking for 20x outcomes. This raises the question of whether
			the company is truly venture-backable, or whether the better path is to pursue strategic
			investors, corporate partners, or education-focused backers who value impact and stable
			returns.
		</p>

		<p>
			In short, this is a smart and well-timed idea with a differentiated product. It can create
			meaningful impact and generate healthy, steady revenues. But it may never reach the growth
			profile that mainstream VC demands.
		</p>
	</section>

	<!-- Valuation & Raise Details -->
	<section id="valuation-raise" class="note-section">
		<h2 class="note-heading-h2">Valuation & Raise Details</h2>
		<div class="note-section-break"></div>

		<p>
			The Startup Games is seeking a USD 500k to 750k pre-seed raise, targeting 15 to 20 percent
			ownership post-money. This implies a post-money valuation range of USD 3.3m to 3.75m, but of
			course this would be driven by the market and the valuation offered by the VCs.
		</p>

		<p>The cap table after the raise would be structured as follows:</p>

		<ul>
			<li><strong>Founders:</strong> 70–75 percent</li>
			<li><strong>Investors (pre-seed):</strong> 15–20 percent</li>
			<li><strong>ESOP:</strong> 10 percent reserved for early hires</li>
		</ul>

		<p>
			This raise is designed to provide around 18 months of runway, enough to complete product
			development, run pilots with universities and accelerators, and begin institutional sales.
		</p>

		<p>Funds will be allocated broadly as follows:</p>

		<ul>
			<li>
				<strong>Product development and engineering:</strong> 45 percent to complete the AI game engine,
				build out scenario libraries, and support ongoing iteration.
			</li>
			<li>
				<strong>Content creation and scenario design:</strong> 20 percent to ensure a strong and varied
				set of challenges for players.
			</li>
			<li>
				<strong>Go-to-market and partnerships:</strong> 20 percent to run pilots, build institutional
				relationships, and support marketing into founder communities.
			</li>
			<li>
				<strong>General operations and overhead:</strong> 15 percent to cover legal, compliance, and
				basic administrative costs.
			</li>
		</ul>

		<p>
			The structure balances investor participation with strong founder control and creates room to
			attract early team members through the ESOP. The question remains whether this valuation and
			raise size will appeal to mainstream VC. Given the projected revenue profile, the company may
			not meet the 20x return profile that traditional funds expect. The round is better suited to
			strategic investors, accelerators, or education-focused funds that value impact and measured
			growth.
		</p>
	</section>

	<!-- Exit Paths -->
	<section id="exit-paths" class="note-section">
		<h2 class="note-heading-h2">Exit Paths</h2>
		<div class="note-section-break"></div>

		<p>There are three likely exit routes for The Startup Games.</p>

		<h3 class="note-heading-h3">Acquisition by an EdTech platform</h3>
		<p>
			Companies like Coursera, Udemy, or Pearson may see value in adding a simulation layer to their
			course offerings. This strengthens their experiential learning portfolio.
		</p>

		<h3 class="note-heading-h3">Acquisition by a corporate training or consulting firm</h3>
		<p>
			Firms such as McKinsey, BCG, or large L&D providers could use The Startup Games as a tool for
			internal innovation and leadership training.
		</p>

		<h3 class="note-heading-h3">Acquisition by a gaming or simulation publisher</h3>
		<p>
			Serious game studios or education-focused publishers may see this as a way to enter the
			entrepreneurship learning market.
		</p>

		<p>
			A less likely but possible path would be an IPO in the long run, if the product evolves into a
			large-scale learning and networking platform. However, acquisition is the most realistic near
			to mid-term outcome.
		</p>
	</section>

	<!-- Open Questions -->
	<section id="open-questions" class="note-section">
		<h2 class="note-heading-h2">Open Questions</h2>
		<div class="note-section-break"></div>

		<p>
			There is a limit to the amount of research and time I can spend on this analysis. The
			following are open questions that would need to be explored through deeper market research,
			customer interviews, and product validation before making any investment decision.
		</p>

		<ul>
			<li>
				How effectively can AI generate scenarios that feel authentic and emotionally engaging to
				real founders?
			</li>
			<li>
				Will universities and accelerators adopt simulation-based learning at the pace and scale
				required for the business model?
			</li>
			<li>
				Can the product maintain long-term engagement without becoming repetitive or predictable?
			</li>
			<li>
				What is the real willingness of consumers to pay for premium entrepreneurship education
				content?
			</li>
			<li>
				How will established players in business simulation and educational gaming respond to this
				market entry?
			</li>
			<li>
				Is the institutional sales cycle faster or slower than projected, and how does this affect
				runway and growth?
			</li>
			<li>
				Can the founder successfully transition from technical leadership to the commercial
				execution required for B2B sales?
			</li>
			<li>
				What is the true market size for founder education tools when accounting for regional and
				cultural differences?
			</li>
			<li>
				Will corporate training budgets prioritise entrepreneurship simulation over other L&D
				investments?
			</li>
			<li>
				How sensitive is the business model to economic downturns affecting educational and
				corporate training spending?
			</li>
		</ul>
	</section>

	<!-- References -->
	<section id="references" class="note-section">
		<h2 class="note-heading-h2">References</h2>
		<div class="note-section-break"></div>

		<ol>
			<li>
				Marketplace Simulations. Experiential Learning Simulations.<br />
				<a href="https://www.marketplace-simulation.com/" target="_blank" rel="noopener noreferrer"
					>https://www.marketplace-simulation.com/</a
				>
			</li>

			<li>
				Virtonomics. Business Simulation Game Blog.<br />
				<a
					href="https://virtonomics.com/blogs/author/minvydas/"
					target="_blank"
					rel="noopener noreferrer">https://virtonomics.com/blogs/author/minvydas/</a
				>
			</li>

			<li>
				NBEA Library. Marketplace Simulations Company Profile.<br />
				<a
					href="https://nbealibrary.org/company/marketplace-simulations"
					target="_blank"
					rel="noopener noreferrer">https://nbealibrary.org/company/marketplace-simulations</a
				>
			</li>

			<li>
				Wikipedia. Markstrat.<br />
				<a href="https://en.wikipedia.org/wiki/Markstrat" target="_blank" rel="noopener noreferrer"
					>https://en.wikipedia.org/wiki/Markstrat</a
				>
			</li>

			<li>
				Academic Conferences. Analysing the Required Properties of Business Simulation Games.<br />
				<a
					href="https://papers.academic-conferences.org/index.php/ecgbl/article/download/3001/2650/10668"
					target="_blank"
					rel="noopener noreferrer"
					>https://papers.academic-conferences.org/index.php/ecgbl/article/download/3001/2650/10668</a
				>
			</li>

			<li>
				ResearchGate. Analysing the Required Properties of Business Simulation Games to Be Used in
				E-Learning and Education.<br />
				<a
					href="https://www.researchgate.net/publication/275784905_Analysing_the_Required_Properties_of_Business_Simulation_Games_to_Be_Used_in_E-Learning_and_Education"
					target="_blank"
					rel="noopener noreferrer"
					>https://www.researchgate.net/publication/275784905_Analysing_the_Required_Properties_of_Business_Simulation_Games_to_Be_Used_in_E-Learning_and_Education</a
				>
			</li>

			<li>
				PMC. Game-Based Learning and Gamification in Entrepreneurship Education.<br />
				<a
					href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8829425/"
					target="_blank"
					rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC8829425/</a
				>
			</li>

			<li>
				SAGE Journals. Entrepreneurship Education through Simulation Games.<br />
				<a
					href="https://journals.sagepub.com/doi/10.1177/2515127417737285"
					target="_blank"
					rel="noopener noreferrer">https://journals.sagepub.com/doi/10.1177/2515127417737285</a
				>
			</li>

			<li>
				Marketplace Simulations. The Marketplace Game Review by Stan Shapiro.<br />
				<a
					href="https://www.marketplace-simulation.com/wp-content/the-marketplace-game-review-by-stan-shapiro.pdf"
					target="_blank"
					rel="noopener noreferrer"
					>https://www.marketplace-simulation.com/wp-content/the-marketplace-game-review-by-stan-shapiro.pdf</a
				>
			</li>
		</ol>
	</section>
</DetailedNote>

<style>
	/* Custom styles for this note */
	.note-pricing-analysis {
		background: #1f2937;
		border-left: 4px solid #3b82f6;
		padding: 1rem;
		margin: 1rem 0;
	}
</style>
