'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Mariana Costa',
    role: 'Empresária',
    content: 'Em 3 meses após o evento, meu faturamento triplicou. Não porque aprendi técnicas novas de vendas, mas porque finalmente me permiti receber abundância.',
    rating: 5,
  },
  {
    name: 'Ricardo Santos',
    role: 'Médico',
    content: 'Sempre ganhei bem, mas o dinheiro escorria pelas mãos. Descobri que tinha uma crença de que não merecia prosperar. Hoje tenho paz financeira.',
    rating: 5,
  },
  {
    name: 'Fernanda Lima',
    role: 'Advogada',
    content: 'Chorei muito durante o processo. Eram dores que eu nem sabia que carregava. Sair de lá foi como renascer com uma nova relação com o dinheiro.',
    rating: 5,
  },
  {
    name: 'Carlos Mendes',
    role: 'Engenheiro',
    content: 'Cético no início, transformado no final. A metodologia é baseada em ciência e os resultados são reais. Dobrei minha renda em 6 meses.',
    rating: 5,
  },
  {
    name: 'Juliana Freitas',
    role: 'Psicóloga',
    content: 'Como profissional da área, fiquei impressionada com a profundidade do trabalho. Indico para todos os meus pacientes.',
    rating: 5,
  },
  {
    name: 'André Oliveira',
    role: 'Empresário',
    content: 'Participei há 2 anos e até hoje colho os frutos. Foi o melhor investimento que já fiz em mim mesmo. Minha empresa cresceu 400%.',
    rating: 5,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function TestimonialsSection() {
  return (
    <section className="relative py-16 lg:py-24 px-4 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 lg:mb-14"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-balance">
          O que dizem os{' '}
          <span className="text-gold-gradient">transformados</span>
        </h2>
        <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed text-balance">
          Histórias reais de pessoas que libertaram seu potencial financeiro.
        </p>
      </motion.div>

      {/* Grid 2x3 on mobile (2 columns), 3 columns on desktop */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="h-full"
          >
            <div className="h-full p-4 sm:p-5 lg:p-6 rounded-2xl glass border-white/5 hover:border-[#D4AF37]/20 transition-colors">
              {/* Quote Icon */}
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37]/30 mb-3 sm:mb-4" />
              
              {/* Content - Truncated on mobile for compact view */}
              <p className="text-foreground/90 text-sm sm:text-base leading-relaxed mb-4 line-clamp-4 sm:line-clamp-none">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              {/* Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
                
                {/* Rating */}
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
