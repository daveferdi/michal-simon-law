import { CONTACT_INFO } from "@/lib/constants";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: "מיכל סיימון - עורכת דין",
    alternateName: "Michal Simon Law",
    description:
      'משרד עורכי דין המתמחה בנדל"ן, מקרקעין ועסקאות נדל"ן. ליווי משפטי מקצועי ואישי.',
    url: "https://michalsimonlaw.com",
    telephone: "+972547850530",
    email: CONTACT_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "רח׳ רבי יצחק נפחא 28",
      addressLocality: "בית שמש",
      addressCountry: "IL",
    },
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    priceRange: "$$",
    openingHours: "Su-Th 09:00-18:00",
    image: "https://michalsimonlaw.com/images/og-michal.jpg",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
