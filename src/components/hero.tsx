"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Sparkles, ArrowLeft } from "lucide-react";
import { ImageSlider } from "@/components/image-slider";

export function Hero({ onOpenModal }: { onOpenModal?: () => void }) {
  const steps = [
    {
      step: "1",
      title: "طرش صورة المكان",
      description: "صورة واحدة واضحة بالتلفون تكفي عشان نبدأ.",
    },
    {
      step: "2",
      title: "شوف التصميم على جدارك",
      description: "بنختار اللوحة والمقاس المناسبين ونطرش لك تصور واقعي خلال أقل من ساعة.",
    },
    {
      step: "3",
      title: "عجبك؟ الرسام يبدأ التنفيذ",
      description: "اطلب بس لما تعجبك النتيجة، وتترسم بالإيد مخصوص لك — بدون أي التزام.",
    },
  ];

  const badges = [
    "رسم يدوي 100%",
    "مب طباعة",
    "قياسات على الطلب",
    "معاينة مجانية",
  ];

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-20 bg-slate-50/50 border-b border-zinc-200/60">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* الجزء العلوي: النصوص والسلايدر */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* الجانب الأيمن: النصوص */}
          <div className="lg:col-span-6 text-right flex flex-col items-start">
            
            <Badge variant="outline" className="mb-4 px-4 py-2 rounded-full border-red-200 bg-red-50/80 text-red-700 font-medium text-xs sm:text-sm flex items-center gap-2 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#E52328]" />
              <span>لوحات جدارية مرسومة يدوياً تناسب جدارك</span>
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-[1.2]">
              جدارك يستاهل لوحة <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#E52328] via-red-600 to-zinc-900">
                مرسومة على مقاسه بالضبط
              </span>
            </h1>

            <p className="mt-4 text-base text-zinc-600 leading-relaxed font-normal">
              طرش لنا صورة جدارك، وهنساعدك تختار اللوحة والمقاس والألوان المناسبة لديكور بيتك، وتشوف شكلها على المكان قبل التنفيذ. رسم يدوي مخصص بفرشاة الفنان.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Button 
                onClick={onOpenModal} 
                size="lg" 
                className="w-full sm:w-auto bg-[#E52328] hover:bg-[#C81E23] text-white font-bold text-base rounded-full px-8 py-6 shadow-xl shadow-red-600/20 transition-all hover:scale-[1.02] gap-3"
              >
                <Camera className="w-5 h-5 text-white" />
                <span>طرش صورة جدارك الحين</span>
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-zinc-300 hover:bg-zinc-100 text-zinc-900 font-semibold text-base rounded-full px-8 py-6 gap-2 cursor-pointer"
                onClick={() => {
                  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>استكشف المعرض</span>
                <ArrowLeft className="w-4 h-4 text-zinc-500" />
              </Button>
            </div>

            {/* تم نقل التاجات والجملة هنا بدلاً من الشريط القديم */}
            <div className="mt-8 pt-6 border-t border-zinc-200/80 w-full text-right">
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                {badges.map((badge, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-red-50 text-[#E52328] hover:bg-red-100 font-bold px-3 py-1 text-xs rounded-full border border-red-100/60">
                    {badge}
                  </Badge>
                ))}
              </div>
              <p className="text-zinc-500 text-xs sm:text-sm font-medium">
                ما يحتاج تعرف القياس أو تختار اللوحة الحين — طرش لنا صورة جدارك وفالك طيب، بنساعدك.
              </p>
            </div>

          </div>

          {/* الجانب الأيسر: السلايدر التفاعلي */}
          <div className="lg:col-span-6 w-full">
            <ImageSlider
              beforeImage="/hero-beforev2.jpg"
              afterImage="/hero-afterv2.jpg"
            />
          </div>

        </div>

      </div>
    </section>
  );
}