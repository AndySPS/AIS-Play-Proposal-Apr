import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { AIS_LOGO_URL } from '../constants';
import { ProviderBadge } from '../components/ProviderBadge';
import { ArrowLeft, Play, Plus, Share2, Info, Star, Lock } from 'lucide-react';

interface MediaDetailProps {
  onBack: () => void;
  onPlay: () => void;
  content?: any;
}

const STRANGER_THINGS = {
  title: "Stranger Things",
  meta: "2016–2025 • 4 Seasons • Sci-Fi Horror • ⭐ 8.7",
  synopsis: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
  heroImg: "https://4kwallpapers.com/images/walls/thumbs_3t/25038.jpg",
  provider: "netflix"
};

const EPISODES = [
  { id: 1, title: "Chapter One: The Vanishing of Will Byers", duration: "48m", description: "On his way home from a friend's house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.", thumb: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&h=225&fit=crop" },
  { id: 2, title: "Chapter Two: The Weirdo on Maple Street", duration: "56m", description: "Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about a suspicious phone call.", thumb: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=400&h=225&fit=crop" },
  { id: 3, title: "Chapter Three: Holly, Jolly", duration: "52m", description: "An increasingly concerned Nancy looks for Barb and finds out what Jonathan's been up to. Joyce is convinced Will is trying to talk to her.", thumb: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&h=225&fit=crop" },
  { id: 4, title: "Chapter Four: The Body", duration: "51m", description: "Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover. Nancy and Jonathan form an unlikely alliance.", thumb: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&h=225&fit=crop" },
  { id: 5, title: "Chapter Five: The Flea and the Acrobat", duration: "53m", description: "Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.", thumb: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=400&h=225&fit=crop" },
  { id: 6, title: "Chapter Six: The Monster", duration: "47m", description: "A frantic Jonathan looks for Nancy in the darkness, but Steve's looking for her, too. Hopper and Joyce uncover the truth about the lab's experiments.", thumb: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=400&h=225&fit=crop" },
];

export default function MediaDetail({ onBack, onPlay, content }: MediaDetailProps) {
  const activeContent = STRANGER_THINGS;
  return (
    <div className="min-h-screen bg-black text-white selection:bg-ais-lime selection:text-black">
      {/* Hero Header */}
      <div className="relative h-[70vh] w-full overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src={activeContent.heroImg} 
              className="w-full h-full object-cover" 
              alt={activeContent.title} 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
          </motion.div>

        {/* Top Navigation */}
        <div className="absolute top-0 left-0 w-full p-8 flex items-center justify-between z-50">
          <Button 
            variant="ghost"
            onClick={onBack}
            className="flex items-center gap-2 group text-white/70 hover:text-white transition-colors h-auto p-0 hover:bg-transparent"
          >
            <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">Back to Discover</span>
          </Button>
          
          <img src={AIS_LOGO_URL} className="h-8 opacity-80" alt="AIS" referrerPolicy="no-referrer" />
        </div>

        {/* Content Info */}
        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-ais-lime" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
                FEATURED • {activeContent.provider.toUpperCase()} ORIGINAL
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 tracking-tighter">
              {activeContent.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="duration" className="bg-white/10 border-white/20">TV-MA</Badge>
              <span className="text-sm text-white/50">{activeContent.meta}</span>
            </div>

            <p className="text-base text-white/70 leading-relaxed max-w-2xl mb-8 font-light">
              {activeContent.synopsis}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button onClick={onPlay} variant="pill" size="lg" className="font-black px-10 group bg-ais-lime shadow-[0_10px_30px_rgba(188,208,67,0.3)]">
                <Lock size={16} className="mr-2" />
                SUBSCRIBE TO PLAY
              </Button>
              <Button variant="pill" size="lg" className="bg-white/5 border-white/10 hover:bg-white/10 px-8">
                <Plus size={18} className="mr-2" />
                Add to Playlist
              </Button>
              <Button variant="pill" size="lg" className="bg-white/5 border-white/10 hover:bg-white/10 w-12 p-0 flex items-center justify-center">
                <Share2 size={18} />
              </Button>
            </div>

            <div className="inline-flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-2">Plays on</span>
              <ProviderBadge provider={activeContent.provider} size="md" />
              <span className="text-sm font-medium">Included with AIS Play Ultimate</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Episodes Section */}
      <section className="p-8 lg:p-12 relative z-30 -mt-10">
        <div className="flex items-end justify-between mb-8">
          <div className="flex items-center gap-4">
             <div className="h-6 w-[2px] bg-ais-lime rounded-full" />
             <h2 className="text-3xl font-display font-bold">Episodes</h2>
          </div>
          <span className="text-white/30 text-xs font-medium">Season 1 • 8 episodes</span>
        </div>

        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {['Season 1', 'Season 2', 'Season 3', 'Season 4'].map((s, i) => (
            <div key={s}>
              <Button 
                variant="pill" 
                className={i === 0 ? 'px-8 bg-ais-lime' : 'px-8 bg-white/5 border-white/10'}
              >
                {s}
              </Button>
            </div>
          ))}
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-8 lg:-mx-12 px-8 lg:px-12">
          {EPISODES.map((ep, i) => (
            <motion.div
              key={ep.id}
              onClick={onPlay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              className="group cursor-pointer flex-shrink-0 w-[380px]"
            >
              <div className="relative aspect-video rounded-card overflow-hidden mb-4 border-2 border-transparent transition-all duration-300 group-hover:border-ais-lime group-hover:shadow-[0_0_25px_rgba(188,208,67,0.4)]">
                <img src={ep.thumb} alt={ep.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-md rounded text-[10px] font-mono border border-white/10">
                  {ep.duration}
                </div>
                <div className="absolute top-3 left-3 text-5xl font-display font-black text-white/20 group-hover:text-ais-lime/40 transition-colors leading-none">
                  {ep.id}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-ais-lime flex items-center justify-center text-black shadow-[0_0_30px_rgba(188,208,67,0.5)]">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
              </div>
              <h3 className="text-base font-bold mb-1 group-hover:text-ais-lime transition-colors line-clamp-1">{ep.title}</h3>
              <p className="text-sm text-white/40 line-clamp-2 leading-relaxed font-light">{ep.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="p-12 text-center border-t border-white/5 bg-black/40 mt-12">
        <p className="text-white/20 text-xs font-light">
          &copy; 2026 Netflix Entertainment. All rights reserved. Streaming exclusively via AIS Play Master Layer.
        </p>
      </footer>
    </div>
  );
}
