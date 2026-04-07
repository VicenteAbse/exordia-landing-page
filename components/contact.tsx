"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contacto" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Contacto
          </p>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl text-balance">
            Estamos aqui para ayudarle
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Agende una consulta gratuita y permita que nuestros expertos
            analicen su caso sin compromiso alguno.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="flex flex-col gap-8">
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Información de contacto
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Dirección</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Miguel Claro 195, Oficina 407
                      <br />
                      Providencia, Región Metropolitana de Santiago, Chile
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Teléfono</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      +569 12345678
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Correo</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      contacto@abryl.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Horario</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Lunes a Viernes: 9:00 - 18:00
                      <br />
                      Sabado: 9:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Envie su consulta
            </h3>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="size-12 text-foreground mb-4" />
                <h4 className="text-xl font-semibold text-foreground">
                  Mensaje enviado
                </h4>
                <p className="mt-2 text-muted-foreground">
                  Nos pondremos en contacto con usted a la brevedad posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="nombre" className="text-foreground">Nombre completo</Label>
                    <Input
                      id="nombre"
                      placeholder="Juan Perez"
                      required
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-foreground">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="juan@ejemplo.com"
                      required
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="telefono" className="text-foreground">Teléfono</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      placeholder="+569 12345678"
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="asunto" className="text-foreground">Asunto</Label>
                    <Input
                      id="asunto"
                      placeholder="Consulta sobre..."
                      required
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="mensaje" className="text-foreground">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    placeholder="Describa brevemente su situacion legal..."
                    rows={5}
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium w-full sm:w-auto"
                >
                  <Send className="mr-2 size-4" />
                  Enviar Consulta
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
