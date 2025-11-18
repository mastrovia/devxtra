'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface AccordionContextValue {
  openItems: string[];
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue>({
  openItems: [],
  toggleItem: () => {},
});

interface AccordionProps {
  children: React.ReactNode;
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  className?: string;
}

export function Accordion({ children, type = 'single', defaultValue, className }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const toggleItem = React.useCallback(
    (value: string) => {
      setOpenItems((prev) => {
        if (type === 'single') {
          return prev.includes(value) ? [] : [value];
        } else {
          return prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value];
        }
      });
    },
    [type]
  );

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function AccordionItem({ children, value, className }: AccordionItemProps) {
  const { openItems } = React.useContext(AccordionContext);
  const isOpen = openItems.includes(value);

  return (
    <div className={cn('border-b border-border', className)} data-state={isOpen ? 'open' : 'closed'}>
      {children}
    </div>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

export function AccordionTrigger({ children, className, value }: AccordionTriggerProps) {
  const { openItems, toggleItem } = React.useContext(AccordionContext);
  const isOpen = openItems.includes(value);

  return (
    <button
      className={cn(
        'flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className
      )}
      onClick={() => toggleItem(value)}
      data-state={isOpen ? 'open' : 'closed'}
      type="button"
    >
      {children}
      <svg
        className="h-4 w-4 shrink-0 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

export function AccordionContent({ children, className, value }: AccordionContentProps) {
  const { openItems } = React.useContext(AccordionContext);
  const isOpen = openItems.includes(value);

  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-200',
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      )}
      data-state={isOpen ? 'open' : 'closed'}
    >
      <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </div>
  );
}
