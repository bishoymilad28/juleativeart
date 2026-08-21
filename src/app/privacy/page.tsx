"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Shield, Lock, Eye, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  const whatsappNumber = "971586542399"; // رقم الواتساب الخاص بـ Juleative

  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent("مرحباً Juleative Art 👋%0Aعندي استفسار بخصوص (طلب خصوصية).");
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
            <Shield className="w-4 h-4" />
            <span>خصوصيتك وأمان بياناتك</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-4">
            سياسة الخصوصية
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            في **Juleative Art**، صورة بيتك وبياناتك الخاصة أمانة. بنستخدم أقل قدر من البيانات عشان نجهز التصميم ونتابع طلبك، ومش بننشر صورة بيتك أبداً بدون موافقتك.
          </p>
          <p className="text-xs text-zinc-400 mt-4 border-t border-zinc-100 pt-4">
            آخر تحديث: 21 أغسطس 2026
          </p>
        </div>

        {/* نقاط سريعة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-zinc-200/70 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#E52328] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-zinc-900 text-sm mb-1">لا يوجد حساب مستخدم</h4>
              <p className="text-xs text-zinc-500">تصفح مباشر وسريع بدون الحاجة لإنشاء حساب أو كلمة سر.</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-zinc-200/70 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#E52328] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-zinc-900 text-sm mb-1">النشر بموافقة منفصلة</h4>
              <p className="text-xs text-zinc-500">مش هننشر صورة جدارك على السوشيال ميديا أو الموقع بدون إذنك.</p>
            </div>
          </div>
        </div>

        {/* تفاصيل السياسة */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-sm space-y-8 text-sm sm:text-base leading-relaxed text-zinc-700">
          
          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#E52328]" />
              1. نطاق السياسة والقانون المنظم
            </h3>
            <p>
              تنطبق هذه السياسة على استخدامك لموقع **juleativeart.com** وتعاملاتك الرقمية معنا. نعالج بياناتك الشخصية وفق التشريعات والقوانين المنظمة في دولة الإمارات العربية المتحدة (القانون الاتحادي رقم 45 لسنة 2021 بشأن حماية البيانات الشخصية). بمجرد انتقالك لخدمة خارجية مثل WhatsApp أو بوابات الدفع، تطبق شروط الخصوصية التابعة لمزود الخدمة نفسه.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">2. البيانات التي نجمعها</h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 pr-2">
              <li><strong>عند الزيارة:</strong> بيانات تقنية محدودة تلقائية (عنوان IP، نوع المتصفح والجهاز) لأغراض الأمان وأداء الموقع.</li>
              <li><strong>عند طلب معاينة/تصميم:</strong> رقم الواتساب، الاسم، صورة الجدار، قياسات الغرفة، وتفضيلات الألوان والستايل.</li>
              <li><strong>عند التأكيد والشحن:</strong> العنوان التفصيلي في دولة الإمارات، رقم الاستلام، ورقم طلب التوصيل والدفع.</li>
            </ul>
            <p className="mt-3 text-xs bg-red-50 text-[#E52328] p-3 rounded-xl border border-red-100">
              💡 <strong>نصيحة:</strong> يرجى عدم إرسال صور تحتوي على مستندات رسمية أو هويات أو مقتنيات شخصية حساسة. يمكنك قص الصورة قبل إرسالها.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">3. كيف نستخدم بياناتك؟</h3>
            <p>بنستخدم البيانات لتقديم الخدمة وتجهيز لوحتك بأعلى جودة:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-600 mt-2 pr-2">
              <li>تحليل مساحة الجدار وتجهيز الاقتراح الرقمي (المعاينة المجانية).</li>
              <li>تجهيز وتنفيذ اللوحة يدوياً وتنسيق الشحن للتوصيل لعنوانك.</li>
              <li>الرد على استفساراتك وخدمة ما بعد البيع.</li>
              <li>الالتزام بالمتطلبات المحاسبية والقانونية داخل الإمارات.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#E52328]" />
              4. صور الجدران وحقوق النشر
            </h3>
            <p>
              إرسال صورة جدارك يتيح لنا استخدامها حصرياً داخل الخدمة (لتحليل المساحة وإعداد التصميم المبدئي). <strong>لن نقوم بنشر صورة بيتك على الموقع أو حساباتنا في مواقع التواصل الاجتماعي أو الإعلانات بدون إذن صريح ومستقل منك.</strong> وفي حال طلبنا ذلك لعرض قصة نجاح، يحق لك الرفض تماماً بدون أن يتأثر طلبك.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">5. مشاركة البيانات والأمان</h3>
            <p>
              نحن لا نبيع بياناتك الشخصية أو صور بيتك إطلاقاً. قد تشارك البيانات بالقدر اللازم فقط مع شركاء الخدمة الموثوقين: منصة WhatsApp للتواصل، الشركات المزودة لخدمات الدفع الإلكتروني، وشركات الشحن المعتمدة للتوصيل داخل الإمارات.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">6. حقوقك والتواصل معنا</h3>
            <p>
              يحق لك في أي وقت طلب الوصول لبياناتك، تعديلها، أو محوها من سجلات المحادثة. لتقديم أي طلب يخص الخصوصية، يمكنك مراسلتنا عبر الواتساب واكتب في بداية الرسالة <strong>"طلب خصوصية"</strong> وسيتم التعامل مع طلبك فوراً.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}