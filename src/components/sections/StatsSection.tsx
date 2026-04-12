"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import { staggerContainer, fadeInUpItem } from "@/lib/animations";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

function StatItem({
  value,
  suffix,
  label,
  trigger,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  trigger: boolean;
  index: number;
}) {
  const count = useCountUp(value, trigger, 2000 + index * 200);

  return (
    <motion.div variants={fadeInUpItem} className="flex flex-col items-center gap-1 px-4 sm:px-6">
      <div className="font-heading text-2xl font-bold text-cream-300 sm:text-3xl" dir="ltr">
        <span>{count}</span>
        <span className="text-gradient-terracotta">{suffix}</span>
      </div>
      <p className="text-body-sm font-light text-cream-300/50">{label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  const { ref, isInView } = useScrollReveal("-50px" as const, 0.5);

  return (
    <section className="relative z-[1] bg-brand-navy-900/90 py-8 md:py-10" ref={ref}>
      <motion.div
        className="content-standard flex flex-wrap items-center justify-center gap-6 md:gap-0 md:divide-x md:divide-cream-300/10"
        style={{ direction: "ltr" }}
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {STATS.map((stat, i) => (
          <StatItem
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            trigger={isInView}
            index={i}
          />
        ))}
      </motion.div>
    </section>
  );
}
