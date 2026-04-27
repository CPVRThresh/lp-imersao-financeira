'use client'

import { motion } from 'framer-motion'
import { Search, Unlock, RefreshCw, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Identificação',
    description: 'Descubra as crenças limitantes que estão programadas no seu inconsciente desde a infância.',
    color: 'from-[#D4AF37]/20 to-[#D4AF37]/5',
  },
  {
    number: '02',
    icon: Unlock,
    title: 'Desbloqueio',
    description: 'Libere as emoções e memórias que mantêm esses padrões ativos em sua vida.',
    color: 'from-[#D4AF37]/25 to-[#D4AF37]/5',
  },
  {
    number: '03',
    icon: RefreshCw,
    title: 'Reprogramação',
    description: 'Instale novas crenças de abundância e prosperidade através de técnicas comprovadas.',
    color: 'from-[#D4AF37]/30 to-[#D4AF37]/5',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Expansão',
    description: 'Integre sua nova mentalidade com ações práticas para resultados tangíveis.',
    color: 'from-[#D4AF37]/35 to-[#D4AF37]/5',
  },
]

export function MethodologySection() {
  return (
    <section className="relative py-24 lg:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            A <span className="text-gold-gradient">Metodologia</span> que{' '}
            <br className="hidden sm:block" />
            transforma de dentro para fora
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Um processo estruturado para reprogramar sua relação com o dinheiro em 4 etapas.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`relative h-full p-8 rounded-3xl bg-gradient-to-br ${step.color} border border-[#D4AF37]/10 overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/30`}>
                  {/* Step Number */}
                  <span className="absolute top-6 right-6 text-6xl font-bold text-[#D4AF37]/10 select-none">
                    {step.number}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Connection Line - Desktop */}
        <div className="hidden md:block relative mt-8">
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-8 bg-gradient-to-b from-[#D4AF37]/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
