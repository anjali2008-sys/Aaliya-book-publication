import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  X, 
  Bot, 
  User, 
  Loader2, 
  ExternalLink, 
  HelpCircle,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { TELEGRAM_CHANNEL_URL, TELEGRAM_USERNAME } from '../data/publicationData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  suggestedActions?: { label: string; url?: string; actionType?: string }[];
}

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan?: (planId: string) => void;
}

const QUICK_PROMPTS = [
  "Explain the 70% advance payment rule",
  "Which plan is best for 2 hours daily?",
  "What pen & ruled paper should I use?",
  "How to complete registration on Telegram?",
  "How are finished manuscripts submitted?"
];

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({ 
  isOpen, 
  onClose,
  onSelectPlan 
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hello! I am your AI Scribe Advisor for **AAliya Book Publication**. How can I help you today? I can guide you through our **Project Plans (₹25,000 - ₹35,000)**, the **70% advance payment process**, handwriting guidelines, or direct **Telegram onboarding**.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedActions: [
        { label: "View Official Telegram", url: TELEGRAM_CHANNEL_URL },
        { label: "Check Project Plans", actionType: "plans" }
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (userText?: string) => {
    const textToSend = userText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    if (!userText) setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend })
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      const data = await res.json();
      const replyText = data.reply || "Thank you for your question! For official registration and 70% advance payout verification, please connect with our team on Telegram at https://t.me/aaliyabookpublicationn.";

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: [
          { label: "Open Telegram Channel", url: TELEGRAM_CHANNEL_URL }
        ]
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.warn('Using client-side smart fallback answer due to network:', err);
      // Smart contextual fallback response
      let fallbackText = "AAliya Book Publication offers authentic work-from-home handwriting projects across India. You can choose Plan 1 (50 pages / ₹25,000), Plan 2 (80 pages / ₹30,000), or Plan 3 (100 pages / ₹35,000). A guaranteed 70% advance payment is transferred directly via UPI or Bank IMPS upon slot confirmation on our official Telegram channel (@aaliyabookpublicationn).";
      
      const lower = textToSend.toLowerCase();
      if (lower.includes('advance') || lower.includes('payment') || lower.includes('70%') || lower.includes('salary')) {
        fallbackText = "We release 70% of your total project salary upfront (e.g. ₹17,500 for Plan 1, ₹21,000 for Plan 2, ₹24,500 for Plan 3) within 1 to 2 hours of registration on Telegram. The remaining 30% balance is transferred upon submission approval via Bank Transfer or UPI.";
      } else if (lower.includes('pen') || lower.includes('paper') || lower.includes('handwriting') || lower.includes('rule')) {
        fallbackText = "Guidelines are simple: Use standard single-line ruled A4 sheets with 1-inch margins and standard blue or black ballpoint/gel pens (Cello, Reynolds, etc.). Everyday neat handwriting is required—no special calligraphy needed!";
      } else if (lower.includes('telegram') || lower.includes('register') || lower.includes('apply')) {
        fallbackText = "To register, connect directly with our official Telegram channel at https://t.me/aaliyabookpublicationn. Send a message stating your selected plan, and our coordinator will assign your manuscript kit and disburse your 70% advance.";
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: [
          { label: "Go to Official Telegram", url: TELEGRAM_CHANNEL_URL }
        ]
      };

      setMessages(prev => [...prev, aiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col h-[620px] max-h-[90vh] overflow-hidden text-slate-100">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-slate-800/90 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md">
              <Sparkles className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold font-serif-title text-base sm:text-lg text-white">
                  AAliya Scribe AI Advisor
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p className="text-xs text-amber-300">
                Official Assistant for Plans, Payouts & Telegram Onboarding
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={TELEGRAM_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-slate-950/60">
          {messages.map((msg) => {
            const isAi = msg.sender === 'ai';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isAi ? 'justify-start' : 'justify-end'}`}
              >
                {isAi && (
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  isAi
                    ? 'bg-slate-800 text-slate-100 border border-slate-700/80 shadow-md'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-medium shadow-md'
                }`}>
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                  
                  {/* Action buttons inside message */}
                  {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-slate-700/60 flex flex-wrap gap-2">
                      {msg.suggestedActions.map((action, i) => {
                        if (action.url) {
                          return (
                            <a
                              key={i}
                              href={action.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-[11px] font-bold shadow-sm"
                            >
                              <Send className="w-3 h-3" />
                              <span>{action.label}</span>
                              <ExternalLink className="w-3 h-3 ml-0.5" />
                            </a>
                          );
                        }
                        return null;
                      })}
                    </div>
                  )}

                  <div className={`text-[10px] mt-1.5 text-right ${
                    isAi ? 'text-slate-400' : 'text-slate-900/80'
                  }`}>
                    {msg.timestamp}
                  </div>
                </div>

                {!isAi && (
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 items-center text-slate-400 text-xs">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-slate-300">
                <span>Advisor is preparing your answer...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-slate-900 border-t border-slate-800 overflow-x-auto no-scrollbar flex items-center gap-2">
          {QUICK_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              disabled={isLoading}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] text-amber-300 border border-slate-700 whitespace-nowrap transition-colors cursor-pointer shrink-0"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Area */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 sm:p-4 bg-slate-800/90 border-t border-slate-700 flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Ask about project plans, ₹25k-₹35k salaries, 70% advance, or Telegram..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-amber-400"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all disabled:opacity-50 flex items-center gap-1.5 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </form>

      </div>
    </div>
  );
};
