import React, { useState } from 'react';
import { 
  BookOpen, 
  Send, 
  Sparkles, 
  Menu, 
  X, 
  ShieldCheck, 
  CheckCircle2,
  HelpCircle,
  Calculator,
  FileText
} from 'lucide-react';
import { TELEGRAM_CHANNEL_URL } from '../data/publicationData';

interface HeaderProps {
  onOpenAI: () => void;
  onOpenRegister: (planId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAI, onOpenRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-lg">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600 text-slate-950 text-xs sm:text-sm font-semibold py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 bg-amber-900/20 px-2 py-0.5 rounded-full text-slate-950 font-bold uppercase text-[10px] tracking-wider border border-amber-950/20">
          <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse"></span>
          2026 Batch Active
        </span>
        <span>
          Instant <strong>70% Advance Payment</strong> credited upon slot registration via Telegram!
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 border border-amber-300 group-hover:scale-105 transition-transform duration-200">
              <BookOpen className="w-6 h-6 text-slate-950 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif-title font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  AAliya Book Publication
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-amber-300 font-medium tracking-wide uppercase">
                Authentic Handwriting Services • Est. 2018
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-amber-300 transition-colors">About Us</a>
            <a href="#how-it-works" className="hover:text-amber-300 transition-colors">How It Works</a>
            <a href="#plans" className="hover:text-amber-300 transition-colors">Project Plans</a>
            <a href="#calculator" className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              Calculator
            </a>
            <a href="#guidelines" className="hover:text-amber-300 transition-colors">Guidelines</a>
            <a href="#faqs" className="hover:text-amber-300 transition-colors">FAQs</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* AI Assistant Button */}
            <button
              id="header-ai-button"
              onClick={onOpenAI}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-400/30 hover:border-amber-400/60 text-xs font-semibold shadow-sm transition-all hover:scale-105 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span>AI Advisor</span>
            </button>

            {/* Telegram Channel CTA */}
            <a
              id="header-telegram-button"
              href={TELEGRAM_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 transition-all hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>Telegram Channel</span>
            </a>

            {/* Quick Register Trigger */}
            <button
              id="header-register-button"
              onClick={() => onOpenRegister()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all hover:scale-105 cursor-pointer"
            >
              <span>Book Slot</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAI}
              className="p-2 rounded-lg bg-slate-800 text-amber-400 border border-amber-400/30 text-xs font-medium"
              title="Open AI Assistant"
            >
              <Sparkles className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-amber-300"
            >
              About Us
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-amber-300"
            >
              How It Works (4 Steps)
            </a>
            <a 
              href="#plans" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-amber-300"
            >
              Project Plans (₹25k - ₹35k)
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-amber-300 flex items-center justify-between"
            >
              <span>Earnings Calculator</span>
              <Calculator className="w-4 h-4 text-amber-400" />
            </a>
            <a 
              href="#guidelines" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-amber-300"
            >
              Writing Guidelines & Sample Specimen
            </a>
            <a 
              href="#faqs" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-amber-300"
            >
              Frequently Asked Questions
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={TELEGRAM_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Join Official Telegram Channel</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md"
            >
              <span>Book Your Writing Slot</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
