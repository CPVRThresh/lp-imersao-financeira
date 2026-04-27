'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function MapSection() {
  return (
    <section className="relative py-24 lg:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Local do{' '}
              <span className="text-gold-gradient">Evento</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Blumenau - Santa Catarina
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    Endereço completo será enviado após a inscrição
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Data</h3>
                  <p className="text-muted-foreground">
                    26 de Abril de 2025
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    Sábado
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horário</h3>
                  <p className="text-muted-foreground">
                    Das 9h às 18h
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    Credenciamento a partir das 8h30
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="mt-8 border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Ver no Google Maps
            </Button>
          </motion.div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass border-[#D4AF37]/10 glow-gold-soft">
              {/* Dark themed map placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a24] via-[#15151e] to-[#0f0f18]">
                {/* Grid pattern for map effect */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />
                
                {/* Center marker */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center animate-pulse">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/30 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                    </div>
                    {/* Location label */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <div className="px-4 py-2 rounded-lg glass border-[#D4AF37]/20">
                        <p className="text-sm font-medium text-[#D4AF37]">Blumenau - SC</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative circles */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-[#D4AF37]/10" />
                <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full border border-[#D4AF37]/5" />
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-[#D4AF37]/3" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
