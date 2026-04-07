"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: "María González",
    role: "Cliente",
    image: "/images/lawyer-4.jpg",
    quote:
      "Desde el primer momento sentí que mi caso era tomado con seriedad y respeto. El equipo me explicó cada etapa del proceso con claridad y siempre me sentí acompañada.",
  },
  {
    name: "Carlos Fernández",
    role: "Cliente",
    image: "/images/lawyer-3.jpg",
    quote:
      "Profesionales rigurosos, comprometidos y profundamente humanos. Su forma de trabajar transmite confianza y tranquilidad incluso en momentos complejos.",
  },
  {
    name: "Ana Rodríguez",
    role: "Cliente",
    image: "/images/lawyer-2.jpg",
    quote:
      "Agradezco la dedicación y la transparencia con la que abordaron mi caso. Se nota el trabajo en equipo y la seriedad con la que estudian cada detalle.",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const testimonial = testimonials[index]

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonios" className="bg-background py-28">
      <div className="mx-auto max-w-5xl px-6">

        {/* titulo */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl">
            TESTIMONIOS
          </h2>
        </div>

        {/* slider */}
        <div className="relative rounded-xl border bg-card shadow-lg p-10">

          {/* contenedor con altura fija */}
          <div className="relative h-[340px] overflow-hidden">

            <AnimatePresence mode="wait" custom={direction}>

              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col items-center text-center"
              >

                {/* foto */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* estrellas */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>

                {/* texto con scroll si es largo */}
                <div className="max-w-2xl overflow-y-auto pr-2">
                  <p className="text-lg leading-relaxed text-foreground">
                    “{testimonial.quote}”
                  </p>
                </div>

                {/* nombre */}
                <div className="mt-6">
                  <p className="font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>

              </motion.div>

            </AnimatePresence>

          </div>

          {/* botones */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-muted transition"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-muted transition"
          >
            <ChevronRight size={22} />
          </button>

        </div>

        {/* indicadores */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-foreground" : "bg-muted"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}