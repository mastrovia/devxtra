'use client';

import { useEffect, useRef } from 'react';
import useJoinForm from '@/hooks/join-form';

export default function AutoJoinFormTrigger() {
  const formHook = useJoinForm();
  const triggerRef = useRef<HTMLDivElement>(null);
  const hasShownInCurrentViewRef = useRef(false);

  useEffect(() => {
    const triggerElement = triggerRef.current;
    if (!triggerElement) return;

    // Create Intersection Observer to watch when the trigger div enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Entering viewport - show popup only if not shown yet in this view
            if (!hasShownInCurrentViewRef.current) {
              formHook.setOpen(true);
              hasShownInCurrentViewRef.current = true;
            }
          } else {
            // Exiting viewport - reset the flag so it can show again next time
            // hasShownInCurrentViewRef.current = false;
          }
        });
      },
      {
        // Trigger when at least 10% of the element is visible
        threshold: 0.1,
        // Optional: Add some margin to trigger slightly before/after
        rootMargin: '0px',
      }
    );

    observer.observe(triggerElement);

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [formHook]);

  // Render an invisible trigger div that can be placed anywhere on the page
  return <div ref={triggerRef} className="h-px w-full" aria-hidden="true" />;
}
