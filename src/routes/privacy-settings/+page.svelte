<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	interface ConsentSettings {
		ad_storage: 'granted' | 'denied';
		analytics_storage: 'granted' | 'denied';
		personalization_storage: 'granted' | 'denied';
		functionality_storage: 'granted' | 'denied';
	}

	let consentSettings: ConsentSettings = {
		ad_storage: 'denied',
		analytics_storage: 'denied',
		personalization_storage: 'denied',
		functionality_storage: 'denied'
	};

	let loaded = false;

	onMount(() => {
		if (browser) {
			const saved = localStorage.getItem('cookieConsent');
			if (saved) {
				consentSettings = JSON.parse(saved);
			}
			loaded = true;
		}
	});

	function updateSettings() {
		if (!browser) return;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: 'consent_update',
			consent_state: 'updated',
			user_choice: 'settings_page',
			...consentSettings
		});
		localStorage.setItem('cookieConsent', JSON.stringify(consentSettings));
	}

	function handleAnalyticsChange(e: Event) {
		const target = e.target as HTMLInputElement;
		consentSettings.analytics_storage = target.checked ? 'granted' : 'denied';
		updateSettings();
	}

	function resetConsent() {
		if (browser) {
			localStorage.removeItem('cookieConsent');
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				event: 'consent_update',
				consent_state: 'reset',
				user_choice: 'reset_to_default'
			});
			window.location.href = '/?reset=true'; // Force page reload
		}
	}
</script>

<div class="container mx-auto px-4 py-8 max-w-3xl">
	<h1 class="text-4xl font-bold mb-6">Privacy Settings</h1>
	{#if loaded}
		<div class="flex flex-col gap-6 bg-gray-800 p-6 rounded-lg">
			<div class="border-b border-gray-700 pb-4">
				<h2 class="text-xl font-semibold mb-2">Reset Preferences</h2>
				<p class="text-gray-400 mb-4">
					Reset all cookie preferences to their default state and show the consent banner again.
				</p>
				<button
					on:click={resetConsent}
					class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
				>
					Reset to Default
				</button>
			</div>

			<div>
				<label class="flex items-center space-x-2">
					<input
						type="checkbox"
						checked={consentSettings.analytics_storage === 'granted'}
						on:change={handleAnalyticsChange}
					/>
					<span>Enable Analytics Cookies</span>
				</label>
				<!-- Repeat for other settings -->
			</div>
		</div>
	{/if}
</div>
