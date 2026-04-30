'use client'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef } from 'react'

const testimonials = [
  {
    name: 'Mariana Costa',
    role: 'Empresária',
    content: 'Em 3 meses meu faturamento triplicou. Mudança interna total que refletiu em tudo na minha vida.',
    rating: 5,
  },
  {
    name: 'Ricardo Santos',
    role: 'Médico',
    content: 'Hoje tenho paz financeira. Antes o dinheiro entrava e sumia sem explicação.',
    rating: 5,
  },
  {
    name: 'Fernanda Lima',
    role: 'Advogada',
    content: 'Foi como reorganizar minha mente por dentro. Mudou tudo no meu comportamento.',
    rating: 5,
  },
  {
    name: 'Carlos Mendes',
    role: 'Engenheiro',
    content: 'Cético no início, transformado no final. Dobrei minha renda em 6 meses.',
    rating: 5,
  },
  {
    name: 'Juliana Freitas',
    role: 'Psicóloga',
    content: 'Profundidade absurda. Não é motivação, é reprogramação real.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const startX = useRef(0)

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length)

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )

  const getIndex = (i: number) =>
    (i + testimonials.length) % testimonials.length

  const prevItem = testimonials[getIndex(index - 1)]
  const current = testimonials[index]
  const nextItem = testimonials[getIndex(index + 1)]

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX
    const diff = startX.current - endX

    if (diff > 50) next()
    if (diff < -50) prev()
  }

  const spring = {
    type: 'spring',
    stiffness: 120,
    damping: 18,
    mass: 0.9,
  }

  return (
    <section className="relative py-16 lg:py-24 px-4 overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Histórias reais de {' '}
          <span className="text-gold-gradient">transformação</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative">

        {/* ARROWS */}
        <div className="hidden md:block">
          <button
            onClick={prev}
            className="absolute -left-10 top-1/2 -translate-y-1/2 z-30
                       w-12 h-12 rounded-full glass border border-white/10
                       flex items-center justify-center hover:border-[#D4AF37]/40 transition"
          >
            <ChevronLeft className="w-5 h-5 text-[#D4AF37]" />
          </button>

          <button
            onClick={next}
            className="absolute -right-10 top-1/2 -translate-y-1/2 z-30
                       w-12 h-12 rounded-full glass border border-white/10
                       flex items-center justify-center hover:border-[#D4AF37]/40 transition"
          >
            <ChevronRight className="w-5 h-5 text-[#D4AF37]" />
          </button>
        </div>

        {/* DESKTOP 3D CAROUSEL */}
        <div
          className="hidden md:flex items-center justify-center relative h-[440px] perspective-[1600px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {/* LEFT */}
          <motion.div
            animate={{
              x: -420,
              scale: 0.78,
              rotateY: 40,
              opacity: 0.25,
              filter: 'blur(0.5px)',
            }}
            transition={spring}
            className="absolute w-[360px] p-6 rounded-2xl glass border border-white/10"
          >
            <p className="text-sm text-muted-foreground">
              “{prevItem.content}”
            </p>
          </motion.div>

          {/* CENTER */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -20 }}
              transition={spring}
              className="w-[460px] p-8 rounded-2xl glass border border-white/15
                         shadow-[0_20px_60px_rgba(0,0,0,0.25)] z-20"
            >
              <Quote className="w-8 h-8 text-[#D4AF37]/30 mb-4" />

              <p className="text-lg mb-6 text-foreground/90 leading-relaxed">
                “{current.content}”
              </p>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{current.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {current.role}
                  </p>
                </div>

                <div className="flex gap-0.5">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT */}
          <motion.div
            animate={{
              x: 420,
              scale: 0.78,
              rotateY: -40,
              opacity: 0.25,
              filter: 'blur(0.5px)',
            }}
            transition={spring}
            className="absolute w-[360px] p-6 rounded-2xl glass border border-white/10"
          >
            <p className="text-sm text-muted-foreground">
              “{nextItem.content}”
            </p>
          </motion.div>

        </div>

        {/* MOBILE */}
        <div
          className="md:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={spring}
              className="p-6 rounded-2xl glass border border-white/10"
            >
              <Quote className="w-6 h-6 text-[#D4AF37]/30 mb-3" />

              <p className="text-base mb-4 text-foreground/90">
                “{current.content}”
              </p>

              <p className="font-semibold">{current.name}</p>
              <p className="text-sm text-muted-foreground">
                {current.role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? 'w-6 bg-[#D4AF37]'
                  : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}