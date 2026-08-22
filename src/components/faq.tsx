"use client";

import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function FAQ() {
  const { lang } = useLanguage();

  const faqsAr = [
    {
      q: "هل لوحات جوليتيف مطبوعة ولا مرسومة يدوياً؟",
      a: "كل لوحاتنا تترسم يدوياً 100% على قماش الكانفس بالفرشاة وسكين الرسم، مب تصميمات مطبوعة. عشان كذا تقدر تشوف وتلمس ضربات الفرشاة وسماكة المعجون والألوان على اللوحة نفسها.",
    },
    {
      q: "كيف أعرف مقاس اللوحة المناسب لجداري؟",
      a: "القاعدة البسيطة: اللوحة تاخذ من 60% إلى 75% من عرض الأثاث اللي تحتها (الكنبة أو السرير). وارتفاع منتصف اللوحة يفضل يكون على مستوى النظر (حوالي 145 إلى 152 سم من الأرض). طرش لنا صورة الجدار ونحن بنضبط لك المقاس المناسب بالضبط.",
    },
    {
      q: "هل أقدر أطلب لوحة بمقاس أو تصميم معين؟",
      a: "هيه نعم، المقاسات والتصاميم عندنا حسب الطلب. بنساعدك نحدد المقاس والألوان الأنسب على حسب مساحة الجدار وديكور بيتك قبل ما يبدأ الفنان بالتنفيذ.",
    },
    {
      q: "هل أقدر أعدل على ألوان اللوحة الجدارية؟",
      a: "هيه نعم، حسب التصميم نقدر نعدل درجات الألوان لتتناسق مع أثاث وديكور مكانك، وبنأكد لك الدرجات النهائية قبل ما يبدأ الفنان بالرسم.",
    },
    {
      q: "هل تطلع اللوحة مطابقة 100% للصورة؟",
      a: "لأن كل لوحة تتنفذ يدوياً بفرشاة الفنان، طبيعي يكون في اختلافات فنية بسيطة جداً في ضربات الفرشاة والتفاصيل، وده اللي يعطي كل قطعة طابعها المخصص والفريد. لكن الشكل العام والألوان والمقاس يكونون نفس المتفق عليه بالضبط.",
    },
    {
      q: "هل خدمة المعاينة والتصميم المبدئي بفلوس؟",
      a: "لا، التصميم المبدئي اللي يراويك شكل اللوحة على جدارك مجاني تماماً وبدون أي التزام. تدفع بس لو عجبك الشكل النهائي وقررت تطلب.",
    },
    {
      q: "كم ياخذ وقت المعاينة والتنفيذ؟",
      a: "التصميم المبدئي على صورة الجدار ياخذ عادة أقل من ساعة. وبعد موافقتك، رسم اللوحة يدوياً ياخذ من 3 إلى 5 أيام عمل حسب المقاس وتفاصيل القطعة، وبعدها تتغلف وتتشحن لك.",
    },
    {
      q: "هل توصلون لكل إمارات الدولة؟",
      a: "نعم، نوصل لجميع إمارات الدولة (أبوظبي، دبي، الشارقة، عجمان، أم القيوين، رأس الخيمة، والفجيرة) مع تغليف آمن يضمن وصول اللوحة بحالة ممتازة وجاهزة للتعليق.",
    },
  ];

  const faqsEn = [
    {
      q: "Are Juleative artworks hand-painted or printed?",
      a: "All our artworks are 100% hand-painted on premium canvas using brushes, oil/acrylic paints, and palette knives — never digital prints. You can visibly see and feel the rich texture and heavy paint layers on the canvas.",
    },
    {
      q: "How do I determine the right artwork size for my wall?",
      a: "A simple rule of thumb: The canvas width should cover 60% to 75% of the furniture underneath it (sofa or bed headboard). Center height is recommended at eye level (approx 145–152 cm from floor). Simply send us your wall photo and we will calculate the exact fit for you.",
    },
    {
      q: "Can I request custom sizes or specific artwork designs?",
      a: "Yes, absolutely! All dimensions and artwork styles are fully customizable. We help you pick the perfect size and palette based on your wall space and interior design before painting begins.",
    },
    {
      q: "Is it possible to adjust color shades in the painting?",
      a: "Yes! We can tweak color tones to match your sofas, rugs, or wall paint perfectly. Final color palettes are confirmed with you before our artists start painting.",
    },
    {
      q: "Will my artwork look 100% identical to the reference photo?",
      a: "Because each piece is hand-painted from scratch by master artists, subtle natural variations in brushwork texture occur, making your painting a truly unique 1-of-1 piece. However, the overall composition, color tones, and size will strictly match what was approved.",
    },
    {
      q: "Is the digital wall preview service free of charge?",
      a: "Yes, our digital wall mockup showing the artwork on your actual wall photo is 100% free with no obligation to purchase. You only pay when you love the preview and decide to place your order.",
    },
    {
      q: "How long does design preview and production take?",
      a: "The initial wall photo preview takes less than 1 hour. Once approved, hand-painting takes 3 to 5 business days depending on size and texture detail, followed by secure packaging and delivery.",
    },
    {
      q: "Do you deliver to all Emirates across the UAE?",
      a: "Yes! We deliver across all seven emirates (Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah) with specialized protective packaging to ensure safe arrival ready for hanging.",
    },
  ];

  const currentFaqs = lang === "ar" ? faqsAr : faqsEn;

  return (
    <section id="faq" className="py-20 bg-white border-b border-zinc-200/60 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#E52328] font-bold text-xs sm:text-sm mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>{lang === "ar" ? "إجابات فورية" : "Instant Answers"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-4">
            {lang === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {lang === "ar" 
              ? "كل اللي تحتاجه تعرفه عن اللوحات، طريقة الاختيار، والتوصيل قبل ما تطلب."
              : "Everything you need to know about our artwork, selection process, and delivery."}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-start ${lang === "ar" ? "text-right" : "text-left"}`}>
          <div className="space-y-4">
            {currentFaqs.slice(0, 4).map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50/70 border border-zinc-200/80 shadow-sm">
                <h3 className="font-bold text-zinc-900 text-base mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {currentFaqs.slice(4).map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50/70 border border-zinc-200/80 shadow-sm">
                <h3 className="font-bold text-zinc-900 text-base mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}