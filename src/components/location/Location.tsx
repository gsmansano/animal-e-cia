"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/constants/content";
import { CLINIC_INFO } from "@/constants/clinic-info";
import { SECTION, GLOBAL } from "@/design-system/classes";

export function Location() {
  return (
    <section id="localizacao" className={SECTION.location.wrapper}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 items-start">
        {/* Left Column: Text & CTA */}
        <motion.div
          className="flex flex-col space-y-6 sticky top-24"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={SECTION.location.h2}>
            {CONTENT.location.sectionTitle}
          </h2>
          <p className={SECTION.location.p}>
            {CONTENT.location.sectionSubtitle}
          </p>

          <div className="space-y-2 mt-4">
            <p className="font-bold text-green-dark">Endereço:</p>
            <p className="text-slate-600">{CLINIC_INFO.address.full}</p>
          </div>

          <div className="space-y-2">
            <p className="font-bold text-green-dark">
              Horário de Funcionamento:
            </p>
            <p className="text-slate-600">{CLINIC_INFO.hours.weekdays}</p>
            <p className="text-slate-600">{CLINIC_INFO.hours.saturday}</p>
          </div>

          <div className="pt-4">
            <a
              href={CLINIC_INFO.address.googleMapsRouteLink}
              target="_blank"
              rel="noopener noreferrer"
              className={GLOBAL.primaryButton}
            >
              Como Chegar
            </a>
          </div>
        </motion.div>

        {/* Right Column: Bento Box */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={`${SECTION.location.bentoItem} col-span-2 aspect-video overflow-hidden flex items-center justify-center`}>Foto da Fachada</div>
          <div className={`${SECTION.location.bentoItem} col-span-1 aspect-square overflow-hidden flex items-center justify-center`}>
            Foto da Recepção
          </div>
          <div className={`${SECTION.location.bentoItem} col-span-1 aspect-square overflow-hidden flex items-center justify-center`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483.48180580202455!2d-41.666202845863346!3d-14.203299639507437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7444be163bea573%3A0xb1b466cb15fe29e9!2sAnimal%20%26%20Cia%20-%20Centro%20Veterin%C3%A1rio!5e0!3m2!1sen!2sbr!4v1787424437060!5m2!1sen!2sbr"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
