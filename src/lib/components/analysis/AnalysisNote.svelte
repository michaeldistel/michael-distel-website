<script lang="ts">
	import { onMount } from 'svelte';

	export let title: string;
	export let description: string;
	export let publishDate: string;
	export let author: string = 'Michael Distel';
	export let sections: Array<{ id: string; title: string }> = [];
	export let backUrl: string = '/startup/notes';
	export let backLabel: string = '← Back to Analysis Notes';

	let printMode = false;
	let showTOC = false;
	let activeSection = '';
	let collapsedSections = new Set<string>();
	let readingProgress = 0;

	function handlePrint() {
		printMode = true;
		setTimeout(() => {
			window.print();
			printMode = false;
		}, 100);
	}

	function toggleSection(sectionId: string) {
		if (collapsedSections.has(sectionId)) {
			collapsedSections.delete(sectionId);
		} else {
			collapsedSections.add(sectionId);
		}
		collapsedSections = collapsedSections;
	}

	function toggleAllSections() {
		if (collapsedSections.size === 0) {
			sections.forEach((s) => collapsedSections.add(s.id));
		} else {
			collapsedSections.clear();
		}
		collapsedSections = collapsedSections;
	}

	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		showTOC = false;
	}

	function updateReadingProgress() {
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		readingProgress = Math.min((scrollTop / docHeight) * 100, 100);

		// Update active section
		const sectionElements = sections
			.map((s) => ({
				id: s.id,
				element: document.getElementById(s.id),
				title: s.title
			}))
			.filter((s) => s.element);

		for (let i = sectionElements.length - 1; i >= 0; i--) {
			const rect = sectionElements[i].element!.getBoundingClientRect();
			if (rect.top <= 100) {
				activeSection = sectionElements[i].id;
				break;
			}
		}
	}

	onMount(() => {
		window.addEventListener('scroll', updateReadingProgress);
		updateReadingProgress();

		return () => {
			window.removeEventListener('scroll', updateReadingProgress);
		};
	});

	// Export functions for parent component to use
	export { toggleSection, collapsedSections, toggleAllSections };
</script>

<svelte:head>
	<title>{title} | Michael Distel</title>
	<meta name="description" content={description} />
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
			h1,
			h2,
			h3,
			h4,
			h5,
			h6,
			p,
			li {
				color: black !important;
			}
		}
	</style>
</svelte:head>

<!-- Reading Progress Bar -->
<div class="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50 no-print">
	<div
		class="h-full bg-blue-500 transition-all duration-300 ease-out"
		style="width: {readingProgress}%"
	></div>
</div>

<!-- Table of Contents Toggle -->
<div class="fixed bottom-6 right-6 z-40 no-print">
	<button
		on:click={() => (showTOC = !showTOC)}
		class="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
		title="Table of Contents"
	>
		<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			></path>
		</svg>
	</button>
</div>

<!-- Table of Contents Sidebar -->
{#if showTOC}
	<div
		class="fixed inset-0 bg-black bg-opacity-50 z-30 no-print"
		on:click={() => (showTOC = false)}
		on:keydown={(e) => e.key === 'Escape' && (showTOC = false)}
		role="button"
		tabindex="0"
		aria-label="Close table of contents"
	></div>
	<div
		class="fixed top-0 right-0 h-full w-80 bg-slate-900 border-l border-slate-700 z-40 no-print overflow-y-auto"
	>
		<div class="p-6">
			<div class="flex justify-between items-center mb-6">
				<h3 class="text-lg font-semibold text-white">Table of Contents</h3>
				<button
					on:click={() => (showTOC = false)}
					class="text-gray-400 hover:text-white transition-colors"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						></path>
					</svg>
				</button>
			</div>

			<nav>
				<ul class="space-y-2">
					{#each sections as section}
						<li>
							<button
								on:click={() => scrollToSection(section.id)}
								class="w-full text-left px-3 py-2 rounded text-sm transition-colors {activeSection ===
								section.id
									? 'bg-blue-600 text-white'
									: 'text-gray-300 hover:bg-slate-800 hover:text-white'}"
							>
								{section.title}
							</button>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Reading Progress in TOC -->
			<div class="mt-8 pt-6 border-t border-slate-700">
				<div class="text-xs text-gray-400 mb-2">Reading Progress</div>
				<div class="w-full bg-slate-800 rounded-full h-2">
					<div
						class="bg-blue-500 h-2 rounded-full transition-all duration-300"
						style="width: {readingProgress}%"
					></div>
				</div>
				<div class="text-xs text-gray-400 mt-1">{Math.round(readingProgress)}% complete</div>
			</div>
		</div>
	</div>
{/if}

<div class="container mx-auto px-4 py-8 max-w-4xl" class:print-optimized={printMode}>
	<!-- Header with controls -->
	<div class="no-print mb-6 flex justify-between items-start">
		<div>
			<a
				href={backUrl}
				class="font-medium text-blue-600 dark:text-blue-500 hover:underline mb-2 inline-block"
			>
				{backLabel}
			</a>
		</div>
		<div class="flex gap-3">
			<button
				on:click={toggleAllSections}
				class="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 transition-colors"
				title="Toggle all sections"
			>
				{collapsedSections.size === 0 ? 'Collapse All' : 'Expand All'}
			</button>
			<button
				on:click={handlePrint}
				class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
			>
				Print / Save as PDF
			</button>
		</div>
	</div>

	<!-- Note Header -->
	<header class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold mb-2">{title}</h1>
		<div class="text-gray-400 mb-4">
			<span>Analysis Note</span> •
			<span>{publishDate}</span> •
			<span>by {author}</span>
		</div>
		<p class="text-xl text-gray-300 font-medium">
			{description}
		</p>
	</header>

	<!-- Slot for startup overview section -->
	<slot name="overview" />

	<!-- Main content slot -->
	<article class="prose prose-invert prose-lg max-w-none space-y-6">
		<slot />
	</article>

	<!-- Footer for print -->
	<footer class="mt-12 pt-6 border-t border-gray-700">
		<p class="text-sm text-gray-400">
			This note was published on <strong>michaeldistel.com{$$props.currentUrl || ''}</strong>
			on {publishDate}.
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
