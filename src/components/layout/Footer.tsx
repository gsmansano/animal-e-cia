import Link from 'next/link';
import { CLINIC_INFO } from '@/constants/clinic-info';
import { GLOBAL, SECTION } from '@/design-system/classes';

export function Footer() {
  return (
    <footer id="contato" className={SECTION.footer.wrapper}>
      <div className={SECTION.footer.innerGrid}>
        {/* Contact Info & Address */}
        <div>
          <h3 className={`${SECTION.footer.columnHeading} text-2xl`}>Animal & Cia</h3>
          <p className={`${SECTION.footer.textMuted} mb-2`}>Centro Veterinário</p>
          <address className={`${SECTION.footer.textMuted} text-sm not-italic`}>
            <p>{CLINIC_INFO.address.street}</p>
            <p>{CLINIC_INFO.address.neighborhood}, {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state}</p>
            <p>CEP: {CLINIC_INFO.address.cep}</p>
          </address>
        </div>

        {/* Social Media & Links */}
        <div>
          <h3 className={SECTION.footer.columnHeading}>Redes Sociais</h3>
          <ul className={`space-y-3 ${SECTION.footer.textMuted}`}>
            <li>
              <a href={CLINIC_INFO.social.instagram.link} target="_blank" rel="noopener noreferrer" className={SECTION.footer.link}>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                {CLINIC_INFO.social.instagram.handle}
              </a>
            </li>
            <li>
              <a href={CLINIC_INFO.social.tiktok.link} target="_blank" rel="noopener noreferrer" className={SECTION.footer.link}>
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
          <h3 className={SECTION.footer.columnHeading}>Fale Conosco</h3>
          <div className={SECTION.footer.qrBox}>
            <div className={SECTION.footer.qrInner}>
              <span className="text-sm font-medium">QR Code</span>
            </div>
            <p className={`${SECTION.footer.textMuted} text-xs font-medium`}>Escaneie para WhatsApp</p>
          </div>
        </div>
      </div>

      <div className={SECTION.footer.copyright}>
        <p>&copy; {new Date().getFullYear()} Animal & Cia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
