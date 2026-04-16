"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { LUXURY_EASE } from "@/lib/animations";

/* ============================================
   ANIMATION VARIANTS — Mask reveal style
   ============================================ */
const maskReveal = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1.2, ease: LUXURY_EASE, delay: 0.3 + i * 0.15 },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: LUXURY_EASE, delay: 0.6 + i * 0.15 },
  }),
};

const portraitReveal = {
  hidden: { opacity: 0, scale: 1.08, x: -40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1.6, ease: LUXURY_EASE, delay: 0.5 },
  },
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background — Ken Burns slow zoom-out */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 14, ease: "linear" }}
      >
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-brand-navy-900/90 via-brand-navy-900/75 to-brand-navy-900/95" />

      {/* Decorative gradient orb — desktop only to avoid mobile overflow */}
      <div
        className="gradient-orb absolute -top-20 end-[10%] z-[2] hidden h-[500px] w-[500px] bg-terracotta-500/15 md:block lg:end-[30%]"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="gradient-orb absolute -bottom-32 start-[5%] z-[2] hidden h-[400px] w-[400px] bg-brand-navy-400/10 md:block"
        style={{ animationDelay: "-10s" }}
      />

      {/* Content — Split layout */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="content-wide grid w-full grid-cols-1 items-center gap-0 py-20 lg:grid-cols-2 lg:gap-16">
          {/* Text side — right in RTL */}
          <div className="order-2 text-center lg:order-1 lg:text-start">
            {/* Label */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-4"
            >
              <span className="inline-block text-body-sm font-light uppercase tracking-[0.3em] text-terracotta-400">
                משרד עורכי דין
              </span>
            </motion.div>

            {/* Headline — mask reveal */}
            <div className="text-reveal">
              <motion.h1
                custom={0}
                variants={maskReveal}
                initial="hidden"
                animate="visible"
                className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
              >
                מיכל סיימון
              </motion.h1>
            </div>

            {/* Terracotta line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.8 }}
              className="mx-auto my-6 h-[2px] w-20 origin-end bg-terracotta-500 sm:my-8 lg:mx-0"
            />

            {/* Subtitle — mask reveal */}
            <div className="text-reveal">
              <motion.p
                custom={2}
                variants={maskReveal}
                initial="hidden"
                animate="visible"
                className="font-body text-lg font-light tracking-widest text-cream-300/80 sm:text-xl md:text-2xl"
              >
                עורכת דין | נדל&quot;ן ומקרקעין
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 sm:mt-10"
            >
              <a
                href="#contact"
                className="btn-shine inline-block border border-terracotta-500 bg-terracotta-500/10 px-8 py-3.5 font-body text-sm font-light uppercase tracking-[0.2em] text-white transition-all duration-600 ease-luxury hover:bg-terracotta-500 sm:px-10 sm:py-4"
              >
                לתיאום פגישה
              </a>
            </motion.div>

            {/* Trust badges inline */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start"
            >
              {["15+ שנות ניסיון", "ליווי מא׳ עד ת׳", "סודיות מוחלטת"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="text-body-sm font-light text-cream-300/40"
                  >
                    {badge}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Portrait side — hidden on mobile, visible on desktop */}
          <motion.div
            className="relative order-1 mx-auto hidden max-w-[340px] lg:order-2 lg:block xl:max-w-[380px]"
            variants={portraitReveal}
            initial="hidden"
            animate="visible"
          >
            {/* Decorative frames */}
            <div className="absolute -bottom-3 -end-3 z-0 hidden h-full w-full border-2 border-terracotta-500/20 lg:block" />
            <div className="absolute -top-3 -start-3 z-0 hidden h-full w-full border border-cream-300/10 lg:block" />

            {/* Portrait image */}
            <div className="relative z-10 overflow-hidden">
              <Image
                src="/images/portrait.jpg"
                alt="עורכת דין מיכל סיימון"
                width={380}
                height={480}
                className="h-auto w-full object-cover shadow-soft-xl"
                sizes="(max-width: 1024px) 80vw, 40vw"
                priority
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)" }}
              />
            </div>

            {/* Floating accent element */}
            <div className="absolute -bottom-4 -start-4 z-20 hidden h-16 w-16 bg-terracotta-500/10 lg:block" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#trust"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1, ease: LUXURY_EASE }}
        aria-label="גלול למטה"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-white/40" />
        </motion.div>
      </motion.a>
    </section>
  );
}
