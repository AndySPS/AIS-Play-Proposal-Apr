import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContentItem } from '../types';

interface HeroProps {
  content: ContentItem;
}

export default function Hero({ content }: HeroProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(false);
    if (!content.videoId) return;
    const timer = setTimeout(() => setShowVideo(true), 900); // 0.4s fade + 0.5s delay
    return () => clearTimeout(timer);
  }, [content.id, content.videoId]);

  const videoSrc = content.videoId
    ? `https://www.youtube.com/embed/${content.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${content.videoId}&rel=0&modestbranding=1&playsinline=1`
    : null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Static background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={content.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${content.heroImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* YouTube video background — fades in 3s after static image */}
      <AnimatePresence>
        {showVideo && videoSrc && (
          <motion.div
            key="video-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none"
          >
            <iframe
              src={videoSrc}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.78vh] h-[56.25vw]"
              style={{ border: 'none' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal via-transparent to-black/30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative masks */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-dark-charcoal/80 via-dark-charcoal/40 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark-charcoal via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
