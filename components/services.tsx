import { Building2, Users, Gavel, FileText, Shield, Handshake } from "lucide-react"
import * as Accordion from "@radix-ui/react-accordion"

const services = [
  {
    icon: Building2,
    title: "DERECHO ADMINISTRATIVO",
    description:
      "Brindamos asesoría y representación en materias regulatorias y en la interacción con órganos públicos. Intervenimos en procedimientos sancionatorios e investigaciones sumarias, impugnando actos administrativos ilegales o arbitrarios. Asimismo, ejercemos acciones constitucionales cuando se vulneran derechos fundamentales, con la convicción de que es imperioso limitar las arbitrariedades estatales.",
  },
  {
    icon: Users,
    title: "DERECHO DE FAMILIAS",
    description:
      "Una de nuestras principales características como estudio es poner a las personas en el centro para brindar soluciones que alivien el conflicto familiar. Esto se hace aún más necesario en materias altamente sensibles, que impactan en la vida de niñas, niños y adolescentes y en las economías domésticas. Generamos estrategias integrales desde una ética del cuidado, aplicando perspectiva de derechos y procurando contribuir a los equilibrios personales en disputas relativas a las garantías de las infancias, el quiebre matrimonial, violencia intrafamiliar, etcétera.",
  },
  {
    icon: Gavel,
    title: "DERECHO PENAL",
    description:
      "Gracias a nuestra experiencia en una amplia gama de litigios penales complejos, brindamos asesoría integral y eficiente a personas expuestas a una investigación y, eventualmente, acusación criminal. Asimismo, representamos a víctimas de delitos especialmente sensibles, tales como delitos sexuales y delitos contra la vida; delitos contra la propiedad, delitos económicos, delitos informáticos, entre otros. Impulsamos activamente el desarrollo expedito de una investigación rigurosa y desarrollamos estrategias judiciales que otorguen las mejores soluciones a quienes interactúan con el sistema penal.",
  },
  {
    icon: FileText,
    title: "DERECHO CIVIL",
    description:
      "Nos dedicamos a la tramitación de juicios civiles, ante Juzgados Civiles y Juzgados de Policía Local, procurando satisfacer las necesidades de personas y empresas ante un problema legal. Hemos estudiado para brindar una asesoría integral desde las etapas tempranas del conflicto, planificando estratégicamente las opciones más rentables para quienes representamos en asuntos relativos a bienes inmuebles, defensa del patrimonio, ley de copropiedad, incumplimientos de contratos y responsabilidad tanto del Estado como de particulares.",
  },
  {
    icon: Shield,
    title: "ASESORÍA ORGANIZACIONAL Y FORMACIÓN",
    description:
      "Nuestro interés por transmitir lo que sabemos nos ha permitido desarrollar aptitudes y metodología en el asesoramiento de empresas, organizaciones de la sociedad civil y organismos públicos en materias de género, derechos fundamentales, violencia en el trabajo y diversas materias penales. La creación e implementación de protocolos, reglamentos internos, manuales y herramientas formativas se adecúan a las necesidades y objetivos -encuadrados dentro del marco legal- de cada grupo humano. De la misma forma, realizamos capacitaciones, talleres educativos y cursos formativos diseñados para impactar los espacios de intervención, con el objetivo de generar auténtico interés y compromiso con el aprendizaje en las temáticas que impartimos.",
  },
  {
    icon: Handshake,
    title: "ARBITRAJES Y RESOLUCIÓN ALTERNATIVA DE CONFLICTOS",
    description:
      "Ejercemos el litigio arbitral, ante el Centro de Arbitraje y Mediación de la Cámara de Comercio de Santiago, así como árbitros privados designados por la justicia ordinaria en procedimientos de liquidación de sociedad conyugal y de partición de herencia. También comprendemos que muchas veces es mejor llegar a un acuerdo que un litigio financieramente costoso y extenso en el tiempo; en este sentido, nuestra experiencia en negociación se extiende a diversas áreas, incluyendo materias de construcción, conflictos societarios, disputas familiares y salidas alternativas en el proceso penal.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
            ÁREAS DE TRABAJO
          </h2>
        </div>
        <div className="mt-16 mb-24 mx-auto max-w-7xl">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {services.map((service) => (
              <Accordion.Item
                key={service.title}
                value={service.title}
                className="rounded-lg border border-border bg-background"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between p-6 text-left transition hover:bg-muted/40">
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <service.icon className="size-6" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {service.title}
                      </h3>
                    </div>

                    <span className="text-muted-foreground transition-transform duration-300 data-[state=open]:rotate-45">+</span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content
  className="
  overflow-hidden
  text-sm
  data-[state=open]:animate-accordion-down
  data-[state=closed]:animate-accordion-up
"
>
                  <div className="px-6 pt-4 pb-6 text-muted-foreground leading-relaxed">{service.description}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>

  )
}
