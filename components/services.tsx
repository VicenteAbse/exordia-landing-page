import { Building2, Users, Gavel, FileText, Shield, Handshake } from "lucide-react"
import * as Accordion from "@radix-ui/react-accordion"

const services = [
  {
    icon: Building2,
    title: "DERECHO ADMINISTRATIVO",
    description:
      "Brindamos asesoría y representación en materias regulatorias, en la interacción con órganos públicos y en procedimientos sancionatorios e investigaciones sumarias. Impugnamos actos administrativos ilegales o arbitrarios y ejercemos acciones constitucionales cuando se vulneran derechos fundamentales, con la convicción de que es imperioso limitar las arbitrariedades estatales.",
  },
  {
    icon: FileText,
    title: "DERECHO CIVIL",
    description:
      "Tramitamos juicios civiles ante Juzgados Civiles y Juzgados de Policía Local en Santiago y otras ciudades del país. Brindamos asesoría integral desde las etapas tempranas del conflicto, planificando estratégicamente las opciones más adecuadas y eficientes en asuntos relativos a bienes inmuebles, defensa del patrimonio, ley de copropiedad, incumplimientos de contratos y responsabilidad civil tanto del Estado como de particulares."
  },
  {
    icon: Users,
    title: "DERECHO DE FAMILIAS",
    description:
      "El conflicto familiar requiere sensibilidad, rigor técnico y una comprensión profunda de su impacto en la vida de las personas. En materias altamente sensibles, como aquellas que involucran a niñas, niños y adolescentes, se hace aún más necesario generar estrategias integrales y éticas. Aplicamos perspectiva de derechos y trabajamos para contribuir a equilibrios personales sostenibles, priorizando siempre la voz de quienes protagonizan el conflicto.",
  },
  {
    icon: Gavel,
    title: "DERECHO PENAL",
    description:
      "Nuestra experiencia en una amplia gama de litigios penales complejos nos permite generar estrategias metódicas y humanas para la defensa de personas imputadas, acusadas y condenadas. Asimismo, nos especializamos en la representación de víctimas de delitos especialmente sensibles, tales como delitos sexuales y delitos contra la vida, además de delitos contra la propiedad, delitos económicos, delitos informáticos, entre otros. Impulsamos investigaciones rigurosas, exigiendo la aplicación de estándares internacionales de derechos humanos.",
  },
  {
    icon: Handshake,
    title: "ARBITRAJES Y RESOLUCIÓN ALTERNATIVA DE CONFLICTOS",
    description:
      "Ejercemos el litigio arbitral ante el Centro de Arbitraje y Mediación de la Cámara de Comercio de Santiago, así como árbitros privados designados por la justicia ordinaria en procedimientos de liquidación de sociedad conyugal y de partición de herencia. Comprendemos que muchas veces un acuerdo negociado es más eficiente que un juicio prolongado: nuestra experiencia en negociación y mediación se extiende a materias de construcción, conflictos societarios, disputas familiares y salidas alternativas en el proceso penal.",
  },
  {
    icon: Shield,
    title: "ASESORÍA ORGANIZACIONAL Y FORMACIÓN",
    description:
      "Capacitamos y asesoramos empresas, organizaciones de la sociedad civil y organismos públicos en materias de género, derechos fundamentales, violencia en el trabajo, acoso laboral y sexual, y diversas materias penales. Diseñamos e implementamos protocolos, reglamentos internos, manuales y herramientas formativas adaptadas a las necesidades de cada organización. También realizamos talleres y cursos orientados a generar compromiso auténtico con el aprendizaje, no solo cumplimiento formal.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-card py-24 md:py-32">
     <div className="mx-auto mt-16 mb-24 max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl px-8 text-foreground md:text-4xl text-balance">
            ÁREAS DE TRABAJO
          </h2>
        </div>
        <div className="mt-16 mb-24 px-6">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {services.map((service) => (
              <Accordion.Item
                key={service.title}
                value={service.title}
                className="rounded-lg border border-border bg-background"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between p-8 md:p-10 text-left transition hover:bg-muted/40">
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <service.icon className="size-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                    </div>

                    <span className="text-muted-foreground transition-transform duration-300 data-[state=open]:rotate-45">+</span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content
                  className="
  overflow-hidden
  text-lg
  data-[state=open]:animate-accordion-down
  data-[state=closed]:animate-accordion-up
  text-justify
"
                >
                  <div className="px-6 pt-4 pb-6 leading-relaxed">{service.description}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>

  )
}
