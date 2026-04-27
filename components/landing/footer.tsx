'use client'

import { Sparkles, Mail, Instagram, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">Imersão</p>
                <p className="text-xs text-[#D4AF37]">Mente Milionária</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A maior imersão de PNL e inteligência financeira do Brasil.
            </p>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Evento</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                Blumenau - SC
              </li>
              <li>26 de Abril de 2025</li>
              <li>Das 9h às 18h</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:contato@imersao.com" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                  <Mail className="w-4 h-4" />
                  contato@imersao.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                  <Instagram className="w-4 h-4" />
                  @imersaomentemilionaria
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Política de Reembolso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Imersão Mente Milionária. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
          </p>
        </div>
      </div>
    </footer>
  )
}
