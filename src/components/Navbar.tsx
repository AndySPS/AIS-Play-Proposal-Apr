import React from 'react';
import { LayoutGrid, Tv, Bookmark, User } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

interface NavbarProps {
  onSearchClick?: () => void;
  onLiveTVClick?: () => void;
  onProfileClick?: () => void;
  onSubscribeClick?: () => void;
}

export default function Navbar({ onSearchClick, onLiveTVClick, onProfileClick, onSubscribeClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full h-[74px] z-50 flex items-center justify-between px-8 md:px-12 bg-navbar-bg nav-blur border-b border-white/5 shadow-[0_0_22px_rgba(0,0,0,0.5)]">
      {/* Left — nav links */}
      <div className="flex items-center gap-9">
        <div className="flex items-center" onClick={onProfileClick}>
          <User className="w-[37px] h-[37px] text-white/90 p-1.5 bg-white/10 rounded-full cursor-pointer hover:bg-ais-lime hover:text-black transition-all" />
        </div>
        <div className="hidden md:flex items-center gap-7">
          <NavLink icon={<LayoutGrid size={21} />} label="Home" active />
          <NavLink icon={<Tv size={21} />} label="Live TV" onClick={onLiveTVClick} />
          <NavLink icon={<Bookmark size={21} />} label="My List" />
        </div>
      </div>

      {/* Centre — search */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-full max-w-lg hidden lg:block cursor-pointer"
        onClick={onSearchClick}
      >
        <div className="relative pointer-events-none">
          <Input icon placeholder="Search movies, TV shows, sports..." readOnly />
        </div>
      </div>

      {/* Right — subscribe */}
      <div className="flex items-center">
        <Button
          variant="pill"
          size="md"
          onClick={onSubscribeClick}
          className="font-black text-[13px] px-6 shadow-[0_0_20px_rgba(188,208,67,0.3)]"
        >
          SUBSCRIBE
        </Button>
      </div>
    </nav>
  );
}

function NavLink({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <div 
      className={`relative flex items-center gap-2 cursor-pointer group`}
      onClick={onClick}
    >
      <span className={`${active ? 'text-ais-lime' : 'text-white/70 group-hover:text-white'} transition-colors`}>
        {icon}
      </span>
      <span className={`text-sm font-medium uppercase tracking-widest ${active ? 'text-white' : 'text-white/50 group-hover:text-white'} transition-colors`}>
        {label}
      </span>
      {active && (
        <motion.div 
          layoutId="nav-active"
          className="absolute -bottom-4 left-0 w-full h-1 bg-ais-lime rounded-full"
        />
      )}
    </div>
  );
}
