'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const scrollToCTA = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f18] to-[#0a0a0f]" />
      
      {/* Desktop - Mentor Image as Background Right Side */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-3/5 h-full">
          <div className="relative w-full h-full bg-gradient-to-l from-[#D4AF37]/5 via-transparent to-transparent">
            <div className="absolute inset-0 flex items-center justify-end pr-20">
              <div className="relative w-[32rem] h-[40rem] opacity-30">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#1a1a28] to-[#0f0f18] flex items-center justify-center border border-[#D4AF37]/10">
                  <Users className="w-32 h-32 text-[#D4AF37]/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-[#D4AF37]/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 pt-24 pb-12 lg:pt-32 lg:pb-40">
        
        {/* MOBILE LAYOUT - Nome/Cargo ACIMA da imagem */}
        <div className="lg:hidden">
          {/* Mentor Name/Role - ABOVE the photo on mobile */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4"
          >
            <p className="text-[#D4AF37] font-bold text-xl tracking-wide">Especialista em Mindset</p>
            <p className="text-muted-foreground text-lg font-medium">Angélica Jacinto</p>
          </motion.div>

          {/* Mentor Photo - Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-6"
          >
            <div className="relative w-full max-w-xs mx-auto aspect-[3/4] rounded-3xl overflow-hidden">
              {/* Soft glow behind */}
              <div className="absolute -inset-2 bg-[#D4AF37]/15 rounded-3xl blur-2xl" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#1a1a28] to-[#0f0f18] border border-[#D4AF37]/20 flex items-center justify-center overflow-hidden">
                <Users className="w-20 h-20 text-[#D4AF37]/30" />
              </div>
            </div>
          </motion.div>

          {/* Title - Mobile (fonts increased 20%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-5"
          >
            {/* Lot Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full glass border-[#D4AF37]/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
              </span>
              <span className="text-base font-semibold text-[#D4AF37]">LOTE 01 - Vagas Limitadas</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight mb-4 text-balance">
              <span className="text-gold-gradient">GARANTA SEU INGRESSO</span>
              <br />
              <span className="text-foreground">NO LOTE 01</span>
            </h1>
          </motion.div>

          {/* Subheadline - Mobile (fonts increased 20%) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground text-center max-w-md mx-auto mb-5 leading-relaxed text-balance"
          >
            1 dia para você se libertar de todas as feridas emocionais e travas que te impedem de ter uma vida próspera e feliz...
          </motion.p>

          {/* Event Info - Mobile (fonts increased 20%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-6 text-base"
          >
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl glass border-white/5">
              <span className="text-[#D4AF37] font-semibold">Ao vivo</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-medium">26/04 às 9h</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Blumenau - SC</span>
            </div>
          </motion.div>

          {/* CTA - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            <Button
              onClick={scrollToCTA}
              size="lg"
              className="w-full max-w-sm bg-[#D4AF37] hover:bg-[#E5C158] text-[#0f0f14] font-bold text-xl px-10 py-7 rounded-xl pulse-gold transition-all hover:scale-105 shadow-xl shadow-[#D4AF37]/25"
            >
              Garantir vaga agora
            </Button>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-base">Por apenas</span>
              <span className="text-3xl font-bold text-[#D4AF37]">R$ 47</span>
            </div>
          </motion.div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:block max-w-3xl lg:max-w-2xl">
          {/* Lot Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass border-[#D4AF37]/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            <span className="text-sm font-semibold text-[#D4AF37]">LOTE 01 - Vagas Limitadas</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 text-balance"
          >
            <span className="text-gold-gradient">GARANTA SEU INGRESSO</span>
            <br />
            <span className="text-foreground">NO LOTE 01</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-muted-foreground max-w-xl mb-8 leading-relaxed text-balance"
          >
            1 dia para você se libertar de todas as feridas emocionais e travas que te impedem de ter uma vida próspera e feliz...
          </motion.p>

          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 mb-8 text-lg"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass border-white/5">
              <span className="text-[#D4AF37] font-semibold">Ao vivo e presencial</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5 text-[#D4AF37]" />
              <span className="font-medium">26/04 às 9h</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
              <span>Blumenau - SC</span>
            </div>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-start gap-4"
          >
            <Button
              onClick={scrollToCTA}
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#E5C158] text-[#0f0f14] font-bold text-lg px-10 py-7 rounded-xl pulse-gold transition-all hover:scale-105 shadow-xl shadow-[#D4AF37]/25"
            >
              Garantir vaga agora
            </Button>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm">Por apenas</span>
              <span className="text-2xl font-bold text-[#D4AF37]">R$ 47</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
