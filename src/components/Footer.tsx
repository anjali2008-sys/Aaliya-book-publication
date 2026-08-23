import React from 'react';
import { 
  BookOpen, 
  Send, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  ExternalLink,
  MapPin,
  Mail,
  Phone,
  Lock,
  Award,
  CheckCircle2,
  BadgeCheck,
  Building2,
  FileCheck2
} from 'lucide-react';
import { TELEGRAM_CHANNEL_URL, TELEGRAM_USERNAME } from '../data/publicationData';

interface FooterProps {
  onOpenAI: () => void;
  onOpenRegister: (planId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAI, onOpenRegister }) => {
  const trustBadges = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "100% Secure Payments",
      subtitle: "Direct Bank IMPS & UPI transfers with 70% advance protection"
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-sky-400" />,
      title: "Verified by Telegram",
      subtitle: "Official onboarding directly via verified channel @aaliyabookpublicationn"
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "ISO 9001:2015 Certified",
      subtitle: "Certified quality management & authentic manuscript publication standards"
    },
    {
      icon: <Lock className="w-6 h-6 text-indigo-400" />,
      title: "256-Bit SSL Encrypted",
      subtitle: "End-to-end encrypted candidate submissions & strict data privacy"
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-teal-400" />,
      title: "Legally Binding Contracts",
      subtitle: "Transparent author-scribe agreement for all transcription assignments"
    }
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-sm">
      
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-serif-title font-extrabold text-2xl sm:text-3xl text-slate-950">
              Start Writing from Home & Earn Up to ₹35,000/-
            </h3>
            <p className="text-sm font-semibold text-slate-900">
              Receive your 70% advance payment credited within 2 hours of registration!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              id="footer-join-telegram-btn"
              href={TELEGRAM_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm shadow-xl transition-all hover:scale-105"
            >
              <Send className="w-4 h-4 text-sky-400" />
              <span>Join Official Telegram</span>
            </a>

            <button
              id="footer-select-plan-btn"
              onClick={() => onOpenRegister()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-xl transition-all hover:scale-105 cursor-pointer"
            >
              <span>Book Your Slot</span>
            </button>
          </div>
        </div>
      </div>

      {/* Security & Trust Badges Section */}
      <div className="border-b border-slate-850 bg-slate-900/60 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-amber-300 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Enterprise Credibility & Verification</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-serif-title font-bold text-white">
              Security, Compliance & Trust Badges
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {trustBadges.map((badge, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-4.5 flex flex-col justify-between transition-all hover:bg-slate-850 group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {badge.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm leading-snug">
                      {badge.title}
                    </h5>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {badge.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed & Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 to-amber-600 shadow-md shrink-0">
                <img
                  src="/logo.jpg"
                  alt="AAliya Book Publication Logo"
                  className="w-full h-full object-cover rounded-full bg-white"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-title font-extrabold text-xl text-white">
                  AAliya Book Publication
                </span>
                <span className="text-[11px] text-amber-300 font-medium tracking-wide uppercase">
                  Authentic Handwriting Services
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Authentic Handwriting Services | Work From Home Opportunities. Bridging traditional writing artistry and modern digital publication requirements across India with guaranteed 70% advance payment security.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Publication House</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-sky-400 font-semibold flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-sky-400" />
                <span>Telegram Verified</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-amber-300 transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="hover:text-amber-300 transition-colors">How It Works (4 Steps)</a></li>
              <li><a href="#plans" className="hover:text-amber-300 transition-colors">Project Plans (₹25k - ₹35k)</a></li>
              <li><a href="#calculator" className="hover:text-amber-300 transition-colors">Earnings Calculator</a></li>
              <li><a href="#guidelines" className="hover:text-amber-300 transition-colors">Handwriting Guidelines</a></li>
              <li><a href="#faqs" className="hover:text-amber-300 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 4: Project Plans */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Project Plans
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onOpenRegister('plan-1')} className="hover:text-amber-300 text-left cursor-pointer">
                  Plan 1: 50 Pages (₹25,000)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenRegister('plan-2')} className="hover:text-amber-300 text-left cursor-pointer">
                  Plan 2: 80 Pages (₹30,000) • Popular
                </button>
              </li>
              <li>
                <button onClick={() => onOpenRegister('plan-3')} className="hover:text-amber-300 text-left cursor-pointer">
                  Plan 3: 100 Pages (₹35,000) • Master
                </button>
              </li>
              <li>
                <button onClick={onOpenAI} className="text-amber-400 hover:underline flex items-center gap-1 cursor-pointer pt-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask AI Scribe Advisor</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Official Telegram Onboarding */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Official Telegram
            </h4>
            <p className="text-xs text-slate-400">
              Official Telegram Channel:
            </p>
            <a
              href={TELEGRAM_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-semibold transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{TELEGRAM_USERNAME}</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
            <div className="text-[11px] text-slate-500 pt-1">
              Connect to receive registration form, manuscript PDF, and 70% advance payment.
            </div>
          </div>

        </div>

        {/* Bottom Bar matching exact PDF text */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left">
            <p>Official Telegram Channel: <a href={TELEGRAM_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline font-mono">{TELEGRAM_CHANNEL_URL}</a></p>
            <p className="mt-1 font-medium text-slate-400">© 2026 AAliya Book Publication. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>Authentic Handwriting Services</span>
            <span>•</span>
            <span>Work From Home Opportunities</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
