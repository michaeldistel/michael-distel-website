<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	// Navigation items
	const navItems = [
		{ path: '/', label: 'Home' },
		{ path: '/about', label: 'About' },
		{ path: '/startup', label: 'Startup' },
		{ path: '/industrial', label: 'Industrial' },
		{ path: '/adventures', label: 'Adventures' },
		{ path: '/contact', label: 'Contact' }
	];

	// State management
	let isVisible = true;
	let lastScrollY = 0;
	let scrollingDown = false;
	let showMenu = false;

	// Reactive values for note detection and current path
	$: currentPath = $page.url.pathname;
	$: isNotePage =
		currentPath.includes('/startup/notes/') && !currentPath.endsWith('/startup/notes');

	// Reactive function to check if current path matches nav item
	$: checkActivePath = (path: string) => {
		if (path === '/') {
			return currentPath === '/';
		}

		// For other paths, check if current path starts with the nav path
		// But be more specific to avoid false matches
		return (
			currentPath.startsWith(path) &&
			(currentPath === path ||
				currentPath.startsWith(path + '/') ||
				currentPath.startsWith(path + '?'))
		);
	};

	// Handle scroll behavior
	function handleScroll() {
		const currentScrollY = window.scrollY;

		// Only hide after scrolling down past 100px
		if (currentScrollY > 100) {
			if (currentScrollY > lastScrollY && !scrollingDown) {
				// Scrolling down - hide nav
				scrollingDown = true;
				isVisible = false;
			} else if (currentScrollY < lastScrollY && scrollingDown) {
				// Scrolling up - show nav
				scrollingDown = false;
				isVisible = true;
			}
		} else {
			// Always show when near top
			isVisible = true;
			scrollingDown = false;
		}

		lastScrollY = currentScrollY;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	// Menu functions
	function toggleMenu() {
		showMenu = !showMenu;
	}

	function closeMenu() {
		showMenu = false;
	}

	// Note control functions
	function handleToggleTOC() {
		// Dispatch custom event that DetailedNote can listen to
		if (typeof window !== 'undefined') {
			window.dispatchEvent(new CustomEvent('toggleTOC'));
		}
		closeMenu();
	}

	// Handle escape key
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && showMenu) {
			closeMenu();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Mobile-only: Floating Menu Button -->
<button
	on:click={toggleMenu}
	class="md:hidden fixed z-50 transition-all duration-300 ease-in-out {isVisible
		? 'translate-y-0 opacity-100'
		: 'translate-y-full opacity-0'} 
		bottom-6 right-6
		w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg
		flex items-center justify-center {showMenu ? 'rotate-45' : ''}"
	title="Menu"
	aria-label="Toggle Menu"
>
	<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		{#if showMenu}
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"
			></path>
		{:else}
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			></path>
		{/if}
	</svg>
</button>

<!-- Desktop: Horizontal Navigation Bar -->
<div
	class="hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out {isVisible
		? 'translate-y-0 opacity-100'
		: '-translate-y-full opacity-0'}"
>
	<div class="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<!-- Logo/Brand with Home Link -->
				<div class="flex-shrink-0">
					<a
						href="/"
						class="text-xl font-bold transition-colors relative {checkActivePath('/')
							? 'text-amber-300'
							: 'text-white hover:text-amber-300'} px-1 py-2 block"
					>
						Michael Distel
						{#if checkActivePath('/')}
							<div class="absolute bottom-0 left-0 w-full h-0.5 bg-amber-300"></div>
						{/if}
					</a>
				</div>

				<!-- Navigation -->
				<nav class="flex items-center space-x-8">
					{#each navItems as item}
						{@const isActive = checkActivePath(item.path)}
						<a
							href={item.path}
							class="text-sm font-medium transition-colors relative {isActive
								? 'text-amber-300'
								: 'text-gray-300 hover:text-white'} px-1 py-2"
						>
							{item.label}
							{#if isActive}
								<div class="absolute bottom-0 left-0 w-full h-0.5 bg-amber-300"></div>
							{/if}
						</a>
					{/each}
				</nav>

				<!-- Note Controls (desktop) -->
				{#if isNotePage}
					<div class="flex items-center space-x-4">
						<!-- Table of Contents -->
						<button
							on:click={handleToggleTOC}
							class="text-sm text-gray-300 hover:text-white transition-colors"
							title="Table of Contents"
							aria-label="Table of Contents"
						>
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</button>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<!-- Mobile: Full Screen Menu Overlay -->
{#if showMenu}
	<div class="md:hidden fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-sm">
		<!-- Close overlay by clicking background -->
		<div
			class="absolute inset-0"
			on:click={closeMenu}
			on:keydown={(e) => e.key === 'Enter' && closeMenu()}
			role="button"
			tabindex="0"
			aria-label="Close menu"
		></div>

		<!-- Menu Content -->
		<div class="relative h-full flex flex-col justify-center items-center p-8">
			<!-- Main Navigation -->
			<nav class="mb-8">
				<ul class="space-y-4">
					{#each navItems as item}
						<li>
							<a
								href={item.path}
								on:click={closeMenu}
								class="block text-2xl font-medium transition-colors {checkActivePath(item.path)
									? 'text-amber-300'
									: 'text-gray-300 hover:text-white'}"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Note Controls (only show on note pages) -->
			{#if isNotePage}
				<div class="border-t border-slate-700 pt-8 w-full max-w-sm">
					<h3 class="text-lg font-medium text-gray-300 mb-4 text-center">Note Controls</h3>
					<div class="space-y-4">
						<!-- Table of Contents -->
						<button
							on:click={handleToggleTOC}
							class="w-full flex items-center justify-center gap-3 px-6 py-3 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
						>
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
							Table of Contents
						</button>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
