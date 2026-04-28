import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  variant?: 'provider' | 'live' | 'duration' | 'premium' | 'active' | 'next';
  className?: string;
  children: React.ReactNode;
}

export function Badge({ variant = 'provider', className, children }: BadgeProps) {
  const variants = {
    provider: 'bg-ais-pink text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter',
    live: 'bg-red-600 text-white px-2 py-0.5 rounded flex items-center gap-1.5 animate-pulse text-[10px] font-bold uppercase tracking-wider',
    duration: 'bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-medium text-white',
    premium: 'bg-ais-pink text-white px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase',
    active: 'bg-ais-lime text-dark-charcoal px-2 py-0.5 rounded-sm text-[10px] font-bold',
    next: 'bg-ais-lime/50 text-dark-charcoal px-2 py-0.5 rounded-sm text-[9px] font-medium'
  };

  return (
    <span className={cn(variants[variant], className)}>
      {variant === 'live' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
      {children}
    </span>
  );
}
