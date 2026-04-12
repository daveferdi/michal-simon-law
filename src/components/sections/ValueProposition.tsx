"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUpItem, lineExpand } from "@/lib/animations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ValueProposition() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="relative z-[1] bg-brand-navy-900/90 py-26 md:py-34 lg:py-42" ref={ref}>
      <motion.div
        className="content-narrow text-center"
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          variants={lineExpand}
          className="mx-auto mb-8 h-[1.5px] w-16 origin-center bg-terracotta-500"
        />

        <motion.h2
          variants={fadeInUpItem}
          className="font-heading text-heading-lg font-bold text-cream-300 md:text-display-sm"
        >
          הנכס שלכם, המומחיות שלנו
        </motion.h2>

        <motion.p
          variants={fadeInUpItem}
          className="mt-6 text-body-lg font-light leading-relaxed text-cream-300/60"
        >
          משרד עורכי דין מיכל סיימון מתמחה בליווי עסקאות נדל&quot;ן מכל הסוגים.
          אנו מאמינים שכל עסקה ראויה לתשומת לב מלאה, בדיקה מעמיקה ומחויבות
          אישית — ללא פשרות על הפרטים הקטנים.
        </motion.p>

        <motion.p
          variants={fadeInUpItem}
          className="text-body-lg font-light leading-relaxed text-cream-300/60"
        >
          מבית שמש, אנו מלווים לקוחות מכל רחבי הארץ — בגישה מקצועית, שקופה
          ואנושית.
        </motion.p>
      </motion.div>
    </section>
  );
}
