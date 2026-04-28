import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Phone, ShieldCheck, User, Check, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { AIS_LOGO_URL } from '../constants';
import { PricingCard, PLANS } from './Subscription';
import CinematicBackground from '../components/CinematicBackground';

interface LoginProps {
  onComplete: (isGuest: boolean) => void;
}

type LoginStep = 'splash' | 'phone' | 'otp' | 'profile' | 'onboarding';

const PROFILE_AVATARS = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
];

export default function Login({ onComplete }: LoginProps) {
  const [step, setStep] = useState<LoginStep>('splash');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [selectedAvatar, setSelectedAvatar] = useState(PROFILE_AVATARS[0]);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const variants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden font-sans text-white">
      {/* Cinematic Poster Background - Persistent across all steps */}
      <CinematicBackground />

      {/* Decorative glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-ais-lime/10 blur-[120px] rounded-full opacity-40" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-ais-lime/5 blur-[120px] rounded-full opacity-20" />
      </div>

      <div className="relative w-full max-w-6xl px-6 z-10">
        <AnimatePresence mode="wait">
          {step === 'splash' && (
            <motion.div
              key="splash"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col items-center text-center space-y-12"
            >
              <div className="space-y-6">
                <motion.img 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={AIS_LOGO_URL} 
                  className="h-16 w-auto mx-auto brightness-125" 
                  alt="AIS Play" 
                />
                <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                  ENTERTAINMENT <br />
                  <span className="text-ais-lime">UNLIMITED.</span>
                </h1>
                <p className="text-lg text-white/40 font-light max-w-md mx-auto leading-relaxed">
                  Experience the best movies, TV shows, and live sports on Thailand's #1 streaming platform.
                </p>
              </div>

              <div className="w-full max-w-xs space-y-4">
                <Button 
                  variant="pill"
                  size="xl"
                  onClick={() => setStep('onboarding')}
                  className="w-full h-14 text-base font-bold group"
                >
                  Get Started
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="pill"
                  size="xl"
                  onClick={() => setStep('phone')}
                  className="w-full h-14 text-base font-bold bg-white/5 border-white/10 hover:bg-white/10 text-white"
                >
                  Login
                </Button>
              </div>
            </motion.div>
          )}

          {step === 'phone' && (
            <motion.div
              key="phone"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-md mx-auto w-full space-y-8"
            >
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight">Your phone number?</h2>
                <p className="text-white/40 leading-relaxed">Enter your mobile number to receive a verification code.</p>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-ais-lime transition-colors">
                    <Phone size={20} />
                  </div>
                  <Input 
                    type="tel"
                    placeholder="081 234 5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-12 h-14 bg-white/5 border-white/10 rounded-2xl text-lg font-medium focus:border-ais-lime/50 transition-all"
                  />
                </div>
                <Button 
                  variant="pill"
                  size="xl"
                  onClick={() => setStep('otp')}
                  disabled={!phone}
                  className="w-full h-14 text-base font-bold"
                >
                  Send OTP
                </Button>
              </div>

              <div className="text-center">
                <Button 
                  variant="ghost"
                  onClick={() => setStep('splash')}
                  className="text-white/40 hover:text-white transition-colors text-sm"
                >
                  Go Back
                </Button>
              </div>
            </motion.div>
          )}

          {step === 'otp' && (
            <motion.div
              key="otp"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-md mx-auto w-full space-y-8 text-center"
            >
              <div className="space-y-3">
                <div className="w-16 h-16 bg-ais-lime/10 rounded-2xl flex items-center justify-center mx-auto text-ais-lime mb-6">
                  <ShieldCheck size={32} />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Verification Code</h2>
                <p className="text-white/40">We've sent a 6-digit code to <span className="text-white font-medium">{phone}</span></p>
              </div>

              <div className="flex gap-2 justify-center">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => (otpRefs.current[i] = el)}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    className="w-12 h-16 bg-white/5 border border-white/10 rounded-xl text-center text-2xl font-bold focus:border-ais-lime focus:ring-1 focus:ring-ais-lime/20 transition-all outline-none"
                  />
                ))}
              </div>

              <div className="space-y-6">
                <Button 
                  variant="pill"
                  size="xl"
                  onClick={() => setStep('profile')}
                  className="w-full h-14 text-base font-bold"
                >
                  Verify Now
                </Button>
                <div className="flex flex-col gap-4">
                  <Button variant="ghost" className="text-ais-lime text-sm font-semibold hover:underline bg-transparent hover:bg-transparent">Resend Code (45s)</Button>
                  <Button 
                    variant="ghost"
                    onClick={() => setStep('phone')}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    Change Number
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'profile' && (
            <motion.div
              key="profile"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-xl mx-auto w-full space-y-12 text-center"
            >
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight">Who's watching?</h2>
                <p className="text-white/40 text-sm">Choose an avatar to personalize your profile.</p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {PROFILE_AVATARS.map((avatar, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedAvatar(avatar)}
                    className={`relative rounded-3xl overflow-hidden aspect-square transition-all duration-300 ring-4 ${
                      selectedAvatar === avatar ? 'ring-ais-lime scale-110 z-10' : 'ring-transparent hover:scale-105'
                    }`}
                  >
                    <img src={avatar} className="w-full h-full object-cover" alt={`Avatar ${i}`} />
                    {selectedAvatar === avatar && (
                      <div className="absolute inset-0 bg-ais-lime/20 flex items-center justify-center">
                        <div className="w-8 h-8 bg-ais-lime text-black rounded-full flex items-center justify-center">
                          <Check size={20} className="stroke-[3]" />
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <div className="space-y-6 max-w-sm mx-auto">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                    <User size={18} />
                  </div>
                  <Input 
                    placeholder="Profile Name"
                    defaultValue="My Profile"
                    className="pl-12 h-14 bg-white/5 border-white/10 rounded-xl"
                  />
                </div>
                <Button 
                  variant="pill"
                  size="xl"
                  onClick={() => setStep('onboarding')}
                  className="w-full h-14 text-base font-bold"
                >
                  Create Profile
                </Button>
              </div>
            </motion.div>
          )}

          {step === 'onboarding' && (
            <motion.div
              key="onboarding"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full space-y-12"
            >
              <div className="text-center space-y-2">
                <h2 className="text-[84px] font-black tracking-tighter uppercase leading-[0.9]">Unlimited Entertainment.</h2>
                <p className="text-white/40 text-[36px] max-w-4xl mx-auto leading-relaxed">Choose a plan that fits your lifestyle. Cancel anytime.</p>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto overflow-x-auto pt-16 pb-16 scrollbar-hide">
                {PLANS.map((plan) => (
                  <div key={plan.id} className="flex-1 min-w-[300px]">
                    <PricingCard plan={plan} />
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-4 py-4">
                <Button 
                  variant="ghost"
                  onClick={() => onComplete(true)}
                  className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors"
                >
                  Continue as Guest
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
