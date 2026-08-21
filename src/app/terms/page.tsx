"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FileText, CheckCircle2, ArrowRight, ShieldCheck, Clock, CreditCard, Sparkles, RefreshCw, AlertTriangle, Scale } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  const whatsappNumber = "971586542399"; // رقم الواتساب الخاص بـ Juleative

  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent("مرحباً Juleative Art 👋%0Aعندي استفسار بخصوص شروط الاستخدام والطلب.");
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
            <FileText className="w-4 h-4" />
            <span>اتفاقية واضحة من أول صورة</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-4">
            شروط الاستخدام والطلب
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            الشروط دي بتنظم استخدام موقع **juleativeart.com** وخدمة المعاينة المجانية والطلبات التي يتم تأكيدها عبر الواتساب. التفاصيل المكتوبة وقوانين حماية المستهلك في دولة الإمارات العربية المتحدة هي المرجع النهائي.
          </p>
          <p className="text-xs text-zinc-400 mt-4 border-t border-zinc-100 pt-4">
            آخر تحديث: 21 أغسطس 2026
          </p>
        </div>

        {/* كروت نقاط سريعة */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 text-center">
          <div className="bg-white p-4 rounded-2xl border border-zinc-200/70">
            <Sparkles className="w-5 h-5 text-[#E52328] mx-auto mb-1.5" />
            <h4 className="font-bold text-zinc-900 text-xs sm:text-sm mb-0.5">المعاينة مش طلب</h4>
            <p className="text-[11px] text-zinc-500">اقتراح بصري بدون التزام</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-zinc-200/70">
            <FileText className="w-5 h-5 text-[#E52328] mx-auto mb-1.5" />
            <h4 className="font-bold text-zinc-900 text-xs sm:text-sm mb-0.5">المواصفات كتابة</h4>
            <p className="text-[11px] text-zinc-500">تأكيد الأبعاد والألوان كتابة</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-zinc-200/70">
            <CreditCard className="w-5 h-5 text-[#E52328] mx-auto mb-1.5" />
            <h4 className="font-bold text-zinc-900 text-xs sm:text-sm mb-0.5">السعر قبل التأكيد</h4>
            <p className="text-[11px] text-zinc-500">بدون أي تكاليف خفية</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-zinc-200/70">
            <ShieldCheck className="w-5 h-5 text-[#E52328] mx-auto mb-1.5" />
            <h4 className="font-bold text-zinc-900 text-xs sm:text-sm mb-0.5">حقوق المستهلك</h4>
            <p className="text-[11px] text-zinc-500">محفوطة وفق القانون الإماراتي</p>
          </div>
        </div>

        {/* تفاصيل الشروط */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-sm space-y-8 text-sm sm:text-base leading-relaxed text-zinc-700">
          
          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">1. نطاق الشروط وباستخدامك للموقع</h3>
            <p>
              تنطبق هذه الشروط على تصفحك للموقع، وخدمة المعاينة الرقمية، والطلبات المؤكدة. الموقع موجه للباحثين عن لوحات جدارية رسم يدوياً ومؤطرة. يجب أن يكون استخدامك مشروعاً وبدون محاولة تعطيل الخدمة أو نسخ المحتوى. إذا كنت تطلب نيابة عن شخص أو جهة، فأنت تقر بأن لديك الصلاحية لتقديم المعلومات واعتماد الطلب. حقوق المستهلك والقوانين الاتحادية في دولة الإمارات العربية المتحدة تظل هي الحاكمة والمكملة لأي نص هنا.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">2. المعاينة المجانية الأولية</h3>
            <p>
              خدمة المعاينة هي خيار مجاني وبدون أي التزام، هدفها مساعدتك على تخيل شكل اللوحة على جدارك بشكل تقريبي. المعاينة هي تصور رقمي وليست قياساً هندسياً أو عينة ملموسة. ولأن اللوحة تنفذ يدوياً بالفرشاة وسكين الرسم، فإن المعاينة توضح التكوين والألوان والمقاس التقريبي ولا تعد ضماناً لتطابق كل تفصيلة صغيرة في ضربات الفرشاة المادية.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">3. آلية تكوين الطلب وتأكيده</h3>
            <p>المحادثة والاستفسار فقط لا يعتبرا طلباً مؤكداً. يتكون الطلب رسمياً عند إتباع الخطوات التالية:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-600 mt-2 pr-2">
              <li>ترسل صورة المكان وتفضيلاتك ونرسل لك الاقتراح الرقمي.</li>
              <li>نرسل لك ملخصاً كتابياً يتضمن: تفاصيل اللوحة، المقاس، الإطار، السعر الإجمالي بالدرهم الإماراتي، والتوصيل.</li>
              <li>تراجع التفاصيل وتوافق عليها كتابة.</li>
              <li>يصبح الطلب مؤكداً ونافذاً بعد استكمال خطوة التأكيد أو الدفع المحددة لك.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">4. المواصفات والألوان والعمل اليدوي</h3>
            <p>
              قد تختلف درجات الألوان بنسبة بسيطة بين الشاشات بسبب إعدادات الإضاءة. المواصفات المكتوبة التي وافقت عليها هي المرجع لما سيتم تنفيذه. ولأن كل لوحة ترسم بفرشاة الفنان وليست نسخة مطبوعة، فمن الطبيعي وجود اختلافات فنية بسيطة ونادرة في ملمس الطبقات وحدود الأشكال بين قطعة وأخرى، وهذه الاختلافات جزء من قيمة الفن اليدوي ولا تعد عيباً، مع الالتزام التام بالتصميم العام والمقاس والألوان المتفق عليها.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">5. السعر والدفع</h3>
            <p>
              السعر النهائي يشمل كافة البنود الموضحة في ملخص الطلب، وتظهر تكلفة التوصيل داخل دولة الإمارات قبل التأكيد النهائي. لا توجد أي مبالغ مجهولة أو رسوم إضافية بعد الاعتماد. استخدم فقط وسائل الدفع الرسمية والمعتمدة التي يزودك بها فريقنا في محادثة الواتساب.
            </p>
          </section>

          {/* قسم الاستبدال والاسترجاع */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-zinc-200/80 my-6">
            <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-[#E52328]" />
              6. الاستبدال والاسترجاع (حسب القانون الإماراتي)
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-xl border border-zinc-200/80">
                <span className="text-[#E52328] font-black text-lg block mb-1">14 يوم</span>
                <h5 className="font-bold text-xs text-zinc-900 mb-1">الاسترجاع العام</h5>
                <p className="text-[11px] text-zinc-500">يحق للمستهلك طلب الاستبدال أو الإرجاع خلال 14 يوماً وفق الشروط العامة.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-zinc-200/80">
                <span className="text-amber-600 font-black text-lg block mb-1">استثناء</span>
                <h5 className="font-bold text-xs text-zinc-900 mb-1">الطلبات المخصصة</h5>
                <p className="text-[11px] text-zinc-500">المنتج المصنوع بمواصفات خاصة وحسب الطلب يستثنى من الإرجاع بدون سبب إذا كان مطابقاً.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-zinc-200/80">
                <span className="text-emerald-600 font-black text-lg block mb-1">تغطية كاملة</span>
                <h5 className="font-bold text-xs text-zinc-900 mb-1">العيب أو عدم المطابقة</h5>
                <p className="text-[11px] text-zinc-500">في حال وجود عيب أو تلف أو عدم مطابقة للمواصفات المكتوبة، يحق لك الإرجاع أو الاستبدال مجاناً.</p>
              </div>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed">
              * عند استلام شحنة بها تلف ناتج عن النقل، يرجى تصوير العبوة الخارجية واللوحة والتواصل معنا على الواتساب فوراً بدون محاولة تركيبها أو تعديلها لنقوم بتبديلها لك بدون أي تكلفة إضافية.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">7. ملكية المحتوى والحقوق الفنية</h3>
            <p>
              تصميم الموقع، العلامة التجارية، الصور، والمعاينات مملوكة لـ **Juleative Art**. شراء اللوحة المادية يعني ملكيتك للقطعة الفنية، ولا يعني انتقال حقوق النسخ أو إعادة الإنتاج التجاري للتصميم إلا باتفاق كتابي صريح.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">8. التركيب والتثبيت على الجدار</h3>
            <p>
              تصلك اللوحة مأطرة وجاهزة للتعليق مع ملحقات التثبيت الأساسية. الموقع لا يقدم خدمة تقييم هندسي لسلامة الجدار. تقع على العميل مسؤولية اختيار المكان المناسب واستخدام أدوات تثبيت تتلاءم مع نوع الجدار ووزن اللوحة.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#E52328]" />
              9. القانون الاختصاصي والتحديثات
            </h3>
            <p>
              تخضع هذه الشروط والأحكام والطلبات للأنظمة والقوانين النافذة في دولة الإمارات العربية المتحدة، وتكون المحاكم المختصة بالدولة هي المرجع في أي نزاع. قد نحدث هذه الشروط عند تطوير الخدمة وتطبق التحديثات من تاريخ نشرها دون المساس بالطلبات المؤكدة سابقاً.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}