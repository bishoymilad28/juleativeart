import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://juleativeart.com"),
  title: {
    default: "جوليتيف أرت | لوحات جدارية مخصصة لمساحتك في الإمارات",
    template: "%s | Juleative Art",
  },
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
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  // إعدادات الـ SEO المتعددة اللغات لمنع Duplicate Content
  alternates: {
    canonical: "https://juleativeart.com",
    languages: {
      "ar-AE": "https://juleativeart.com",
      "en-AE": "https://juleativeart.com",
    },
  },
  openGraph: {
    title: "جوليتيف أرت | لوحات جدارية مخصصة لمساحتك",
    description:
      "لوحات جدارية فاخرة مرسومة يدوياً 100% بفرشاة الفنان مع خدمة المعاينة الكاميرا الفورية على جدارك في الإمارات.",
    url: "https://juleativeart.com",
    siteName: "Juleative Art",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 800,
        alt: "Juleative Art Logo",
      },
    ],
    locale: "ar_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-sans antialiased bg-slate-50/50 text-foreground">
        {children}
      </body>
    </html>
  );
}