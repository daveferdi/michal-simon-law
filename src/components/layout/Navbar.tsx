"use client";

import { useState } from "react";
import {
  motion,
  useScroll,

  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Smooth scroll-linked values: opacity 0.3→0.82, blur 2→14px
  const bgOpacity = useTransform(scrollY, [0, 400], [0.3, 0.82]);
  const blurVal = useTransform(scrollY, [0, 400], [2, 14]);

  // Build reactive CSS strings from motion values
  const backgroundColor = useMotionTemplate`rgba(58, 58, 82, ${bgOpacity})`;
  const backdropFilter = useMotionTemplate`blur(${blurVal}px)`;

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor,
          backdropFilter,
          WebkitBackdropFilter: backdropFilter,
        }}
        role="navigation"
        aria-label="ניווט ראשי"
      >
        <div className="content-wide flex items-center justify-between py-5">
          <a href="#hero" aria-label="מיכל סיימון - עמוד הבית">
            <Image
              src="/images/logo-icon.png"
              alt="מיכל סיימון - עורכת דין"
              width={44}
              height={44}
              className="h-10 w-10 rounded-full transition-all duration-700 ease-luxury lg:h-11 lg:w-11"
              priority
            />
          </a>

          <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-xs font-normal uppercase tracking-[0.2em] text-white transition-colors duration-500 ease-luxury hover:text-terracotta-300"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-full origin-center scale-x-0 bg-terracotta-400 transition-transform duration-500 ease-luxury group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <button
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={cn(
                "block h-[1.5px] w-6 bg-white transition-all duration-500 ease-luxury",
                isMobileMenuOpen && "translate-y-[7.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] w-6 bg-white transition-all duration-500 ease-luxury",
                isMobileMenuOpen && "-translate-y-[7.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
