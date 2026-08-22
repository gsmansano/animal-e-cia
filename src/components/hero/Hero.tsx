'use client';

import { motion, Variants } from 'framer-motion';
import { CLINIC_INFO } from '@/constants/clinic-info';
import { CONTENT } from '@/constants/content';
import { GLOBAL, SECTION } from '@/design-system/classes';

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className={`${SECTION.hero.wrapper} relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          <motion.h1 variants={itemVariants} className={`${SECTION.hero.h1} mb-6`}>
            {CONTENT.hero.title}
          </motion.h1>
          <motion.p variants={itemVariants} className={`${SECTION.hero.p} mb-8 max-w-lg`}>
            {CONTENT.hero.subtitle}
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href={CLINIC_INFO.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className={GLOBAL.primaryButton}
            >
              {CONTENT.hero.cta}
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full aspect-[4/3] lg:aspect-square flex items-center justify-center"
        >
          <img 
            src="/images/hero.webp" 
            alt="Centro Veterinário Animal & Cia" 
            className={`${SECTION.hero.imagePlaceholder} w-full h-full object-cover`} 
            loading="eager" 
            fetchPriority="high" 
          />
        </motion.div>
      </div>
    </section>
  );
}
