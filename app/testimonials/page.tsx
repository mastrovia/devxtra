import type { Metadata } from 'next';
import { Heading } from '@/components/common/heading';
import TestimonialsMasonry from '@/components/testimonials-masonry';

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
    description:
      'See what our students and clients say about DevXtra. Real stories from developers who learned fullstack development.',
    images: ['/og-testimonials.png'],
  },
};

export default function TestimonialsPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="section-cont pt-20 md:pt-32 pb-10">
        <div className="flex flex-col gap-6 text-center">
          <Heading
            tag="Success Stories"
            title="Our stories"
            subtitle="Discover how DevXtra has helped students and professionals build their careers in tech. Real testimonials from our community members who have transformed their skills and achieved their goals."
          />
        </div>
      </section>

      {/* Masonry Grid Section */}
      <TestimonialsMasonry />
    </main>
  );
}
