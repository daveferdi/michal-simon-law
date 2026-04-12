"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { staggerContainer, fadeInUpItem } from "@/lib/animations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}

export default function TestimonialsSection() {
  const { ref: headingRef, isInView: headingInView } = useScrollReveal();
  const { ref: gridRef, isInView: gridInView } = useScrollReveal("-50px" as const, 0.1);

  return (
    <section id="testimonials" className="relative overflow-hidden section-padding bg-brand-navy-900/90">
      {/* Giant decorative quotes background */}
      <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center">
        <span className="font-heading text-[16rem] font-bold leading-none text-terracotta-500/[0.03] md:text-[20rem]">
          &ldquo;&rdquo;
        </span>
      </div>

      {/* Gradient mesh */}
      <div className="absolute start-0 top-0 z-[2] h-[400px] w-[400px] rounded-full bg-terracotta-500/[0.03] blur-[120px]" />

      {/* Heading */}
      <motion.div
        ref={headingRef}
        className="content-narrow relative z-[3] mb-16 text-center md:mb-20"
        variants={staggerContainer(0.2)}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
      >
        <motion.span
          variants={fadeInUpItem}
          className="mb-4 block text-body-sm font-light uppercase tracking-[0.3em] text-terracotta-400"
        >
          המלצות
        </motion.span>
        <motion.h2
          variants={fadeInUpItem}
          className="font-heading text-heading-lg font-bold text-cream-300 md:text-display-sm"
        >
          מה הלקוחות אומרים
        </motion.h2>
        <motion.div
          variants={fadeInUpItem}
          className="mx-auto mt-6 h-[2px] w-16 bg-terracotta-500"
        />
      </motion.div>

      {/* Cards */}
      <motion.div
        ref={gridRef}
        className="content-standard relative z-[3] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        variants={staggerContainer(0.15, 0.1)}
        initial="hidden"
        animate={gridInView ? "visible" : "hidden"}
      >
        {TESTIMONIALS.map((t, i) => (
          <motion.blockquote
            key={i}
            variants={fadeInUpItem}
            className="glass-card-dark p-8 transition-all duration-500 ease-luxury hover:-translate-y-1 lg:p-10"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04), 0 10px 40px rgba(0,0,0,0.2)",
            }}
          >
            {/* Decorative quote */}
            <span className="block font-heading text-6xl leading-none text-terracotta-500/25">
              &ldquo;
            </span>

            <p className="-mt-4 font-heading text-body-lg italic leading-relaxed text-cream-300/80">
              {t.quote}
            </p>

            <footer className="mt-8 flex items-center gap-4 border-t border-cream-300/10 pt-5">
              {/* Avatar initials */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta-500/20 text-body-sm font-medium text-terracotta-400">
                {getInitials(t.author)}
              </div>
              <div>
                <cite className="block text-body-sm font-medium not-italic text-cream-300">
                  {t.author}
                </cite>
                <span className="text-body-sm font-light text-cream-300/40">
                  {t.context}
                </span>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </motion.div>
    </section>
  );
}
