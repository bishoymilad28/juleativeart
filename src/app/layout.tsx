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
  title: "جوليتيف أرت | لوحات جدارية مخصصة لمساحتك",
  description: "حوّل جدران منزلك أو مكتبك إلى تحفة فنية. اختر تصميمك، اعرضه على جدارك، ونحن ننفذه لك بأعلى جودة في الإمارات.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "جوليتيف أرت | لوحات جدارية مخصصة لمساحتك",
    description: "حوّل جدران منزلك أو مكتبك إلى تحفة فنية. اختر تصميمك، اعرضه على جدارك، ونحن ننفذه لك بأعلى جودة في الإمارات.",
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
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}