"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export function Navbar({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200/80">
      <div className="container mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        {/* زر صور جدارك */}
        <Button 
          type="button"
          onClick={onOpenModal} 
          className="bg-[#E52328] hover:bg-[#C81E23] text-white font-bold text-xs sm:text-sm rounded-full px-5 py-2.5 flex items-center gap-2 shadow-md shadow-red-600/10 cursor-pointer"
        >
          <Camera className="w-4 h-4" />
          <span>صور جدارك</span>
        </Button>

        {/* القائمة الرئيسية - الروابط محدثة بدعم الصفحات الفرعية */}
        <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-semibold text-zinc-700">
          <Link href="/#hero" className="hover:text-[#E52328] transition-colors">الرئيسية</Link>
          <Link href="/#how-it-works" className="hover:text-[#E52328] transition-colors">كيف نعمل</Link>
          <Link href="/#gallery" className="hover:text-[#E52328] transition-colors">معرض اللوحات</Link>
          <Link href="/#size-guide" className="hover:text-[#E52328] transition-colors">دليل المقاسات</Link>
          <Link href="/#faq" className="hover:text-[#E52328] transition-colors">الأسئلة الشائعة</Link>
        </nav>

        {/* الشعار - يرجع للرئيسية عند الضغط عليه */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Juleative Art" 
            width={160} 
            height={40} 
            className="h-14 w-auto object-contain cursor-pointer"
            priority 
          />
        </Link>

      </div>
    </header>
  );
}