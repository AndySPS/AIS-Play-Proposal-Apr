import { motion } from 'motion/react';

const POSTER_IMAGES = [
  '/images/104361302.poster.SD.jpg',
  '/images/12.Andor.avif',
  '/images/2026_Q1_Feb_Sky_Watchpage_UTV_Tile_Watson.avif',
  '/images/75080702.94765702.poster.SD.jpg',
  '/images/75083652.94761452.poster.SD.jpg',
  '/images/75302602.97698652.poster.SD.jpg',
  '/images/AIS_TheWheelOfTime.jpg',
  '/images/SkyDocs_1.jpg',
  '/images/SkyOne_2.jpg',
  '/images/SkyOne_4.avif',
  '/images/SkyWitness_3.webp',
  '/images/ais-5MGdT1-IKTmc.91852702.poster.SD.jpg',
  '/images/ais-Dj3wK1-s6OCc.104224702.poster.SD.jpg',
  '/images/ais-EkDPY1-qaAQc.104909202.poster.SD.jpg',
  '/images/ais-cueeK1-i20Cc.104008552.poster.SD.jpg',
  '/images/ais-udrrV1-EXxyc.99682452.poster.SD.jpg',
  '/images/brigerton-poster.png',
  '/images/sports.poster.SD.jpg',
  '/images/sports2.poster.SD.jpg',
  '/images/sports3.poster.SD.jpg',
  '/images/sports4.poster.SD.jpg',
];

function PosterColumn({ images, reverse = false, speed = 20 }: { images: string[]; reverse?: boolean; speed?: number }) {
  const posters = [...images, ...images]; // Duplicate for seamless loop
  
  return (
    <motion.div 
      initial={{ y: reverse ? '-50%' : '0%' }}
      animate={{ y: reverse ? '0%' : '-50%' }}
      transition={{ 
        repeat: Infinity, 
        duration: speed, 
        ease: "linear" 
      }}
      className="flex flex-col gap-4 w-full"
    >
      {posters.map((url, i) => (
        <div key={i} className="w-full aspect-[2/3] rounded-xl overflow-hidden opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          <img src={url} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
        </div>
      ))}
    </motion.div>
  );
}

export default function CinematicBackground() {
  // Shuffle images for each column or just offset them
  const col1 = [...POSTER_IMAGES].sort(() => Math.random() - 0.5);
  const col2 = [...POSTER_IMAGES].sort(() => Math.random() - 0.5);
  const col3 = [...POSTER_IMAGES].sort(() => Math.random() - 0.5);
  const col4 = [...POSTER_IMAGES].sort(() => Math.random() - 0.5);
  const col5 = [...POSTER_IMAGES].sort(() => Math.random() - 0.5);
  const col6 = [...POSTER_IMAGES].sort(() => Math.random() - 0.5);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <PosterColumn images={col1} speed={70} />
        <PosterColumn images={col2} reverse speed={90} />
        <PosterColumn images={col3} speed={80} />
        <PosterColumn images={col4} reverse speed={100} />
        <PosterColumn images={col5} speed={60} />
        <PosterColumn images={col6} reverse speed={110} />
      </div>
      {/* Dynamic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
    </div>
  );
}
