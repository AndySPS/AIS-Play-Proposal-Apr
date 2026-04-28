import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { AIS_LOGO_URL } from '../constants';
import { ArrowLeft, Play, Volume2, Maximize, List, Calendar, Info, Clock } from 'lucide-react';

interface LiveTVProps {
  onBack: () => void;
}

const CHANNELS = [
  { id: 'c1', name: 'AIS PLAY 1', category: 'General', logo: AIS_LOGO_URL, color: 'bg-ais-lime' },
  { id: 'c2', name: 'HBO HD', category: 'Movies', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg', color: 'bg-black' },
  { id: 'c3', name: 'Netflix Live', category: 'Series', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/3840px-Netflix_2015_logo.svg.png', color: 'bg-red-600' },
  { id: 'c4', name: 'Sports 1', category: 'Sports', logo: AIS_LOGO_URL, color: 'bg-blue-600' },
  { id: 'c5', name: 'CNN', category: 'News', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/CNN.svg', color: 'bg-red-700' },
  { id: 'c6', name: 'Discovery', category: 'Documentary', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Discovery_Channel_Logo.svg', color: 'bg-sky-500' },
];

const TIME_SLOTS = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30'];

const PROGRAMS: Record<string, any[]> = {
  c1: [
    { title: 'Morning News', duration: 60, startTime: '10:00' },
    { title: 'Cooking with AIS', duration: 30, startTime: '11:00' },
    { title: 'Live Concert', duration: 90, startTime: '11:30' },
    { title: 'AIS Tech Talk', duration: 30, startTime: '13:00' },
  ],
  c2: [
    { title: 'Dune: Part Two', duration: 150, startTime: '10:00' },
    { title: 'The Idol', duration: 60, startTime: '12:30' },
  ],
  c3: [
    { title: 'Stranger Things', duration: 60, startTime: '10:00' },
    { title: 'Squid Game', duration: 60, startTime: '11:00' },
    { title: 'Bridgerton', duration: 60, startTime: '12:00' },
    { title: 'The Crown', duration: 60, startTime: '13:00' },
  ],
  c4: [
    { title: 'Premier League: Arsenal vs City', duration: 120, startTime: '10:00' },
    { title: 'Sports Highlights', duration: 30, startTime: '12:00' },
    { title: 'NBA: Lakers vs Celtics', duration: 90, startTime: '12:30' },
  ],
  c5: [
    { title: 'Global Outlook', duration: 60, startTime: '10:00' },
    { title: 'Business Report', duration: 60, startTime: '11:00' },
    { title: 'Amanpour', duration: 60, startTime: '12:00' },
    { title: 'Direct with CNN', duration: 60, startTime: '13:00' },
  ],
  c6: [
    { title: 'The Great Barrier Reef', duration: 90, startTime: '10:00' },
    { title: 'Shark Week Special', duration: 60, startTime: '11:30' },
    { title: 'How It\'s Made', duration: 30, startTime: '12:30' },
    { title: 'Gold Rush', duration: 60, startTime: '13:00' },
  ],
};

export default function LiveTV({ onBack }: LiveTVProps) {
  const [activeChannel, setActiveChannel] = useState(CHANNELS[0]);
  const [currentTime, setCurrentTime] = useState('11:15'); // Dummy current time
  const epgRef = useRef<HTMLDivElement>(null);

  // Increased width per 30 mins from 160 to 240
  const getWidth = (duration: number) => (duration / 30) * 240;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-ais-lime selection:text-black flex flex-col overflow-hidden">
      {/* Top Player View */}
      <div className="relative h-[45vh] w-full bg-zinc-900 overflow-hidden group">
        <motion.div 
          key={activeChannel.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0"
        >
          <iframe 
            src="https://www.youtube.com/embed/YDvsBbKfLPA?si=SvzgpbR6sLfxCtBK&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0"
            className="w-full h-full border-none scale-[1.05] object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title="Live TV Player"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Player Controls Overlay */}
        <div className="absolute top-0 left-0 w-full p-8 flex items-center justify-between z-50">
          <Button 
            variant="ghost"
            onClick={onBack}
            className="flex items-center gap-2 group text-white/70 hover:text-white transition-colors h-auto p-0 hover:bg-transparent"
          >
            <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <ArrowLeft size={18} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">Back</span>
          </Button>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-red-600 rounded-lg animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-tighter">Live</span>
            </div>
          </div>
        </div>

        {/* Channel Info Overlay */}
        <div className="absolute bottom-8 left-8 flex items-end gap-6 z-20">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center p-3 border border-white/10 ${activeChannel.color}`}>
             <img src={activeChannel.logo} alt={activeChannel.name} className="max-w-full max-h-full object-contain grayscale invert" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-3xl font-display font-black">{activeChannel.name}</h2>
              <Badge variant="live" className="h-5">4K HDR</Badge>
            </div>
            <p className="text-white/50 text-sm font-medium">Currently Playing: <span className="text-white">Morning News Special Edition</span></p>
          </div>
        </div>

        {/* Play Controls */}
        <div className="absolute bottom-8 right-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="ghost" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all backdrop-blur-md border border-white/5 h-auto">
            <Volume2 size={20} />
          </Button>
          <Button variant="ghost" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all backdrop-blur-md border border-white/5 h-auto">
            <Maximize size={20} />
          </Button>
        </div>
      </div>

      {/* EPG Section */}
      <div className="flex-1 flex flex-col bg-[#0a0a0b] border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        {/* EPG Toolbar */}
        <div className="flex items-center justify-between px-10 py-6 border-b border-white/5 bg-black/20">
          <div className="flex items-center gap-10">
            <h3 className="text-base font-black uppercase tracking-[0.3em] text-ais-lime">Program Guide</h3>
            <div className="flex gap-6">
               {['All', 'Favorites', 'Movies', 'Sports', 'News'].map((filter, i) => (
                 <Button 
                   variant="ghost" 
                   key={filter} 
                   className={`text-xs font-black uppercase tracking-widest rounded-none h-auto p-0 pb-1 border-b-2 transition-colors ${i === 0 ? 'text-white border-ais-lime' : 'text-white/30 border-transparent hover:text-white/60'} hover:bg-transparent`}
                 >
                   {filter}
                 </Button>
               ))}
            </div>
          </div>
          <div className="flex items-center gap-6 text-white/30">
            <Calendar size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Monday, 27 Apr</span>
            <div className="h-5 w-[1px] bg-white/10 mx-2" />
            <Clock size={18} className="text-ais-lime" />
            <span className="text-sm font-black text-white">{currentTime}</span>
          </div>
        </div>

        {/* EPG Grid */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Time Header */}
          <div className="flex border-b border-white/5 bg-black/40">
            <div className="w-64 flex-shrink-0 border-r border-white/5 p-6 flex items-center justify-center">
              <List size={22} className="text-white/20" />
            </div>
            <div className="flex-1 overflow-x-auto scrollbar-hide py-4">
              <div className="flex">
                {TIME_SLOTS.map(time => (
                  <div key={time} className="w-[240px] flex-shrink-0 text-center">
                    <span className="text-xs font-black text-white/50 tracking-[0.2em]">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Channels & Grid */}
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {CHANNELS.map(channel => (
              <div key={channel.id} className="flex border-b border-white/5 group/row hover:bg-white/[0.03] transition-colors">
                {/* Channel Header */}
                <div 
                  onClick={() => setActiveChannel(channel)}
                  className={`w-64 h-32 flex-shrink-0 border-r border-white/5 p-6 flex items-center gap-4 cursor-pointer transition-colors ${activeChannel.id === channel.id ? 'bg-ais-lime/20' : 'bg-black/40 group-hover/row:bg-black/60'}`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center p-3 flex-shrink-0 border border-white/10 ${channel.color} shadow-lg`}>
                    <img src={channel.logo} className="max-w-full max-h-full object-contain grayscale invert opacity-90" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-black truncate leading-tight mb-1">{channel.name}</p>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{channel.category}</p>
                  </div>
                </div>

                {/* Programs Timeline */}
                <div className="flex-1 overflow-x-auto scrollbar-hide p-4 flex items-center bg-black/10">
                   <div className="flex gap-2">
                      {PROGRAMS[channel.id]?.map((prog, idx) => (
                        <div 
                          key={idx}
                          style={{ width: getWidth(prog.duration) }}
                          className={`flex-shrink-0 h-24 p-5 rounded-2xl border border-white/10 transition-all group/card cursor-pointer flex flex-col justify-between ${
                            prog.title === 'Morning News' ? 'bg-ais-lime/10 border-ais-lime/40 shadow-[inset_0_0_30px_rgba(188,208,67,0.15)]' : 'bg-white/5 hover:bg-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-black truncate max-w-[85%] uppercase tracking-tight">{prog.title}</h4>
                            <Info size={16} className="opacity-0 group-hover/card:opacity-100 transition-opacity text-ais-lime" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between text-[10px] font-bold text-white/40">
                              <span>{prog.startTime}</span>
                              <span>{prog.duration}m</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                               {prog.title === 'Morning News' && <div className="h-full bg-ais-lime w-[60%] shadow-[0_0_10px_rgba(188,208,67,0.5)]" />}
                            </div>
                          </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
