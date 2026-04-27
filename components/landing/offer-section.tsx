'use client'

import { motion } from 'framer-motion'
import { Check, Gift, Shield, Award, RefreshCcw, Lock, CreditCard, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const included = [
  'Acesso presencial à imersão completa',
  'Certificado Digital (6h de PNL)',
  'Estratégias de Faturamento Exclusivas',
  'Coffee break premium incluso',
]

const bonuses = [
  {
    title: 'Workbook de Reprogramação',
    description: 'Material exclusivo para continuar o trabalho em casa',
  },
  {
    title: 'Meditações Guiadas',
    description: '5 áudios para reprogramação do inconsciente',
  },
  {
    title: 'Grupo VIP no Telegram',
    description: 'Acesso por 30 dias para suporte contínuo',
  },
  {
    title: 'Sessão de Integração Online',
    description: 'Encontro ao vivo 7 dias após o evento',
  },
]

export function OfferSection() {
  return (
    <section id="oferta" className="relative py-14 lg:py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0f0f18] to-background" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-balance">
            Garanta sua vaga no{' '}
            <span className="text-gold-gradient">Lote 01</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed text-balance">
            Aproveite a melhor condição de pagamento antes que acabe.
          </p>
        </motion.div>

        {/* Scarcity Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-md mx-auto mb-10"
        >
          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="text-muted-foreground">Vagas preenchidas</span>
            <span className="text-[#D4AF37] font-semibold">89%</span>
          </div>
          <div className="h-3 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '89%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E5C158] rounded-full"
            />
          </div>
          <p className="text-center mt-2 text-sm text-muted-foreground">
            Restam poucas vagas para o Lote 01
          </p>
        </motion.div>

        {/* Pricing Cards - Grid 2 Columns */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          
          {/* LOTE 01 - Active Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-full p-6 sm:p-8 rounded-3xl glass border-[#D4AF37]/30 glow-gold overflow-hidden">
              {/* Badge */}
              <div className="absolute top-0 right-0 px-4 py-2 bg-[#D4AF37] text-[#0f0f14] text-sm font-bold rounded-bl-2xl">
                LOTE 01
              </div>

              {/* What's Included */}
              <div className="mb-6 mt-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                  O que está incluso:
                </h3>
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                      className="flex items-center gap-3 text-muted-foreground text-base"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#D4AF37]" />
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Bonuses */}
              <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#D4AF37]/5 border border-[#D4AF37]/20">
                <div className="flex items-center gap-2 mb-3">
                  <Gift className="w-5 h-5 text-[#D4AF37]" />
                  <h3 className="text-base font-semibold text-[#D4AF37]">
                    Bônus Exclusivos
                  </h3>
                </div>
                <ul className="grid gap-3">
                  {bonuses.map((bonus, index) => (
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                      className="flex items-start gap-2"
                    >
                      <Check className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{bonus.title}</p>
                        <p className="text-xs text-muted-foreground">{bonus.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-lg text-muted-foreground line-through">
                    R$ 297
                  </span>
                  <span className="px-3 py-1 text-sm font-medium bg-emerald-500/20 text-emerald-400 rounded-full">
                    -84%
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-base text-muted-foreground">por apenas</span>
                </div>
                <div className="flex items-baseline justify-center gap-1 mt-2">
                  <span className="text-xl text-[#D4AF37]">R$</span>
                  <span className="text-5xl sm:text-6xl font-bold text-gold-gradient">
                    47
                  </span>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  Pagamento único - sem mensalidades
                </p>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full bg-[#D4AF37] hover:bg-[#E5C158] text-[#0f0f14] font-bold text-lg py-6 sm:py-7 rounded-xl pulse-gold transition-all hover:scale-[1.02] shadow-xl shadow-[#D4AF37]/25"
              >
                Garantir Minha Vaga por R$ 47
              </Button>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-5 pt-5 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>Compra Segura</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>SSL Criptografado</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CreditCard className="w-4 h-4 text-emerald-400" />
                  <span>Checkout Seguro</span>
                </div>
              </div>

              {/* Guarantee */}
              <div className="mt-5 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <RefreshCcw className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Garantia Incondicional de 100%</p>
                    <p className="text-xs text-muted-foreground">Se não gostar, devolvemos seu dinheiro.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* LOTE 02 - Locked/Loading Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative h-full p-6 sm:p-8 rounded-3xl bg-[#1a1a24]/50 border border-white/5 overflow-hidden opacity-60">
              {/* Badge */}
              <div className="absolute top-0 right-0 px-4 py-2 bg-[#3a3a4a] text-[#8a8a9a] text-sm font-bold rounded-bl-2xl">
                LOTE 02
              </div>

              {/* Locked State Content */}
              <div className="flex flex-col items-center justify-center h-full min-h-[500px] py-10">
                {/* Lock Icon */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-[#3a3a4a]/20 rounded-full blur-2xl scale-150" />
                  <div className="relative w-24 h-24 rounded-full bg-[#2a2a34] flex items-center justify-center border border-white/10">
                    <Lock className="w-10 h-10 text-[#5a5a6a]" />
                  </div>
                </div>

                {/* Loading Animation */}
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-5 h-5 text-[#5a5a6a] animate-pulse" />
                  <span className="text-lg font-semibold text-[#5a5a6a]">Em Breve</span>
                </div>

                {/* Message */}
                <p className="text-center text-[#6a6a7a] text-base max-w-xs leading-relaxed">
                  Vagas bloqueadas até o fim do Lote 01
                </p>

                {/* Future Price Hint */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-[#5a5a6a]">Valor previsto</p>
                  <div className="flex items-baseline justify-center gap-1 mt-1">
                    <span className="text-lg text-[#5a5a6a]">R$</span>
                    <span className="text-4xl font-bold text-[#5a5a6a]">97</span>
                  </div>
                </div>

                {/* Loading Dots */}
                <div className="flex items-center gap-2 mt-8">
                  <span className="w-2 h-2 rounded-full bg-[#4a4a5a] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-[#4a4a5a] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-[#4a4a5a] animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>

                {/* Disabled Button */}
                <Button
                  size="lg"
                  disabled
                  className="w-full mt-8 bg-[#2a2a34] text-[#5a5a6a] font-bold text-base py-6 rounded-xl cursor-not-allowed border border-white/5"
                >
                  Aguardando liberação
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
