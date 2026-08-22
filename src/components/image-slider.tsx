"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface ImageSliderProps {
  beforeImage: string;
  afterImage: string;
}

export function ImageSlider({ beforeImage, afterImage }: ImageSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // تحديث عرض الحاوية عند التحميل وتغيير حجم الشاشة
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;

    requestAnimationFrame(() => {
      setSliderPosition(position);
    });
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.cancelable) e.preventDefault();
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    handleMove(e.clientX);
  }, [handleMove]);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  return (
    <div
      ref={containerRef}
      dir="ltr"
      className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl select-none cursor-ew-resize touch-none border border-zinc-200 shadow-2xl bg-zinc-100 group"
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* صورة "قبل" (الخلفية الأساسية) */}
      <Image
        src={beforeImage}
        alt="قبل إضافة اللوحة"
        fill
        className="object-cover pointer-events-none"
        priority
      />

      {/* صورة "بعد" (الطبقة المقصوصة) */}
      <div
        className="absolute top-0 bottom-0 left-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <div 
          className="absolute inset-0 h-full"
          style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
        >
          <Image
            src={afterImage}
            alt="بعد إضافة اللوحة"
            fill
            className="object-cover pointer-events-none"
            priority
          />
        </div>
      </div>

      {/* خط السلايدر الفاصل */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_12px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-zinc-200 text-zinc-900 font-bold group-hover:scale-110 transition-transform">
          <svg className="w-5 h-5 text-[#E52328]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
          </svg>
        </div>
      </div>

      {/* أزرار التنقل (قبل / بعد) */}
      <div 
        dir="rtl"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 p-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/20 shadow-xl"
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setSliderPosition(100)}
          className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
            sliderPosition > 80
              ? "bg-[#E52328] text-white shadow-lg scale-105"
              : "text-zinc-300 hover:text-white hover:bg-white/10"
          }`}
        >
          بعد
        </button>

        <button
          type="button"
          onClick={() => setSliderPosition(0)}
          className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
            sliderPosition < 20
              ? "bg-[#E52328] text-white shadow-lg scale-105"
              : "text-zinc-300 hover:text-white hover:bg-white/10"
          }`}
        >
          قبل
        </button>
      </div>

    </div>
  );
}