'use client'

import { motion } from 'framer-motion'
import { Award, Users, BookOpen, Star } from 'lucide-react'
import Image from 'next/image'

const credentials = [
  { icon: Award, value: '15+', label: 'Anos de Experiência' },
  { icon: Users, value: '1.000+', label: 'Pessoas Impactadas' },
  { icon: BookOpen, value: 'Método', label: 'Próprio Validado' },
  { icon: Star, value: '4.9', label: 'Avaliação Média' },
]

const highlights = [
  'Especialista em PNL',
  'Neurociência Aplicada',
  'Psicologia Comportamental',
  'Desenvolvimento Humano',
]

export function AuthoritySection() {
  return (
    <section className="relative py-16 lg:py-24 px-4 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Quem conduz essa{' '}
            <span className="text-gold-gradient">imersão</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-2 relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">

              <Image
                src="/mentora.webp"
                alt="Ana Santana"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center will-change-transform [transform:translateZ(0)]"
                priority
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

              {/* BORDER */}
              <div className="absolute inset-0 rounded-3xl border border-[#D4AF37]/20" />
            </div>

            {/* BADGE */}
            <div className="absolute -bottom-4 -right-4 px-5 py-2 rounded-xl glass border-[#D4AF37]/20 backdrop-blur-md">
              <p className="text-sm font-medium text-[#D4AF37]">
                PNL & Neurociência Aplicada
              </p>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1.0,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
            className="lg:col-span-3"
          >

            <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Ana Santana
            </h3>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-4 mb-6">
              {highlights.map((h, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20"
                >
                  {h}
                </span>
              ))}
            </div>

            {/* BIO */}
            <div className="space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg">

              <p className="text-foreground/90">
                <span className="text-foreground font-semibold">Ana Santana</span> é especialista em PNL (Programação Neurolinguística) e CEO do Instituto AJS de desenvolvimento humano.
              </p>

              <p>
                Criadora do método <span className="text-[#D4AF37] font-medium">Presença Magnética</span> e sócia da{' '}
                <span className="text-[#D4AF37] font-medium">ALR Company</span>, ao lado de{' '}
                <span className="text-[#D4AF37] font-medium">Anderson Ribeiro</span>.
              </p>

              <p className="text-foreground/90">
                Atua com PNL, neurociência aplicada e psicologia comportamental para reestruturação de padrões internos.
              </p>

              <p>
                Já impactou mais de{' '}
                <span className="text-foreground font-semibold">1.000 pessoas</span>.
              </p>

            </div>

            {/* METRICS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {credentials.map((c, i) => {
                const Icon = c.icon
                return (
                  <div
                    key={i}
                    className="text-center p-4 rounded-xl glass border-[#D4AF37]/10"
                  >
                    <Icon className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-2xl font-bold">{c.value}</p>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                  </div>
                )
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}