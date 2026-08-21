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
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

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
      {/* صورة "قبل" (الحائط الفارغ كخلفية أساسية) */}
      <Image
        src={beforeImage}
        alt="قبل إضافة اللوحة"
        fill
        className="object-cover"
        priority
      />

      {/* صورة "بعد" (اللوحة معلقة - الطبقة المتحركة) */}
      <div
        className="absolute top-0 bottom-0 left-0 overflow-hidden transition-all duration-75 ease-out"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-full h-full min-w-[300px] sm:min-w-[600px]">
          <Image
            src={afterImage}
            alt="بعد إضافة اللوحة"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* خط السلايدر */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_12px_rgba(0,0,0,0.5)] transition-all duration-75 ease-out"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-zinc-200 text-zinc-900 font-bold group-hover:scale-110 transition-transform">
          <svg className="w-5 h-5 text-[#E52328]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
          </svg>
        </div>
      </div>

      {/* أزرار قبل وبعد المظبوطة */}
      <div 
        dir="rtl"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 p-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/20 shadow-xl"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
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
      </div>

    </div>
  );
}