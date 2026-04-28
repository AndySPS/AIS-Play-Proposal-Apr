import React from 'react';
import { motion } from 'motion/react';
import { Play, Plus, Info } from 'lucide-react';
import { ContentItem } from '../types';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { PROVIDER_LOGOS, AIS_LOGO_URL } from '../constants';

interface HeroInfoProps {
  content: ContentItem;
  onWatchClick?: () => void;
}

export default function HeroInfo({ content, onWatchClick }: HeroInfoProps) {
  const isDisney = content.provider?.toLowerCase() === 'disney';
  const isAIS = content.provider?.toLowerCase() === 'ais';

  return (
    <motion.div
      key={`text-${content.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="max-w-2xl px-8 md:px-12 mb-8"
    >
      <div className="flex items-center gap-4 mb-5">
        <div 
          className={`
            overflow-hidden transition-all flex items-center justify-center rounded-lg shadow-2xl
            w-14 h-14
          `}
        >
          <img 
            src={PROVIDER_LOGOS[content.provider] || AIS_LOGO_URL} 
            className="w-full h-full object-cover brightness-110" 
            alt={content.provider} 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
        <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">
          {content.meta}
        </span>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-[1.1] tracking-tight drop-shadow-2xl">
        {content.title}
      </h1>

      <p className="text-base text-white/70 mb-6 max-w-xl leading-relaxed font-light line-clamp-2">
        {content.synopsis}
      </p>

      <div className="flex items-center gap-4">
        <Button 
          variant="pill" 
          size="lg" 
          onClick={onWatchClick}
          className="px-8 py-3 bg-ais-lime shadow-[0_10px_30px_rgba(188,208,67,0.3)]"
        >
          <Play size={18} fill="currentColor" className="mr-2" />
          <span className="uppercase tracking-wider text-sm">{content.cta || 'Play'}</span>
        </Button>
        
        <Button variant="secondary" size="lg" className="px-8 py-3 bg-white/5 rounded-pill uppercase tracking-wider text-sm">
          <Plus size={18} className="mr-2" />
          <span>My List</span>
        </Button>

        <Button 
          variant="secondary" 
          size="md" 
          onClick={onWatchClick}
          className="p-3 bg-white/5 rounded-full border border-white/10"
        >
          <Info size={20} />
        </Button>
      </div>
    </motion.div>
  );
}
