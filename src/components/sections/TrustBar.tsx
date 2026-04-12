"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { TRUST_BADGES } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function BadgeList() {
  return (
    <>
      {TRUST_BADGES.map((badge, i) => (
        <div key={i} className="flex shrink-0 items-center gap-3 px-6">
          <Shield className="h-4 w-4 text-terracotta-500/50" />
          <span className="whitespace-nowrap text-sm font-light tracking-wide text-cream-300/60">
            {badge.label}
          </span>
          <span className="text-cream-300/20">•</span>
        </div>
      ))}
    </>
  );
}

export default function TrustBar() {
  const { ref, isInView } = useScrollReveal("-50px" as const, 0.5);

  return (
    <section
      id="trust"
      ref={ref}
      className="overflow-hidden border-t border-terracotta-500/10 bg-gradient-to-b from-brand-navy-900 to-brand-navy-950 py-5 md:py-6"
    >
      <motion.div
        variants={fadeInUp(0.8)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Infinite marquee */}
        <div className="marquee-track">
          <BadgeList />
          <BadgeList />
          <BadgeList />
          <BadgeList />
        </div>
      </motion.div>
    </section>
  );
}
