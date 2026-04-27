'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FinalCTASection() {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-24 lg:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0a0a10] to-[#0f0f18]" />
      
      {/* Ambient Effects */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass border-[#D4AF37]/20">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm font-medium text-[#D4AF37]">Sua Decisão</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Daqui a um ano, você vai
            <br />
            <span className="text-gold-gradient">desejar ter começado hoje</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Você pode continuar repetindo os mesmos padrões, ou pode escolher 
            transformar sua relação com o dinheiro de uma vez por todas.
          </p>

          <p className="text-foreground font-medium mb-10">
            A abundância que você merece está a uma decisão de distância.
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToOffer}
            size="lg"
            className="bg-[#D4AF37] hover:bg-[#E5C158] text-[#0f0f14] font-bold text-lg px-12 py-7 rounded-xl pulse-gold transition-all hover:scale-105 group"
          >
            Quero Transformar Minha Vida
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="mt-6 text-sm text-muted-foreground">
            Garanta sua vaga antes que esgote
          </p>
        </motion.div>
      </div>
    </section>
  )
}
