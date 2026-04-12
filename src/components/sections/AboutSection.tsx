"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { staggerContainer, fadeInUpItem, LUXURY_EASE } from "@/lib/animations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const textLineVariant = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: LUXURY_EASE, delay },
  },
});

export default function AboutSection() {
  const { ref: sectionRef, isInView } = useScrollReveal("-50px" as const, 0.15);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" className="relative overflow-hidden bg-white/65 section-padding" ref={sectionRef}>
      {/* Decorative gradient */}
      <div className="absolute end-0 top-0 h-[600px] w-[600px] rounded-full bg-terracotta-500/[0.02] blur-[150px]" />

      <div className="content-standard relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
        {/* Text — right side in RTL */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            variants={fadeInUpItem}
            className="text-body-sm font-light uppercase tracking-[0.3em] text-terracotta-500"
          >
            אודות
          </motion.span>

          <motion.h2
            variants={fadeInUpItem}
            className="mt-4 font-heading text-heading-lg font-bold text-brand-navy-900 md:text-display-sm"
          >
            מיכל סיימון, עו&quot;ד
          </motion.h2>

          <motion.div variants={fadeInUpItem} className="accent-line-start mt-6" />

          <motion.p
            variants={textLineVariant(0.4)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-8 text-body leading-relaxed text-brand-navy-700"
          >
            עורכת דין מיכל סיימון מתמחה בתחום הנדל&quot;ן והמקרקעין מזה למעלה
            מ-15 שנה. המשרד, הממוקם בבית שמש, מלווה לקוחות פרטיים ועסקיים
            בעסקאות מורכבות ופשוטות כאחד — תוך מתן דגש על מקצועיות, שקיפות
            ותקשורת אישית.
          </motion.p>

          <motion.p
            variants={textLineVariant(0.55)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-body leading-relaxed text-brand-navy-700"
          >
            הגישה שלנו פשוטה: כל לקוח מקבל תשומת לב מלאה, כאילו הוא הלקוח
            היחיד במשרד. אנו מאמינים שליווי משפטי טוב מתחיל בהקשבה ונגמר
            בשקט נפשי.
          </motion.p>

          {/* Testimonial Quote — upgraded */}
          <motion.blockquote
            variants={textLineVariant(0.7)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative mt-10 pe-8"
          >
            {/* Large decorative quote */}
            <span className="absolute -top-4 end-0 font-heading text-8xl leading-none text-terracotta-500/10">
              &ldquo;
            </span>
            <div className="border-e-2 border-terracotta-500/40 pe-6">
              <p className="font-heading text-body-lg italic leading-relaxed text-brand-navy-600">
                &quot;ההרגשה הייתה שיש מישהו שבאמת דואג לנו בכל שלב.
                מקצועיות ואנושיות יוצאת דופן.&quot;
              </p>
              <cite className="mt-3 block text-body-sm font-light not-italic text-brand-navy-400">
                — דנה ויובל כהן, רכישת דירה
              </cite>
            </div>
          </motion.blockquote>
        </motion.div>

        {/* Image — left side in RTL */}
        <motion.div
          ref={imageContainerRef}
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: LUXURY_EASE, delay: 0.3 }}
        >
          {/* Decorative double frames */}
          <div className="absolute -bottom-5 -end-5 z-0 hidden h-full w-full border-2 border-terracotta-500/15 lg:block" />
          <div className="absolute -top-5 -start-5 z-0 hidden h-full w-full border border-brand-navy-200/20 lg:block" />

          {/* Dot grid decoration */}
          <div className="dot-grid absolute -end-8 -top-8 z-0 hidden h-32 w-32 lg:block" />

          <motion.div style={{ y: imageY }} className="relative">
            <Image
              src="/images/portrait-2.png"
              alt="עורכת דין מיכל סיימון"
              width={600}
              height={750}
              className="relative z-10 w-full object-cover shadow-soft-xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{
                borderRadius: "0 0 0 40%",
              }}
            />
          </motion.div>

          {/* Floating accent block */}
          <div className="absolute -bottom-6 -start-6 z-20 hidden h-28 w-28 bg-terracotta-500/10 lg:block" />
        </motion.div>
      </div>
    </section>
  );
}
