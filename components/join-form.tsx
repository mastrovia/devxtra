'use client';

import useJoinForm from '@/hooks/join-form';
import { cn } from '@/lib/utils';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ButtonStyled } from './common/button';
import React, { cloneElement, MouseEventHandler, ReactElement, useEffect, useState } from 'react';
import { LottiePlayer } from './lottie-player';

export default function JoinForm() {
  const formHook = useJoinForm();
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    currentCareerStatus: '',
    okForOffline: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submitFrom = async () => {
    try {
      setLoading(true);
      // const response =
      await fetch(process.env.NEXT_PUBLIC_APP_SCRYPT_URL as string, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data),
      });
      // console.log(response, await response.json());
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!formHook.open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        formHook.setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [formHook, formHook.open]);

  return (
    <section
      className={cn(
        'fixed top-0 left-0 w-full h-full z-[111] bg-black/50 backdrop-blur-sm items-center justify-center',
        formHook.open ? 'flex' : 'hidden'
      )}
      onClick={() => formHook.setOpen(false)}
    >
      <div
        className="border rounded-2xl bg-accent/50 backdrop-blur-lg flex flex-col gap-5 md:max-w-[400px] mx-4 p-5 md:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="flex flex-col items-center gap-2">
            <div className="min-h-[150px] min-w-[300px]">
              <LottiePlayer src="/lotties/success-check.json" loop={false} />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-xl font-bold">We&apos;ve Noted</h1>
              <p className="text-muted-foreground">Our team will contact you soon.</p>
            </div>
            <ButtonStyled
              className="mt-3"
              onClick={() => {
                setSubmitted(false);
                setData({ name: '', email: '', phone: '', currentCareerStatus: '', okForOffline: '' });
                formHook.setOpen(false);
              }}
            >
              Continue
            </ButtonStyled>
          </div>
        ) : (
          <>
            <h1 className="text-xl font-bold">Transform your career with DevXtra</h1>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-3">
                <Label htmlFor="name-input" className="font-medium">
                  Name
                </Label>
                <Input
                  value={data.name}
                  onChange={(e) => setData((pre) => ({ ...pre, name: e.target.value }))}
                  id="name-input"
                  placeholder="John doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="name-input" className="font-medium">
                  Phone number
                </Label>
                <Input
                  value={data.phone}
                  type="number"
                  onChange={(e) => setData((pre) => ({ ...pre, phone: e.target.value }))}
                  id="name-input"
                  placeholder="78******22"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="name-input" className="font-medium">
                  What defines you the most ?
                </Label>
                <Select value={data.currentCareerStatus} onValueChange={(e) => setData((pre) => ({ ...pre, currentCareerStatus: e }))}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Currently studying ?" />
                  </SelectTrigger>
                  <SelectContent className="z-[122]">
                    <SelectItem value="currently-studying">Currently Studying</SelectItem>
                    <SelectItem value="job-seeker">Job Seeker</SelectItem>
                    <SelectItem value="fresher">Fresher</SelectItem>
                    <SelectItem value="career-switch">Career Switch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="hidden flex-col gap-2">
                <Label htmlFor="name-input" className="font-medium">
                  Are you okay for offline course ?
                </Label>
                <Select value={data.okForOffline} onValueChange={(e) => setData((pre) => ({ ...pre, okForOffline: e }))}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Are you ?" />
                  </SelectTrigger>
                  <SelectContent className="z-[122]">
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <ButtonStyled
                onClick={() => submitFrom()}
                type="button"
                className="flex items-center justify-center h-12 gap-3"
                disabled={loading || !data.phone}
              >
                {loading ? (
                  <span className="inline-block w-7 h-7 border-2 border-white border-b-transparent rounded-full animate-spin" />
                ) : (
                  'Submit'
                )}
              </ButtonStyled>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

interface JoinFormTriggerProps {
  children: ReactElement<{ onClick?: MouseEventHandler }>;
  disabled?: boolean;
}

export function JoinFormTrigger({ children, disabled }: JoinFormTriggerProps) {
  const form = useJoinForm();

  return cloneElement(children, {
    onClick: (e) => {
      children.props.onClick?.(e);
      if (!disabled) form.setOpen(true);
    },
  });
}
