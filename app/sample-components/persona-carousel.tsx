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
import { PERSONAS } from "./personas";
// import { PERSONAS } from "@/data/personas";
// import { useMediaQuery } from "@/hooks/use-media-query";

export function PersonaCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");

  // Showing fewer cards at once since they now contain more information
  const itemsToShow = isMobile ? 1 : isTablet ? 1 : 2;

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Meet Our Community
        </h2>
        <p className="text-lg text-center text-slate-600 max-w-3xl mx-auto mb-12">
          Discover the diverse individuals who make up our mindfulness
          community. Each person brings their unique perspective and journey.
        </p>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onSelect={(index) => setActiveIndex(index)}
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10">
              <CarouselPrevious className="h-12 w-12 rounded-full border-2 border-slate-200 bg-white/80 backdrop-blur-sm" />
            </div>

            <CarouselContent>
              {PERSONAS.map((persona, index) => (
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

            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10">
              <CarouselNext className="h-12 w-12 rounded-full border-2 border-slate-200 bg-white/80 backdrop-blur-sm" />
            </div>
          </Carousel>

          <div className="flex justify-center mt-8">
            <div className="flex gap-1">
              {Array.from({
                length: Math.ceil(PERSONAS.length / itemsToShow),
              }).map((_, index) => {
                const isActive =
                  Math.floor(activeIndex / itemsToShow) === index;
                return (
                  <button
                    key={index}
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

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Update the state initially
    setMatches(media.matches);

    // Define callback for media query change
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add the callback as a listener
    media.addEventListener("change", listener);

    // Remove listener on cleanup
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}
