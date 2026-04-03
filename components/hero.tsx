"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function Hero() {
  const [open, setOpen] = useState(false)

  const { scrollY } = useScroll()

  // La imagen se mueve lento
  const imageY = useTransform(scrollY, [0, 500], [0, 120])

  // El texto se mueve más rápido
  const textY = useTransform(scrollY, [0, 500], [0, -150])

  const handleClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <section id="inicio" className="relative min-h-[75vh] flex overflow-hidden">

        {/* Imagen fondo */}
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0"
        >
          <Image
            src="/images/home-1.jpg"
            alt="Oficina del bufete de abogados"
            fill
            className="object-cover object-top  brightness-[0.35] contrast-100"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Contenido */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 max-w-7xl px-6 py-32 md:py-40 ml-auto"
        >
          <div className="max-w-4xl ml-auto translate-y-30">
            <h3 className="font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="block">ESTRATEGIA SÓLIDA</span>
              <span className="block">CONVICCIONES FIRMES</span>
              <span className="block">TRANSPARENCIA SIEMPRE</span>
            </h3>

          </div>
        </motion.div>
      </section>
      <section className="bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-300 font-serif text-lg leading-loose max-w-6xl mx-auto tracking-wide">
            En Exordia, hacemos que la ley funcione para quienes realmente la necesitan. Defendemos el Derecho para el bien, practicamos la
            transparencia como norma y ponemos a las personas en el centro. Así, apostamos por elevar el nivel de la profesión jurídica,
            construyendo resultados sólidos desde Santiago hacia el país.
          </p>
        </div>
      </section>
    </>
  )
}