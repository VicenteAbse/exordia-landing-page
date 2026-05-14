"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { User, Calendar, Search } from "lucide-react"
import { type SanityDocument } from "next-sanity"
import { urlFor } from "@/sanity/image"
import { AUTHORS, formatDate } from "@/lib/blog-utils"

type Props = {
  posts: SanityDocument[]
}

export function BlogList({ posts }: Props) {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    return posts.filter((post) =>
      `${post.title} ${post.category}`.toLowerCase().includes(query.toLowerCase())
    )
  }, [posts, query])

  return (
    <>
      <div className="relative w-full md:max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar artículos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-md border border-border bg-background pl-10 pr-4 py-2 text-sm outline-none focus:border-foreground/30"
        />
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((post) => {
          const imageUrl = post.image ? urlFor(post.image).width(800).height(400).url() : null
          const slug = post.slug?.current ?? post.slug

          return (
            <Link key={slug} href={`/blog/${slug}`}>
              <div className="group flex flex-col rounded-lg border border-border bg-background overflow-hidden transition-all hover:border-foreground/20 hover:shadow-md">
                <div className="relative h-36 overflow-hidden bg-muted">
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="flex-1 p-4">
                  <span className="inline-block rounded-sm bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-base leading-snug text-foreground line-clamp-2">
                    {post.title}
                  </h3>
                </div>

                <div className="border-t border-border px-4 py-3">
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="size-3" />
                      {AUTHORS[post.author] ?? post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      {formatDate(post.date)}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="mt-20 text-center text-muted-foreground">
          No se encontraron artículos
        </div>
      )}
    </>
  )
}
