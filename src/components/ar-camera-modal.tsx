"use client";

import { useState, useRef, useEffect } from "react";
import { X, Camera, Send, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

interface ARCameraModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedArtwork: {
    title: string;
    imagePng: string; // صورة اللوحة بدون خلفية (PNG)
  } | null;
}

export function ARCameraModal({ isOpen, onClose, selectedArtwork }: ARCameraModalProps) {
  const { lang, t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  // تشغيل كاميرا الجهاز فور فتح النافذة
  useEffect(() => {
    if (isOpen && !capturedImage) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Camera access error:", err);
        });
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isOpen, capturedImage]);

  if (!isOpen || !selectedArtwork) return null;

  // التحكم في السحب وتحريك اللوحة على الجدار
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX - position.x, y: clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    setPosition({
      x: clientX - dragStart.x,
      y: clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // التقاط صورة الشاشة بالكاميرا واللوحة
  const captureWall = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const img = new Image();
      img.src = selectedArtwork.imagePng;
      img.onload = () => {
        const imgWidth = 200 * scale;
        const imgHeight = (img.height / img.width) * imgWidth;
        const centerX = canvas.width / 2 + position.x - imgWidth / 2;
        const centerY = canvas.height / 2 + position.y - imgHeight / 2;

        ctx.drawImage(img, centerX, centerY, imgWidth, imgHeight);
        setCapturedImage(canvas.toDataURL("image/jpeg"));
      };
    }
  };

  // إرسال الصورة والطلب للواتساب مباشرة
  const sendToWhatsApp = async () => {
    if (!capturedImage) return;

    try {
      const blob = await (await fetch(capturedImage)).blob();
      const file = new File([blob], "ar-preview.jpg", { type: "image/jpeg" });

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error("Upload failed");

      const whatsappNumber = "971586542399";
      const text = lang === "ar" 
        ? `مرحباً Juleative Art 👋\nأرغب في الاستفسار عن اللوحة: *${selectedArtwork?.title || "لوحة جدارية"}*\n\n🖼️ رابط صورة المعاينة على الجدار:\n${data.imageUrl}`
        : `Hello Juleative Art 👋\nI would like to inquire about the artwork: *${selectedArtwork?.title || "Wall Canvas"}*\n\n🖼️ Wall preview link:\n${data.imageUrl}`;

      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
      onClose();

    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-black/90 flex flex-col items-center justify-between p-4">
      {/* الترويسة الأفقية */}
      <div className={`w-full max-w-lg flex items-center justify-between text-white z-10 pt-2 ${lang === "ar" ? "text-right" : "text-left"}`}>
        <div>
          <h3 className="font-bold text-sm sm:text-base">{selectedArtwork.title}</h3>
          <p className="text-[11px] text-zinc-400">{t.arModal.sub}</p>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-zinc-800 text-white flex items-center justify-center cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* الشاشة التفاعلية (الكاميرا واللوحة) */}
      <div className="relative w-full max-w-lg aspect-[3/4] bg-zinc-950 rounded-3xl overflow-hidden my-auto shadow-2xl flex items-center justify-center">
        {!capturedImage ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseUp}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                cursor: isDragging ? "grabbing" : "grab",
              }}
              className="absolute z-20 touch-none select-none transition-transform duration-75"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedArtwork.imagePng}
                alt={selectedArtwork.title}
                className="w-48 sm:w-64 drop-shadow-2xl pointer-events-none"
              />
            </div>
          </>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={capturedImage} alt="Captured Wall" className="w-full h-full object-cover" />
        )}

        <canvas ref={canvasRef} className="hidden" />
      </div>

      {/* شريط التحكم والأزرار بالأسفل */}
      <div className="w-full max-w-lg bg-zinc-900/90 backdrop-blur-md p-4 rounded-2xl flex items-center justify-around gap-2 text-white z-10 border border-zinc-800">
        {!capturedImage ? (
          <>
            <button
              onClick={() => setScale((prev) => Math.min(prev + 0.15, 2.5))}
              className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 cursor-pointer"
            >
              <ZoomIn className="w-5 h-5" />
            </button>

            <Button
              onClick={captureWall}
              className="bg-[#E52328] hover:bg-red-700 text-white font-bold px-6 py-6 rounded-full flex items-center gap-2 shadow-lg shadow-red-600/30 cursor-pointer"
            >
              <Camera className="w-5 h-5" />
              <span>{t.arModal.capture}</span>
            </Button>

            <button
              onClick={() => setScale((prev) => Math.max(prev - 0.15, 0.5))}
              className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 cursor-pointer"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
          </>
        ) : (
          <>
            <Button
              onClick={() => setCapturedImage(null)}
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-4 py-5 rounded-full flex items-center gap-2 text-xs cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.arModal.retake}</span>
            </Button>

            <Button
              onClick={sendToWhatsApp}
              className="bg-[#E52328] hover:bg-red-700 text-white font-bold px-6 py-5 rounded-full flex items-center gap-2 text-xs shadow-lg shadow-red-600/30 cursor-pointer"
            >
              <Send className={`w-4 h-4 ${lang === "ar" ? "rotate-180" : ""}`} />
              <span>{t.arModal.sendWhatsapp}</span>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}