import React from 'react';
import { 
  CheckCircle2, 
  Send, 
  Wallet, 
  FileCheck2, 
  ListOrdered, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS, TELEGRAM_CHANNEL_URL } from '../data/publicationData';

interface HowItWorksProps {
  onOpenRegister: (planId?: string) => void;
  onOpenAI: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenRegister, onOpenAI }) => {
  const stepIcons = [
    <ListOrdered className="w-7 h-7 text-amber-500" />,
    <Send className="w-7 h-7 text-sky-500" />,
    <Wallet className="w-7 h-7 text-emerald-500" />,
    <FileCheck2 className="w-7 h-7 text-purple-500" />
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <span>Simple 4-Step Process</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif-title font-extrabold text-slate-950 tracking-tight">
            How It Works
          </h2>
          
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>

          <p className="text-base sm:text-lg text-slate-600">
            From selecting your preferred assignment to receiving your advance payout and final settlement—transparent and verified from start to finish.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group hover:border-amber-400"
            >
              {/* Step Top Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-13 h-13 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-serif-title font-extrabold text-2xl text-slate-300 group-hover:text-amber-500 transition-colors">
                    0{step.stepNumber}
                  </span>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-2">
                  Step {step.stepNumber}:
                </div>

                <h3 className="font-bold text-slate-900 text-lg leading-snug mb-2.5">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Step Footer Highlight */}
              <div className="pt-3 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Telegram Fast-Track Connect Strip */}
        <div className="mt-12 bg-gradient-to-r from-sky-900 via-slate-900 to-sky-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-sky-800/50">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-sky-500/20 text-sky-300 text-xs font-semibold">
              <Send className="w-3.5 h-3.5" />
              <span>Step 2 Quick Connect</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-serif-title text-white">
              Ready to begin Step 2? Connect with our Official Telegram Channel
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              Our Telegram onboarding coordinator will help you pick an assignment manuscript, verify your details, and instantly credit your 70% advance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <a
              href={TELEGRAM_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>Open Telegram Channel</span>
            </a>

            <button
              onClick={() => onOpenRegister()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              <span>Explore Plans</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
