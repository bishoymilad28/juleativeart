"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Truck, Clock, MapPin, ShieldCheck, ArrowRight, Wrench, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function DeliveryPage() {
  const whatsappNumber = "971586542399"; // رقم الواتساب الخاص بـ Juleative

  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent("مرحباً Juleative Art 👋%0Aعندي استفسار بخصوص التوصيل والتركيب.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-50/50 text-zinc-800" dir="rtl">
      <Navbar onOpenModal={handleOpenWhatsApp} />

      <div className="container mx-auto px-4 sm:px-8 py-12 max-w-4xl">
        {/* العودة للرئيسية */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-500 hover:text-[#E52328] transition-colors mb-8"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          <span>العودة للرئيسية</span>
        </Link>

        {/* ترويسة الصفحة */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#E52328] font-bold text-xs sm:text-sm mb-4">
            <Truck className="w-4 h-4" />
            <span>شفافية كاملة بدون رسوم مخفية</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-4">
            التوصيل والتركيب
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            لأن المقاس والعنوان بفرقوا، بنأكد لك تغطية منطقتك داخل الإمارات، وتكلفة ومدة التوصيل كتابة قبل ما تعتمد الطلب وترتاح.
          </p>
          <p className="text-xs text-zinc-400 mt-4 border-t border-zinc-100 pt-4">
            آخر تحديث: 21 أغسطس 2026
          </p>
        </div>

        {/* كروت المعلومات الأربعة قبل التأكيد */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-zinc-200/70 text-right">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E52328] flex items-center justify-center font-bold text-xs mb-3">
              01
            </div>
            <h4 className="font-bold text-zinc-900 text-sm mb-1">تغطية مؤكدة</h4>
            <p className="text-xs text-zinc-500">نغطي كافة إمارات الدولة (أبوظبي، دبي، الشارقة، وباقي الإمارات).</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-zinc-200/70 text-right">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E52328] flex items-center justify-center font-bold text-xs mb-3">
              02
            </div>
            <h4 className="font-bold text-zinc-900 text-sm mb-1">تكلفة واضحة</h4>
            <p className="text-xs text-zinc-500">قيمة الشحن واضحة ومحددة بدون أي زيادات عند الاستلام.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-zinc-200/70 text-right">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E52328] flex items-center justify-center font-bold text-xs mb-3">
              03
            </div>
            <h4 className="font-bold text-zinc-900 text-sm mb-1">وقت محدد</h4>
            <p className="text-xs text-zinc-500">مواعيد التجهيز الرسمية من 3 إلى 5 أيام عمل + مدة التوصيل.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-zinc-200/70 text-right">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E52328] flex items-center justify-center font-bold text-xs mb-3">
              04
            </div>
            <h4 className="font-bold text-zinc-900 text-sm mb-1">تغليف آمن جداً</h4>
            <p className="text-xs text-zinc-500">حماية مضاعفة لإطار والكانفس لضمان وصولها بحالة ممتازة.</p>
          </div>
        </div>

        {/* تفاصيل التوصيل والتركيب */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-sm space-y-8 text-sm sm:text-base leading-relaxed text-zinc-700">
          
          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#E52328]" />
              1. مدتان مش مدة واحدة: (التجهيز والتوصيل)
            </h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 pr-2">
              <li><strong>مرحلة التجهيز والرسم اليدوي:</strong> تبدأ فور تأكيد الطلب. ولأن كل قطعة ترسم يدوياً بفرشاة الفنان وسكين الرسم، فالتنفيذ يستغرق عادةً من 3 إلى 5 أيام عمل حسب المقاس وعدد القطع، بالإضافة لوقت جفاف المعجون وأوراق الذهب قبل التغليف الآمن.</li>
              <li><strong>مرحلة الشحن والتسليم:</strong> تبدأ بعد تسليم اللوحة لشركة الشحن المعتمدة داخل دولة الإمارات، وتستغرق عادة من 24 إلى 48 ساعة حسب المنطقة والإمارة.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#E52328]" />
              2. بيان العنوان وسهولة الاستلام
            </h3>
            <p>
              لتسهيل وصول المندوب فوراً، يرجى تزويدنا بالاسم الإمارة، المنطقة، الشارع، ورقم المبنى أو الشقة عند التأكيد على الواتساب. وفي حال وجود أي تعليمات خاصة للدخول أو مصعد ضيق للقطع الكبيرة، يرجى إبلاغنا مسبقاً.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#E52328]" />
              3. فحص الشحنة والسلامة عند الاستلام
            </h3>
            <p>
              نوصي بفحص التغليف الخارجي عند الاستلام. افك التغليف بهدوء وبدون استخدام أدوات حادة حادة بالقرب من وجه اللوحة. في حال وجود أي تلف ناتج عن النقل أو الشحن، يرجى تصوير العبوة الخارجية والمنتج بوضوح ومراسلتنا فوراً عبر الواتساب لنقوم بتبديلها مباشرة.
            </p>
          </section>

          {/* نصائح التركيب والعناية */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-zinc-200/80 my-6">
            <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-[#E52328]" />
              4. دليل وقواعد التركيب والعناية باللوحة
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm text-zinc-600">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E52328] shrink-0 mt-1" />
                <p><strong>نوع الجدار:</strong> استخدم المسمار والفيشر المناسب لنوع جدارك (خرسانة، طوب، أو جبس بورد Drywall).</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E52328] shrink-0 mt-1" />
                <p><strong>توزيع الوزن:</strong> اللوحات الكبيرة والعريضة يفضل تعليقها باستخدام نقطتي تثبيت متوازيتين لضمان الاتزان ومنع استمالة البرواز.</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E52328] shrink-0 mt-1" />
                <p><strong>طريقة التنظيف:</strong> لإزالة الغبار، استخدم فوطة ناعمة وجافة وامسح سطح اللوحة بخفة. تجنب استخدام المنظفات الكيميائية أو الكحول مباشرة على الألوان أو ورق الذهب.</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}