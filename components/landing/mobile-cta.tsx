'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show after scrolling past hero (approximately viewport height)
    const heroHeight = typeof window !== 'undefined' ? window.innerHeight * 0.8 : 600
    setIsVisible(latest > heroHeight)
  })

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37] via-[#D4AF37]/95 to-[#D4AF37]/90" />
      
      <div className="relative px-4 pb-4 pt-4 safe-area-pb">
        <div className="max-w-lg mx-auto">
          {/* High Contrast Button - Gold bg with black text */}
          <Button
            onClick={scrollToOffer}
            size="lg"
            className="w-full bg-[#0f0f14] hover:bg-[#1a1a24] text-[#D4AF37] font-bold text-lg py-7 rounded-xl transition-all flex items-center justify-center gap-2 shadow-2xl"
          >
            Garantir Minha Vaga
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-center mt-2 text-sm text-[#0f0f14]/80 font-medium">
            Por apenas <span className="text-[#0f0f14] font-bold">R$ 47</span> no Lote 01
          </p>
        </div>
      </div>
    </motion.div>
  )
}
