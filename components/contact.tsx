"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const formStartedAt = useRef(Date.now());

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
    website: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage("")

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formStartedAt: formStartedAt.current,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "No se pudo enviar el mensaje.")
      }

      setSubmitted(true)

      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
        website: ""
      })

      formStartedAt.current = Date.now()

      setTimeout(() => setSubmitted(false), 4000)
    } catch (error) {
      console.error(error)
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Ocurrió un error al enviar el formulario."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl text-foreground md:text-4xl text-balance uppercase">
            Contacto
          </h2>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="flex flex-col gap-8">
            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="text-xl text-foreground mb-6">
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
                      +569 50696309
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
                      contacto@abryl.cl
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
                      Lunes a Jueves: 9:00 - 18:00
                      <br />
                      Viernes: 9:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-border bg-background p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Contáctanos
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
                    <Label htmlFor="nombre" className="text-foreground">
                      Nombre completo
                    </Label>
                    <Input
                      id="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Juan Perez"
                      required
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-foreground">
                      Correo electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan@ejemplo.com"
                      required
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="hidden" aria-hidden="true">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="telefono" className="text-foreground">
                      Teléfono
                    </Label>
                    <Input
                      id="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+569 12345678"
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="asunto" className="text-foreground">
                      Asunto
                    </Label>
                    <Input
                      id="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      placeholder="Consulta sobre..."
                      required
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="mensaje" className="text-foreground">
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Describa brevemente su situacion legal..."
                    rows={5}
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
                  />
                  <p className="mt-1 text-sm">
                    *Si tu consulta se relaciona con alguna situación de violencia o discriminación,
                    no es necesario que nos escribas nada más que el asunto general, sin incluir relato.
                    Por ejemplo: violencia intrafamiliar, delito sexual, maltrato infantil, etc.
                  </p>
                </div>

                {errorMessage && (
                  <p className="text-sm text-red-500">{errorMessage}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium w-full sm:w-auto disabled:opacity-70"
                >
                  <Send className="mr-2 size-4" />
                  {loading ? "Enviando..." : "Enviar"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}