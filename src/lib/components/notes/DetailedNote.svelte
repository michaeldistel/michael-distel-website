<script lang="ts">
	import { onMount } from 'svelte';
	import '$lib/styles/typography.css';
	import Breadcrumbs from '$lib/components/navigation/Breadcrumbs.svelte';

	export let title: string;
	export let description: string;
	export let publishDate: string;
	export let author: string = 'Michael Distel';
	export let sections: Array<{ id: string; title: string }> = [];
	export let breadcrumbs: Array<{ label: string; href?: string }> = [];

	let printMode = false;
	let showTOC = false;
	let activeSection = '';
	let readingProgress = 0;
	let tocScrollable = false;
	let tocContainer: HTMLElement;

	function handlePrint() {
		printMode = true;
		setTimeout(() => {
			window.print();
			printMode = false;
		}, 100);
	}

	function toggleTOC() {
		showTOC = !showTOC;
		if (showTOC) {
			// Check if content is scrollable after the TOC is shown
			setTimeout(() => {
				checkTOCScrollable();
			}, 100);
		}
	}
	
	function checkTOCScrollable() {
		if (tocContainer) {
			tocScrollable = tocContainer.scrollHeight > tocContainer.clientHeight;
		}
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
		window.addEventListener('toggleTOC', toggleTOC);
		updateReadingProgress();

		return () => {
			window.removeEventListener('scroll', updateReadingProgress);
			window.removeEventListener('toggleTOC', toggleTOC);
		};
	});
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

<!-- Table of Contents Sidebar -->
{#if showTOC}
	<div
		class="fixed inset-0 bg-black bg-opacity-50 z-40 no-print"
		on:click={() => (showTOC = false)}
		on:keydown={(e) => e.key === 'Escape' && (showTOC = false)}
		role="button"
		tabindex="0"
		aria-label="Close table of contents"
	></div>
	<div
		bind:this={tocContainer}
		class="fixed top-0 right-0 h-full w-80 bg-slate-900 border-l border-slate-700 z-50 no-print overflow-y-auto toc-scroll"
	>
		<div class="p-6 pb-20 relative">
			<div class="flex justify-between items-center note-space-lg">
				<h3 class="note-heading-toc">Table of Contents</h3>
				<button
					on:click={() => (showTOC = false)}
					class="text-gray-400 hover:text-white transition-colors"
					aria-label="Close Table of Contents"
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
				<div class="text-xs text-gray-400 note-space-xs">Reading Progress</div>
				<div class="w-full bg-slate-800 rounded-full h-2">
					<div
						class="bg-blue-500 h-2 rounded-full transition-all duration-300"
						style="width: {readingProgress}%"
					></div>
				</div>
				<div class="text-xs text-gray-400 mt-1">{Math.round(readingProgress)}% complete</div>
			</div>

			<!-- Actions -->
			<div class="mt-6 pt-6 border-t border-slate-700">
				<button
					on:click={handlePrint}
					class="w-full flex items-center justify-center note-gap-xs px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
						></path>
					</svg>
					Print / Save as PDF
				</button>
			</div>
		</div>
		
		<!-- Bottom fade gradient to indicate more content - only show when scrollable -->
		{#if tocScrollable}
			<div class="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none z-10"></div>
		{/if}
		
		<!-- Scroll hint for mobile - only show when content is scrollable -->
		{#if tocScrollable}
			<div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500 text-xs animate-pulse md:hidden">
				<svg class="w-4 h-4 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
				</svg>
				<span>Scroll for more</span>
			</div>
		{/if}
	</div>
{/if}

<div class="container mx-auto px-4 py-8 max-w-4xl" class:print-optimized={printMode}>
	<!-- Breadcrumbs -->
	{#if breadcrumbs.length > 0}
		<Breadcrumbs items={breadcrumbs} />
	{/if}
	
	<!-- Note Header -->
	<header class="mb-8">
		<h1 class="note-heading-h1">{title}</h1>
		<div class="text-gray-400 mb-4">
			<span>Note</span> •
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
	/* Better mobile scrollbar styling for TOC */
	.toc-scroll {
		scrollbar-width: thin;
		scrollbar-color: #475569 #1e293b;
	}
	
	.toc-scroll::-webkit-scrollbar {
		width: 6px;
	}
	
	.toc-scroll::-webkit-scrollbar-track {
		background: #1e293b;
	}
	
	.toc-scroll::-webkit-scrollbar-thumb {
		background: #475569;
		border-radius: 3px;
	}
	
	.toc-scroll::-webkit-scrollbar-thumb:hover {
		background: #64748b;
	}

	@media print {
		:global(body) {
			background: white !important;
			color: black !important;
		}
	}
</style>
