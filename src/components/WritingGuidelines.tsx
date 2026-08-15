import React from 'react';
import { 
  FileText, 
  CheckCircle2, 
  XCircle, 
  PenTool, 
  Camera, 
  Truck, 
  HelpCircle,
  Eye,
  ShieldCheck
} from 'lucide-react';

export const WritingGuidelines: React.FC = () => {
  return (
    <section id="guidelines" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <PenTool className="w-3.5 h-3.5" />
            <span>Quality Standards</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif-title font-extrabold text-slate-950 tracking-tight">
            Handwriting & Submission Guidelines
          </h2>
          
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>

          <p className="text-base sm:text-lg text-slate-600">
            No artistic calligraphy required. Standard, neat, everyday handwriting on ruled sheets is 100% accepted.
          </p>
        </div>

        {/* 2 Column Layout: Guidelines & Specimen Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Specimen Preview */}
          <div className="lg:col-span-6 bg-amber-50/70 border-2 border-dashed border-amber-300 rounded-3xl p-6 sm:p-8 shadow-md relative">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-amber-200">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-700" />
                <span className="font-bold text-slate-900 text-sm">Sample Ruled Sheet Specimen</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                Approved Format
              </span>
            </div>

            {/* Handwritten Paper Simulation */}
            <div className="bg-white rounded-xl p-5 shadow-inner border border-slate-200 font-handwriting text-slate-800 text-lg sm:text-xl leading-8 relative space-y-2 select-none">
              <div className="text-right text-xs font-sans text-slate-400 pb-1 border-b border-slate-200 mb-2">
                Manuscript ID: ABP-2026-LIT-084 • Page: 01/50
              </div>
              <p className="text-slate-900">
                Chapter 1: The Art of Timeless Literature
              </p>
              <p className="text-slate-700">
                In an era dominated by digital screens, the physical charm of handwritten manuscripts endures. Each stroke preserves personal cadence and historical warmth that printed typography cannot replicate.
              </p>
              <p className="text-slate-700">
                AAliya Book Publication archives these authentic scribed pages into limited-edition monographs, ensuring classic literary compositions remain preserved for future generations.
              </p>
              <div className="pt-3 text-right text-xs font-sans text-emerald-700 font-semibold flex items-center justify-end gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Legible • Clean Margins • Uniform Spacing</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
              <span>Standard Ruled A4 Sheet</span>
              <span>Blue / Black Ballpoint or Gel Pen</span>
            </div>
          </div>

          {/* Right Column: Rules Checklist & Submission Modes */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Approved vs Avoid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Do's */}
              <div className="bg-white border border-emerald-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Approved Practices:</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Standard blue or black ballpoint/gel pen</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Standard single-line ruled A4 paper</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Consistent spacing between words</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Clear 1-inch left margin for archiving</span>
                  </li>
                </ul>
              </div>

              {/* Don'ts */}
              <div className="bg-white border border-rose-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm mb-3">
                  <XCircle className="w-5 h-5" />
                  <span>Things to Avoid:</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Excessive fluid white-out or overwriting</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Torn, creased, or stained sheets</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Red, green, or glitter decorative pens</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Skipping pages or leaving blank lines</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Submission Methods */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span>Two Flexible Submission Options:</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-sky-700 font-bold mb-1">
                    <Camera className="w-4 h-4" />
                    <span>1. Digital PDF Scan</span>
                  </div>
                  <p className="text-slate-600">
                    Photograph pages with CamScanner or Adobe Scan and send as high-res PDF via Telegram. Instant review within 4 hours.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-purple-700 font-bold mb-1">
                    <Truck className="w-4 h-4" />
                    <span>2. Free Courier Pickup</span>
                  </div>
                  <p className="text-slate-600">
                    We schedule doorstep pickup by Delhivery or India Post for physical original sheets. Tracking label provided free.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
