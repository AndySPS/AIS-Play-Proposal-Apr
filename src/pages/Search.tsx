import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search as SearchIcon, Mic, X, TrendingUp, History, Play, Star } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ProviderBadge } from '../components/ProviderBadge';

interface SearchProps {
  onClose: () => void;
  onSelectContent: (item: any) => void;
}

const RECENT_SEARCHES = ['The Last of Us', 'Squid Game', 'Premier League', 'Succession', 'Bridgerton', 'Andor'];

const TRENDING = [
  { id: 't1', title: 'Stranger Things', year: '2016', rating: '8.7', provider: 'netflix', image: 'https://4kwallpapers.com/images/walls/thumbs_3t/25038.jpg' },
  { id: 't2', title: 'Bridgerton', year: '2020', rating: '7.3', provider: 'netflix', image: '/images/brigerton-poster.png' },
  { id: 't3', title: 'Andor', year: '2022', rating: '8.4', provider: 'disney', image: '/images/12.Andor.avif' },
  { id: 't4', title: 'The Mandalorian', year: '2019', rating: '8.7', provider: 'disney', image: 'https://4kwallpapers.com/images/walls/thumbs_3t/10651.jpg' },
  { id: 't5', title: 'House of the Dragon', year: '2022', rating: '8.5', provider: 'hbo', image: 'https://4kwallpapers.com/images/walls/thumbs_3t/17478.jpg' },
  { id: 't6', title: 'The Wheel of Time', year: '2021', rating: '7.1', provider: 'prime', image: '/images/AIS_TheWheelOfTime.jpg' },
  { id: 't7', title: 'Premier League Live', year: 'LIVE', rating: 'LIVE', provider: 'ais', image: '/images/sports.poster.SD.jpg' },
  { id: 't8', title: 'Zootopia+', year: '2022', rating: '7.0', provider: 'disney', image: '/images/Zootopia_2.avif' },
  { id: 't9', title: 'The Bear', year: '2022', rating: '8.5', provider: 'disney', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop' },
  { id: 't10', title: 'F1: Grand Prix', year: 'LIVE', rating: 'LIVE', provider: 'ais', image: '/images/sports4.poster.SD.jpg' },
];

const SEARCH_RESULTS = [
  { id: 'r1', title: 'Stranger Things', type: 'Series', year: '2016', rating: '8.7', provider: 'netflix', image: 'https://4kwallpapers.com/images/walls/thumbs_3t/25038.jpg' },
  { id: 'r2', title: 'The Last of Us', type: 'Series', year: '2023', rating: '8.8', provider: 'hbo', image: 'https://4kwallpapers.com/images/walls/thumbs_3t/21484.jpg' },
  { id: 'r3', title: 'Premier League: Liverpool vs Arsenal', type: 'Live TV', year: 'LIVE', rating: '4K', provider: 'ais', image: '/images/sports2.poster.SD.jpg' },
  { id: 'r4', title: 'House of the Dragon', type: 'Series', year: '2022', rating: '8.5', provider: 'hbo', image: 'https://4kwallpapers.com/images/walls/thumbs_3t/17478.jpg' },
  { id: 'r5', title: 'The Mandalorian', type: 'Series', year: '2019', rating: '8.7', provider: 'disney', image: 'https://4kwallpapers.com/images/walls/thumbs_3t/10651.jpg' },
  { id: 'r6', title: 'Formula 1: Grand Prix', type: 'Live TV', year: 'LIVE', rating: 'HDR', provider: 'ais', image: '/images/sports4.poster.SD.jpg' },
  { id: 'r7', title: 'Andor', type: 'Series', year: '2022', rating: '8.4', provider: 'disney', image: '/images/12.Andor.avif' },
  { id: 'r8', title: 'Bridgerton', type: 'Series', year: '2020', rating: '7.3', provider: 'netflix', image: '/images/bridgerton-still-1.png' },
  { id: 'r9', title: 'The Wheel of Time', type: 'Series', year: '2021', rating: '7.1', provider: 'prime', image: '/images/AIS_TheWheelOfTime.jpg' },
  { id: 'r10', title: 'UFC Fight Night', type: 'Live TV', year: 'LIVE', rating: 'HD', provider: 'ais', image: '/images/sports3.poster.SD.jpg' },
  { id: 'r11', title: 'Squid Game', type: 'Series', year: '2021', rating: '8.0', provider: 'netflix', image: 'https://4kwallpapers.com/images/walls/thumbs_3t/20940.png' },
  { id: 'r12', title: 'Bangkok Breaking', type: 'Series', year: '2021', rating: '6.8', provider: 'ais', image: 'https://expresselevatortohell.com/wp-content/uploads/2024/11/bangkok-breaking_prologue-riot.webp' },
];

const FILTERS = ['All', 'Movies', 'Series', 'Live TV', 'Sports'];

export default function Search({ onClose, onSelectContent }: SearchProps) {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col p-8 md:p-12 overflow-hidden"
    >
      {/* Search Header */}
      <div className="max-w-7xl mx-auto w-full mb-12">
        <div className="flex items-center justify-between mb-8">
           <div className="flex-1 max-w-3xl relative group">
               <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-ais-lime transition-colors">
                <SearchIcon size={20} />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search movies, series, or live TV..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-14 pr-16 text-lg font-light focus:outline-none focus:border-ais-lime/50 transition-all focus:bg-white/10"
              />
              <Button 
                variant="ghost"
                className="absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/10 transition-colors text-white/40 hover:text-white h-auto"
              >
                <Mic size={20} />
              </Button>
           </div>
           
           <Button 
             variant="ghost"
             onClick={onClose}
             className="ml-8 p-3 rounded-full hover:bg-white/10 transition-colors text-white/40 hover:text-white h-auto"
           >
             <X size={24} />
           </Button>
        </div>

        {/* Filter Strip */}
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {FILTERS.map(filter => (
            <Button
               key={filter}
               onClick={() => setActiveFilter(filter)}
               className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all whitespace-nowrap border h-auto ${
                 activeFilter === filter 
                   ? 'bg-ais-lime text-black border-ais-lime' 
                   : 'bg-white/5 text-white/40 border-white/10 hover:border-white/30'
               }`}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto w-full flex-1 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/10">
        <AnimatePresence mode="wait">
          {!query ? (
            <motion.div 
              key="initial"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-16"
            >
              {/* Recent Searches */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <History size={20} className="text-ais-lime" />
                  <h3 className="text-xl font-bold uppercase tracking-widest">Recent Searches</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {RECENT_SEARCHES.map(s => (
                    <Button 
                      variant="ghost"
                      key={s} 
                      onClick={() => setQuery(s)}
                      className="px-6 py-4 h-auto rounded-2xl bg-white/5 border border-white/5 hover:border-ais-lime/30 transition-all text-white/60 hover:text-white"
                    >
                      {s}
                    </Button>
                  ))}
                </div>
              </section>

              {/* Trending */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <TrendingUp size={20} className="text-ais-lime" />
                  <h3 className="text-xl font-bold uppercase tracking-widest">Trending Suggestions</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-2 pb-4">
                  {TRENDING.map((item, i) => (
                    <motion.div
                      key={item.id}
                      onMouseEnter={() => {}}
                      onClick={() => onSelectContent(item)}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="group relative rounded-card overflow-hidden cursor-pointer transition-all duration-300 border-2 border-white/5 hover:border-ais-lime hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(188,208,67,0.3)]"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        <div className="absolute top-4 left-4">
                          <ProviderBadge provider={item.provider} size="md" />
                        </div>
                        {item.rating === 'LIVE' ? (
                          <div className="absolute top-4 right-4">
                            <Badge variant="live" className="text-[10px] font-black">Live</Badge>
                          </div>
                        ) : (
                          <div className="absolute top-4 right-4">
                            <Badge variant="active" className="text-[10px] font-black">Trending</Badge>
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 rounded-full bg-ais-lime flex items-center justify-center text-black shadow-[0_0_40px_rgba(188,208,67,0.5)]">
                            <Play size={32} fill="currentColor" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-[#0a0a0b]">
                        <h3 className="text-lg font-bold mb-1 group-hover:text-ais-lime transition-colors">{item.title}</h3>
                        <p className="text-sm text-white/40">{item.year}{item.rating !== 'LIVE' ? ` • ★ ${item.rating}` : ''}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div 
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-display font-light text-white/40">
                Results for <span className="text-white font-bold">"{query}"</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6 pb-20">
                {SEARCH_RESULTS.map((item, i) => (
                  <motion.div
                    key={item.id}
                    onMouseEnter={() => setFocusedId(item.id)}
                    onMouseLeave={() => setFocusedId(null)}
                    onClick={() => onSelectContent(item)}
                    className={`group relative rounded-card overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
                      focusedId === item.id ? 'border-ais-lime scale-[1.02] shadow-[0_0_30px_rgba(188,208,67,0.3)]' : 'border-white/5'
                    }`}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500" 
                        referrerPolicy="no-referrer" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                      
                      {/* Provider Logo */}
                      <div className="absolute top-4 left-4">
                        <ProviderBadge provider={item.provider} size="md" />
                      </div>

                      {/* Type Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge variant={item.type === 'Live TV' ? 'live' : 'active'} className="text-[10px] font-black">
                          {item.type}
                        </Badge>
                      </div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="w-16 h-16 rounded-full bg-ais-lime flex items-center justify-center text-black shadow-[0_0_40px_rgba(188,208,67,0.5)]">
                           <Play size={32} fill="currentColor" />
                         </div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#0a0a0b]">
                      <h3 className="text-lg font-bold mb-1 transition-colors group-hover:text-ais-lime">
                        {item.title}
                      </h3>
                      
                      <AnimatePresence>
                        {focusedId === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex items-center gap-4 text-sm text-white/40 pt-2"
                          >
                             <div className="flex items-center gap-1">
                               <Star size={14} className="text-ais-lime fill-ais-lime" />
                               <span className="text-white">{item.rating}</span>
                             </div>
                             <span>•</span>
                             <span>{item.year}</span>
                             <span>•</span>
                             <span>Sci-Fi, Horror</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
