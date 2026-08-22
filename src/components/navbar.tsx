"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Camera, Globe } from "lucide-react";
import { translations } from "@/data/translations";

export function Navbar({ onOpenModal }: { onOpenModal?: () => void }) {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const t = translations[lang];

  const toggleLanguage = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-zinc-200/80">
      <div className="container mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        {/* أزرار الإجراءات (زر صور جدارك + زر اللغة) */}
        <div className="flex items-center gap-2.5">
          <Button 
            type="button"
            onClick={onOpenModal} 
            className="bg-[#E52328] hover:bg-[#C81E23] text-white font-bold text-xs sm:text-sm rounded-full px-4 sm:px-5 py-2.5 flex items-center gap-2 shadow-md shadow-red-600/10 cursor-pointer"
          >
            <Camera className="w-4 h-4" />
            <span>{t.nav.snapWall}</span>
          </Button>

          {/* زر التبديل بين عربي و EN */}
          <button 
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-zinc-800 transition-colors cursor-pointer border border-zinc-200/80 font-bold text-xs shadow-sm"
          >
            <Globe className="w-4 h-4 text-[#E52328]" />
            <span>{lang === "ar" ? "EN" : "عربي"}</span>
          </button>
        </div>

        {/* القائمة الرئيسية */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs sm:text-sm font-semibold text-zinc-700">
          <Link href="/#hero" className="hover:text-[#E52328] transition-colors">{t.nav.home}</Link>
          <Link href="/#how-it-works" className="hover:text-[#E52328] transition-colors">{t.nav.howItWorks}</Link>
          <Link href="/#gallery" className="hover:text-[#E52328] transition-colors">{t.nav.gallery}</Link>
          <Link href="/#size-guide" className="hover:text-[#E52328] transition-colors">{t.nav.sizeGuide}</Link>
          <Link href="/#faq" className="hover:text-[#E52328] transition-colors">{t.nav.faq}</Link>
        </nav>

        {/* الشعار */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Juleative Art" 
            width={160} 
            height={40} 
            className="h-12 sm:h-14 w-auto object-contain cursor-pointer"
            priority 
          />
        </Link>

      </div>
    </header>
  );
}