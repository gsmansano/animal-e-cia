'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '@/constants/clinic-info';
import { CONTENT } from '@/constants/content';
import { GLOBAL, SECTION } from '@/design-system/classes';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
        
        {/* Responsive Logos */}
        <Link href="/" className={SECTION.header.logo}>
          {/* Desktop Logo */}
          <img 
            src="/images/logo-desktop.webp" 
            alt="Animal & Cia Logo" 
            className="hidden md:block w-auto h-20" 
            width="2513"
            height="754"
            loading="eager" 
            fetchPriority="high" 
          />
          {/* Mobile Logo */}
          <img 
            src="/images/logo-mobile.webp" 
            alt="Animal & Cia Logo Mobile" 
            className="block md:hidden w-auto h-16" 
            width="1308"
            height="956"
            loading="eager" 
            fetchPriority="high" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {CONTENT.header.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={SECTION.header.navLink}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`${SECTION.header.mobileMenuBtn} md:hidden`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menu"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* CTA Button - Global */}
        <a
          href={CLINIC_INFO.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${GLOBAL.primaryButton} !inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap`}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden md:inline">Fale com a gente!</span>
        </a>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className={`${SECTION.header.navMobileDrawer} md:hidden absolute top-full left-0 right-0`}>
          <nav className="flex flex-col p-6 gap-4">
            {CONTENT.header.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${SECTION.header.navLink} py-2 text-center`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
