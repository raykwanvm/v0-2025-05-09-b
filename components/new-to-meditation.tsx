import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

export default function NewToMeditation() {
  // Array of 6 feature items
  const features = [
    {
      title: "Free beginner’s class",
      description: "Learn to meditate anywhere",
      imageSrc: "/images/new-to-med-1.png",
    },
    {
      title: "Free books",
      description: "Buddhism 101",
      imageSrc: "/images/new-to-med-2.png",
    },
    {
      title: "Free yourself",
      description: "Face yourself",
      imageSrc: "/images/new-to-med-3.png",
    },
  ];

  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-clay-50"
    >
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-sage-800">
            New to Meditation?
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={0.1 * index} className="h-full">
              <Link href="#" className="h-full block">
                <FeatureCard feature={feature} />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
