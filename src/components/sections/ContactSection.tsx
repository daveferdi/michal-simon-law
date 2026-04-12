"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { CONTACT_INFO, SERVICES, WHATSAPP_URL } from "@/lib/constants";
import { staggerContainer, fadeInUpItem } from "@/lib/animations";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const contactItems = [
  { icon: Phone, label: CONTACT_INFO.phone, href: CONTACT_INFO.phoneHref, dir: "ltr" as const },
  { icon: Mail, label: CONTACT_INFO.email, href: CONTACT_INFO.emailHref, dir: "ltr" as const },
  { icon: MapPin, label: CONTACT_INFO.address, href: undefined, dir: undefined },
  { icon: Clock, label: CONTACT_INFO.hours, href: undefined, dir: undefined },
];

export default function ContactSection() {
  const { ref, isInView } = useScrollReveal("-50px" as const, 0.1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string).trim();
    const phone = (data.get("phone") as string).trim();

    const newErrors: Record<string, boolean> = {};
    if (!name) newErrors.name = true;
    if (!phone || phone.length < 9) newErrors.phone = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative z-[1] overflow-hidden bg-cream-200/65 py-10 md:py-14 lg:py-16" ref={ref}>

      <motion.div
        className="content-standard relative z-10"
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Heading */}
        <motion.div variants={fadeInUpItem} className="mb-8 text-center md:mb-10">
          <span className="mb-3 block text-body-sm font-light uppercase tracking-[0.3em] text-terracotta-500">
            בואו נדבר
          </span>
          <h2 className="font-heading text-heading font-bold text-brand-navy-900 md:text-heading-lg">
            צרו קשר
          </h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Contact Info */}
          <motion.div variants={fadeInUpItem}>
            <p className="text-body leading-relaxed text-brand-navy-700">
              נשמח לשמוע מכם. השאירו פרטים ונחזור אליכם בהקדם, או פנו
              אלינו ישירות באחת הדרכים הבאות:
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4" dir={item.dir}>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-terracotta-500/10 transition-colors duration-300 group-hover:bg-terracotta-500/20">
                      <Icon className="h-4.5 w-4.5 text-terracotta-500" />
                    </div>
                    <span className="text-body text-brand-navy-700">{item.label}</span>
                  </div>
                );

                return item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    className="group transition-colors duration-300 hover:text-terracotta-500"
                    dir={item.dir}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i} className="group">{content}</div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine mt-8 inline-flex items-center gap-3 bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#20bd5a]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              שלחו הודעת וואטסאפ
            </a>
          </motion.div>

          {/* Form — Glass card */}
          <motion.div variants={fadeInUpItem}>
            <div className="glass-card p-6 lg:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex h-full min-h-[300px] flex-col items-center justify-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-terracotta-500/10">
                    <CheckCircle className="h-8 w-8 text-terracotta-500" />
                  </div>
                  <h3 className="mt-6 font-heading text-heading-sm font-bold text-brand-navy-900">
                    תודה שפניתם!
                  </h3>
                  <p className="mt-3 text-body text-brand-navy-600">
                    קיבלנו את פנייתכם ונחזור אליכם בהקדם.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  {/* Name */}
                  <div className="group relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="שם מלא"
                      className={cn(
                        "peer w-full border-b-2 bg-transparent pb-3 pt-2 font-body text-body text-brand-navy-900 outline-none transition-all duration-500 placeholder:text-brand-navy-300",
                        errors.name
                          ? "border-red-400"
                          : "border-brand-navy-200/50 focus:border-terracotta-500"
                      )}
                      onChange={() =>
                        errors.name && setErrors((e) => ({ ...e, name: false }))
                      }
                    />
                    {/* Animated underline from center */}
                    <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-terracotta-500 transition-all duration-500 peer-focus:w-full" />
                    {errors.name && (
                      <p className="mt-1 text-body-sm text-red-500">שדה חובה</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="group relative">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="טלפון"
                      dir="ltr"
                      className={cn(
                        "peer w-full border-b-2 bg-transparent pb-3 pt-2 font-body text-body text-brand-navy-900 outline-none transition-all duration-500 placeholder:text-start placeholder:text-brand-navy-300",
                        errors.phone
                          ? "border-red-400"
                          : "border-brand-navy-200/50 focus:border-terracotta-500"
                      )}
                      onChange={() =>
                        errors.phone && setErrors((e) => ({ ...e, phone: false }))
                      }
                    />
                    <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-terracotta-500 transition-all duration-500 peer-focus:w-full" />
                    {errors.phone && (
                      <p className="mt-1 text-body-sm text-red-500">
                        נא להזין מספר טלפון תקין
                      </p>
                    )}
                  </div>

                  {/* Service Type */}
                  <div className="relative">
                    <select
                      name="service"
                      defaultValue=""
                      className="w-full appearance-none border-b-2 border-brand-navy-200/50 bg-transparent pb-3 pt-2 font-body text-body text-brand-navy-900 outline-none transition-all duration-500 focus:border-terracotta-500"
                    >
                      <option value="" disabled>
                        סוג שירות
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.number} value={s.titleHe}>
                          {s.titleHe}
                        </option>
                      ))}
                      <option value="אחר">אחר</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="הודעה (אופציונלי)"
                      rows={3}
                      className="w-full resize-none border-b-2 border-brand-navy-200/50 bg-transparent pb-3 pt-2 font-body text-body text-brand-navy-900 outline-none transition-all duration-500 placeholder:text-brand-navy-300 focus:border-terracotta-500"
                    />
                  </div>

                  {/* Submit — gradient + shine */}
                  <button
                    type="submit"
                    className="btn-shine self-start bg-gradient-to-l from-terracotta-500 to-terracotta-600 px-10 py-3.5 font-body text-sm font-light uppercase tracking-[0.2em] text-white shadow-terracotta-glow transition-all duration-500 ease-luxury hover:shadow-lg"
                  >
                    שליחה
                  </button>

                  <p className="text-body-sm font-light text-brand-navy-400">
                    הפרטים שלכם מוגנים ולא יועברו לצד שלישי.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
