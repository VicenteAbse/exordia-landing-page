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
  specialties: string[]
  bio: string
  education: string
  email: string
  phone: string
  languages: string[]
}

const lawyers: Lawyer[] = [
  {
    name: "María Barbosa Barceló",
    role: "Socio fundadora",
    image: "/images/lawyer-4.jpg",
    specialties: ["Derecho de Familia", "Derecho Penal"],
    bio: "María comenzó su práctica en materias civiles y de familia, para luego encantarse con el derecho penal. Cursó un máster en Derecho Penal y Ciencias Criminales en la Universidad de Sevilla, España, haciendo su tesis en materia de consentimiento sexual. Ha cursado también diplomados en Derecho de Familia (IEJ), Abuso Sexual Infantil (Fundación para la Confianza) y Razonamiento Probatorio (Universidad de Girona). También se ha capacitado en acoso laboral y sexual (Poder Judicial), en trauma complejo (IEJ) y en explotación infantil (ECPAT). Durante varios años fue ayudante de la Clínica Jurídica de Familia de la Universidad de Chile, ha sido relatora de diversos cursos en las materias de su especialidad para funcionarios públicos y asesora de organizaciones de la sociedad civil, especialmente en temas de género.",
    education: "Universidad de Chile - Abogada",
    email: "mariab@mail.cl",
    phone: "+569 1234678",
    languages: ["Español", "Inglés"]
  },
  {
    name: "Camila Ramírez Rebolledo",
    role: "Socia fundadora",
    image: "/images/lawyer-2.jpg",
    specialties: ["Derecho Civil ", "Derecho Penal"],
    bio: "Desde 2021 ha ejercido la dirección, coordinación y planificación de la gestión y tramitación de causas judiciales en materias civiles, penales, de familia y de derechos fundamentales, ejecutando un modelo de litigación con enfoque interseccional. Egresó del Programa de Magíster en Derecho, que imparte la Facultad de Derecho de la Universidad de Chile. Ha realizado estudios de postítulo en materias relativas a derechos de la niñez y familia, así como procedimiento penal chileno, en la Universidad de Chile. También ha participado en cursos sobre aplicación del Protocolo de Minnesota, litigación ante el sistema interamericano de derechos humanos, “Legal Skills in the United States Legal System”, entre otros. Ha realizado labores docentes en la Universidad Adolfo Ibáñez y la Universidad de Santiago. Se ha desempeñado como ayudante de cátedra en las Facultades de Economía y Negocios, y de Derecho, ambas de la Universidad de Chile.Su área de trabajo se centra en arbitrajes y resolución alternativa de conflictos, Derecho Civil y Derecho Penal.",
    education: "Universidad de Chile - Abogada",
    email: "camilaramirezrebolledo@gmail.com",
    phone: "+569 12345678",
    languages: ["Español"]
  },
  {
    name: "Lorenzo Lemungürü Kiñenawel",
    role: "Socio fundador",
    image: "/images/lawyer-3.jpg",
    specialties: ["Derecho Administrativo", "Derecho Civil", "Derecho Penal"],
    bio: "Se ha desempeñado como investigador académico en Derecho Penal y Derecho Indígena, así como ayudante de cátedra de Derecho Indígena, Derecho Procesal y Derecho Penal en la Escuela de Derecho de la Universidad de Chile. Ha ejercido como asistente legal y consultor en organizaciones de la sociedad civil. Integra equipos legales que representan a ciudadanos ante la Comisión Interamericana de Derechos Humanos.",
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
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Nuestro Equipo
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl text-balance">
            ABOGADOS DE CONFIANZA A SU SERVICIO
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Nuestro equipo esta conformado por profesionales altamente
            calificados y comprometidos con la excelencia legal.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lawyers.map((lawyer) => (
            <button
              key={lawyer.name}
              onClick={() => setSelected(lawyer)}
              className="group cursor-pointer text-left rounded-lg border border-border bg-card overflow-hidden transition-all hover:border-foreground/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                <h3 className="font-serif text-base font-semibold text-foreground sm:text-lg truncate">
                  {lawyer.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground font-medium truncate">{lawyer.role}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {lawyer.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
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
                <DialogTitle className="font-serif text-2xl text-foreground">
                  {selected.name}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground font-medium">
                  {selected.role}
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-6 mt-2 sm:grid-cols-[200px_1fr]">
                <div className="relative aspect-[3/4] w-full max-w-[220px] mx-auto sm:mx-0 overflow-hidden rounded-lg">
                  <Image
                    src={selected.image}
                    alt={`Fotografia de ${selected.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Biografia
                    </h4>
                    <p className="text-sm leading-relaxed text-foreground">
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
                    <a
                      href={`tel:${selected.phone}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Phone className="size-4" />
                      {selected.phone}
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
