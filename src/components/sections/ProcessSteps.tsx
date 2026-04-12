"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee, Search, Handshake, Key } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";
import { staggerContainer, fadeInUpItem, LUXURY_EASE } from "@/lib/animations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const STEP_ICONS = [Coffee, Search, Handshake, Key];

export default function ProcessSteps() {
  const { ref: headingRef, isInView: headingInView } = useScrollReveal();
  const { ref: stepsRef, isInView: stepsInView } = useScrollReveal("-50px" as const, 0.15);
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="relative section-padding bg-cream-200/65">
      {/* Heading */}
      <motion.div
        ref={headingRef}
        className="content-narrow mb-16 text-center md:mb-20"
        variants={staggerContainer(0.2)}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
      >
        <motion.span
          variants={fadeInUpItem}
          className="mb-4 block text-body-sm font-light uppercase tracking-[0.3em] text-terracotta-500"
        >
          איך זה עובד
        </motion.span>
        <motion.h2
          variants={fadeInUpItem}
          className="font-heading text-heading-lg font-bold text-brand-navy-900 md:text-display-sm"
        >
          תהליך העבודה
        </motion.h2>
        <motion.div variants={fadeInUpItem} className="accent-line mt-6" />
      </motion.div>

      {/* Steps */}
      <motion.div
        ref={stepsRef}
        className="content-standard relative"
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        animate={stepsInView ? "visible" : "hidden"}
      >
        {/* Scroll-linked connecting line — desktop */}
        <div
          ref={lineRef}
          className="absolute top-[3.5rem] hidden lg:block"
          style={{ right: "calc(12.5% + 32px)", left: "calc(12.5% + 32px)" }}
        >
          {/* Background dashed line */}
          <div className="h-[1px] w-full border-t border-dashed border-brand-navy-300/30" />
          {/* Animated fill line */}
          <motion.div
            className="absolute inset-x-0 top-0 h-[2px] origin-right bg-terracotta-500/60"
            style={{ scaleX: lineScale }}
          />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <motion.div
                key={step.number}
                variants={fadeInUpItem}
                className="relative text-center"
              >
                {/* Mobile connecting line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute -bottom-6 start-1/2 h-12 w-px -translate-x-1/2 border-r border-dashed border-terracotta-500/20 md:hidden" />
                )}

                {/* Icon above circle */}
                <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center">
                  <Icon className="h-5 w-5 text-terracotta-500/50" />
                </div>

                {/* Number circle with active glow */}
                <motion.div
                  className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-terracotta-500/30 bg-cream-200 transition-all duration-700"
                  whileInView={{
                    borderColor: "rgba(156, 93, 78, 0.6)",
                    boxShadow: "0 0 25px rgba(156, 93, 78, 0.15)",
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: LUXURY_EASE, delay: i * 0.2 }}
                >
                  <span className="font-heading text-heading-sm font-bold text-brand-navy-900">
                    {step.number}
                  </span>
                </motion.div>

                <h3 className="mt-6 font-heading text-heading-sm font-bold text-brand-navy-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-body-sm leading-relaxed text-brand-navy-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
