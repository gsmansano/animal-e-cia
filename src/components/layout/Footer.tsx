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
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-3 gap-y-4 items-center md:flex md:flex-row md:justify-between">
        
        {/* 1. Logo (Left on Desktop, Col 1 on Mobile) */}
        <div className="flex justify-start">
          <div className="bg-white p-2 rounded-xl shadow-sm inline-block">
            <img 
              src="/images/logo-mobile.webp" 
              alt="Animal & Cia Logo" 
              className="h-10 md:h-12 w-auto" 
              loading="lazy" 
              decoding="async" 
            />
          </div>
        </div>

        {/* 2. Mobile-Only Socials (Center on Mobile) */}
        <div className="flex justify-center md:hidden">
          <div className="flex items-center gap-4">
            <a href={CLINIC_INFO.social.instagram.link} target="_blank" rel="noopener noreferrer" className={SECTION.footer.link} aria-label="Siga-nos no Instagram">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href={CLINIC_INFO.social.tiktok.link} target="_blank" rel="noopener noreferrer" className={SECTION.footer.link} aria-label="Siga-nos no TikTok">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>

        {/* 3. Desktop-Only Center (Socials + Copyright) */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-4">
            <a href={CLINIC_INFO.social.instagram.link} target="_blank" rel="noopener noreferrer" className={SECTION.footer.link} aria-label="Siga-nos no Instagram">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href={CLINIC_INFO.social.tiktok.link} target="_blank" rel="noopener noreferrer" className={SECTION.footer.link} aria-label="Siga-nos no TikTok">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
          <div className={SECTION.footer.copyright}>
            <p>&copy; {new Date().getFullYear()} {CLINIC_INFO.name}. {CONTENT.footer.copyright}</p>
          </div>
        </div>

        {/* 4. Back to Top (Right on Desktop, Col 3 on Mobile) */}
        <div className="flex justify-end">
          <button 
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-sm font-bold text-white hover:text-white/80 transition-colors group"
            aria-label="Voltar ao topo"
          >
            <span className="hidden md:inline">Voltar ao topo</span>
            <span className="inline md:hidden text-xs">Topo</span>
            <div className="bg-white/20 group-hover:bg-white/40 p-2 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-4 md:h-4">
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </div>
          </button>
        </div>

        {/* 5. Mobile-Only Copyright (Line 2) */}
        <div className="col-span-3 flex md:hidden justify-center text-center text-sm font-medium text-white border-t border-white/20 pt-4 mt-2">
          <p>&copy; {new Date().getFullYear()} {CLINIC_INFO.name}. {CONTENT.footer.copyright}</p>
        </div>

      </div>
    </footer>
  );
}
