import type { Metadata } from 'next';
import { Heading } from '@/components/common/heading';
import OurStoriesMasonry from '@/components/our-storys-masonry';
import LightRays from '@/components/LightRays';
import { JoinFormTrigger } from '@/components/join-form';
import { ButtonStyled } from '@/components/common/button';

export const metadata: Metadata = {
  title: 'Testimonials - DevXtra',
  description:
    'See what our students and clients say about DevXtra. Real stories from developers who learned fullstack development, AI-assisted coding, and built successful careers with us.',
  openGraph: {
    title: 'Testimonials - DevXtra',
    description:
      'See what our students and clients say about DevXtra. Real stories from developers who learned fullstack development, AI-assisted coding, and built successful careers with us.',
    url: 'https://devxtra.com/testimonials',
    siteName: 'DevXtra',
    type: 'website',
    images: [
      {
        url: '/og-testimonials.png', // You can create this image later
        width: 1200,
        height: 630,
        alt: 'DevXtra Testimonials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonials - DevXtra',
    description: 'See what our students and clients say about DevXtra. Real stories from developers who learned fullstack development.',
    images: ['/og-testimonials.png'],
  },
};

export default function TestimonialsPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-auto">
        <div className="absolute w-full h-full hidden dark:flex">
          <LightRays
            raysOrigin="bottom-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.3}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <section className="relative opacity-90 section-cont pt-20 md:pt-32 pb-20 z-10">
          <div className="flex flex-col gap-6 text-center">
            <Heading
              tag="Success Stories"
              title="Our stories"
              subtitle="Discover how DevXtra has helped students and professionals build their careers in tech. Real testimonials from our community members who have transformed their skills and achieved their goals."
            />
            <div>
              <JoinFormTrigger>
                <ButtonStyled>Get More Details</ButtonStyled>
              </JoinFormTrigger>
            </div>
          </div>
        </section>
      </div>

      {/* Masonry Grid Section */}
      <OurStoriesMasonry />
    </main>
  );
}
