"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";

export function HandPaintedFeatures() {
  const { lang, t } = useLanguage();

  const features = [
    {
      title: t.handPainted.feat1Title,
      description: t.handPainted.feat1Desc,
      image: "/pic1.jpg",
    },
    {
      title: t.handPainted.feat2Title,
      description: t.handPainted.feat2Desc,
      image: "/pic2.jpg",
    },
    {
      title: t.handPainted.feat3Title,
      description: t.handPainted.feat3Desc,
      image: "/pic3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-zinc-200/60">
      <div className="container mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900">
            {t.handPainted.title} <span className="text-[#E52328]">{t.handPainted.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-zinc-600 text-sm sm:text-base leading-relaxed">
            {t.handPainted.desc}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${lang === "ar" ? "text-right" : "text-left"}`}>
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