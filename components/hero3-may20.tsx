"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero3May20() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Image section */}
      <section className="relative w-full">
        <img
          src={isMobile ? "/hero-mobile.webp" : "/hero-desktop.png"}
          alt="Hero Image"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* Content section */}
      <section className="w-full bg-stone-100 py-12">
        <div className="container px-4 md:px-6 text-center">
          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-xl md:text-2xl font-bold text-sage-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              That's why we're here:
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-sage-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              to support you in cultivating inner peace and realizing your true
              nature through the teachings of Chan Buddhism.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Subtle indicator for scrolling */}
      <div className="relative">
        <motion.div
          className="absolute top-[-24px] left-1/2 transform -translate-x-1/2"
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
          <ChevronDown className="h-8 w-8 text-sage-700" />
        </motion.div>
      </div>
    </div>
  );
}
