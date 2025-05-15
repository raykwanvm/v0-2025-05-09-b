"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PersonaCard } from "./persona-card";
import { useMediaQuery } from "@/hooks/use-media-query";
import type { CarouselApi } from "@/components/ui/carousel";
import type { Persona } from "@/app/sample-components/persona-card";

interface PersonaCarousel2Props {
  personas: Persona[];
}

export function PersonaCarousel2({ personas }: PersonaCarousel2Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");

  // Showing fewer cards at once since they now contain more information
  const itemsToShow = isMobile ? 1 : isTablet ? 1 : 2;

  // Set up the carousel API reference
  const handleApiChange = (api: CarouselApi | null) => {
    if (api) {
      setApi(api);
    }
  };

  // Update active index when the carousel changes
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Carousel Component
        </h2>
        {/* <p className="text-lg text-center text-slate-600 max-w-3xl mx-auto mb-12">
          Swipe to see the different personas
        </p> */}

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              // Enable drag mode for touch devices
              dragFree: false,
              draggable: true,
            }}
            className="w-full touch-pan-y"
            onApiChange={handleApiChange}
            setApi={setApi}
          >
            {/* Left overlay with animation */}
            <div
              className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 flex items-center justify-start 
                        bg-gradient-to-r from-slate-50/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              <CarouselPrevious
                className="h-10 w-10 ml-2 rounded-full bg-white/40 hover:bg-white/80 border-0 shadow-md 
                               backdrop-blur-sm transition-all duration-300 hover:scale-110"
              />
            </div>

            <CarouselContent>
              {personas.map((persona, index) => (
                <CarouselItem
                  key={index}
                  className={`pl-4 ${
                    isTablet || isMobile ? "basis-full" : "md:basis-1/2"
                  }`}
                >
                  <PersonaCard persona={persona} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Right overlay with animation */}
            <div
              className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 flex items-center justify-end 
                        bg-gradient-to-l from-slate-50/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              <CarouselNext
                className="h-10 w-10 mr-2 rounded-full bg-white/40 hover:bg-white/80 border-0 shadow-md 
                             backdrop-blur-sm transition-all duration-300 hover:scale-110"
              />
            </div>
          </Carousel>

          {/* Mobile swipe indicator - only shown on mobile */}
          {isMobile && (
            <div className="mt-4 flex items-center justify-center text-sm text-slate-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M1 12h4"></path>
                <path d="M16 12h4"></path>
                <path d="M5 12l3 3"></path>
                <path d="M5 12l3-3"></path>
                <path d="M19 12l-3 3"></path>
                <path d="M19 12l-3-3"></path>
              </svg>
              Swipe to navigate
            </div>
          )}

          <div className="flex justify-center mt-4">
            <div className="flex gap-1">
              {Array.from({
                length: Math.ceil(personas.length / itemsToShow),
              }).map((_, index) => {
                const isActive =
                  Math.floor(activeIndex / itemsToShow) === index;
                return (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index * itemsToShow)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      isActive ? "bg-slate-800 w-4" : "bg-slate-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
