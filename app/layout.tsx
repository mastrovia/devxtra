import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import Footer from '@/components/footer';
import JoinForm from '@/components/join-form';
import AutoJoinFormTrigger from '@/components/auto-join-form-trigger';
import WhatsAppFloat from '@/components/whatsapp-float';
import PhoneFloat from '@/components/phone-float';
import Providers, { PostHogProvider } from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DevXtra - Learn. Build. Grow.',
  description:
    'Join DevXtra to learn fullstack web development, AI-assisted coding, mobile app development, and real-world startup projects. Gain hands-on experience, build your portfolio, earn while learning, and prepare for a successful tech career.',
  manifest: '/site.webmanifest',
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <PostHogProvider>
            <Header />
            {children}
            <AutoJoinFormTrigger />
            <Footer />
            <JoinForm />
            <WhatsAppFloat />
            <PhoneFloat />
          </PostHogProvider>
        </Providers>
      </body>
    </html>
  );
}
