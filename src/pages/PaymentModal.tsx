import { useState } from 'react';
import { ArrowLeft, Smartphone, CreditCard, QrCode, Wallet, Lock, Shield, Info, ChevronRight } from 'lucide-react';
import { Plan } from './Subscription';
import CinematicBackground from '../components/CinematicBackground';

interface PaymentModalProps {
  plan: Plan;
  onBack: () => void;
  onConfirm: () => void;
}

type PaymentMethodId = 'ais-bill' | 'credit-card' | 'mobile-banking' | 'digital-wallet';

const PAYMENT_METHODS: { id: PaymentMethodId; name: string; description: string; Icon: React.FC<{ size?: number }> }[] = [
  { id: 'ais-bill',        name: 'AIS Bill / Prepaid Balance', description: 'Pay via AIS Mobile Number (08X-XXX-XXXX)', Icon: Smartphone  },
  { id: 'credit-card',     name: 'Credit / Debit Card',        description: 'Visa, Mastercard, JCB',                   Icon: CreditCard  },
  { id: 'mobile-banking',  name: 'Mobile Banking / PromptPay', description: 'Generate QR Code for any bank app',       Icon: QrCode      },
  { id: 'digital-wallet',  name: 'Digital Wallets',            description: 'Rabbit LINE Pay, TrueMoney',              Icon: Wallet      },
];

const PROVIDER_COLORS: Record<string, string> = {
  'Netflix':        'bg-[#e50914]',
  'Disney+':        'bg-[#113ccf]',
  'HBO Max':        'bg-[#5b21b6]',
  'Prime Video':    'bg-[#1a3a5c]',
  'AIS Play':       'bg-[#8bb31d]',
  'iQIYI':          'bg-[#00be6e] text-black',
  'Viu':            'bg-[#ea580c]',
  'WeTV':           'bg-[#0d9488]',
  'MUTV':           'bg-[#dc2626]',
  'Real Madrid TV': 'bg-[#1d4ed8]',
  'Eurosport':      'bg-[#ea580c]',
  'W Sport':        'bg-[#7c3aed]',
  'Golf+':          'bg-[#15803d]',
};

function deriveQualityBadge(plan: Plan) {
  const text = plan.features.join(' ');
  if (/4K/i.test(text)) return '4K / UHD';
  if (/Full HD/i.test(text)) return 'Full HD';
  return null;
}

function deriveDevicesBadge(plan: Plan) {
  const text = plan.features.join(' ');
  const match = text.match(/(\d+) (?:devices|screens)/i);
  return match ? `${match[1]} Devices` : null;
}

export default function PaymentModal({ plan, onBack, onConfirm }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodId>('ais-bill');
  const [autoRenewal, setAutoRenewal] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const qualityBadge = deriveQualityBadge(plan);
  const devicesBadge = deriveDevicesBadge(plan);

  const handleConfirm = () => {
    setIsProcessing(true);
    setTimeout(() => onConfirm(), 1500);
  };

  return (
    <div className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-3xl overflow-y-auto">
      <CinematicBackground />
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-ais-lime rounded-full blur-[200px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-ais-pink rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-14 min-h-screen">
        {/* Header */}
        <div className="flex items-start gap-5 mb-10">
          <button
            onClick={onBack}
            className="mt-2 p-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all shrink-0"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
              Complete Your Subscription
            </h1>
            <div className="flex items-center gap-2 mt-3">
              <span className="flex items-center gap-1.5 text-sm text-white/30">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[11px] font-bold">1</span>
                Select Plan
              </span>
              <ChevronRight size={14} className="text-white/20" />
              <span className="flex items-center gap-1.5 text-sm text-ais-lime font-semibold">
                <span className="w-5 h-5 rounded-full bg-ais-lime flex items-center justify-center text-[11px] font-black text-black">2</span>
                Payment
              </span>
              <ChevronRight size={14} className="text-white/20" />
              <span className="flex items-center gap-1.5 text-sm text-white/30">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[11px] font-bold">3</span>
                Start Watching
              </span>
            </div>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left: Payment Methods */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white mb-5">Select Payment Method</h2>
            <div className="space-y-3">
              {PAYMENT_METHODS.map(({ id, name, description, Icon }) => {
                const isSelected = selectedMethod === id;
                return (
                  <button
                    key={id}
                    onClick={() => setSelectedMethod(id)}
                    className={`w-full flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-200 ${
                      isSelected
                        ? 'border-ais-lime bg-ais-lime/5 shadow-[0_0_20px_rgba(188,208,67,0.08)]'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-ais-lime' : 'border-white/20'
                    }`}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-ais-lime" />}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-base">{name}</div>
                      <div className="text-white/40 text-sm mt-0.5">{description}</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 shrink-0">
                      <Icon size={18} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Purchase Summary */}
          <div className="lg:w-[380px] shrink-0 w-full">
            <div className="bg-[#151516] border border-white/10 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <h3 className="text-lg font-bold text-white mb-4">Purchase Summary</h3>

              {/* Plan info */}
              <div className="bg-black/40 rounded-xl p-4 mb-4 border border-white/5">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-white font-display font-black text-base tracking-tight">{plan.name}</span>
                  <div className="text-right shrink-0 ml-3">
                    <span className="text-ais-lime font-display font-black text-lg leading-none">{plan.price} THB</span>
                    <div className="text-white/30 text-xs mt-0.5">/ {plan.period ?? 'Month'}</div>
                  </div>
                </div>

                {/* Quality / device badges */}
                {(qualityBadge || devicesBadge) && (
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {qualityBadge && (
                      <span className="flex items-center gap-1 text-xs text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                        <span className="text-[10px]">📺</span> {qualityBadge}
                      </span>
                    )}
                    {devicesBadge && (
                      <span className="flex items-center gap-1 text-xs text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                        <span className="text-[10px]">📱</span> {devicesBadge}
                      </span>
                    )}
                  </div>
                )}

                {/* Provider badges */}
                {plan.apps && plan.apps.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {plan.apps.slice(0, 3).map(app => (
                      <span
                        key={app.name}
                        className={`text-[11px] font-black text-white px-2.5 py-1 rounded-sm tracking-wider uppercase ${PROVIDER_COLORS[app.name] ?? 'bg-white/10'}`}
                      >
                        {app.name}
                      </span>
                    ))}
                    {plan.apps.length > 3 && (
                      <span className="text-[11px] font-bold text-white/30 px-2 py-1">+{plan.apps.length - 3} more</span>
                    )}
                  </div>
                )}
              </div>

              {/* Auto-renewal toggle */}
              <div className="flex items-center justify-between py-3 border-t border-white/5 mb-4">
                <span className="text-white/70 text-sm font-medium">Auto-renewal</span>
                <button
                  onClick={() => setAutoRenewal(p => !p)}
                  className={`relative w-11 h-6 rounded-full transition-all duration-300 focus:outline-none ${autoRenewal ? 'bg-ais-lime' : 'bg-white/10'}`}
                >
                  <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 ${autoRenewal ? 'left-[22px]' : 'left-0.5'}`} />
                </button>
              </div>

              {/* Terms notice */}
              <div className="flex items-start gap-2.5 mb-5 p-3 bg-white/[0.03] rounded-xl border border-white/5">
                <Info size={14} className="text-white/30 mt-0.5 shrink-0" />
                <p className="text-white/40 text-xs leading-relaxed">
                  By clicking Confirm, you agree to the{' '}
                  <span className="text-ais-lime cursor-pointer hover:underline">User Agreements</span>
                  . Subscription automatically renews unless cancelled.
                </p>
              </div>

              {/* Confirm button */}
              <button
                onClick={handleConfirm}
                disabled={isProcessing}
                className="w-full h-14 bg-ais-lime text-black font-display font-black text-sm uppercase tracking-wider rounded-full flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(188,208,67,0.4)] hover:bg-ais-lime/90 hover:shadow-none transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock size={15} />
                    Confirm &amp; Pay {plan.price} THB
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 mt-3">
                <Shield size={12} className="text-white/25" />
                <span className="text-white/25 text-xs">Secure encrypted checkout</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
