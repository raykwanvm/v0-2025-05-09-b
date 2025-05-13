import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/animated-section";
import Link from "next/link";

export default function FeatureSection() {
  const features = [
    {
      title: "Feature One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Feature Two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Feature Three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Feature Four",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-clay-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] items-start">
          {/* Left side - Header */}
          <AnimatedSection className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-sage-800">
              Feature Section
            </h2>
            <p className="text-stone-700 max-w-md">
              Discover the unique features that set our approach apart. Our
              meditation methods are designed to help you find balance and
              clarity in your daily life.
            </p>
            <Link
              href="/about-us"
              className="text-sage-700 hover:text-sage-900 font-medium"
            >
              Learn more about our approach →
            </Link>
          </AnimatedSection>

          {/* Right side - Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <AnimatedSection
                key={index}
                delay={0.1 * index}
                className="h-full"
              >
                <Card className="h-full border-sage-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-moss-700">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureSection2() {
  const features = [
    {
      title: "Modern Zen",
      description:
        "[Something about how our form of Chan is adaptable and relevant to modern life (to alleviate concerns that Zen/Chan is too conservative and traditional)]",
    },
    {
      title: "Rooted in Tradition",
      description:
        "[Something to signal tradition and authenticity. Inheritors of Caodong and Linji lineages through Master Sheng Yen?]",
    },
    {
      title: "Feature 3: Inclusive?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Feature 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-clay-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] items-start">
          {/* Left side - Header */}
          <AnimatedSection className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-sage-800">
              [Welcome Headline]
            </h2>
            <p className="text-stone-700 max-w-md">
              [Short welcome message introducing DDMC]
              <ul>
                <li>who we are</li>
                <li>what we do</li>
                <li>what sets us apart</li>
              </ul>
            </p>
            <p className="text-stone-700 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <p className="text-stone-700 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum egestas felis tortor, ac pulvinar risus volutpat id.
              Vivamus sit amet turpis et enim vestibulum accumsan. Vivamus
              mollis lobortis ex, id porta lorem auctor non.
            </p>
            {/* <Link
              href="/about-us"
              className="text-sage-700 hover:text-sage-900 font-medium mt-3"
            >
              Learn more →
            </Link> */}
            <Link
              className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
              href="/about-us"
            >
              Learn more
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link>
          </AnimatedSection>

          {/* Right side - Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <AnimatedSection
                key={index}
                delay={0.1 * index}
                className="h-full"
              >
                <Card className="h-full border-sage-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-moss-700">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
