import { Badge } from './ui/Badge';
import { PROVIDER_LOGOS, AIS_LOGO_URL } from '../constants';

interface ProviderBadgeProps {
  provider: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function ProviderBadge({ provider, className = '', size = 'md' }: ProviderBadgeProps) {
  const isDisney = provider?.toLowerCase() === 'disney';
  const isAIS = provider?.toLowerCase() === 'ais';
  
  const sizeClasses = {
    sm: 'w-14 h-14',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  };

  return (
    <div 
      className={`
        overflow-hidden transition-all flex items-center justify-center rounded-lg
        ${sizeClasses[size]}
        ${className}
      `}
    >
      <img 
        src={PROVIDER_LOGOS[provider] || AIS_LOGO_URL} 
        className="w-full h-full object-cover brightness-110" 
        alt={provider} 
        referrerPolicy="no-referrer" 
      />
    </div>
  );
}
