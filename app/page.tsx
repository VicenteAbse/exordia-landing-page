import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatWeDo } from "@/components/what-we-do"
import { ImpactAxes } from "@/components/impact-axes"
import { OurDifference } from "@/components/our-difference"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <WhatWeDo />
      <Services />
      <ImpactAxes />
      <Testimonials />
      <OurDifference />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
