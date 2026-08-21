"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#09090b] text-white pt-16 pb-8 border-t border-zinc-800/80" dir="rtl">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* الأعمدة الرئيسية */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 text-right">
          
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
              تحف جدارية مرسومة يدوياً بفرشاة الفنان وخامات فاخرة، مع خدمة المعاينة الرقمية الأولى في دولة الإمارات.
            </p>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">روابط سريعة</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li><Link href="/#hero" className="hover:text-[#E52328] transition-colors">الرئيسية</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-[#E52328] transition-colors">كيف نعمل</Link></li>
              <li><Link href="/#gallery" className="hover:text-[#E52328] transition-colors">معرض اللوحات</Link></li>
              <li><Link href="/#size-guide" className="hover:text-[#E52328] transition-colors">دليل المقاسات</Link></li>
              <li><Link href="/#faq" className="hover:text-[#E52328] transition-colors">الأسئلة الشائعة</Link></li>
            </ul>
          </div>

          {/* العمود الثالث: التصنيفات */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">التصنيفات</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li><Link href="/#gallery" className="hover:text-[#E52328] transition-colors">لوحات تجريدية (Abstract)</Link></li>
              <li><Link href="/#gallery" className="hover:text-[#E52328] transition-colors">خط عربي وأوراق ذهب</Link></li>
              <li><Link href="/#gallery" className="hover:text-[#E52328] transition-colors">لوحات كلاسيك ومودرن</Link></li>
              <li><Link href="/#hero" className="hover:text-[#E52328] transition-colors">طلب رسم خاص</Link></li>
            </ul>
          </div>

          {/* العمود الرابع: تواصل معنا */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">تواصل معنا</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-center gap-2.5 justify-start">
                <MapPin className="w-4 h-4 text-[#E52328] shrink-0" />
                <span>الإمارات العربية المتحدة</span>
              </li>
              <li className="flex items-center gap-2.5 justify-start">
                <Phone className="w-4 h-4 text-[#E52328] shrink-0" />
                <a 
                  href="tel:+971586542399" 
                  className="hover:text-white"
                >
                  <span dir="ltr" className="inline-block text-left">
                    {"\u200E"}+971 58 654 2399
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
          
          <p>© 2026 JULEATIVE ART. جميع الحقوق محفوظة.</p>

          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              شروط الاستخدام والطلب
            </Link>
            <Link href="/delivery" className="hover:text-white transition-colors">
              التوصيل والتركيب
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}