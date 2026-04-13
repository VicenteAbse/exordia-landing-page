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
import { motion } from "framer-motion"

interface Axis {
    title: string
    image: string
    detail: string
    summary: string
}

const axes: Axis[] = [
    {
        title: "Debido proceso y protección estatal",
        image: "/images/axis-1.jpg",
        detail:
            "Desde esta línea asumimos la representación y defensa en procedimientos tramitados de forma ineficiente, desproporcionada, criminalizadora o injusta, desplegándonos tanto en juicios penales como en instancias recursivas y cautelares, con el propósito de resguardar de manera efectiva las garantías constitucionales y convencionales. Actuamos como defensoras de personas investigadas o condenadas, no sólo durante el desarrollo del proceso penal sino también en la etapa de ejecución de la pena, salvaguardando sus derechos al interior de los recintos penitenciarios, vigilando las condiciones de reclusión, el acceso a salud, la integridad física y psíquica, el régimen disciplinario y el otorgamiento de beneficios intrapenitenciarios, e impugnando medidas como traslados, aislamientos o restricciones indebidas cuando vulneran estándares mínimos de dignidad. Asimismo, representamos a personas afectadas por decisiones administrativas arbitrarias o carentes de fundamentación suficiente, promoviendo acciones judiciales destinadas a restablecer el imperio del derecho y a corregir prácticas institucionales contrarias al debido proceso. En todos estos ámbitos actuamos con la convicción de que corresponde exigir al Estado el cumplimiento estricto de los estándares interamericanos de derechos humanos, entendiendo que las garantías procesales constituyen límites sustantivos al poder punitivo y administrativo, especialmente cuando se ejerce respecto de quienes se encuentran en una posición de especial vulnerabilidad frente a la autoridad.",
        summary: "El debido proceso y las obligaciones estatales que comprende no es tecnicismo: es el límite que una sociedad le pone al poder del Estado. En materia penal, esa tensión es especialmente aguda ya que la persecución criminal concentra la mayor capacidad de intervención sobre las personas y, con ella, el mayor riesgo de arbitrariedad. Su protección efectiva, en cada etapa del proceso y para quienes enfrentan al sistema en situación de vulnerabilidad, es una condición mínima de legitimidad institucional."
    },
    {
        title: "INFANCIAS",
        image: "/images/axis-2.jpg",
        detail: "Asumimos la defensa y promoción integral de los derechos de niños, niñas y adolescentes (NNA) desde la convicción de que su condición de sujetos de derecho exige una protección reforzada y una comprensión especializada por parte del sistema jurídico. Si bien, en los últimos años, se han producido avances legislativos significativos, especialmente con la dictación de la Ley Nº 21.430 sobre garantías y protección integral de los derechos de la niñez y adolescencia, la brecha entre la norma y su aplicación efectiva sigue siendo profunda, ya sea por desconocimiento, inercias institucionales o resistencias culturales que continúan tratando a NNA como objetos de tutela y no como titulares plenos de derechos. Por ello, trabajamos esta línea para hacer operativas las garantías legales y convencionales en materias de familia, en delitos cometidos contra menores de edad y en aquellos ejecutados por adolescentes, asegurando que el sistema de responsabilidad penal adolescente respete estándares de especialidad, proporcionalidad y reinserción. Incorporamos de manera técnica la Ley Nº 21.057 sobre entrevista investigativa videograbada, exigiendo su correcta aplicación para evitar la victimización secundaria y asegurar que la prueba se produzca conforme a parámetros de protección y debido proceso. Defendemos también la participación activa de NNA en los asuntos que les afectan, impulsando el respeto de su derecho a ser oídos y a que su opinión sea debidamente considerada en procesos judiciales, administrativos, escolares y sanitarios, y combatimos la persistente falta de comprensión de sus derechos por parte de autoridades y operadores jurídicos. En este eje, nuestro propósito es convertir el reconocimiento normativo en protección real, transformando los estándares legales en herramientas efectivas para asegurar dignidad, autonomía progresiva y acceso sustantivo a la justicia para las niñeces.",
        summary: "Niños, niñas y adolescentes son titulares plenos de derechos, no objetos de tutela. La brecha entre lo que la ley reconoce y lo que el sistema efectivamente garantiza sigue siendo profunda —por desconocimiento, desidia institucional o resistencias culturales- incluso después de los avances legislativos. El reconocimiento normativo sin aplicación real no es avance: es promesa incumplida."
    },
    {
        title: "Derechos fundamentales y libertades públicas",
        image: "/images/axis-3.jpg",
        detail: "Tenemos un compromiso con la defensa estratégica, técnica y decidida de los derechos fundamentales que sostienen el orden constitucional y la vida democrática, comprendiendo que no son meras proclamaciones formales, sino garantías efectivas que limitan el poder y resguardan la dignidad de las personas. Este eje articula la protección de la libertad de expresión, especialmente frente a toda forma de censura previa o indirecta, como presupuesto del debate público y del control democrático; la libertad religiosa y de conciencia como manifestación del pluralismo y de la autonomía moral; la libertad de enseñanza como derecho a desarrollar proyectos educativos conforme a convicciones legítimas dentro del marco constitucional; el derecho a la manifestación y reunión pacífica como expresión colectiva de participación y deliberación en el espacio público; la transparencia y la probidad públicas como exigencias estructurales de legitimidad del actuar estatal; y el derecho de propiedad en sus diversas manifestaciones, asegurando que toda limitación respete estrictamente la legalidad y la proporcionalidad. Desde esta convicción, el estudio asume que la defensa de las libertades públicas implica resistir activamente cualquier intento de restricción arbitraria, afirmando que sin libertad efectiva frente a la censura no hay ciudadanía plena ni Estado de Derecho auténtico.",
        summary: "Los derechos fundamentales no son declaraciones programáticas: son garantías efectivas que limitan el poder y sostienen la vida democrática. No se pueden defender selectivamente sin perder coherencia jurídica y sin debilitar el principio que las sostiene a todas.  La libertad de expresión, de conciencia y de reunión, entre otras,  son el presupuesto esencial para la ciudadanía plena"
    },
    {
        title: "Género y no discriminación",
        image: "/images/axis-4.jpg",
        detail: "Tenemos un compromiso irrestricto con la igualdad material y la no discriminación de las mujeres, las disidencias sexuales y las mal llamadas “minorías”, entendiendo que la igualdad formal resulta insuficiente cuando las estructuras sociales reproducen asimetrías de poder, violencia y exclusión. En este sentido, asumimos la perspectiva de género y la mirada interseccional no como una consigna retórica, sino como metodologías jurídicas imprescindibles para interpretar los hechos, valorar la prueba y aplicar el derecho conforme a los estándares constitucionales e internacionales vigentes, especialmente aquellos desarrollados en el sistema interamericano de derechos humanos. Sabemos que, en la práctica forense, las categorías como el género suelen ser incomprendida por los tribunales o utilizadas de manera superficial y desprovistas de estrategia por parte de los litigantes, lo que termina debilitando su potencial transformador; por ello, nos proponemos dotarla de contenido técnico, coherencia argumentativa y sustento probatorio sólido, integrándola desde el diseño del caso hasta la ejecución de la sentencia. Nuestro trabajo busca no solo reparar vulneraciones concretas, sino también incidir en criterios jurisprudenciales, promover estándares de debida diligencia reforzada frente a la violencia de género, cuestionar decisiones estereotipadas y visibilizar discriminaciones estructurales que atraviesan materias tan diversas como el derecho civil, de familia, penal, administrativo y constitucional. Así, fortalecemos lo que hasta ahora se ha conquistado en materia de igualdad sustantiva y ampliamos su alcance, convencidas de que la defensa con enfoque de género no es un ámbito sectorial del derecho, sino una exigencia transversal para asegurar dignidad, autonomía y acceso real a la justicia.",
        summary: "La perspectiva de género y el enfoque interseccional son metodologías jurídicas con contenido técnico preciso, no etiquetas retóricas. Aplicadas con rigor —en el diseño del caso, en la valoración de la prueba, en la argumentación— tienen capacidad de incidir en criterios jurisprudenciales y corregir discriminaciones que la aplicación mecánica y formalista del derecho invisibiliza."
    },
]

export function ImpactAxes() {
    const [selected, setSelected] = useState<Axis | null>(null)
    const [open, setOpen] = useState(false)
    const [expanded, setExpanded] = useState(false)

    return (
        <section id="impacto" className="bg-card py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                        className="text-3xl text-foreground md:text-4xl text-balance">
                        EJES DE IMPACTO
                    </motion.h2>

                    <motion.p initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }} className="mt-4 leading-relaxed text-muted-foreground">
                        Más allá de las áreas de práctica, nuestro trabajo está guiado por ejes de impacto que constituyen nuestra 
                        identidad y desde los cuales fijamos objetivos de transformación social. Elegimos nuestras causas - y las trabajamos -  
                        en función de estos compromisos.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {axes.map((axis) => (
                        <button
                            key={axis.title}
                            onClick={() => { setSelected(axis); setOpen(true) }}
                            className="group cursor-pointer text-left rounded-lg border border-border bg-card overflow-hidden transition-all hover:border-foreground/20 hover:shadow-md"
                        >
                            <div className="relative h-[280px] sm:h-[320px] lg:h-[360px] overflow-hidden">
                                <Image
                                    src={axis.image}
                                    alt={axis.title}
                                    fill
                                    className="object-cover object-top brightness-80 transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-5 h-[120px] flex items-center">
                                <h3 className="text-lg text-foreground uppercase">
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
                    setTimeout(() => {
                        setSelected(null)
                        setExpanded(false)
                    }, 300)
                }
            }}>
                <DialogContent
                    className="w-[95vw] sm:w-auto sm:max-w-3xl max-h-[90vh] overflow-y-auto bg-card
    p-5 sm:p-6
    data-[state=open]:animate-in data-[state=closed]:animate-out
    data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0
    data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95
    duration-300 data-[state=closed]:zoom-out-90"
                >
                    {selected && (
                        <>
                            {/* Título */}
                            <DialogHeader className="mt-2">
                                <DialogTitle className="text-2xl md:text-3xl text-foreground uppercase">
                                    {selected.title}
                                </DialogTitle>
                            </DialogHeader>

                            {/* Resumen (AHORA DESTACA) */}
                            <p className="mt-4 text-lg md:text-xl font-medium text-foreground leading-relaxed text-justify">
                                {selected.summary}
                            </p>

                            {/* Botón */}
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="mt-3 text-sm font-medium text-primary hover:underline"
                            >
                                {expanded ? "Ver menos" : "Ver más"}
                            </button>

                            {/* Contenido expandible */}
                            <div
                                className={`transition-all duration-300 overflow-hidden ${expanded ? "max-h-[1000px] mt-4" : "max-h-0"
                                    }`}
                            >
                                <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground text-justify">
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