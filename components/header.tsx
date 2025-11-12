import ButtonBase, { ButtonStyled } from './common/button';
import { JoinFormTrigger } from './join-form';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

interface NavigationMenuListItem {
  _id: string;
  title: string;
  href?: string;
  subLinks?: NavigationMenuListItem[];
  description?: string;
}

export const DesktopMenu = () => {
  const desktopMenu: { links: NavigationMenuListItem[] } = {
    links: [
      // { _id: '1', title: 'Home', href: '/' },
      // {
      //   _id: '3',
      //   title: 'Services',
      //   href: '/services',
      //   subLinks: [
      //     {
      //       _id: '31',
      //       title: 'Consulting',
      //       href: '/services/consulting',
      //       description: 'Expert advice to elevate your projects.',
      //     },
      //     { _id: '32', title: 'Development', href: '/services/development' },
      //     { _id: '33', title: 'Design', href: '/services/design' },
      //   ],
      // },
      // { _id: '2', title: 'About', href: '/about' },
      // { _id: '4', title: 'Blog', href: '/blog' },
      // { _id: '5', title: 'Contact', href: '/contact' },
    ],
  };

  return (
    <div className="flex w-full justify-center">
      <NavigationMenu className={'z-1 relative flex-col justify-center lg:flex hidden'} viewport={false} delayDuration={50}>
        <NavigationMenuList className="flex flex-1 gap-0.5 px-4">
          {desktopMenu.links.map((link) => {
            if (link.subLinks && link.subLinks.length > 0) {
              return (
                <NavigationMenuItem key={link._id}>
                  <NavigationMenuTrigger className="text-md bg-transparent">{link.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuList className="flex-col">
                      {link.subLinks.map((subLink) => (
                        <NavigationMenuItem key={subLink._id} className="w-full">
                          <NavigationMenuLink href={subLink.href ?? '#'}>
                            <h3>{subLink.title}</h3>
                            {subLink?.description && <p className="text-xs text-muted-foreground w-max max-w-72">{subLink.description}</p>}
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            }

            return (
              <NavigationMenuItem key={link._id}>
                <NavigationMenuLink href={link.href ?? '#'} className="text-md">
                  {link.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-[110] flex w-full flex-col border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex h-[var(--header-height)]">
        <div className="container mx-auto grid w-full grid-cols-[min-content_1fr_min-content] place-items-center content-center items-center px-6 *:first:justify-self-start">
          <ButtonBase href="/">
            <h1 className="text-2xl font-semibold">
              Dev<span className="text-green-600 dark:text-green-500">X</span>tra
            </h1>
          </ButtonBase>
          <DesktopMenu />
          {/* <MobileMenu {...header} /> */}
          <JoinFormTrigger>
            <ButtonStyled className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
              Get More Details
            </ButtonStyled>
          </JoinFormTrigger>
        </div>
      </div>
    </header>
  );
};
