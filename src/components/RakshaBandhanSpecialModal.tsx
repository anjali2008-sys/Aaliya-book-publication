import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Clock, 
  Send, 
  Gift, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  Percent, 
  BookOpen, 
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import { useFestivalOffer } from '../hooks/useFestivalOffer';
import { RAKSHA_BANDHAN_CONFIG, TELEGRAM_CHANNEL_URL, TELEGRAM_USERNAME } from '../data/publicationData';
import rakhiPosterImg from '../assets/raksha_bandhan_special.jpg';

interface RakshaBandhanSpecialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan?: (planId: string) => void;
}

export const RakshaBandhanSpecialModal: React.FC<RakshaBandhanSpecialModalProps> = ({
  isOpen,
  onClose,
  onSelectPlan
}) => {
  const { isExpired, hours, minutes, seconds } = useFestivalOffer();
  const [copied, setCopied] = useState(false);
  const [imgZoom, setImgZoom] = useState(false);

  if (!isOpen || isExpired) return null;

  const pad = (n: number) => n.toString().padStart(2, '0');

  const handleCopy = () => {
    navigator.clipboard.writeText(TELEGRAM_CHANNEL_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fade-in select-none">
      <div className="relative w-full max-w-4xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden text-slate-100 my-auto">
        
        {/* Festive Top Banner Bar */}
        <div className="bg-gradient-to-r from-rose-950 via-amber-900 to-indigo-950 p-4 sm:p-5 border-b border-amber-500/30 flex items-center justify-between relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-500 to-amber-600 p-0.5 shadow-lg shrink-0 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-amber-400">
                <Gift className="w-6 h-6 animate-bounce" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif-title font-extrabold text-lg sm:text-xl text-amber-200">
                  💙✨ Raksha Bandhan Special ✨💙
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500 text-white font-extrabold text-[11px] shadow">
                  <Percent className="w-3 h-3" />
                  20% OFF
                </span>
              </div>
              <p className="text-xs text-slate-300">
                📚 AAliya Book Publication • Registration Started
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 48-Hour Live Countdown Banner */}
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-amber-300 font-semibold">
            <Clock className="w-4 h-4 text-rose-400 animate-pulse" />
            <span>⏰ Limited 48-Hours Festive Offer Window</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-950 px-3 py-1 rounded-full border border-amber-400/40 text-amber-300 font-mono text-xs font-bold shadow-inner">
            <span className="text-slate-400 font-sans text-[10px]">TIME LEFT:</span>
            <span className="text-rose-400 font-extrabold tracking-widest">
              {pad(hours)}h : {pad(minutes)}m : {pad(seconds)}s
            </span>
          </div>
        </div>

        {/* Modal Main Body Grid */}
        <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Official Poster Image */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div 
              onClick={() => setImgZoom(!imgZoom)}
              className="relative group rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-2xl cursor-zoom-in bg-slate-950 transition-all duration-300 hover:border-amber-300"
            >
              <img
                src={rakhiPosterImg}
                alt="Raksha Bandhan Special - AAliya Books Publication"
                className="w-full h-auto object-cover max-h-[380px] rounded-2xl transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/raksha_bandhan_special.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
                <span className="text-xs font-bold text-amber-300 bg-slate-900/90 px-3 py-1 rounded-full border border-amber-400/40">
                  Click to Zoom Poster
                </span>
              </div>
            </div>

            <span className="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Official Verified Publication Offer Poster
            </span>
          </div>

          {/* Right Column: Key Details & User's Verbatim Information */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="space-y-1.5">
              <div className="inline-block px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold">
                🎀 Is Raksha Bandhan, Apne Talent Ko Publish Karein!
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif-title text-white">
                इस Raksha Bandhan अपने करियर को दें एक नई शुरुआत!
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Sabhi interested writers, students, housewives aur freelancers ke liye genuine handwriting work-from-home opportunity.
              </p>
            </div>

            {/* Bullet Points Highlights */}
            <div className="bg-slate-950/70 rounded-2xl p-3.5 border border-slate-800 space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>70% Salary Advance:</strong> Slot confirm hone par instant transfer aapke account me.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>20% OFF Registration Fee:</strong> Rakhi festive season ke liye fee me discount.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Earning & Profit Opportunity:</strong> ₹25,000 se ₹35,000 tak ki monthly earning.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span><strong>⏰ Registration Fee Mandatory:</strong> Limited slot allocations per state.</span>
              </div>
            </div>

            {/* Slashed Prices Table */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-slate-900 border border-amber-500/30 p-2.5 rounded-xl">
                <div className="text-[11px] font-bold text-amber-300">Plan 1 (50 pgs)</div>
                <div className="text-slate-400 line-through text-[10px]">₹500 Reg Fee</div>
                <div className="text-emerald-400 font-extrabold text-sm">₹400 (20% OFF)</div>
                <div className="text-[10px] text-slate-300 mt-0.5">₹17,500 Advance</div>
              </div>

              <div className="bg-slate-900 border border-amber-500/40 p-2.5 rounded-xl ring-1 ring-amber-400/30">
                <div className="text-[11px] font-bold text-amber-300">Plan 2 (80 pgs)</div>
                <div className="text-slate-400 line-through text-[10px]">₹699 Reg Fee</div>
                <div className="text-emerald-400 font-extrabold text-sm">₹559 (20% OFF)</div>
                <div className="text-[10px] text-slate-300 mt-0.5">₹21,000 Advance</div>
              </div>

              <div className="bg-slate-900 border border-amber-500/30 p-2.5 rounded-xl">
                <div className="text-[11px] font-bold text-amber-300">Plan 3 (100 pgs)</div>
                <div className="text-slate-400 line-through text-[10px]">₹999 Reg Fee</div>
                <div className="text-emerald-400 font-extrabold text-sm">₹799 (20% OFF)</div>
                <div className="text-[10px] text-slate-300 mt-0.5">₹24,500 Advance</div>
              </div>
            </div>

            {/* CTA & Telegram Joining Link */}
            <div className="pt-2 space-y-2.5">
              <a
                href={TELEGRAM_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-sky-500/30 transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                <Send className="w-5 h-5 animate-pulse" />
                <span>Join Telegram & Claim 20% Discount</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>

              <div className="flex items-center justify-between text-xs px-1 text-slate-400">
                <div className="flex items-center gap-1 font-mono text-slate-300">
                  <span>📩 Link:</span>
                  <span className="text-sky-300 underline font-semibold">t.me/aaliya_book_publication_official</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 cursor-pointer font-bold"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="bg-slate-950 p-3 sm:p-4 border-t border-slate-800 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>💙 Limited registrations — Join Now! Offer automatically expires in 48 hours. ✨</span>
        </div>

      </div>

      {/* Fullscreen Image Zoom Modal if user clicked image */}
      {imgZoom && (
        <div 
          onClick={() => setImgZoom(false)}
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
        >
          <div className="relative max-w-3xl max-h-[90vh]">
            <img 
              src={rakhiPosterImg} 
              alt="Raksha Bandhan Full Poster" 
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl border border-amber-400/50 shadow-2xl"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/raksha_bandhan_special.jpg';
              }}
            />
            <button
              onClick={() => setImgZoom(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
