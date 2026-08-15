import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Zap, 
  Clock, 
  ArrowRight, 
  CheckCircle2,
  TrendingUp,
  FileText
} from 'lucide-react';
import { PROJECT_PLANS, TELEGRAM_CHANNEL_URL } from '../data/publicationData';

interface CalculatorProps {
  onOpenRegister: (planId: string) => void;
}

export const EarningsCalculator: React.FC<CalculatorProps> = ({ onOpenRegister }) => {
  const [selectedPlanIdx, setSelectedPlanIdx] = useState<number>(1); // Default to Plan 2
  const [batchesPerMonth, setBatchesPerMonth] = useState<number>(2);

  const activePlan = PROJECT_PLANS[selectedPlanIdx];
  const monthlyTotal = activePlan.totalSalary * batchesPerMonth;
  const monthlyAdvance = activePlan.advanceSalary * batchesPerMonth;

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif-title font-extrabold text-white tracking-tight">
            Calculate Your Handwriting Income
          </h2>
          
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>

          <p className="text-base sm:text-lg text-slate-300">
            See how much you can earn every month with our authentic transcription projects and upfront 70% advance payouts.
          </p>
        </div>

        {/* Calculator Card Box */}
        <div className="max-w-4xl mx-auto bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Select Plan */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                  1. Choose Your Preferred Assignment Plan:
                </label>
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {PROJECT_PLANS.map((plan, idx) => (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlanIdx(idx)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                        selectedPlanIdx === idx
                          ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-lg scale-105'
                          : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <div className="text-[11px] uppercase tracking-wider opacity-80">
                        Plan {plan.planNumber}
                      </div>
                      <div className="text-sm sm:text-base font-extrabold">
                        {plan.pages} Pages
                      </div>
                      <div className="text-xs mt-1">
                        ₹{plan.totalSalary.toLocaleString('en-IN')}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Batches per month slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    2. Projects Completed Per Month:
                  </label>
                  <span className="text-base font-extrabold text-white bg-slate-700 px-3 py-1 rounded-lg">
                    {batchesPerMonth} {batchesPerMonth === 1 ? 'Project' : 'Projects'} / Month
                  </span>
                </div>
                
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="1"
                  value={batchesPerMonth}
                  onChange={(e) => setBatchesPerMonth(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                
                <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
                  <span>1 Project (Part Time)</span>
                  <span>2 Projects (Regular)</span>
                  <span>3 Projects (Full Time)</span>
                </div>
              </div>

              {/* Effort & Guidelines Estimation */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-sky-400" />
                    Estimated Daily Effort:
                  </span>
                  <span className="font-bold text-white">{activePlan.estimatedDailyTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    Daily Writing Target:
                  </span>
                  <span className="font-bold text-white">~{activePlan.pagesPerDay} Pages / Day</span>
                </div>
              </div>

            </div>

            {/* Right Output Summary Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 border border-amber-500/30 rounded-2xl p-6 shadow-xl text-center space-y-5">
              
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Estimated Monthly Earnings
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold font-serif-title text-amber-400 mt-1">
                  ₹{monthlyTotal.toLocaleString('en-IN')}/-
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Based on {batchesPerMonth} cycle(s) of {activePlan.name}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-left space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-300 font-semibold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 fill-emerald-400" />
                    Instant 70% Advance:
                  </span>
                  <span className="font-extrabold text-emerald-400 text-sm">
                    ₹{monthlyAdvance.toLocaleString('en-IN')}/-
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Credited upfront before writing starts upon registration confirmation.
                </p>
              </div>

              <button
                onClick={() => onOpenRegister(activePlan.id)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
              >
                <span>Register for Plan {activePlan.planNumber} Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
