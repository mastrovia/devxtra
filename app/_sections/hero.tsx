import { ButtonStyled } from '@/components/common/button';
import { JoinFormTrigger } from '@/components/join-form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const hero = {
  title: 'Transform Your Career in 21 Days',
  subtitle:
    'Join DevXtra to master fullstack development, build real-world projects, and land your first freelance client. Expert mentorship, hands-on learning, and a proven path to earning while you learn.',
  customerSatisfaction: {
    text: '200+ learners transformed their careers',
    highlight: '200+',
    avatars: [
      { link: 'https://github.com/shadcn.png', name: 'shadcn', fallback: 'CN' },
      { link: 'https://github.com/leerob.png', name: 'leerob', fallback: 'LR' },
      { link: 'https://github.com/evilrabbit.png', name: 'evilrabbit', fallback: 'ER' },
    ],
  },
  trustBadges: [
    '✓ Expert-Led Mentorship',
    '✓ Real Client Projects',
    '✓ Earn While Learning',
  ],
  actions: [
    { _id: '1', label: 'Start Your Free 21-Day Journey', subtext: '200+ developers • No credit card required', href: '#', type: 'primary' },
    { _id: '2', label: 'Talk to a Mentor (Free)', href: '#', type: 'secondary' },
  ],
};

export default function HeroSection({ id }: { id?: string }) {
  return (
    <section className="relative min-h-[calc(550px-var(--header-height))] pb-10 overflow-x-clip" id={id}>
      {/* <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)]"> */}
      {/* Decorations */}
      {/* <div className="col-span-1 flex h-full items-center justify-center" />
        <div className="col-span-1 flex h-full items-center justify-center border-x border-border" />
        <div className="col-span-1 flex h-full items-center justify-center" /> */}
      {/* </div> */}
      {/* --- */}
      <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-primary/50 blur-[200px]" />
      <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-surface-primary opacity-50 blur-[100px] md:block" />
      <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-surface-primary opacity-50 blur-[100px] md:block" />

      <div className="relative z-10 flex flex-col pt-[35px] gap-2 md:gap-0">
        <div className="flex flex-col items-center justify-end">
          <div className="flex items-center gap-2 px-4 py-2">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
              {hero.customerSatisfaction.avatars.map(({ link, name, fallback }) => (
                <Avatar key={name}>
                  <AvatarImage src={link} alt={`@${name}`} />
                  <AvatarFallback>{fallback}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="text-sm tracking-tight text-tertiary">
              <span className="font-bold text-[--text-trust]">{hero.customerSatisfaction.highlight}</span> {hero.customerSatisfaction.text.replace(hero.customerSatisfaction.highlight, '')}
            </p>
          </div>
        </div>
        <div className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-3 px-2 py-4 sm:px-16 lg:px-24">
          <h1 className="!max-w-screen-lg text-pretty text-center text-[clamp(42px,7vw,64px)] font-bold leading-none tracking-[-1.44px] text-primary md:tracking-[-2.16px]">
            {hero.title}
          </h1>
          <h2 className="text-md max-w-2xl text-pretty text-center text-tertiary md:text-lg">{hero.subtitle}</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            {hero.trustBadges.map((badge, idx) => (
              <span key={idx} className="text-sm text-secondary">{badge}</span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 px-8 sm:px-24">
          <div className="flex w-full max-w-[80vw] flex-col items-center md:!max-w-[500px] justify-center gap-3">
            {hero.actions?.map((action) => {
              return (
                <JoinFormTrigger key={action._id} disabled={action.type !== 'primary'}>
                  <div className="flex flex-col items-center gap-1 w-full">
                    <ButtonStyled
                      href={action.href}
                      classnamefora="w-full flex items-center justify-center"
                      className={cn(
                        'py-4 px-6 rounded-full w-full flex items-center justify-center text-base md:text-lg font-semibold transition-all duration-300 min-h-[56px]',
                        action.type === 'primary'
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
                          : 'bg-transparent border-2 border-[--accent-blue] text-primary hover:bg-[--accent-blue]/10'
                      )}
                    >
                      {action.label}
                    </ButtonStyled>
                    {action.subtext && action.type === 'primary' && (
                      <p className="text-xs text-tertiary">{action.subtext}</p>
                    )}
                  </div>
                </JoinFormTrigger>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
