'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import * as fb from '../lib/fbpixel';

const pixelInit = (id: string) => `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '${id}');
  fbq('track', 'PageView');
`;

export default function MetaPixelClient() {
  const pathname = usePathname();
  const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '';

  // send a pageview on route change
  useEffect(() => {
    if (!PIXEL_ID) return;
    fb.fbqPageView();
  }, [pathname, PIXEL_ID]);

  if (!PIXEL_ID) return null;

  const noscriptImg = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1" />`;

  return (
    <>
      <Script id="meta-pixel-loader" strategy="afterInteractive" src="https://connect.facebook.net/en_US/fbevents.js" />
      <Script id="meta-pixel-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: pixelInit(PIXEL_ID) }} />
      <noscript dangerouslySetInnerHTML={{ __html: noscriptImg }} />
    </>
  );
}
