import React, { useState } from 'react';
import { Header } from './components/Header';
import { LiveTicker } from './components/LiveTicker';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { HowItWorks } from './components/HowItWorks';
import { ProjectPlans } from './components/ProjectPlans';
import { EarningsCalculator } from './components/EarningsCalculator';
import { WritingGuidelines } from './components/WritingGuidelines';
import { TelegramRedirectSection } from './components/TelegramRedirectSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { AIAssistantModal } from './components/AIAssistantModal';
import { RegistrationModal } from './components/RegistrationModal';
import { FloatingAIAssistant } from './components/FloatingAIAssistant';
import { RakshaBandhanBanner } from './components/RakshaBandhanBanner';
import { RakshaBandhanSection } from './components/RakshaBandhanSection';
import { RakshaBandhanSpecialModal } from './components/RakshaBandhanSpecialModal';
import { RakshaBandhanFloatingBadge } from './components/RakshaBandhanFloatingBadge';

export default function App() {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isRakhiOfferOpen, setIsRakhiOfferOpen] = useState(false);
  const [selectedPlanForRegistration, setSelectedPlanForRegistration] = useState<string | undefined>(undefined);

  const handleOpenRegister = (planId?: string) => {
    setSelectedPlanForRegistration(planId);
    setIsRegisterOpen(true);
  };

  const handleOpenAI = () => {
    setIsAIOpen(true);
  };

  const handleOpenRakhiOffer = () => {
    setIsRakhiOfferOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
      {/* 48-Hour Auto-Expiring Raksha Bandhan Festive Ribbon */}
      <RakshaBandhanBanner 
        onOpenOfferModal={handleOpenRakhiOffer}
      />

      {/* Header with Navigation & Live Notice */}
      <Header 
        onOpenAI={handleOpenAI}
        onOpenRegister={handleOpenRegister}
      />

      {/* Real-time Scribe Activity Stream */}
      <LiveTicker />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onOpenAI={handleOpenAI}
          onOpenRegister={handleOpenRegister}
        />

        {/* 48-Hour Raksha Bandhan Special Showcase Section (Auto-disappears when 48h ends) */}
        <RakshaBandhanSection 
          onOpenRegister={handleOpenRegister}
          onOpenOfferModal={handleOpenRakhiOffer}
        />

        {/* About AAliya Book Publication */}
        <AboutSection />

        {/* 4-Step Process Walkthrough */}
        <HowItWorks 
          onOpenRegister={handleOpenRegister}
          onOpenAI={handleOpenAI}
        />

        {/* Official Project Plans Showcase */}
        <ProjectPlans 
          onOpenRegister={handleOpenRegister}
          onOpenAI={handleOpenAI}
        />

        {/* Interactive Earning Simulator */}
        <EarningsCalculator 
          onOpenRegister={handleOpenRegister}
        />

        {/* Quality Standards & Handwriting Specimen */}
        <WritingGuidelines />

        {/* Dedicated Telegram Channel Redirect Hub */}
        <TelegramRedirectSection />

        {/* Verified Writer Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FAQSection 
          onOpenAI={handleOpenAI}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenAI={handleOpenAI}
        onOpenRegister={handleOpenRegister}
      />

      {/* Floating AI & Telegram Quick Controls */}
      <FloatingAIAssistant 
        onOpenAI={handleOpenAI}
      />

      {/* 48-Hour Floating Raksha Bandhan Badge */}
      <RakshaBandhanFloatingBadge 
        onOpenOfferModal={handleOpenRakhiOffer}
      />

      {/* Interactive AI Assistant Modal (Gemini 3.7 Flash) */}
      <AIAssistantModal 
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
        onSelectPlan={(planId) => {
          setIsAIOpen(false);
          handleOpenRegister(planId);
        }}
      />

      {/* Slot Booking & Onboarding Helper Modal */}
      <RegistrationModal 
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        initialPlanId={selectedPlanForRegistration}
      />

      {/* Raksha Bandhan Special Poster & 20% Discount Offer Modal */}
      <RakshaBandhanSpecialModal 
        isOpen={isRakhiOfferOpen}
        onClose={() => setIsRakhiOfferOpen(false)}
        onSelectPlan={(planId) => {
          setIsRakhiOfferOpen(false);
          handleOpenRegister(planId);
        }}
      />
    </div>
  );
}
