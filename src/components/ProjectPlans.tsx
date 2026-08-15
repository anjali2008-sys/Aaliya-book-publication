import React from 'react';
import { 
  Check, 
  Send, 
  Sparkles, 
  Zap, 
  Clock, 
  FileText, 
  ShieldCheck, 
  ArrowRight,
  IndianRupee,
  Star
} from 'lucide-react';
import { PROJECT_PLANS, ProjectPlan, TELEGRAM_CHANNEL_URL } from '../data/publicationData';

interface ProjectPlansProps {
  onOpenRegister: (planId: string) => void;
  onOpenAI: () => void;
}

export const ProjectPlans: React.FC<ProjectPlansProps> = ({ onOpenRegister, onOpenAI }) => {
  return (
    <section id="plans" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-red-900 border border-red-300 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span>Official Work Plans</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-extrabold text-slate-950 tracking-tight">
            Project Plans
          </h2>
          
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>

          <p className="text-base sm:text-lg text-slate-600">
            Choose your preferred project workload. Every plan includes an upfront <strong>70% advance payment</strong> credited directly upon Telegram registration.
          </p>
        </div>

        {/* 3 Project Plan Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {PROJECT_PLANS.map((plan: ProjectPlan) => {
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl transition-all duration-200 flex flex-col justify-between ${
                  plan.isPopular 
                    ? 'bg-slate-900 text-white border-2 border-amber-400 shadow-2xl scale-[1.02] lg:-translate-y-2' 
                    : 'bg-slate-50 text-slate-900 border border-slate-200 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Popular / Best Value Ribbon */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Most Popular Choice</span>
                  </div>
                )}
                {plan.isBestValue && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-md">
                    <span>Highest Earning Plan</span>
                  </div>
                )}

                {/* Plan Content Top */}
                <div className="p-6 sm:p-8">
                  
                  {/* Plan Badge matching PDF bullet */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-3.5 h-3.5 rounded-full bg-red-600 inline-block shadow-sm"></span>
                    <span className={`font-extrabold text-sm tracking-wide uppercase ${
                      plan.isPopular ? 'text-red-400' : 'text-red-600'
                    }`}>
                      PROJECT PLAN {plan.planNumber}
                    </span>
                  </div>

                  <h3 className={`text-2xl font-bold font-serif-title mb-1 ${
                    plan.isPopular ? 'text-white' : 'text-slate-950'
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mb-6 ${
                    plan.isPopular ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    {plan.subtitle}
                  </p>

                  {/* Pricing Display */}
                  <div className={`p-4 rounded-xl mb-6 ${
                    plan.isPopular ? 'bg-slate-800/80 border border-slate-700' : 'bg-white border border-slate-200'
                  }`}>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      Total Project Salary:
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl sm:text-4xl font-extrabold font-serif-title ${
                        plan.isPopular ? 'text-amber-400' : 'text-slate-950'
                      }`}>
                        ₹{plan.totalSalary.toLocaleString('en-IN')}/-
                      </span>
                    </div>

                    {/* 70% Advance Callout */}
                    <div className="mt-3 pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs">
                      <span className="font-semibold text-emerald-400 flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 fill-emerald-400" />
                        70% Advance Payout:
                      </span>
                      <span className="font-extrabold text-emerald-400 text-sm">
                        ₹{plan.advanceSalary.toLocaleString('en-IN')}/-
                      </span>
                    </div>

                    <div className="mt-1 flex items-center justify-between text-xs text-slate-400">
                      <span>30% Balance on Submission:</span>
                      <span className="font-semibold">₹{plan.completionSalary.toLocaleString('en-IN')}/-</span>
                    </div>

                    {/* Registration Fee */}
                    <div className="mt-2 pt-2 border-t border-dashed border-slate-700/50 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Registration Fee:</span>
                      <span className="font-bold text-amber-500">₹{plan.registrationFee}/-</span>
                    </div>
                  </div>

                  {/* Workload Specifications */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className={`p-2.5 rounded-lg text-center ${
                      plan.isPopular ? 'bg-slate-800/50' : 'bg-slate-200/50'
                    }`}>
                      <div className="text-xs text-slate-400">Volume</div>
                      <div className="font-bold text-sm">
                        {plan.pages} Pages ({plan.sides} sides)
                      </div>
                    </div>

                    <div className={`p-2.5 rounded-lg text-center ${
                      plan.isPopular ? 'bg-slate-800/50' : 'bg-slate-200/50'
                    }`}>
                      <div className="text-xs text-slate-400">Timeframe</div>
                      <div className="font-bold text-sm">
                        {plan.durationDays} Days Duration
                      </div>
                    </div>
                  </div>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Plan Inclusions:
                    </div>
                    {plan.features.map((feat: string, i: number) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.isPopular ? 'text-amber-400' : 'text-emerald-600'
                        }`} />
                        <span className={plan.isPopular ? 'text-slate-200' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Plan Footer Action */}
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    id={`register-plan-${plan.planNumber}-btn`}
                    onClick={() => onOpenRegister(plan.id)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.isPopular
                        ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-amber-400/20 hover:scale-[1.02]'
                        : 'bg-slate-900 hover:bg-slate-800 text-white hover:scale-[1.02]'
                    }`}
                  >
                    <span>Register for Plan {plan.planNumber}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="mt-2.5 text-center">
                    <a
                      href={TELEGRAM_CHANNEL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-[11px] font-semibold hover:underline ${
                        plan.isPopular ? 'text-sky-400' : 'text-sky-600'
                      }`}
                    >
                      <Send className="w-3 h-3" />
                      <span>Or register directly via Telegram</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Trust Guarantee Note */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-xl bg-amber-50 border border-amber-200 text-center text-xs text-amber-900 flex items-center justify-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
          <span>
            <strong>100% Payout Guarantee:</strong> 70% advance payment is transferred directly via Bank IMPS or UPI once your registration is confirmed on Telegram.
          </span>
        </div>

      </div>
    </section>
  );
};
