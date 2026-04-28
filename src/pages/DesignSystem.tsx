import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Play, Plus, Info, User } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { cn } from '../lib/utils';
import { AIS_LOGO_URL } from '../constants';
import { PricingCard } from './Subscription';
import { ProviderBadge } from '../components/ProviderBadge';

import ContentCard from '../components/ContentCard';

interface DesignSystemProps {
  onBack: () => void;
}

const DS_MOCK_ITEM = {
  id: 'ds-1',
  title: 'Sample Content Title',
  thumbImg: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=480&h=270&fit=crop',
  heroImg: '',
  provider: 'ais' as const,
  synopsis: 'A sample synopsis for the design system showcase.',
  isLive: true,
  duration: '1:42:15',
  progress: 0.65,
  meta: 'S1 E1 · 42 mins'
};

export default function DesignSystem({ onBack }: DesignSystemProps) {
  return (
    <div className="min-h-screen bg-dark-charcoal text-white font-sans p-12">
      <header className="mb-16 flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-display font-bold text-ais-lime mb-2 tracking-tight">AIS Play</h1>
          <p className="text-white/50 text-lg uppercase tracking-[0.2em] font-medium">Design System & Component Library</p>
        </div>
        <Button variant="secondary" onClick={onBack} className="rounded-full h-12 w-12 p-0">
          <ArrowLeft size={24} />
        </Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* Colors Section */}
        <section>
          <h2 className="text-2xl font-display font-semibold mb-8 border-b border-white/10 pb-2">01. Colors</h2>
          <div className="grid grid-cols-2 gap-4">
            <ColorCard label="AIS Lime Green" hex="#bcd043" className="bg-ais-lime text-dark-charcoal" />
            <ColorCard label="AIS Deep Green" hex="#8bb31d" className="bg-ais-deep text-dark-charcoal" />
            <ColorCard label="Subscribe Pink" hex="#fc004a" className="bg-ais-pink" />
            <ColorCard label="Dark Charcoal" hex="#272c2f" className="bg-dark-charcoal border border-white/10" />
            <ColorCard label="Deep Dark" hex="#131313" className="bg-deep-dark border border-white/10" />
            <ColorCard label="White" hex="#ffffff" className="bg-white text-dark-charcoal" />
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <h2 className="text-2xl font-display font-semibold mb-8 border-b border-white/10 pb-2">02. Typography</h2>
          <div className="space-y-8">
            <div>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-2 font-black">Display (Kanit)</p>
              <h3 className="text-5xl font-display font-bold">The Big Screen Experience</h3>
            </div>
            <div>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-2 font-black">Body (Roboto)</p>
              <p className="text-xl font-light leading-relaxed">
                Experience all your favorite content from Netflix, Disney+, and HBO Max in one unified cinematic interface. No more app hopping.
              </p>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="md:col-span-2">
          <h2 className="text-2xl font-display font-semibold mb-8 border-b border-white/10 pb-2">03. Interactive Components</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Buttons */}
            <div className="space-y-6 lg:col-span-2">
              <p className="text-xs text-white/30 uppercase tracking-widest font-black">Buttons</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">Base Variants</p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">Special Variants</p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="pill">Pill (Primary)</Button>
                    <Button variant="pro">Pro Subscription</Button>
                    <Button variant="auth" className="max-w-[200px]">Auth</Button>
                    <Button variant="share">Share</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">Sizes</p>
                  <div className="flex flex-wrap items-end gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">Extra Large</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">Pill Variants (Large)</p>
                  <div className="flex flex-wrap items-end gap-3">
                    <Button variant="primary" size="lg">START WATCHING</Button>
                    <Button variant="outline" size="lg">LEARN MORE</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="space-y-6">
              <p className="text-xs text-white/30 uppercase tracking-widest font-black">Badges & Indicators</p>
              <div className="flex flex-wrap gap-4 items-center">
                <ProviderBadge provider="ais" size="sm" />
                <Badge variant="premium">PREMIUM</Badge>
                <Badge variant="live">LIVE</Badge>
                <Badge variant="duration">42:15</Badge>
              </div>
              <div className="flex gap-4 items-center">
                <Badge variant="active">ACTIVE</Badge>
                <Badge variant="next">UP NEXT</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Content Components */}
        <section className="md:col-span-2">
          <h2 className="text-2xl font-display font-semibold mb-8 border-b border-white/10 pb-2">04. Content Display</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs text-white/30 uppercase tracking-widest font-black mb-6">Standard Content Card</p>
              <div className="space-y-12">
                <ContentCard 
                  item={DS_MOCK_ITEM} 
                  isActive={false} 
                  onFocus={() => {}} 
                />
                <ContentCard 
                  item={DS_MOCK_ITEM} 
                  isActive={true} 
                  onFocus={() => {}} 
                />
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <p className="text-xs text-white/30 uppercase tracking-widest font-black mb-6">Input Fields</p>
                <Input icon placeholder="Search content..." />
              </div>
              
              <div className="space-y-6">
                <p className="text-xs text-white/30 uppercase tracking-widest font-black mb-4">Pricing Toggle Context</p>
                <div className="flex flex-wrap gap-4 items-center bg-white/5 p-6 rounded-3xl border border-white/5 inline-flex">
                   <Button variant="pill" size="md">Monthly</Button>
                   <Button variant="ghost" size="md" className="text-white/40">Yearly (Save 20%)</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Elevation & Surfaces */}
        <section className="md:col-span-2">
          <h2 className="text-2xl font-display font-semibold mb-8 border-b border-white/10 pb-2">04. Surfaces & Elevation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-navbar-bg nav-blur p-8 rounded-xl border border-white/5 shadow-2xl relative">
              <p className="text-xs text-ais-lime uppercase tracking-widest font-bold mb-4">Level 02: Floating UI</p>
              <p className="text-white/60">Glass-morphism with heavy diffused shadows for floating elements like navigation bars.</p>
            </div>
            <div className="bg-deep-dark p-8 rounded-xl border border-white/5 shadow-xl">
              <p className="text-xs text-ais-lime uppercase tracking-widest font-bold mb-4">Level 01: Surfaces</p>
              <p className="text-white/60">Deep dark surfaces for sections or modal content areas.</p>
            </div>
            <div className="relative w-[480px] aspect-video rounded-card overflow-hidden group">
              <img src="https://4kwallpapers.com/images/walls/thumbs_3t/25038.jpg" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <p className="text-xs text-ais-lime uppercase tracking-widest font-bold mb-1">Content Layer</p>
                <h4 className="text-xl font-bold">Cinematic Card Overlay (480px)</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Subscription Plans */}
        <section className="md:col-span-2">
          <h2 className="text-2xl font-display font-semibold mb-8 border-b border-white/10 pb-2">05. Subscription Plans</h2>
          <div className="flex flex-col lg:flex-row gap-12 justify-center py-8">
             <PricingCard 
               plan={{
                 id: 'premium-plus-ds',
                 name: 'PLAY PREMIUM PLUS',
                 price: '299',
                 tag: 'RECOMMENDED',
                 highlight: true,
                 description: 'The "sweet spot" tier. The best value with 5 premium apps included in one pack.',
                 apps: [
                   { name: 'HBO Max', tier: 'STANDARD', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' },
                   { name: 'Prime Video', tier: '4K/UHD', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Prime_Video_logo.svg' },
                   { name: 'iQIYI', tier: 'VIP', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/IQIYI_logo.svg' },
                   { name: 'Viu', tier: 'PREMIUM', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Viu_logo.svg' },
                   { name: 'WeTV', tier: 'VIP', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/WeTV_Logo.png' },
                 ],
                 features: [
                   '5 Apps in 1 Value Package',
                   'Full HD Experience on AIS PLAY',
                   'Supports up to 4 devices at once'
                 ]
               }} 
             />
             <PricingCard 
               plan={{
                 id: 'ultimate-ds',
                 name: 'PLAY ULTIMATE',
                 price: '999',
                 tag: 'ULTIMATE',
                 description: 'The "All-You-Can-Watch" flagship tier. The ultimate content aggregator hub.',
                 apps: [
                   { name: 'Netflix', tier: 'PREMIUM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/3840px-Netflix_2015_logo.svg.png' },
                   { name: 'HBO Max', tier: 'ULTIMATE', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' },
                   { name: 'Disney+', tier: 'PREMIUM', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
                   { name: 'Prime Video', tier: '4K/UHD', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Prime_Video_logo.svg' },
                 ],
                 features: [
                   '4K UHD + HDR + Dolby Atmos',
                   'Access to 95+ Premium Channels',
                   'Simultaneous view on 4 devices'
                 ]
               }} 
             />
          </div>
        </section>
      </div>

      <footer className="mt-32 pt-12 border-t border-white/5 text-center text-white/20">
        <p className="uppercase tracking-[0.4em] font-black">AIS Play Experience OS v1.0</p>
      </footer>
    </div>
  );
}

function ColorCard({ label, hex, className }: { label: string, hex: string, className?: string }) {
  return (
    <div className={cn("p-6 rounded-xl flex flex-col justify-between h-32", className)}>
      <span className="font-bold text-sm uppercase tracking-wider">{label}</span>
      <span className="font-mono text-xs opacity-60">{hex}</span>
    </div>
  );
}
