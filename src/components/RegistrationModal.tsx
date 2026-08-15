import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Zap, 
  Copy, 
  Check, 
  ArrowRight,
  Sparkles,
  IndianRupee
} from 'lucide-react';
import { PROJECT_PLANS, TELEGRAM_CHANNEL_URL, TELEGRAM_USERNAME } from '../data/publicationData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ 
  isOpen, 
  onClose,
  initialPlanId 
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(initialPlanId || 'plan-2');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [cityState, setCityState] = useState('');
  const [payoutMode, setPayoutMode] = useState('UPI (Google Pay / PhonePe / Paytm)');
  const [generatedSlip, setGeneratedSlip] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialPlanId) {
      setSelectedPlanId(initialPlanId);
    }
  }, [initialPlanId]);

  if (!isOpen) return null;

  const currentPlan = PROJECT_PLANS.find(p => p.id === selectedPlanId) || PROJECT_PLANS[1];

  const handleGenerateSlip = (e: React.FormEvent) => {
    e.preventDefault();
    const refId = `ABP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const slipText = `📝 *AALIYA BOOK PUBLICATION - ONBOARDING SLIP*
Ref ID: ${refId}
Candidate Name: ${fullName || 'Candidate'}
Contact: ${phone || 'Provided via Telegram'}
Location: ${cityState || 'India'}
Selected Project: ${currentPlan.name} (${currentPlan.pages} Pages / ${currentPlan.durationDays} Days)
Total Project Salary: ₹${currentPlan.totalSalary.toLocaleString('en-IN')}/-
*Guaranteed 70% Advance: ₹${currentPlan.advanceSalary.toLocaleString('en-IN')}/-*
Preferred Payout: ${payoutMode}

Hello Coordinator, I am ready to start my assignment. Please assign my manuscript kit and confirm advance payout.`;

    setGeneratedSlip(slipText);
  };

  const handleProceedTelegram = () => {
    if (generatedSlip) {
      navigator.clipboard.writeText(generatedSlip);
    }
    window.open(TELEGRAM_CHANNEL_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl text-slate-100 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-bold flex items-center justify-center shadow-md">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-title font-bold text-lg text-white">
                Book Handwriting Slot
              </h3>
              <p className="text-xs text-amber-300">
                Official Registration via Telegram Channel
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">
          
          {!generatedSlip ? (
            <form onSubmit={handleGenerateSlip} className="space-y-4">
              
              {/* Plan Choice Select */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  Select Project Plan:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PROJECT_PLANS.map(plan => (
                    <button
                      type="button"
                      key={plan.id}
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={`p-2.5 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                        selectedPlanId === plan.id
                          ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <div className="font-extrabold text-sm">{plan.pages} Pages</div>
                      <div className="opacity-90">₹{plan.totalSalary.toLocaleString('en-IN')}</div>
                      <div className="text-[10px] text-emerald-800 font-bold mt-0.5">
                        70% Advance
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Advance Highlight Banner */}
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-300">Guaranteed 70% Advance Payout:</span>
                  <div className="text-emerald-400 font-extrabold text-base">
                    ₹{currentPlan.advanceSalary.toLocaleString('en-IN')}/-
                  </div>
                </div>
                <div className="text-right text-[11px] text-slate-400">
                  <span>Slot Duration:</span>
                  <div className="font-bold text-white">{currentPlan.durationDays} Days</div>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-300 font-semibold mb-1">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 font-semibold mb-1">
                    WhatsApp / Telegram Mobile:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* City/State & Payout Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-300 font-semibold mb-1">
                    City & State:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaipur, Rajasthan"
                    value={cityState}
                    onChange={(e) => setCityState(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 font-semibold mb-1">
                    Advance Payout Method:
                  </label>
                  <select
                    value={payoutMode}
                    onChange={(e) => setPayoutMode(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="UPI (Google Pay / PhonePe / Paytm / BHIM)">
                      UPI (Google Pay / PhonePe / Paytm)
                    </option>
                    <option value="Direct Bank Transfer (NEFT / IMPS)">
                      Direct Bank Transfer (NEFT / IMPS)
                    </option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <span>Generate Application Slip & Connect Telegram</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          ) : (
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Application Slip generated successfully! Copy and send it to our official Telegram channel.</span>
              </div>

              {/* Application Slip Content */}
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-700 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed">
                {generatedSlip}
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleProceedTelegram}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5" />
                  <span>Copy Slip & Open Telegram Channel</span>
                </button>

                <button
                  onClick={() => setGeneratedSlip(null)}
                  className="w-full py-2 text-xs text-slate-400 hover:text-slate-200 cursor-pointer"
                >
                  ← Edit Application Details
                </button>
              </div>
            </div>
          )}

          {/* Footer Security Note */}
          <div className="pt-3 border-t border-slate-800 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official Channel: <strong className="text-sky-400">{TELEGRAM_USERNAME}</strong></span>
          </div>

        </div>

      </div>
    </div>
  );
};
