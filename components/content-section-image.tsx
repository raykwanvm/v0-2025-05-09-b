import Image from "next/image"
import AnimatedSection from "./animated-section"

export default function ContentSectionImage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left side - Image */}
          <AnimatedSection className="overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=600&width=800"
              width={800}
              height={600}
              alt="Placeholder"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </AnimatedSection>

          {/* Right side - Content */}
          <AnimatedSection delay={0.2} className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">Content Section</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p className="text-muted-foreground">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <p className="text-muted-foreground">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
