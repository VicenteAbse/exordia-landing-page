"use client"

import { useState } from "react"
import Image from "next/image"

interface Item {
    title: string
    content: string
}

const items: Item[] = [
    {
        title: "CADA CASO COMO UNIDAD IRREPETIBLE Y ÚNICA",
        content:
            "No queremos ser parte de la industria legal ni entregar servicios en masa o de forma exprés. Estudiamos cada caso con dedicación y no dejamos nada al azar en su tramitación porque creemos que, en un juicio, todos los detalles importan. Por esta razón medimos la cantidad de trabajo que recibimos y planificamos cuidadosamente la ejecución de cada estrategia.",
    },
    {
        title: "NO NOS APROPIAMOS DEL CONFLICTO",
        content:
            "Creemos que el protagonismo de los asuntos que vemos es de la persona que lo vive. Queremos simplificar la vida de quienes representamos, generando condiciones para la confianza, la colaboración y las decisiones conscientes. El proceso requiere conocimiento técnico, pero también competencias emocionales y reflexión humana.",
    },
    {
        title: "PRÁCTICA LEGAL CENTRADA EN LAS PERSONAS, EMPÁTICA Y SENSIBLE AL TRAUMA",
        content:
            "Nuestra práctica es empática y sensible al trauma. Nos tomamos el tiempo para traducir la ley al lenguaje común, explicar cómo funcionan los procedimientos y utilizar métodos que ayuden a disminuir el estrés, la ansiedad y la victimización secundaria que suelen generar los procesos judiciales.",
    },
    {
        title: "TRABAJO COLECTIVO SIEMPRE",
        content:
            "A diferencia de otros estudios, no dividimos las causas entre las abogadas. El equipo siempre trabaja los casos en conjunto. Cada asunto es analizado desde distintas miradas para alcanzar un equilibrio entre control de riesgos y dinamismo en el litigio.",
    },
    {
        title: "TRANSPARENCIA RADICAL",
        content:
            "No prometemos resultados imposibles ni escenarios judiciales caprichosos. Decimos abiertamente lo que ocurre en tribunales, lo que podemos lograr y cómo queremos planificar cada estrategia. También hablamos con claridad sobre dinero: planes de pago escalonados y flexibles, sin cobros sorpresivos.",
    },
    {
        title: "LA LEY PARA EL BIEN",
        content:
            "Litigamos causas que nos importan y que consideramos justas. Cuando se elevan los estándares de atención y se desafían prácticas legales injustas, no solo se beneficia el caso individual, sino también la sociedad en su conjunto.",
    },
]

export function OurDifference() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section id="difference" className="w-full">

            {/* Hero con imagen de fondo */}
            <div className="relative h-[480px] w-full flex items-start justify-center pt-90 overflow-hidden">

                <Image
                    src="/images/our-difference-bg.jpg"
                    alt="Justice"
                    fill
                    className="object-cover grayscale brightness-[0.45] contrast-125"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* titulo */}
                <h2 className="relative z-10 text-4xl md:text-5xl text-white tracking-[0.25em] text-center px-6">
                    LO DIFERENTE
                </h2>

            </div>

            {/* contenido */}
            <div className="bg-black py-24">
                <div className="mx-auto max-w-4xl px-6">

                    <div className="space-y-6">

                        {items.map((item, index) => {
                            const open = openIndex === index

                            return (
                                <div
                                    key={item.title}
                                    className="border-b border-white/20 pb-6"
                                >

                                    <button
                                        onClick={() =>
                                            setOpenIndex(open ? null : index)
                                        }
                                        className="flex w-full justify-between text-left text-white font-medium text-lg cursor-pointer"
                                    >
                                        {item.title}
                                        <span className="text-white/60">
                                            {open ? "−" : "+"}
                                        </span>
                                    </button>

                                    <div className={`grid transition-all duration-500 ease-in-out 
                                    ${open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                                        <div className="overflow-hidden">
                                            <p className="text-white/80 leading-relaxed text-sm">
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>

        </section>
    )
}