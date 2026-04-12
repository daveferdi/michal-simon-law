"use client";

import { motion } from "framer-motion";
import { Home, Search, Building2, Handshake, FileText, TrendingUp } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, fadeInUpItem, LUXURY_EASE } from "@/lib/animations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ICONS = [Home, Search, Building2, Handshake, FileText, TrendingUp];

/* Per-card direction variants for visual interest */
const cardVariants = [
  { hidden: { opacity: 0, x: 30, y: 20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: LUXURY_EASE } } },
  { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: LUXURY_EASE } } },
  { hidden: { opacity: 0, x: -30, y: 20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: LUXURY_EASE } } },
  { hidden: { opacity: 0, x: 30, y: 20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: LUXURY_EASE } } },
  { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: LUXURY_EASE } } },
  { hidden: { opacity: 0, x: -30, y: 20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: LUXURY_EASE } } },
];

export default function ServicesGrid() {
  const { ref: headingRef, isInView: headingInView } = useScrollReveal();
  const { ref: gridRef, isInView: gridInView } = useScrollReveal("-50px" as const, 0.1);

  return (
    <section id="services" className="relative section-padding bg-cream-300/65">
      {/* Subtle gradient mesh */}
      <div className="absolute start-0 top-1/4 h-[500px] w-[500px] rounded-full bg-terracotta-500/[0.03] blur-[150px]" />

      {/* Heading */}
      <motion.div
        ref={headingRef}
        className="content-narrow relative z-10 mb-16 text-center md:mb-20"
        variants={staggerContainer(0.2)}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
      >
        <motion.span
          variants={fadeInUpItem}
          className="mb-4 block text-body-sm font-light uppercase tracking-[0.3em] text-terracotta-500"
        >
          מה אנחנו עושים
        </motion.span>
        <motion.h2
          variants={fadeInUpItem}
          className="font-heading text-heading-lg font-bold text-brand-navy-900 md:text-display-sm"
        >
          תחומי עיסוק
        </motion.h2>
        <motion.div variants={fadeInUpItem} className="accent-line mt-6" />
      </motion.div>

      {/* Grid */}
      <motion.div
        ref={gridRef}
        className="content-standard relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        animate={gridInView ? "visible" : "hidden"}
      >
        {SERVICES.map((service, i) => {
          const Icon = ICONS[i];
          return (
            <motion.article
              key={service.number}
              variants={cardVariants[i]}
              className="group relative overflow-hidden glass-card p-8 transition-all duration-500 ease-luxury hover:-translate-y-2 hover:shadow-soft-lg lg:p-10"
              style={{
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                rotateY: -1,
                rotateX: 1,
                transition: { duration: 0.4, ease: LUXURY_EASE },
              }}
            >
              {/* Gradient top border — expands on hover */}
              <div className="absolute inset-x-0 top-0 h-[2px] origin-end scale-x-0 bg-gradient-to-l from-terracotta-400 to-terracotta-600 transition-transform duration-600 ease-luxury group-hover:scale-x-100" />

              {/* Watermark number */}
              <span className="absolute -top-2 end-4 font-heading text-7xl font-bold text-terracotta-500/[0.06]">
                {service.number}
              </span>

              {/* Icon decoration */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-500/10">
                <Icon className="h-5 w-5 text-terracotta-500" />
              </div>

              <span className="font-body text-xs font-light tracking-[0.2em] text-terracotta-500/70">
                {service.number}
              </span>

              <h3 className="mt-2 font-heading text-heading-sm font-bold text-brand-navy-900">
                {service.titleHe}
              </h3>

              <p className="mt-1 text-body-sm font-light tracking-wide text-brand-navy-400">
                {service.titleEn}
              </p>

              <p className="mt-4 text-body-sm leading-relaxed text-brand-navy-600">
                {service.description}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
