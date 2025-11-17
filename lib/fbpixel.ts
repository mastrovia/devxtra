const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '';

export const isBrowser = typeof window !== 'undefined';

export function fbqInit(): void {
  if (!isBrowser || !PIXEL_ID) return;
  if (!window.fbq) return;
  window.fbq('init', PIXEL_ID);
  window.fbq('track', 'PageView');
}

export function fbqPageView(): void {
  if (!isBrowser || !window.fbq) return;
  window.fbq('track', 'PageView');
}

export function fbqEvent(eventName: string, params?: Record<string, unknown>): void {
  if (!isBrowser || !window.fbq) return;
  window.fbq('track', eventName, params ?? {});
}
