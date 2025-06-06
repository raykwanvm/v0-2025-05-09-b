"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroMountains() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Image section */}
      <section className="relative w-full h-auto">
        <div
          className="w-full h-auto bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/mountains1.jpg')",
            minHeight: "60vh",
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
          }}
        />
      </section>

      {/* Content section */}
      {/* <section className="w-full bg-stone-100 py-12">
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
      </section> */}

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
