import { Heading } from '@/components/common/heading';
import Image from 'next/image';

export default function FeaturesBigVideoSection({ id }: { id?: string }) {
  const featuresBigVideo = {
    heading: {
      tag: 'Learn. Build. Succeed',
      title: 'Learn, Build, and Grow with DevXtra',
      subtitle:
        'DevXtra helps you learn by doing—building real projects, gaining hands-on experience, and preparing for jobs, freelancing, or your own startup.',
    },
    video: {
      url: '/videos/devxtra-motion-intro.mp4',
      alt: '',
    },
    items: [
      {
        title: 'Mentorship',
        description:
          'Learn from industry experts who guide you at every step. Gain insights, feedback, and support to accelerate your coding journey.',
        icon: {
          alt: null,
          url: 'https://assets.basehub.com/fa068a12/P4yggRHkqB8uRH587STUr/frameicon.svg',
        },
      },
      {
        title: 'Hands-On Projects',
        description:
          'Work on real client projects and startup-inspired projects. Apply your skills to solve practical problems and build a strong, job-ready portfolio.',
        icon: {
          alt: null,
          url: 'https://assets.basehub.com/fa068a12/SCkaU2WEu53qSBWsNVQO4/frameicon-1.svg',
        },
      },
      {
        title: 'Career Growth',
        description:
          'Develop the skills and confidence to freelance, land top tech roles, or create your own startup. DevXtra equips you with the tools for long-term career success.',
        icon: {
          alt: null,
          url: 'https://assets.basehub.com/fa068a12/WIADTrhMDDCGZUakwbctI/frameicon-2.svg',
        },
      },
    ],
  };

  return (
    <section className="flex-col gap-10 relative section-cont flex opacity-95" id={id}>
      <Heading
        tag={featuresBigVideo.heading.tag}
        title={featuresBigVideo.heading.title}
        subtitle={featuresBigVideo.heading.subtitle}
      />
      <div className="flex w-full flex-col items-start gap-4 md:order-2 md:grid md:grid-cols-3 md:gap-16">
        {featuresBigVideo.items.map(({ title, description, icon }) => (
          <article key={title} className="flex flex-col gap-4">
            <figure className="flex size-9 items-center justify-center rounded-full border p-2">
              <Image alt={icon.alt ?? title} className="dark:invert" height={18} src={icon.url} width={18} />
            </figure>
            <div className="flex flex-col items-start gap-1">
              <h5 className="text-lg font-medium">{title}</h5>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </article>
        ))}
      </div>
      <video
        className="block rounded-4xl border md:order-3 md:w-full shadow-2xl"
        src={featuresBigVideo.video.url}
        muted
        loop
        autoPlay
        playsinline 
      />
    </section>
  );
}
