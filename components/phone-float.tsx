'use client';

import { useState, useEffect } from 'react';

export default function PhoneFloat() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER || '8921190179'; // Replace with actual phone number

  const phoneLink = `tel:+91${phoneNumber}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={phoneLink}
      className="fixed bottom-24 right-6 z-[100] flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-3 rounded-full shadow-[0_8px_30px_rgba(255,107,53,0.4)] hover:shadow-[0_12px_40px_rgba(255,107,53,0.6)] transition-all duration-300 hover:scale-105 group animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Call us"
    >
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
      </svg>
      <span
        className={`text-sm md:text-base font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${
          isHovered ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0 hidden'
        }`}
      >
        Call Us Now
      </span>
    </a>
  );
}
