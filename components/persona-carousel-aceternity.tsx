"use client";

import { Persona } from "@/types/persona";
import { Gallery4 } from "@/components/ui/gallery4";

export const PersonaCarouselAceternity = ({
  personas,
}: {
  personas: Persona[];
}) => {
  // Transform personas into Gallery4 items
  const galleryItems = personas.map((persona) => ({
    id: persona.name.toLowerCase().replace(/\s+/g, "-"),
    title: persona.name,
    description: `${persona.title} • ${persona.age} years old • ${persona.location}\n\n${persona.quote}`,
    href: "#", // You can update this with actual links if needed
    // image: persona.imgSrc,
    image:
      "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  }));

  return (
    <Gallery4
      title="User Personas"
      description="Meet our diverse user personas. Each represents a unique segment of our target audience, helping us understand their needs, goals, and challenges."
      items={galleryItems}
    />
  );
};
