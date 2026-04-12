"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ArrowLeft, MessageCircle, X, Send } from "lucide-react";
import { staggerContainer, fadeInUpItem, LUXURY_EASE } from "@/lib/animations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PLACEHOLDER_ARTICLES = [
  {
    title: "מה חשוב לדעת לפני רכישת דירה מקבלן",
    excerpt:
      "טיפים מקצועיים וצעדים שכל רוכש דירה חדשה חייב לבצע לפני חתימת החוזה.",
    tag: "רכישה",
    date: "בקרוב",
  },
  {
    title: "בדיקת נאותות — למה זה קריטי בכל עסקה",
    excerpt:
      "הסבר מקיף על תהליך הבדיקה המשפטית ומה עלול לקרות אם מדלגים עליו.",
    tag: "בדיקות",
    date: "בקרוב",
  },
  {
    title: "זכויות שוכרים — מה שהמשכיר לא יגיד לכם",
    excerpt:
      "סקירה של הזכויות החוקיות של שוכרי דירות ואיך להגן על עצמכם בחוזה.",
    tag: "שכירות",
    date: "בקרוב",
  },
] as const;

export default function ArticlesSection() {
  const { ref: headingRef, isInView: headingInView } = useScrollReveal();
  const { ref: gridRef, isInView: gridInView } = useScrollReveal(
    "-50px" as const,
    0.1
  );
  const [askOpen, setAskOpen] = useState(false);
  const [askSent, setAskSent] = useState(false);

  function handleAskSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string).trim();
    const phone = (data.get("phone") as string).trim();
    const question = (data.get("question") as string).trim();

    if (!name || !phone || phone.length < 9 || !question) return;

    // Open WhatsApp with pre-filled message
    const msg = encodeURIComponent(
      `היי, אני ${name}.\nיש לי שאלה בנושא:\n${question}\n\nמספר טלפון: ${phone}`
    );
    window.open(`https://wa.me/972547850530?text=${msg}`, "_blank");
    setAskSent(true);
  }

  return (
    <section
      id="articles"
      className="relative z-[1] overflow-hidden bg-cream-200/65 section-padding"
    >
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
          ידע משפטי
        </motion.span>
        <motion.h2
          variants={fadeInUpItem}
          className="font-heading text-heading-lg font-bold text-brand-navy-900 md:text-display-sm"
        >
          מאמרים וטיפים
        </motion.h2>
        <motion.div variants={fadeInUpItem} className="accent-line mt-6" />
        <motion.p
          variants={fadeInUpItem}
          className="mx-auto mt-6 max-w-reading text-body text-brand-navy-600"
        >
          תוכן מקצועי שיעזור לכם להבין את עולם הנדל&quot;ן והמקרקעין — ישירות
          מהמשרד.
        </motion.p>
      </motion.div>

      {/* Article Cards */}
      <motion.div
        ref={gridRef}
        className="content-standard relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate={gridInView ? "visible" : "hidden"}
      >
        {PLACEHOLDER_ARTICLES.map((article, i) => (
          <motion.article
            key={i}
            variants={fadeInUpItem}
            className="group glass-card overflow-hidden p-0 transition-all duration-500 ease-luxury hover:-translate-y-1 hover:shadow-soft-lg"
          >
            {/* Image placeholder */}
            <div className="flex h-48 items-center justify-center bg-brand-navy-900/[0.04]">
              <FileText className="h-10 w-10 text-brand-navy-300/30" />
            </div>

            <div className="p-6 lg:p-8">
              {/* Tag + Date */}
              <div className="mb-3 flex items-center justify-between">
                <span className="text-body-sm font-light tracking-wide text-terracotta-500">
                  {article.tag}
                </span>
                <span className="text-body-sm font-light text-brand-navy-400">
                  {article.date}
                </span>
              </div>

              <h3 className="font-heading text-heading-sm font-bold leading-snug text-brand-navy-900">
                {article.title}
              </h3>

              <p className="mt-3 text-body-sm leading-relaxed text-brand-navy-600">
                {article.excerpt}
              </p>

              <div className="mt-5 flex items-center gap-2 text-body-sm font-light text-terracotta-500 transition-colors duration-300 group-hover:text-terracotta-600">
                <span>קרא עוד</span>
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Ask a Question CTA */}
      <motion.div
        className="content-narrow relative z-10 mt-16 text-center md:mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: LUXURY_EASE }}
      >
        <p className="mb-6 text-body text-brand-navy-600">
          יש לכם שאלה משפטית? שאלו אותנו ונחזור אליכם ב-WhatsApp.
        </p>
        <button
          onClick={() => {
            setAskOpen(true);
            setAskSent(false);
          }}
          className="btn-shine inline-flex items-center gap-3 bg-brand-navy-900 px-8 py-3.5 text-sm font-light uppercase tracking-[0.2em] text-white transition-all duration-500 ease-luxury hover:bg-brand-navy-800"
        >
          <MessageCircle className="h-4 w-4" />
          שאלו אותנו
        </button>
      </motion.div>

      {/* Ask Modal */}
      <AnimatePresence>
        {askOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: LUXURY_EASE }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-brand-navy-900/60 backdrop-blur-sm"
              onClick={() => setAskOpen(false)}
            />

            {/* Card */}
            <motion.div
              className="relative z-10 w-full max-w-md bg-white p-8 shadow-soft-xl lg:p-10"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: LUXURY_EASE }}
            >
              <button
                onClick={() => setAskOpen(false)}
                className="absolute end-4 top-4 text-brand-navy-400 transition-colors duration-300 hover:text-brand-navy-900"
                aria-label="סגור"
              >
                <X className="h-5 w-5" />
              </button>

              {askSent ? (
                <div className="py-6 text-center">
                  <MessageCircle className="mx-auto h-10 w-10 text-green-500" />
                  <h3 className="mt-4 font-heading text-heading-sm font-bold text-brand-navy-900">
                    השאלה נשלחה!
                  </h3>
                  <p className="mt-2 text-body text-brand-navy-600">
                    נחזור אליכם ב-WhatsApp בהקדם.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-heading-sm font-bold text-brand-navy-900">
                    שאלו שאלה
                  </h3>
                  <p className="mt-2 text-body-sm text-brand-navy-500">
                    מלאו את הפרטים ונחזור אליכם ב-WhatsApp עם תשובה.
                  </p>

                  <form
                    onSubmit={handleAskSubmit}
                    className="mt-6 flex flex-col gap-5"
                    noValidate
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="שם מלא"
                      required
                      className="w-full border-b-2 border-brand-navy-200/50 bg-transparent pb-3 pt-1 text-body text-brand-navy-900 outline-none transition-colors duration-300 placeholder:text-brand-navy-300 focus:border-terracotta-500"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="טלפון"
                      required
                      dir="ltr"
                      className="w-full border-b-2 border-brand-navy-200/50 bg-transparent pb-3 pt-1 text-body text-brand-navy-900 outline-none transition-colors duration-300 placeholder:text-start placeholder:text-brand-navy-300 focus:border-terracotta-500"
                    />
                    <textarea
                      name="question"
                      placeholder="מה השאלה שלכם?"
                      required
                      rows={3}
                      className="w-full resize-none border-b-2 border-brand-navy-200/50 bg-transparent pb-3 pt-1 text-body text-brand-navy-900 outline-none transition-colors duration-300 placeholder:text-brand-navy-300 focus:border-terracotta-500"
                    />
                    <button
                      type="submit"
                      className="btn-shine inline-flex items-center justify-center gap-2 bg-gradient-to-l from-terracotta-500 to-terracotta-600 px-8 py-3 text-sm font-light uppercase tracking-[0.2em] text-white shadow-terracotta-glow transition-all duration-500"
                    >
                      <Send className="h-4 w-4" />
                      שלח ב-WhatsApp
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
