"use client";

import { useState } from "react";
import { LanguageProvider } from "@/context/language-context";
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

  return (
    <LanguageProvider>
      <main className="min-h-screen bg-white">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <HowItWorks />
        <HandPaintedFeatures />
        <WhyUs />
        <Gallery onOpenModal={() => setIsModalOpen(true)} />
        <SizeGuide />
        <FAQ />
        <Footer />
        <UploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </LanguageProvider>
  );
}