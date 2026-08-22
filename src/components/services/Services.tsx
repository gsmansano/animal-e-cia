"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/constants/content";
import { SECTION } from "@/design-system/classes";

export function Services() {
  return (
    <section id="servicos" className={SECTION.services.wrapper}>
      <div className="text-center max-w-2xl mx-auto mb-16 px-6">
        <motion.h2 
          className={`${SECTION.services.h2} mb-4`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {CONTENT.services.sectionTitle}
        </motion.h2>
        <motion.p 
          className={SECTION.services.p}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {CONTENT.services.sectionSubtitle}
        </motion.p>
      </div>

      <div className="flex flex-col gap-16 md:gap-24 mt-16 max-w-5xl mx-auto px-6">
        {CONTENT.services.items.map((item, index) => (
          <motion.div
            key={item.title}
            className={`flex flex-col gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className={`${SECTION.services.cardImagePlaceholder} flex-1 w-full aspect-square flex items-center justify-center`}>
              Imagem
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="font-heading text-2xl font-bold text-green-dark">{item.title}</h3>
              <p className="font-sans text-slate-600 text-lg leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
