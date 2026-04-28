import { InputHTMLAttributes, forwardRef } from 'react';
import { Search } from 'lucide-react';
import { cn } from '../../lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <div className="relative w-full group">
        {icon && (
          <Search 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-hover:text-ais-lime transition-colors" 
            size={20} 
          />
        )}
        <input
          className={cn(
            "w-full bg-white/5 border border-white/10 rounded-full py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-ais-lime/50 focus:bg-white/10 transition-all",
            icon && "pl-12 pr-4",
            !icon && "px-4",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
