import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const hero = {
  title: "Streamlined Communication for Iterating Fast",
  subtitle: "The all-in-one platform for developers and startups.",
  customerSatisfactionText: "1,254 happy customers",
  customerSatisfaction: {
    text: "1,254 happy customers",
    avatars: [
      { link: "https://github.com/shadcn.png", name: "shadcn", fallback: "CN" },
      { link: "https://github.com/leerob.png", name: "leerob", fallback: "LR" },
      { link: "https://github.com/evilrabbit.png", name: "evilrabbit", fallback: "ER" },
    ],
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-10">
      <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-[--border] dark:border-[--dark-border]">
        {/* Decorations */}
        <div className="col-span-1 flex h-full items-center justify-center" />
        <div className="col-span-1 flex h-full items-center justify-center border-x border-[--border] dark:border-[--dark-border]" />
        <div className="col-span-1 flex h-full items-center justify-center" />
      </div>
      {/* --- */}
      <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-[--accent-500-40] blur-[200px]" />
      <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-surface-primary opacity-50 blur-[100px] md:block" />
      <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-surface-primary opacity-50 blur-[100px] md:block" />

      <div className="relative z-10 flex flex-col divide-y divide-[--border] pt-[35px] dark:divide-[--dark-border]">
        <div className="flex flex-col items-center justify-end">
          <div className="flex items-center gap-2 !border !border-b-0 border-[--border] px-4 py-2 dark:border-[--dark-border]">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
              {hero.customerSatisfaction.avatars.map(({ link, name, fallback }) => (
                <Avatar key={name}>
                  <AvatarImage src={link} alt={`@${name}`} />
                  <AvatarFallback>{fallback}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="text-sm tracking-tight text-tertiary">{hero.customerSatisfactionText}</p>
          </div>
        </div>
        <div>
          <div className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24">
            <h1 className="!max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] text-primary md:tracking-[-2.16px]">
              {hero.title}
            </h1>
            <h2 className="text-md max-w-2xl text-pretty text-center text-tertiary md:text-lg">{hero.subtitle}</h2>
          </div>
        </div>
        <div className="flex items-start justify-center px-8 sm:px-24">
          <div className="flex w-full max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]">
            {/* {hero.actions?.map(({ href, label, type, _id }) => (
              <TrackedButtonLink
                key={_id}
                analyticsKey={hero.eventsKey}
                className={clsx(
                  "!h-14 flex-col items-center justify-center rounded-none !text-base",
                  type === "primary"
                    ? "flex w-full"
                    : "max-w-sm:!border-x-0 flex w-full !border-x !border-y-0 border-[--border] !bg-transparent backdrop-blur-xl transition-colors duration-150 hover:!bg-black/5 dark:border-[--dark-border] dark:hover:!bg-white/5"
                )}
                href={href}
                intent={type}
                name="cta_click"
              >
                {label}
              </TrackedButtonLink>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}
