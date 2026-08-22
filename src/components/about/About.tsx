"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/constants/content";
import { SECTION } from "@/design-system/classes";

export function About() {
  return (
    <section id="sobre" className={SECTION.about.wrapper}>
      <div className="text-center max-w-2xl mx-auto mb-16 px-6">
        <motion.h2 
          className={`${SECTION.about.h2} mb-4`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {CONTENT.about.sectionTitle}
        </motion.h2>
      </div>

      <div className="space-y-24">
        {CONTENT.about.team.map((member, index) => (
          <div key={member.name} className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className={`${SECTION.about.imageOffsetBackground} absolute inset-0 transform translate-x-4 translate-y-4`} />
              <div className={`${SECTION.about.image} w-full aspect-[4/5] flex items-center justify-center object-cover relative z-10`}>Foto de {member.name}</div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h3 className={SECTION.about.name}>{member.name}</h3>
                <p className={SECTION.about.role}>{member.role}</p>
              </div>
              
              <div className="space-y-4">
                {member.bio.map((paragraph, pIndex) => (
                  <p key={pIndex} className={SECTION.about.bioText}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
