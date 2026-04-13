"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function WhatWeDo() {
    return (
        <section id="que-hacemos" className="bg-card py-32">
            <div className="mx-auto max-w-7xl px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-10 md:mb-0 text-center text-4xl md:text-5xl text-foreground">
                    ¿QUÉ HACEMOS?
                </motion.h2>
                <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-7">
                        <motion.p initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }} className="text-xl md:text-3xl uppercase  text-white">
                            Nuestra experiencia
                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }} className="mt-6 leading-relaxed text-muted-foreground text-justify">
                            Desde etapas tempranas de nuestra formación académica, nos familiarizamos con el
                            funcionamiento práctico del sistema judicial. Hemos acompañado a personas y
                            organizaciones en procesos ante tribunales de varias ciudades del país, Cortes de
                            Apelaciones, la Corte Suprema y el Tribunal Constitucional, con énfasis en
                            representación de víctimas de delitos graves y de personas afectadas por criminalización
                            injustificada.

                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }} className="mt-4 leading-relaxed text-muted-foreground text-justify">
                            Gestionamos procedimientos sencillos de forma expedita; y tramitamos juicios de alta
                            complejidad y connotación pública, logrando sentencias con alto valor jurisprudencial
                            que han cumplido con creces las expectativas de quienes representamos. A su vez,
                            nuestra práctica es integral: combina la experiencia en tribunales con investigación
                            académica, docencia, negociación, asesoría a organizaciones de la sociedad civil y
                            capacitaciones especializadas.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden lg:col-span-5 mt-20"
                    >
                        <Image
                            src="/images/1-grupal.jpg"
                            alt={`Fotografia del equipo`}
                            fill
                            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}