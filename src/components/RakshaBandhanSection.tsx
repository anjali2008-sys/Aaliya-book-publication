import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  Send, 
  Gift, 
  CheckCircle2, 
  ArrowRight, 
  Percent, 
  ExternalLink,
  ShieldCheck,
  Zap,
  Tag
} from 'lucide-react';
import { useFestivalOffer } from '../hooks/useFestivalOffer';
import { TELEGRAM_CHANNEL_URL, RAKSHA_BANDHAN_CONFIG } from '../data/publicationData';
import rakhiPosterImg from '../assets/raksha_bandhan_special.jpg';

interface RakshaBandhanSectionProps {
  onOpenRegister: (planId?: string) => void;
  onOpenOfferModal: () => void;
}

export const RakshaBandhanSection: React.FC<RakshaBandhanSectionProps> = ({
  onOpenRegister,
  onOpenOfferModal
}) => {
  const { isExpired, hours, minutes, seconds } = useFestivalOffer();

  // Automatic self-deletion after 48 hours
  if (isExpired) {
    return null;
  }

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <section id="raksha-bandhan-special" className="relative py-12 sm:py-16 bg-gradient-to-b from-slate-900 via-rose-950/20 to-slate-900 overflow-hidden border-y border-amber-500/30 select-none">
      {/* Festive Background Lighting */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-500/20 via-amber-500/20 to-rose-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-extrabold shadow-sm">
            <Gift className="w-4 h-4 text-rose-400 animate-bounce" />
            <span>48-HOUR LIMITED FESTIVE WINDOW</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif-title text-white tracking-tight">
            💙✨ Raksha Bandhan Special ✨💙
          </h2>

          <p className="text-amber-200/90 text-sm sm:text-base font-medium">
            📚 Aaliya Book Publication • 🆕 Registration Started • Flat 20% OFF on Registration Fees
          </p>

          {/* 48-Hour Live Countdown Clock Bar */}
          <div className="inline-flex items-center gap-2.5 bg-slate-950/90 border border-amber-400/50 px-4 py-2 rounded-2xl shadow-xl mt-2">
            <Clock className="w-4 h-4 text-rose-400 animate-spin-slow" />
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Offer Auto-Expires In:</span>
            <span className="text-base sm:text-lg font-mono font-extrabold text-amber-300 tracking-wider">
              {pad(hours)}h : {pad(minutes)}m : {pad(seconds)}s
            </span>
          </div>
        </div>

        {/* Featured Showcase Card */}
        <div className="bg-gradient-to-br from-slate-900/90 via-slate-900/95 to-slate-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Authentic Promotional Poster */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div 
              onClick={onOpenOfferModal}
              className="relative group rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-2xl cursor-pointer bg-slate-950 transform transition-all duration-300 hover:scale-[1.02] hover:border-amber-300"
            >
              <img
                src={rakhiPosterImg}
                alt="AAliya Book Publication Raksha Bandhan Special"
                className="w-full h-auto object-cover max-h-[420px] rounded-2xl"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/raksha_bandhan_special.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end justify-center p-4 opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Tap to Open Full Offer Details
                </span>
              </div>
            </div>
            <span className="text-xs text-slate-400 mt-2 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified Raksha Bandhan 20% Discount Campaign
            </span>
          </div>

          {/* Right Column: Detailed Breakdown & Instant Action */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold">
                <Tag className="w-3.5 h-3.5" />
                <span>FLAT 20% OFF REGISTRATION FEE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-white">
                Is Raksha Bandhan, apne talent ko book mein publish karne ka mauka paayein!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Handwriting manuscript scribing project me participate karke ghar baithe salary aur 70% advance payment paayein.
              </p>
            </div>

            {/* Benefit Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">70% Salary Advance</span>
                  <span className="text-slate-400 text-xs">Slot book hote hi bank/UPI me transfer</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">20% Fee Discount</span>
                  <span className="text-slate-400 text-xs">Plan 1: ₹400 | Plan 2: ₹559 | Plan 3: ₹799</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Writers & Students</span>
                  <span className="text-slate-400 text-xs">Koi bhi part-time/full-time likh sakta hai</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Mandatory Registration</span>
                  <span className="text-slate-400 text-xs">Limited festive slots per region</span>
                </div>
              </div>
            </div>

            {/* Discounted Pricing Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="bg-slate-950 border border-slate-800 hover:border-amber-400/50 p-3 rounded-xl transition-all">
                <span className="text-[11px] font-bold text-slate-300 block">Plan 1 (50 pgs)</span>
                <span className="text-[10px] text-slate-500 line-through">₹500 Fee</span>
                <span className="text-sm sm:text-base font-extrabold text-emerald-400 block">₹400</span>
                <span className="text-[10px] text-amber-300 font-semibold">₹17,500 Advance</span>
              </div>

              <div className="bg-slate-950 border border-amber-400/60 p-3 rounded-xl ring-1 ring-amber-400/30 relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full">
                  MOST POPULAR
                </div>
                <span className="text-[11px] font-bold text-slate-300 block mt-0.5">Plan 2 (80 pgs)</span>
                <span className="text-[10px] text-slate-500 line-through">₹699 Fee</span>
                <span className="text-sm sm:text-base font-extrabold text-emerald-400 block">₹559</span>
                <span className="text-[10px] text-amber-300 font-semibold">₹21,000 Advance</span>
              </div>

              <div className="bg-slate-950 border border-slate-800 hover:border-amber-400/50 p-3 rounded-xl transition-all">
                <span className="text-[11px] font-bold text-slate-300 block">Plan 3 (100 pgs)</span>
                <span className="text-[10px] text-slate-500 line-through">₹999 Fee</span>
                <span className="text-sm sm:text-base font-extrabold text-emerald-400 block">₹799</span>
                <span className="text-[10px] text-amber-300 font-semibold">₹24,500 Advance</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={TELEGRAM_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-sky-500/30 transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                <Send className="w-5 h-5 animate-pulse" />
                <span>Join Official Telegram (@aaliya_book_publication_official)</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>

              <button
                onClick={onOpenOfferModal}
                className="py-3.5 px-5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/40 text-amber-300 font-bold text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Full Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
