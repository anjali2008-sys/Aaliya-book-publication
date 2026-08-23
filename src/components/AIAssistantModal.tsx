import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  X, 
  Bot, 
  User, 
  Loader2, 
  ExternalLink, 
  RotateCcw,
  BookOpen
} from 'lucide-react';
import Markdown from 'react-markdown';
import { TELEGRAM_CHANNEL_URL } from '../data/publicationData';
import { Logo } from './Logo';

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
  "70% Advance Payment kaise milta hai?",
  "Plans aur Salary ki detail batao",
  "Writing ke liye pen aur paper rules kya hain?",
  "Telegram par register kaise kare?",
  "Can I write in Hindi or English?"
];

const INITIAL_MESSAGE: Message = {
  id: 'init-1',
  sender: 'ai',
  text: "Namaste! Main **AAliya Book Publication** ka official Gemini AI Assistant hoon. \n\nAap mujhse hamare **Handwriting Work-From-Home projects**, **Plans (₹25,000 - ₹35,000)**, **70% Advance Payment**, submission rules ya direct **Telegram Registration** ke baare me kuch bhi pooch sakte hain. Main Hindi, English ya Hinglish me aapke sabhi sawalon ka sahi jawab dunga.",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  suggestedActions: [
    { label: "Join Official Telegram", url: TELEGRAM_CHANNEL_URL }
  ]
};

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({ 
  isOpen, 
  onClose,
  onSelectPlan 
}) => {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
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

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  const handleSend = async (userText?: string) => {
    const textToSend = (userText || input).trim();
    if (!textToSend || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    if (!userText) setInput('');
    setIsLoading(true);

    // Prepare multi-turn history for Gemini
    const historyPayload = messages.slice(-8).map(m => ({
      role: m.sender === 'ai' ? 'model' : 'user',
      text: m.text
    }));

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: textToSend,
          history: historyPayload
        })
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      const data = await res.json();
      const replyText = data.reply || "Aapke sawal ke liye shukriya! Slot booking aur 70% advance payment paane ke liye kripya hamare official Telegram channel par judiye: https://t.me/aaliyabookpublicationn.";

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
      console.warn('Network error or fallback mode:', err);
      let fallbackText = "AAliya Book Publication pure bharat me authentic handwriting work-from-home jobs provide karta hai.\n\n• **Plan 1**: 50 Pages | 7 Din | ₹25,000 Salary (70% Advance: ₹17,500)\n• **Plan 2**: 80 Pages | 10 Din | ₹30,000 Salary (70% Advance: ₹21,000)\n• **Plan 3**: 100 Pages | 15 Din | ₹35,000 Salary (70% Advance: ₹24,500)\n\nSlot booking aur 70% advance lene ke liye hamare Telegram channel par sampark karein: https://t.me/aaliyabookpublicationn.";
      
      const lower = textToSend.toLowerCase();
      if (lower.includes('advance') || lower.includes('payment') || lower.includes('70%') || lower.includes('salary') || lower.includes('paisa')) {
        fallbackText = "Aapko registration karte hi **70% Advance Payment** (jaise Plan 1 ka ₹17,500, Plan 2 ka ₹21,000, Plan 3 ka ₹24,500) aapke Bank Account ya UPI ID me 1 se 2 ghante ke andar transfer kar diya jata hai. Baki 30% balance kaam submit karne ke baad milta hai.";
      } else if (lower.includes('pen') || lower.includes('paper') || lower.includes('rule') || lower.includes('page')) {
        fallbackText = "Aapko standard single-line ruled A4 sheets aur blue ya black ballpoint/gel pen use karna hota hai. Normal clean handwriting required hai, koi special calligraphy ki zarurat nahi hai.";
      } else if (lower.includes('telegram') || lower.includes('register') || lower.includes('apply')) {
        fallbackText = "Registration ke liye hamare official Telegram channel par click karein: **https://t.me/aaliyabookpublicationn** (@aaliyabookpublicationn). Wahan coordinator aapko manuscript assign karega aur 70% advance bhejega.";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col h-[650px] max-h-[92vh] overflow-hidden text-slate-100">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-slate-800/90 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <Logo size="sm" className="w-11 h-11" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 border border-slate-900 shadow">
                <Sparkles className="w-2.5 h-2.5" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold font-serif-title text-base sm:text-lg text-white">
                  AAliya Gemini AI Advisor
                </h3>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                  Gemini Powered
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Poochiye koi bhi sawal • Instant, accurate answers in Hindi & English
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleResetChat}
              title="Reset conversation"
              className="p-2 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <a
              href={TELEGRAM_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition-all shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-slate-950/70">
          {messages.map((msg) => {
            const isAi = msg.sender === 'ai';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isAi ? 'justify-start' : 'justify-end'}`}
              >
                {isAi && (
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-1 shadow-sm">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[88%] sm:max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  isAi
                    ? 'bg-slate-800 text-slate-100 border border-slate-700/80 shadow-md'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-medium shadow-md'
                }`}>
                  {isAi ? (
                    <div className="prose prose-invert prose-sm max-w-none text-slate-100 space-y-2">
                      <Markdown>{msg.text}</Markdown>
                    </div>
                  ) : (
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                  )}
                  
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
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold shadow-md transition-transform hover:scale-105"
                            >
                              <Send className="w-3.5 h-3.5" />
                              <span>{action.label}</span>
                              <ExternalLink className="w-3 h-3 ml-0.5" />
                            </a>
                          );
                        }
                        return null;
                      })}
                    </div>
                  )}

                  <div className={`text-[10px] mt-2 text-right ${
                    isAi ? 'text-slate-400' : 'text-slate-900/80 font-medium'
                  }`}>
                    {msg.timestamp}
                  </div>
                </div>

                {!isAi && (
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 items-center text-slate-400 text-xs">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-slate-300 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Gemini AI is generating your answer...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-3 sm:px-4 py-2 bg-slate-900 border-t border-slate-800 overflow-x-auto no-scrollbar flex items-center gap-2">
          {QUICK_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              disabled={isLoading}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] text-amber-300 border border-slate-700 whitespace-nowrap transition-colors cursor-pointer shrink-0 active:scale-95"
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
            placeholder="Poochiye: Plans, salary, 70% advance, writing format, ya koi bhi sawal..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-400"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-3.5 py-2.5 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all disabled:opacity-50 flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Ask AI</span>
          </button>
        </form>

      </div>
    </div>
  );
};
