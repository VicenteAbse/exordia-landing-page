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
import { Mail, Phone } from "lucide-react"

interface Lawyer {
  name: string
  role: string
  image: string
  image_sec: string
  specialties: string[]
  bio: string
  education: string
  email: string
  phone: string
  languages: string[]
}

const lawyers: Lawyer[] = [
  {
    name: "Camila Ramírez Rebolledo",
    role: "Socia fundadora",
    image: "/images/team-camila-1.jpg",
    image_sec: "/images/team-camila-2.jpg",
    specialties: ["Derecho Civil ", "Derecho Penal"],
    bio: "Abogada de la Universidad de Chile, candidata a magíster en Derecho en la misma casa de estudios. Desde 2021 dirige la gestión y tramitación de causas en materias civiles, penales, de familia y derechos fundamentales, ejecutando un modelo de litigación con enfoque interseccional. Tiene estudios de postítulo en derechos de la niñez, procedimiento penal y litigación ante el sistema interamericano de derechos humanos. Ha ejercido docencia en la Universidad Adolfo Ibáñez y la Universidad de Santiago. Fue ayudante de cátedra en las Facultades de Economía y Negocios, y de Derecho, ambas de la Universidad de Chile. Su área de trabajo se centra en arbitrajes y resolución alternativa de conflictos, Derecho Civil y Derecho Penal.",
    education: "Universidad de Chile - Abogada",
    email: "camilaramirezrebolledo@gmail.com",
    phone: "+569 12345678",
    languages: ["Español"]
  },
  {
    name: "María Barbosa Barceló",
    role: "Socio fundadora",
    image: "/images/team-maria-1.jpg",
    image_sec: "/images/team-maria-2.jpg",
    specialties: ["Derecho de Familia", "Derecho Penal"],
    bio: "Abogada de la Universidad de Chile. Tiene un máster en Derecho Penal y Ciencias Criminales por la Universidad de Sevilla, con tesis en materia de consentimiento sexual. Está especializada en violencia sexual, abuso infantil y trauma complejo, con estudios en materias de familia, derecho penal y razonamiento probatorio en el Instituto de Estudios Judiciales y Universidad de Girona, además de formación recibida por instituciones como Fundación para la Confianza y ECPAT. Fue ayudante de la Clínica Jurídica de Familia de la Universidad de Chile y ha sido relatora en capacitaciones para funcionarios públicos y asesora de organizaciones de la sociedad civil en temas de género. Su área de trabajo se centra en Derecho de Familia y Derecho Penal.",
    education: "Universidad de Chile - Abogada",
    email: "mariab@mail.cl",
    phone: "+569 1234678",
    languages: ["Español", "Inglés"]
  },
  {
    name: "Lorenzo Lemungürü Kiñenawel",
    role: "Socio fundador",
    image: "/images/team-lorenzo-1.jpg",
    image_sec: "/images/team-lorenzo-2.jpg",
    specialties: ["Derecho Administrativo", "Derecho Civil", "Derecho Penal"],
    bio: "Egresado de Ciencias Jurídicas y Sociales de la Universidad de Chile. Es investigador académico y ayudante de cátedra en Derecho Indígena, Derecho Procesal y Derecho Penal de la misma casa de estudios. Ha ejercido como consultor y asistente legal de organizaciones de la sociedad civil e integra equipos que representan a ciudadanos ante la Comisión Interamericana de Derechos Humanos. Su área de trabajo se centra en Derecho Administrativo, Derecho Civil y Derecho Penal.",
    education: "Universidad de Chile - Egresado de Derecho",
    email: "lorenzo@mail.com",
    phone: "+569 12345678",
    languages: ["Español", "Inglés", "Mapuzugun", "Francés", "Alemán"]
  },
]

export function Team() {
  const [selected, setSelected] = useState<Lawyer | null>(null)

  return (
    <section id="equipo" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
            SOBRE EL EQUIPO
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lawyers.map((lawyer) => (
            <button
              key={lawyer.name}
              onClick={() => setSelected(lawyer)}
              className="uppercase group cursor-pointer text-left rounded-lg border border-border bg-card overflow-hidden transition-all hover:border-foreground/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Ver perfil de ${lawyer.name}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={lawyer.image}
                  alt={`Fotografia de ${lawyer.name}`}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="uppercase font-serif text-base font-semibold text-foreground sm:text-lg truncate">
                  {lawyer.name}
                </h3>
                {/* <div className="mt-3 flex flex-wrap gap-2">
                  {lawyer.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div> */}
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="w-[95vw] lg:w-[85vw] !max-w-[1000px] max-h-[90vh] overflow-y-auto bg-card">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="uppercase font-serif text-2xl text-foreground">
                  {selected.name}
                </DialogTitle>
              </DialogHeader>

              <div className="grid gap-6 mt-2 sm:grid-cols-[200px_1fr]">
                <div className="relative aspect-[3/4] w-full max-w-[220px] mx-auto sm:mx-0 overflow-hidden rounded-lg">
                  <Image
                    src={selected.image_sec}
                    alt={`Fotografia de ${selected.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm leading-relaxed text-foreground text-justify">
                      {selected.bio}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Formacion Academica
                    </h4>
                    <p className="text-sm leading-relaxed text-foreground">
                      {selected.education}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Especialidades
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.specialties.map((s) => (
                        <span
                          key={s}
                          className="rounded-sm bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Idiomas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.languages.map((s) => (
                        <span
                          key={s}
                          className="rounded-sm bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto flex flex-col gap-2 text-sm">
                    <a
                      href={`mailto:${selected.email}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="size-4" />
                      {selected.email}
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
