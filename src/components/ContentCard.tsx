import { motion } from 'motion/react';
import { Lock } from 'lucide-react';
import { ContentItem } from '../types';
import { Badge } from './ui/Badge';
import { ProviderBadge } from './ProviderBadge';

interface CardProps {
  key?: string;
  item: ContentItem;
  onFocus: (item: ContentItem) => void;
  onClick?: () => void;
  isActive: boolean;
  locked?: boolean;
}

export default function ContentCard({ item, onFocus, onClick, isActive, locked }: CardProps) {
  return (
    <motion.div
      tabIndex={0}
      onFocus={() => onFocus(item)}
      onMouseEnter={() => onFocus(item)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.05 }}
      className={`relative flex-shrink-0 w-[320px] md:w-[380px] aspect-video rounded-card cursor-pointer border-2 transition-all duration-300 ${
        isActive ? 'border-ais-lime shadow-[0_0_25px_rgba(188,208,67,0.5)] z-10' : 'border-transparent'
      }`}
    >
      <div className="absolute inset-0 rounded-[inherit] overflow-hidden">
        <img
          src={item.thumbImg}
          alt={item.title}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-all duration-300 ${locked ? 'brightness-50' : ''}`}
        />
        
        {/* Badge Provider */}
        <div className="absolute top-2 right-2">
          <ProviderBadge provider={item.provider} size="sm" />
        </div>

        {/* Live Badge */}
        {item.isLive && (
          <div className="absolute top-2 left-2">
            <Badge variant="live">Live</Badge>
          </div>
        )}

        {/* Duration Badge */}
        {item.duration && (
          <div className="absolute top-2 left-2">
            <Badge variant="duration">{item.duration}</Badge>
          </div>
        )}

        {/* Lock overlay */}
        {locked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/60 rounded-full p-3">
              <Lock size={20} className="text-white/80" />
            </div>
          </div>
        )}

        {/* Overlay & Text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
          <h3 className={`text-lg font-medium transition-colors ${locked ? 'text-white/40' : isActive ? 'text-ais-lime' : 'text-white'}`}>
            {item.title}
          </h3>
          {item.progress !== undefined && !locked && (
            <div className="mt-2 w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.progress * 100}%` }}
                className="h-full bg-ais-lime"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
