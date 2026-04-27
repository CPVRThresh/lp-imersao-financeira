import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import { EventSection } from '@/components/landing/event-section'
import { PainSection } from '@/components/landing/pain-section'
import { BreakthroughSection } from '@/components/landing/breakthrough-section'
import { MethodologySection } from '@/components/landing/methodology-section'
import { LearningSection } from '@/components/landing/learning-section'
import { AuthoritySection } from '@/components/landing/authority-section'
import { TestimonialsSection } from '@/components/landing/testimonials-section'
import { OfferSection } from '@/components/landing/offer-section'
import { UrgencySection } from '@/components/landing/urgency-section'
import { FAQSection } from '@/components/landing/faq-section'
import { MapSection } from '@/components/landing/map-section'
import { FinalCTASection } from '@/components/landing/final-cta-section'
import { Footer } from '@/components/landing/footer'
import { MobileCTA } from '@/components/landing/mobile-cta'
import { WhatsAppButton } from '@/components/landing/whatsapp-button'

export default function LandingPage() {
  return (
    <>
      {/* Sticky Header */}
      <Header />
      
      <main className="relative min-h-screen overflow-x-hidden">
        {/* 1. Hero Section - Visual Impact & Promise */}
        <Hero />
        
        {/* 2. Event Section - O que será esse evento? */}
        <EventSection />
        
        {/* 3. Pain Points - Emotional Connection */}
        <PainSection />
        
        {/* 4. Breakthrough - Why Traditional Methods Fail */}
        <BreakthroughSection />
        
        {/* 5. Methodology - The Solution */}
        <MethodologySection />
        
        {/* 6. What You Will Learn */}
        <LearningSection />
        
        {/* 7. Authority - Expert Bio */}
        <AuthoritySection />
        
        {/* 8. Social Proof - Testimonials */}
        <TestimonialsSection />
        
        {/* 9. Offer Section */}
        <OfferSection />
        
        {/* 10. Urgency - Countdown Timer */}
        <UrgencySection />
        
        {/* 11. FAQ */}
        <FAQSection />
        
        {/* 12. Map Section */}
        <MapSection />
        
        {/* 13. Final CTA */}
        <FinalCTASection />
        
        {/* Footer */}
        <Footer />
      </main>
      
      {/* Mobile Sticky CTA */}
      <MobileCTA />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </>
  )
}
