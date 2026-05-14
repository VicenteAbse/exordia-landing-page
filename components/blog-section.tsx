"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import Link from "next/link"
import { type SanityDocument } from "next-sanity"
import { urlFor } from "@/sanity/image"
import { AUTHORS, formatDate } from "@/lib/blog-utils"

type Props = {
  posts: SanityDocument[]
}

export function BlogSection({ posts }: Props) {
  const [selected, setSelected] = useState<SanityDocument | null>(null)

  return (
    <section id="blog" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl text-foreground md:text-4xl text-balance uppercase">
              Blog y recursos
            </h2>
          </div>
          <Link href="/blog">
            <Button
              variant="outline"
              className="group border-border text-foreground hover:bg-background hover:border-foreground/30 hover:text-foreground cursor-pointer transition-all duration-200 shrink-0"
            >
              Ver todos los artículos
              <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const imageUrl = post.image ? urlFor(post.image).width(800).height(400).url() : null
            const slug = post.slug?.current ?? post.slug

            return (
              <button
                key={slug}
                onClick={() => setSelected(post)}
                className="group flex flex-col rounded-lg border border-border bg-background overflow-hidden transition-all hover:border-foreground/20 hover:shadow-md text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Leer artículo: ${post.title}`}
              >
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex-1 p-6">
                  <span className="inline-block rounded-sm bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-xl leading-snug text-foreground text-balance">
                    {post.title}
                  </h3>
                </div>
                <div className="border-t border-border px-6 py-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <User className="size-3.5" />
                      {AUTHORS[post.author] ?? post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-3.5" />
                      {formatDate(post.date)}
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="bg-card border-border max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          {selected && (() => {
            const imageUrl = selected.image ? urlFor(selected.image).width(1200).height(600).url() : null
            const slug = selected.slug?.current ?? selected.slug

            return (
              <>
                <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-muted">
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={selected.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block rounded-sm bg-foreground/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-foreground">
                      {selected.category}
                    </span>
                  </div>
                </div>

                <div className="px-6 pb-8 pt-2 sm:px-8">
                  <DialogTitle className="text-2xl leading-snug text-foreground sm:text-3xl text-balance">
                    {selected.title}
                  </DialogTitle>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <User className="size-4" />
                      {AUTHORS[selected.author] ?? selected.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-4" />
                      {formatDate(selected.date)}
                    </span>
                  </div>

                  <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
                    <Button
                      variant="outline"
                      className="border-border text-foreground hover:bg-background"
                      onClick={() => setSelected(null)}
                    >
                      <ArrowLeft className="mr-2 size-4" />
                      Volver
                    </Button>
                    <Button
                      className="bg-foreground text-background hover:bg-foreground/90"
                      asChild
                    >
                      <a href={`/blog/${slug}`} onClick={() => setSelected(null)}>
                        Leer artículo
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )
          })()}
        </DialogContent>
      </Dialog>
    </section>
  )
}
