'use client';

import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';

interface IProviders {
  children: React.ReactNode | React.ReactNode[];
}

export default function Providers({ children }: IProviders) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

import { useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
      defaults: '2025-05-24',
      mask_all_text: false,
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
