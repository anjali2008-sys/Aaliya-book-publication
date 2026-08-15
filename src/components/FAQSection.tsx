import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  Sparkles, 
  MessageSquare,
  Search
} from 'lucide-react';
import { FAQS, FAQItem, TELEGRAM_CHANNEL_URL } from '../data/publicationData';

interface FAQSectionProps {
  onOpenAI: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenAI }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First one open by default
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Payments', 'Work Guidelines', 'Telegram & Support'];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Got Questions?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif-title font-extrabold text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>

          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our authentic handwriting work, 70% advance payouts, and Telegram registration.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search frequently asked questions (e.g. advance payment, pens, UPI, registration)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm text-slate-900"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-amber-300 shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 text-sm">
              No matching questions found. Try asking our <strong>AI Advisor</strong> below!
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-amber-400 bg-amber-50/40 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-amber-600 text-base">Q:</span>
                      <span className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div className="shrink-0 text-slate-400">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-amber-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-amber-200/50">
                      <div className="flex items-start gap-3">
                        <span className="font-bold text-emerald-600 text-base">A:</span>
                        <div className="space-y-2">
                          <p>{faq.answer}</p>
                          <div className="text-xs text-slate-500 font-medium">
                            Category: {faq.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-title font-bold text-xl text-white">
              Still have questions about our handwriting projects?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our AI Support Assistant is available 24/7, or you can chat with a real project manager on Telegram.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAI}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-400/30 text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Ask AI Assistant</span>
            </button>

            <a
              href={TELEGRAM_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>Telegram Support</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
