import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "جوليتيف أرت | لوحات جدارية مخصصة لمساحتك",
  description: "حوّل جدران منزلك أو مكتبك إلى تحفة فنية. اختر تصميمك، اعرضه على جدارك، ونحن ننفذه لك بأعلى جودة في الإمارات.",
icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}