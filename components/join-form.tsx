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
    phone: '',
    age: '',
    currentStatus: '',
    biggestGoal: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const validatePhone = (phone: string) => {
    // Remove all non-digit characters
    const digitsOnly = phone.replace(/\D/g, '');

    // Check if it's empty
    if (!digitsOnly) {
      setPhoneError('Phone number is required');
      return false;
    }

    // Check if it's exactly 10 digits (Indian mobile number)
    if (digitsOnly.length !== 10) {
      setPhoneError('Phone number must be 10 digits');
      return false;
    }

    // Check if it starts with valid digits (6-9 for Indian mobile)
    if (!/^[6-9]/.test(digitsOnly)) {
      setPhoneError('Phone number must start with 6, 7, 8, or 9');
      return false;
    }

    setPhoneError('');
    return true;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData((pre) => ({ ...pre, phone: value }));

    // Validate on change if user has started typing
    if (value.length > 0) {
      validatePhone(value);
    } else {
      setPhoneError('');
    }
  };

  const submitFrom = async () => {
    // Validate phone before submitting
    if (!validatePhone(data.phone)) {
      return;
    }

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
        className="border rounded-2xl bg-accent flex flex-col gap-5 w-full max-w-[500px] mx-4 p-5 md:p-7 max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => formHook.setOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
          aria-label="Close form"
        >
          <svg
            className="w-5 h-5 text-muted-foreground"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {submitted ? (
          <div className="flex flex-col items-center gap-2">
            <div className="min-h-[150px] min-w-[300px]">
              <LottiePlayer src="/lotties/success-check.json" loop={false} />
            </div>
            <div className="flex flex-col gap-2 items-center text-center">
              <h1 className="text-2xl font-bold">Got it! We&apos;ll call you in 5 minutes</h1>
              {/* <p className="text-muted-foreground">
                Keep your phone nearby at <span className="font-semibold text-primary">{data.phone}</span>.
              </p> */}
              {/* <div className="mt-3 p-4 bg-[--accent-blue]/10 rounded-lg border border-[--accent-blue]/30 w-full">
                <p className="text-sm font-medium mb-2">Meanwhile, check your WhatsApp for:</p>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <span className="text-[--text-trust]">✓</span>
                    <span>Your personalized roadmap</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[--text-trust]">✓</span>
                    <span>Success stories</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[--text-trust]">✓</span>
                    <span>Course preview</span>
                  </div>
                </div>
              </div> */}
            </div>
            <ButtonStyled
              className="mt-3 w-full"
              onClick={() => {
                setSubmitted(false);
                setData({ name: '', phone: '', age: '', currentStatus: '', biggestGoal: '' });
                formHook.setOpen(false);
              }}
            >
              Continue
            </ButtonStyled>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Get a Personal Call in 5 Minutes</h1>
              <p className="text-sm text-muted-foreground">
                Share your details. Our team will call you immediately to discuss your personalized learning path. No automated emails, just
                real conversation.
              </p>
            </div>
            <form className="flex flex-col gap-3 md:gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <Label htmlFor="name-input" className="font-medium text-sm">
                  What should we call you? <span className="text-[--text-urgent]">*</span>
                </Label>
                <Input
                  value={data.name}
                  onChange={(e) => setData((pre) => ({ ...pre, name: e.target.value }))}
                  id="name-input"
                  placeholder="Your name"
                  required
                  className="h-11"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="phone-input" className="font-medium text-sm">
                  Phone Number <span className="text-[--text-urgent]">*</span>
                </Label>
                <Input
                  value={data.phone}
                  type="tel"
                  onChange={handlePhoneChange}
                  id="phone-input"
                  placeholder="Enter 10 digit mobile number"
                  required
                  className={`h-11 ${phoneError ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  maxLength={10}
                />
                {phoneError ? (
                  <p className="text-xs text-red-500">{phoneError}</p>
                ) : (
                  <p className="text-xs text-muted-foreground">We&apos;ll call this number in 5 minutes</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="age-input" className="font-medium text-sm">
                  Age <span className="text-[--text-urgent]">*</span>
                </Label>
                <Input
                  value={data.age}
                  type="number"
                  onChange={(e) => setData((pre) => ({ ...pre, age: e.target.value }))}
                  id="age-input"
                  placeholder="Your age"
                  min="15"
                  max="100"
                  required
                  className="h-11"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="status-select" className="font-medium text-sm">
                  Current Status <span className="text-[--text-urgent]">*</span>
                </Label>
                <Select value={data.currentStatus} onValueChange={(e) => setData((pre) => ({ ...pre, currentStatus: e }))}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your current status" />
                  </SelectTrigger>
                  <SelectContent className="z-[122]">
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="working-professional">Working Professional</SelectItem>
                    <SelectItem value="job-seeker">Job Seeker</SelectItem>
                    <SelectItem value="freelancer">Freelancer</SelectItem>
                    <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="goal-select" className="font-medium text-sm">
                  What&apos;s your biggest goal?
                </Label>
                <Select value={data.biggestGoal} onValueChange={(e) => setData((pre) => ({ ...pre, biggestGoal: e }))}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your goal" />
                  </SelectTrigger>
                  <SelectContent className="z-[122]">
                    <SelectItem value="first-client">Get my first freelance client</SelectItem>
                    <SelectItem value="career-switch">Switch to a tech career</SelectItem>
                    <SelectItem value="startup">Build my own startup</SelectItem>
                    <SelectItem value="level-up">Level up my coding skills</SelectItem>
                    <SelectItem value="not-sure">Not sure yet, need guidance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2 p-3 bg-[--accent-blue]/10 rounded-lg border border-[--accent-blue]/30">
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-[--text-trust] mt-0.5">✓</span>
                  <span>Immediate personal call (no bots)</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-[--text-trust] mt-0.5">✓</span>
                  <span>Free consultation, zero obligation</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-[--text-trust] mt-0.5">✓</span>
                  <span>200+ successful graduates</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-[--text-trust] mt-0.5">✓</span>
                  <span>Your number stays private</span>
                </div>
              </div>

              <ButtonStyled
                onClick={() => submitFrom()}
                type="button"
                className="transition-all flex items-center justify-center h-12 md:h-14 gap-3 bg-gradient-to-r from-orange-500 disabled:opacity-20 to-red-500 hover:from-orange-600 hover:to-red-600 text-white disabled:text-white font-semibold text-base md:text-lg mt-2"
                disabled={loading || !data.phone || !data.name || !data.age || !data.currentStatus || !!phoneError}
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
