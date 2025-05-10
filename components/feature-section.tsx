import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedSection from "./animated-section"

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
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-clay-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] items-start">
          {/* Left side - Header */}
          <AnimatedSection className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-sage-800">Feature Section</h2>
            <p className="text-stone-700 max-w-md">
              Discover the unique features that set our approach apart. Our mindful practices are designed to help you
              find balance and clarity in your daily life.
            </p>
          </AnimatedSection>

          {/* Right side - Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={0.1 * index} className="h-full">
                <Card className="h-full border-sage-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-moss-700">{feature.title}</CardTitle>
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
  )
}
