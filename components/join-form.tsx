'use client';

import useJoinForm from '@/hooks/join-form';
import { cn } from '@/lib/utils';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ButtonStyled } from './common/button';
import React, { cloneElement, MouseEventHandler, ReactElement, useState } from 'react';

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
      formHook.setOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={cn(
        'fixed top-0 left-0 w-full h-full z-[111] bg-black/50 backdrop-blur-xs items-center justify-center',
        formHook.open ? 'flex' : 'hidden'
      )}
      onClick={() => formHook.setOpen(false)}
    >
      <div
        className="border rounded-2xl p-7 bg-accent flex flex-col gap-5 max-w-[400px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl font-bold">
          Talk to our career experts to help you find a suitable career path
        </h1>
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-3">
            <Label htmlFor="name-input" className="font-light">
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
            <Label htmlFor="name-input" className="font-light">
              Email
            </Label>
            <Input
              value={data.email}
              onChange={(e) => setData((pre) => ({ ...pre, email: e.target.value }))}
              id="name-input"
              placeholder="abc@example.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name-input" className="font-light">
              Phone number
            </Label>
            <Input
              value={data.phone}
              onChange={(e) => setData((pre) => ({ ...pre, phone: e.target.value }))}
              id="name-input"
              placeholder="78******22"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name-input" className="font-light">
              What defines you the most ?
            </Label>
            <Select
              value={data.currentCareerStatus}
              onValueChange={(e) => setData((pre) => ({ ...pre, currentCareerStatus: e }))}
            >
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
          <div className="flex flex-col gap-2">
            <Label htmlFor="name-input" className="font-light">
              Are you okay for offline course ?
            </Label>
            <Select
              value={data.okForOffline}
              onValueChange={(e) => setData((pre) => ({ ...pre, okForOffline: e }))}
            >
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
            className="flex items-center justify-center h-12"
            disabled={loading}
          >
            {loading ? <div className="loader" /> : 'Submit'}
          </ButtonStyled>
        </form>
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
