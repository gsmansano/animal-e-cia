"use client";

import { CLINIC_INFO } from '@/constants/clinic-info';
import { CONTENT } from '@/constants/content';
import { SECTION } from '@/design-system/classes';

export function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={SECTION.footer.wrapper}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0 bg-white p-2 rounded-xl shadow-sm">
          <img 
            src="/images/logo-mobile.webp" 
            alt="Animal & Cia Logo" 
            className="h-10 md:h-12 w-auto" 
            loading="lazy" 
            decoding="async" 
          />
        </div>

        {/* Center: Socials & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-4">
            <a href={CLINIC_INFO.social.instagram.link} target="_blank" rel="noopener noreferrer" className={SECTION.footer.link} aria-label="Siga-nos no Instagram">
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
            </a>
            <a href={CLINIC_INFO.social.tiktok.link} target="_blank" rel="noopener noreferrer" className={SECTION.footer.link} aria-label="Siga-nos no TikTok">
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
            </a>
          </div>
          
          <div className={SECTION.footer.copyright}>
            <p>&copy; {new Date().getFullYear()} {CLINIC_INFO.name}. {CONTENT.footer.copyright}</p>
          </div>
        </div>

        {/* Right: Back to Top */}
        <div className="flex-shrink-0">
          <button 
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-sm font-bold text-white hover:text-white/80 transition-colors group"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <div className="bg-white/20 group-hover:bg-white/40 p-2 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
