"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FileText, ArrowRight, ArrowLeft, ShieldCheck, CreditCard, Sparkles, RefreshCw, Scale } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export default function TermsPage() {
  const { lang } = useLanguage();
  const whatsappNumber = "971586542399";

  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent(
      lang === "ar"
        ? "مرحباً Juleative Art 👋\nعندي استفسار بخصوص شروط الاستخدام والطلب."
        : "Hello Juleative Art 👋\nI have an inquiry regarding terms & ordering rules."
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
            <FileText className="w-4 h-4" />
            <span>{lang === "ar" ? "اتفاقية واضحة من أول صورة" : "Transparent Terms & Ordering Rules"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-4">
            {lang === "ar" ? "شروط الاستخدام والطلب" : "Terms of Use & Ordering Conditions"}
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            {lang === "ar"
              ? "الشروط دي بتنظم استخدام موقع juleativeart.com وخدمة المعاينة المجانية والطلبات التي يتم تأكيدها عبر الواتساب. التفاصيل المكتوبة وقوانين حماية المستهلك في دولة الإمارات العربية المتحدة هي المرجع النهائي."
              : "These terms govern the use of juleativeart.com, our free wall mockup service, and orders confirmed via WhatsApp. Written specifications and UAE Consumer Protection laws serve as the final authority."}
          </p>
          <p className="text-xs text-zinc-400 mt-4 border-t border-zinc-100 pt-4">
            {lang === "ar" ? "آخر تحديث: 21 أغسطس 2026" : "Last updated: August 21, 2026"}
          </p>
        </div>

        {/* كروت نقاط سريعة */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 text-center">
          <div className="bg-white p-4 rounded-2xl border border-zinc-200/70">
            <Sparkles className="w-5 h-5 text-[#E52328] mx-auto mb-1.5" />
            <h4 className="font-bold text-zinc-900 text-xs sm:text-sm mb-0.5">
              {lang === "ar" ? "المعاينة مش طلب" : "Mockup ≠ Order"}
            </h4>
            <p className="text-[11px] text-zinc-500">
              {lang === "ar" ? "اقتراح بصري بدون التزام" : "Non-binding visual preview"}
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-zinc-200/70">
            <FileText className="w-5 h-5 text-[#E52328] mx-auto mb-1.5" />
            <h4 className="font-bold text-zinc-900 text-xs sm:text-sm mb-0.5">
              {lang === "ar" ? "المواصفات كتابة" : "Written Specs"}
            </h4>
            <p className="text-[11px] text-zinc-500">
              {lang === "ar" ? "تأكيد الأبعاد والألوان كتابة" : "Dimensions & colors confirmed in writing"}
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-zinc-200/70">
            <CreditCard className="w-5 h-5 text-[#E52328] mx-auto mb-1.5" />
            <h4 className="font-bold text-zinc-900 text-xs sm:text-sm mb-0.5">
              {lang === "ar" ? "السعر قبل التأكيد" : "Upfront Pricing"}
            </h4>
            <p className="text-[11px] text-zinc-500">
              {lang === "ar" ? "بدون أي تكاليف خفية" : "No hidden fees upon delivery"}
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-zinc-200/70">
            <ShieldCheck className="w-5 h-5 text-[#E52328] mx-auto mb-1.5" />
            <h4 className="font-bold text-zinc-900 text-xs sm:text-sm mb-0.5">
              {lang === "ar" ? "حقوق المستهلك" : "Consumer Rights"}
            </h4>
            <p className="text-[11px] text-zinc-500">
              {lang === "ar" ? "محفوطة وفق القانون الإماراتي" : "Protected under UAE federal law"}
            </p>
          </div>
        </div>

        {/* تفاصيل الشروط */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-sm space-y-8 text-sm sm:text-base leading-relaxed text-zinc-700">
          
          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">
              {lang === "ar" ? "1. نطاق الشروط وباستخدامك للموقع" : "1. Scope of Terms & Website Usage"}
            </h3>
            <p>
              {lang === "ar"
                ? "تنطبق هذه الشروط على تصفحك للموقع، وخدمة المعاينة الرقمية، والطلبات المؤكدة. الموقع موجه للباحثين عن لوحات جدارية رسم يدوياً ومؤطرة. يجب أن يكون استخدامك مشروعاً وبدون محاولة تعطيل الخدمة أو نسخ المحتوى. إذا كنت تطلب نيابة عن شخص أو جهة، فأنت تقر بأن لديك الصلاحية لتقديم المعلومات واعتماد الطلب. حقوق المستهلك والقوانين الاتحادية في دولة الإمارات العربية المتحدة تظل هي الحاكمة والمكملة لأي نص هنا."
                : "These terms apply to website browsing, digital mockup requests, and confirmed custom orders. Usage must be lawful without disrupting services or copying proprietary media. Ordering on behalf of an entity confirms your authorized capacity. UAE Federal Consumer Protection Laws govern all transactions."}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">
              {lang === "ar" ? "2. المعاينة المجانية الأولية" : "2. Initial Free Digital Wall Mockup"}
            </h3>
            <p>
              {lang === "ar"
                ? "خدمة المعاينة هي خيار مجاني وبدون أي التزام، هدفها مساعدتك على تخيل شكل اللوحة على جدارك بشكل تقريبي. المعاينة هي تصور رقمي وليست قياساً هندسياً أو عينة ملموسة. ولأن اللوحة تنفذ يدوياً بالفرشاة وسكين الرسم، فإن المعاينة توضح التكوين والألوان والمقاس التقريبي ولا تعد ضماناً لتطابق كل تفصيلة صغيرة في ضربات الفرشاة المادية."
                : "Digital wall previews are non-binding and completely free of charge, designed to visualize how a painting fits your room space. A preview is a digital rendering, not a physical sample. Since each canvas is hand-painted from scratch, subtle natural variations in actual brushstrokes occur while maintaining overall composition."}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">
              {lang === "ar" ? "3. آلية تكوين الطلب وتأكيده" : "3. Order Formation & Written Approval"}
            </h3>
            <p>{lang === "ar" ? "المحادثة والاستفسار فقط لا يعتبرا طلباً مؤكداً. يتكون الطلب رسمياً عند إتباع الخطوات التالية:" : "Inquiries do not constitute binding orders. Orders become legally binding upon completing:"}</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-600 mt-2 px-2">
              <li>{lang === "ar" ? "ترسل صورة المكان وتفضيلاتك ونرسل لك الاقتراح الرقمي." : "Submitting wall photos and preferences to receive a digital concept mockup."}</li>
              <li>{lang === "ar" ? "نرسل لك ملخصاً كتابياً يتضمن: تفاصيل اللوحة، المقاس، الإطار، السعر الإجمالي بالدرهم الإماراتي، والتوصيل." : "Receiving a written summary containing size, frame type, total AED price, and delivery fee."}</li>
              <li>{lang === "ar" ? "تراجع التفاصيل وتوافق عليها كتابة." : "Reviewing and confirming the summary explicitly in writing via chat."}</li>
              <li>{lang === "ar" ? "يصبح الطلب مؤكداً ونافذاً بعد استكمال خطوة التأكيد أو الدفع المحددة لك." : "Fulfilling payment/confirmation required to initiate artist production."}</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">
              {lang === "ar" ? "4. المواصفات والألوان والعمل اليدوي" : "4. Hand-Painted Nature & Color Variance"}
            </h3>
            <p>
              {lang === "ar"
                ? "قد تختلف درجات الألوان بنسبة بسيطة بين الشاشات بسبب إعدادات الإضاءة. المواصفات المكتوبة التي وافقت عليها هي المرجع لما سيتم تنفيذه. ولأن كل لوحة ترسم بفرشاة الفنان وليست نسخة مطبوعة، فمن الطبيعي وجود اختلافات فنية بسيطة ونادرة في ملمس الطبقات وحدود الأشكال بين قطعة وأخرى، وهذه الاختلافات جزء من قيمة الفن اليدوي ولا تعد عيباً، مع الالتزام التام بالتصميم العام والمقاس والألوان المتفق عليها."
                : "Minor color tone variations may appear between digital displays due to screen brightness and lighting settings. Written summary specs serve as the binding reference. Unique impasto textures, gold leaf layers, and knife strokes are signature characteristics of authentic hand-painted art and do not constitute defects."}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">
              {lang === "ar" ? "5. السعر والدفع" : "5. Pricing & Payments"}
            </h3>
            <p>
              {lang === "ar"
                ? "السعر النهائي يشمل كافة البنود الموضحة في ملخص الطلب، وتظهر تكلفة التوصيل داخل دولة الإمارات قبل التأكيد النهائي. لا توجد أي مبالغ مجهولة أو رسوم إضافية بعد الاعتماد. استخدم فقط وسائل الدفع الرسمية والمعتمدة التي يزودك بها فريقنا في محادثة الواتساب."
                : "Total pricing includes all specified items in your order breakdown with transparent delivery fees across the UAE. No hidden charges apply after written confirmation. Payments should strictly use official channels provided by our WhatsApp team."}
            </p>
          </section>

          {/* قسم الاستبدال والاسترجاع */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-zinc-200/80 my-6">
            <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-[#E52328]" />
              {lang === "ar" ? "6. الاستبدال والاسترجاع (حسب القانون الإماراتي)" : "6. Returns & Exchanges (UAE Consumer Law)"}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-xl border border-zinc-200/80">
                <span className="text-[#E52328] font-black text-lg block mb-1">
                  {lang === "ar" ? "14 يوم" : "14 Days"}
                </span>
                <h5 className="font-bold text-xs text-zinc-900 mb-1">
                  {lang === "ar" ? "الاسترجاع العام" : "Standard Returns"}
                </h5>
                <p className="text-[11px] text-zinc-500">
                  {lang === "ar" ? "يحق للمستهلك طلب الاستبدال أو الإرجاع خلال 14 يوماً وفق الشروط العامة." : "Eligible non-custom products can be returned or exchanged within 14 days."}
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-zinc-200/80">
                <span className="text-amber-600 font-black text-lg block mb-1">
                  {lang === "ar" ? "استثناء" : "Exemption"}
                </span>
                <h5 className="font-bold text-xs text-zinc-900 mb-1">
                  {lang === "ar" ? "الطلبات المخصصة" : "Custom Artworks"}
                </h5>
                <p className="text-[11px] text-zinc-500">
                  {lang === "ar" ? "المنتج المصنوع بمواصفات خاصة وحسب الطلب يستثنى من الإرجاع بدون سبب إذا كان مطابقاً." : "Custom-made artworks tailored to specific dimensions/colors are exempt from return without cause if compliant."}
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-zinc-200/80">
                <span className="text-emerald-600 font-black text-lg block mb-1">
                  {lang === "ar" ? "تغطية كاملة" : "Full Cover"}
                </span>
                <h5 className="font-bold text-xs text-zinc-900 mb-1">
                  {lang === "ar" ? "العيب أو عدم المطابقة" : "Defects / Non-Compliance"}
                </h5>
                <p className="text-[11px] text-zinc-500">
                  {lang === "ar" ? "في حال وجود عيب أو تلف أو عدم مطابقة للمواصفات المكتوبة، يحق لك الإرجاع أو الاستبدال مجاناً." : "In case of transit damage, defects, or non-compliance with written specs, full replacement/refund is guaranteed."}
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed">
              {lang === "ar"
                ? "* عند استلام شحنة بها تلف ناتج عن النقل، يرجى تصوير العبوة الخارجية واللوحة والتواصل معنا على الواتساب فوراً بدون محاولة تركيبها أو تعديلها لنقوم بتبديلها لك بدون أي تكلفة إضافية."
                : "* Upon receiving damaged parcels, capture clear photos of packaging and artwork immediately, contacting our WhatsApp support prior to installation for a complimentary replacement."}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">
              {lang === "ar" ? "7. ملكية المحتوى والحقوق الفنية" : "7. Intellectual Property & Art Rights"}
            </h3>
            <p>
              {lang === "ar"
                ? "تصميم الموقع، العلامة التجارية، الصور، والمعاينات مملوكة لـ Juleative Art. شراء اللوحة المادية يعني ملكيتك للقطعة الفنية، ولا يعني انتقال حقوق النسخ أو إعادة الإنتاج التجاري للتصميم إلا باتفاق كتابي صريح."
                : "Website design, brand identity, artwork images, and mockups belong exclusively to Juleative Art. Acquiring a physical painting conveys ownership of the physical piece only, without transferring commercial reproduction rights."}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">
              {lang === "ar" ? "8. التركيب والتثبيت على الجدار" : "8. Wall Mounting & Installation"}
            </h3>
            <p>
              {lang === "ar"
                ? "تصلك اللوحة مأطرة وجاهزة للتعليق مع ملحقات التثبيت الأساسية. الموقع لا يقدم خدمة تقييم هندسي لسلامة الجدار. تقع على العميل مسؤولية اختيار المكان المناسب واستخدام أدوات تثبيت تتلاءم مع نوع الجدار ووزن اللوحة."
                : "Artworks arrive framed and ready for hanging with essential hardware. We do not provide structural wall evaluation. Customers assume responsibility for selecting appropriate wall anchors suited to their wall type and painting weight."}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#E52328]" />
              {lang === "ar" ? "9. القانون الاختصاصي والتحديثات" : "9. Governing Law & Amendments"}
            </h3>
            <p>
              {lang === "ar"
                ? "تخضع هذه الشروط والأحكام والطلبات للأنظمة والقوانين النافذة في دولة الإمارات العربية المتحدة، وتكون المحاكم المختصة بالدولة هي المرجع في أي نزاع. قد نحدث هذه الشروط عند تطوير الخدمة وتطبق التحديثات من تاريخ نشرها دون المساس بالطلبات المؤكدة سابقاً."
                : "These terms and transactions are governed by the laws of the United Arab Emirates. Courts within the UAE hold exclusive jurisdiction. Updated terms apply immediately upon publication without retroactively affecting previously confirmed orders."}
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}