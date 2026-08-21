'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CLINIC_INFO } from '@/constants/clinic-info';
import { CONTENT } from '@/constants/content';
import { GLOBAL, SECTION } from '@/design-system/classes';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${SECTION.header.wrapper.base} ${
        isScrolled ? SECTION.header.wrapper.scrolled : SECTION.header.wrapper.transparent
      }`}
    >
      <div className={SECTION.header.innerContainer}>
        {/* Logo */}
        <Link href="/" className={SECTION.header.logo}>
          {CLINIC_INFO.name}
        </Link>

        {/* Desktop Nav */}
        <nav className={SECTION.header.navDesktop}>
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

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href={CLINIC_INFO.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className={GLOBAL.primaryButton}
          >
            {CONTENT.header.cta}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={SECTION.header.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className={SECTION.header.navMobileDrawer}>
          <nav className={SECTION.header.navMobileContainer}>
            {CONTENT.header.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${SECTION.header.navLink} py-2`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CLINIC_INFO.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${GLOBAL.primaryButton} text-center w-full mt-4`}
            >
              {CONTENT.header.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
