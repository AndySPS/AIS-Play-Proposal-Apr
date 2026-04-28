import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { AIS_LOGO_URL, PROVIDER_LOGOS } from '../constants';
import CinematicBackground from '../components/CinematicBackground';

interface SubscriptionProps {
  onClose: () => void;
  focus?: 'disney';
  onSubscribe?: (plan: Plan) => void;
}

export interface Plan {
  id: string;
  name: string;
  subName?: string;
  price: string;
  period?: string;
  tag: string;
  description: string;
  apps?: { name: string; tier: string; logo: string; }[];
  sports?: { name: string; logo: string; }[];
  features: string[];
  highlight?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: 'premium',
    name: 'PLAY PREMIUM',
    price: '199',
    tag: 'ENTRY TIER',
    description: 'The entry-tier premium experience, designed for users focused on premium channels and essential Hollywood content.',
    apps: [
      { name: 'HBO Max', tier: 'STANDARD', logo: PROVIDER_LOGOS.hbo },
      { name: 'AIS Play', tier: 'PREMIUM', logo: PROVIDER_LOGOS.ais || AIS_LOGO_URL },
    ],
    features: [
      'Resolution: Full HD (1080p)',
      'Access to premium world-class channels including HBO, CNN, and Cartoon Network',
      'Supports watching on 2 devices at once'
    ]
  },
  {
    id: 'premium-plus',
    name: 'PLAY PREMIUM PLUS',
    price: '299',
    tag: 'RECOMMENDED',
    highlight: true,
    description: 'The "sweet spot" tier. This package should be visually highlighted with a "Recommended" badge to drive mid-tier conversion.',
    apps: [
      { name: 'HBO Max', tier: 'STANDARD', logo: PROVIDER_LOGOS.hbo },
      { name: 'Prime Video', tier: '4K/UHD', logo: PROVIDER_LOGOS.prime },
      { name: 'iQIYI', tier: 'VIP', logo: PROVIDER_LOGOS.iqiyi },
      { name: 'Viu', tier: 'PREMIUM', logo: PROVIDER_LOGOS.viu },
      { name: 'WeTV', tier: 'VIP', logo: PROVIDER_LOGOS.wetv },
    ],
    features: [
      'Premium 5-in-1 Value Pack',
      'Supports up to 4 devices at once',
      'Full HD Experience on AIS PLAY'
    ]
  },
  {
    id: 'ultimate',
    name: 'PLAY ULTIMATE',
    price: '999',
    tag: 'ULTIMATE FLAGSHIP',
    description: 'The "All-You-Can-Watch" flagship tier. The ultimate content aggregator hub for power users.',
    apps: [
      { name: 'Netflix', tier: 'PREMIUM', logo: PROVIDER_LOGOS.netflix },
      { name: 'HBO Max', tier: 'ULTIMATE', logo: PROVIDER_LOGOS.hbo },
      { name: 'Disney+', tier: 'PREMIUM', logo: PROVIDER_LOGOS.disney },
      { name: 'Prime Video', tier: '4K/UHD', logo: PROVIDER_LOGOS.prime },
      { name: 'AIS Play', tier: 'ULTIMATE', logo: PROVIDER_LOGOS.ais || AIS_LOGO_URL },
    ],
    features: [
      'Supports 4K UHD, HDR & Dolby Atmos',
      'Access to 95+ Premium Channels',
      'Simultaneous view on 4 devices'
    ]
  }
];

export function PricingCard({ plan, onSubscribe }: { plan: Plan; onSubscribe?: (plan: Plan) => void }) {
  const isUltimate = plan.id === 'ultimate';
  
  return (
    <motion.div 
      whileHover={{ y: -20 }}
      className={`relative w-full max-w-[360px] p-5 rounded-[24px] transition-all duration-500 border ${
        isUltimate 
          ? 'bg-gradient-to-b from-[#12140a] to-[#0a0a0a] border-ais-lime/30 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_50px_rgba(188,208,67,0.1)]' 
          : plan.highlight 
            ? 'bg-[#151516] border-ais-lime shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_40px_rgba(188,208,67,0.15)] scale-105 z-10' 
            : 'bg-[#151516] border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
      }`}
    >
      {/* Background with clipping */}
      <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-3">
          <Badge className={`${
            isUltimate
              ? 'bg-ais-lime text-black'
              : plan.highlight
                ? 'bg-white/10 text-ais-lime font-black'
                : 'bg-ais-pink text-white'
          } px-4 py-1.5 text-[16px] font-black rounded-sm border-none uppercase tracking-widest`}>
            {plan.tag}
          </Badge>
        </div>

        <div className="mb-4">
          <h3 className={`text-xl font-display font-bold tracking-tight leading-tight ${isUltimate ? 'text-ais-lime' : 'text-white'}`}>
            {plan.name}
          </h3>
          {plan.subName && (
            <h3 className="text-xl font-display font-bold text-ais-lime tracking-tight leading-tight">
              {plan.subName}
            </h3>
          )}
        </div>

        <div className="flex items-baseline gap-2 mb-4">
          <span className={`text-4xl font-display font-black ${isUltimate ? 'text-ais-lime drop-shadow-[0_0_20px_rgba(188,208,67,0.3)]' : 'text-white'}`}>
            {plan.price}
          </span>
          <div className="flex flex-col">
            <span className="text-[16px] font-bold text-white/40 uppercase tracking-widest">THB</span>
            <span className="text-[16px] font-medium text-white/20 uppercase tracking-tighter -mt-1">/ {plan.period ?? 'Month'}</span>
          </div>
        </div>

        {/* App Grid */}
        <div className={`rounded-xl p-4 mb-5 border ${isUltimate ? 'bg-white/[0.03] border-ais-lime/10' : 'bg-white/5 border-white/5'}`}>
          {plan.apps && (
            <div className="grid grid-cols-3 gap-4">
              {plan.apps.map(app => (
                <div key={app.name} className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center overflow-hidden border shadow-inner ${isUltimate ? 'bg-black/60 border-ais-lime/20' : 'bg-black/40 border-white/5'}`}>
                    <img src={app.logo} alt={app.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Features List */}
        <div className="space-y-2 mb-6 flex-1">
          {plan.features.map(feature => (
            <div key={feature} className="flex items-start gap-2.5">
              <div className="mt-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center border bg-ais-lime/10 border-ais-lime/20 shrink-0">
                <Check size={8} className="text-ais-lime" />
              </div>
              <span className="text-[16px] font-light text-white/80 leading-snug">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          variant="primary"
          onClick={() => onSubscribe?.(plan)}
          className={`w-full h-12 font-black text-[16px] transition-all ${
            isUltimate
              ? 'bg-ais-lime text-black hover:bg-ais-lime/80 shadow-[0_4px_20px_rgba(188,208,67,0.4)] hover:shadow-none'
              : 'bg-ais-lime text-black hover:scale-[0.98]'
          }`}
        >
          Subscribe Now
        </Button>
      </div>
    </motion.div>
  );
}

export const DISNEY_PLANS: Plan[] = [
  {
    id: 'disney-promo',
    name: 'PLAY Disney+',
    price: '999',
    tag: 'BEST VALUE',
    highlight: true,
    description: 'First-year promotional price for Disney+ Standard via AIS PLAY. Auto-renews at regular rate after year one.',
    apps: [
      { name: 'Disney+', tier: 'STANDARD', logo: PROVIDER_LOGOS.disney },
      { name: 'AIS Play', tier: 'INCLUDED', logo: PROVIDER_LOGOS.ais || AIS_LOGO_URL },
    ],
    features: [
      'Disney+ Standard for your first year',
      'Up to 2 screens via AIS PLAY simultaneously',
      'Up to 2 devices via Disney+ app or website',
      'Auto-renews at regular rate after year 1'
    ]
  },
  {
    id: 'disney-standard',
    name: 'Disney+ Standard',
    price: '199',
    tag: 'MONTHLY',
    description: 'Full HD Disney+ streaming month-to-month. No lock-in.',
    apps: [
      { name: 'Disney+', tier: 'STANDARD', logo: PROVIDER_LOGOS.disney },
    ],
    features: [
      'Up to Full HD (1080p) resolution',
      'Up to 2 devices simultaneously',
      'Or 1,590 THB billed yearly',
    ]
  },
  {
    id: 'disney-premium',
    name: 'Disney+ Premium',
    price: '289',
    tag: 'MONTHLY',
    description: 'The full Disney+ experience in stunning 4K with Dolby Vision and Dolby Atmos.',
    apps: [
      { name: 'Disney+', tier: 'PREMIUM', logo: PROVIDER_LOGOS.disney },
    ],
    features: [
      'Up to 4K UHD (device-dependent)',
      'Up to 4 devices simultaneously',
      'Or 2,290 THB billed yearly',
    ]
  }
];

const SPORTS_CHANNEL_LOGOS = {
  mutv:       '/images/sports/516_MUTV_.png',
  realmadrid: '/images/sports/517_RealMadridTV_.png',
  eurosport:  '/images/sports/EUROSPORT.png',
  wsport:     '/images/sports/WSport.png',
  golfplus:   '/images/sports/Golfplus.png',
};

export const SPORTS_PLANS: Plan[] = [
  {
    id: 'sports-promo',
    name: 'PLAY ULTIMATE + SPORTS',
    price: '1,499',
    tag: 'PROMO 12 MONTHS',
    highlight: true,
    description: 'Every sport, every streaming service. 1,499 THB/month for the first 12 months, then 1,799 THB/month. Excl. VAT.',
    apps: [
      { name: 'Netflix',      tier: 'PREMIUM',  logo: PROVIDER_LOGOS.netflix },
      { name: 'HBO Max',      tier: 'PREMIUM',  logo: PROVIDER_LOGOS.hbo },
      { name: 'Disney+',      tier: 'PREMIUM',  logo: PROVIDER_LOGOS.disney },
      { name: 'Prime Video',  tier: '4K/UHD',   logo: PROVIDER_LOGOS.prime },
      { name: 'MUTV',         tier: 'LIVE',      logo: SPORTS_CHANNEL_LOGOS.mutv },
      { name: 'Real Madrid TV', tier: 'LIVE',   logo: SPORTS_CHANNEL_LOGOS.realmadrid },
      { name: 'Eurosport',    tier: 'LIVE',      logo: SPORTS_CHANNEL_LOGOS.eurosport },
      { name: 'W Sport',      tier: 'LIVE',      logo: SPORTS_CHANNEL_LOGOS.wsport },
      { name: 'Golf+',        tier: 'LIVE',      logo: SPORTS_CHANNEL_LOGOS.golfplus },
    ],
    features: [
      'All 380 Premier League matches',
      '63 Emirates FA Cup matches',
      'NBA, NFL, ATP Tour & PGA Tour',
      'LPGA Tour & DP World Tour',
      'MONOMAX, oneD & AIS Karaoke Platinum',
      'Up to 4 screens simultaneously',
    ]
  },
  {
    id: 'sports-regular',
    name: 'PLAY ULTIMATE + SPORTS',
    price: '1,799',
    tag: 'REGULAR RATE',
    description: 'Standard ongoing rate after the 12-month promo period. Same full content bundle, no lock-in.',
    apps: [
      { name: 'Netflix',      tier: 'PREMIUM',  logo: PROVIDER_LOGOS.netflix },
      { name: 'HBO Max',      tier: 'PREMIUM',  logo: PROVIDER_LOGOS.hbo },
      { name: 'Disney+',      tier: 'PREMIUM',  logo: PROVIDER_LOGOS.disney },
      { name: 'Prime Video',  tier: '4K/UHD',   logo: PROVIDER_LOGOS.prime },
      { name: 'MUTV',         tier: 'LIVE',      logo: SPORTS_CHANNEL_LOGOS.mutv },
      { name: 'Real Madrid TV', tier: 'LIVE',   logo: SPORTS_CHANNEL_LOGOS.realmadrid },
      { name: 'Eurosport',    tier: 'LIVE',      logo: SPORTS_CHANNEL_LOGOS.eurosport },
      { name: 'W Sport',      tier: 'LIVE',      logo: SPORTS_CHANNEL_LOGOS.wsport },
      { name: 'Golf+',        tier: 'LIVE',      logo: SPORTS_CHANNEL_LOGOS.golfplus },
    ],
    features: [
      'Full sports bundle — all leagues included',
      'All streaming apps at premium tiers',
      'Up to 4 screens simultaneously',
      'AIS Postpaid & AIS Fibre customers only',
    ]
  }
];

export const OTHER_PLANS: Plan[] = [
  {
    id: 'asian-weekly',
    name: 'PLAY ASIAN',
    price: '49',
    period: '7 Days',
    tag: 'PREPAID',
    description: 'AIS Prepaid only. 7-day access to VIU, WeTV and iQIYI. Non-auto-renewing. VAT inclusive.',
    apps: [
      { name: 'Viu', tier: 'PREMIUM', logo: PROVIDER_LOGOS.viu },
      { name: 'WeTV', tier: 'VIP', logo: PROVIDER_LOGOS.wetv },
      { name: 'iQIYI', tier: 'VIP', logo: PROVIDER_LOGOS.iqiyi },
    ],
    features: [
      'VIU, WeTV & iQIYI at no extra charge',
      'Up to 2 screens simultaneously',
      'Non-auto-renewing — pay only when you need it',
      'AIS Prepaid customers only',
    ]
  },
  {
    id: 'asian-yearly',
    name: 'PLAY ASIAN',
    price: '999',
    period: 'Year',
    tag: 'BEST VALUE',
    highlight: true,
    description: 'Annual PLAY ASIAN bundle for Prepaid, Postpaid and AIS Fibre3 customers. VAT inclusive.',
    apps: [
      { name: 'Viu', tier: 'PREMIUM', logo: PROVIDER_LOGOS.viu },
      { name: 'WeTV', tier: 'VIP', logo: PROVIDER_LOGOS.wetv },
      { name: 'iQIYI', tier: 'VIP', logo: PROVIDER_LOGOS.iqiyi },
    ],
    features: [
      'VIU Premium, WeTV VIP & iQIYI VIP included',
      'Up to 2 screens simultaneously',
      'Available on AIS PLAYBOX, Apple TV, Samsung Smart TV',
      'AIS Prepaid, Postpaid & Fibre3 customers',
    ]
  },
  {
    id: 'family',
    name: 'PLAY FAMILY',
    price: '119',
    tag: 'FAMILY',
    description: 'Family-oriented AIS PLAY bundle. Movies, series, concerts, variety channels and 10 world-class channels.',
    apps: [
      { name: 'AIS Play', tier: 'FAMILY', logo: PROVIDER_LOGOS.ais || AIS_LOGO_URL },
    ],
    features: [
      'Movies, series, concerts & variety TV',
      '10 world-class premium channels',
      'Up to 2 screens simultaneously',
      'AIS Postpaid & Prepaid customers only',
    ]
  },
  {
    id: 'shortmax',
    name: 'PLAY ShortMax',
    price: '99',
    tag: 'SHORT-FORM',
    description: 'Vertical short-form content via the ShortMax app, integrated with AIS PLAY.',
    apps: [
      { name: 'AIS Play', tier: 'SHORTMAX', logo: PROVIDER_LOGOS.ais || AIS_LOGO_URL },
    ],
    features: [
      'Full ShortMax vertical series library',
      'Streamed via AIS PLAY app & website',
      '1 screen at a time per account',
      'AIS Postpaid & Prepaid customers',
    ]
  },
  {
    id: 'goodtv',
    name: 'GOOD TV',
    price: '49',
    tag: 'LIFESTYLE',
    description: 'Good TV channel add-on via AIS PLAY. Available on mobile, AIS PLAYBOX, Smart TV and more.',
    apps: [
      { name: 'AIS Play', tier: 'GOOD TV', logo: PROVIDER_LOGOS.ais || AIS_LOGO_URL },
    ],
    features: [
      'Good TV channel included',
      'AIS PLAYBOX, Apple TV, Samsung Smart TV & Chromecast',
      '1 screen at a time per account',
      'AIS Postpaid, Prepaid & Fibre customers',
    ]
  },
];

export default function Subscription({ onClose, focus, onSubscribe }: SubscriptionProps) {
  const [activeTab, setActiveTab] = useState<'ais' | 'disney' | 'sports' | 'other'>(focus === 'disney' ? 'disney' : 'ais');
  const isDisney = activeTab === 'disney';
  const isSports = activeTab === 'sports';
  const isOther = activeTab === 'other';
  const plans = isDisney ? DISNEY_PLANS : isSports ? SPORTS_PLANS : isOther ? OTHER_PLANS : PLANS;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl overflow-y-auto">
      <CinematicBackground />

      <div className="absolute inset-0 z-0 opacity-10 transition-all duration-700">
        {isDisney ? (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[200px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900 rounded-full blur-[200px]" />
          </>
        ) : isSports ? (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-500 rounded-full blur-[200px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-green-700 rounded-full blur-[200px]" />
          </>
        ) : isOther ? (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-600 rounded-full blur-[200px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900 rounded-full blur-[200px]" />
          </>
        ) : (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-ais-lime rounded-full blur-[200px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-ais-pink rounded-full blur-[200px]" />
          </>
        )}
      </div>

      <Button
        variant="ghost"
        onClick={onClose}
        className="fixed top-8 right-8 p-3 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all z-[110]"
      >
        <X size={24} />
      </Button>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center pt-16 pb-16 px-6 md:px-12">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          src={AIS_LOGO_URL}
          className="h-12 mb-8"
          alt="AIS"
          referrerPolicy="no-referrer"
        />

        {/* Tab switcher */}
        <div className="flex gap-2 mb-10 p-1.5 bg-white/5 rounded-full border border-white/10">
          <button
            onClick={() => setActiveTab('ais')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === 'ais' ? 'bg-ais-lime text-black' : 'text-white/40 hover:text-white'
            }`}
          >
            AIS Play Plans
          </button>
          <button
            onClick={() => setActiveTab('disney')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              isDisney ? 'bg-[#113ccf] text-white' : 'text-white/40 hover:text-white'
            }`}
          >
            Disney+
          </button>
          <button
            onClick={() => setActiveTab('sports')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              isSports ? 'bg-orange-500 text-white' : 'text-white/40 hover:text-white'
            }`}
          >
            Sports
          </button>
          <button
            onClick={() => setActiveTab('other')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              isOther ? 'bg-violet-600 text-white' : 'text-white/40 hover:text-white'
            }`}
          >
            Other
          </button>
        </div>

        <div className="text-center mb-6 max-w-3xl px-4">
          <motion.h2
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[72px] font-display font-black mb-2 uppercase tracking-tight leading-[0.9] text-white"
          >
            {isDisney ? (
              <>Stream <span className="text-[#113ccf]">Disney+</span> with AIS.</>
            ) : isSports ? (
              <>Every <span className="text-orange-500">Sport.</span> Every Match.</>
            ) : isOther ? (
              <>More Ways to <span className="text-violet-400">Watch.</span></>
            ) : (
              <>Unlimited <span className="text-ais-lime">Entertainment.</span></>
            )}
          </motion.h2>
          <motion.p
            key={`${activeTab}-sub`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-[28px] font-light leading-relaxed max-w-2xl mx-auto"
          >
            {isDisney
              ? 'Get Disney+, Pixar, Marvel, Star Wars and National Geographic all via AIS PLAY.'
              : isSports
              ? 'All 380 Premier League matches, FA Cup, NBA, NFL, ATP Tour and more — bundled with every top streaming service.'
              : isOther
              ? 'Asian drama, family entertainment, short-form content and lifestyle channels — affordable add-ons for every taste.'
              : 'Choose the plan that\'s right for you. Stream Netflix, HBO Max, Disney+ and live sports all in one place.'}
          </motion.p>
        </div>

        {isOther ? (
          <div className="relative left-1/2 -translate-x-1/2 w-screen pt-10 pb-4 overflow-x-auto no-scrollbar">
            <div className="flex flex-row gap-6 pl-[40vw] pr-16">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex-shrink-0"
                >
                  <PricingCard plan={plan} onSubscribe={onSubscribe} />
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 w-full pt-10 pb-4">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="flex w-full justify-center"
              >
                <PricingCard plan={plan} onSubscribe={onSubscribe} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
