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
import { motion } from "framer-motion"

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
    image: "/images/1-camila.jpg",
    image_sec: "/images/2-camila.jpg",
    specialties: ["Derecho Civil ", "Derecho Penal", "Arbitraje y resolución alternativa de conflictos"],
    bio: "Abogada de la Universidad de Chile, candidata a magíster en Derecho en la misma casa de estudios. Desde 2021 dirige la gestión y tramitación de causas en materias civiles, penales, de familia y derechos fundamentales, ejecutando un modelo de litigación con enfoque interseccional. Tiene estudios de postítulo en derecho de familia y derechos de la niñez, procedimiento penal chileno y litigación ante el sistema interamericano de derechos humanos. Ha ejercido docencia en la Universidad Adolfo Ibáñez y la Universidad de Santiago. Fue ayudante de cátedra en las Facultades de Economía y Negocios, y de Derecho, ambas de la Universidad de Chile. Su área de trabajo se centra en arbitrajes y resolución alternativa de conflictos, Derecho Civil y Derecho Penal.",
    education: "Universidad de Chile - Abogada",
    email: "camila.ramirez@abryl.cl",
    phone: "+569 12345678",
    languages: ["Español", "Inglés"]
  },
  {
    name: "María Barbosa Barceló",
    role: "Socio fundadora",
    image: "/images/1-maria.jpg",
    image_sec: "/images/2-maria.jpg",
    specialties: ["Derecho de Familias", "Derecho Penal"],
    bio: "Abogada de la Universidad de Chile. Tiene un máster en Derecho Penal y Ciencias Criminales por la Universidad de Sevilla, con tesis en materia de consentimiento sexual. Está especializada en violencia sexual, abuso infantil y trauma complejo, con estudios en materias de familia, derecho penal y razonamiento probatorio en el Instituto de Estudios Judiciales y Universidad de Girona, además de formación recibida por instituciones como Fundación para la Confianza y ECPAT. Fue ayudante de la Clínica Jurídica de Familia de la Universidad de Chile y ha sido relatora en capacitaciones para funcionarios públicos y asesora de organizaciones de la sociedad civil en temas de género. Su área de trabajo se centra en Derecho de Familia y Derecho Penal.",
    education: "Universidad de Chile - Abogada",
    email: "maria.barbosa@abryl.cl",
    phone: "+569 1234678",
    languages: ["Español", "Inglés"]
  },
  {
    name: "Lorenzo Lemungürü Kiñenawel",
    role: "Socio fundador",
    image: "/images/1-lorenzo.jpg",
    image_sec: "/images/2-lorenzo.jpg",
    specialties: ["Derecho Administrativo", "Derecho Civil", "Derecho Penal"],
    bio: "Egresado de Ciencias Jurídicas y Sociales de la Universidad de Chile. Es investigador académico y ayudante de cátedra en Derecho Indígena, Derecho Procesal y Derecho Penal de la misma casa de estudios. Ha ejercido como consultor y asistente legal de organizaciones de la sociedad civil e integra equipos que representan a ciudadanos ante la Comisión Interamericana de Derechos Humanos. Su área de trabajo se centra en Derecho Administrativo, Derecho Civil y Derecho Penal.",
    education: "Universidad de Chile - Egresado de Derecho",
    email: "lorenzo.lemunguru@abryl.cl",
    phone: "+569 12345678",
    languages: ["Español", "Inglés", "Mapuzugun", "Francés", "Alemán"]
  },
]

export function Team() {
  const [selected, setSelected] = useState<Lawyer | null>(null)
  const [open, setOpen] = useState(false)

  return (
    <section id="equipo" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl text-foreground md:text-4xl text-balance"
          >
            SOBRE EL EQUIPO
          </motion.h2>
        </div>

        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {lawyers.map((lawyer) => (
            <motion.button
              key={lawyer.name}
              onClick={() => { setSelected(lawyer); setOpen(true) }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
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
                <h3 className="uppercase text-base text-foreground sm:text-lg truncate">
                  {lawyer.name}
                </h3>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <Dialog open={open} onOpenChange={(value) => {
        setOpen(value)
        if (!value) {
          setTimeout(() => {
            setSelected(null)
          }, 300)
        }
      }}>
        <DialogContent className="w-[95vw] lg:w-[85vw] !max-w-[1000px] max-h-[90vh] overflow-y-auto bg-card">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="uppercase text-2xl text-foreground">
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
                    <h4 className="text-sm  uppercase tracking-wider text-muted-foreground mb-2">
                      Formacion Academica
                    </h4>
                    <p className="text-sm leading-relaxed text-foreground">
                      {selected.education}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
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
                    <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
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
