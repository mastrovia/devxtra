'use client';

import { Heading } from '@/components/common/heading';
import { useEffect, useState } from 'react';

export default function LiveSuccessDashboard({ id }: { id?: string }) {
  const [activeStudents, setActiveStudents] = useState(47);
  const [gigsLanded, setGigsLanded] = useState(12);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStudents((prev) => prev + Math.floor(Math.random() * 3) - 1);
      if (Math.random() > 0.7) {
        setGigsLanded((prev) => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: '🎯',
      label: 'Students currently learning',
      value: activeStudents,
      color: 'text-[--accent-blue]',
    },
    {
      icon: '💼',
      label: 'Freelance gigs landed this month',
      value: gigsLanded,
      color: 'text-[--text-trust]',
    },
    {
      icon: '💰',
      label: 'Avg. first project value',
      value: '₹35,000',
      color: 'text-[--accent-gold]',
    },
    {
      icon: '⭐',
      label: 'Success rate',
      value: '87%',
      color: 'text-[--text-trust]',
    },
  ];

  return (
    <section className="section-cont flex flex-col gap-10" id={id}>
      <Heading
        tag="LIVE TRACKER"
        title="DevXtra Success Dashboard"
        subtitle="Real-time insights from our thriving community"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-3 p-6 rounded-xl bg-gradient-to-br from-accent/50 to-accent border border-border hover:border-[--accent-blue]/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="text-4xl">{stat.icon}</div>
            <div className="flex flex-col gap-1">
              <p className={`text-3xl font-bold ${stat.color}`}>
                {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--text-trust] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[--text-trust]"></span>
        </span>
        <span>Live updates • Refreshes every 5 seconds</span>
      </div>
    </section>
  );
}
