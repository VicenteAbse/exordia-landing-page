import { Scale } from "lucide-react"

const footerLinks = {
  servicios: [
    "Derecho administrativo",
    "Derecho de familias",
    "Derecho penal",
    "Derecho civil",
    "Asesoría organizacional y formación",
    "Arbitrajes y resolución alternativa de conflictos",
  ],
  bufete: [
    "¿Quiénes somos?",
    "Nuestro Equipo",
    "Blog",
    "Contacto",
  ],
}

export function Footer() {
  return (
    <footer className="bg-card text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Scale className="size-6" />
              <span className="text-xl font-semibold tracking-wide">
                ABRyL
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Estudio jurídico comprometido con la excelencia legal y la
              satisfaccion de nuestros clientes desde 2026.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Servicios
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.servicios.map((link) => (
                <li key={link}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Estudio jurídico
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.bufete.map((link) => (
                <li key={link}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {"\u00A9"} 2026 ABRyL. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <span className="hover:text-foreground transition-colors cursor-pointer">
              Aviso de Privacidad
            </span>
            <span className="hover:text-foreground transition-colors cursor-pointer">
              Terminos y Condiciones
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
