import { ButtonStyled } from "@/components/common/button";

export default function CalloutAnimatedSection() {
  const data = {
    title: "Enhance your team's productivity with Acme",
    subtitle: "Write in threads, focus, and collaborate without video calls.",
    actions: [
      { _id: "1", label: "Get Started", href: "/signup", type: "primary" },
      { _id: "2", label: "Learn More", href: "/about", type: "secondary" },
    ],
  };

  return (
    <section className="container mx-auto px-4">
      <article className="relative flex flex-col items-center justify-center gap-9 self-stretch overflow-hidden rounded-xl border p-6 dark:border-[--dark-border] dark:bg-[--dark-surface-secondary]">
        {/* Lines and bg  */}
        <div className="bg-linear-to-l absolute left-0 top-10 h-px w-full from-black/40 to-transparent dark:from-white/40 dark:to-transparent" />
        <div className="bg-linear-to-l absolute bottom-[72px] left-0 h-px w-full from-black/40 to-transparent dark:from-white/40 dark:to-transparent" />
        <div className="bg-linear-to-l absolute bottom-7 left-0 h-px w-full from-black/40 to-transparent dark:from-white/40 dark:to-transparent" />
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-primary/10 dark:bg-primary/10 blur-3xl filter" />
        {/* -------- */}
        <div className="relative z-20 flex flex-col items-center gap-2 text-center">
          <h4 className="text-center text-3xl font-medium tracking-tighter sm:max-w-full sm:px-0 md:text-4xl">{data.title}</h4>
          <p className="text-lg text-muted-foreground md:text-xl">{data.subtitle}</p>
        </div>
        <div className="flex md:items-center gap-2 z-20">
          {data.actions?.map((action) => (
            <ButtonStyled key={action._id} href={action.href} variant={action?.type == "secondary" ? "glass" : "default"}>
              {action.label}
            </ButtonStyled>
          ))}
        </div>
      </article>
    </section>
  );
}
