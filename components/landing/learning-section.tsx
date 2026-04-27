'use client'

import { motion } from 'framer-motion'
import { Dna, Brain, TrendingUp, Heart, Unlock, Award } from 'lucide-react'

const learningTopics = [
  {
    icon: Dna,
    title: 'Reprogramação Geracional',
    description: 'Identifique e quebre padrões herdados de escassez.',
  },
  {
    icon: Brain,
    title: 'PNL Avançada',
    description: 'Técnicas para reprogramar crenças limitantes.',
  },
  {
    icon: TrendingUp,
    title: 'Inteligência Financeira',
    description: 'Desenvolva uma mentalidade de abundância.',
  },
  {
    icon: Heart,
    title: 'Relacionamentos & Dinheiro',
    description: 'Como suas relações afetam sua vida financeira.',
  },
  {
    icon: Unlock,
    title: 'Libertação de Vícios',
    description: 'Livre-se de comportamentos compulsivos.',
  },
  {
    icon: Award,
    title: 'Autoconfiança e Merecimento',
    description: 'Reprograme sua mente para se sentir digno de receber e manter a riqueza que você deseja.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function LearningSection() {
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
            O que você irá{' '}
            <span className="text-gold-gradient">aprender</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed text-balance">
            Uma transformação completa em todas as áreas que impactam sua prosperidade.
          </p>
        </motion.div>

        {/* Learning Topics Grid - 2x3 on mobile, 3x2 on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
        >
          {learningTopics.map((topic, index) => {
            const Icon = topic.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-4 sm:p-6 rounded-2xl glass border-white/5 hover:border-[#D4AF37]/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-[#D4AF37]" />
                </div>
                
                {/* Content */}
                <h3 className="text-base sm:text-xl lg:text-2xl font-bold mb-1.5 sm:mb-3 text-foreground leading-tight">
                  {topic.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                  {topic.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/3 transition-colors pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
