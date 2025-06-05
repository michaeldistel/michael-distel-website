<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    interface ConsentSettings {
        analytics_storage: 'granted' | 'denied';
        personalization_storage: 'granted' | 'denied';
        functionality_storage: 'granted' | 'denied';
    }

    let consentSettings: ConsentSettings = {
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
        // Update localStorage
        localStorage.setItem('cookieConsent', JSON.stringify(consentSettings));
        // Update GTM consent state
        if (typeof window.gtag === 'function') {
            window.gtag('consent', 'update', {
                analytics_storage: consentSettings.analytics_storage,
                functionality_storage: consentSettings.functionality_storage,
                personalization_storage: consentSettings.personalization_storage,
                security_storage: 'granted'
            });
        }
        // Push consent_update event for GTM
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'consent_update',
            consent_state: 'updated',
            user_choice: 'settings_page',
            ...consentSettings
        });
    }

    function handleConsentChange(type: keyof ConsentSettings, e: Event) {
        const target = e.target as HTMLInputElement;
        consentSettings[type] = target.checked ? 'granted' : 'denied';
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
    <h1 class="text-4xl font-bold mb-6">Privacy & Cookie Policy</h1>

    {#if loaded}
        <section class="mb-12 bg-gray-800 p-6 rounded-lg">
            <h2 class="text-2xl font-semibold mb-4">Privacy Settings</h2>
            <div class="flex flex-col gap-6">
                <div class="border-b border-gray-700 pb-4">
                    <h3 class="text-xl font-semibold mb-2">Reset Preferences</h3>
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

                <div class="space-y-4">
                    <div class="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                        <div>
                            <h4 class="font-semibold mb-1">Essential Cookies</h4>
                            <p class="text-sm text-gray-400">Required for the website to function properly</p>
                        </div>
                        <div class="flex items-center">
                            <span class="text-sm text-gray-400 mr-2">Always Active</span>
                            <input
                                type="checkbox"
                                checked={true}
                                disabled
                                class="opacity-50"
                            />
                        </div>
                    </div>

                    <div class="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                        <div>
                            <h4 class="font-semibold mb-1">Analytics Cookies</h4>
                            <p class="text-sm text-gray-400">Help us understand how visitors interact with our website</p>
                        </div>
                        <div class="flex items-center">
                            <input
                                type="checkbox"
                                checked={consentSettings.analytics_storage === 'granted'}
                                on:change={(e) => handleConsentChange('analytics_storage', e)}
                            />
                        </div>
                    </div>

                    <div class="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                        <div>
                            <h4 class="font-semibold mb-1">Personalization Cookies</h4>
                            <p class="text-sm text-gray-400">Remember your preferences and settings</p>
                        </div>
                        <div class="flex items-center">
                            <input
                                type="checkbox"
                                checked={consentSettings.personalization_storage === 'granted'}
                                on:change={(e) => handleConsentChange('personalization_storage', e)}
                            />
                        </div>
                    </div>

                    <div class="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                        <div>
                            <h4 class="font-semibold mb-1">Functionality Cookies</h4>
                            <p class="text-sm text-gray-400">Enable enhanced functionality and personalization</p>
                        </div>
                        <div class="flex items-center">
                            <input
                                type="checkbox"
                                checked={consentSettings.functionality_storage === 'granted'}
                                on:change={(e) => handleConsentChange('functionality_storage', e)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    {/if}

    <div class="prose prose-invert">
        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p>
                Cookies are small text files that are stored on your computer or mobile device when you visit our website. 
                They help us make your visit to our site better and provide you with a more personalized experience.
            </p>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Global Privacy Compliance</h2>
            <p class="mb-4">
                Our website is accessible globally, and we are committed to respecting privacy laws and regulations worldwide. 
                This includes compliance with:
            </p>
            <ul class="list-disc pl-6 mb-4">
                <li>General Data Protection Regulation (GDPR) - European Union</li>
                <li>California Consumer Privacy Act (CCPA) - California, USA</li>
                <li>Personal Information Protection and Electronic Documents Act (PIPEDA) - Canada</li>
                <li>Privacy Act 1988 - Australia</li>
                <li>Personal Data Protection Act (PDPA) - Singapore</li>
                <li>Other applicable privacy laws in your jurisdiction</li>
            </ul>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Information We Collect</h2>
            <h3 class="text-xl font-semibold mb-2">Automatically Collected Information</h3>
            <p class="mb-4">
                When you visit the website, we automatically collect certain information about your device, including:
            </p>
            <ul class="list-disc pl-6 mb-4">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited</li>
                <li>Time and date of your visit</li>
                <li>Time spent on pages</li>
                <li>Referral sources</li>
            </ul>

            <h3 class="text-xl font-semibold mb-2">Cookies and Similar Technologies</h3>
            <p class="mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
                do not accept cookies, you may not be able to use some portions of our website.
            </p>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            
            <h3 class="text-xl font-semibold mb-2">Essential Cookies</h3>
            <p class="mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page 
                navigation and access to secure areas of the website. The website cannot function properly without these cookies.
            </p>
            <ul class="list-disc pl-6 mb-4">
                <li>Session management</li>
                <li>Security features</li>
                <li>Basic website functionality</li>
            </ul>

            <h3 class="text-xl font-semibold mb-2">Analytics Cookies</h3>
            <p class="mb-4">
                We use Google Analytics to understand how visitors interact with our website. These cookies help us 
                improve our website by collecting and reporting information on its usage. This includes:
            </p>
            <ul class="list-disc pl-6 mb-4">
                <li>Pages visited and time spent on each page</li>
                <li>How visitors navigate through the website</li>
                <li>Technical information about your browser and device</li>
                <li>Geographic location (country/region level)</li>
                <li>Referral sources</li>
                <li>Device and browser information</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">
                Note: Analytics data is processed in an anonymized form and does not identify individual users.
            </p>

            <h3 class="text-xl font-semibold mb-2">Personalization Cookies</h3>
            <p class="mb-4">
                These cookies allow the website to remember information that changes the way the website behaves or 
                looks, like your preferred language or the region you are in. This includes:
            </p>
            <ul class="list-disc pl-6 mb-4">
                <li>Your cookie consent preferences</li>
                <li>Your language preferences</li>
                <li>Your theme preferences (if applicable)</li>
                <li>Your regional settings</li>
            </ul>

            <h3 class="text-xl font-semibold mb-2">Functionality Cookies</h3>
            <p class="mb-4">
                These cookies enable enhanced functionality and personalization, such as:
            </p>
            <ul class="list-disc pl-6 mb-4">
                <li>Remembering your login status</li>
                <li>Storing your preferences for future visits</li>
                <li>Enabling interactive features</li>
                <li>Improving website performance</li>
            </ul>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul class="list-disc pl-6 mb-4">
                <li>Analyze website usage to improve user experience</li>
                <li>Monitor and prevent any problems with the website</li>
                <li>Understand how visitors interact with our content</li>
                <li>Remember your preferences and settings</li>
                <li>Ensure website security and functionality</li>
            </ul>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Cookie Duration</h2>
            <p class="mb-4">
                Our cookies are set to expire after 12 months unless cleared earlier. You can clear your cookies at any 
                time through your browser settings. Different types of cookies have different durations:
            </p>
            <ul class="list-disc pl-6 mb-4">
                <li>Session cookies: Deleted when you close your browser</li>
                <li>Persistent cookies: Remain for 12 months unless cleared</li>
                <li>Essential cookies: May persist longer for security purposes</li>
            </ul>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Managing Your Privacy</h2>
            <p class="mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your 
                computer and you can set most browsers to prevent them from being placed. If you do this, however, you 
                may have to manually adjust some preferences every time you visit our site and some services and 
                functionalities may not work.
            </p>
            <p class="mb-4">
                To manage your privacy, you can:
            </p>
            <ul class="list-disc pl-6 mb-4">
                <li>Use our cookie consent banner to manage preferences</li>
                <li>Clear cookies through your browser settings</li>
                <li>Use browser extensions to manage cookies</li>
                <li>Use private/incognito browsing mode</li>
                <li>Contact us to exercise your privacy rights</li>
            </ul>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Your Rights</h2>
            <p class="mb-4">
                Depending on your location, you may have certain rights regarding your personal data and cookies, including:
            </p>
            <ul class="list-disc pl-6 mb-4">
                <li>Right to access your data</li>
                <li>Right to delete your data</li>
                <li>Right to withdraw consent</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
            </ul>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Contact</h2>
            <p>
                If you have any questions about our Privacy & Cookie Policy or wish to exercise your rights, please contact us at 
                <a href="mailto:privacy@distel.me" class="text-[rgb(96,165,250)] hover:text-[rgb(96,165,250)]/80 transition-colors">
                    privacy@distel.me
                </a>
            </p>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p>
                We may update this Privacy & Cookie Policy from time to time to reflect changes in our practices or for other 
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
                new policy on this page.
            </p>
            <p class="text-sm text-gray-400 mt-4">Last updated: March 14, 2024</p>
        </section>
    </div>
</div> 