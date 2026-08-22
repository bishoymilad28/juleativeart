"use client";

import { Brush, Sparkles, ShieldCheck, Palette, Frame, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function WhyUs() {
  const { lang, t } = useLanguage();

  const features = [
    {
      icon: Brush,
      title: t.whyUs.feat1Title,
      description: t.whyUs.feat1Desc,
    },
    {
      icon: Sparkles,
      title: t.whyUs.feat2Title,
      description: t.whyUs.feat2Desc,
    },
    {
      icon: Frame,
      title: t.whyUs.feat3Title,
      description: t.whyUs.feat3Desc,
    },
    {
      icon: Palette,
      title: t.whyUs.feat4Title,
      description: t.whyUs.feat4Desc,
    },
    {
      icon: ShieldCheck,
      title: t.whyUs.feat5Title,
      description: t.whyUs.feat5Desc,
    },
    {
      icon: HeartHandshake,
      title: t.whyUs.feat6Title,
      description: t.whyUs.feat6Desc,
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-zinc-900 text-white relative overflow-hidden">
      {/* إضاءات خلفية داكنة وفخمة */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        
        {/* العنوان */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E52328] font-bold text-sm tracking-widest uppercase mb-2 block">
            {t.whyUs.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.whyUs.title} <span className="text-[#E52328]">{t.whyUs.titleHighlight}</span> {t.whyUs.titleEnd}
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* الشبكة (Grid) */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${lang === "ar" ? "text-right" : "text-left"}`}>
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="p-8 rounded-2xl bg-zinc-800/50 border border-zinc-800 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-red-950/50 border border-red-800/30 text-[#E52328] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}