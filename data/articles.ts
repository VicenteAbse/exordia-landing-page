export interface Article {
    slug: string
    title: string
    excerpt: string
    body: string[]
    author: string
    date: string
    category: string
    image: string
    readTime: string
}

export const articles: Article[] = [
    {
        slug: "reformas-derecho-laboral",
        title: "Nuevas reformas en derecho laboral: lo que debe saber",
        excerpt:
            "Analizamos las recientes modificaciones a la ley laboral y como impactan a empleadores y trabajadores en el panorama actual.",
        body: [
            "Las recientes reformas al marco legal laboral representan un cambio significativo en la relacion entre empleadores y trabajadores. Estas modificaciones, aprobadas en el ultimo periodo legislativo, buscan modernizar las condiciones de trabajo y fortalecer los derechos de los empleados en un entorno laboral cada vez mas digitalizado.",
            "Entre los cambios mas destacados se encuentra la regulacion del teletrabajo, que establece obligaciones claras para los empleadores en cuanto a la provision de herramientas, el respeto a la desconexion digital y la compensacion de gastos derivados del trabajo remoto. Esta normativa responde a las nuevas realidades laborales que se consolidaron en los ultimos anos.",
            "Otro aspecto fundamental de la reforma es el fortalecimiento de los mecanismos de proteccion contra el acoso laboral. Se han ampliado las definiciones de conductas inapropiadas y se han establecido procedimientos mas agiles para la investigacion y sancion de estas practicas, incluyendo la creacion de comites de vigilancia obligatorios en empresas con mas de 50 empleados.",
            "Para los empleadores, estas reformas implican la necesidad de revisar y actualizar sus politicas internas, contratos laborales y reglamentos de trabajo. Recomendamos realizar una auditoria integral de las practicas laborales actuales para identificar areas que requieran ajustes y evitar posibles contingencias legales.",
            "En nuestro bufete, contamos con un equipo especializado que puede guiarlo en la implementacion de estas nuevas disposiciones, asegurando el cumplimiento normativo y la proteccion tanto de la empresa como de sus colaboradores.",
        ],
        author: "Lic. Ricardo Velasco",
        date: "15 de febrero, 2026",
        category: "Derecho Laboral",
        image: "/images/blog-1.jpg",
        readTime: "8 min de lectura",
    },
    {
        slug: "custodia-compartida",
        title: "Guia completa sobre la custodia compartida",
        excerpt:
            "Todo lo que necesita saber sobre los derechos y obligaciones en casos de custodia compartida tras un divorcio.",
        body: [
            "La custodia compartida se ha convertido en una de las modalidades mas solicitadas en los procesos de divorcio, ya que busca garantizar el bienestar de los menores al mantener una relacion equilibrada con ambos progenitores. Sin embargo, su implementacion requiere un entendimiento claro de los derechos y obligaciones que conlleva.",
            "En terminos legales, la custodia compartida implica que ambos padres participan activamente en la crianza y toma de decisiones importantes sobre la vida de sus hijos, incluyendo educacion, salud y actividades extracurriculares. Esto no necesariamente significa una division exacta del tiempo, sino una distribucion equitativa y funcional adaptada a las circunstancias de cada familia.",
            "Para que un juez otorgue la custodia compartida, se evaluan diversos factores: la capacidad de ambos padres para atender las necesidades del menor, la proximidad geografica de los domicilios, la estabilidad emocional y economica de cada progenitor, y fundamentalmente, la opinion del menor cuando tiene edad suficiente para expresarla.",
            "Es importante destacar que la custodia compartida no elimina la obligacion de pension alimenticia. El calculo se ajusta considerando los ingresos de ambos padres y el tiempo que el menor pasa con cada uno, pero la obligacion de contribuir al sostenimiento de los hijos permanece vigente.",
            "Si esta considerando solicitar la custodia compartida o necesita modificar un regimen existente, nuestro equipo de derecho familiar puede asesorarle en cada etapa del proceso, siempre priorizando el interes superior del menor.",
        ],
        author: "Lic. Maria Elena Torres",
        date: "8 de febrero, 2026",
        category: "Derecho Familiar",
        image: "/images/blog-2.jpg",
        readTime: "6 min de lectura",
    },
    {
        slug: "registro-propiedad-intelectual",
        title: "Proteja su marca: registro de propiedad intelectual",
        excerpt:
            "Descubra los pasos esenciales para registrar y proteger su marca en el mercado nacional e internacional.",
        body: [
            "En un mercado cada vez mas competitivo y globalizado, la proteccion de la propiedad intelectual se ha convertido en un pilar fundamental para cualquier empresa. Una marca registrada no solo identifica sus productos y servicios, sino que representa el valor intangible mas importante de su negocio.",
            "El proceso de registro de marca comienza con una busqueda exhaustiva de anterioridades para verificar que la marca propuesta no entre en conflicto con registros existentes. Este paso, aunque puede parecer sencillo, es critico para evitar rechazos y posibles demandas por infraccion de derechos de terceros.",
            "Una vez confirmada la disponibilidad, se presenta la solicitud ante el Instituto de la Propiedad Industrial, clasificando los productos o servicios segun la Clasificacion de Niza. Es recomendable proteger la marca en todas las clases relevantes para su actividad comercial, anticipando posibles expansiones del negocio.",
            "En el ambito digital, la proteccion se extiende al registro de dominios, la vigilancia de uso no autorizado en redes sociales y plataformas de comercio electronico, y la implementacion de estrategias de enforcement que permitan actuar rapidamente ante infracciones.",
            "Para la proteccion internacional, existen mecanismos como el Protocolo de Madrid que simplifican el proceso de registro en multiples paises. Nuestro equipo puede diseniar una estrategia integral de proteccion que se adapte a sus necesidades comerciales actuales y futuras.",
        ],
        author: "Lic. Andres Morales",
        date: "1 de febrero, 2026",
        category: "Propiedad Intelectual",
        image: "/images/blog-3.jpg",
        readTime: "7 min de lectura",
    },
]