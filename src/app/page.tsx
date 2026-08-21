"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { HandPaintedFeatures } from "@/components/hand-painted-features";
import { SizeGuide } from "@/components/size-guide";
import { Gallery } from "@/components/gallery";
import { WhyUs } from "@/components/why-us";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { UploadModal } from "@/components/upload-modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background relative">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <HowItWorks />
      <HandPaintedFeatures />
      <SizeGuide />
      <Gallery onOpenModal={() => setIsModalOpen(true)} />
      <WhyUs />
      <FAQ />
      <Footer />

      <UploadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}