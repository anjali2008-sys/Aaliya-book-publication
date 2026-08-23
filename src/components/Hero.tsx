import React from 'react';
import { 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  FileText, 
  Wallet, 
  IndianRupee,
  Feather,
  Zap
} from 'lucide-react';
import { TELEGRAM_CHANNEL_URL, TELEGRAM_USERNAME } from '../data/publicationData';
import { Logo } from './Logo';

interface HeroProps {
  onOpenAI: () => void;
  onOpenRegister: (planId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAI, onOpenRegister }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100 pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Decorative Grid & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-10 right-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Authentic Badge with Logo */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold shadow-sm">
                <Logo size="xs" showRing={false} className="w-5 h-5" />
                <span>Authentic Handwriting Services • Est. 2018</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-title font-extrabold tracking-tight text-white leading-tight">
              Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">₹25,000 to ₹35,000</span> From Home Writing Books
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              <strong>AAliya Book Publication</strong> is a certified publication house bridging traditional writing artistry with modern literature requirements. Transcribe book manuscripts on standard ruled sheets and receive a guaranteed <strong>70% advance payment</strong> upon slot confirmation.
            </p>

            {/* 4 Quick Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-left">
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold text-lg sm:text-xl">
                  <span>70%</span>
                  <Zap className="w-4 h-4 text-amber-400" />
                </div>
                <p className="text-xs text-slate-300 font-medium">Instant Advance Payout</p>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 backdrop-blur-sm">
                <div className="flex items-center gap-1 text-emerald-400 font-bold text-lg sm:text-xl">
                  <span>50-100</span>
                  <FileText className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-xs text-slate-300 font-medium">Pages Per Project</p>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 backdrop-blur-sm">
                <div className="flex items-center gap-1 text-sky-400 font-bold text-lg sm:text-xl">
                  <span>7 - 15</span>
                  <Clock className="w-4 h-4 text-sky-400" />
                </div>
                <p className="text-xs text-slate-300 font-medium">Flexible Days</p>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 backdrop-blur-sm">
                <div className="flex items-center gap-1 text-purple-400 font-bold text-lg sm:text-xl">
                  <span>UPI/Bank</span>
                  <Wallet className="w-4 h-4 text-purple-400" />
                </div>
                <p className="text-xs text-slate-300 font-medium">Direct Transfer</p>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              {/* Primary Telegram CTA */}
              <a
                id="hero-telegram-cta"
                href={TELEGRAM_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-base shadow-lg shadow-sky-600/30 hover:shadow-sky-600/50 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span>Join Official Telegram Channel</span>
              </a>

              {/* Secondary Plan Booking */}
              <button
                id="hero-book-slot-cta"
                onClick={() => onOpenRegister()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Select Project Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* AI Assistant CTA */}
              <button
                id="hero-ai-assistant-cta"
                onClick={onOpenAI}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-400/30 text-sm font-semibold transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Ask AI Advisor</span>
              </button>
            </div>

            {/* Telegram Channel Info Strip */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Official Channel:</span>
              <a 
                href={TELEGRAM_CHANNEL_URL}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-400 hover:underline font-mono font-semibold"
              >
                {TELEGRAM_USERNAME}
              </a>
              <span className="text-slate-600">•</span>
              <span>18,400+ Verified Subscribers</span>
            </div>

          </div>

          {/* Right Column: Interactive Real-Time Summary Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md">
              
              {/* Top Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <Logo size="sm" className="w-10 h-10" />
                  <div>
                    <h3 className="font-bold text-white text-base">Verified Project Breakdown</h3>
                    <p className="text-xs text-slate-400">Authentic Manuscript Scribing</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                  Guaranteed Advance
                </span>
              </div>

              {/* Realistic Overview Metrics */}
              <div className="py-4 space-y-3.5">
                
                {/* Plan 1 Snippet */}
                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-700/60 flex items-center justify-between">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-red-500/20 text-red-400 border border-red-500/30 mb-1">
                      PROJECT PLAN 1
                    </span>
                    <p className="text-xs text-slate-300">50 Pages (100 sides) • 7 Days</p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-extrabold text-amber-400">₹25,000/-</span>
                    <p className="text-[11px] text-emerald-400">₹17,500 70% Advance</p>
                  </div>
                </div>

                {/* Plan 2 Snippet */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-amber-500/40 relative shadow-inner">
                  <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider">
                    Most Popular
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-red-500/20 text-red-400 border border-red-500/30 mb-1">
                      PROJECT PLAN 2
                    </span>
                    <p className="text-xs text-slate-300">80 Pages (160 sides) • 10 Days</p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-extrabold text-amber-400">₹30,000/-</span>
                    <p className="text-[11px] text-emerald-400">₹21,000 70% Advance</p>
                  </div>
                </div>

                {/* Plan 3 Snippet */}
                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-700/60 flex items-center justify-between">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-red-500/20 text-red-400 border border-red-500/30 mb-1">
                      PROJECT PLAN 3
                    </span>
                    <p className="text-xs text-slate-300">100 Pages (200 sides) • 15 Days</p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-extrabold text-amber-400">₹35,000/-</span>
                    <p className="text-[11px] text-emerald-400">₹24,500 70% Advance</p>
                  </div>
                </div>
              </div>

              {/* Security & Verification Guarantee Box */}
              <div className="pt-2 border-t border-slate-700 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct Bank Transfer or UPI once verified on Telegram</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Transparent 4-Step Process with Full Coordinator Guidance</span>
                </div>
              </div>

              {/* Quick Card Action */}
              <button
                id="hero-quick-action-telegram"
                onClick={() => onOpenRegister('plan-2')}
                className="mt-4 w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Plan 2 (₹30,000) with 70% Advance</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
