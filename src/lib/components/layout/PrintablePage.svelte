<script lang="ts">
	export let title: string;
	export let description: string;
	export let maxWidth: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' = '4xl';
	
	const maxWidthClasses = {
		'sm': 'max-w-sm',
		'md': 'max-w-md', 
		'lg': 'max-w-lg',
		'xl': 'max-w-xl',
		'2xl': 'max-w-2xl',
		'3xl': 'max-w-3xl',
		'4xl': 'max-w-4xl'
	};
	
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
			h1, h2, h3, h4, h5, h6, p, li {
				color: black !important;
			}
		}
	</style>
</svelte:head>

<div class="container mx-auto px-4 py-8 {maxWidthClasses[maxWidth]}" class:print-optimized={printMode}>
	<!-- Header controls slot -->
	<slot name="header-controls">
		<div class="no-print mb-6 flex justify-between items-start">
			<slot name="back-navigation" />
			<div class="flex gap-3">
				<button 
					on:click={handlePrint}
					class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
				>
					Print / Save as PDF
				</button>
				<slot name="additional-controls" />
			</div>
		</div>
	</slot>

	<!-- Main content -->
	<slot />
</div>

<style>
	@media print {
		:global(body) {
			background: white !important;
			color: black !important;
		}
	}
</style>
