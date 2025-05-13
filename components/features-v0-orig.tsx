import Link from "next/link";
import AnimatedSection from "./animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Feature {
  title: string;
  description: string;
  imageSrc: string;
  link?: string;
}

export default function FeaturesV0Orig() {
  // Array of 6 feature items
  const features = [
    {
      title: "Feature 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imageSrc: "/zarko/zendo.jpg",
      link: "/features/feature-1",
    },
    {
      title: "Feature 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imageSrc: "/zarko/zendo.jpg",
      link: "/features/feature-2",
    },
    {
      title: "Feature 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imageSrc: "/zarko/zendo.jpg",
      link: "/features/feature-3",
    },
    {
      title: "Feature 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imageSrc: "/zarko/zendo.jpg",
      link: "/features/feature-4",
    },
    {
      title: "Feature 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imageSrc: "/zarko/zendo.jpg",
      link: "/features/feature-5",
    },
    {
      title: "Feature 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imageSrc: "/zarko/zendo.jpg",
      link: "/features/feature-6",
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
              <Link href="#" className="h-full block">
                <Card className="h-full border-sage-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-white">
                  <CardHeader>
                    <CardTitle className="text-moss-700">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
