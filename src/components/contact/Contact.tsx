"use client";

import { motion } from "framer-motion";
import { CLINIC_INFO } from "@/constants/clinic-info";
import { SECTION, GLOBAL } from "@/design-system/classes";
import { CONTENT } from "@/constants/content";

export function Contact() {
  return (
    <section id="contato" className={SECTION.contact.wrapper}>
      <div className={GLOBAL.container}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Column 1: Contact Details */}
          <motion.div 
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={SECTION.contact.h2}>{CONTENT.contact.sectionTitle}</h2>
            <p className={SECTION.contact.p}>
              {CONTENT.contact.sectionSubtitle}
            </p>

            <div className="pt-2">
              <p className="flex items-center justify-center lg:justify-start gap-3 text-2xl font-bold text-slate-900 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-dark">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {CLINIC_INFO.whatsapp.display}
              </p>
              <a
                href={CLINIC_INFO.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${GLOBAL.primaryButton} !inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                <span>{CONTENT.contact.buttonText}</span>
              </a>
            </div>

            <div className="pt-6 flex flex-row items-center justify-center lg:justify-start gap-8">
              <a href={CLINIC_INFO.social.instagram.link} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-green-dark transition-colors flex items-center gap-2" aria-label="Siga-nos no Instagram">
                <svg
                  className="w-6 h-6"
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
                <span className="font-medium">{CLINIC_INFO.social.instagram.handle}</span>
              </a>
              <a href={CLINIC_INFO.social.tiktok.link} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-green-dark transition-colors flex items-center gap-2" aria-label="Siga-nos no TikTok">
                <svg
                  className="w-6 h-6"
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
                <span className="font-medium">{CLINIC_INFO.social.tiktok.handle}</span>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Desktop QR Code */}
          <motion.div 
            className="hidden lg:flex lg:justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center gap-4">
              <p className="font-heading font-bold text-green-dark text-center">{CONTENT.contact.qrHelper}</p>
              <img 
                src="/images/qrcode.png" 
                alt="WhatsApp QR Code" 
                className="w-72 h-72 object-cover" 
                loading="lazy" 
                decoding="async" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
