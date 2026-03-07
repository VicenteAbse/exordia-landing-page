import { Scale, Shield, Users, Award } from "lucide-react"

const stats = [
  { icon: Scale, value: "25+", label: "Anos de experiencia" },
  { icon: Users, value: "3,000+", label: "Clientes satisfechos" },
  { icon: Award, value: "98%", label: "Casos exitosos" },
  { icon: Shield, value: "100%", label: "Confidencialidad" },
]

export function About() {
  return (
    <section id="quienes-somos" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-3 font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
              ¿QUIÉNES SOMOS?
            </h2>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              El estudio
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Somos un equipo legal formado en la Escuela de Derecho de la Universidad de Chile y
              unido por el compromiso con una práctica legal rigurosa, responsable, transparente y
              empática. Vemos en el Derecho un potencial transformador sin perder de vista las
              deficiencias del sistema de justicia y sus operadores. Sabemos lo abrumador que puede
              ser un proceso judicial para las personas. Por esta razón, nuestro principal propósito
              es hacer del conflicto jurídico un asunto abordable para quienes lo viven, desenmarañando
              lo que parece complicado, traduciendo al lenguaje y lógica común aquello “reservado” para los expertos.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Concebimos el litigio, es decir, la representación legal de las personas ante tribunales, 
              como un trabajo de alta especialización, conforme a una estrategia diseñada caso a caso, 
              que no se reduce a un mero servicio que se presta de manera rápida y simplista. Por el 
              contrario, entendemos nuestra función en clave social, cuya contribución al interés público 
              radica en elevar los estándares reales del ejercicio del Derecho, promoviendo soluciones 
              eficaces que corrijan las inequidades del sistema legal. De esta forma, nuestra práctica 
              se basa en convicciones firmes sobre cómo se ejerce la profesión jurídica y la sostenemos 
              mirando siempre hacia la excelencia que merecen las personas que confían en XXX estudio.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-card p-6 text-center"
              >
                <stat.icon className="mx-auto mb-3 size-8 text-foreground" />
                <p className="font-serif text-3xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
