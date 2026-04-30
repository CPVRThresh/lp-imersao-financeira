'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const traditionalMethods = [
  'Controlar gastos e organizar planilhas.',
  'Cortar pequenos prazeres do dia a dia.',
  'Trabalhar mais horas tentando compensar.',
  'Buscar mais conhecimento financeiro.',
  'E ainda assim tentar manter disciplina.',
]

export function BreakthroughSection() {
  return (
    <section className="relative py-24 lg:py-32 px-4 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/30 to-background" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="opacity-80"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Por que os métodos{' '}
              <span className="text-muted-foreground">tradicionais</span>{' '}
              <span className="text-gold-gradient">não funcionam?</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Você muda a estratégia, tenta ser mais disciplinado, ajusta o que está ao seu alcance…
              mas os resultados continuam girando em torno do mesmo ponto.
            </p>

            {/* MICRO COPY */}
            <p className="text-foreground mb-6">
              Em algum momento, você já tentou coisas como:
            </p>

            {/* LISTA */}
            <ul className="space-y-4">
              {traditionalMethods.map((method, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-3 text-foreground/90"
                >
                  {/* DOT NEUTRO */}
          <div className="w-6 h-6 rounded-full bg-[#D4AF37]/50 flex items-center justify-center flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]/90" />
          </div>

                  <span>{method}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="p-8 rounded-3xl glass border-[#D4AF37]/10 glow-gold-soft">
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-2xl" />
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 relative z-10">
                Mas o que realmente está por trás dos seus resultados
              </h3>
              
              <div className="space-y-6 relative z-10">
                
                <p className="text-foreground leading-relaxed">
                  A maior parte das suas decisões financeiras acontece sem que você perceba.
                </p>

                <p className="text-foreground leading-relaxed">
                  <span className="text-[#D4AF37] font-semibold">Antes mesmo disso,</span>{' '}
                  sua mente já segue padrões construídos ao longo da sua vida.
                </p>

                <p className="text-foreground/80 leading-relaxed">
                  Esses padrões foram moldados por experiências, referências e interpretações que você carrega há anos.
                </p>

                <p className="text-foreground/80 leading-relaxed">
                  E enquanto isso continuar no automático,
                  <span className="text-foreground font-medium">
                    {' '}qualquer mudança externa tende a voltar ao mesmo ponto.
                  </span>
                </p>

                <div className="flex items-center gap-2 text-[#D4AF37] font-medium pt-2">
                  <span>Não é sobre fazer mais — é aqui que a mudança começa a acontecer.</span>
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