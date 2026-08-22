"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#09090b] text-white pt-16 pb-8 border-t border-zinc-800/80">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* الأعمدة الرئيسية */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 ${lang === "ar" ? "text-right" : "text-left"}`}>
          
          {/* العمود الأول: اللوجو والوصف */}
          <div className="space-y-4">
            <Image 
              src="/logo.png" 
              alt="Juleative Art" 
              width={180} 
              height={45} 
              className="h-9 w-auto object-contain brightness-0 invert" 
              priority
            />
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xs">
              {t.footer.desc}
            </p>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li><Link href="/#hero" className="hover:text-[#E52328] transition-colors">{t.nav.home}</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-[#E52328] transition-colors">{t.nav.howItWorks}</Link></li>
              <li><Link href="/#gallery" className="hover:text-[#E52328] transition-colors">{t.nav.gallery}</Link></li>
              <li><Link href="/#size-guide" className="hover:text-[#E52328] transition-colors">{t.nav.sizeGuide}</Link></li>
              <li><Link href="/#faq" className="hover:text-[#E52328] transition-colors">{t.nav.faq}</Link></li>
            </ul>
          </div>

          {/* العمود الثالث: التصنيفات */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">{t.footer.categories}</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li><Link href="/#gallery" className="hover:text-[#E52328] transition-colors">{t.gallery.abstract}</Link></li>
              <li><Link href="/#gallery" className="hover:text-[#E52328] transition-colors">{t.gallery.calligraphy}</Link></li>
              <li><Link href="/#gallery" className="hover:text-[#E52328] transition-colors">{t.gallery.modern}</Link></li>
              <li><Link href="/#hero" className="hover:text-[#E52328] transition-colors">{lang === "ar" ? "طلب رسم خاص" : "Custom Artwork Order"}</Link></li>
            </ul>
          </div>

          {/* العمود الرابع: تواصل معنا */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-center gap-2.5 justify-start">
                <MapPin className="w-4 h-4 text-[#E52328] shrink-0" />
                <span>{t.footer.location}</span>
              </li>
              <li className="flex items-center gap-2.5 justify-start">
                <Phone className="w-4 h-4 text-[#E52328] shrink-0" />
                <a 
                  href="tel:+971586542399" 
                  className="hover:text-white"
                >
                  <span dir="ltr" className="inline-block">
                    +971 58 654 2399
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 justify-start">
                <Mail className="w-4 h-4 text-[#E52328] shrink-0" />
                <a href="mailto:sales@juleativeart.com" className="hover:text-white">
                  sales@juleativeart.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* الجزء السفلي والسياسات */}
        <div className="border-t border-zinc-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          
          <p>{t.footer.rights}</p>

          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              {t.footer.terms}
            </Link>
            <Link href="/delivery" className="hover:text-white transition-colors">
              {t.footer.delivery}
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}