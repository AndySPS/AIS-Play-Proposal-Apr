import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'auth' | 'pill' | 'ghost' | 'share' | 'pro' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  key?: React.Key;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-ais-lime/50';
  
  const variants = {
    primary: 'bg-ais-lime text-dark-charcoal hover:brightness-110 shadow-lg shadow-ais-lime/20',
    secondary: 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10',
    auth: 'bg-ais-deep text-[#343434] h-[55px] w-full max-w-[370px] rounded-full text-lg uppercase tracking-wider font-display font-bold',
    pill: 'bg-ais-lime text-dark-charcoal rounded-full px-6 hover:brightness-110 font-bold',
    ghost: 'bg-transparent hover:bg-white/10 text-white',
    share: 'bg-[#393a42] text-white hover:bg-white hover:text-dark-charcoal transition-colors',
    pro: 'bg-[#1f55ff]/50 text-white hover:bg-[#ffda00] hover:text-[#007bff] transition-all',
    outline: 'bg-transparent border border-white/20 hover:border-ais-lime text-white transition-colors'
  };

  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-5 py-2 text-sm',
    lg: 'px-7 py-2.5 text-base',
    xl: 'px-10 py-3.5 text-lg'
  };

  // All buttons are now pill-shaped by default unless specifically overridden
  let roundedClass = 'rounded-full';
  if (className?.includes('rounded-')) roundedClass = ''; 

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], roundedClass, className)}
      {...props}
    >
      {children}
    </button>
  );
}
