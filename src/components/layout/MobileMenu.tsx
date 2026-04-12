"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO, WHATSAPP_URL } from "@/lib/constants";
import { LUXURY_EASE } from "@/lib/animations";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: LUXURY_EASE },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: LUXURY_EASE, delay: 0.2 },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.3, ease: LUXURY_EASE },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: LUXURY_EASE },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-brand-navy-900"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="flex h-full flex-col items-center justify-center px-8"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.href} variants={linkVariants}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="font-heading text-3xl text-cream-300 transition-colors duration-500 ease-luxury hover:text-terracotta-500 sm:text-4xl"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </nav>

            <motion.div
              variants={linkVariants}
              className="my-10 h-px w-16 bg-terracotta-500/40"
            />

            <motion.div
              variants={linkVariants}
              className="flex flex-col items-center gap-3 text-sm text-cream-300/50"
            >
              <a
                href={CONTACT_INFO.phoneHref}
                className="flex items-center gap-2 transition-colors duration-500 ease-luxury hover:text-terracotta-500"
                dir="ltr"
              >
                <Phone size={14} />
                {CONTACT_INFO.phone}
              </a>
              <a
                href={CONTACT_INFO.emailHref}
                className="flex items-center gap-2 transition-colors duration-500 ease-luxury hover:text-terracotta-500"
                dir="ltr"
              >
                <Mail size={14} />
                {CONTACT_INFO.email}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors duration-500 ease-luxury hover:text-green-400"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
