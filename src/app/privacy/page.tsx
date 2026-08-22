"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Shield, Lock, Eye, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const whatsappNumber = "971586542399";

  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent(
      lang === "ar"
        ? "مرحباً Juleative Art 👋\nعندي استفسار بخصوص (طلب خصوصية)."
        : "Hello Juleative Art 👋\nI have a privacy inquiry."
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
            <Shield className="w-4 h-4" />
            <span>{lang === "ar" ? "خصوصيتك وأمان بياناتك" : "Privacy & Data Protection"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-4">
            {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            {lang === "ar"
              ? "في Juleative Art، صورة بيتك وبياناتك الخاصة أمانة. بنستخدم أقل قدر من البيانات عشان نجهز التصميم ونتابع طلبك، ومش بننشر صورة بيتك أبداً بدون موافقتك."
              : "At Juleative Art, your privacy and interior photos are treated with uttermost security. We process minimal data necessary to prepare your design previews and handle orders. We never publish wall photos without explicit permission."}
          </p>
          <p className="text-xs text-zinc-400 mt-4 border-t border-zinc-100 pt-4">
            {lang === "ar" ? "آخر تحديث: 21 أغسطس 2026" : "Last updated: August 21, 2026"}
          </p>
        </div>

        {/* نقاط سريعة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-zinc-200/70 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#E52328] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-zinc-900 text-sm mb-1">
                {lang === "ar" ? "لا يوجد حساب مستخدم" : "No User Account Required"}
              </h4>
              <p className="text-xs text-zinc-500">
                {lang === "ar" ? "تصفح مباشر وسريع بدون الحاجة لإنشاء حساب أو كلمة سر." : "Direct, hassle-free browsing without forced registration or passwords."}
              </p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-zinc-200/70 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#E52328] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-zinc-900 text-sm mb-1">
                {lang === "ar" ? "النشر بموافقة منفصلة" : "Explicit Publishing Consent"}
              </h4>
              <p className="text-xs text-zinc-500">
                {lang === "ar" ? "مش هننشر صورة جدارك على السوشيال ميديا أو الموقع بدون إذنك." : "We will never share your room/wall photos on social media without approval."}
              </p>
            </div>
          </div>
        </div>

        {/* تفاصيل السياسة */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-sm space-y-8 text-sm sm:text-base leading-relaxed text-zinc-700">
          
          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#E52328]" />
              {lang === "ar" ? "1. نطاق السياسة والقانون المنظم" : "1. Policy Scope & Applicable Law"}
            </h3>
            <p>
              {lang === "ar"
                ? "تنطبق هذه السياسة على استخدامك لموقع juleativeart.com وتعاملاتك الرقمية معنا. نعالج بياناتك الشخصية وفق التشريعات والقوانين المنظمة في دولة الإمارات العربية المتحدة (القانون الاتحادي رقم 45 لسنة 2021 بشأن حماية البيانات الشخصية). بمجرد انتقالك لخدمة خارجية مثل WhatsApp أو بوابات الدفع، تطبق شروط الخصوصية التابعة لمزود الخدمة نفسه."
                : "This policy applies to your usage of juleativeart.com and digital communications with us. Personal data processing complies with UAE Federal Law No. 45 of 2021 regarding Personal Data Protection. External transitions to WhatsApp or payment gateways adhere to their respective privacy terms."}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">
              {lang === "ar" ? "2. البيانات التي نجمعها" : "2. Information We Collect"}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 px-2">
              <li>
                <strong>{lang === "ar" ? "عند الزيارة:" : "Website Browsing:"}</strong>{" "}
                {lang === "ar" ? "بيانات تقنية محدودة تلقائية (عنوان IP، نوع المتصفح والجهاز) لأغراض الأمان وأداء الموقع." : "Basic technical analytics (IP address, browser & device type) for site performance and security."}
              </li>
              <li>
                <strong>{lang === "ar" ? "عند طلب معاينة/تصميم:" : "Design Request:"}</strong>{" "}
                {lang === "ar" ? "رقم الواتساب، الاسم، صورة الجدار، قياسات الغرفة، وتفضيلات الألوان والستايل." : "WhatsApp phone number, name, wall photo, room dimensions, color & style preferences."}
              </li>
              <li>
                <strong>{lang === "ar" ? "عند التأكيد والشحن:" : "Order Confirmation & Shipping:"}</strong>{" "}
                {lang === "ar" ? "العنوان التفصيلي في دولة الإمارات، رقم الاستلام، ورقم طلب التوصيل والدفع." : "Detailed delivery address within the UAE, contact number, order and payment reference."}
              </li>
            </ul>
            <p className="mt-3 text-xs bg-red-50 text-[#E52328] p-3 rounded-xl border border-red-100">
              💡 <strong>{lang === "ar" ? "نصيحة:" : "Tip:"}</strong>{" "}
              {lang === "ar"
                ? "يرجى عدم إرسال صور تحتوي على مستندات رسمية أو هويات أو مقتنيات شخصية حساسة. يمكنك قص الصورة قبل إرسالها."
                : "Please refrain from uploading images containing personal IDs or sensitive belongings. You may crop the photo prior to sending."}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">
              {lang === "ar" ? "3. كيف نستخدم بياناتك؟" : "3. How We Use Your Data"}
            </h3>
            <p>{lang === "ar" ? "بنستخدم البيانات لتقديم الخدمة وتجهيز لوحتك بأعلى جودة:" : "We process data solely to execute your artwork order seamlessly:"}</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-600 mt-2 px-2">
              <li>{lang === "ar" ? "تحليل مساحة الجدار وتجهيز الاقتراح الرقمي (المعاينة المجانية)." : "Analyze wall dimensions and render free digital mockups."}</li>
              <li>{lang === "ar" ? "تجهيز وتنفيذ اللوحة يدوياً وتنسيق الشحن للتوصيل لعنوانك." : "Execute custom hand-painted artwork and coordinate local UAE courier shipping."}</li>
              <li>{lang === "ar" ? "الرد على استفساراتك وخدمة ما بعد البيع." : "Respond to inquiries and handle after-sales customer support."}</li>
              <li>{lang === "ar" ? "الالتزام بالمتطلبات المحاسبية والقانونية داخل الإمارات." : "Comply with accounting and statutory tax requirements in the UAE."}</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#E52328]" />
              {lang === "ar" ? "4. صور الجدران وحقوق النشر" : "4. Wall Photos & Copyright"}
            </h3>
            <p>
              {lang === "ar"
                ? "إرسال صورة جدارك يتيح لنا استخدامها حصرياً داخل الخدمة (لتحليل المساحة وإعداد التصميم المبدئي). لن نقوم بنشر صورة بيتك على الموقع أو حساباتنا في مواقع التواصل الاجتماعي أو الإعلانات بدون إذن صريح ومستقل منك. وفي حال طلبنا ذلك لعرض قصة نجاح، يحق لك الرفض تماماً بدون أن يتأثر طلبك."
                : "Uploading your wall photo grants us permission strictly for internal preview rendering. We will NEVER publish your home photos on our website, social media, or advertisements without your explicit, separate approval. Denying photo publication will never affect your order."}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">
              {lang === "ar" ? "5. مشاركة البيانات والأمان" : "5. Data Sharing & Security"}
            </h3>
            <p>
              {lang === "ar"
                ? "نحن لا نبيع بياناتك الشخصية أو صور بيتك إطلاقاً. قد تشارك البيانات بالقدر اللازم فقط مع شركاء الخدمة الموثوقين: منصة WhatsApp للتواصل، الشركات المزودة لخدمات الدفع الإلكتروني، وشركات الشحن المعتمدة للتوصيل داخل الإمارات."
                : "We do not sell personal data or interior photos. Essential data is shared strictly with trusted service partners: WhatsApp messaging platform, payment gateway providers, and licensed UAE couriers for shipment delivery."}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">
              {lang === "ar" ? "6. حقوقك والتواصل معنا" : "6. Your Rights & Contacting Us"}
            </h3>
            <p>
              {lang === "ar"
                ? "يحق لك في أي وقت طلب الوصول لبياناتك، تعديلها، أو محوها من سجلات المحادثة. لتقديم أي طلب يخص الخصوصية، يمكنك مراسلتنا عبر الواتساب واكتب في بداية الرسالة \"طلب خصوصية\" وسيتم التعامل مع طلبك فوراً."
                : "You reserve the right at any time to request data access, correction, or deletion from our records. For privacy requests, send a WhatsApp message starting with \"Privacy Request\" for immediate assistance."}
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}