"use client"

import { useState } from "react"
import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"

interface Axis {
    title: string
    image: string
    detail: string
}

const axes: Axis[] = [
    {
        title: "GARANTÍAS PROCESALES Y PROTECCIÓN ESTATAL",
        image: "/images/axis-1.jpg",
        detail:
            "Desde esta línea asumimos la representación y defensa en procedimientos tramitados de forma ineficiente, desproporcionada, criminalizadora o injusta, desplegándonos tanto en juicios penales como en instancias recursivas y cautelares, con el propósito de resguardar de manera efectiva las garantías constitucionales y convencionales. Actuamos como defensoras de personas investigadas o condenadas, no sólo durante el desarrollo del proceso penal sino también en la etapa de ejecución de la pena, salvaguardando sus derechos al interior de los recintos penitenciarios, vigilando las condiciones de reclusión, el acceso a salud, la integridad física y psíquica, el régimen disciplinario y el otorgamiento de beneficios intrapenitenciarios, e impugnando medidas como traslados, aislamientos o restricciones indebidas cuando vulneran estándares mínimos de dignidad. Asimismo, representamos a personas afectadas por decisiones administrativas arbitrarias o carentes de fundamentación suficiente, promoviendo acciones judiciales destinadas a restablecer el imperio del derecho y a corregir prácticas institucionales contrarias al debido proceso. En todos estos ámbitos actuamos con la convicción de que corresponde exigir al Estado el cumplimiento estricto de los estándares interamericanos de derechos humanos, entendiendo que las garantías procesales constituyen límites sustantivos al poder punitivo y administrativo, especialmente cuando se ejerce respecto de quienes se encuentran en una posición de especial vulnerabilidad frente a la autoridad.",
    },
    {
        title: "INFANCIAS",
        image: "/images/axis-2.jpg",
        detail:
            "Asumimos la defensa y promoción integral de los derechos de niños, niñas y adolescentes (NNA) desde la convicción de que su condición de sujetos de derecho exige una protección reforzada y una comprensión especializada por parte del sistema jurídico. Si bien, en los últimos años, se han producido avances legislativos significativos, especialmente con la dictación de la Ley Nº 21.430 sobre garantías y protección integral de los derechos de la niñez y adolescencia, la brecha entre la norma y su aplicación efectiva sigue siendo profunda, ya sea por desconocimiento, inercias institucionales o resistencias culturales que continúan tratando a NNA como objetos de tutela y no como titulares plenos de derechos. Por ello, trabajamos esta línea para hacer operativas las garantías legales y convencionales en materias de familia, en delitos cometidos contra menores de edad y en aquellos ejecutados por adolescentes, asegurando que el sistema de responsabilidad penal adolescente respete estándares de especialidad, proporcionalidad y reinserción. Incorporamos de manera técnica la Ley Nº 21.057 sobre entrevista investigativa videograbada, exigiendo su correcta aplicación para evitar la victimización secundaria y asegurar que la prueba se produzca conforme a parámetros de protección y debido proceso. Asimismo, intervenimos frente a situaciones de desprotección estatal de la infancia institucionalizada, denunciando vulneraciones estructurales en residencias y programas de cuidado alternativo, y promoviendo acciones destinadas a garantizar condiciones dignas, acceso a salud, educación y acompañamiento efectivo. Defendemos también la participación activa de NNA en los asuntos que les afectan, impulsando el respeto de su derecho a ser oídos y a que su opinión sea debidamente considerada en procesos judiciales, administrativos, escolares y sanitarios, y combatimos la persistente falta de comprensión de sus derechos por parte de autoridades y operadores jurídicos. En este eje, nuestro propósito es convertir el reconocimiento normativo en protección real, transformando los estándares legales en herramientas efectivas para asegurar dignidad, autonomía progresiva y acceso sustantivo a la justicia para las niñeces.",
    },
    {
        title: "LIBERTADES PÚBLICAS",
        image: "/images/axis-3.jpg",
        detail:
            "Tenemos un compromiso con la defensa estratégica, técnica y decidida de los derechos fundamentales que sostienen el orden constitucional y la vida democrática, comprendiendo que no son meras proclamaciones formales, sino garantías efectivas que limitan el poder y resguardan la dignidad de las personas. Este eje articula la protección de la libertad de expresión, especialmente frente a toda forma de censura previa o indirecta, como presupuesto del debate público y del control democrático; la libertad religiosa y de conciencia como manifestación del pluralismo y de la autonomía moral; la libertad de enseñanza como derecho a desarrollar proyectos educativos conforme a convicciones legítimas dentro del marco constitucional; el derecho a la manifestación y reunión pacífica como expresión colectiva de participación y deliberación en el espacio público; la transparencia y la probidad públicas como exigencias estructurales de legitimidad del actuar estatal; y el derecho de propiedad en sus diversas manifestaciones, asegurando que toda limitación respete estrictamente la legalidad y la proporcionalidad. Desde esta convicción, el estudio asume que la defensa de las libertades públicas implica resistir activamente cualquier intento de restricción arbitraria, afirmando que sin libertad efectiva frente a la censura no hay ciudadanía plena ni Estado de Derecho auténtico.",
    },
    {
        title: "GÉNERO Y NO DISCRIMINACIÓN",
        image: "/images/axis-4.jpg",
        detail:
            "Tenemos un compromiso irrestricto con la igualdad material y la no discriminación de las mujeres, las disidencias sexuales y las mal llamadas “minorías”, entendiendo que la igualdad formal resulta insuficiente cuando las estructuras sociales reproducen asimetrías de poder, violencia y exclusión. En este sentido, asumimos la perspectiva de género y la mirada interseccional no como una consigna retórica, sino como metodologías jurídicas imprescindibles para interpretar los hechos, valorar la prueba y aplicar el derecho conforme a los estándares constitucionales e internacionales vigentes, especialmente aquellos desarrollados en el sistema interamericano de derechos humanos. Sabemos que, en la práctica forense, las categorías como el género suelen ser incomprendida por los tribunales o utilizadas de manera superficial y desprovistas de estrategia por parte de los litigantes, lo que termina debilitando su potencial transformador; por ello, nos proponemos dotarla de contenido técnico, coherencia argumentativa y sustento probatorio sólido, integrándola desde el diseño del caso hasta la ejecución de la sentencia. Nuestro trabajo busca no solo reparar vulneraciones concretas, sino también incidir en criterios jurisprudenciales, promover estándares de debida diligencia reforzada frente a la violencia de género, cuestionar decisiones estereotipadas y visibilizar discriminaciones estructurales que atraviesan materias tan diversas como el derecho civil, de familia, penal, administrativo y constitucional. Así, fortalecemos lo que hasta ahora se ha conquistado en materia de igualdad sustantiva y ampliamos su alcance, convencidas de que la defensa con enfoque de género no es un ámbito sectorial del derecho, sino una exigencia transversal para asegurar dignidad, autonomía y acceso real a la justicia.",
    },
]

export function ImpactAxes() {
    const [selected, setSelected] = useState<Axis | null>(null)
    const [open, setOpen] = useState(false)

    return (
        <section id="impacto" className="bg-background py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        Nuestro Impacto
                    </p>

                    <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
                        EJES DE IMPACTO
                    </h2>

                    <p className="mt-4 leading-relaxed text-muted-foreground">
                        Nuestro trabajo se articula a través de ejes que orientan nuestra
                        práctica jurídica y compromiso con la sociedad.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {axes.map((axis) => (
                        <button
                            key={axis.title}
                            onClick={() => { setSelected(axis); setOpen(true) }}
                            className="group cursor-pointer text-left rounded-lg border border-border bg-card overflow-hidden transition-all hover:border-foreground/20 hover:shadow-md"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image
                                    src={axis.image}
                                    alt={axis.title}
                                    fill
                                    className="object-cover grayscale brightness-90 transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="font-serif text-lg font-semibold text-foreground">
                                    {axis.title}
                                </h3>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <Dialog open={open} onOpenChange={(value) => { 
                setOpen(value) 
                if (!value) {
                    setTimeout(() => setSelected(null), 300)
                }
                }}>
                <DialogContent className="sm:max-w-3xl bg-card data-[state=open]:animate-in data-[state=closed]:animate-out 
        data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95
        duration-300 data-[state=closed]:zoom-out-90">
                    {selected && (
                        <>
                            <DialogHeader>
                                <DialogTitle className="font-serif text-2xl text-foreground">
                                    {selected.title}
                                </DialogTitle>

                                <DialogDescription className="text-muted-foreground">
                                    Eje de impacto
                                </DialogDescription>
                            </DialogHeader>

                            <div className="grid gap-6 sm:grid-[220px_1fr] mt-2">

                                {/* <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-cover grayscale"
                  />
                </div> */}

                                <div className="text-sm leading-relaxed text-foreground">
                                    {selected.detail}
                                </div>

                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    )
}