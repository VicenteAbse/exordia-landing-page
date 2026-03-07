import Image from "next/image"

export function WhatWeDo() {
    return (
        <section id="quienes-somos" className="bg-background py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="mb-3 font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
                            ¿QUÉ HACEMOS?
                        </h2>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            Nuestra experiencia
                        </p>
                        <p className="mt-6 leading-relaxed text-muted-foreground">
                            Desde una etapa temprana de nuestra formación académica, nos familiarizamos con el sistema
                            legal desde su funcionamiento práctico. Hemos asesorado y acompañado a muchas personas en diversos
                            procedimientos penales, civiles y de familia, ante tribunales de varias ciudades del país, y también
                            ante Cortes de Apelaciones, Corte Suprema y Tribunal Constitucional, con especial énfasis en representación
                            de víctimas, tanto de delitos graves como de criminalización injustificada o abusiva.
                            Gestionamos procedimientos sencillos de forma expedita y eficiente; a la vez que tramitamos -y ganamos-
                            juicios de alta complejidad y de connotación pública, logrando sentencias que, por un lado, tienen un alto valor
                            jurisprudencial y, por otro, han cumplido con creces las expectativas de quienes representamos.

                        </p>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            De todas formas, nuestra experiencia no se ha limitado a tramitar causas ante tribunales. Nuestro ejercicio
                            profesional se ha alimentado de otros trabajos como la formación de estudiantes, la negociación para evitar
                            el litigio, la asesoría y colaboración con diversas organizaciones de la sociedad civil, capacitaciones y
                            actividades docentes, así como la investigación académica.
                            Por lo tanto, la forma en la que ejercemos la profesión es integral. Se basa en nuestra experiencia en tribunales,
                            se sujeta a altos estándares técnicos y responde a las necesidades de las personas y organizaciones que representamos.
                        </p>
                    </div>

                    <div className="relative aspect-[4/5] overflow-hidden">
                        <Image
                            src="/images/lawyer-1.jpg"
                            alt={`Fotografia del equipo`}
                            fill
                            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}