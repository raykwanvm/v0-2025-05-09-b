"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// this is from HeroWavesResponsive

export function HeroResponsive({
  backgroundImageDesktop,
  backgroundImageMobile,
  title,
  subtitle,
  alt,
}: {
  backgroundImageDesktop: string;
  backgroundImageMobile: string;
  title: string;
  subtitle?: string;
  alt?: string;
}) {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        {/* Desktop */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src={backgroundImageDesktop}
            alt={alt || "hero image"}
            fill
            quality={100}
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Mobile */}
        <div className="absolute inset-0 block md:hidden">
          <Image
            src={backgroundImageMobile}
            alt={alt || "hero image"}
            fill
            quality={100}
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
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
          onClick={scrollToFeatures} // okay to place this on ChevronDown?
        />
      </motion.div>
    </section>
  );
}
