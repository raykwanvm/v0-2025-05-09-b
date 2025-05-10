import { Button } from "@/components/ui/button"
import AnimatedSection from "./animated-section"

export default function Cta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to streamline your workflow?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Join thousands of teams that use StreamLine to collaborate, manage projects, and deliver results.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="px-8 transition-transform hover:scale-105">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="px-8 transition-transform hover:scale-105">
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">No credit card required. 14-day free trial.</p>
        </AnimatedSection>
      </div>
    </section>
  )
}
