import React, { useState } from 'react';
import { 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  MessageSquare, 
  Sparkles,
  Users,
  QrCode
} from 'lucide-react';
import { TELEGRAM_CHANNEL_URL, TELEGRAM_USERNAME } from '../data/publicationData';
import { Logo } from './Logo';

export const TelegramRedirectSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedPlanTemplate, setSelectedPlanTemplate] = useState('Plan 2 (80 Pages - ₹30,000)');

  const handleCopy = () => {
    navigator.clipboard.writeText(TELEGRAM_CHANNEL_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const sampleTelegramMessage = `Hello AAliya Book Publication Team,
I am interested in registering for the Work-From-Home Handwriting Project.
Selected Plan: ${selectedPlanTemplate}
Please share the registration form and 70% advance payout verification details.`;

  return (
    <section id="telegram-hub" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-sky-950 to-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold uppercase tracking-wider">
            <Send className="w-3.5 h-3.5" />
            <span>Official Community & Onboarding Hub</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-extrabold text-white tracking-tight">
            Official Telegram Channel Redirect
          </h2>
          
          <div className="w-20 h-1 bg-sky-400 mx-auto rounded-full"></div>

          <p className="text-base sm:text-lg text-slate-300">
            All registration verifications, assignment manuscript downloads, and instant <strong>70% advance payment approvals</strong> are managed securely through our verified Telegram channel.
          </p>
        </div>

        {/* Telegram Master Card */}
        <div className="max-w-4xl mx-auto bg-slate-800/90 border border-sky-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Channel Highlights & Direct Action */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <Logo size="lg" alt="AAliya Official Logo" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center text-white border-2 border-slate-900 shadow">
                    <Send className="w-3 h-3" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-title">
                      AAliya Book Publication
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  </div>
                  <p className="text-sky-300 font-mono text-sm font-semibold">
                    {TELEGRAM_USERNAME}
                  </p>
                </div>
              </div>

              {/* Verified Trust Stats */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-700/60">
                  <div className="text-slate-400">Community Size</div>
                  <div className="text-sm font-bold text-white mt-0.5">18,400+ Scribes</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-700/60">
                  <div className="text-slate-400">Advance Approval Time</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">Within 2 Hours</div>
                </div>
              </div>

              {/* Direct Link Row with Copy */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-700 flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-slate-300 truncate">
                  {TELEGRAM_CHANNEL_URL}
                </span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-sky-300 border border-slate-600 transition-all cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Primary Telegram CTA */}
              <div className="space-y-2">
                <a
                  id="telegram-section-direct-link"
                  href={TELEGRAM_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-sky-600/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5" />
                  <span>Open Official Telegram Channel</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>

                <p className="text-center text-[11px] text-slate-400">
                  Clicking will open Telegram App or Web directly at <span className="text-sky-300">{TELEGRAM_USERNAME}</span>
                </p>
              </div>

            </div>

            {/* Right Col: Pre-filled message generator */}
            <div className="lg:col-span-5 bg-slate-950/80 border border-slate-700 rounded-2xl p-5 space-y-4">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4" />
                  <span>Pre-Filled Message Template</span>
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">
                  Choose Plan to send to Coordinator:
                </label>
                <select
                  value={selectedPlanTemplate}
                  onChange={(e) => setSelectedPlanTemplate(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
                >
                  <option value="Plan 1 (50 Pages - ₹25,000 Total | ₹17,500 Advance)">
                    Plan 1: 50 Pages (₹25,000)
                  </option>
                  <option value="Plan 2 (80 Pages - ₹30,000 Total | ₹21,000 Advance)">
                    Plan 2: 80 Pages (₹30,000) - Most Popular
                  </option>
                  <option value="Plan 3 (100 Pages - ₹35,000 Total | ₹24,500 Advance)">
                    Plan 3: 100 Pages (₹35,000) - Master Scribe
                  </option>
                </select>
              </div>

              {/* Message Box */}
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 whitespace-pre-wrap leading-relaxed">
                {sampleTelegramMessage}
              </div>

              <div className="pt-1">
                <a
                  href={TELEGRAM_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    navigator.clipboard.writeText(sampleTelegramMessage);
                  }}
                  className="w-full py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-300 border border-sky-500/30 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-sky-400"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Message & Launch Telegram</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
