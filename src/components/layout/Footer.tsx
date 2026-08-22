import Link from 'next/link';
import { CLINIC_INFO } from '@/constants/clinic-info';
import { CONTENT } from '@/constants/content';
import { GLOBAL, SECTION } from '@/design-system/classes';

export function Footer() {
  return (
    <footer id="contato" className={SECTION.footer.wrapper}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Contact Info & Address */}
        <div>
          <h3 className={`${SECTION.footer.columnHeading} mb-4 text-2xl`}>{CLINIC_INFO.name}</h3>
          <p className={`${SECTION.footer.textMuted} mb-2`}>{CONTENT.footer.subtext}</p>
          <address className={`${SECTION.footer.textMuted} text-sm not-italic`}>
            <p>{CLINIC_INFO.address.street}</p>
            <p>{CLINIC_INFO.address.neighborhood}, {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state}</p>
            <p>CEP: {CLINIC_INFO.address.cep}</p>
          </address>
        </div>

        {/* Social Media & Links */}
        <div>
          <h3 className={`${SECTION.footer.columnHeading} mb-4`}>{CONTENT.footer.sections.social}</h3>
          <ul className={`space-y-3 ${SECTION.footer.textMuted}`}>
            <li>
              <a href={CLINIC_INFO.social.instagram.link} target="_blank" rel="noopener noreferrer" className={`${SECTION.footer.link} flex items-center gap-2`} aria-label="Siga-nos no Instagram">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                {CLINIC_INFO.social.instagram.handle}
              </a>
            </li>
            <li>
              <a href={CLINIC_INFO.social.tiktok.link} target="_blank" rel="noopener noreferrer" className={`${SECTION.footer.link} flex items-center gap-2`} aria-label="Siga-nos no TikTok">
                {/* Note: Standard TikTok icon is not in all lucide-react versions, using a placeholder SVG or just text */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
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
          <h3 className={`${SECTION.footer.columnHeading} mb-4`}>{CONTENT.footer.sections.contact}</h3>
          <div className={`${SECTION.footer.qrBox} inline-block`}>
            <img 
              src="/images/qr-code.webp" 
              alt="WhatsApp QR Code" 
              className={`${SECTION.footer.qrInner} w-32 h-32 mb-3 mx-auto object-cover`} 
              loading="lazy" 
              decoding="async" 
            />
            <p className={`${SECTION.footer.textMuted} text-xs font-medium`}>{CONTENT.footer.qrCode.helper}</p>
          </div>
        </div>
      </div>

      <div className={`${SECTION.footer.copyright} max-w-7xl mx-auto px-6 pt-8`}>
        <p>&copy; {new Date().getFullYear()} {CLINIC_INFO.name}. {CONTENT.footer.copyright}</p>
      </div>
    </footer>
  );
}
