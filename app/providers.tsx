'use client';

import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';

interface IProviders {
  children: React.ReactNode | React.ReactNode[];
}

export default function Providers({ children }: IProviders) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
