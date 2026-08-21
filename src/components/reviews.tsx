"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      name: "سارة المهيري",
      location: "دبي - نخلة جميرا",
      text: "اللوحة أضافت روح وتفاصيل مش طبيعية لغرفة المعيشة! خدمة المعاينة الرقمية على الجدار خلّتني أختار المقاس الصح بدون أي خوف.",
      rating: 5,
    },
    {
      name: "م. خالد المازمي",
      location: "الشارقة - الجادة",
      text: "ملمس الألوان الزيتية مع أوراق الذهب مبهر جداً على الواقع. الدقة والتغليف الممتاز يثبت إنهم محترفين حقيقيين.",
      rating: 5,
    },
    {
      name: "عبدالله الشامسي",
      location: "أبوظبي - الخالدية",
      text: "التوصيل كان سريع والتركيب ممتاز. صوّرت الجدار وبعتتلهوم ومقاس اللوحة طلع مضبوووط بالملي.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#E52328] font-bold text-sm tracking-wide">ثقة نعتز بها</span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mt-1">
            ماذا يقول عملاؤنا في الإمارات؟
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <Card key={idx} className="border-zinc-200/80 bg-white rounded-2xl relative shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 flex flex-col justify-between h-full text-right">
                <div>
                  <Quote className="w-8 h-8 text-red-100 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-zinc-700 text-sm leading-relaxed mb-6">
                    "{rev.text}"
                  </p>
                </div>

                <div className="border-t border-zinc-100 pt-4">
                  <h4 className="font-bold text-zinc-900 text-base">{rev.name}</h4>
                  <span className="text-xs text-zinc-400">{rev.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}