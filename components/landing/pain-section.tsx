'use client'

import { motion } from 'framer-motion'
import { TrendingDown, Brain, Repeat, Lock, AlertCircle, Wallet } from 'lucide-react'

const painPoints = [
  {
    icon: TrendingDown,
    title: 'Ciclos de Escassez',
    description: 'Você trabalha muito, mas o dinheiro nunca parece ser suficiente.',
  },
  {
    icon: Brain,
    title: 'Pensamentos Limitantes',
    description: 'Frases como "dinheiro não cresce em árvores" ainda ecoam na sua mente.',
  },
  {
    icon: Repeat,
    title: 'Padrões Repetitivos',
    description: 'Você até consegue juntar dinheiro… mas algo sempre acontece e te faz voltar ao mesmo ponto.',
  },
  {
    icon: Lock,
    title: 'Bloqueios Invisíveis',
    description: 'Existe uma sensação de limite que te impede de avançar, mesmo sem um motivo claro.',
  },
  {
    icon: AlertCircle,
    title: 'Ansiedade Financeira',
    description: 'Pensar em dinheiro traz desconforto, pressão ou até medo.',
  },
  {
    icon: Wallet,
    title: 'Autossabotagem',
    description: 'Você sabe o que fazer, mas manter consistência se torna o maior desafio.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export function PainSection() {
  return (
    <section className="relative py-12 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-balance">
            Você se <span className="text-gold-gradient">reconhece</span> em alguma{' '}
            dessas situações do seu dia a dia?
          </h2>
        </motion.div>

        {/* Pain Points Grid - 2x3 on mobile, 3x2 on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
        >
          {painPoints.map((pain, index) => {
            const Icon = pain.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-4 sm:p-6 rounded-2xl glass border-white/5 hover:border-[#D4AF37]/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                </div>
                
                {/* Content - Fonts increased 20% for mobile */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 text-foreground leading-tight">
                  {pain.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {pain.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/3 transition-colors pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Transition Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 sm:mt-14 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance"
        >
        <span className="text-foreground">
          talvez o problema não esteja no que você faz…
        </span>{' '}
        <span className="text-[#D4AF37] font-semibold">
          mas na forma como você foi condicionado a fazer.
        </span>
        </motion.p>
      </div>
    </section>
  )
}
