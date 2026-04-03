import Image from "next/image"

export function WhatWeDo() {
    return (
        <section id="quienes-somos" className="bg-background py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-12 text-center font-serif text-4xl md:text-5xl text-foreground">
                    ¿QUÉ HACEMOS?
                </h2>
                <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-7">
                        <p className="text-xl md:text-3xl font-serif uppercase  text-white">
                            Nuestra experiencia
                        </p>
                        <p className="mt-6 leading-relaxed text-muted-foreground text-justify">
                            Desde etapas tempranas de nuestra formación académica, nos familiarizamos con el
                            funcionamiento práctico del sistema judicial. Hemos acompañado a personas y
                            organizaciones en procesos ante tribunales de varias ciudades del país, Cortes de
                            Apelaciones, la Corte Suprema y el Tribunal Constitucional, con énfasis en
                            representación de víctimas de delitos graves y de personas afectadas por criminalización
                            injustificada.

                        </p>
                        <p className="mt-4 leading-relaxed text-muted-foreground text-justify">
                            Gestionamos procedimientos sencillos de forma expedita; y tramitamos juicios de alta
                            complejidad y connotación pública, logrando sentencias con alto valor jurisprudencial
                            que han cumplido con creces las expectativas de quienes representamos. A su vez,
                            nuestra práctica es integral: combina la experiencia en tribunales con investigación
                            académica, docencia, negociación, asesoría a organizaciones de la sociedad civil y
                            capacitaciones especializadas.
                        </p>
                    </div>

                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden lg:col-span-5 mt-20">
                        <Image
                            src="/images/Team-2.jpg"
                            alt={`Fotografia del equipo`}
                            fill
                            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}