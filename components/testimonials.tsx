import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedSection from "./animated-section"

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Loved by teams worldwide</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Don't just take our word for it. Here's what our customers have to say about StreamLine.
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <AnimatedSection delay={0.1} className="h-full">
            <Card className="h-full transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Jane Doe</div>
                      <div className="text-sm text-muted-foreground">Product Manager at TechCorp</div>
                    </div>
                  </div>
                  <div className="text-muted-foreground">
                    "StreamLine has completely transformed how our team works. We're more organized, more efficient, and
                    delivering better results than ever before."
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="h-full">
            <Card className="h-full transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="Avatar" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">John Smith</div>
                      <div className="text-sm text-muted-foreground">CEO at StartupX</div>
                    </div>
                  </div>
                  <div className="text-muted-foreground">
                    "As a fast-growing startup, we needed a solution that could scale with us. StreamLine has been the
                    perfect partner in our growth journey."
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection delay={0.3} className="h-full">
            <Card className="h-full transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="Avatar" />
                      <AvatarFallback>EJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Emily Johnson</div>
                      <div className="text-sm text-muted-foreground">Team Lead at DesignHub</div>
                    </div>
                  </div>
                  <div className="text-muted-foreground">
                    "The collaboration features in StreamLine are unmatched. Our design team can now work seamlessly
                    with developers, resulting in faster project completion."
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
