import React from 'react';
import { LIVE_ACTIVITY } from '../data/publicationData';
import { CheckCircle2, TrendingUp } from 'lucide-react';

export const LiveTicker: React.FC = () => {
  return (
    <div className="bg-slate-900 border-b border-slate-800/80 text-xs py-2 px-4 overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-amber-400 font-semibold shrink-0">
          <TrendingUp className="w-3.5 h-3.5 animate-bounce" />
          <span className="uppercase tracking-wider text-[11px]">Live Scribe Activity:</span>
        </div>

        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar whitespace-nowrap text-slate-300 py-0.5">
          {LIVE_ACTIVITY.map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="font-medium text-slate-100">{item.name}</span>
              <span className="text-slate-400">({item.city})</span>
              <span className="text-emerald-400 font-medium">{item.action}</span>
              <span className="text-slate-500 text-[10px]">[{item.time}]</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
