import FAQ2, { FAQItem } from "@/components/faq2";
import { HeroWaves, HeroWavesResponsive } from "@/components/hero";
import { PersonaCarouselAceternity } from "@/components/persona-carousel-aceternity";
import { PERSONAS } from "../sample-components/personas";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeroResponsive } from "@/components/hero4";
import { HeroCarousel } from "@/components/hero-carousel";

export default function HeroImagesPage() {
  return (
    <>
      <HeroCarousel
        backgroundImagesDesktop={[
          "mountains1.webp",
          "/waves2.webp",
          "/waves5.webp",
          "/waves6.webp",
          "/waves7.webp",
          "hero-desktop.png",
        ]}
        backgroundImagesMobile={[
          "mountains1.webp",
          "/waves2.webp",
          "/waves5-mobile.webp",
          "/waves6-mobile.webp",
          "/waves7-mobile.webp",
          "hero-mobile.webp",
        ]}
        title=""
        subtitle=""
        alt="value proposition image"
      />
    </>
  );
}
