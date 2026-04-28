import React from 'react';
import { Section, ContentItem } from '../types';
import ContentCard from './ContentCard';

interface RailProps {
  key?: string;
  section: Section;
  activeItemId: string;
  onItemFocus: (item: ContentItem) => void;
  onItemClick?: (item: ContentItem) => void;
  locked?: boolean;
}

export default function ContentRail({ section, activeItemId, onItemFocus, onItemClick, locked }: RailProps) {
  return (
    <div className="mb-10 last:mb-0">
      <div className="px-8 md:px-12 mb-4">
        <h2 className="text-lg md:text-xl font-bold tracking-wider text-white uppercase flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-ais-lime" />
          {section.title}
        </h2>
      </div>
      
      <div className="relative group">
        <div className="flex gap-4 overflow-x-auto px-8 md:px-12 pt-6 pb-12 no-scrollbar scroll-smooth">
          {section.items.map((item) => (
            <ContentCard
              key={item.id}
              item={item}
              onFocus={onItemFocus}
              onClick={() => onItemClick?.(item)}
              isActive={item.id === activeItemId}
              locked={locked}
            />
          ))}
          {/* Spacer for scroll end */}
          <div className="flex-shrink-0 w-8 md:w-12 h-1" />
        </div>
      </div>
    </div>
  );
}
