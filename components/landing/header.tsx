'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const scrollToCTA = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      {/* Full-width backdrop with heavier blur */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-2xl border-b border-white/5" />
      
      {/* Increased vertical padding for more imposing header */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-5 sm:py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - pushed to left edge */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-12 h-12 sm:w-12 sm:h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20">
              <Sparkles className="w-6 h-6 sm:w-6 sm:h-6 text-[#D4AF37]" />
            </div>
            <div>
              <p className="font-bold text-foreground text-base sm:text-base tracking-tight">Imersão</p>
              <p className="text-sm text-[#D4AF37] font-medium">Mente Milionária</p>
            </div>
          </div>

          {/* CTA Button - pushed to right edge */}
          <Button
            onClick={scrollToCTA}
            size="sm"
            className="bg-[#D4AF37] hover:bg-[#E5C158] text-[#0f0f14] font-bold text-base sm:text-base px-5 sm:px-6 py-3 sm:py-3 rounded-lg transition-all hover:scale-105 shadow-lg shadow-[#D4AF37]/20"
          >
            Garantir Vaga
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
