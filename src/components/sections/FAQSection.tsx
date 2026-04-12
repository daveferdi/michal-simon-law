"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { staggerContainer, fadeInUpItem, LUXURY_EASE } from "@/lib/animations";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: headingRef, isInView: headingInView } = useScrollReveal();
  const { ref: listRef, isInView: listInView } = useScrollReveal("-50px" as const, 0.1);

  return (
    <section id="faq" className="relative overflow-hidden section-padding bg-cream-300/65">
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
          שאלות ותשובות
        </motion.span>
        <motion.h2
          variants={fadeInUpItem}
          className="font-heading text-heading-lg font-bold text-brand-navy-900 md:text-display-sm"
        >
          שאלות נפוצות
        </motion.h2>
        <motion.div variants={fadeInUpItem} className="accent-line mt-6" />
      </motion.div>

      {/* Accordion */}
      <motion.div
        ref={listRef}
        className="content-narrow relative z-10"
        variants={staggerContainer(0.08, 0.1)}
        initial="hidden"
        animate={listInView ? "visible" : "hidden"}
      >
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIndex === i;
          const num = String(i + 1).padStart(2, "0");

          return (
            <motion.div
              key={i}
              variants={fadeInUpItem}
              className={cn(
                "border-b border-brand-navy-200/50 transition-colors duration-500",
                isOpen && "border-s-2 border-s-terracotta-500 bg-terracotta-500/[0.03]"
              )}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center gap-4 py-6 pe-2 ps-4 text-start transition-colors duration-300 hover:text-terracotta-500"
                aria-expanded={isOpen}
              >
                {/* Number */}
                <span className="shrink-0 font-body text-body-sm font-light tracking-widest text-terracotta-500/60">
                  {num}.
                </span>

                <span className="flex-1 pe-4 font-heading text-body-lg font-medium text-brand-navy-900">
                  {item.question}
                </span>

                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-terracotta-500 transition-transform duration-500 ease-luxury",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: LUXURY_EASE }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 ps-12 text-body leading-relaxed text-brand-navy-600">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
