/* michaeldistel.com - analytics.
 *
 * Loaded by one line before </body> in src/app.html. The measurement ID lives
 * here and nowhere else, so switching analytics off is a matter of emptying
 * this file. Same pattern as the distelfamily.com archive.
 *
 * GA4 web data stream for michaeldistel.com, loaded directly. No Google Tag
 * Manager: the old GTM container (GTM-KG6VCVB) fired exactly one tag, the GA4
 * config below, so the middleman added nothing but an extra request and a
 * wider CSP. Cloudflare Web Analytics runs alongside this, cookieless and
 * aggregate; Cloudflare injects that one itself.
 *
 * NOTE: _headers serves /*.js as immutable for a year. If you edit this file,
 * bump the ?v= on the script tag in src/app.html or returning visitors keep
 * the old copy.
 *
 * This is a SvelteKit static site with client-side routing: after first load,
 * navigation happens through the History API. GA4 enhanced measurement
 * (history-change page views, on by default on the stream) records those
 * navigations; the history hook below keeps content_group current so each
 * page view lands in the right bucket (home, adventures, industrial, ...).
 */
(function () {
	var ID = 'G-30YC5HNYP6';

	/* ---- content group from the URL: first path segment, or "home" ---- */
	function group() {
		var p = location.pathname.replace(/\/+$/, '');
		if (p === '' || p === '/index.html') return 'home';
		return p.split('/')[1] || 'other';
	}

	/* ---- load GA4 ---- */
	var s = document.createElement('script');
	s.async = true;
	s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
	document.head.appendChild(s);

	window.dataLayer = window.dataLayer || [];
	function gtag() {
		window.dataLayer.push(arguments);
	}
	window.gtag = gtag;
	gtag('js', new Date());

	/* A personal site, not a shop: no ad signals, no cross-site personalisation. */
	gtag('config', ID, {
		anonymize_ip: true,
		allow_google_signals: false,
		allow_ad_personalization_signals: false,
		content_group: group()
	});

	/* Keep content_group current across client-side navigations. */
	['pushState', 'replaceState'].forEach(function (fn) {
		var orig = history[fn];
		history[fn] = function () {
			var r = orig.apply(this, arguments);
			gtag('set', { content_group: group() });
			return r;
		};
	});
	window.addEventListener('popstate', function () {
		gtag('set', { content_group: group() });
	});
})();
