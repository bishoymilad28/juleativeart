"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Ruler } from "lucide-react";

export function SizeGuide() {
  const guidePoints = [
    {
      title: "فوق الكنبة",
      desc: "عرض اللوحة يكون بين 60% إلى 75% من عرض الكنبة، مع ترك مسافة 15 إلى 25 سم فوقها.",
    },
    {
      title: "غرفة النوم",
      desc: "اللوحة تتوسط السرير بالضبط، وعرضها قريب من عرض الهيدبورد الخاص بالسرير.",
    },
    {
      title: "طقم لوحات (مجموعة)",
      desc: "اترك مسافة 5 إلى 8 سم بين كل برواز والثاني عشان تتناسق كقطعة واحدة.",
    },
    {
      title: "مستوى الارتفاع",
      desc: "منتصف اللوحة يكون على مستوى النظر (145 إلى 152 سم من الأرض).",
    },
  ];

  return (
    <section id="size-guide" className="py-20 bg-slate-50/70 border-b border-zinc-200/60 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-8" dir="rtl">
        
        {/* عنوان السكشن والدليل */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#E52328] font-bold text-xs sm:text-sm mb-4">
            <Ruler className="w-4 h-4" />
            <span>نصائح خبير الديكور</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-4">
            كيف نختار المقاس المناسب لجدارك؟
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            المقاس هو الأهم — اللوحة الصغيرة تضيع في الجدار الواسع، والكبيرة زيادة تضايق المكان. دي القواعد اللي نمشي عليها:
          </p>
        </div>

        {/* كروت نصائح المقاسات الـ 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {guidePoints.map((item, idx) => (
            <Card key={idx} className="border-zinc-200/80 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-right">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E52328] flex items-center justify-center font-bold text-sm mb-3">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-zinc-900 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* كارت التصميم المخصص الأسود */}
        <div className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#E52328]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-right max-w-2xl relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black mb-3 text-white">
              عندك فكرة أو صورة خاصة في بالك؟
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              لو مش لاقي التصميم اللي يدور في راسك، ابعت لنا صورة المكان أو أي لوحة من Pinterest / Inspiration، وبننفذ لك لوحة جدارية تفصيلية حسب طلبك بالضبط.
            </p>
          </div>

          <button 
            type="button"
            onClick={() => {
              const element = document.getElementById('hero');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative z-10 bg-[#E52328] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-sm sm:text-base transition-all shrink-0 shadow-lg shadow-red-600/20 cursor-pointer"
          >
            طلب تصميم مخصص
          </button>
        </div>

      </div>
    </section>
  );
}