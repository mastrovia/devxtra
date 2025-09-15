'use client';

import { ButtonStyled } from '@/components/common/button';
import { Heading } from '@/components/common/heading';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Author {
  _id: string;
  title?: string;
  image: {
    url: string;
    alt?: string | null;
  };
  role: string;
  company: {
    title?: string;
    image: {
      url: string;
      alt?: string | null;
    };
  };
}

interface TestimonialData {
  _id: string;
  quote: string;
  author: Author;
}

export const TestimonialCard = ({ quote, author }: TestimonialData) => {
  return (
    <div className="min-w-0 max-w-full shrink-0 grow-0 basis-[min(740px,100%)] self-stretch md:pr-10">
      <article className="min-h-[350px] md:min-h-[550px] !last:visible flex h-full w-full min-w-0 transform touch-pan-y touch-pinch-zoom select-none flex-col rounded-xl border border-[--border] [backface-visibility:hidden] dark:border-[--dark-border]">
        <div className="flex flex-1 items-start border-b border-[--border] px-5 py-[18px] dark:border-[--dark-border] md:px-8 md:py-7">
          <blockquote className="text-pretty text-xl font-geist-mono font-extralight leading-[135%] text-[--text-primary] dark:text-[--dark-text-primary] sm:text-2xl md:text-4xl">
            “{quote}”
          </blockquote>
        </div>
        <div className="flex items-center gap-4 pl-5">
          <div className="flex flex-1 items-center gap-5 border-r border-[--border] py-4 dark:border-[--dark-border]">
            <Image
              alt={author.title || quote}
              className="hidden size-16 rounded-full md:block"
              height={64}
              src={author.image.url}
              width={64}
            />
            <div className="flex flex-1 flex-col">
              <h5 className="text-base font-medium md:text-lg">{author.title}</h5>
              <p className="text-pretty text-sm text-[--text-tertiary] dark:text-[--dark-text-tertiary] md:text-base">
                {author.title}, {author.company.title}
              </p>
            </div>
          </div>
          <div className="pr-5">
            {author.company.image ? (
              <Image
                alt={author.company.image.alt ?? (author.company.title || 'Image')}
                className="w-12 md:w-16"
                height={48}
                src={author.company.image.url}
                width={48}
              />
            ) : null}
          </div>
        </div>
      </article>
    </div>
  );
};

export default function Testimonials({ id }: { id?: string }) {
  const data = {
    quotes: [
      {
        _id: '24jShk8-3pDG4uhSWpYnt',
        quote:
          "Our team's productivity soared with this messaging tool. Its simplicity fosters quick decision-making and seamless collaboration, essential for our fast-paced product development.",
        author: {
          _id: 'PKVDi1WImva5U5EgqIAHw',
          title: 'Emily Rodriguez',
          image: {
            url: 'https://assets.basehub.com/fa068a12/uXVXN7g1Fc2EjO8OWn0HG/09.png',
            alt: null,
          },
          role: 'Product Developer',
          company: {
            title: 'PinPoint',
            image: {
              url: 'https://assets.basehub.com/fa068a12/skqkUDVY7YAfOIaQqRUDK/logocompany-4.svg',
              alt: null,
            },
          },
        },
      },
      {
        _id: 'jHfupEXXcjHgDGeUllSet',
        quote:
          "With this tool, our team's workflow has become more efficient and organized. We spend less time navigating complex interfaces and more time focusing on what matters: delivering quality products to our customers.",
        author: {
          _id: '5ceoRSGg0b2HjWet7iAm2',
          title: 'David Patel',
          image: {
            url: 'https://assets.basehub.com/fa068a12/QK36F1HicnSJMvil7B8xv/13.png',
            alt: null,
          },
          role: 'Marketing Director',
          company: {
            title: 'Hues',
            image: {
              url: 'https://assets.basehub.com/fa068a12/znAQM6z290JP21p-qyZXG/logocompany.svg',
              alt: null,
            },
          },
        },
      },
      {
        _id: '0sTF5bVO0N0nZEZd7pzow',
        quote:
          "We've seen remarkable results since integrating AI solutions from this company into our workflows.Their computer vision technology has enabled us to automate tasks and extract valuable insights from visual data.",
        author: {
          _id: 'Vxo_NPdrUf0Yzob_Im3_d',
          title: 'Rachel Kim',
          image: {
            url: 'https://assets.basehub.com/fa068a12/szrnRJ0e3RBi5wHKzydlI/04.png',
            alt: null,
          },
          role: 'HR Manager',
          company: {
            title: 'Greenish',
            image: {
              url: 'https://assets.basehub.com/fa068a12/l59ewb-4QkOUj6-Wjiqsa/logocompany-1.svg',
              alt: null,
            },
          },
        },
      },
      {
        _id: 'ygwvQuSQo021xp0gcr4ia',
        quote:
          "We've seen remarkable results since integrating AI solutions from this company into our workflows.Their computer vision technology has enabled us to automate tasks and extract valuable insights from visual data.",
        author: {
          _id: '5ceoRSGg0b2HjWet7iAm2',
          _title: 'David Patel',
          image: {
            url: 'https://assets.basehub.com/fa068a12/QK36F1HicnSJMvil7B8xv/13.png',
            alt: null,
          },
          role: 'Marketing Director',
          company: {
            _title: 'Hues',
            image: {
              url: 'https://assets.basehub.com/fa068a12/znAQM6z290JP21p-qyZXG/logocompany.svg',
              alt: null,
            },
          },
        },
      },
    ],
  };

  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    // Initial set
    setSelectedIndex(api.selectedScrollSnap());

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <section className="relative overflow-clip flex gap-1 section-cont" id={id}>
      <div className="flex w-full flex-col gap-14">
        <div className="flex justify-between">
          <Heading title="What our clients say" />
          {/* Heading */}
          <div className="hidden gap-4 sm:flex">
            <ButtonStyled
              onClick={() => api?.scrollPrev()}
              aria-label="Previous testimonial"
              className="!h-auto rounded-full px-4 py-2"
            >
              <ArrowLeftIcon className="size-6" />
            </ButtonStyled>
            <ButtonStyled
              onClick={() => api?.scrollNext()}
              aria-label="Next testimonial"
              className="!h-auto rounded-full !px-4 !py-2"
            >
              <ArrowRightIcon className="size-6" />
            </ButtonStyled>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex w-full gap-10 md:gap-0">
            <Carousel setApi={setApi}>
              <CarouselContent>
                {data.quotes.map((data) => {
                  return (
                    <CarouselItem
                      key={data._id}
                      className="max-w-[calc(100vw-1.25rem)] sm:max-w-[500px] md:max-w-[700px]"
                    >
                      <TestimonialCard {...data} />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="mt-4 flex w-full justify-center gap-2 md:hidden">
            {api?.scrollSnapList()?.map((snap, index) => {
              return (
                <button
                  key={snap}
                  aria-label={`Testimonial ${String(index + 1)}`}
                  className={cn(
                    'group flex items-center justify-center rounded-full p-1 bg-muted',
                    index === selectedIndex ? 'bg-primary/50' : ''
                  )}
                  onClick={() => api.scrollTo(index)}
                >
                  <span
                    className={cn(
                      'size-2 rounded-full',
                      index === selectedIndex ? 'bg-primary/100' : 'bg-accent'
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
