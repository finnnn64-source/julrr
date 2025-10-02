"use client"

import Hero from "./hero"
import Features from "./features"
import HowItWorks from "./how-it-works"
import UseCases from "./use-cases"
import Testimonials from "./testimonials"
import FAQ from "./faq"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <FAQ />
    </div>
  )
}
