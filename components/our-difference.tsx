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
    return (
        <section id="difference" className="w-full bg-card">

            <div className="relative h-[480px] w-full flex items-start justify-center pt-90 overflow-hidden bg-card">

                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="absolute inset-0">

                    <Image
                        src="/images/our-difference-bg.jpg"
                        alt="Justice"
                        fill
                        className="object-cover grayscale brightness-[0.45] contrast-125"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-black/40" />

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }} 
                    className="relative z-10 text-4xl md:text-5xl text-white tracking-[0.25em] text-center px-6">
                    LO DIFERENTE
                </motion.h2>

            </div>

            {/* contenido */}
            <div className="bg-card py-24">
                <div className="mx-auto max-w-7xl px-6">

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
                                    <h3 className="text-xl">
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