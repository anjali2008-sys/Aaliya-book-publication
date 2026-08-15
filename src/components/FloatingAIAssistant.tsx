import React from 'react';
import { Sparkles, MessageSquare, Send } from 'lucide-react';
import { TELEGRAM_CHANNEL_URL } from '../data/publicationData';

interface FloatingAIAssistantProps {
  onOpenAI: () => void;
}

export const FloatingAIAssistant: React.FC<FloatingAIAssistantProps> = ({ onOpenAI }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Floating Telegram Quick Icon */}
      <a
        id="floating-telegram-btn"
        href={TELEGRAM_CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="Official Telegram Channel"
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-xl shadow-sky-600/30 flex items-center justify-center transition-all hover:scale-110"
      >
        <Send className="w-5 h-5 -rotate-12" />
      </a>

      {/* Floating AI Button with Tooltip */}
      <button
        id="floating-ai-advisor-btn"
        onClick={onOpenAI}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-2xl shadow-amber-500/30 transition-all hover:scale-105 cursor-pointer border-2 border-amber-300"
      >
        <Sparkles className="w-5 h-5 text-slate-950 animate-spin-slow" />
        <span className="tracking-wide">AI Scribe Advisor</span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 animate-ping"></span>
      </button>
    </div>
  );
};
