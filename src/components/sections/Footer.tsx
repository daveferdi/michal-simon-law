import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[1] bg-brand-navy-900/95 pb-8 pt-16">
      <div className="content-standard">
        {/* Top row */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo & tagline */}
          <div className="text-center md:text-start">
            <Image
              src="/images/logo-icon.png"
              alt="מיכל סיימון - עורכת דין"
              width={40}
              height={40}
              className="mx-auto h-10 w-10 rounded-full md:mx-0"
            />
            <p className="mt-3 text-body-sm font-light text-cream-300/50">
              עורכת דין | נדל&quot;ן ומקרקעין
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-3 text-body-sm text-cream-300/50 md:items-end">
            <a
              href={CONTACT_INFO.phoneHref}
              className="flex items-center gap-2 transition-colors duration-300 hover:text-terracotta-500"
              dir="ltr"
            >
              <Phone size={13} />
              {CONTACT_INFO.phone}
            </a>
            <a
              href={CONTACT_INFO.emailHref}
              className="flex items-center gap-2 transition-colors duration-300 hover:text-terracotta-500"
              dir="ltr"
            >
              <Mail size={13} />
              {CONTACT_INFO.email}
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={13} />
              {CONTACT_INFO.address}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-terracotta-500/15" />

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-2 text-center text-body-sm font-light text-cream-300/30 md:flex-row md:justify-between">
          <p>&copy; {year} מיכל סיימון, עו&quot;ד. כל הזכויות שמורות.</p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors duration-300 hover:text-cream-300/60">
              תנאי שימוש
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-cream-300/60">
              מדיניות פרטיות
            </a>
          </div>
        </div>

        {/* Credit */}
        <div className="mt-6 border-t border-cream-300/5 pt-5 text-center">
          <p className="text-body-sm font-light text-cream-300/20">
            Designed &amp; Built by{" "}
            <span className="text-cream-300/35">FerdiAI</span>
            {" "}&mdash;{" "}David Rosenberg
          </p>
        </div>
      </div>
    </footer>
  );
}
