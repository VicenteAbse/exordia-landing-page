"use client"

import { useState, useEffect } from "react"
import { Menu, X, Scale } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const navLinks = [
  // { label: "INICIO", href: "#inicio" },
  { label: "¿QUIÉNES SOMOS?", href: "#quienes-somos" },
  { label: "EQUIPO", href: "#equipo" },
  { label: "SERVICIOS", href: "#servicios" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACTO", href: "#contacto" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault()
            handleClick("#inicio")
          }}
          className="flex items-center gap-2 text-foreground"
        >
          <img src="/Logo-Detalle.svg" alt="Logo" className="h-18 w-auto" />
          {/* <span className="font-serif text-lg font-semibold tracking-wide">
            EXORDIA
          </span> */}
        </a>

        {/* Desktop nav links - top right */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegacion principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleClick(link.href)
              }}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${link.href === "#contacto"
                  ? "ml-2 text-white bg-red-900 hover:bg-red-800 px-4"
                  : "text-foreground/70 hover:text-foreground hover:bg-foreground/10"
                }`}
            >
              {link.label}
            </a>
          ))}
          {/* <Button
            onClick={() => handleClick("#contacto")}
            size="sm"
            className="ml-2 bg-foreground text-background hover:bg-foreground/90 font-medium"
          >
            Consulta Gratuita
          </Button> */}
        </nav>

        {/* Mobile hamburger */}
        {mounted ? (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                aria-label="Abrir menu"
                className="rounded-md p-2 text-foreground transition-colors hover:bg-foreground/10"
              >
                {open ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-background border-b border-border pt-16">
              <SheetTitle className="sr-only">Menu de navegacion</SheetTitle>
              <nav className="flex flex-col gap-1 pb-6" aria-label="Navegacion movil">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleClick(link.href)
                    }}
                    className="rounded-md px-4 py-3 text-base text-foreground/70 transition-colors hover:text-foreground hover:bg-foreground/10"
                  >
                    {link.label}
                  </a>
                ))}
                {/* <Button
                  onClick={() => handleClick("#contacto")}
                  className="mt-3 mx-4 bg-foreground text-background hover:bg-foreground/90 font-medium"
                >
                  Consulta Gratuita
                </Button> */}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <button
            aria-label="Abrir menu"
            className="md:hidden rounded-md p-2 text-foreground transition-colors hover:bg-foreground/10"
          >
            <Menu className="size-6" />
          </button>
        )}
      </div>
    </header>
  )
}
