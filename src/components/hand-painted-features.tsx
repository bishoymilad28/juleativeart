"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function HandPaintedFeatures() {
  const features = [
    {
      title: "الفنان يرسمها بإيده",
      description: "كل لوحة تتنفذ بالفرشاة وسكين الرسم على قماش الكانفس، مب طباعة أبداً.",
      image: "/pic1.jpg", // الصورة الأولى (الفنان واللوحة على الإستاند)
    },
    {
      title: "ألوان تتخلط خصوص لك",
      description: "نخلط ونضبط درجات الأحمر والأسود والذهب لتتناسق مع ديكور بيتك.",
      image: "/pic2.jpg", // الصورة الثانية (باليتة الألوان)
    },
    {
      title: "ملمس بارز لضربات الفرشاة",
      description: "تقدر تحس بسماكة المعجون، ورق الذهب، وملمس الكانفس في اللوحة نفسها.",
      image: "/pic3.jpg", // الصورة الثالثة (ملمس ضربات الفرشاة القريب)
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-zinc-200/60">
      <div className="container mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900">
            مرسومة بالإيد، <span className="text-[#E52328]">مب مطبوعة</span>
          </h2>
          <p className="mt-3 text-zinc-600 text-sm sm:text-base leading-relaxed">
            الفرق بين اللوحة الجدارية الرسم والتابلوه المطبوع يبين في التفاصيل — في ملمس ضربات الفرشاة، وبريق أوراق الذهب، وفي إن ما شي قطعتين طالعين بنفس الشكل بالضبط.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right" dir="rtl">
          {features.map((item, idx) => (
            <Card key={idx} className="border-zinc-200/80 bg-slate-50/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-zinc-900 text-lg mb-2 group-hover:text-[#E52328] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}