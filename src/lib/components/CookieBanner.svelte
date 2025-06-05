<script context="module" lang="ts">
	import { updateConsentState, trackConsentUpdate } from '$lib/gtm';
	
	// Declare gtag as a global function
	declare function gtag(...args: any[]): void;
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	interface ConsentSettings {
		analytics_storage: 'granted' | 'denied';
		functionality_storage: 'granted' | 'denied';
		personalization_storage: 'granted' | 'denied';
		security_storage: 'granted';
	}

	let accepted = false;
	let showDetails = false;
	let visible = false;
	let fadeOut = false;

	const defaultConsent: ConsentSettings = {
		analytics_storage: 'denied',
		personalization_storage: 'denied',
		functionality_storage: 'denied',
		security_storage: 'granted'
	};

	let consentSettings: ConsentSettings = { ...defaultConsent };

	// Initialize consent state on page load
	function initializeConsent() {
		if (typeof window.gtag === 'function') {
			window.gtag('consent', 'default', {
				analytics_storage: 'denied',
				personalization_storage: 'denied',
				functionality_storage: 'denied',
				security_storage: 'granted'
			});
		}
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: 'default_consent',
			consent_state: 'initial',
			'gtm.start': new Date().getTime(),
			'gtm.uniqueEventId': 1,
			page_location: window.location.href,
			page_path: window.location.pathname,
			...defaultConsent
		});
	}

	function updateConsent() {
		if (typeof window.gtag === 'function') {
			console.log('Calling gtag consent update with:', consentSettings);
			window.gtag('consent', 'update', {
				analytics_storage: consentSettings.analytics_storage,
				functionality_storage: consentSettings.functionality_storage,
				personalization_storage: consentSettings.personalization_storage,
				security_storage: 'granted'
			});
		}
		updateConsentState(consentSettings);
		trackConsentUpdate('updated', 'custom');
		localStorage.setItem('cookieConsent', JSON.stringify(consentSettings));
		accepted = true;
	}

	function acceptAll() {
		consentSettings = {
			analytics_storage: 'granted',
			functionality_storage: 'granted',
			personalization_storage: 'granted',
			security_storage: 'granted'
		};
		updateConsentState(consentSettings);
		trackConsentUpdate('updated', 'accept_all');
		updateConsent();
	}

	function essentialOnly() {
		consentSettings = {
			analytics_storage: 'denied',
			functionality_storage: 'denied',
			personalization_storage: 'denied',
			security_storage: 'granted'
		};
		updateConsentState(consentSettings);
		trackConsentUpdate('updated', 'essential_only');
		updateConsent();
	}

	function checkCookieConsent() {
		const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.get('reset') === 'true') {
			accepted = false;
			visible = true;
			fadeOut = false;
			consentSettings = { ...defaultConsent };
			initializeConsent();
			window.history.replaceState({}, '', window.location.pathname);
			return;
		}

		const saved = localStorage.getItem('cookieConsent');
		if (saved) {
			consentSettings = JSON.parse(saved);
			visible = true;
			fadeOut = true;
			setTimeout(() => {
				accepted = true;
			}, 500);
			trackConsentUpdate('restored', 'previous');
		} else {
			visible = true;
			fadeOut = false;
			initializeConsent();
		}
	}

	onMount(() => {
		checkCookieConsent();
	});
</script>

{#if !accepted || fadeOut}
	<div
		class="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 shadow-lg z-50 {visible
			? 'banner-enter-active'
			: 'banner-enter'} {fadeOut ? 'banner-exit-active' : ''}"
	>
		<div class="container mx-auto flex flex-col gap-4">
			<div class="flex flex-col sm:flex-row items-center justify-between gap-4">
				<div class="flex-1">
					<p class="text-sm">
						We use cookies to enhance your experience. Choose your preferences below. Read our 
						<a href="/privacy" class="text-[rgb(96,165,250)] hover:text-[rgb(96,165,250)]/80 transition-colors">Privacy & Cookie Policy</a> 
						for more information.
					</p>
					<p class="text-xs text-gray-400 mt-1">
						Cookies will expire after 12 months unless cleared earlier.
					</p>
				</div>
				<div class="flex gap-2">
					<button
						on:click={essentialOnly}
						class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm"
					>
						Essential Only
					</button>
					<button
						on:click={() => (showDetails = !showDetails)}
						class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm"
					>
						Customize
					</button>
					<button
						on:click={acceptAll}
						class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
					>
						Accept All
					</button>
				</div>
			</div>

			{#if showDetails}
				<div class="flex flex-col gap-4">
					<div class="mb-4">
						<label class="flex items-center gap-2">
							<input
								type="checkbox"
								checked={consentSettings.analytics_storage === 'granted'}
								on:change={() =>
									(consentSettings.analytics_storage =
										consentSettings.analytics_storage === 'granted' ? 'denied' : 'granted')}
							/>
							<div>
								<span class="font-semibold">Analytics</span>
								<p class="text-xs text-gray-400 mt-1">
									Helps us understand how visitors interact with our website to improve user
									experience.
								</p>
							</div>
						</label>
					</div>

					<div class="mb-4">
						<label class="flex items-center gap-2">
							<input
								type="checkbox"
								checked={consentSettings.functionality_storage === 'granted'}
								on:change={() =>
									(consentSettings.functionality_storage =
										consentSettings.functionality_storage === 'granted' ? 'denied' : 'granted')}
							/>
							<div>
								<span class="font-semibold">Functionality</span>
								<p class="text-xs text-gray-400 mt-1">
									Enables website functionality and user preferences storage.
								</p>
							</div>
						</label>
					</div>

					<div class="mb-4">
						<label class="flex items-center gap-2">
							<input
								type="checkbox"
								checked={consentSettings.personalization_storage === 'granted'}
								on:change={() =>
									(consentSettings.personalization_storage =
										consentSettings.personalization_storage === 'granted' ? 'denied' : 'granted')}
							/>
							<div>
								<span class="font-semibold">Personalization</span>
								<p class="text-xs text-gray-400 mt-1">
									Allows the website to remember your preferences and provide a personalized
									experience.
								</p>
							</div>
						</label>
					</div>

					<button
						on:click={updateConsent}
						class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm self-end mt-2"
					>
						Save Preferences
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}

<svelte:window on:load={checkCookieConsent} />

<style>
	.banner-enter {
		opacity: 0;
		transform: translateY(100%);
	}
	.banner-enter-active {
		opacity: 1;
		transform: translateY(0);
		transition:
			opacity 0.3s,
			transform 0.3s;
	}
	.banner-exit-active {
		opacity: 0;
		transform: translateY(100%);
		transition:
			opacity 0.3s,
			transform 0.3s;
	}
</style>
