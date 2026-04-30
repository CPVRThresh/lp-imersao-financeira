'use client'

import { motion } from 'framer-motion'
import { Check, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'

const objectives = [
  { text: 'Por que certos padrões continuam se repetindo, mesmo quando você muda sua estratégia.' },
  { text: 'Como decisões que parecem racionais, são guiadas por estruturas mais profundas.' },
  { text: 'O impacto da forma como você interpreta resultados e como isso influencia seus próximos movimentos.' },
  { text: 'E o ponto onde tudo isso se torna visível, mudando não só suas escolhas, mas a forma como você enxerga sua própria trajetória.' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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
    document.getElementById('oferta')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative py-10 lg:py-16 px-4 overflow-hidden -mt-6 lg:-mt-12">
      {/* ambient */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* LEFT - ANTIGO IDÊNTICO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 leading-tight text-balance">
              O que é a{' '}
              <span className="text-gold-gradient">Imersão Mente Milionária</span>{' '}
              na prática?
            </h2>

            {/* BRIDGE COPY */}
            <div className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-5 leading-relaxed text-balance space-y-3">
              <p>A Imersão Mente Milionária não é um evento motivacional.</p>
              <p>
                Ela revela o que normalmente passa{' '}
                <span className="text-foreground font-medium">despercebido:</span>{' '}
                os padrões internos que moldam suas decisões e resultados.
              </p>
            </div>

            {/* OBJECTIVES */}
            <div className="mb-4 lg:mb-5">
              <p className="text-foreground/90 font-bold mb-4 text-lg lg:text-xl">
                Durante o encontro, você começa a perceber:
              </p>

              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3 lg:space-y-3"
              >
                {objectives.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-[#D4AF37]" />
                    </div>

                    <div className="text-base sm:text-lg lg:text-lg leading-relaxed text-foreground/90">
                      <p>{item.text}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* CTA */}
            <Button
              onClick={scrollToCTA}
              size="lg"
              className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#E5C158] text-[#0f0f14] font-bold text-lg sm:text-xl px-10 py-7 rounded-xl transition-all hover:scale-105 shadow-xl shadow-[#D4AF37]/25 mt-2 lg:mt-3"
            >
              Quero enxergar isso na prática
            </Button>
          </motion.div>

          {/* RIGHT - ATUALIZADO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -inset-6 bg-[#D4AF37]/5 rounded-full blur-3xl" />

            <div className="relative aspect-square flex items-center justify-center">
              {/* GRID */}
              <div className="absolute inset-0 opacity-[0.08] rounded-full">
                <div className="w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:18px_18px]" />
              </div>

              {/* RINGS responsivo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[180px] sm:w-[460px] h-[180px] sm:h-[460px] rounded-full border border-[#D4AF37]/10" />
                <div className="absolute w-[120px] sm:w-[320px] h-[120px] sm:h-[320px] rounded-full border border-[#D4AF37]/10" />
                <div className="absolute w-[80px] sm:w-[180px] h-[80px] sm:h-[180px] rounded-full border border-[#D4AF37]/15" />
              </div>

              {/* MOBILE RINGS */}
              <div className="absolute inset-0 flex lg:hidden items-center justify-center z-10 pointer-events-none">
                {[140, 200, 260, 320].map((size, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-[#D4AF37]/10"
                    style={{ width: `${size}px`, height: `${size}px` }}
                  />
                ))}
              </div>

              {/* CÉREBRO */}
              <div className="relative z-30">
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-32 sm:w-52 h-32 sm:h-52 flex items-center justify-center rounded-full bg-black/40 border border-[#D4AF37]/25"
                >
                  <Brain className="w-14 sm:w-20 h-14 sm:h-20 text-[#D4AF37]" />
                </motion.div>
              </div>

              {/* NODES DESKTOP */}
              <div className="absolute inset-0 hidden lg:block z-20 pointer-events-none">
                {[
                  'Padrões inconscientes',
                  'Decisões automáticas',
                  'Estrutura mental',
                  'Interpretação da realidade',
                  'Repetição de ciclos',
                  'Consciência estratégica',
                ].map((text, i) => {
                  const angle = (i / 6) * Math.PI * 2
                  const radius = 205

                  const x = Number((Math.cos(angle) * radius).toFixed(3))
                  const y = Number((Math.sin(angle) * radius).toFixed(3))

                  return (
                    <div
                      key={i}
                      className="absolute left-1/2 top-1/2"
                      style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                    >
                      <div className="px-3 py-2 bg-black/40 backdrop-blur-xl border border-[#D4AF37]/15 rounded-lg max-w-[150px] text-center overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent"
                          animate={{ x: ['-120%', '120%'] }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.25 }}
                        />
                        <span className="text-[15px] text-[#D4AF37] relative z-10">{text}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* MOBILE NODES */}
              <div className="absolute inset-0 flex lg:hidden z-20 pointer-events-none">
                {[
                  'Padrões inconscientes',
                  'Decisões automáticas',
                  'Estrutura mental',
                  'Interpretação da realidade',
                  'Repetição de ciclos',
                  'Consciência estratégica',
                ].map((text, i) => {
                  const angle = (i / 6) * Math.PI * 2
                  const radius = 130
                  const x = Number((Math.cos(angle) * radius).toFixed(3))
                  const y = Number((Math.sin(angle) * radius).toFixed(3))
                  return (
                    <div
                      key={i}
                      className="absolute left-1/2 top-1/2"
                      style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                    >
                      <div className="px-2 py-1 bg-black/40 backdrop-blur-xl border border-[#D4AF37]/15 rounded-md max-w-[110px] text-center overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent"
                          animate={{ x: ['-120%', '120%'] }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.25 }}
                        />
                        <span className="text-[12px] text-[#D4AF37] relative z-10">{text}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}