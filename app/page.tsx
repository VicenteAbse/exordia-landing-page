import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { BlogSection } from "@/components/blog-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatWeDo } from "@/components/what-we-do"
import { ImpactAxes } from "@/components/impact-axes"
import { OurDifference } from "@/components/our-difference"
import { Testimonials } from "@/components/testimonials"
import { client } from "@/sanity/client"
import { type SanityDocument } from "next-sanity"

const POSTS_QUERY = `*[_type == "post"] | order(date desc)[0...3]{
  slug,
  title,
  body,
  author,
  date,
  category,
  image
}`

export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY)

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
      <BlogSection posts={posts} />
      <Contact />
    </main>
  )
}
