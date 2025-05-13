import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HyperUiCard } from "./page";

interface Feature {
  title: string;
  description: string;
  imageSrc: string;
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card className="h-full border-sage-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-white">
      <CardContent className="p-6 flex flex-col gap-4">
        <p className="text-stone-600">{feature.description}</p>

        <div className="w-full aspect-square bg-sage-100 flex items-center justify-center relative overflow-hidden">
          <Image
            src={feature.imageSrc}
            alt={feature.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold text-moss-700 text-center">
          {feature.title}
        </h3>
      </CardContent>
    </Card>
  );
}

export default function FeaturesWithSquareImages() {
  // Array of 6 feature items
  const features = [
    {
      title: "Teachings",
      description: "2,500 years of proven results",
      imageSrc: "/images/why-chan-1.png",
    },
    {
      title: "Teachers",
      description: "Our roots reach the Buddha",
      imageSrc: "/images/why-chan-2.png",
    },
    {
      title: "Classes",
      description: "Learn to be mindful and relax",
      imageSrc: "/images/why-chan-3.png",
    },
    {
      title: "Calendar",
      description: "Feel the energy of group meditation",
      imageSrc: "/images/why-chan-4.png",
    },
    {
      title: "Guided meditation",
      description: "Experience stillness now",
      imageSrc: "/images/why-chan-5.png",
    },
    {
      title: "Reserve your seat today!",
      description: "Welcome to your sanctuary",
      imageSrc: "/images/why-chan-6.jpg",
    },
  ];

  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-stone-100"
    >
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-sage-800">
            Value Proposition
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={0.1 * index} className="h-full">
              <Link href="/feature1" className="h-full block">
                {/* <FeatureCard feature={feature} /> */}
                <HyperUiCard />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
