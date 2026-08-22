"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/constants/content";
import { SECTION } from "@/design-system/classes";

export function Services() {
  return (
    <section id="servicos" className={SECTION.services.wrapper}>
      <div className={SECTION.services.headerContainer}>
        <motion.h2 
          className={SECTION.services.h2}
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

      <div className={SECTION.services.stack}>
        {CONTENT.services.items.map((item, index) => (
          <motion.div
            key={item.title}
            className={index % 2 !== 0 ? SECTION.services.cardWrapperReverse : SECTION.services.cardWrapper}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className={SECTION.services.cardImagePlaceholder}>
              Imagem
            </div>
            <div className={SECTION.services.cardContent}>
              <h3 className="font-heading text-2xl font-bold text-green-dark">{item.title}</h3>
              <p className="font-sans text-slate-600 text-lg leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
