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
        <section className="bg-card py-24 md:py-22 min-h-screen">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mb-12">

                    {/* Botón volver arriba */}
                    <Link href="/#blog">
                        <button className="group mb-6 flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-md hover:bg-background hover:border-foreground/30 cursor-pointer transition-all duration-200">
                            <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
                            Volver a la página principal
                        </button>
                    </Link>

                    {/* Título */}
                    <h1 className="text-3xl md:text-4xl text-foreground uppercase mb-6 mt-20">
                        Blog y recursos
                    </h1>

                    {/* Buscador */}
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

                                    {/* <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                                        {article.excerpt}
                                    </p> */}
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