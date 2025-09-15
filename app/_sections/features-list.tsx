import { Heading } from '@/components/common/heading';
import { CheckIcon } from 'lucide-react';
import Image from 'next/image';

export default function FeaturesListSection({ id }: { id?: string }) {
  const features = [
    {
      title: 'Earn While You Learn with DevXtra',
      description:
        "At DevXtra, students don't just study—they earn by working on real-world client projects. Build a strong portfolio, gain hands-on experience, and get paid while you learn.",
      characteristics: {
        items: [
          { title: 'Develop in-demand coding skills through practical projects' },
          { title: 'Improve professional communication skills with real clients' },
          { title: 'Strengthen your project management skills to handle real deadlines' },
        ],
      },
      image: {
        dark: '/images/earn-while-you-learn.jpg',
        alt: 'Real-time Messaging Feature',
      },
    },
    {
      title: 'Teamwork That Builds Careers',
      description:
        "Learning at DevXtra is not a solo journey. We help you collaborate with like-minded peers on real coding projects, preparing you for today's team-driven tech industry.",
      characteristics: {
        items: [
          { title: 'Work in dynamic teams that mirror real-world companies' },
          { title: 'Collaborate and accelerate your learning process' },
          { title: 'Become a team player employers value' },
        ],
      },
      image: {
        dark: '/images/teamwork.jpg',
        alt: 'Real-time Messaging Feature',
      },
    },

    {
      title: 'Startup-Ready Skills for Future Leaders',
      description:
        'At DevXtra, we don’t just prepare you for jobs—we also help you bring your startup ideas to life. From your first concept to a working project, we guide you step by step and support you in reaching real users.',
      characteristics: {
        items: [
          { title: 'Turn your idea into a working project with the help of mentors' },
          { title: 'Test your project with real people to see what works best' },
          { title: 'Learn how to grow your idea and take it to the next level' },
        ],
      },
      image: {
        dark: '/images/startup.jpg',
        alt: 'Real-time Messaging Feature',
      },
    },
  ];

  return (
    <section className="section-cont flex flex-col gap-10" id={id}>
      <Heading
        tag="Our Promise"
        title="Learn, Build, and Grow with DevXtra"
        subtitle="At DevXtra, learning goes beyond theory. You'll earn while working on real client projects, collaborate with peers in team settings, and even turn your own ideas into working projects with mentor support. From coding skills to startup readiness, we prepare you for the real world of technology"
      />
      <div className="flex flex-col gap-6 items-center md:mt-6">
        {features.map(({ image, ...item }) => (
          <article
            key={item.title}
            className="flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border bg-muted p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16"
          >
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
              <Image
                src={image.dark}
                alt={image.alt}
                width={560}
                height={374}
                className="rounded-lg object-cover border dark:invert"
              />
            </figure>
            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
              <div className="flex flex-col items-start gap-2">
                <h5 className="text-2xl font-medium md:text-3xl">{item.title}</h5>
                <p className="font-normal text-muted-foreground md:text-lg">{item.description}</p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {item.characteristics.items.map(({ title }) => (
                  <li key={title} className="flex items-center gap-4 font-normal text-muted-foreground">
                    <span className="flex size-6 p-1.5 items-center justify-center rounded-full bg-primary/30">
                      <CheckIcon className="text-foreground" />
                    </span>
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
