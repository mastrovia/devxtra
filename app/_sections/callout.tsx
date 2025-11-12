import { ButtonStyled } from '@/components/common/button';
import { JoinFormTrigger } from '@/components/join-form';
import { cn } from '@/lib/utils';

export default function CalloutSection({ id }: { id?: string }) {
  const calloutData = {
    title: 'Join DevXtra Today!',
    subtitle: 'Unlock your potential with expert-led courses and a thriving community.',
    actions: [
      { _id: '1', label: 'Book Free Consultation', href: '', type: 'primary' },
      // { _id: '2', label: 'Learn More', href: '#course-journey', type: 'secondary' },
    ],
  };

  return (
    <section className="flex flex-col gap-10 relative section-cont" id={id}>
      <article className="flex flex-col justify-center gap-5 self-stretch rounded-xl bg-primary/10 border dark:bg-primary/10 p-6 lg:justify-between lg:p-10">
        <div className="flex flex-col gap-2">
          <h4 className="text-3xl font-medium text-[--text-primary] dark:text-[--dark-text-primary] lg:text-4xl">
            {calloutData.title}
          </h4>
          <p className="text-lg text-[--text-secondary] dark:text-[--dark-text-secondary] lg:text-xl">
            {calloutData.subtitle}
          </p>
        </div>
        <div className="flex md:items-center gap-2 flex-wrap">
          {calloutData.actions?.map((action) => (
            <JoinFormTrigger key={action._id} disabled={action?.type == 'secondary'}>
              <ButtonStyled
                href={action.href}
                variant={action?.type == 'secondary' ? 'glass' : 'default'}
                className={
                  cn(action?.type === 'primary'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white'
                    : '',"w-full md:w-auto")
                }
              >
                {action.label}
              </ButtonStyled>
            </JoinFormTrigger>
          ))}
        </div>
      </article>
    </section>
  );
}
