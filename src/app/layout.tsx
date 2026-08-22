import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "جوليتيف أرت | لوحات جدارية مخصصة لمساحتك في الإمارات",
  description:
    "لوحات جدارية فاخرة مرسومة يدوياً 100% بفرشاة الفنان. جرب معاينة اللوحة فوراً على جدارك باستخدام الكاميرا قبل الطلب في دبي والإمارات.",
  keywords: [
    "لوحات جدارية الإمارات",
    "لوحات رسم يدوي دبي",
    "تابلوهات مودرن الشارقة",
    "معاينة اللوحات على الجدار",
    "Custom Wall Art UAE",
    "Hand painted canvas Dubai",
    "Juleative Art",
  ],
  authors: [{ name: "Juleative Art" }],
  creator: "Juleative Art",
  publisher: "Juleative Art",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://juleativeart.com"),
  alternates: {
    canonical: "/",
    languages: {
      "ar-AE": "/",
      "en-AE": "/",
    },
  },
  verification: {
    google: "4z9orUniwznL2weOGMLZzKabgBegyE5P4gh5klq5O2k",
  },
  openGraph: {
    title: "جوليتيف أرت | لوحات جدارية مخصصة لمساحتك",
    description:
      "لوحات جدارية فاخرة مرسومة يدوياً 100% بفرشاة الفنان مع خدمة المعاينة الكاميرا الفورية على جدارك في الإمارات.",
    url: "https://juleativeart.com",
    siteName: "Juleative Art",
    locale: "ar_AE",
    type: "website",
    images: [
      {
        url: "https://juleativeart.com/og-image.jpg",
        width: 800,
        height: 800,
        alt: "Juleative Art Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "جوليتيف أرت | لوحات جدارية مخصصة لمساحتك",
    description:
      "لوحات جدارية فاخرة مرسومة يدوياً 100% بفرشاة الفنان مع خدمة المعاينة الكاميرا الفورية على جدارك في الإمارات.",
    images: ["https://juleativeart.com/og-image.jpg"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-sans antialiased bg-slate-50/50 text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}