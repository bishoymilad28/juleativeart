"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Camera, Globe } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Navbar({ onOpenModal }: { onOpenModal?: () => void }) {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-zinc-200/80">
      <div className="container mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* الأزرار اليمنى/اليسرى */}
        <div className="flex items-center gap-3 shrink-0">
          <Button 
            type="button"
            onClick={onOpenModal} 
            className="bg-[#E52328] hover:bg-[#C81E23] text-white font-bold text-xs sm:text-sm rounded-full px-4 sm:px-5 py-2.5 flex items-center gap-2 shadow-md shadow-red-600/10 cursor-pointer"
          >
            <Camera className="w-4 h-4" />
            <span>{t.nav.snapWall}</span>
          </Button>

          <button 
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300 font-bold text-xs cursor-pointer transition-all shadow-sm"
          >
            <Globe className="w-4 h-4 text-[#E52328]" />
            <span>{lang === "ar" ? "EN" : "عربي"}</span>
          </button>
        </div>

        {/* القائمة الوسطى */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs sm:text-sm font-semibold text-zinc-700">
          <Link href="/#hero" className="hover:text-[#E52328] transition-colors">{t.nav.home}</Link>
          <Link href="/#how-it-works" className="hover:text-[#E52328] transition-colors">{t.nav.howItWorks}</Link>
          <Link href="/#gallery" className="hover:text-[#E52328] transition-colors">{t.nav.gallery}</Link>
          <Link href="/#size-guide" className="hover:text-[#E52328] transition-colors">{t.nav.sizeGuide}</Link>
          <Link href="/#faq" className="hover:text-[#E52328] transition-colors">{t.nav.faq}</Link>
        </nav>

        {/* الشعار */}
        <Link href="/" className="flex items-center shrink-0">
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