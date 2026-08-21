import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { CLINIC_INFO } from '@/constants/clinic-info';

export function Footer() {
  return (
    <footer id="contato" className="bg-green-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Contact Info & Address */}
        <div>
          <h3 className="font-heading text-2xl font-bold mb-4 text-pink">Animal & Cia</h3>
          <p className="text-slate-300 mb-2">Centro Veterinário</p>
          <address className="text-slate-300 text-sm not-italic">
            <p>{CLINIC_INFO.address.street}</p>
            <p>{CLINIC_INFO.address.neighborhood}, {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state}</p>
            <p>CEP: {CLINIC_INFO.address.cep}</p>
          </address>
        </div>

        {/* Social Media & Links */}
        <div>
          <h3 className="font-heading text-xl font-bold mb-4 text-pink">Redes Sociais</h3>
          <ul className="space-y-3 text-slate-300">
            <li>
              <a href={CLINIC_INFO.social.instagram.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-light transition-colors">
                <Instagram className="w-5 h-5" />
                {CLINIC_INFO.social.instagram.handle}
              </a>
            </li>
            <li>
              <a href={CLINIC_INFO.social.tiktok.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-light transition-colors">
                {/* Note: Standard TikTok icon is not in all lucide-react versions, using a placeholder SVG or just text */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
                {CLINIC_INFO.social.tiktok.handle}
              </a>
            </li>
          </ul>
        </div>

        {/* WhatsApp QR Code Placeholder */}
        <div>
          <h3 className="font-heading text-xl font-bold mb-4 text-pink">Fale Conosco</h3>
          <div className="bg-white/10 p-4 rounded-xl inline-block text-center border border-white/20">
            <div className="w-32 h-32 bg-white/20 mb-3 flex items-center justify-center rounded-lg border-2 border-dashed border-white/40 mx-auto">
              <span className="text-sm font-medium">QR Code</span>
            </div>
            <p className="text-xs text-slate-300 font-medium">Escaneie para WhatsApp</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/20 text-center text-sm text-slate-400">
        <p>&copy; {new Date().getFullYear()} Animal & Cia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
