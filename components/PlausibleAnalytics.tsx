'use client';

import Script from 'next/script';

export default function PlausibleAnalytics() {
  return (
    <>
      <Script defer data-domain="devxtra.com" src="https://plausible.remin.in/js/script.outbound-links.js" strategy="afterInteractive" />
      <Script id="plausible-init" strategy="afterInteractive">
        {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
      </Script>
    </>
  );
}
