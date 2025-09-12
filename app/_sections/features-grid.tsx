import { ButtonStyled } from '@/components/common/button';
import { Heading } from '@/components/common/heading';
import Image from 'next/image';

export default function FeaturesGridSection() {
  const featuresGridData = {
    actions: [
      {
        _id: '1',
        label: 'Transform your career today',
        href: '/signup',
      },
    ],
    list: [
      {
        _id: '1',
        title: 'Personal Branding',
        description:
          'Learn how to showcase your coding skills online with projects, portfolios, and LinkedIn visibility. Stand out to employers, clients, and startup teams by building a strong digital identity.',
        icon: {
          alt: null,
          url: 'https://assets.basehub.com/fa068a12/P4yggRHkqB8uRH587STUr/frameicon.svg',
        },
      },
      {
        _id: '2',
        title: 'Freelancing',
        description:
          'Discover how to find freelance projects, pitch to clients, and deliver quality work while you’re still learning. Gain income, confidence, and a strong portfolio.',
        icon: {
          alt: null,
          url: 'https://assets.basehub.com/fa068a12/SCkaU2WEu53qSBWsNVQO4/frameicon-1.svg',
        },
      },
      {
        _id: '3',
        title: 'AI Leveraged Coding',
        description:
          'Master the art of using AI tools to speed up coding, debugging, and project building. Stay ahead in the tech industry by combining your skills with the power of AI.',
        icon: {
          alt: null,
          url: 'https://assets.basehub.com/fa068a12/WIADTrhMDDCGZUakwbctI/frameicon-2.svg',
        },
      },
      {
        _id: '4',
        title: 'Startup Level Project',
        description:
          'Go beyond basic practice projects to build at the scale and quality of real startups. Learn how to think like a founder and create solutions that solve real-world problems.',
        icon: {
          alt: null,
          url: 'https://assets.basehub.com/fa068a12/eRZEKnuCUPMOThfCOtVMw/frameicon-3.svg',
        },
      },
      {
        _id: '5',
        title: 'Real World Exposure',
        description:
          'Get direct exposure to client projects, deadlines, and professional workflows. Experience how real companies operate and be job-ready from day one.',
        icon: {
          alt: null,
          url: 'https://assets.basehub.com/fa068a12/12XqbjYT6n4Nn-G24Wllb/frameicon-4.svg',
        },
      },
      {
        _id: '6',
        title: 'Network & Entrepreneurial Mindset',
        description:
          'Connect with like-minded peers, mentors, and industry experts. Learn how to think like an entrepreneur, pitch your ideas, and grow valuable career relationships.',
        icon: {
          alt: null,
          url: 'https://assets.basehub.com/fa068a12/yxVz9gspGHr_vDrQM-mC2/frameicon-5.svg',
        },
      },
    ],
  };

  return (
    <section className="container mx-auto px-6 flex flex-col gap-10">
      <Heading
        tag="What You’ll Learn"
        title="Level up your coding journey with devxtra"
        subtitle="At DevXtra, you’ll gain more than coding skills. From personal branding and freelancing to AI-powered coding, real-world projects, and networking, we prepare you to succeed as a developer and future entrepreneur."
      />
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
        {featuresGridData.list.map(({ _id, title, description, icon }) => (
          <article
            key={_id}
            className="flex flex-col gap-4 rounded-lg border border-border p-4 [box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset] dark:[box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset]"
          >
            <figure className="flex size-9 items-center justify-center rounded-full border border-border p-2">
              <Image width={18} height={18} src={icon.url} alt="" className="dark:invert" />
            </figure>
            <div className="flex flex-col items-start gap-1">
              <h5 className="text-lg font-medium">{title}</h5>
              <p className="text-pretty text-muted-foreground dark:text-[--dark-text-secondary]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 md:order-3">
        {featuresGridData.actions?.map((action) => (
          <ButtonStyled className="rounded-xl" key={action._id} href={action.href}>
            {action.label}
          </ButtonStyled>
        ))}
      </div>
    </section>
  );
}
