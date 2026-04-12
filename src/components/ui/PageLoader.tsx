"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { LUXURY_EASE } from "@/lib/animations";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy-900"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
        >
          {/* Logo reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 0.2 }}
          >
            <Image
              src="/images/logo-icon.png"
              alt=""
              width={60}
              height={60}
              className="h-14 w-14 rounded-full"
              priority
            />
          </motion.div>

          {/* Loading line */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-terracotta-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: LUXURY_EASE, delay: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
