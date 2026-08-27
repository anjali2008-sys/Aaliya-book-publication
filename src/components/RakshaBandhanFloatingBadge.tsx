import React from 'react';
import { Gift, Sparkles, Percent } from 'lucide-react';
import { useFestivalOffer } from '../hooks/useFestivalOffer';

interface RakshaBandhanFloatingBadgeProps {
  onOpenOfferModal: () => void;
}

export const RakshaBandhanFloatingBadge: React.FC<RakshaBandhanFloatingBadgeProps> = ({ onOpenOfferModal }) => {
  const { isExpired, hours, minutes, seconds } = useFestivalOffer();

  if (isExpired) return null;

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="fixed bottom-24 left-4 sm:bottom-6 sm:left-6 z-40 select-none">
      <button
        onClick={onOpenOfferModal}
        className="group relative flex items-center gap-2.5 bg-gradient-to-r from-rose-950 via-amber-950 to-indigo-950 hover:from-rose-900 hover:to-indigo-900 text-white border border-amber-400/50 rounded-2xl p-2.5 sm:px-4 sm:py-3 shadow-2xl shadow-rose-950/60 backdrop-blur-md cursor-pointer transition-all transform hover:scale-105 active:scale-95"
      >
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-rose-500 to-amber-600 p-0.5 shadow-md shrink-0 flex items-center justify-center">
          <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-amber-400">
            <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 animate-bounce" />
          </div>
          <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-emerald-500 border border-slate-950 flex items-center justify-center text-[9px] font-bold text-white">
            %
          </span>
        </div>

        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-xs sm:text-sm text-amber-300 font-serif-title tracking-tight">
              Raksha Bandhan Special
            </span>
            <span className="px-1.5 py-0.2 rounded bg-rose-500 text-white text-[10px] font-extrabold shadow-sm">
              20% OFF
            </span>
          </div>
          <span className="text-[10px] text-slate-300 font-mono">
            Ends: {pad(hours)}h {pad(minutes)}m {pad(seconds)}s
          </span>
        </div>
      </button>
    </div>
  );
};
