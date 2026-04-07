import Image from "next/image"


export function About() {
  return (
    <section id="quienes-somos" className="w-full">

      {/* Hero con imagen de fondo */}
      <div className="relative h-[300px] w-full flex items-start justify-center pt-50 overflow-hidden">

        <Image
          src="/images/city-3.jpg"
          alt="Justice"
          fill
          className="object-cover grayscale brightness-[0.45] contrast-125"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* titulo */}
        <h2 className="relative z-10 text-4xl md:text-5xl text-white tracking-[0.25em] text-center px-6">
          ¿QUIÉNES SOMOS?
        </h2>

      </div>
      <div className="mx-auto max-w-7xl px-6 pt-10">
        <div className="grid gap-16 lg:items-center">
          <div className="mx-auto">
            <h2 className="mb-3 text-3xl font-semibold text-foreground md:text-4xl text-balance">
              SOBRE ABRyL
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground mx-auto text-justify">
              Somos un equipo legal formado en la Escuela de Derecho de la Universidad de Chile,
              unido por el compromiso con una práctica legal rigurosa, responsable, transparente
              y empática. Vemos en el Derecho un potencial transformador, sin perder de vista las
              deficiencias del sistema de justicia ni lo abrumador que puede ser un proceso judicial
              para quien lo vive.

              Hacemos del conflicto jurídico un asunto abordable. Nos proponemos desenmarañar lo que parece
              complicado, traducir al lenguaje común lo que suele reservarse para los expertos, y
              acompañar a cada persona de acuerdo a sus necesidades e intereses concretos.


            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground text-justify">
              Entendemos la representación legal de las personas ante tribunales - el litigio- 
              como un trabajo de alta especialización que debe ser diseñado estratégicamente caso a caso.

              Ejercemos nuestro rol en clave social. Al elevar los estándares reales del 
              ejercicio del Derecho contribuimos al interés público, promoviendo soluciones 
              eficaces que corrijan las inequidades del sistema legal.

            </p>
          </div>

        </div>
      </div>

    </section>
  )
}
