import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { client } from "@/sanity/client"
import { type SanityDocument } from "next-sanity"
import { BlogList } from "./_blog-list"

export const revalidate = 60

const POSTS_QUERY = `*[_type == "post"]{
  slug,
  title,
  body,
  author,
  date,
  category,
  image
}`

export default async function BlogPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY)

  return (
    <section className="bg-card py-24 md:py-22 min-h-screen">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">
          <Link href="/#blog">
            <button className="group mb-6 flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-md hover:bg-background hover:border-foreground/30 cursor-pointer transition-all duration-200">
              <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
              Volver a la página principal
            </button>
          </Link>

          <h1 className="text-3xl md:text-4xl text-foreground uppercase mb-6 mt-20">
            Blog y recursos
          </h1>

          <BlogList posts={posts} />
        </div>

      </div>
    </section>
  )
}
