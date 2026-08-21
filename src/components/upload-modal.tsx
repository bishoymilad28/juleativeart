"use client";

import { useState } from "react";
import { X, Upload, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UploadModal({ isOpen, onClose }: UploadModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  // رقم الواتساب الخاص بك
  const whatsappNumber = "971586542399"; 

  const handleSend = async () => {
    if (!file) {
      alert("يرجى اختيار صورة أولاً");
      return;
    }

    try {
      // 1. رفع الصورة إلى الـ API
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error("فشل رفع الصورة");
      }

      // 2. تجهيز النص شامل رابط الصورة المرفوعة
      const text = `مرحباً Juleative Art 👋\nأرغب في الاستفسار عن تصميم لوحة جدارية.\n\n🖼️ رابط المعاينة/الصورة المرفوعة:\n${data.imageUrl}${notes ? `\n\n📝 ملاحظات: ${notes}` : ""}`;

      // 3. فتح الواتساب وإغلاق المودال
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
      onClose();

    } catch (error) {
      console.error("Upload error:", error);
      alert("حدث خطأ أثناء رفع الصورة، يرجى المحاولة مرة أخرى.");
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl text-right animate-in fade-in zoom-in-95 duration-200 my-auto"
        dir="rtl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* زر إغلاق النافذة */}
        <button 
          type="button"
          onClick={onClose}
          className="absolute top-5 left-5 w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E52328] flex items-center justify-center font-bold shrink-0">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-zinc-900">طرش صورة جدارك</h3>
            <p className="text-xs text-zinc-500">معاينة مجانية وتصميم مبدئي خلال أقل من ساعة</p>
          </div>
        </div>

        <div className="space-y-4 my-6">
          {/* منطقة اختيار الصورة */}
          <label className="border-2 border-dashed border-zinc-200 hover:border-[#E52328] rounded-2xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors bg-slate-50/50">
            <Upload className="w-8 h-8 text-[#E52328]" />
            <span className="text-xs sm:text-sm font-bold text-zinc-700 text-center">
              {file ? file.name : "اضغط هنا لاختيار صورة الجدار من جهازك"}
            </span>
            <span className="text-[11px] text-zinc-400">يدعم الصور بصيغة JPG أو PNG</span>
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])}
            />
          </label>

          {/* مربع ملاحظات إضافية */}
          <div>
            <label className="text-xs font-bold text-zinc-700 mb-1.5 block">أي ملاحظات عن المقاس أو الألوان؟ (اختياري)</label>
            <textarea 
              rows={3} 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="مثال: حاب لوحة باللون العنابي والذهبي مقاس 150x100 سم..."
              className="w-full text-xs sm:text-sm p-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-[#E52328] bg-zinc-50"
            />
          </div>
        </div>

        {/* زر الإرسال عبر الواتساب */}
        <Button 
          type="button"
          onClick={handleSend}
          className="w-full bg-[#E52328] hover:bg-[#C81E23] text-white font-bold py-6 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 text-base cursor-pointer"
        >
          <Send className="w-4 h-4 rotate-180" />
          <span>إرسال عبر الواتساب مباشرة</span>
        </Button>
      </div>
    </div>
  );
}