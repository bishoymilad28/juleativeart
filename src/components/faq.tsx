"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      q: "هل لوحات جوليتيف مطبوعة ولا مرسومة يدوياً؟",
      a: "كل لوحاتنا يتم رسمها يدوياً على قماش الكانفس بالألوان والفرشاة وسكين الرسم، وليست تصميمات مطبوعة. عشان كدة تقدر تشوف وتلمس ضربات الفرشاة وسماكة المعجون في القطعة نفسها.",
    },
    {
      title: "كيف أعرف مقاس اللوحة المناسب لجداري؟",
      a: "القاعدة البسيطة: اللوحة تأخذ من 60% إلى 75% من عرض الأثاث اللي تحتها (الكنبة أو السرير). وارتفاع منتصف اللوحة يفضل يكون على مستوى النظر (حوالي 145 إلى 152 سم من الأرض). طرش لنا صورة الجدار ونحن بنضبط المقاس لك بالضبط.",
    },
    {
      q: "هل أقدر أطلب لوحة بمقاس أو تصميم معين؟",
      a: "هيه نعم، المقاسات والتصاميم عندنا حسب الطلب. بنساعدك نحدد المقاس والألوان الأنسب حسب مساحة الجدار والديكور الموجود قبل ما يبدأ التنفيذ.",
    },
    {
      q: "هل ممكن أعدل على ألوان اللوحة الجدارية؟",
      a: "حسب التصميم، نفضل ونقدر نعدل درجات الألوان لتتماشى بشكل أفضل مع أثاث وديكور مكانك، ونأكد لك الدرجات النهائية قبل ما يبدأ الفنان بالرسم.",
    },
    {
      q: "هل كل لوحة تطلع مطابقة 100% للصورة؟",
      a: "لأن كل لوحة تترسم يدوياً بفرشاة الفنان، ممكن يكون في اختلافات فنية بسيطة جداً في ضربات الفرشاة والتفاصيل، وده اللي يعطي كل قطعة طابعها المخصص والفريد. لكن الشكل العام والألوان والمقاس يكونون نفس المتفق عليه بالضبط.",
    },
    {
      q: "هل خدمة المعاينة والتصميم المبدئي بفلوس؟",
      a: "لا، التصميم المبدئي اللي يراويك اللوحة على جدارك مجاني تماماً وبدون أي التزام. تدفع بس لو عجبك الشكل النهائي وقررت تطلب.",
    },
    {
      q: "كم ياخذ وقت التصميم والتنفيذ؟",
      a: "التصميم المبدئي على صورة الجدار عادة ياخذ أقل من ساعة. وبعد موافقتك، رسم اللوحة يدوياً ياخذ من 3 إلى 5 أيام عمل حسب المقاس وتفاصيل القطعة، وبعدها تتغلف وتتشحن لك.",
    },
    {
      q: "هل توصلون لكل إمارات الدولة؟",
      a: "نعم، نوصل لجميع إمارات الدولة (أبوظبي، دبي، الشارقة، عجمان، أم القيوين، رأس الخيمة، وفجيرة) مع تغليف آمن يضمن وصول اللوحة بحالة ممتازة وجاهزة للتعليق.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white border-b border-zinc-200/60">
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl" dir="rtl">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#E52328] font-bold text-xs sm:text-sm mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>إجابات فورية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-4">
            أسئلة بتتسأل كتير
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            كل اللي يحتاج تعرفه عن اللوحات، طريقة الاختيار، والتوصيل قبل ما تطلب.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right items-start">
          <div className="space-y-4">
            {faqs.slice(0, 4).map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50/70 border border-zinc-200/80 shadow-sm">
                <h3 className="font-bold text-zinc-900 text-base mb-2">
                  {faq.q || faq.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {faqs.slice(4).map((faq, idx) => (
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