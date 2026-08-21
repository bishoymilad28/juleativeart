"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Camera } from "lucide-react";
import { ARCameraModal } from "@/components/ar-camera-modal";

export function Gallery({ onOpenModal }: { onOpenModal?: () => void }) {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedArtwork, setSelectedArtwork] = useState<{ title: string; imagePng: string } | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const categories = [
    { id: "all", label: "الكل" },
    { id: "abstract", label:"(Abstract) تجريدي" },
    { id: "calligraphy", label:"خط عربي واستئلالات" },
    { id: "modern", label:"مودرن وعصري" },
  ];

  const artworkList = [
    {
      id: 1,
      title: "عمق الليل والرخام الأزرق",
      category: "abstract",
      categoryName: "تجريدي فاخر",
      imagePng: "/artwork11.png",
      desc: "درجات الأزرق الكحلي مع ملمس الرخام وخطوط الذهب البارزة.",
    },
    {
      id: 2,
      title: "أصالة الذهب والعنابي",
      category: "calligraphy",
      categoryName: "خط عربي ومودرن",
      imagePng: "/artwork22.png",
      desc: "تداخل فاخر بين أوراق الذهب والملمس البارز للكانفس.",
    },
    {
      id: 3,
      title: "سكون الصحراء والنيود",
      category: "modern",
      categoryName: "مودرن وعصري",
      imagePng: "/artwork33.png",
      desc: "ألوان بيج وأوف وايت هادئة تناسب المجلس والصالات المودرن.",
    },
  ];

  const filteredArtworks =
    activeTab === "all"
      ? artworkList
      : artworkList.filter((item) => item.category === activeTab);

  const handleTryOnWall = (artwork: { title: string; imagePng: string }) => {
    setSelectedArtwork(artwork);
    setIsCameraOpen(true);
  };

  return (
    <section id="gallery" className="py-20 bg-white border-b border-zinc-200/60 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-8" dir="rtl">
        
        {/* الترويسة */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-right">
            <span className="text-[#E52328] font-bold text-xs sm:text-sm tracking-wide block mb-2">
              تشكيلة مخصصة لبيتك
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900">
              معرض اللوحات والأعمال الفنية
            </h2>
            <p className="mt-3 text-zinc-600 text-sm sm:text-base leading-relaxed max-w-xl">
              اختر التصميم، وجرب رؤية اللوحة مباشرة على جدارك باستخدام الكاميرا.
            </p>
          </div>

          <Button
            type="button"
            onClick={onOpenModal}
            className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-full px-6 py-3 text-xs sm:text-sm flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>طلب تصميم مخصص جديد</span>
            <Sparkles className="w-4 h-4 text-[#E52328]" />
          </Button>
        </div>

        {/* الفلاتر */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-zinc-100">
          {categories.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#E52328] text-white shadow-md shadow-red-600/20"
                  : "bg-slate-100 text-zinc-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* شبكة الأعمال */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArtworks.map((item) => (
            <div key={item.id} className="bg-slate-50/60 rounded-3xl overflow-hidden border border-zinc-200/80 p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-4 bg-zinc-900 flex items-center justify-center p-2">
                  <img
                    src={item.imagePng}
                    alt={item.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-zinc-900 font-bold text-[11px] px-3 py-1 rounded-full shadow-sm">
                    {item.categoryName}
                  </span>
                </div>
                
                <h3 className="font-bold text-zinc-900 text-lg mb-1 text-right">{item.title}</h3>
                <p className="text-xs text-zinc-600 mb-4 text-right">{item.desc}</p>
              </div>

              {/* زر تجربة الكاميرا */}
              <Button
                type="button"
                onClick={() => handleTryOnWall({ title: item.title, imagePng: item.imagePng })}
                className="w-full bg-[#E52328] hover:bg-red-700 text-white font-bold py-3 rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-red-600/20 cursor-pointer"
              >
                <Camera className="w-4 h-4" />
                <span>جربها على جدارك بالكاميرا</span>
              </Button>
            </div>
          ))}
        </div>

      </div>

      {/* نافذة كاميرا الواقع المعزز */}
      <ARCameraModal
        isOpen={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
        selectedArtwork={selectedArtwork}
      />
    </section>
  );
}