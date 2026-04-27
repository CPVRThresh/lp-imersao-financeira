'use client'

import { motion } from 'framer-motion'
import { Award, Users, BookOpen, Star, CheckCircle } from 'lucide-react'

const credentials = [
  {
    icon: Award,
    value: '15+',
    label: 'Anos de Experiência',
  },
  {
    icon: Users,
    value: '10.000+',
    label: 'Vidas Transformadas',
  },
  {
    icon: BookOpen,
    value: '3',
    label: 'Best-sellers',
  },
  {
    icon: Star,
    value: '4.9',
    label: 'Avaliação Média',
  },
]

const highlights = [
  'Master em PNL',
  'Especialista em Hipnose',
  'Parceira oficial do Método TES',
  'Certificação Internacional',
]

export function AuthoritySection() {
  return (
    <section className="relative py-16 lg:py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            Conheça sua{' '}
            <span className="text-gold-gradient">mentora</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden glow-gold-soft">
              {/* Placeholder for Expert Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a24] via-[#15151e] to-[#0f0f18]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <Users className="w-16 h-16 text-[#D4AF37]/40" />
                  </div>
                </div>
              </div>
              
              {/* Gold Border Accent */}
              <div className="absolute inset-0 rounded-3xl border-2 border-[#D4AF37]/20" />
              
              {/* Bottom Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 lg:right-4 px-6 py-3 rounded-xl glass border-[#D4AF37]/20 glow-gold-soft">
              <p className="text-sm font-medium text-[#D4AF37]">Especialista em Mindset</p>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-2 text-foreground">
              Angélica Jacinto
            </h3>
            
            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-6">
              {highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20"
                >
                  <CheckCircle className="w-3 h-3" />
                  {highlight}
                </span>
              ))}
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
              <p>
                <span className="text-foreground font-semibold">Angélica Jacinto</span> é 
                Master em PNL e Hipnose, especializada em reprogramação mental e 
                neurociência aplicada à prosperidade financeira.
              </p>
              
              <p>
                Como parceira oficial do <span className="text-[#D4AF37]">Método TES</span>, 
                ela desenvolveu uma metodologia única que combina psicologia profunda, 
                PNL avançada e técnicas de neuroplasticidade para transformar sua relação com o dinheiro.
              </p>
              
              <p>
                Autora de 3 best-sellers sobre mentalidade de abundância, já impactou 
                a vida de mais de <span className="text-foreground font-medium">10.000 pessoas</span> em 
                todo o Brasil através de seus programas presenciais e online.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {credentials.map((cred, index) => {
                const Icon = cred.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="text-center p-4 rounded-xl glass border-[#D4AF37]/10"
                  >
                    <Icon className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{cred.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cred.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
