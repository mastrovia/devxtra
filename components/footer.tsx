import Image from 'next/image';
import ButtonBase from './common/button';
import { ThemeSwitcher } from './theme-switcher';

export default function Footer() {
  const footer = {
    copyright: 'Aryabhangy Grande, 14/305, Muttom, Aluva, Kochi, Kerala',
    contacts: [
      'Phone: +91 62829 14958',
      'Email: office@devxtra.com',
      'Address: Aryabhangy Grande, 14/305, Muttom, Aluva, Kochi, Kerala',
    ],
    socialLinks: [
      {
        title: 'GitHub',
        icon: {
          url: 'https://assets.basehub.com/fa068a12/MB9Q8hqyfl6YLmTm_7FLP/github.svg',
        },
        url: 'https://github.com/devxtra-community',
      },
      //   {
      //     title: 'X',
      //     icon: {
      //       url: 'https://assets.basehub.com/fa068a12/qNXY_fiHeF2SPgCT4Gd5-/x.svg',
      //     },
      //     url: 'https://twitter.com/',
      //   },
      //   {
      //     title: 'Discord',
      //     icon: {
      //       url: 'https://assets.basehub.com/fa068a12/kxc4JPWCFEVaKtvd3k9IS/discord.svg',
      //     },
      //     url: 'https://discord.gg/',
      //   },
      //   {
      //     title: 'Linkedin',
      //     icon: {
      //       url: 'https://assets.basehub.com/fa068a12/AwnNnviiEi-teGwfITXel/in.svg',
      //     },
      //     url: 'https://www.linkedin.com/',
      //   },
    ],
    navbar: {
      items: [
        {
          title: 'Our Promise',
          url: '#our-promise',
        },
        {
          title: "What you'll learn",
          url: '#what-you-will-learn',
        },
        {
          title: 'Course Journey',
          url: '#course-journey',
        },
        {
          title: 'FAQs',
          url: '#faq',
        },
      ],
    },
  };

  return (
    <footer className="border-t border-[--border] py-16 dark:border-[--dark-border] mt-10">
      <div className="container mx-auto grid grid-cols-2 grid-rows-[auto_auto_auto] place-items-start items-center gap-y-7 px-6 sm:grid-cols-[1fr_auto_1fr] sm:grid-rows-2 sm:gap-x-3 sm:gap-y-16">
        <ButtonBase href="/">
          <h1 className="text-4xl font-semibold">
            Dev<span className="text-primary">X</span>tra
          </h1>
        </ButtonBase>
        <nav className="col-start-1 row-start-2 flex flex-col gap-x-2 gap-y-3 self-center sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:flex-row sm:items-center sm:place-self-center md:gap-x-4 lg:gap-x-8">
          {footer.navbar.items.map(({ title, url }) => (
            <ButtonBase key={title} href={url ?? '#'} className="opacity-50 hover:opacity-100">
              {title}
            </ButtonBase>
          ))}
        </nav>
        <div className="col-start-2 row-start-1 flex items-center gap-3 self-center justify-self-end sm:col-span-1 sm:col-start-3 sm:row-start-1">
          <p className="hidden text-muted-foreground sm:block">Appearance</p>
          <ThemeSwitcher />
        </div>

        <ul className="col-span-2 text-pretty text-sm text-muted-foreground sm:col-span-1">
          {footer.contacts.map((e) => {
            return <li key={e}>{e}</li>;
          })}
        </ul>

        <ul className="col-span-2 col-start-1 row-start-3 flex w-full items-center gap-x-3.5 gap-y-4 sm:col-span-1 sm:col-start-3 sm:row-start-2 sm:w-auto sm:flex-wrap sm:justify-self-end">
          {footer.socialLinks.map((link) => {
            return (
              <li key={link.title} className="shrink-0 sm:first:ml-auto">
                <ButtonBase
                  className="block aspect-square p-2 hover:brightness-75 dark:brightness-50 dark:hover:brightness-75"
                  href={link.url}
                >
                  <Image alt={link.title} height={24} src={link.icon?.url ?? ''} width={24} />
                </ButtonBase>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
