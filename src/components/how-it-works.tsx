"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Camera, Palette, Eye, Truck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "طرش صورة المكان",
      description: "لقطة سريعة بالتلفون للمكان اللي حاب تزيّنه باللوحة.",
      icon: Camera,
    },
    {
      step: "02",
      title: "اختر التصميم والمقاس",
      description: "بنختار اللوحة والمقاس المناسبين ونطرش لك تصور واقعي خلال أقل من ساعة.",
      icon: Palette,
    },
    {
      step: "03",
      title: "عاين اللوحة على جدارك",
      description: "نطرش لك تصميم رقمي واقعي اطلب بس لما تعجبك النتيجة، بدون أي التزام.",
      icon: Eye,
    },
    {
      step: "04",
      title: "الرسم والتوصيل",
      description: "يرسمها الفنّان بالإيد بأعلى جودة ونوصلها لين باب بيتك في الإمارات.",
      icon: Truck,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-zinc-950 text-white relative overflow-hidden border-y border-zinc-800">
      
      {/* إضاءة حمراء خلفية خفيفة للتصميم */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E52328]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        
        {/* العناوين */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            كيف نعمل؟ <span className="text-[#E52328]">4 خطوات بسيطة</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
            تجربة سهلة ومخصصة بالكامل تضمن لك لوحة تفصيلية لبيتك بدون أي تكهنات.
          </p>
        </div>

        {/* كروت الخطوات بالألوان الداكنة الفاخرة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-right" dir="rtl">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card 
                key={idx} 
                className="border-zinc-800 bg-zinc-900/90 text-white rounded-2xl relative overflow-hidden shadow-xl hover:border-zinc-700 hover:bg-zinc-900 transition-all group duration-300"
              >
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-800 text-[#E52328] border border-zinc-700/80 flex items-center justify-center shadow-inner group-hover:bg-[#E52328] group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-black text-zinc-800 group-hover:text-[#E52328]/40 transition-colors">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="font-bold text-white text-lg mb-2 group-hover:text-[#E52328] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}