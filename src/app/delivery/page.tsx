"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Truck, Clock, MapPin, ShieldCheck, ArrowRight, ArrowLeft, Wrench, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export default function DeliveryPage() {
  const { lang, t } = useLanguage();
  const whatsappNumber = "971586542399";

  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent(
      lang === "ar"
        ? "مرحباً Juleative Art 👋\nعندي استفسار بخصوص التوصيل والتركيب."
        : "Hello Juleative Art 👋\nI have a question regarding delivery and installation."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-50/50 text-zinc-800">
      <Navbar onOpenModal={handleOpenWhatsApp} />

      <div className={`container mx-auto px-4 sm:px-8 py-12 max-w-4xl ${lang === "ar" ? "text-right" : "text-left"}`}>
        {/* العودة للرئيسية */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-500 hover:text-[#E52328] transition-colors mb-8"
        >
          {lang === "ar" ? (
            <>
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>العودة للرئيسية</span>
            </>
          ) : (
            <>
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </>
          )}
        </Link>

        {/* ترويسة الصفحة */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#E52328] font-bold text-xs sm:text-sm mb-4">
            <Truck className="w-4 h-4" />
            <span>{lang === "ar" ? "شفافية كاملة بدون رسوم مخفية" : "Complete Transparency, No Hidden Fees"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-4">
            {lang === "ar" ? "التوصيل والتركيب" : "Delivery & Installation"}
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            {lang === "ar" 
              ? "لأن المقاس والعنوان بفرقوا، بنأكد لك تغطية منطقتك داخل الإمارات، وتكلفة ومدة التوصيل كتابة قبل ما تعتمد الطلب وترتاح."
              : "Because dimensions and locations vary, we confirm area coverage across the UAE, delivery costs, and estimated timelines in writing before order confirmation."}
          </p>
          <p className="text-xs text-zinc-400 mt-4 border-t border-zinc-100 pt-4">
            {lang === "ar" ? "آخر تحديث: 21 أغسطس 2026" : "Last updated: August 21, 2026"}
          </p>
        </div>

        {/* كروت المعلومات الأربعة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-zinc-200/70">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E52328] flex items-center justify-center font-bold text-xs mb-3">
              01
            </div>
            <h4 className="font-bold text-zinc-900 text-sm mb-1">
              {lang === "ar" ? "تغطية مؤكدة" : "Confirmed Coverage"}
            </h4>
            <p className="text-xs text-zinc-500">
              {lang === "ar" ? "نغطي كافة إمارات الدولة (أبوظبي، دبي، الشارقة، وباقي الإمارات)." : "Delivering across all seven Emirates (Abu Dhabi, Dubai, Sharjah, etc.)."}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-zinc-200/70">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E52328] flex items-center justify-center font-bold text-xs mb-3">
              02
            </div>
            <h4 className="font-bold text-zinc-900 text-sm mb-1">
              {lang === "ar" ? "تكلفة واضحة" : "Transparent Pricing"}
            </h4>
            <p className="text-xs text-zinc-500">
              {lang === "ar" ? "قيمة الشحن واضحة ومحددة بدون أي زيادات عند الاستلام." : "Clear shipping rates upfront with no extra charges upon arrival."}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-zinc-200/70">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E52328] flex items-center justify-center font-bold text-xs mb-3">
              03
            </div>
            <h4 className="font-bold text-zinc-900 text-sm mb-1">
              {lang === "ar" ? "وقت محدد" : "Defined Timelines"}
            </h4>
            <p className="text-xs text-zinc-500">
              {lang === "ar" ? "مواعيد التجهيز الرسمية من 3 إلى 5 أيام عمل + مدة التوصيل." : "Official preparation time 3–5 business days plus courier transit time."}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-zinc-200/70">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E52328] flex items-center justify-center font-bold text-xs mb-3">
              04
            </div>
            <h4 className="font-bold text-zinc-900 text-sm mb-1">
              {lang === "ar" ? "تغليف آمن جداً" : "Ultra-Safe Packaging"}
            </h4>
            <p className="text-xs text-zinc-500">
              {lang === "ar" ? "حماية مضاعفة لإطار والكانفس لضمان وصولها بحالة ممتازة." : "Multi-layer protective packaging for frames and canvas safety."}
            </p>
          </div>
        </div>

        {/* تفاصيل التوصيل والتركيب */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-sm space-y-8 text-sm sm:text-base leading-relaxed text-zinc-700">
          
          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#E52328]" />
              {lang === "ar" ? "1. مرحلتان للتسليم: (التجهيز والتوصيل)" : "1. Two Stages: (Production & Transit)"}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 px-2">
              <li>
                <strong>{lang === "ar" ? "مرحلة التجهيز والرسم اليدوي:" : "Hand-painting & Preparation:"}</strong>{" "}
                {lang === "ar"
                  ? "تبدأ فور تأكيد الطلب. ونظراً لأن كل قطعة ترسم يدوياً بالفرشاة وسكين الرسم، فإن التنفيذ يستغرق عادةً من 3 إلى 5 أيام عمل حسب المقاس وتفاصيل القطعة والجفاف."
                  : "Begins immediately after order approval. Since each artwork is 100% hand-painted, creation takes 3 to 5 business days depending on size and texture drying times."}
              </li>
              <li>
                <strong>{lang === "ar" ? "مرحلة الشحن والتسليم:" : "Courier Shipping & Delivery:"}</strong>{" "}
                {lang === "ar"
                  ? "تبدأ بعد تسليم اللوحة لشركة الشحن المعتمدة داخل دولة الإمارات، وتستغرق عادة من 24 إلى 48 ساعة حسب الإمارة والمنطقة."
                  : "Starts once handed to our approved UAE courier partners, taking 24 to 48 hours depending on the emirate and area."}
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#E52328]" />
              {lang === "ar" ? "2. تفاصيل العنوان وسهولة الاستلام" : "2. Address Details & Delivery Access"}
            </h3>
            <p>
              {lang === "ar"
                ? "لتسهيل وصول المندوب فوراً، يرجى تزويدنا بالاسم الإمارة، المنطقة، الشارع، ورقم المبنى أو الشقة عند التأكيد على الواتساب. وفي حال وجود أي تعليمات خاصة للدخول أو مصعد ضيق للقطع الكبيرة، يرجى إبلاغنا مسبقاً."
                : "To ensure swift delivery, please provide your Emirate, area, street name, and building/apartment number via WhatsApp. Kindly inform us in advance of restricted gate access or narrow elevators for oversized artworks."}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#E52328]" />
              {lang === "ar" ? "3. فحص الشحنة والسلامة عند الاستلام" : "3. Inspection & Package Safety"}
            </h3>
            <p>
              {lang === "ar"
                ? "نوصي بفحص التغليف الخارجي عند الاستلام. افك التغليف بهدوء وبدون استخدام أدوات حادة بالقرب من وجه اللوحة. في حال وجود أي تلف ناتج عن النقل، يرجى تصوير العبوة والمنتج بوضوح ومراسلتنا فوراً عبر الواتساب لتوفير بديل فوراً."
                : "We recommend inspecting the packaging upon arrival. Unpack carefully without sharp instruments near the canvas surface. In case of any transit damage, please capture clear photos of packaging and product immediately to receive an instant replacement."}
            </p>
          </section>

          {/* نصائح التركيب والعناية */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-zinc-200/80 my-6">
            <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-[#E52328]" />
              {lang === "ar" ? "4. دليل وقواعد التركيب والعناية باللوحة" : "4. Hanging & Artwork Care Guide"}
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm text-zinc-600">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E52328] shrink-0 mt-1" />
                <p>
                  <strong>{lang === "ar" ? "نوع الجدار:" : "Wall Anchor Type:"}</strong>{" "}
                  {lang === "ar" ? "استخدم المسمار والفيشر المناسب لنوع جدارك (خرسانة، طوب، أو جبس بورد Drywall)." : "Select proper wall plugs and screws depending on wall material (Concrete, Brick, or Drywall)."}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E52328] shrink-0 mt-1" />
                <p>
                  <strong>{lang === "ar" ? "توزيع الوزن:" : "Weight Distribution:"}</strong>{" "}
                  {lang === "ar" ? "اللوحات الكبيرة والعريضة يفضل تعليقها باستخدام نقطتي تثبيت متوازيتين لضمان الاتزان ومنع استمالة البرواز." : "For wide or large canvases, use two parallel hanging points to maintain balance and avoid tilt."}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E52328] shrink-0 mt-1" />
                <p>
                  <strong>{lang === "ar" ? "طريقة التنظيف:" : "Cleaning Method:"}</strong>{" "}
                  {lang === "ar" ? "لإزالة الغبار، استخدم فوطة ناعمة وجافة وامسح سطح اللوحة بخفة. تجنب استخدام المنظفات الكيميائية أو الكحول مباشرة على الألوان أو ورق الذهب." : "Gently dust the surface with a soft, dry micro-fiber cloth. Avoid chemical cleaners or liquid spray directly on paint layers and gold leaf."}
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}