"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { HandPaintedFeatures } from "@/components/hand-painted-features";
import { WhyUs } from "@/components/why-us";
import { Gallery } from "@/components/gallery";
import { SizeGuide } from "@/components/size-guide";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { UploadModal } from "@/components/upload-modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // البيانات المهيكلة الخاصة بالأسئلة الشائعة (FAQ Schema)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "هل لوحات جوليتيف مطبوعة ولا مرسومة يدوياً؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "كل لوحاتنا تترسم يدوياً 100% على قماش الكانفس بالفرشاة وسكين الرسم، مب تصميمات مطبوعة. عشان كذا تقدر تشوف وتلمس ضربات الفرشاة وسماكة المعجون والألوان على اللوحة نفسها."
        }
      },
      {
        "@type": "Question",
        "name": "كيف أعرف مقاس اللوحة المناسب لجداري؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "القاعدة البسيطة: اللوحة تاخذ من 60% إلى 75% من عرض الأثاث اللي تحتها (الكنبة أو السرير). وارتفاع منتصف اللوحة يفضل يكون على مستوى النظر (حوالي 145 إلى 152 سم من الأرض). طرش لنا صورة الجدار ونحن بنضبط لك المقاس المناسب بالضبط."
        }
      },
      {
        "@type": "Question",
        "name": "هل أقدر أطلب لوحة بمقاس أو تصميم معين؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "هيه نعم، المقاسات والتصاميم عندنا حسب الطلب. بنساعدك نحدد المقاس والألوان الأنسب على حسب مساحة الجدار وديكور بيتك قبل ما يبدأ الفنان بالتنفيذ."
        }
      },
      {
        "@type": "Question",
        "name": "هل أقدر أعدل على ألوان اللوحة الجدارية؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "هيه نعم، حسب التصميم نقدر نعدل درجات الألوان لتتناسق مع أثاث وديكور مكانك، وبنأكد لك الدرجات النهائية قبل ما يبدأ الفنان بالرسم."
        }
      },
      {
        "@type": "Question",
        "name": "هل تطلع اللوحة مطابقة 100% للصورة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "لأن كل لوحة تتنفذ يدوياً بفرشاة الفنان، طبيعي يكون في اختلافات فنية بسيطة جداً في ضربات الفرشاة والتفاصيل، وده اللي يعطي كل قطعة طابعها المخصص والفريد. لكن الشكل العام والألوان والمقاس يكونون نفس المتفق عليه بالضبط."
        }
      },
      {
        "@type": "Question",
        "name": "هل خدمة المعاينة والتصميم المبدئي بفلوس؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "لا، التصميم المبدئي اللي يراويك شكل اللوحة على جدارك مجاني تماماً وبدون أي التزام. تدفع بس لو عجبك الشكل النهائي وقررت تطلب."
        }
      },
      {
        "@type": "Question",
        "name": "كم ياخذ وقت المعاينة والتنفيذ؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "التصميم المبدئي على صورة الجدار ياخذ عادة أقل من ساعة. وبعد موافقتك، رسم اللوحة يدوياً ياخذ من 3 إلى 5 أيام عمل حسب المقاس وتفاصيل القطعة، وبعدها تتغلف وتتشحن لك."
        }
      },
      {
        "@type": "Question",
        "name": "هل توصلون لكل إمارات الدولة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، نوصل لجميع إمارات الدولة (أبوظبي، دبي، الشارقة، عجمان، أم القيوين، رأس الخيمة، والفجيرة) مع تغليف آمن يضمن وصول اللوحة بحالة ممتازة وجاهزة للتعليق."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      {/* حقن الـ Schema في الـ DOM مباشرة لمحركات البحث والـ LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <HowItWorks />
      <HandPaintedFeatures />
      <WhyUs />
      <Gallery onOpenModal={() => setIsModalOpen(true)} />
      <SizeGuide onOpenModal={() => setIsModalOpen(true)} />
      <FAQ />
      <Footer />
      <UploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}