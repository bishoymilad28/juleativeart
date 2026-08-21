"use client";

import { Brush, Sparkles, ShieldCheck, Palette, Frame, HeartHandshake } from "lucide-react";

export function WhyUs() {
  const features = [
    {
      icon: Brush,
      title: "رسم يدوي 100% بفرشاة الفنان",
      description: "كل لوحة هي قطعة فنية فريدة تُجيد رسمها أيدي فنانين محترفين باستخدام ألوان زيتية وأكريليك عالية الجودة.",
    },
    {
      icon: Sparkles,
      title: "خامات وأوراق ذهب فاخرة",
      description: "نستخدم أوراق الذهب والفضة (Gold Leaf) مع معاجين البارز (Texture) لإعطاء عمق وملمس ملموس للجدار.",
    },
    {
      icon: Frame,
      title: "إطارات خشبية مخصصة",
      description: "إطارات من خشب الجوز والسنديان الطبيعي المصممة خصيصاً لتناسب ديكور وأثاث مساحتك.",
    },
    {
      icon: Palette,
      title: "تعديل الألوان حسب طلبك",
      description: "يمكننا تعديل درجات الألوان لتتناسب تماماً مع قماش الكنب، السجاد، أو لون طلاء جدران بيتك.",
    },
    {
      icon: ShieldCheck,
      title: "ضمان ثبات الألوان ومدى الحياة",
      description: "طبقات حماية خاصة تحمي اللوحة من الرطوبة والأتربة وتضمن بقاء ألوانها زاهية لعشرات السنين.",
    },
    {
      icon: HeartHandshake,
      title: "معاينة حية وتعديل قبل الشحن",
      description: "نرسل لك فيديو وصوراً للوحة بعد انتهاء رسمها وقبل تأطيرها لشحنها بعد موافقتك الكاملة.",
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
            سر القيمة والفخامة
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            لماذا تختار <span className="text-[#E52328]">جوليتيف أرت</span> لمساحتك؟
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            نحن لا نبيع مجرد صور مطبوعة، بل نقدم تحفاً فنية مرسومة بيد فنان تعكس ذوقك الرفيع وتصنع فارقاً حقيقياً في بيتك.
          </p>
        </div>

        {/* الشبكة (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="p-8 rounded-2xl bg-zinc-800/50 border border-zinc-800 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1 text-right"
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