'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5500000000000?text=Olá! Tenho interesse na Imersão Mente Milionária"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-40 group hidden sm:flex"
    >
      <div className="relative flex items-center">
        {/* Label */}
        <div className="absolute right-full mr-3 px-3 py-2 rounded-lg bg-[#25D366] text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Suporte
        </div>
        
        {/* Button */}
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </div>
    </motion.a>
  )
}
