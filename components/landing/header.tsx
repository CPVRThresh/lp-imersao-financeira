'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRef, useState } from 'react'

export function Header() {
  const scrollToCTA = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })
  }

  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  const lastY = useRef(0)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const delta = latest - lastY.current

    const goingDown = delta > 0
    const nearTop = latest < 80

    // 🔽 desceu um pouco → some
    if (latest > 80 && goingDown) {
      setHidden(true)
    }

    // 🔼 só volta se estiver perto do topo
    if (nearTop) {
      setHidden(false)
    }

    lastY.current = latest
  })

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: hidden ? 0 : 1,
        y: hidden ? -120 : 0,
        filter: hidden ? 'blur(6px)' : 'blur(0px)',
        scale: hidden ? 0.98 : 1,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="hidden md:block fixed top-0 left-0 right-0 z-50 w-full"
    >
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-2xl border-b border-white/10" />

      <div className="relative px-6 lg:px-10 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Mente Milionária"
              width={240}
              height={80}
              priority
              className="h-16 w-auto object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.18)]"
            />
          </div>

          {/* CENTER */}
          <div className="text-center leading-tight">
            <p className="text-xs tracking-[0.35em] uppercase text-white/60">
              Transformação mental definitiva
            </p>

            <p className="text-[#D4AF37] font-medium text-base mt-1">
              Reprograme sua mente para um novo nível financeiro
            </p>
          </div>

          {/* CTA */}
          <Button
            onClick={scrollToCTA}
            className="
              bg-[#D4AF37] hover:bg-[#E5C158]
              text-black font-semibold
              px-7 py-3 rounded-full
              transition-all duration-300
              hover:scale-[1.06]
              shadow-[0_0_30px_rgba(212,175,55,0.25)]
            "
          >
            Quero minha vaga
          </Button>

        </div>
      </div>
    </motion.header>
  )
}
