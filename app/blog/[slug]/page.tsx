import { articles, Article } from "@/data/articles"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, User, Calendar, Clock } from "lucide-react"

type Props = {
    params: {
        slug: string
    }
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params

    const article: Article | undefined = articles.find(
        (a) => a.slug === slug
    )

    if (!article) {
        return <div className="p-10">Artículo no encontrado</div>
    }

    return (
        <section className="bg-card py-24 md:py-32">
            <div className="mx-auto max-w-3xl px-6">

                {/* volver */}
                <Link href="/blog">
                    <button className="group mb-6 flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-md hover:bg-background hover:border-foreground/30 cursor-pointer transition-all duration-200">
                            <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
                            Ver todos los artículos
                        </button>
                </Link>

                {/* imagen */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-lg mb-8">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* categoría */}
                <span className="inline-block rounded-sm bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {article.category}
                </span>

                {/* título */}
                <h1 className="mt-4 text-3xl md:text-4xl text-foreground leading-snug">
                    {article.title}
                </h1>

                {/* meta */}
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                        <User className="size-4" />
                        {article.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Calendar className="size-4" />
                        {article.date}
                    </span>
                    {/* <span className="flex items-center gap-1.5">
                        <Clock className="size-4" />
                        {article.readTime}
                    </span> */}
                </div>

                {/* contenido */}
                <div
                    className="mt-10 text-base leading-relaxed text-foreground/80 text-justify
             [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:text-foreground
             [&_p]:mb-6"
                    dangerouslySetInnerHTML={{ __html: article.body }}
                />

            </div>
        </section>
    )
}