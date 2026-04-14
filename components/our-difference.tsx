"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Item {
    title: string
    content: string
}

const items: Item[] = [
    {
        title: "Cada caso como unidad irrepetible",
        content:
            "No somos parte de la industria legal, no entregamos servicios en masa ni de forma mecánica. Estudiamos cada caso con dedicación total, sin dejar nada al azar, porque en un juicio todos los detalles importan. Medimos nuestra carga de trabajo con cuidado para que cada persona tenga la atención que merece.",
    },
    {
        title: "No nos apropiamos del conflicto",
        content:
            "Generamos condiciones para la confianza, la colaboración y las decisiones conscientes, en la que el protagonismo sea de quien vive el conflicto. La persona que solicita nuestra representación es quien decide cómo quiere interactuar con el proceso y es con quien fijamos un objetivo en común. Un proceso no solo requiere conocimiento técnico, sino competencias emocionales y reflexión humana."
    },
    {
        title: "Práctica legal empática y sensible al trauma",
        content:
            "Nos parece esencial trasladar la complejidad de la ley al lenguaje común. Explicamos cómo funcionan los procedimientos y empleamos métodos que contribuyen a disminuir el estrés, la ansiedad, el dolor emocional y la victimización secundaria que generan los procesos judiciales."
    },
    {
        title: "Trabajo colectivo siempre",
        content:
            "A diferencia de otros estudios, no dividimos las causas entre quienes integramos el equipo. Cada caso es analizado desde distintas miradas. Nuestro sistema interno está diseñado para alcanzar un balance entre control de riesgos y dinamismo. Tres cabezas piensan mejor que una."
    },
    {
        title: "Transparencia radical",
        content:
            "No presentamos escenarios judiciales caprichosos ni hacemos promesas difíciles de cumplir. Decimos abiertamente lo que sucede en tribunales y lo que podemos lograr. Con esa misma transparencia hablamos de honorarios: planes de pago escalonados y flexibles, sin cobros sorpresivos."
    },
    {
        title: "La ley para el bien",
        content:
            "Litigamos causas que nos importan y que nos hacen crecer como profesionales. Cuando se elevan los estándares de atención, se exige al Estado que cumpla su función y se desafían las prácticas legales que generan injusticias, la sociedad entera se beneficia."
    },
]

export function OurDifference() {
    return (
        <section id="difference" className="w-full bg-card">

            <div className="relative h-[340px] w-full flex items-center justify-center overflow-hidden">

                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="absolute inset-0">

                    <Image
                        src="/images/difference-bg.jpg"
                        alt="Justice"
                        fill
                        className="object-cover object-top grayscale brightness-[0.45] contrast-125"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-black/40" />

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                    className="relative z-10 mt-52 text-4xl md:text-5xl text-white tracking-[0.25em] text-center px-6">
                    LO DIFERENTE
                </motion.h2>

            </div>

            {/* contenido */}
            <div className="bg-card py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <p className="mb-20 text-muted-foreground leading-relaxed text-base text-justify">
                        En ABRyL la excelencia técnica no se ejerce con independencia de las personas que están detrás del caso,
                        ni de las consecuencias que ese caso tiene en la sociedad. Esa conexión -entre el rigor del trabajo, el
                        cuidado de quien lo vive y el impacto de lo que se construye- es lo que orienta cada decisión que tomamos.
                        Lo que nos distingue no es solo lo que hacemos, sino cómo y por qué lo hacemos.
                    </p>

                    <motion.div
                        className="space-y-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                    >

                        {items.map((item) => (
                            <motion.div
                                key={item.title}
                                className="pb-6"
                                variants={{
                                    hidden: { opacity: 0, y: 80 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                            ease: [0.22, 1, 0.36, 1],
                                        },
                                    },
                                }}
                            >
                                <div className="inline-block">
                                    <h3 className="text-xl uppercase">
                                        {item.title}
                                    </h3>
                                    <div className="h-[1px] w-full bg-red-900/80" />
                                </div>

                                {/* contenido */}
                                <p className="mt-4 text-muted-foreground leading-relaxed text-base text-justify">
                                    {item.content}
                                </p>
                            </motion.div>
                        ))}

                    </motion.div>

                </div>
            </div>

        </section>
    )
}