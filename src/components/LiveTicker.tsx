import React, { useState } from 'react';
import { LIVE_ACTIVITY } from '../data/publicationData';
import { TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';

export const LiveTicker: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items to ensure a seamless infinite scrolling loop
  const tickerItems = [...LIVE_ACTIVITY, ...LIVE_ACTIVITY];

  return (
    <div 
      className="bg-slate-950/95 border-b border-slate-800/80 text-xs py-2 px-3 sm:px-4 overflow-hidden shadow-inner select-none relative z-30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto flex items-center gap-3 sm:gap-4 relative">
        {/* Pinned Left Badge */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-500/20 to-amber-500/10 border border-amber-500/30 text-amber-300 font-bold px-2.5 py-1 rounded-full shrink-0 shadow-sm z-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="uppercase tracking-wider text-[10px] sm:text-[11px] font-extrabold flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-amber-400 hidden xs:inline" />
            Live Scribe Activity:
          </span>
        </div>

        {/* Subtle Fade Masks on Left & Right */}
        <div className="pointer-events-none absolute left-36 sm:left-48 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-950 to-transparent z-10 hidden sm:block"></div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

        {/* Continuous Automatic Sliding Container */}
        <div className="flex-1 overflow-hidden relative">
          <div 
            className="animate-marquee flex items-center gap-6 sm:gap-8 py-0.5 whitespace-nowrap"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {tickerItems.map((item, idx) => (
              <div 
                key={idx} 
                className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800/90 hover:border-slate-700 px-3 py-1 rounded-lg text-slate-300 transition-colors shadow-sm shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-semibold text-slate-100 text-xs">{item.name}</span>
                <span className="text-slate-400 text-[11px]">({item.city})</span>
                <span className="text-emerald-400 font-medium text-xs">• {item.action}</span>
                <span className="text-slate-500 text-[10px] bg-slate-950/60 px-1.5 py-0.5 rounded border border-slate-800">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
