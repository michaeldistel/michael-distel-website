// GTM initialization with consent mode v2
declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

export const initializeGTM = () => {
    // Define dataLayer and the gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
        window.dataLayer.push(arguments);
    }

    // Default consent state configuration (consent mode v2)
    gtag('consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        functionality_storage: 'denied',
        personalization_storage: 'denied',
        security_storage: 'granted',
        // Consent mode v2 specific settings
        region: ['US', 'EU', 'UK', 'CA', 'AU', 'NZ', 'JP', 'KR', 'SG', 'IN', 'BR', 'MX', 'ZA', 'AE'],
        wait_for_update: 500
    });

    // Load GTM with error handling
    try {
        (function (w: Window, d: Document, s: string, l: string, i: string) {
            const dataLayer = (w as any)[l] = (w as any)[l] || [];
            dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            const f = d.getElementsByTagName(s)[0];
            const j = d.createElement(s) as HTMLScriptElement;
            const dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            j.onerror = () => {
                console.error('Failed to load GTM');
            };
            f.parentNode?.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-KG6VCVB');
    } catch (error) {
        console.error('Error initializing GTM:', error);
    }
};

// Update consent state
export const updateConsentState = (consentSettings: Record<string, 'granted' | 'denied'>) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
            ...consentSettings,
            wait_for_update: 500
        });
    }
};

// Track consent state changes
export const trackConsentUpdate = (consentState: string, userChoice: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'consent_update',
            consent_state: consentState,
            user_choice: userChoice,
            'gtm.uniqueEventId': Date.now() % 1000000,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    }
}; 