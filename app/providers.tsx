'use client';

import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';

interface IProviders {
  children: React.ReactNode | React.ReactNode[];
}

export default function Providers({ children }: IProviders) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
