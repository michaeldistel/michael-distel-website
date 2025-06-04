<script context="module" lang="ts">
	// Declare gtag as a global function
	declare function gtag(...args: any[]): void;
</script>

<script lang="ts">
	interface ConsentSettings {
		ad_storage: 'granted' | 'denied';
		ad_user_data: 'granted' | 'denied';
		ad_personalization: 'granted' | 'denied';
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
		ad_storage: 'denied',
		analytics_storage: 'denied',
		ad_user_data: 'granted',
		ad_personalization: 'granted',
		personalization_storage: 'denied',
		functionality_storage: 'denied',
		security_storage: 'granted'
	};

	let consentSettings: ConsentSettings = { ...defaultConsent };

	// Initialize consent state on page load
	function initializeConsent() {
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
		window.dataLayer = window.dataLayer || [];
		// Use gtag for consent updates
		gtag('consent', 'update', {
			...consentSettings,
			url_passthrough: true
		});

		localStorage.setItem('cookieConsent', JSON.stringify(consentSettings));
		accepted = true;
	}

	function acceptAll() {
		consentSettings = {
			ad_storage: 'granted',
			ad_user_data: 'granted',
			ad_personalization: 'granted',
			analytics_storage: 'granted',
			functionality_storage: 'granted',
			personalization_storage: 'granted',
			security_storage: 'granted'
		};
		gtag('consent', 'update', {
			...consentSettings,
			url_passthrough: true
		});
		updateConsent();
	}

	function checkCookieConsent() {
		const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.get('reset') === 'true') {
			accepted = false;
			visible = true;
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
			window.dataLayer.push({
				event: 'consent_update',
				consent_state: 'restored',
				user_choice: 'previous',
				'gtm.uniqueEventId': Date.now() % 1000000,
				page_location: window.location.href,
				page_path: window.location.pathname,
				...consentSettings
			});
		} else {
			visible = true;
			initializeConsent();
		}
	}
</script>

{#if !accepted || fadeOut}
	<div
		class="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 shadow-lg z-50 {visible
			? 'banner-enter-active'
			: 'banner-enter'} {fadeOut ? 'banner-exit-active' : ''}"
	>
		<div class="container mx-auto flex flex-col gap-4">
			<div class="flex flex-col sm:flex-row items-center justify-between gap-4">
				<p class="text-sm">
					We use cookies to enhance your experience. Choose your preferences below.
				</p>
				<div class="flex gap-2">
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
								checked={consentSettings.ad_storage === 'granted'}
								on:change={() =>
									(consentSettings.ad_storage =
										consentSettings.ad_storage === 'granted' ? 'denied' : 'granted')}
							/>
							<div>
								<span class="font-semibold">Advertising Storage</span>
								<p class="text-xs text-gray-400 mt-1">
									Enables features related to advertising and conversion tracking.
								</p>
							</div>
						</label>
					</div>

					<div class="mb-4">
						<label class="flex items-center gap-2">
							<input
								type="checkbox"
								checked={consentSettings.ad_personalization === 'granted'}
								on:change={() =>
									(consentSettings.ad_personalization =
										consentSettings.ad_personalization === 'granted' ? 'denied' : 'granted')}
							/>
							<div>
								<span class="font-semibold">Ad Personalization</span>
								<p class="text-xs text-gray-400 mt-1">
									Allows for personalized advertising experiences.
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
