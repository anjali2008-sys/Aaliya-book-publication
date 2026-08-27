import React from 'react';
import { Sparkles, Clock, Gift, ArrowRight, X } from 'lucide-react';
import { useFestivalOffer } from '../hooks/useFestivalOffer';
import { RAKSHA_BANDHAN_CONFIG } from '../data/publicationData';

interface RakshaBandhanBannerProps {
  onOpenOfferModal: () => void;
}

export const RakshaBandhanBanner: React.FC<RakshaBandhanBannerProps> = ({ onOpenOfferModal }) => {
  const { isExpired, hours, minutes, seconds } = useFestivalOffer();
  const [isDismissed, setIsDismissed] = React.useState(false);

  // Automatic deletion / disappearance after 48 hours
  if (isExpired || isDismissed) {
    return null;
  }

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <aside 
      aria-label="Festive Announcement"
      className="relative bg-gradient-to-r from-rose-950 via-amber-950 to-indigo-950 text-white border-b border-amber-500/40 text-xs py-2 sm:py-2.5 px-3 sm:px-4 z-40 shadow-lg select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Left Side: Festive Highlight & Message */}
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start text-center sm:text-left">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 font-extrabold text-[11px] shadow-sm animate-pulse">
            <Gift className="w-3 h-3 text-slate-950" />
            <span>20% OFF</span>
          </span>

          <span className="font-bold text-amber-200 text-xs sm:text-sm flex items-center gap-1.5">
            <span>💙✨ Raksha Bandhan Special ✨💙</span>
          </span>

          <span className="hidden md:inline text-slate-300">
            • Is Raksha Bandhan, apne talent ko book mein publish karein!
          </span>
        </div>

        {/* Right Side: Live Countdown Timer & CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="inline-flex items-center gap-1.5 bg-slate-950/80 border border-amber-400/40 px-2.5 py-1 rounded-lg text-amber-300 font-mono text-[11px] sm:text-xs shadow-inner">
            <Clock className="w-3.5 h-3.5 text-rose-400 animate-spin-slow" />
            <span className="text-slate-400 text-[10px] uppercase font-sans tracking-wide">Ends In:</span>
            <span className="font-bold text-white tracking-wider">
              {pad(hours)}h : {pad(minutes)}m : {pad(seconds)}s
            </span>
          </div>

          <button
            onClick={onOpenOfferModal}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs transition-all transform hover:scale-105 shadow-md cursor-pointer"
          >
            <span>Offer Details</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            title="Dismiss Announcement"
            className="text-slate-400 hover:text-white p-1 rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
};
