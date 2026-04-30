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
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 pt-24 pb-12 lg:pt-32 lg:pb-16">
        
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
          <div className="lg:hidden">
          {/* Lot Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6 pt-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#D4AF37]/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
              </span>

              <span className="text-sm font-semibold text-[#D4AF37] tracking-wide">
                Acesso limitado nesta edição
              </span>
            </div>
          </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold leading-[1.15] tracking-tight mb-5 text-center text-balance pt-1 pb-1"
            >
              <span className="text-gold-gradient block ">
                NÃO É FALTA DE ESFORÇO
              </span>

              <span className="text-foreground block mt-2">
                É UM PADRÃO INVISÍVEL QUE ESTÁ TRAVANDO SUA VIDA
              </span>
            </motion.h1>

            {/* Subheadline (MESMA ESTRUTURA DO DESKTOP) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground text-center max-w-md mx-auto leading-relaxed"
            >
              Você já tentou mudar de estratégia… deu seu máximo, recomeçou várias vezes… mas nada realmente muda.

              <div className="mt-4 text-[#D4AF37] font-medium">
                E quanto mais você tenta, mais parece que está preso num ciclo que se repete.
              </div>

              <div className="mt-4 text-sm sm:text-base text-muted-foreground">
                E é isso que você vai descobrir neste encontro.
              </div>
            </motion.div>

            {/* CTA + VALUE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center gap-4 mt-8"
            >

              <Button
                onClick={scrollToCTA}
                size="lg"
                className="w-full max-w-sm bg-[#D4AF37] hover:bg-[#E5C158] text-[#0f0f14] font-bold text-xl px-10 py-7 rounded-xl pulse-gold transition-all hover:scale-105 shadow-xl shadow-[#D4AF37]/25"
              >
                Quero entender isso melhor
              </Button>

              {/* VALUE BLOCK */}
              <div className="flex flex-col items-center text-center leading-tight">
                <span className="text-lg font-bold text-[#D4AF37] tracking-wide">
                  EVENTO 100% GRATUITO
                </span>
                <span className="text-xs text-muted-foreground opacity-80">
                  Sem custo de participação
                </span>
              </div>

            </motion.div>

            {/* INFO BLOCK (AGORA INCLUÍDO NO MOBILE TAMBÉM) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3 mt-6 text-sm sm:text-base opacity-90"
            >

              <div className="flex items-center gap-2 px-3 py-2 rounded-xl glass border-white/5">
                <span className="text-[#D4AF37] font-semibold">
                  Ao vivo e presencial
                </span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-medium">14 de Maio</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Colombo - PR</span>
              </div>

            </motion.div>

          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:block max-w-4xl lg:max-w-3xl">
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
            <span className="text-sm font-semibold text-[#D4AF37] tracking-wide">
             Acesso limitado nesta edição
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-6xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight mb-8 text-balance"
          >
            <span className="text-gold-gradient block">
              NÃO É FALTA DE ESFORÇO
            </span>

            <span className="text-foreground block mt-2">
              É UM PADRÃO INVISÍVEL QUE ESTÁ TRAVANDO SUA VIDA
            </span>
          </motion.h1>


          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-muted-foreground max-w-xl mb-8 leading-relaxed text-balance"
          >
            Você já tentou mudar de estratégia…  
            <br />
            Deu seu máximo, recomeçou várias vezes…  
            <br />
            Mas nada realmente muda.

            <div className="mt-4 text-[#D4AF37] font-medium">
              E quanto mais você tenta, mais parece que está preso num ciclo que se repete.
            </div>

            <div className="mt-4 text-base lg:text-lg text-muted-foreground">
              E é isso que você vai descobrir neste encontro.
            </div>
          </motion.div>

          {/* CTA + VALUE SIDE BY SIDE (FOCO PRINCIPAL) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-5"
          >

            {/* BOTÃO + VALOR */}
            <div className="flex items-center gap-6">

              <Button
                onClick={scrollToCTA}
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#E5C158] text-[#0f0f14] font-bold text-lg px-10 py-7 rounded-xl pulse-gold transition-all hover:scale-105 shadow-xl shadow-[#D4AF37]/25"
              >
                Quero entender isso melhor
              </Button>

              {/* VALUE BLOCK AO LADO */}
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-[#D4AF37] tracking-wide">
                  EVENTO 100% GRATUITO
                </span>
                <span className="text-sm text-muted-foreground">
                  Sem custo de participação
                </span>
              </div>

            </div>

            {/* INFO BLOCK ABAIXO */}
            <div className="flex items-center gap-6 mt-3 opacity-90">

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass border-white/5">
                <span className="text-[#D4AF37] font-semibold">
                  Ao vivo e presencial
                </span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-5 h-5 text-[#D4AF37]" />
                <span className="font-medium">14 de Maio</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <span>Colombo - PR</span>
              </div>

            </div>

          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
