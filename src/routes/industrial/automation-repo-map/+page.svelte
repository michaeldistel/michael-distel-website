<script lang="ts">
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import Breadcrumbs from '$lib/components/navigation/Breadcrumbs.svelte';
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';

	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Industrial', href: '/industrial' },
		{ label: 'Industrial Automation Repo Map' }
	];

	const categoryBars = [
		{ label: 'PLC frameworks + tooling', count: 13, width: 100 },
		{ label: 'Modbus', count: 6, width: 46 },
		{ label: 'Edge + platform stacks', count: 6, width: 46 },
		{ label: 'Soft PLCs + runtimes', count: 4, width: 31 },
		{ label: 'OPC UA', count: 4, width: 31 },
		{ label: 'EtherCAT', count: 4, width: 31 },
		{ label: 'Siemens S7', count: 4, width: 31 }
	];

	const starBandBars = [
		{ label: '0', count: 2, width: 8 },
		{ label: '1 to 9', count: 10, width: 38 },
		{ label: '10 to 49', count: 10, width: 38 },
		{ label: '50 to 199', count: 26, width: 100 },
		{ label: '200 to 999', count: 23, width: 88 },
		{ label: '1,000+', count: 19, width: 73 }
	];

	const languageBars = [
		{ label: 'C#', count: 17, width: 100 },
		{ label: 'Python', count: 15, width: 88 },
		{ label: 'C++', count: 12, width: 71 },
		{ label: 'C', count: 11, width: 65 },
		{ label: 'TypeScript', count: 9, width: 53 },
		{ label: 'Java', count: 5, width: 29 },
		{ label: 'Rust', count: 4, width: 24 }
	];
</script>

<svelte:head>
	<title>Industrial Automation Repo Map | Michael Distel</title>
	<meta
		name="description"
		content="Analysis of 90 industrial automation open source repos: protocol plumbing, edge tooling, and developer experience. Where the real adoption sits and what matters operationally."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://michaeldistel.com/industrial/automation-repo-map" />
	<meta property="og:title" content="Industrial Automation Repo Map" />
	<meta
		property="og:description"
		content="Analysis of 90 industrial automation open source repos: protocol plumbing, edge tooling, and developer experience."
	/>
	<meta property="og:site_name" content="Michael Distel" />
	<meta property="article:published_time" content="2026-02-27" />
	<meta property="article:author" content="Michael Distel" />
	<meta property="article:section" content="Industrial Automation" />
</svelte:head>

<PageLayout>
	<Breadcrumbs items={breadcrumbs} />

	<article class="max-w-4xl mx-auto px-4">
		<header class="mb-8">
			<h1 class="text-4xl font-bold mb-4">Industrial Automation Repo Map</h1>
			<div class="text-gray-400 text-sm mb-4">
				<time datetime="2026-02-27">Note - 27 Feb 2026 - by Michael Distel</time>
			</div>
		</header>

		<div class="prose prose-invert prose-lg max-w-none">
			<p class="lead">
				This note is a deep dive into a curated list of 90 industrial automation repos. Instead of
				highlighting individual tools, it treats the list as a market map: where activity clusters,
				which projects look load-bearing, and where maintenance or adoption risk hides.
			</p>

			<p>
				The space is noisy and weirdly cyclical. Every few years someone "rediscovers" open PLCs
				(programmable logic controllers), SCADA (supervisory control and data
				acquisition)-in-a-browser, protocol gateways, and IDE (integrated development environment)
				tooling. Most of it is hobby-grade. Some of it is quietly becoming infrastructure. The hard
				part is knowing which is which before you commit to a dependency.
			</p>

			<p>This map works better as a dataset than as a vibes folder.</p>

			<div class="not-prose cta-card">
				<div class="cta-link">
					<ExternalLink
						href="https://github.com/michaeldistel/michaeldistel/blob/main/interesting-repos/industrial-automation.md"
					>
						Open Industrial Automation Repo List
					</ExternalLink>
				</div>
			</div>

			<figure>
				<img
					src="/industrial/automation-repo-map/list-screenshot.png"
					alt="Industrial automation canonical repo list screenshot"
					loading="lazy"
				/>
				<figcaption>Canonical list snapshot used for this analysis.</figcaption>
			</figure>

			<section>
				<h2 class="note-heading-h2">Quick Take</h2>
				<div class="note-section-break"></div>
				<p>
					This map reads active but uneven: 90 repos total, 68 active in the last 12 months, 22
					stale and archived, and 19 above the popularity threshold. The data suggests value is not
					concentrated in new runtimes; it is concentrated where teams can deploy and operate
					reliably.
				</p>
				<p>
					Durability still sits in substrate projects like <ExternalLink
						href="https://github.com/stephane/libmodbus"><code>libmodbus</code></ExternalLink
					>, <ExternalLink href="https://github.com/open62541/open62541"
						><code>open62541</code></ExternalLink
					>, and <ExternalLink href="https://github.com/eclipse-mosquitto/mosquitto"
						><code>mosquitto</code></ExternalLink
					>, while distribution sits in gateway/agent layers like <ExternalLink
						href="https://github.com/influxdata/telegraf"><code>telegraf</code></ExternalLink
					> (16.7k) and <ExternalLink href="https://github.com/dgiot/dgiot"
						><code>dgiot</code></ExternalLink
					>
					(5.0k). Contribution density supports this: workflow/tooling has 13 repos vs 4 for soft programmable
					logic controller (PLC) runtimes.
				</p>
				<p>
					Open OT (operational technology) is compounding at the edges (protocol + gateway +
					tooling), while major vendors remain perimeter-open and core-closed. This map is
					star-biased, and AI (artificial intelligence) is now increasing repo creation faster than
					maintainership depth, so repo count alone is a weak quality signal. Overall confidence is
					medium-high on direction, lower on long-tail coverage.
				</p>
			</section>

			<section>
				<h2 class="note-heading-h2">Dataset Overview</h2>
				<div class="note-section-break"></div>
				<p>Snapshot date: 27 Feb 2026.</p>
				<p>
					Core snapshot metrics are below. Freshness uses a 12-month push window; "Popular" means at
					least 1,000 stars or 500 forks.
				</p>
				<p>
					24% stale is not alarming for a niche list. Industrial automation moves slowly by design.
					A protocol library that hit 1.0 in 2018 and has not been touched since may still be
					exactly what you need. The question is whether the stale repos are "done" or "abandoned".
					The archive section is the latter. For the active 68, freshness is a useful but imperfect
					signal: a burst of activity can mean a real release or just someone cleaning up issues.
				</p>

				<div class="not-prose grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 mb-8">
					<div class="kpi-card">
						<div class="kpi-value">90</div>
						<div class="kpi-label">Total repos</div>
					</div>
					<div class="kpi-card">
						<div class="kpi-value">68</div>
						<div class="kpi-label">Active (12m push)</div>
					</div>
					<div class="kpi-card">
						<div class="kpi-value">22</div>
						<div class="kpi-label">Stale and archived</div>
					</div>
					<div class="kpi-card">
						<div class="kpi-value">19</div>
						<div class="kpi-label">Popular by threshold</div>
					</div>
				</div>

				<h3 class="note-heading-h3">List Composition by Bucket</h3>
				<p>
					Buckets mix framework/tooling groups with protocol groups (for example Modbus, OPC UA, and
					EtherCAT are protocol buckets). Overall mix is still more tooling/plumbing than control
					runtimes.
				</p>

				<div class="not-prose chart-card">
					<h4 class="chart-title">Bucket Concentration (Top Buckets)</h4>
					{#each categoryBars as item}
						<div class="bar-row">
							<div class="bar-label">{item.label}</div>
							<div class="bar-track">
								<div class="bar-fill" style={`width: ${item.width}%`}></div>
							</div>
							<div class="bar-value">{item.count}</div>
						</div>
					{/each}
				</div>

				<h3 class="note-heading-h3">Star Distribution</h3>
				<p>
					This is not a list of household names. It is a niche-tool map with a fat tail, and it is
					star-biased by construction, so many low-star projects are likely missing or
					underrepresented.
				</p>
				<div class="not-prose grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 mb-6">
					<div class="kpi-card">
						<div class="kpi-value">161</div>
						<div class="kpi-label">Median stars</div>
					</div>
					<div class="kpi-card">
						<div class="kpi-value">52</div>
						<div class="kpi-label">P25</div>
					</div>
					<div class="kpi-card">
						<div class="kpi-value">777</div>
						<div class="kpi-label">P75</div>
					</div>
					<div class="kpi-card">
						<div class="kpi-value">1,981</div>
						<div class="kpi-label">P90</div>
					</div>
				</div>

				<div class="not-prose chart-card">
					<h4 class="chart-title">Star Band Distribution</h4>
					{#each starBandBars as item}
						<div class="bar-row">
							<div class="bar-label">{item.label}</div>
							<div class="bar-track">
								<div class="bar-fill bar-fill-amber" style={`width: ${item.width}%`}></div>
							</div>
							<div class="bar-value">{item.count}</div>
						</div>
					{/each}
				</div>

				<h3 class="note-heading-h3">Language Mix (Primary)</h3>
				<p>The primary language distribution is a decent proxy for where the work actually sits.</p>
				<div class="not-prose grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 mb-6">
					<div class="kpi-card">
						<div class="kpi-value">17</div>
						<div class="kpi-label">C#</div>
					</div>
					<div class="kpi-card">
						<div class="kpi-value">15</div>
						<div class="kpi-label">Python</div>
					</div>
					<div class="kpi-card">
						<div class="kpi-value">12</div>
						<div class="kpi-label">C++</div>
					</div>
					<div class="kpi-card">
						<div class="kpi-value">11</div>
						<div class="kpi-label">C</div>
					</div>
					<div class="kpi-card">
						<div class="kpi-value">9</div>
						<div class="kpi-label">TypeScript</div>
					</div>
					<div class="kpi-card">
						<div class="kpi-value">5</div>
						<div class="kpi-label">Java</div>
					</div>
					<div class="kpi-card">
						<div class="kpi-value">4</div>
						<div class="kpi-label">Rust</div>
					</div>
				</div>

				<div class="not-prose chart-card">
					<h4 class="chart-title">Primary Language Mix</h4>
					{#each languageBars as item}
						<div class="bar-row">
							<div class="bar-label">{item.label}</div>
							<div class="bar-track">
								<div class="bar-fill bar-fill-violet" style={`width: ${item.width}%`}></div>
							</div>
							<div class="bar-value">{item.count}</div>
						</div>
					{/each}
				</div>
				<p>Translation: the glue is still .NET and Python; the protocol stacks are still C/C++.</p>
				<p>
					Rust at 4 repos is worth watching. Not because Rust will replace C in field devices
					anytime soon (it will not), but because newer gateway and tooling work is starting there
					deliberately. The choice signals something about maintainer culture: people who pick Rust
					for this work tend to care about correctness in a way that matters when the thing you are
					connecting to runs a turbine.
				</p>
				<p>
					TypeScript at 9 tells you the browser-facing layer is real. VS Code extensions, SCADA web
					UIs, edge dashboards. The OT/IT boundary is not a wall anymore; it is a gradient, and the
					TypeScript repos are sitting right on it.
				</p>
			</section>

			<section>
				<h2 class="note-heading-h2">What Gets Real Adoption</h2>
				<div class="note-section-break"></div>
				<p>The top by stars is mostly infrastructure, not "apps". No surprises.</p>
				<p>Top repos by stars (selected):</p>
				<ul>
					<li>
						<ExternalLink href="https://github.com/influxdata/telegraf"
							><code>influxdata/telegraf</code></ExternalLink
						>
						(16.7k stars, 5.7k forks): arguably not an industrial automation project by itself, but critical
						adjacent infrastructure; the agent layer is a distribution channel.
					</li>
					<li>
						<ExternalLink href="https://github.com/eclipse-mosquitto/mosquitto"
							><code>eclipse-mosquitto/mosquitto</code></ExternalLink
						>
						(10.7k, 2.6k): MQTT remains the default pipe.
					</li>
					<li>
						<ExternalLink href="https://github.com/dgiot/dgiot"
							><code>dgiot/dgiot</code></ExternalLink
						>
						(5.0k, 1.1k): a very real edge platform, with a China-first focus.
					</li>
					<li>
						<ExternalLink href="https://github.com/frangoteam/FUXA"
							><code>frangoteam/FUXA</code></ExternalLink
						>
						(4.1k, 1.2k): SCADA/human-machine interface (HMI) in the browser, broadly useful.
					</li>
					<li>
						<ExternalLink href="https://github.com/stephane/libmodbus"
							><code>stephane/libmodbus</code></ExternalLink
						>
						(4.1k, 1.9k): canonical Modbus in C.
					</li>
					<li>
						<ExternalLink href="https://github.com/open62541/open62541"
							><code>open62541/open62541</code></ExternalLink
						>
						(3.0k, 1.4k): OPC UA baseline.
					</li>
				</ul>

				<figure class="fuxa-figure">
					<img
						src="/industrial/automation-repo-map/fuxa-editor.png"
						alt="FUXA editor interface screenshot"
						loading="lazy"
					/>
					<figcaption>Browser-based SCADA UX is a real distribution surface.</figcaption>
				</figure>

				<p>
					Competing with these repos is not just "building an integration". It means competing with
					incumbent open-source gravity that already has distribution and operating history.
				</p>
				<p>
					Also note the mix: agent/gateway projects lead in visibility, but protocol libraries (<ExternalLink
						href="https://github.com/stephane/libmodbus"><code>libmodbus</code></ExternalLink
					>,
					<ExternalLink href="https://github.com/open62541/open62541"
						><code>open62541</code></ExternalLink
					>) remain the long-lived substrate. Both layers matter; one captures distribution, the
					other captures durability.
				</p>
				<p>
					The star counts also reveal where the developer-facing interface is. Telegraf and
					Mosquitto get stars from backend engineers and DevOps people who have never touched a PLC.
					That cross-pollination is structural. Once your industrial data is in InfluxDB or flowing
					over MQTT, the toolchain from there is indistinguishable from any other time-series or
					messaging problem. That is a feature. It means the talent pool for operating these systems
					is far larger than the OT headcount would suggest.
				</p>
				<p>
					The absence of CODESYS, Beckhoff TwinCAT, and Rockwell Studio 5000 from this list is
					intentional: they are commercial and not open source. But their gravity shapes everything
					here. Most of the "developer experience" repos exist because those vendors' tooling is
					expensive, locked-in, or both.
				</p>
			</section>

			<section>
				<h2 class="note-heading-h2">Where Maintenance Load Sits</h2>
				<div class="note-section-break"></div>
				<p>
					The repos with the most open issues are the ones that matter operationally. They are not
					"badly run". They are <em>used</em>.
				</p>
				<p>Top open-issue counts (selected):</p>
				<ul>
					<li>
						<ExternalLink href="https://github.com/open62541/open62541"
							><code>open62541/open62541</code></ExternalLink
						>: 883
					</li>
					<li>
						<ExternalLink href="https://github.com/eclipse-mosquitto/mosquitto"
							><code>eclipse-mosquitto/mosquitto</code></ExternalLink
						>: 721
					</li>
					<li>
						<ExternalLink href="https://github.com/influxdata/telegraf"
							><code>influxdata/telegraf</code></ExternalLink
						>: 452
					</li>
					<li>
						<ExternalLink href="https://github.com/frangoteam/FUXA"
							><code>frangoteam/FUXA</code></ExternalLink
						>: 360
					</li>
				</ul>
				<p>
					Maintainer bandwidth and issue-triage patterns are part of the downstream supply-chain
					risk profile for teams depending on these projects.
				</p>
				<p>
					883 open issues on
					<ExternalLink href="https://github.com/open62541/open62541"
						><code>open62541</code></ExternalLink
					>
					sounds alarming. It is not. It is a sign that the project is load-bearing for a lot of real
					deployments across multiple industries and countries, many of which have divergent edge cases.
					The issue queue is the project's surface area made visible. Compare it to a project with 12
					stars and 0 issues: the latter is not healthier; it is just unknown.
				</p>
				<p>
					What would worry me is a project with high star count, high issue count, and a commit
					history that shows one or two people doing all the work with no sign of succession
					planning. That is a supply chain risk in the real sense. FUXA at 360 open issues with a
					small maintainer team is worth watching on that axis.
				</p>
			</section>

			<section>
				<h2 class="note-heading-h2">Developer UX Is Converging</h2>
				<div class="note-section-break"></div>
				<p>
					One strong pattern in the list is migration of PLC developer workflows into mainstream
					tooling, with VS Code currently the most visible centre of gravity.
				</p>
				<p>
					This does not mean ST (Structured Text) replaces ladder. In production plants, language
					choice is constrained by who supports the line at 2am, what IDE/runtime the vendor ships,
					and what licences the site actually owns.
				</p>
				<p>Two camps show up:</p>
				<ul>
					<li>
						Syntax coverage: highlights, snippets, outline, formatter-lite. This spreads fast.
					</li>
					<li>
						IDE-grade language intelligence (language server protocol, LSP): diagnostics, indexing,
						rename, quick fixes, formatting discipline. This is what teams pay for once a codebase
						exists.
					</li>
				</ul>
				<p>
					The practical read: editor distribution matters, but protocol reliability, device support,
					and deployment operations still decide production adoption.
				</p>
				<p>
					The pattern is consistent across the list: teams do not want a new IDE, they want the
					editor they already use (VS Code) to handle Structured Text with modern language tooling.
					Diagnostics on save, go-to-definition, reliable rename, and deterministic formatting are
					table stakes in mainstream software and still uneven in industrial workflows.
				</p>
				<p>
					A durable pattern is mixed-language architecture: ladder/FBD for high-visibility
					interlocks and troubleshooting paths, ST for calculations, arrays, algorithms, and
					reusable blocks. That blend matches how most teams actually maintain systems.
				</p>
				<p>
					The two-camp split (syntax coverage vs. LSP) is also a business model split. Syntax
					coverage spreads fast; LSP can monetize once teams have real codebases. But neither wins
					alone without credible integration into runtime, testing, and change-management workflows.
				</p>
			</section>

			<section>
				<h2 class="note-heading-h2">Siemens: Perimeter Strategy In Public</h2>
				<div class="note-section-break"></div>
				<p>The Siemens repos in the list are mostly "around the PLC", not "the PLC":</p>
				<ul>
					<li>
						Engineering automation examples (<ExternalLink
							href="https://github.com/siemens/tia-portal-openness-code-snippets"
							><code>tia-portal-openness-code-snippets</code></ExternalLink
						>).
					</li>
					<li>
						Edge debugging (<ExternalLink href="https://github.com/siemens/edgeshark"
							><code>edgeshark</code></ExternalLink
						>).
					</li>
					<li>
						BSPs (<ExternalLink href="https://github.com/siemens/meta-iot2050"
							><code>meta-iot2050</code></ExternalLink
						>).
					</li>
					<li>
						A design system (<ExternalLink href="https://github.com/siemens/ix"
							><code>ix</code></ExternalLink
						>).
					</li>
					<li>Webserver application programming interface (API) clients for S7.</li>
				</ul>

				<figure>
					<img
						src="/industrial/automation-repo-map/starter-app.png"
						alt="Starter app interface screenshot"
						loading="lazy"
					/>
					<figcaption>Starter app direction for ecosystem-ready UI.</figcaption>
				</figure>

				<p>
					This is a perimeter strategy: open enough to make the ecosystem productive, keep the core
					runtime and lifecycle tooling behind the wall.
				</p>
				<p>
					This pattern is less "Siemens is going open" and more "Siemens is making integration
					cheaper". Useful for ecosystem velocity, still a perimeter strategy.
				</p>
				<p>
					The design system (<ExternalLink href="https://github.com/siemens/ix"
						><code>ix</code></ExternalLink
					>) is the most interesting item in this cluster. It is Siemens betting that the UI layer
					for industrial applications converges toward the same component patterns as enterprise
					SaaS, just with more status indicators and fewer marketing gradients. They are probably
					right. The teams building HMI and SCADA replacements do not want to design a button
					component from scratch; they want something that looks like it belongs in a control room
					without requiring a UX consultant to approve it.
				</p>
				<p>
					The perimeter strategy also means Siemens is not going to kill the open source ecosystem
					for TIA Portal tooling. They will tolerate and occasionally enable it, because every
					automation engineer who can script against TIA Portal via Openness is more productive and
					less likely to switch vendors. Lock-in through productivity, not walls.
				</p>
			</section>

			<section>
				<h2 class="note-heading-h2">Big Vendor Plays and Gaps</h2>
				<div class="note-section-break"></div>
				<p>
					A visible gap in this map is first-party open-source depth from major PLC/distributed
					control system (DCS) vendors, especially Schneider Electric, Rockwell, Emerson, Honeywell,
					and ABB core runtime stacks.
				</p>
				<p>
					That gap is structural, not accidental. Core control runtimes sit inside revenue and
					risk-bearing layers: licensed engineering suites, hardware margins, validated function
					libraries, support contracts, and certification/compliance obligations. Open sourcing
					those layers weakens moat and complicates liability boundaries.
				</p>
				<p>
					What tends to be open are perimeter assets: application programming interfaces (APIs),
					software development kits (SDKs), edge adapters, examples, or UI components. This creates
					ecosystem productivity without surrendering lifecycle control of the core runtime.
				</p>
				<p>
					In practice, this is why there is no broad open equivalent of "SE core control stack" in
					the repo landscape despite large installed base. Open innovation clusters around
					integration friction, not around incumbent runtime internals.
				</p>
			</section>

			<section>
				<h2 class="note-heading-h2">OpenPLC: Still The Reference Spine</h2>
				<div class="note-section-break"></div>
				<p>
					<code>thiagoralves/*</code> shows up a lot, and much of it is old. It still matters because
					it anchored how people talk about "open PLC":
				</p>
				<ul>
					<li>A v3 runtime stack people have actually used in research and training.</li>
					<li>
						Enough ecosystem glue (editor, web UI, hardware experiments) to create a narrative.
					</li>
				</ul>
				<p>
					There is now a newer split architecture from Autonomy Logic:
					<ExternalLink href="https://github.com/Autonomy-Logic/openplc-editor"
						><code>Autonomy-Logic/openplc-editor</code></ExternalLink
					>
					(v4 desktop IDE) plus
					<ExternalLink href="https://github.com/Autonomy-Logic/openplc-runtime"
						><code>Autonomy-Logic/openplc-runtime</code></ExternalLink
					>
					(v4 headless runtime with REST/WebSocket). That differs from the older v3 model that bundled
					more of the workflow into one path.
				</p>
				<figure>
					<img
						src="/industrial/automation-repo-map/github-background.png"
						alt="Autonomy Logic Open PLC Editor visual"
						loading="lazy"
					/>
					<figcaption>Autonomy Logic Open PLC Editor (v4) ecosystem direction.</figcaption>
				</figure>
				<p>
					The lesson is not "copy OpenPLC". The lesson is that narrative plus an end-to-end path
					(even if imperfect) beats a pure library.
				</p>
				<p>
					The deeper lesson from OpenPLC's staleness is the maintenance contract implicit in
					open-source runtimes. Determinism, scan-cycle guarantees, and hardware input/output (I/O)
					support are hard but solvable; long-horizon maintenance is the harder constraint. Once
					deployed in real facilities, the key question becomes maintainership continuity over
					multi-year horizons.
				</p>
			</section>

			<section>
				<h2 class="note-heading-h2">Licence Reality: Metadata Lies</h2>
				<div class="note-section-break"></div>
				<p>
					GitHub's licence metadata is messy. A non-trivial number of repos show "no licence" in the
					API while still being mainstream open source.
				</p>
				<p>
					Example:
					<ExternalLink href="https://github.com/eclipse-mosquitto/mosquitto"
						><code>eclipse-mosquitto/mosquitto</code></ExternalLink
					>
					shows as <code>NONE</code> via the API in the snapshot, despite being a foundational Eclipse
					project.
				</p>
				<p>For commercial diligence, licence checks operate as a real workflow:</p>
				<ul>
					<li>read the actual <code>LICENSE</code> file,</li>
					<li>check for dual-licensing,</li>
					<li>check for copyleft components in the dependency chain.</li>
				</ul>
				<p>
					Copyleft examples in this map include
					<ExternalLink href="https://github.com/thiagoralves/OpenPLC_v3"
						><code>thiagoralves/OpenPLC_v3</code></ExternalLink
					>
					and
					<ExternalLink href="https://github.com/beremiz/beremiz"
						><code>beremiz/beremiz</code></ExternalLink
					>
					(both GPL-3.0).
				</p>
				<p>
					A recurring pattern in industrial procurement is that copyleft exposure in dependency
					chains becomes visible late, usually during legal review. In this segment, gateway/edge
					products that include GPL protocol components (including transitive pulls) often face
					slower approval cycles or scope reduction once compliance teams map firmware obligations.
					The practical effect is commercial friction that is usually invisible in stars, forks, and
					issue counts.
				</p>
			</section>

			<section>
				<h2 class="note-heading-h2">What Data Suggests to Build</h2>
				<div class="note-section-break"></div>
				<p>Build where pain is constant and budgets exist:</p>
				<ul>
					<li>
						Protocol and gateway reliability layers (reconnect behaviour, buffering, retries,
						backpressure, telemetry) with predictable ops behaviour.
					</li>
					<li>
						Structured Text quality tooling that works cross-vendor (formatter, lints, refactors,
						guidelines, CI integration), increasingly important as AI accelerates code generation.
					</li>
					<li>
						Test and verification workflows that fit real teams (not "formal methods theatre").
					</li>
					<li>
						Asset and change observability for OT environments (inventory drift, firmware/version
						lineage, signed rollout history, audit exports).
					</li>
				</ul>
				<p>Lower-confidence build targets in this snapshot:</p>
				<ul>
					<li>New PLC runtimes without a serious plan for IO, determinism, and support.</li>
					<li>
						Security tooling with unclear licensing and no maintenance. Great demos, bad
						dependencies.
					</li>
				</ul>
				<p>
					The "operationally boring gateway" point deserves emphasis. Gateways that cannot preserve
					config across power cycles, support safe rollback, or expose remote telemetry turn into
					high recurring ops cost. That cost rarely appears in stars or forks. The market for
					"gateway that works at 3am" is real and still underserved in open source.
				</p>
				<p>
					Cross-vendor Structured Text quality tooling remains high leverage. Teams with mixed
					CODESYS, TwinCAT, Siemens, and Allen-Bradley footprints face dialect drift, inconsistent
					tooling, weak linting, and limited CI integration. Repos that close this gap compound
					value faster than projects that add another runtime.
				</p>
			</section>

			<section>
				<h2 class="note-heading-h2">AI Coding Agents in OT</h2>
				<div class="note-section-break"></div>
				<p>
					AI coding agents are starting to change automation workflows, mostly in engineering
					throughput and documentation quality, not in autonomous plant control.
				</p>
				<p>
					A visible side effect in the repo landscape is faster hobby-project velocity. Small
					edge/protocol utilities that previously took days of focused work can now be assembled in
					hours, increasing total project count even when long-term maintenance capacity does not
					scale at the same rate.
				</p>
				<p>
					There is upside too: strong prototypes now appear faster, and some quickly-built projects
					are already good enough to become real operator tools once maintainership and validation
					catch up.
				</p>
				<p>
					The Opcilloscope example in this note fits that pattern: rapid initial build, then
					iterative hardening toward production-grade utility.
				</p>
				<figure>
					<img
						src="/industrial/automation-repo-map/opcilloscope-hero.webp"
						alt="Opcilloscope interface screenshot"
						loading="lazy"
					/>
					<figcaption>Opcilloscope: fast AI-assisted build, then iterative hardening.</figcaption>
				</figure>
				<div class="not-prose grid md:grid-cols-3 gap-3 my-5">
					<div class="data-card">
						<div class="data-card-label">What agents do well</div>
						<div class="data-card-text">
							Generate IEC/ST scaffolds, normalise naming, draft protocol adapters, and produce
							operator-facing docs faster than manual workflows.
						</div>
					</div>
					<div class="data-card">
						<div class="data-card-label">Where they fail</div>
						<div class="data-card-text">
							PLC scan-order side effects, watchdog timing, vendor add-on instruction/function block
							(AOI/FB) quirks, and implicit safety interlocks not visible in source alone.
						</div>
					</div>
					<div class="data-card">
						<div class="data-card-label">Adoption bottleneck</div>
						<div class="data-card-text">
							No common OT eval harness: weak simulation parity, sparse regression packs, and
							limited traceability from prompt to deployed logic.
						</div>
					</div>
				</div>
				<p>
					Language dynamics matter: agents are stronger in text-heavy environments, so ST and
					structured project files benefit faster than proprietary binary project formats. This is
					another reason plain-text source, command-line interface (CLI) tooling, and open docs are
					leverage multipliers.
				</p>
				<p>
					Near-term winning pattern is "agent + engineer + simulator": agent drafts, engineer
					reviews, simulator validates, then controlled rollout. Teams skipping the middle two steps
					are taking unpriced operational risk.
				</p>
				<p>
					Interpretation caveat for this map: growth in repository count increasingly mixes genuine
					platform progress with AI-accelerated prototypes. Repo volume alone is therefore a weaker
					signal than maintenance depth, issue handling, and deployment evidence.
				</p>
			</section>

			<section>
				<h2 class="note-heading-h2">Method Notes</h2>
				<div class="note-section-break"></div>
				<p>All numbers come from the GitHub API as of 27 Feb 2026.</p>
				<ul>
					<li>Freshness is based on <code>pushed_at</code>.</li>
					<li>"Popular" is based on stars/forks at snapshot time.</li>
					<li>Selection is star-biased, so low-star repos are underrepresented in this map.</li>
					<li>Language is GitHub's primary language field.</li>
					<li>
						Licence is GitHub's API metadata, which is not reliable enough to use as a compliance
						source.
					</li>
				</ul>
				<p>
					Framing was cross-checked against practitioner discussions and vendor-ecosystem
					comparisons. Direction stayed consistent:
				</p>
				<ul>
					<li>Language choice is context-dependent; there is no universal winner.</li>
					<li>Ladder remains common for plant-floor troubleshooting and ownership handoff.</li>
					<li>ST is high leverage for algorithms, reusable logic, and data-heavy workflows.</li>
					<li>
						DevOps readiness depends on more than language: plain-text source, CLI, Linux tooling,
						testing, licensing clarity, and docs access.
					</li>
				</ul>
			</section>
		</div>
	</article>
</PageLayout>

<style>
	@reference "tailwindcss";
	.prose {
		@apply text-gray-300;
	}

	.prose .lead {
		@apply text-xl text-gray-200 mb-6;
	}

	.prose p {
		@apply mb-4 leading-relaxed;
	}

	.prose ul {
		@apply mb-4 space-y-2 ml-6 list-disc;
	}

	.prose li {
		@apply leading-relaxed;
	}

	.prose code {
		@apply bg-gray-800 text-blue-400 px-1.5 py-0.5 rounded text-sm;
	}

	.prose section {
		@apply mb-12;
	}

	.prose figure {
		@apply my-6;
		@apply text-center;
	}

	.prose figure img {
		@apply rounded-lg border border-gray-700;
		@apply mx-auto;
	}

	.prose figure figcaption {
		@apply mt-2 text-xs text-gray-400;
	}

	.fuxa-figure img {
		max-width: 980px;
		width: 100%;
	}

	.data-card {
		@apply rounded-lg border border-gray-700 bg-gray-900/60 p-4;
	}

	.cta-card {
		@apply rounded-xl border border-cyan-500/40 bg-cyan-950/30 p-5 my-6;
		@apply text-center;
	}

	.cta-link {
		@apply text-2xl font-semibold leading-tight flex justify-center;
	}

	.data-card-label {
		@apply text-xs uppercase tracking-wider text-cyan-300 mb-2;
	}

	.data-card-text {
		@apply text-sm text-gray-300 leading-relaxed;
	}

	.kpi-card {
		@apply rounded-lg border border-gray-700 bg-gray-900/60 p-4 text-center;
	}

	.kpi-value {
		@apply text-2xl font-bold text-white;
	}

	.kpi-label {
		@apply text-xs uppercase tracking-wider text-gray-400 mt-1;
	}

	.chart-card {
		@apply rounded-lg border border-gray-700 bg-gray-900/60 p-4 my-6;
	}

	.chart-title {
		@apply text-sm font-semibold text-gray-200 mb-4;
	}

	.bar-row {
		@apply grid grid-cols-[7rem_1fr_2rem] sm:grid-cols-[10rem_1fr_2.5rem] items-center gap-3 mb-2;
	}

	.bar-label {
		@apply text-xs text-gray-300;
	}

	.bar-track {
		@apply h-2 rounded-full bg-gray-800 overflow-hidden;
	}

	.bar-fill {
		@apply h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500;
	}

	.bar-fill-amber {
		@apply from-amber-400 to-orange-500;
	}

	.bar-fill-violet {
		@apply from-violet-500 to-indigo-500;
	}

	.bar-value {
		@apply text-xs text-gray-300 text-right;
	}
</style>
