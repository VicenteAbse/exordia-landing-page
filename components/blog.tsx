"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ArrowLeft, Calendar, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface Article {
  title: string
  excerpt: string
  body: string[]
  author: string
  date: string
  category: string
  image: string
  readTime: string
}

const articles: Article[] = [
  {
    title: "Nuevas reformas en derecho laboral: lo que debe saber",
    excerpt:
      "Analizamos las recientes modificaciones a la ley laboral y como impactan a empleadores y trabajadores en el panorama actual.",
    body: [
      "Las recientes reformas al marco legal laboral representan un cambio significativo en la relacion entre empleadores y trabajadores. Estas modificaciones, aprobadas en el ultimo periodo legislativo, buscan modernizar las condiciones de trabajo y fortalecer los derechos de los empleados en un entorno laboral cada vez mas digitalizado.",
      "Entre los cambios mas destacados se encuentra la regulacion del teletrabajo, que establece obligaciones claras para los empleadores en cuanto a la provision de herramientas, el respeto a la desconexion digital y la compensacion de gastos derivados del trabajo remoto. Esta normativa responde a las nuevas realidades laborales que se consolidaron en los ultimos anos.",
      "Otro aspecto fundamental de la reforma es el fortalecimiento de los mecanismos de proteccion contra el acoso laboral. Se han ampliado las definiciones de conductas inapropiadas y se han establecido procedimientos mas agiles para la investigacion y sancion de estas practicas, incluyendo la creacion de comites de vigilancia obligatorios en empresas con mas de 50 empleados.",
      "Para los empleadores, estas reformas implican la necesidad de revisar y actualizar sus politicas internas, contratos laborales y reglamentos de trabajo. Recomendamos realizar una auditoria integral de las practicas laborales actuales para identificar areas que requieran ajustes y evitar posibles contingencias legales.",
      "En nuestro bufete, contamos con un equipo especializado que puede guiarlo en la implementacion de estas nuevas disposiciones, asegurando el cumplimiento normativo y la proteccion tanto de la empresa como de sus colaboradores.",
    ],
    author: "Lic. Ricardo Velasco",
    date: "15 de febrero, 2026",
    category: "Derecho Laboral",
    image: "/images/blog-1.jpg",
    readTime: "8 min de lectura",
  },
  {
    title: "Guia completa sobre la custodia compartida",
    excerpt:
      "Todo lo que necesita saber sobre los derechos y obligaciones en casos de custodia compartida tras un divorcio.",
    body: [
      "La custodia compartida se ha convertido en una de las modalidades mas solicitadas en los procesos de divorcio, ya que busca garantizar el bienestar de los menores al mantener una relacion equilibrada con ambos progenitores. Sin embargo, su implementacion requiere un entendimiento claro de los derechos y obligaciones que conlleva.",
      "En terminos legales, la custodia compartida implica que ambos padres participan activamente en la crianza y toma de decisiones importantes sobre la vida de sus hijos, incluyendo educacion, salud y actividades extracurriculares. Esto no necesariamente significa una division exacta del tiempo, sino una distribucion equitativa y funcional adaptada a las circunstancias de cada familia.",
      "Para que un juez otorgue la custodia compartida, se evaluan diversos factores: la capacidad de ambos padres para atender las necesidades del menor, la proximidad geografica de los domicilios, la estabilidad emocional y economica de cada progenitor, y fundamentalmente, la opinion del menor cuando tiene edad suficiente para expresarla.",
      "Es importante destacar que la custodia compartida no elimina la obligacion de pension alimenticia. El calculo se ajusta considerando los ingresos de ambos padres y el tiempo que el menor pasa con cada uno, pero la obligacion de contribuir al sostenimiento de los hijos permanece vigente.",
      "Si esta considerando solicitar la custodia compartida o necesita modificar un regimen existente, nuestro equipo de derecho familiar puede asesorarle en cada etapa del proceso, siempre priorizando el interes superior del menor.",
    ],
    author: "Lic. Maria Elena Torres",
    date: "8 de febrero, 2026",
    category: "Derecho Familiar",
    image: "/images/blog-2.jpg",
    readTime: "6 min de lectura",
  },
  {
    title: "Proteja su marca: registro de propiedad intelectual",
    excerpt:
      "Descubra los pasos esenciales para registrar y proteger su marca en el mercado nacional e internacional.",
    body: [
      "En un mercado cada vez mas competitivo y globalizado, la proteccion de la propiedad intelectual se ha convertido en un pilar fundamental para cualquier empresa. Una marca registrada no solo identifica sus productos y servicios, sino que representa el valor intangible mas importante de su negocio.",
      "El proceso de registro de marca comienza con una busqueda exhaustiva de anterioridades para verificar que la marca propuesta no entre en conflicto con registros existentes. Este paso, aunque puede parecer sencillo, es critico para evitar rechazos y posibles demandas por infraccion de derechos de terceros.",
      "Una vez confirmada la disponibilidad, se presenta la solicitud ante el Instituto de la Propiedad Industrial, clasificando los productos o servicios segun la Clasificacion de Niza. Es recomendable proteger la marca en todas las clases relevantes para su actividad comercial, anticipando posibles expansiones del negocio.",
      "En el ambito digital, la proteccion se extiende al registro de dominios, la vigilancia de uso no autorizado en redes sociales y plataformas de comercio electronico, y la implementacion de estrategias de enforcement que permitan actuar rapidamente ante infracciones.",
      "Para la proteccion internacional, existen mecanismos como el Protocolo de Madrid que simplifican el proceso de registro en multiples paises. Nuestro equipo puede diseniar una estrategia integral de proteccion que se adapte a sus necesidades comerciales actuales y futuras.",
    ],
    author: "Lic. Andres Morales",
    date: "1 de febrero, 2026",
    category: "Propiedad Intelectual",
    image: "/images/blog-3.jpg",
    readTime: "7 min de lectura",
  },
]

export function Blog() {
  const [selected, setSelected] = useState<Article | null>(null)

  return (
    <section id="blog" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Blog
            </p>
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
              Articulos y novedades legales
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
              Mantengase informado con los analisis y opiniones de nuestros
              expertos sobre los temas legales mas relevantes.
            </p>
          </div>
          <Button
            variant="outline"
            className="border-border text-foreground hover:bg-background shrink-0"
          >
            Ver todos los articulos
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <button
              key={article.title}
              onClick={() => setSelected(article)}
              className="group flex flex-col rounded-lg border border-border bg-background overflow-hidden transition-all hover:border-foreground/20 hover:shadow-md text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Leer articulo: ${article.title}`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-6">
                <span className="inline-block rounded-sm bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {article.category}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-foreground text-balance">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
              </div>
              <div className="border-t border-border px-6 py-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <User className="size-3.5" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {article.date}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Article detail dialog */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="bg-card border-border max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          {selected && (
            <>
              <div className="relative h-56 sm:h-72 w-full overflow-hidden">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block rounded-sm bg-foreground/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-foreground">
                    {selected.category}
                  </span>
                </div>
              </div>

              <div className="px-6 pb-8 pt-2 sm:px-8">
                <DialogTitle className="font-serif text-2xl font-semibold leading-snug text-foreground sm:text-3xl text-balance">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  {selected.excerpt}
                </DialogDescription>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <User className="size-4" />
                    {selected.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-4" />
                    {selected.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-4" />
                    {selected.readTime}
                  </span>
                </div>

                <div className="mt-8 flex flex-col gap-5">
                  {selected.body.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed text-foreground/80 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
                  <Button
                    variant="outline"
                    className="border-border text-foreground hover:bg-background"
                    onClick={() => setSelected(null)}
                  >
                    <ArrowLeft className="mr-2 size-4" />
                    Volver al blog
                  </Button>
                  <Button
                    className="bg-foreground text-background hover:bg-foreground/90"
                    asChild
                  >
                    <a href="#contacto" onClick={() => setSelected(null)}>
                      Consultar sobre este tema
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
