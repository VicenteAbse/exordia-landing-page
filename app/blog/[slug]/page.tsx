import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, User, Calendar } from "lucide-react"
import { client } from "@/sanity/client"
import { type SanityDocument } from "next-sanity"
import { PortableText } from "@portabletext/react"
import { urlFor } from "@/sanity/image"
import { AUTHORS, formatDate } from "@/lib/blog-utils"

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  slug,
  title,
  body,
  author,
  date,
  category,
  image
}`

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch<SanityDocument | null>(POST_QUERY, { slug })

  if (!post) {
    return <div className="p-10">Artículo no encontrado</div>
  }

  const imageUrl = post.image ? urlFor(post.image).width(1200).height(600).url() : null

  return (
    <section className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">

        <Link href="/blog">
          <button className="group mb-6 flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-md hover:bg-background hover:border-foreground/30 cursor-pointer transition-all duration-200">
            <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Ver todos los artículos
          </button>
        </Link>

        {imageUrl && (
          <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-lg mb-8">
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <span className="inline-block rounded-sm bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {post.category}
        </span>

        <h1 className="mt-4 text-3xl md:text-4xl text-foreground leading-snug">
          {post.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <User className="size-4" />
            {AUTHORS[post.author] ?? post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="size-4" />
            {formatDate(post.date)}
          </span>
        </div>

        <div className="mt-10 text-base leading-relaxed text-foreground/80 text-justify [&_p]:mb-6 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:text-foreground [&_strong]:font-semibold [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6">
          <PortableText value={post.body} />
        </div>

      </div>
    </section>
  )
}
