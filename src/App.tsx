/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroInfo from './components/HeroInfo';
import ContentRail from './components/ContentRail';
import { Lock } from 'lucide-react';
import { SECTIONS, PROVIDER_LOGOS } from './constants';
import { ContentItem } from './types';
import DesignSystem from './pages/DesignSystem';
import MediaDetail from './pages/MediaDetail';
import Subscription from './pages/Subscription';
import Search from './pages/Search';
import LiveTV from './pages/LiveTV';
import ProfileOverlay from './components/ProfileOverlay';
import { Button } from './components/ui/Button';
import { AIS_LOGO_URL } from './constants';
import Login from './pages/Login';
import PaymentModal from './pages/PaymentModal';
import type { Plan } from './pages/Subscription';

export default function App() {
  const [view, setView] = useState<'login' | 'home' | 'detail' | 'live-tv'>('login');
  const [showSubscription, setShowSubscription] = useState(false);
  const [subscriptionFocus, setSubscriptionFocus] = useState<'disney' | undefined>(undefined);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isGuest, setIsGuest] = useState(true);

  const handleSubscribePlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setShowSubscription(false);
    setIsGuest(false);
    setView('home');
    setShowPayment(true);
  };

  const handleLoginComplete = (guestMode: boolean) => {
    setIsGuest(guestMode);
    setView('home');
  };

  const [sectionFocus, setSectionFocus] = useState<Record<string, ContentItem>>(() => {
    const initial: Record<string, ContentItem> = {};
    SECTIONS.forEach(s => {
      initial[s.id] = s.items[0];
    });
    return initial;
  });
  const [activeContent, setActiveContent] = useState<ContentItem>(SECTIONS[0].items[0]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDesignSystem, setShowDesignSystem] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastKeyTime = useRef<number>(0);
  const activeSectionIdxRef = useRef(0);
  const sectionFocusRef = useRef(sectionFocus);

  useEffect(() => {
    sectionFocusRef.current = sectionFocus;
  }, [sectionFocus]);

  useEffect(() => {
    if (view !== 'home') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = SECTIONS.findIndex(s => s.id === entry.target.id);
            if (idx !== -1) activeSectionIdxRef.current = idx;
          }
        });
      },
      { root: scrollRef.current, threshold: 0.5 }
    );
    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [view]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key.toLowerCase() === 'd') {
      const currentTime = Date.now();
      if (currentTime - lastKeyTime.current < 300) {
        setShowDesignSystem(prev => !prev);
      }
      lastKeyTime.current = currentTime;
      return;
    }

    const arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    if (!arrowKeys.includes(e.key)) return;
    e.preventDefault();

    const idx = activeSectionIdxRef.current;
    const section = SECTIONS[idx];

    if (e.key === 'ArrowDown') {
      const next = SECTIONS[Math.min(idx + 1, SECTIONS.length - 1)];
      document.getElementById(next.id)?.scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
      const prev = SECTIONS[Math.max(idx - 1, 0)];
      document.getElementById(prev.id)?.scrollIntoView({ behavior: 'smooth' });
    } else if (section && e.key === 'ArrowRight') {
      const current = sectionFocusRef.current[section.id];
      const itemIdx = section.items.findIndex(i => i.id === current.id);
      const next = section.items[Math.min(itemIdx + 1, section.items.length - 1)];
      setSectionFocus(prev => ({ ...prev, [section.id]: next }));
      setActiveContent(next);
    } else if (section && e.key === 'ArrowLeft') {
      const current = sectionFocusRef.current[section.id];
      const itemIdx = section.items.findIndex(i => i.id === current.id);
      const prev = section.items[Math.max(itemIdx - 1, 0)];
      setSectionFocus(p => ({ ...p, [section.id]: prev }));
      setActiveContent(prev);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [view]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setIsScrolled(scrollRef.current.scrollTop > 50);
      }
    };
    const current = scrollRef.current;
    current?.addEventListener('scroll', handleScroll);
    return () => current?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemFocus = (item: ContentItem, sectionId: string) => {
    setSectionFocus(prev => ({
      ...prev,
      [sectionId]: item
    }));
    setActiveContent(item);
  };

  if (view === 'login') {
    return <Login onComplete={handleLoginComplete} onSubscribe={handleSubscribePlan} />;
  }

  if (showDesignSystem) {
    return <DesignSystem onBack={() => setShowDesignSystem(false)} />;
  }

  return (
    <div 
      ref={scrollRef}
      className="h-screen bg-dark-charcoal text-white selection:bg-ais-lime selection:text-dark-charcoal overflow-y-scroll snap-y snap-mandatory scroll-smooth"
    >
      <AnimatePresence>
        {showSubscription && (
          <Subscription
            onClose={() => { setShowSubscription(false); setSubscriptionFocus(undefined); }}
            focus={subscriptionFocus}
            onSubscribe={handleSubscribePlan}
          />
        )}
        {showPayment && selectedPlan && (
          <PaymentModal
            plan={selectedPlan}
            onBack={() => { setShowPayment(false); setShowSubscription(true); }}
            onConfirm={() => { setShowPayment(false); setView('home'); }}
          />
        )}
        {showSearch && (
          <Search 
            onClose={() => setShowSearch(false)} 
            onSelectContent={(item) => {
              setActiveContent(item);
              setShowSearch(false);
              setView('detail');
            }} 
          />
        )}
        {showProfile && (
          <ProfileOverlay 
            onClose={() => setShowProfile(false)} 
            onLogout={() => {
              setShowProfile(false);
              setView('login');
            }}
          />
        )}
      </AnimatePresence>

      {view === 'detail' ? (
        <MediaDetail content={activeContent} onBack={() => setView('home')} onPlay={() => setShowSubscription(true)} />
      ) : view === 'live-tv' ? (
        <LiveTV onBack={() => setView('home')} />
      ) : (
        <>
          {/* Header Overlay */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/60 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
         <Navbar
          onSearchClick={() => setShowSearch(true)}
          onLiveTVClick={() => setView('live-tv')}
          onProfileClick={() => setShowProfile(true)}
          onSubscribeClick={() => { setSubscriptionFocus(undefined); setShowSubscription(true); }}
        />
      </div>

      <main className="relative">
        {SECTIONS.map((section) => {
          const focusedItem = sectionFocus[section.id];
          
          return (
            <section 
              key={section.id} 
              id={section.id}
              className="relative w-full h-screen snap-start flex flex-col justify-end pb-12 overflow-hidden"
            >
              <Hero content={section.locked ? { ...focusedItem, heroImg: '/images/disney-wall.jpg', videoId: undefined } : focusedItem} />

              {section.locked ? (
                <>
                  {/* Lock overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-8">
                    <img
                      src={PROVIDER_LOGOS.disney}
                      alt="Disney+"
                      className="h-16 w-auto drop-shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
                      <Lock size={16} className="text-white/70" />
                      <span className="text-white/70 text-sm font-semibold uppercase tracking-widest">Not included in your plan</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-display font-black text-white text-center leading-tight max-w-xl">
                      Unlock <span className="text-[#113ccf]">Disney+</span> Today
                    </h2>
                    <p className="text-white/50 text-lg text-center max-w-md font-light">
                      Disney, Pixar, Marvel, Star Wars & National Geographic — from just 199 THB/month via AIS PLAY.
                    </p>
                    <Button
                      variant="primary"
                      size="lg"
                      className="bg-[#113ccf] hover:bg-[#1a4fe0] text-white px-10 py-4 text-base font-black uppercase tracking-widest shadow-[0_10px_40px_rgba(17,60,207,0.5)]"
                      onClick={() => { setSubscriptionFocus('disney'); setShowSubscription(true); }}
                    >
                      See Disney+ Plans
                    </Button>
                  </div>

                  <div className="relative z-20 w-full">
                    <ContentRail
                      section={section}
                      activeItemId={focusedItem.id}
                      onItemFocus={(item) => handleItemFocus(item, section.id)}
                      onItemClick={() => { setSubscriptionFocus('disney'); setShowSubscription(true); }}
                      locked
                    />
                  </div>
                </>
              ) : (
                <div className="relative z-20 w-full">
                  <HeroInfo
                    content={focusedItem}
                    onWatchClick={() => setView('detail')}
                  />
                  <ContentRail
                    section={section}
                    activeItemId={focusedItem.id}
                    onItemFocus={(item) => handleItemFocus(item, section.id)}
                    onItemClick={() => setView('detail')}
                  />
                </div>
              )}
            </section>
          );
        })}
        
        {/* Bottom Call to Action for Guests */}
        <section className="h-screen snap-start flex items-center justify-center">
          <div className="flex flex-col items-center justify-center p-12 bg-deep-dark/80 backdrop-blur-2xl rounded-3xl mx-8 md:mx-12 lg:mx-auto lg:max-w-5xl border border-white/5 shadow-2xl">
            <h3 className="text-3xl font-display font-bold mb-4 text-center text-ais-lime">
              Join the AIS Play Revolution
            </h3>
            <p className="text-white/60 text-center max-w-xl mb-8 text-base font-light leading-relaxed">
              Unlock a cinematic world where all your subscriptions merge into one master experience. Seamless continuity, high-fidelity discovery, and cinematic immersion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" className="font-black shadow-[0_15px_40px_rgba(188,208,67,0.4)] uppercase">
                START FREE TRIAL
              </Button>
              <Button variant="secondary" size="lg" className="bg-white/5 uppercase">
                LEARN MORE
              </Button>
            </div>
            <Button 
              variant="ghost"
              onClick={() => scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-10 text-white/30 hover:text-white transition-colors text-sm uppercase tracking-[0.2em] font-medium border-b border-transparent hover:border-white/20 pb-1 h-auto hover:bg-transparent"
            >
              Continue Watching as Guest
            </Button>
          </div>
        </section>
      </main>

      {/* Footer / Meta Info */}
      <footer className="p-8 border-t border-white/5 bg-black/20 text-center">
         <div className="flex justify-center items-center gap-8 mb-6 opacity-40 grayscale hover:grayscale-0 transition-all">
           <img src={AIS_LOGO_URL} alt="AIS Logo" className="h-10 object-contain" referrerPolicy="no-referrer" />
           <span className="text-white/10 text-xl font-light">|</span>
           <img src={PROVIDER_LOGOS.netflix} alt="Netflix" className="h-6 w-auto" />
           <img src={PROVIDER_LOGOS.disney} alt="Disney+" className="h-7 w-auto" />
           <img src={PROVIDER_LOGOS.hbo} alt="HBO Max" className="h-6 w-auto" />
         </div>
         <p className="text-sm text-white/30 font-light">
           &copy; 2026 AIS Play. All content is metadata-driven from respective providers. 
           <span className="ml-4 opacity-50 px-2 py-0.5 border border-white/10 rounded font-mono text-[10px]">Double-tap 'D' for Design System</span>
         </p>
      </footer>
      </>
      )}
    </div>
  );
}

