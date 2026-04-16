import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Heebo } from "next/font/google";
import "./globals.css";

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: 'מיכל סיימון | עורכת דין - נדל"ן ומקרקעין',
    template: "%s | מיכל סיימון - עורכת דין",
  },
  description:
    'עורכת דין מיכל סיימון - משרד עורכי דין המתמחה בנדל"ן, מקרקעין ועסקאות נדל"ן. ליווי משפטי מקצועי ואישי בבית שמש והסביבה.',
  keywords: [
    "עורכת דין",
    'נדל"ן',
    "מקרקעין",
    "בית שמש",
    'עסקאות נדל"ן',
    "ליווי משפטי",
    "מיכל סיימון",
  ],
  authors: [{ name: "מיכל סיימון" }],
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: "מיכל סיימון | עורכת דין",
    title: 'מיכל סיימון | עורכת דין - נדל"ן ומקרקעין',
    description:
      'משרד עורכי דין המתמחה בנדל"ן, מקרקעין ועסקאות נדל"ן. ליווי משפטי מקצועי ואישי.',
    images: [
      {
        url: "/images/og-michal.jpg",
        width: 1200,
        height: 630,
        alt: 'מיכל סיימון - עורכת דין נדל"ן ומקרקעין',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'מיכל סיימון | עורכת דין - נדל"ן ומקרקעין',
    description:
      'משרד עורכי דין המתמחה בנדל"ן, מקרקעין ועסקאות נדל"ן. ליווי משפטי מקצועי ואישי.',
    images: ["/images/og-michal.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://michal-simon-law.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${frankRuhlLibre.variable} ${heebo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
