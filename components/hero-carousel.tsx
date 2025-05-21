"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

// this is from HeroWavesResponsive

export function HeroCarousel({
  backgroundImagesDesktop,
  backgroundImagesMobile,
  title,
  subtitle,
  alt,
  autoRotateInterval = 5000,
}: {
  backgroundImagesDesktop: string[];
  backgroundImagesMobile: string[];
  title: string;
  subtitle?: string;
  alt?: string;
  autoRotateInterval?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === backgroundImagesDesktop.length - 1 ? 0 : prevIndex + 1
    );
  }, [backgroundImagesDesktop.length]);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? backgroundImagesDesktop.length - 1 : prevIndex - 1
    );
  }, [backgroundImagesDesktop.length]);

  // Auto rotation
  useEffect(() => {
    const interval = setInterval(goToNextSlide, autoRotateInterval);
    return () => clearInterval(interval);
  }, [goToNextSlide, autoRotateInterval]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        {/* Desktop */}
        <div className="absolute inset-0 hidden md:block">
          {backgroundImagesDesktop.map((image, index) => (
            <div
              key={`desktop-${index}`}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={alt || "hero image"}
                fill
                quality={100}
                priority={index === currentIndex}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="absolute inset-0 block md:hidden">
          {backgroundImagesMobile.map((image, index) => (
            <div
              key={`mobile-${index}`}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={alt || "hero image"}
                fill
                quality={100}
                priority={index === currentIndex}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 text-center">
        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-stone-100/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-6"
          >
            <Button
              onClick={scrollToFeatures}
              size="lg"
              className="rounded-full px-8 py-6 bg-clay-100 text-sage-900 hover:bg-clay-200 transition-all hover:scale-105 group"
            >
              Explore
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div> */}
        </motion.div>
      </div>

      {/* Carousel Navigation Controls */}
      <div className="absolute z-20 bottom-1/2 w-full flex justify-between px-4 transform translate-y-1/2">
        <button
          onClick={goToPrevSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goToNextSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute z-20 bottom-12 left-0 right-0 flex justify-center gap-2">
        {backgroundImagesDesktop.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <ChevronDown
          className="h-8 w-8 text-stone-100/70"
          onClick={scrollToFeatures}
        />
      </motion.div>
    </section>
  );
}
