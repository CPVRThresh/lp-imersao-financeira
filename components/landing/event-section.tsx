'use client'

import { motion } from 'framer-motion'
import { Check, Brain, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const objectives = [
  'Identificar e superar as cinco feridas emocionais.',
  'Aplicar técnicas de PNL para reprogramar padrões mentais.',
  'Desenvolver inteligência financeira para segurança e independência.',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

export function EventSection() {
  const scrollToCTA = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-10 lg:py-16 px-4 overflow-hidden -mt-8 lg:-mt-16">
      {/* Ambient Light */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            {/* Section Title - Increased font weight */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 leading-tight text-balance">
              O que será esse{' '}
              <span className="text-gold-gradient">evento?</span>
            </h2>
            
            {/* Description - Increased font size for mobile */}
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed text-balance">
              O evento <span className="text-foreground font-semibold">&quot;Imersão Mente Milionária&quot;</span> é uma oportunidade de um dia para ajudar os participantes a superar bloqueios emocionais e alcançar abundância financeira e emocional.
            </p>
            
            {/* Objectives List - Staggered animations */}
            <div className="mb-6">
              <p className="text-foreground font-bold mb-4 text-lg lg:text-xl">
                Nesse evento, teremos como objetivo:
              </p>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {objectives.map((objective, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <span className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed">
                      {objective}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            {/* CTA Button */}
            <Button
              onClick={scrollToCTA}
              size="lg"
              className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#E5C158] text-[#0f0f14] font-bold text-lg sm:text-xl px-10 py-7 rounded-xl transition-all hover:scale-105 shadow-xl shadow-[#D4AF37]/25"
            >
              Garantir vaga agora
            </Button>
          </motion.div>
          
          {/* Right Column - Thematic Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            {/* Soft Glow */}
            <div className="absolute -inset-4 bg-[#D4AF37]/10 rounded-[2.5rem] blur-2xl" />
            
            {/* Image Container */}
            <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden glass glow-gold-soft border border-[#D4AF37]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a24] to-[#0f0f18] flex items-center justify-center">
                {/* Decorative Elements */}
                <div className="relative w-full h-full p-8 flex items-center justify-center">
                  {/* Central Icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-3xl scale-150" />
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center border border-[#D4AF37]/30">
                      <Brain className="w-20 h-20 sm:w-24 sm:h-24 text-[#D4AF37]" />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-12 right-12 w-16 h-16 rounded-2xl glass border-[#D4AF37]/20 flex items-center justify-center"
                  >
                    <Sparkles className="w-8 h-8 text-[#D4AF37]" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-16 left-8 px-4 py-2 rounded-xl glass border-[#D4AF37]/20"
                  >
                    <span className="text-sm font-semibold text-[#D4AF37]">Mente Milionária</span>
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [-5, 15, -5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-12 w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
