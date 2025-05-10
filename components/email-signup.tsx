"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import AnimatedSection from "./animated-section"

export default function EmailSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Success!",
        description: "Thank you for signing up. We'll keep you updated.",
      })

      setEmail("")
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-clay-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <AnimatedSection className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-sage-800">Join Us</h2>
            <p className="text-stone-700 md:text-xl/relaxed">
              Be the first to know when our center opens. Sign up for updates on our programs, events, and teachings.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 border-sage-300 focus-visible:ring-moss-500"
                  aria-label="Email address"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 transition-transform hover:scale-105 bg-moss-600 hover:bg-moss-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </Button>
            </form>
            <p className="mt-4 text-sm text-stone-500">We respect your privacy. Unsubscribe at any time.</p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
