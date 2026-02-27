<script lang="ts">
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import Breadcrumbs from '$lib/components/navigation/Breadcrumbs.svelte';
	import ExternalLink from '$lib/components/navigation/ExternalLink.svelte';

	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Industrial', href: '/industrial' },
		{ label: 'Industrial Automation Repo Map' }
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

	<article class="max-w-3xl mx-auto">
		<header class="mb-8">
			<h1 class="text-4xl font-bold mb-4">Industrial Automation Repo Map</h1>
			<div class="text-gray-400 text-sm mb-4">
				<time datetime="2026-02-27">Note - 27 Feb 2026 - by Michael Distel</time>
			</div>
		</header>

		<div class="prose prose-invert max-w-none">
			<p class="lead">
				I keep a running list of industrial automation repos because the space is noisy and weirdly
				cyclical. Every few years someone "rediscovers" open PLCs, SCADA-in-a-browser, protocol
				gateways, and IDE tooling. Most of it is hobby-grade. Some of it is quietly becoming
				infrastructure.
			</p>

			<p>
				This note is what happens when you treat the list like a dataset instead of a vibes folder.
			</p>

			<p>
				Canonical list: <code>interesting-repos/industrial-automation.md</code> (GitHub:
				<ExternalLink
					href="https://github.com/michaeldistel/michaeldistel/blob/main/interesting-repos/industrial-automation.md"
				>
					michaeldistel/michaeldistel
				</ExternalLink>)
			</p>

			<section>
				<h2>Quick Take</h2>
				<p>
					Industrial automation open source is not "one market". It is three overlapping markets
					that mostly do not like each other:
				</p>
				<ul>
					<li>
						Protocol plumbing (Modbus, OPC UA, EtherCAT, MQTT) where the winners are boring, widely
						deployed, and maintained for a decade.
					</li>
					<li>Edge and observability where the winners are agents and gateways, not dashboards.</li>
					<li>
						Developer experience (especially Structured Text) where VS Code is becoming the de facto
						control surface.
					</li>
				</ul>
				<p>
					If you are building here, your differentiation is rarely the protocol. It is the workflow,
					operability, and distribution.
				</p>
			</section>

			<section>
				<h2>Dataset Overview</h2>
				<p>Snapshot date: 27 Feb 2026.</p>
				<ul>
					<li>Repos: 90.</li>
					<li>
						Freshness: 68/90 had a push within 12 months; 22/90 are stale and moved to Archive
						(cut-off: last push before 2025-02-27).
					</li>
					<li>"Popular" (rule: >= 1,000 stars or >= 500 forks): 19/90.</li>
				</ul>

				<h3>List Composition (By Category)</h3>
				<p>
					This is how the list breaks down by section. It is more "tooling and plumbing" than
					"control runtimes".
				</p>
				<table>
					<thead>
						<tr>
							<th>Category</th>
							<th class="text-right">Repos</th>
						</tr>
					</thead>
					<tbody>
						<tr><td>VS Code extensions</td><td class="text-right">2</td></tr>
						<tr><td>Soft PLCs and runtimes</td><td class="text-right">4</td></tr>
						<tr><td>PLC frameworks and developer tooling</td><td class="text-right">13</td></tr>
						<tr><td>Analysis and verification</td><td class="text-right">2</td></tr>
						<tr><td>CODESYS tooling</td><td class="text-right">1</td></tr>
						<tr><td>OPC UA</td><td class="text-right">4</td></tr>
						<tr><td>EtherCAT</td><td class="text-right">4</td></tr>
						<tr><td>Modbus</td><td class="text-right">6</td></tr>
						<tr><td>EtherNet/IP and CIP</td><td class="text-right">3</td></tr>
						<tr><td>PROFINET</td><td class="text-right">1</td></tr>
						<tr><td>CAN</td><td class="text-right">1</td></tr>
						<tr><td>ADS (TwinCAT)</td><td class="text-right">1</td></tr>
						<tr><td>PLC access stacks</td><td class="text-right">1</td></tr>
						<tr><td>MQTT</td><td class="text-right">3</td></tr>
						<tr><td>Multi-protocol clients</td><td class="text-right">2</td></tr>
						<tr><td>Siemens S7</td><td class="text-right">4</td></tr>
						<tr><td>SCADA and HMI</td><td class="text-right">2</td></tr>
						<tr><td>Data collection and observability</td><td class="text-right">2</td></tr>
						<tr><td>Simulation, digital twin, and CAD</td><td class="text-right">2</td></tr>
						<tr><td>OT security labs</td><td class="text-right">1</td></tr>
						<tr><td>Testing and quality</td><td class="text-right">1</td></tr>
						<tr><td>Robotics and integration</td><td class="text-right">1</td></tr>
						<tr><td>Edge and platform stacks</td><td class="text-right">6</td></tr>
						<tr><td>UI and design systems</td><td class="text-right">1</td></tr>
						<tr><td>Archive</td><td class="text-right">22</td></tr>
					</tbody>
				</table>

				<h3>Star Distribution</h3>
				<p>This is not a list of household names. It is a list of niche tools with a fat tail.</p>
				<ul>
					<li>Median stars: 161</li>
					<li>25th percentile: 52</li>
					<li>75th percentile: 777</li>
					<li>90th percentile: 1,981</li>
				</ul>
				<p>Breakdown by star bands:</p>
				<table>
					<thead>
						<tr>
							<th>Stars</th>
							<th class="text-right">Repos</th>
						</tr>
					</thead>
					<tbody>
						<tr><td>0</td><td class="text-right">2</td></tr>
						<tr><td>1 to 9</td><td class="text-right">10</td></tr>
						<tr><td>10 to 49</td><td class="text-right">10</td></tr>
						<tr><td>50 to 199</td><td class="text-right">26</td></tr>
						<tr><td>200 to 999</td><td class="text-right">23</td></tr>
						<tr><td>1,000+</td><td class="text-right">19</td></tr>
					</tbody>
				</table>

				<h3>Language Mix (Primary)</h3>
				<p>The primary language distribution is a decent proxy for where the work actually sits.</p>
				<ul>
					<li>C#: 17</li>
					<li>Python: 15</li>
					<li>C++: 12</li>
					<li>C: 11</li>
					<li>TypeScript: 9</li>
					<li>Java: 5</li>
					<li>Rust: 4</li>
				</ul>
				<p>Translation: the glue is still .NET and Python; the protocol stacks are still C/C++.</p>
			</section>

			<section>
				<h2>What Gets Real Adoption</h2>
				<p>The top by stars is mostly infrastructure, not "apps". No surprises.</p>
				<p>Top repos by stars (selected):</p>
				<ul>
					<li>
						<code>influxdata/telegraf</code> (16.7k stars, 5.7k forks): the agent layer is a distribution
						channel.
					</li>
					<li>
						<code>eclipse-mosquitto/mosquitto</code> (10.7k, 2.6k): MQTT remains the default pipe.
					</li>
					<li>
						<code>dgiot/dgiot</code> (5.0k, 1.1k): a very real edge platform, with a China-first flavour.
					</li>
					<li>
						<code>frangoteam/FUXA</code> (4.1k, 1.2k): SCADA/HMI in the browser, broadly useful.
					</li>
					<li><code>stephane/libmodbus</code> (4.1k, 1.9k): canonical Modbus in C.</li>
					<li><code>open62541/open62541</code> (3.0k, 1.4k): OPC UA baseline.</li>
				</ul>
				<p>
					If you are building something that competes with these, you are not "building an
					integration". You are picking a fight with incumbent open source gravity.
				</p>
			</section>

			<section>
				<h2>Where The Maintenance Load Sits</h2>
				<p>
					The repos with the most open issues are the ones that matter operationally. They are not
					"badly run". They are <em>used</em>.
				</p>
				<p>Top open-issue counts (selected):</p>
				<ul>
					<li><code>open62541/open62541</code>: 883</li>
					<li><code>eclipse-mosquitto/mosquitto</code>: 721</li>
					<li><code>influxdata/telegraf</code>: 452</li>
					<li><code>frangoteam/FUXA</code>: 360</li>
				</ul>
				<p>
					This matters if you are betting on these projects: maintainer bandwidth and triage culture
					are part of your supply chain.
				</p>
			</section>

			<section>
				<h2>The Real Control Surface Is VS Code</h2>
				<p>
					The most investable pattern in the list is not "open PLC runtime". It is the migration of
					Structured Text developer experience into mainstream editors.
				</p>
				<p>Two camps show up:</p>
				<ul>
					<li>
						Syntax coverage: highlights, snippets, outline, formatter-lite. This spreads fast.
					</li>
					<li>
						IDE-grade language intelligence (LSP): diagnostics, indexing, rename, quick fixes,
						formatting discipline. This is what teams pay for once a codebase exists.
					</li>
				</ul>
				<p>
					If you are a tooling startup, assume VS Code is the browser. Assume LSP is the product.
				</p>
			</section>

			<section>
				<h2>Siemens: Perimeter Strategy In Public</h2>
				<p>The Siemens repos in the list are mostly "around the PLC", not "the PLC":</p>
				<ul>
					<li>Engineering automation examples (<code>tia-portal-openness-code-snippets</code>).</li>
					<li>Edge debugging (<code>edgeshark</code>).</li>
					<li>BSPs (<code>meta-iot2050</code>).</li>
					<li>A design system (<code>ix</code>).</li>
					<li>Webserver API clients for S7.</li>
				</ul>
				<p>
					This is a perimeter strategy: open enough to make the ecosystem productive, keep the core
					runtime and lifecycle tooling behind the wall.
				</p>
				<p>
					As a founder, do not misread this as "Siemens is going open". It is "Siemens is making
					integration cheaper". Still useful, still not altruistic.
				</p>
			</section>

			<section>
				<h2>OpenPLC: Still The Reference Spine</h2>
				<p>
					<code>thiagoralves/*</code> shows up a lot, and much of it is old. It still matters because
					it anchored how people talk about "open PLC":
				</p>
				<ul>
					<li>A runtime stack people have actually used in research and training.</li>
					<li>
						Enough ecosystem glue (editor, web UI, hardware experiments) to create a narrative.
					</li>
				</ul>
				<p>
					The lesson is not "copy OpenPLC". The lesson is that narrative plus an end-to-end path
					(even if imperfect) beats a pure library.
				</p>
			</section>

			<section>
				<h2>Licence Reality: Metadata Lies</h2>
				<p>
					GitHub's licence metadata is messy. A non-trivial number of repos show "no licence" in the
					API while still being mainstream open source.
				</p>
				<p>
					Example: <code>eclipse-mosquitto/mosquitto</code> shows as <code>NONE</code> via the API in
					my snapshot, despite being a foundational Eclipse project.
				</p>
				<p>
					If you are using this list for commercial diligence, treat licences as a real workflow:
				</p>
				<ul>
					<li>read the actual <code>LICENSE</code> file,</li>
					<li>check for dual-licensing,</li>
					<li>check for copyleft components in the dependency chain.</li>
				</ul>
			</section>

			<section>
				<h2>What I'd Build (If I Had To Pick A Hill)</h2>
				<p>I would rather build where the pain is constant and budgets exist:</p>
				<ul>
					<li>
						Structured Text quality tooling that works cross-vendor (formatter, lints, refactors,
						guidelines, CI integration).
					</li>
					<li>
						Test and verification workflows that fit real teams (not "formal methods theatre").
					</li>
					<li>
						Gateways that are operationally boring: upgrades, rollbacks, telemetry, config
						management.
					</li>
				</ul>
				<p>I would be cautious about:</p>
				<ul>
					<li>New PLC runtimes without a serious plan for IO, determinism, and support.</li>
					<li>
						Security tooling with unclear licensing and no maintenance. Great demos, bad
						dependencies.
					</li>
				</ul>
			</section>

			<section>
				<h2>Method Notes</h2>
				<p>All numbers come from the GitHub API as of 27 Feb 2026.</p>
				<ul>
					<li>Freshness is based on <code>pushed_at</code>.</li>
					<li>"Popular" is based on stars/forks at snapshot time.</li>
					<li>Language is GitHub's primary language field.</li>
					<li>
						Licence is GitHub's API metadata, which is not reliable enough to use as a compliance
						source.
					</li>
				</ul>
				<p>If you disagree with the framing, great. Send me a repo that proves it.</p>
			</section>
		</div>
	</article>
</PageLayout>

<style>
	.prose {
		@apply text-gray-300;
	}

	.prose .lead {
		@apply text-xl text-gray-200 mb-6;
	}

	.prose h2 {
		@apply text-2xl font-bold text-white mt-12 mb-4;
	}

	.prose h3 {
		@apply text-xl font-semibold text-white mt-8 mb-3;
	}

	.prose p {
		@apply mb-4 leading-relaxed;
	}

	.prose ul,
	.prose ol {
		@apply mb-4 space-y-2 ml-6;
	}

	.prose li {
		@apply leading-relaxed;
	}

	.prose code {
		@apply bg-gray-800 text-blue-400 px-1.5 py-0.5 rounded text-sm;
	}

	.prose table {
		@apply w-full border-collapse my-6;
	}

	.prose thead {
		@apply border-b border-gray-700;
	}

	.prose th {
		@apply text-left text-white font-semibold py-2 px-4;
	}

	.prose td {
		@apply py-2 px-4 border-b border-gray-800;
	}

	.prose tbody tr:hover {
		@apply bg-gray-800/30;
	}

	.prose section {
		@apply mb-12;
	}
</style>
