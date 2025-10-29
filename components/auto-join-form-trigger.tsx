'use client';

import { useEffect, useRef } from 'react';
import useJoinForm from '@/hooks/join-form';

export default function AutoJoinFormTrigger() {
  const formHook = useJoinForm();
  const hasShownRef = useRef(false);

  useEffect(() => {
    // Only show the modal once per session
    if (hasShownRef.current) return;

    // Show the join form modal after 2 seconds
    const timer = setTimeout(() => {
      if (!hasShownRef.current) {
        formHook.setOpen(true);
        hasShownRef.current = true;
      }
    }, 5000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [formHook]);

  // This component doesn't render anything visible
  return null;
}
