import { ButtonStyled } from '@/components/common/button';
import { JoinFormTrigger } from '@/components/join-form';

export default function CalloutSection() {
  const calloutData = {
    title: 'Join DevXtra Today!',
    subtitle: 'Unlock your potential with expert-led courses and a thriving community.',
    actions: [
      { _id: '1', label: 'Get Started', href: '/signup', type: 'primary' },
      { _id: '2', label: 'Learn More', href: '/about', type: 'secondary' },
    ],
  };

  return (
    <section className="flex flex-col gap-10 relative container mx-auto px-5">
      <article className="flex flex-col justify-center gap-5 self-stretch rounded-xl bg-primary/10 border dark:bg-primary/10 p-6 lg:justify-between lg:p-10">
        <div className="flex flex-col gap-2">
          <h4 className="text-3xl font-medium text-[--text-primary] dark:text-[--dark-text-primary] lg:text-4xl">
            {calloutData.title}
          </h4>
          <p className="text-lg text-[--text-secondary] dark:text-[--dark-text-secondary] lg:text-xl">
            {calloutData.subtitle}
          </p>
        </div>
        <div className="flex md:items-center gap-2 ">
          {calloutData.actions?.map((action) => (
            <JoinFormTrigger key={action._id} disabled={action?.type == 'secondary'}>
              <ButtonStyled variant={action?.type == 'secondary' ? 'glass' : 'default'}>
                {action.label}
              </ButtonStyled>
            </JoinFormTrigger>
          ))}
        </div>
      </article>
    </section>
  );
}
