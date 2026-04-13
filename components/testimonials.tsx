"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef } from "react";

interface Testimonial {
  name: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: "Andrés Lannefranque Mettler",
    quote: "Quiero expresar mi más sincero agradecimiento al equipo de abogados por su impecable trabajo en un proceso particularmente complejo. No solo lograron una defensa exitosa frente a la demanda de nulidad de mandato y de tres acciones temerarias de violencia intrafamiliar, sino que además obtuvieron la nulidad administrativa de un certificado de discapacidad fraudulento, con una solidez jurídica admirable. Más allá de los resultados, destaco profundamente su calidad humana, la cercanía en el trato y la tranquilidad que supieron transmitir en todo momento. Su profesionalismo, compromiso y claridad hicieron una diferencia real. Me sentí acompañado y respaldado en cada etapa del proceso. Sin duda, un equipo en quien confiar plenamente."

  },
  {
    name: "Génesis Escarlet Aguilar Ulloa",
    quote:
      "Les escribo con el corazón lleno de gratitud y un alivio que no puedo terminar de expresar con palabras. Gracias a su incansable trabajo, su empatía y su profesionalismo, finalmente siento que puedo cerrar un ciclo de dolor que me acompañó desde los 4 añitos hasta los 15.​Saber que la persona que me causó daño físico y psicológico está tras las rejas me devuelve la paz y la fe en la justicia que durante tanto tiempo sentí perdida. Me sentí completamente invisible hasta que los conocí a ustedes. No solo ganaron un caso; me devolvieron la dignidad y la posibilidad de mirar hacia adelante con libertad. Gracias por creer en mí, por protegerme durante este proceso tan difícil y por ser mi voz cuando más lo necesité. Estaré eternamente agradecida con ustedes, con profunda admiración y gratitud."
  },
  {
    name: "Mauricio Riera Vergara",
    quote: "A Camila y Lorenzo encomendé no sólo un litigio, sino también la resolución de un conflicto que marcó mi historia de vida. El excelente razonamiento jurídico, la suma diligencia y la calidad humana de ambos amenizó el tormento que significa ser víctima en una causa penal y demandante en una causa contra el Fisco de Chile. El excelente desempeño profesional de esta dupla se materializó en el mejor resultado posible: se condenó al acusado en materia penal y el Fisco tuvo que pagar una indemnización de perjuicios en materia civil.Esta último, una hazaña por la dificultad que significa litigar contra el Consejo de defensa del Estado.Ellos solucionaron un problema legal técnicamente complejo, y aún más importante: lograron que se hiciera justicia, lo que hizo sanar mi corazón."
  },
  {
    name: "Identidad reservada, causa 3206-2023 del TOP Melipilla",
    quote: "Cuando se trata de juicio penal lo único que uno quiere es alguien que tenga los conocimientos, compasión y personalidad fuerte para atender tu caso. La abogada María Francisca Barbosa cumple todo eso y mucho más. Existieron varias situaciones horrorosas utilizadas para invalidar a la víctima y a la madre, no solamente de testigos falsos sino de argucias legales tan solo para dañar y plantar la idea de la manipulación de la madre hacia la hija para lograr exigencias de dinero y desviar la investigación. En el caso de mi hija, no sólo se caminó por el pasar doloroso del trauma, sino también con testigos con duras ofensas a mi hija y a mí con denuncia de extorsión. Es aquí donde la abogada Barbosa destaca por sus facultades, conocimientos y gestión en destruir todo lo falso y trabajar pulcramente en cada situación, ganando el juicio."
  },
  {
    name: "Ignacio Nequeçaur Fierro",
    quote: "Camila y Lorenzo son una interesante dupla profesional; ella con su maestría en civil y Lorenzo con su manejo de la tramitación. Ambos me ayudaron profesionalmente a restablecer mi apellido y honrar civilmente a mis ancestros, además de corregir una castellanización forzada del apellido. En definitiva, una disciplinada y formada dupla profesional que recomiendo."
  },
  {
    name: "Marcia Urdiles, madre de Silvana Garrido",
    quote: "Escribo para decir que gracias a la representación y asesoría de María Francisca tuve un pilar fundamental para cambiar el apellido de mi nieta y sostener el proceso del femicidio de su madre. Eres una gran profesional, con ética y comprometida. Por sobre todo, de gran humanidad. Gracias por asesorar todos los procesos judiciales que tuvimos que atravesar. Estoy muy agradecida porque gracias a ti mi nieta y yo hoy, y hasta por el resto de nuestras vidas, tenemos esa tranquilidad de vivir sin esa sombra. Jamás nos expusiste y siempre nos cuidaste. Eres muy comprometida con tus representadas. Necesitamos más abogadas como tú."
  },
  {
    name: "David Huerta O'Kuinghttons",
    quote: "Camila y Lorenzo fueron los profesionales que nos acompañaron en nuestro proceso de divorcio con mi ex esposa. Destaco su responsabilidad, flexibilidad y respuestas rápidas frente a las consultas que pueden surgir de un proceso de estas características. La comunicación con ellos fue siempre muy fluida y permitió cerrar de buena manera esta instancia. Los recomiendo totalmente."
  },
  {
    name: "Macarena Mendez, madre de Lysbeth Ureta",
    quote: "Un gran agradecimiento a la abogada María Francisca Barbosa por el apoyo en nuestra organización Hermanas en el Dolor. Ella nos ha entregado asesoría y acompañamiento como madres que, con el dolor de la pérdida de sus hijas, han tenido que luchar por entender el sistema penal o pedir la custodia de niñas, niños y adolescentes que quedan muchas veces en manos de los agresores y femicidas de sus madres y/o familia de estos agresores."
  }
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const pauseUntilRef = useRef(0)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isAutoScrollingRef = useRef(false)

  const pauseAutoScroll = () => {
    if (isAutoScrollingRef.current) return

    pauseUntilRef.current = Date.now() + 10000

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
    }

    resumeTimeoutRef.current = setTimeout(() => {
      pauseUntilRef.current = 0
    }, 3000)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let interval: ReturnType<typeof setInterval> | null = null
    let startTimeout: ReturnType<typeof setTimeout> | null = null
    let endTimeout: ReturnType<typeof setTimeout> | null = null
    let stopped = false

    el.scrollTop = 0

    startTimeout = setTimeout(() => {
      if (!scrollRef.current || stopped) return

      const currentEl = scrollRef.current
      const maxScroll = currentEl.scrollHeight - currentEl.clientHeight

      // Si no hay overflow, espera un poco y pasa al siguiente
      if (maxScroll <= 0) {
        endTimeout = setTimeout(() => {
          if (!stopped) {
            setDirection(1)
            setIndex((prev) => (prev + 1) % testimonials.length)
          }
        }, 5000)
        return
      }

      interval = setInterval(() => {
        if (!scrollRef.current || stopped) return

        // pausa si el usuario interactuó
        if (Date.now() < pauseUntilRef.current) return

        const elNow = scrollRef.current
        const limit = elNow.scrollHeight - elNow.clientHeight

        if (elNow.scrollTop >= limit) {
          if (interval) {
            clearInterval(interval)
            interval = null
          }

          endTimeout = setTimeout(() => {
            if (!stopped) {
              setDirection(1)
              setIndex((prev) => (prev + 1) % testimonials.length)
            }
          }, 5000)

          return
        }

        // marcamos que el scroll es automático
        isAutoScrollingRef.current = true
        elNow.scrollTop += 1

        setTimeout(() => {
          isAutoScrollingRef.current = false
        }, 0)

      }, 45)
    }, 400)

    return () => {
      stopped = true
      if (startTimeout) clearTimeout(startTimeout)
      if (endTimeout) clearTimeout(endTimeout)
      if (interval) clearInterval(interval)
    }
  }, [index])

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
    <section id="testimonios" className="bg-card py-28">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-16 text-center">
          <h2
            className="text-3xl md:text-4xl"
          >
            TESTIMONIOS
          </h2>
        </div>

        <div className="relative rounded-xl border border-red-900/50 bg-[#1E1D1D]/40 p-6 shadow-lg md:p-10">
          <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden md:min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="flex w-full flex-col items-center text-center"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>

                <div className="max-w-2xl">
                  <div
                    ref={scrollRef}
                    onWheel={pauseAutoScroll}
                    onTouchStart={pauseAutoScroll}
                    onPointerDown={pauseAutoScroll}
                    className="max-h-[180px] max-w-2xl overflow-y-auto custom-scroll pr-2"
                  >
                    <p className="text-sm leading-relaxed text-foreground md:text-base">
                      “{testimonial.quote}”
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="font-semibold">
                    {testimonial.name}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 transition hover:bg-muted md:left-4"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 transition hover:bg-muted md:right-4"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1)
                setIndex(i)
              }}
              className={`h-2 w-2 rounded-full transition ${i === index ? "bg-foreground" : "bg-muted"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}