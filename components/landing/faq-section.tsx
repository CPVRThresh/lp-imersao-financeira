'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Para quem é esta imersão?',
    answer: 'A Imersão Mente Milionária é para qualquer pessoa que sente que existe algo a impedindo de alcançar a prosperidade financeira que deseja. Seja você empresário, profissional liberal, CLT ou autônomo, se você quer transformar sua relação com o dinheiro, este evento é para você.',
  },
  {
    question: 'Preciso ter conhecimento prévio em PNL?',
    answer: 'Não! A imersão foi desenvolvida para todos os níveis. Você vai aprender desde os fundamentos até técnicas avançadas de reprogramação mental, tudo de forma prática e aplicável.',
  },
  {
    question: 'Qual é o horário do evento?',
    answer: 'O evento acontecerá no dia 26/04, das 9h às 18h, em Blumenau - SC. Inclui coffee break premium e todos os materiais necessários.',
  },
  {
    question: 'Como funciona a garantia?',
    answer: 'Oferecemos garantia incondicional de 100%. Se por qualquer motivo você não ficar satisfeito com a imersão, basta solicitar o reembolso e devolveremos integralmente seu investimento, sem perguntas.',
  },
  {
    question: 'Receberei certificado?',
    answer: 'Sim! Ao final da imersão você receberá um Certificado Digital de 6 horas em PNL, válido para comprovação de horas complementares e desenvolvimento profissional.',
  },
  {
    question: 'Posso parcelar o pagamento?',
    answer: 'O valor do Lote 01 (R$ 47) é exclusivo para pagamento à vista. Esta é uma condição especial de lançamento que estará disponível apenas por tempo limitado.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-16 lg:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-5">
            <HelpCircle className="w-7 h-7 text-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
            Perguntas{' '}
            <span className="text-gold-gradient">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl">
            Tire suas dúvidas sobre a imersão.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 rounded-2xl glass border-white/5 hover:border-[#D4AF37]/20 transition-all text-left group"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bold text-foreground group-hover:text-[#D4AF37] transition-colors text-base sm:text-lg">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180 text-[#D4AF37]' : ''
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
