'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Clock, Users } from 'lucide-react'

export function UrgencySection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set target date to 15 days from now
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 15)

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeBlocks = [
    { value: timeLeft.days, label: 'Dias' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Seg' },
  ]

  return (
    <section className="relative py-16 lg:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="p-8 sm:p-10 rounded-3xl glass border-[#D4AF37]/20 text-center">
          {/* Timer Icon */}
          <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6">
            <Clock className="w-7 h-7 text-[#D4AF37]" />
          </div>

          {/* Headline */}
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
            O valor promocional encerra em:
          </h3>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-3 sm:gap-6 mb-8">
            {timeBlocks.map((block, index) => (
              <div key={index} className="text-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-2">
                  <span className="text-2xl sm:text-3xl font-bold text-gold-gradient">
                    {String(block.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">
                  {block.label}
                </span>
              </div>
            ))}
          </div>

          {/* Scarcity Message */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4 text-[#D4AF37]" />
            <span>
              Restam apenas <span className="text-[#D4AF37] font-semibold">23 vagas</span> disponíveis
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
