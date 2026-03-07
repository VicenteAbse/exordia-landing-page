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
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Imagen fondo */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0"
      >
        <Image
          src="/images/city-1.jpg"
          alt="Oficina del bufete de abogados"
          fill
          className="object-cover grayscale brightness-[0.35] contrast-150"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Contenido */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-40"
      >
        <div className="max-w-4xl">
          <h3 className="font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-5xl">
            <span className="block">ESTRATEGIA SÓLIDA</span>
            <span className="block">CONVICCIONES FIRMES</span>
            <span className="block">TRANSPARENCIA SIEMPRE</span>
          </h3>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="cursor-pointer bg-foreground text-background hover:bg-foreground/90 font-medium text-base px-8"
              asChild
            >
              <a
                onClick={(e) => {
                  e.preventDefault()
                  handleClick("#contacto")
                }}
              >
                Agendar Consulta
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer border-foreground/30 text-foreground bg-transparent hover:bg-foreground/10 font-medium text-base px-8"
              asChild
            >
              <a
                onClick={(e) => {
                  e.preventDefault()
                  handleClick("#servicios")
                }}
              >
                Nuestros Servicios
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}