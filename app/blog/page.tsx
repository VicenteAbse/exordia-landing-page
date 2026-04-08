"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { articles } from "@/data/articles"
import { ArrowLeft, User, Calendar, Search } from "lucide-react"

export default function BlogPage() {
    const [query, setQuery] = useState("")

    // 🔎 filtro de búsqueda
    const filteredArticles = useMemo(() => {
        return articles.filter((article) =>
            `${article.title} ${article.excerpt} ${article.category}`
                .toLowerCase()
                .includes(query.toLowerCase())
        )
    }, [query])

    return (
        <section className="bg-card py-24 md:py-32 min-h-screen">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
                    <h1 className="text-3xl md:text-4xl text-foreground uppercase">
                        Blog y recursos
                    </h1>

                    <Link href="/#blog">
                        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
                            <ArrowLeft className="size-4" />
                            Volver
                        </button>
                    </Link>
                </div>

                {/* 🔎 Buscador */}
                <div className="relative mb-12 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Buscar artículos..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full rounded-md border border-border bg-background pl-10 pr-4 py-2 text-sm outline-none focus:border-foreground/30"
                    />
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredArticles.map((article) => (
                        <Link key={article.slug} href={`/blog/${article.slug}`}>
                            <div className="group flex flex-col rounded-lg border border-border bg-background overflow-hidden transition-all hover:border-foreground/20 hover:shadow-md">
                                {/* imagen más chica */}
                                <div className="relative h-36 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="flex-1 p-4">
                                    <span className="inline-block rounded-sm bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary">
                                        {article.category}
                                    </span>

                                    <h3 className="mt-3 text-base leading-snug text-foreground line-clamp-2">
                                        {article.title}
                                    </h3>

                                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                </div>

                                <div className="border-t border-border px-4 py-3">
                                    <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <User className="size-3" />
                                            {article.author}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar className="size-3" />
                                            {article.date}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* vacío */}
                {filteredArticles.length === 0 && (
                    <div className="mt-20 text-center text-muted-foreground">
                        No se encontraron artículos
                    </div>
                )}

            </div>
        </section>
    )
}