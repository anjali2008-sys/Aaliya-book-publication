import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Target, 
  CheckCircle2, 
  Award, 
  Feather,
  Clock,
  HeartHandshake
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span>About Us</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif-title font-extrabold text-slate-950 tracking-tight">
            Bridging Traditional Writing Artistry with Modern Publishing
          </h2>
          
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>

          {/* Primary Statement from PDF */}
          <p className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed bg-amber-50/70 border border-amber-200/80 p-5 rounded-2xl shadow-sm text-left sm:text-center">
            “<strong>AAliya Book Publication</strong> is a professional organization committed to bridging the gap between traditional writing artistry and modern digital requirements. We provide reliable work-from-home handwriting opportunities to individuals across the country.”
          </p>
        </div>

        {/* Why Handwriting Matters in 2026 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Manuscript Archiving */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700 mb-5">
              <Feather className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 mb-2">Authentic Manuscript Scribing</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We specialize in transcribing classical literature, educational revision digests, legal archives, and collector's edition books into handwritten folios that are digitally scanned and archived.
            </p>
          </div>

          {/* Card 2: 70% Advance Trust Model */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-700 mb-5">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 mb-2">Advance Payment Security</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Unlike unstable gig platforms, AAliya Book Publication releases <strong>70% advance payment upfront</strong> upon registration verification, guaranteeing financial security before you write a single page.
            </p>
          </div>

          {/* Card 3: Pan-India Accessibility */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-700 mb-5">
              <Users className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 mb-2">Pan-India Work from Home</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Open to students, homemakers, working professionals, and retired individuals across all 28 states and UTs. Zero daily commuting required—work at your own pace from your home table.
            </p>
          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif-title">4,850+</div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">Active Home Scribes</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif-title">₹3.4 Cr+</div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">Disbursed via UPI/Bank</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif-title">100%</div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">On-Time Settlements</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif-title">28 States</div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">Pan-India Distribution</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
