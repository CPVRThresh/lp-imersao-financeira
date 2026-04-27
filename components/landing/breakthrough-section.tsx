'use client'

import { motion } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'

const traditionalMethods = [
  'Planilhas e controle de gastos',
  'Cortar cafézinho e pequenos prazeres',
  'Trabalhar mais horas',
  'Cursos de educação financeira',
  'Força de vontade e disciplina',
]

export function BreakthroughSection() {
  return (
    <section className="relative py-24 lg:py-32 px-4 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/30 to-background" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Por que os métodos{' '}
              <span className="text-muted-foreground">tradicionais</span>{' '}
              <span className="text-gold-gradient">não funcionam?</span>
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Você já tentou de tudo: planilhas, cortes, trabalho extra. 
              Mas nada parece funcionar de verdade. E existe uma razão para isso.
            </p>

            {/* Traditional Methods List */}
            <ul className="space-y-4">
              {traditionalMethods.map((method, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <span>{method}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - The Truth */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="p-8 rounded-3xl glass border-[#D4AF37]/10 glow-gold-soft">
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-2xl" />
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 relative z-10">
                A verdade que ninguém te contou
              </h3>
              
              <div className="space-y-6 relative z-10">
                <p className="text-foreground leading-relaxed">
                  <span className="text-[#D4AF37] font-semibold">95% das suas decisões financeiras</span>{' '}
                  são tomadas pelo seu inconsciente — antes mesmo de você pensar conscientemente sobre elas.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Suas crenças sobre dinheiro foram programadas na infância, 
                  através das palavras, atitudes e emoções das pessoas ao seu redor.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Enquanto você não reprogramar esses padrões profundos, 
                  <span className="text-foreground font-medium"> qualquer método externo será apenas um paliativo temporário.</span>
                </p>

                <div className="flex items-center gap-2 text-[#D4AF37] font-medium pt-2">
                  <span>A mudança real começa de dentro para fora</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
