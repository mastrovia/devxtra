'use client';

import { useEffect } from 'react';
import useJoinForm from '@/hooks/join-form';

export default function AutoJoinFormTrigger() {
  const formHook = useJoinForm();

  useEffect(() => {
    // Show the join form modal after 2 seconds
    const timer = setTimeout(() => {
      formHook.setOpen(true);
    }, 2000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [formHook]);

  // This component doesn't render anything visible
  return null;
}
