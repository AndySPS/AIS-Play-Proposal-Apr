import { motion } from 'motion/react';
import { Settings, CreditCard, HelpCircle, LogOut, X, User, ChevronRight, Bell, Download } from 'lucide-react';
import { Button } from './ui/Button';

interface ProfileOverlayProps {
  onClose: () => void;
  onLogout: () => void;
}

const MENU_ITEMS = [
  { id: 'settings',  label: 'Account Settings',  icon: <Settings size={26} />,    description: 'Security, privacy, and preferences' },
  { id: 'billing',   label: 'Billing & Plans',    icon: <CreditCard size={26} />,  description: 'Manage your subscription and payments' },
  { id: 'downloads', label: 'Downloads',          icon: <Download size={26} />,    description: 'Manage your offline content' },
  { id: 'notifications', label: 'Notifications', icon: <Bell size={26} />,        description: 'Alerts, reminders and new releases' },
  { id: 'help',      label: 'Help & Support',     icon: <HelpCircle size={26} />,  description: 'FAQs, tutorials, and contact us' },
  { id: 'logout',    label: 'Log Out',             icon: <LogOut size={26} />,      description: 'Sign out from your AIS account', danger: true },
];

export default function ProfileOverlay({ onClose, onLogout }: ProfileOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-xl flex items-center justify-center p-8"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 24 }}
        className="w-full max-w-2xl bg-[#151516] rounded-[40px] border border-white/10 overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
      >
        {/* Header */}
        <div className="relative px-12 pt-12 pb-10 bg-gradient-to-b from-white/[0.05] to-transparent border-b border-white/5">
          <Button
            variant="ghost"
            onClick={onClose}
            className="absolute top-8 right-8 p-3 rounded-full hover:bg-white/10 transition-colors text-white/40 hover:text-white h-auto"
          >
            <X size={24} />
          </Button>

          <div className="flex items-center gap-8">
            <div className="relative group">
              <div className="w-28 h-28 rounded-[28px] bg-ais-lime flex items-center justify-center shadow-[0_0_60px_rgba(188,208,67,0.35)]">
                <User size={56} className="text-black" />
              </div>
              <Button
                variant="ghost"
                className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-white text-black shadow-xl hover:scale-110 transition-transform h-auto hover:bg-white"
              >
                <Settings size={18} />
              </Button>
            </div>

            <div>
              <h2 className="text-4xl font-display font-black mb-2">Somchai AIS</h2>
              <p className="text-white/40 font-bold uppercase tracking-widest text-xs mb-4">Play Ultimate Plus Sports Member</p>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-ais-lime/10 border border-ais-lime/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-ais-lime animate-pulse" />
                <span className="text-ais-lime text-xs font-black uppercase tracking-widest">Active Subscription</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="px-8 py-8 space-y-2">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => { if (item.id === 'logout') onLogout(); }}
              className={`w-full flex items-center justify-between px-6 py-5 rounded-2xl transition-all group ${
                item.danger
                  ? 'hover:bg-red-500/10 border border-transparent hover:border-red-500/20'
                  : 'hover:bg-white/5 border border-transparent hover:border-white/10'
              }`}
            >
              <div className="flex items-center gap-5">
                <div className={`p-4 rounded-2xl ${
                  item.danger ? 'bg-red-500/10 text-red-500' : 'bg-white/5 text-white/50 group-hover:text-ais-lime'
                } transition-colors`}>
                  {item.icon}
                </div>
                <div className="text-left">
                  <p className={`font-bold text-lg transition-colors ${item.danger ? 'text-red-500' : 'text-white'}`}>
                    {item.label}
                  </p>
                  <p className="text-sm text-white/40 mt-0.5">{item.description}</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-white/10 group-hover:text-white/40 transition-colors" />
            </button>
          ))}
        </div>

        <div className="px-12 py-6 bg-black/40 text-center border-t border-white/5">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
            AIS Play Version 4.8.2 • Build 2301
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
