import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { cn } from '@/lib/utils';
import ShinyText from '../animations/shiny-text';

type HeadingProps = {
  tag?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  title?: string;
  align?: 'start' | 'end' | 'center';
  classnamea?: string;
};

export function Tag({ className, children, asChild, ...props }: React.AllHTMLAttributes<HTMLDivElement> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'h3';

  return (
    <Comp
      className={clsx(
        'flex min-h-7 items-center justify-center gap-2 rounded-full bg-secondary px-3.5 pb-px text-sm font-medium text-tertiary md:text-base',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function Heading({ tag, subtitle, align = 'center', ...props }: HeadingProps) {
  return (
    <div className={cn('flex items-center flex-col gap-3', `items-${align} text-${align}`, props.classnamea)}>
      {tag ? <Tag>{tag}</Tag> : null}
      <div
        className={cn(
          'flex max-w-[800px] flex-col justify-center gap-1',
          '[&>*]:text-pretty [&>*]:text-3xl [&>*]:font-medium md:[&>*]:text-4xl'
        )}
      >
        <h1 {...props}>{props?.title}</h1>
      </div>
      {subtitle ? (
        <ShinyText text={subtitle as string} className="max-w-screen-md" />
      ) : // <p className="max-w-screen-md text-pretty font-light text-muted-foreground text-lg">
      // </p>
      null}
    </div>
  );
}
