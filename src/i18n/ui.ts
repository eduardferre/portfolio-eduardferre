export const languages = {
    en: 'English',
    es: 'Español'
} as const

export const defaultLang = 'en' as const

export type Lang = keyof typeof languages

export const ui = {
    en: {
        // Meta
        'meta.title': 'Eduard Ferré — AI / Data Engineer & Software Engineer',
        'meta.description':
            'Portfolio of Eduard Ferré, AI / Data Engineer at Carver Advanced Systems. Building solutions with LLMs, RAG, Knowledge Graphs and Mainframe code analysis (COBOL/JCL). Experienced in Python, data engineering and full-stack software development.',

        // Nav
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.aboutMe': 'About Me',
        'nav.contact': 'Contact',

        // Hero
        'hero.badge': 'Open to offers',
        'hero.greeting': "Hello, I'm",
        'hero.role': 'AI & Data Engineer. Building tools that actually work.',
        'hero.bio':
            "+3 years of professional experience. <strong>AI / Data Engineer</strong> at <strong>Carver Advanced Systems</strong>. Currently working on projects involving <strong>LLMs</strong>, <strong>Knowledge Graphs with RAG</strong>, and <strong>Mainframe code analysis (COBOL/JCL) using AI</strong>. Living in Barcelona, pursuing an online master's degree in <strong>Project Management</strong> at <strong>EAE Business School</strong>, specialising in Agile Methodologies and Digital Transformation. Passionate about building scalable data solutions and leveraging AI to drive strategic decisions.",

        // Section titles
        'section.experience': 'Job Experience',
        'section.projects': 'Projects',
        'section.aboutMe': 'About Me',

        // Experience
        'experience.0.title': 'AI / Data Engineer',
        'experience.0.description':
            '<p>Built a <strong>multi-agent AI system</strong> (Python, OpenAI, Azure) that traces <strong>data lineage across ~80,000 COBOL/JCL Mainframe files</strong> — around 24.5M lines of code — for a large European financial-automotive group. <strong>Sole owner for the first 8 months</strong>, from architecture to delivery and executive-level client contact; now co-leading a team, with regulatory deliverables compliant with <strong>ECB</strong> requirements.</p><p>Architected a <strong>Knowledge Graph + RAG</strong> codebase-intelligence platform for a banking and insurance group, rolling out across its full repository estate, and designed a <strong>LiteLLM-based AI governance proxy</strong> shaped as a product for external sale.</p><p>Other work across the portfolio: an AI call-center platform, a sales-training pipeline, an accounting application for a Spanish public administration body, and client PoCs.</p>',
        'experience.1.title': 'Software Engineer',
        'experience.1.description':
            '<p>Contributed to an enterprise <strong>eSIM/eUICC profile management platform</strong> (SGP.22, SGP.32) used by multiple telecom operators, implementing critical features such as terms-of-use and privacy acceptance and a <strong>proxy layer for beacon-type integrations</strong> — among them Spain\'s DGT V16 emergency beacon. Extracted and audited user data to support the legal department.</p><p>Backend in <strong>Java (Spring Boot)</strong> and <strong>TypeScript (Node.js/Express)</strong>, frontend in <strong>Angular</strong>, over Oracle SQL and MongoDB — working <strong>Scrum/Agile</strong> with Jenkins for CI/CD and SonarQube as the quality gate.</p>',
        'experience.2.title': 'Researcher',
        'experience.2.description':
            '<p>Research and characterization of different <strong>IPV (indoor photovoltaic)</strong> cell technologies under varying indoor light conditions, as part of the <strong>EU-funded project CELISA</strong> — efficient harvesting of indoor light energy for autonomous sensors.</p><p>Owned the full experimental cycle: circuit design and instrumentation (KiCad, BenchVue, AvaSoft), measurement campaigns under controlled illuminance and temperature, and data analysis in Matlab — work that ended up in <strong>four peer-reviewed publications</strong>.</p>',

        // Projects
        'project.0.title': 'eGym - Fitness application with Machine Learning',
        'project.0.description':
            "eGym is an iOS application developed for my final Network Engineering bachelor's thesis. The application is a combination of a social network, a fitness tracking app and a personal trainer powered with machine learning. All the data is stored in two databases (access control and data storage) via an API Rest. The machine learning is based on a personalized model, which has been trained with multiple videos of different exercises.",
        'project.1.title': 'ZenithFi - Personal Finance App',
        'project.1.description':
            'ZenithFi is a modern, elegant personal finance and budgeting web application built for clarity and ease of use. Track income and expenses, manage spending categories with unique colors and emojis, and set budget limits. Features a customizable dashboard, deep analytics with charts, internationalization (English, Spanish, Catalan), dark mode, and secure session-based authentication.',

        // About Me
        'about.p1':
            "I'm Eduard, although everyone knows me as Edu! At 15 years old, I learned programming logic and was able to create a Brick Breaker with Visual Basic. Years later, I pursued a <strong>double degree in Aerospace Systems Engineering and Network Engineering</strong> at <strong>Universitat Politècnica de Catalunya (UPC)</strong>.",
        'about.p2':
            "Along the way I built projects with just about every technology I could get my hands on, but it was in my final year — while researching <strong>indoor photovoltaics at UPC</strong>, work that ended up in <strong>four peer-reviewed publications</strong> — that I decided software was where I wanted to be, and joined <strong>G+D</strong>.",
        'about.p3':
            'There I learned what it really means to <strong>work in an <em class="italic">Agile team</em></strong>: shipping to production, reviewing other people\'s code, and picking up whatever the ticket needed. In parallel I built <strong>eGym</strong>, an iOS app with a computer-vision model, as my final degree project.',
        'about.p4':
            "Later, I pursued a master's degree in <strong>Big Data Analytics</strong> at <strong>Universidad Carlos III de Madrid (UC3M)</strong>, where I deepened my knowledge in data science, machine learning, and large-scale data processing.",
        'about.p5':
            'Today, I work as an <strong>AI / Data Engineer</strong> at <strong>Carver Advanced Systems</strong>, where I lead projects at the intersection of AI and data — building solutions with <strong>Large Language Models (LLMs)</strong>, <strong>Knowledge Graphs with RAG</strong>, and <strong><em class="italic">Mainframe code analysis (COBOL/JCL) using AI</em></strong>. On the side I\'m taking a master\'s in <strong>Project Management</strong> at <strong>EAE Business School</strong>, because knowing how to build something is only half of getting it delivered.',
        'about.p6':
            'Outside of work you\'ll find me at the gym, cooking, or taking apart some side project that nobody asked for. I like problems that look messy at first and turn out to have a clean shape underneath.',

        'about.photo.candid': 'off the clock',
        'about.photo.portrait': 'at work',
        'about.fact.based': 'based in',
        'about.fact.basedValue': 'Barcelona, ES',
        'about.fact.now': 'now',
        'about.fact.nowValue': 'Carver Advanced Systems',
        'about.fact.focus': 'focus',
        'about.fact.focusValue': 'LLMs · RAG · Data',

        // Case studies
        'nav.cases': 'Cases',
        'section.cases': 'Case Studies',
        'case.label': 'Case',
        'case.challenge': 'The problem',
        'case.approach': 'How it works',
        'case.outcome': 'Where it stands',

        'case.rdarr.tag': 'Multi-agent AI · Regulatory',
        'case.rdarr.title': 'Tracing data lineage across 24.5M lines of Mainframe code',
        'case.rdarr.context':
            'A large European financial-automotive group has to prove, field by field, where every figure in its regulatory reporting comes from — the <strong>data lineage</strong> requirement behind <strong>RDARR / BCBS 239</strong>. The source of truth is a Mainframe estate of <strong>~80,000 COBOL and JCL files</strong>, roughly <strong>24.5M lines of code</strong>, that nobody in the organisation can hold in their head.',
        'case.rdarr.challenge':
            'Reading it by hand was never an option — and neither was handing the codebase to an LLM. 24.5M lines is orders of magnitude past any context window, and a <strong>hallucinated lineage is worse than no lineage</strong> when the reader is a regulator.',
        'case.rdarr.step.1.title': 'Parse before you prompt',
        'case.rdarr.step.1.body':
            'Every file is parsed into an <strong>Abstract Syntax Tree</strong> first, so the system reasons over structure — paragraphs, variables, MOVE statements, file descriptors — rather than raw text. The AST is the ground truth: the model never gets to invent a relationship the parser did not see.',
        'case.rdarr.step.2.title': 'A mesh of narrow agents',
        'case.rdarr.step.2.body':
            'Instead of one prompt doing everything, each <strong>agent owns one job</strong>: resolving copybooks, following variable assignments, crossing JCL job steps with the programs they invoke, validating that a proposed link is actually supported by the AST. Narrow jobs are the ones you can verify.',
        'case.rdarr.step.3.title': 'Distributed execution',
        'case.rdarr.step.3.body':
            'The workload is sharded across <strong>Azure pods with multiprocessing</strong>, so a full pass over the estate is a batch job measured in hours rather than a project measured in months. Results persist in PostgreSQL and re-run as the codebase moves.',
        'case.rdarr.step.4.title': 'Output a regulator can read',
        'case.rdarr.step.4.body':
            'The deliverable is not a chat window: it is a <strong>variable-level lineage graph</strong> exported into <strong>ECB-compliant</strong> reporting, where every hop traces back to the file and the line that justifies it.',
        'case.rdarr.outcome':
            'Sole owner for the first eight months — architecture, delivery and direct executive-level client contact — and now co-leading a team on it. It is the work I point at to explain what I actually do: making a language model useful on a codebase far too large for it, by feeding it structure instead of tokens.',

        'case.kg.tag': 'Knowledge Graph · RAG · Developer tooling',
        'case.kg.title': 'Asking a million-line codebase questions in plain language',
        'case.kg.context':
            'A banking and insurance group with decades of accumulated code spread across <strong>COBOL/JCL, Java, JavaScript and Python</strong>. How it all fits together lives in a handful of people\'s heads — which makes onboarding slow, impact analysis a guess, and every bug hunt an archaeology exercise.',
        'case.kg.challenge':
            'Off-the-shelf RAG is a bad fit for code. Chopping source files into embedding chunks throws away the one thing that matters — <strong>the call graph</strong>. A function means very little without what calls it and what it touches.',
        'case.kg.step.1.title': 'AST first, again',
        'case.kg.step.1.body':
            'Language-agnostic parsing extracts every component of the estate — modules, classes, functions, COBOL paragraphs, variables — into a single structural vocabulary, regardless of the language it was written in.',
        'case.kg.step.2.title': 'Enrich the nodes with meaning',
        'case.kg.step.2.body':
            'An LLM writes a <strong>technical summary for each node</strong>, so the graph carries intent — what this component does and why — alongside structure. That is the part a parser can never give you and a developer always asks for.',
        'case.kg.step.3.title': 'A graph, not a pile of chunks',
        'case.kg.step.3.body':
            'Everything lands in <strong>Neo4j</strong>: nodes are code components, edges are real dependencies and call relationships, and the AI summaries plus their <strong>vector embeddings</strong> live as node properties. Lookup combines MD5-based weighting with semantic search.',
        'case.kg.step.4.title': 'Retrieval that walks the graph',
        'case.kg.step.4.body':
            'A question hits semantic search to find its entry-point nodes, then <strong>traversal expands along real dependencies</strong> to assemble context the size of the answer, not the size of the repo. Every answer comes back with the components behind it.',
        'case.kg.outcome':
            'I designed the original architecture; the build now runs with part of the team, indexing the company\'s full repository estate as developer teams start to adopt it. It answers the questions that actually cost teams time — where do I implement this, what breaks if I change it, where is this bug coming from — and it serves a PM scoping work as well as a developer opening the code for the first time.',

        // Theme
        'theme.light': 'Light',
        'theme.dark': 'Dark',
        'theme.system': 'System',
        'theme.srOnly': 'Choose the theme',

        // Experience items
        'experience.seeMore': 'See more',
        'experience.current': 'Current',
        'experience.publications': 'Peer-reviewed publications',

        // Metrics (Carver — scale of the mainframe analysis work)
        'metric.years': 'Years in role',
        'metric.coffees': 'Coffees',
        'metric.projects': 'Projects delivered',

        // Dates
        'date.present': 'Present',
        'date.august': 'August',
        'date.february': 'February',
        'date.july': 'July',
        'date.march': 'March'
    },
    es: {
        // Meta
        'meta.title': 'Eduard Ferré — Ingeniero de IA / Datos y Software',
        'meta.description':
            'Portfolio de Eduard Ferré, Ingeniero de IA / Datos en Carver Advanced Systems. Soluciones con LLMs, RAG, Grafos de Conocimiento y análisis de código Mainframe (COBOL/JCL). Experiencia en Python, ingeniería de datos y desarrollo full-stack.',

        // Nav
        'nav.experience': 'Experiencia',
        'nav.projects': 'Proyectos',
        'nav.aboutMe': 'Sobre Mí',
        'nav.contact': 'Contacto',

        // Hero
        'hero.badge': 'Abierto a ofertas',
        'hero.greeting': 'Hola, soy',
        'hero.role': 'AI & Data Engineer. Construyendo herramientas que funcionan.',
        'hero.bio':
            '+3 años de experiencia profesional. <strong>Ingeniero de IA / Datos</strong> en <strong>Carver Advanced Systems</strong>. Actualmente trabajo en proyectos con <strong>LLMs</strong>, <strong>Knowledge Graphs con RAG</strong> y <strong>análisis de código Mainframe (COBOL/JCL) con IA</strong>. Vivo en Barcelona, cursando un máster online en <strong>Gestión de Proyectos</strong> en <strong>EAE Business School</strong>, especializado en Metodologías Ágiles y Transformación Digital. Apasionado por construir soluciones de datos escalables y aprovechar la IA para impulsar decisiones estratégicas.',

        // Section titles
        'section.experience': 'Experiencia Laboral',
        'section.projects': 'Proyectos',
        'section.aboutMe': 'Sobre Mí',

        // Experience
        'experience.0.title': 'Ingeniero de IA / Datos',
        'experience.0.description':
            '<p>Construí un <strong>sistema de IA multi-agente</strong> (Python, OpenAI, Azure) que traza el <strong>linaje de datos sobre ~80.000 ficheros COBOL/JCL de Mainframe</strong> — unos 24,5M de líneas de código — para un gran grupo financiero del sector automoción a nivel europeo. <strong>Responsable único durante los primeros 8 meses</strong>, de la arquitectura a la entrega y el contacto directo a nivel directivo; ahora co-lidero un equipo, con entregables regulatorios conformes a los requisitos del <strong>BCE</strong>.</p><p>Diseñé la arquitectura de una plataforma de <strong>Knowledge Graph + RAG</strong> para inteligencia de código en una entidad de banca-seguros, en despliegue sobre todo su repositorio, y un <strong>proxy de gobernanza de IA basado en LiteLLM</strong> planteado como producto para venta externa.</p><p>Otros trabajos de la cartera: una plataforma de IA para call center, un pipeline de formación comercial, una aplicación de contabilidad para una administración pública española y PoCs para cliente.</p>',
        'experience.1.title': 'Ingeniero de Software',
        'experience.1.description':
            '<p>Contribuí a una plataforma enterprise de <strong>gestión de perfiles eSIM/eUICC</strong> (SGP.22, SGP.32) usada por múltiples operadores de telecomunicaciones, implementando funcionalidades críticas como la aceptación de términos de uso y privacidad y una <strong>capa proxy para integraciones tipo baliza</strong> — entre ellas la baliza V16 de la DGT. Extraje y audité datos de usuarios para dar soporte al departamento legal.</p><p>Backend en <strong>Java (Spring Boot)</strong> y <strong>TypeScript (Node.js/Express)</strong>, frontend en <strong>Angular</strong>, sobre Oracle SQL y MongoDB — en equipo <strong>Scrum/Agile</strong>, con Jenkins para CI/CD y SonarQube como puerta de calidad.</p>',
        'experience.2.title': 'Investigador',
        'experience.2.description':
            '<p>Investigación y caracterización de distintas tecnologías de <strong>células fotovoltaicas indoor (IPV)</strong> bajo diferentes condiciones de luz interior, en el marco del <strong>proyecto europeo CELISA</strong> — harvesting eficiente de energía lumínica indoor para sensores autónomos.</p><p>Me encargué del ciclo experimental completo: diseño de circuitos e instrumentación (KiCad, BenchVue, AvaSoft), campañas de medida bajo iluminancia y temperatura controladas, y análisis de datos en Matlab — un trabajo que acabó en <strong>cuatro publicaciones revisadas por pares</strong>.</p>',

        // Projects
        'project.0.title': 'eGym - Aplicación de fitness con Machine Learning',
        'project.0.description':
            'eGym es una aplicación iOS desarrollada para mi trabajo de fin de grado en Ingeniería de Redes. La aplicación combina una red social, una app de seguimiento fitness y un entrenador personal potenciado con machine learning. Todos los datos se almacenan en dos bases de datos (control de acceso y almacenamiento) mediante una API Rest. El machine learning se basa en un modelo personalizado, entrenado con múltiples vídeos de diferentes ejercicios.',
        'project.1.title': 'ZenithFi - Aplicación de Finanzas Personales',
        'project.1.description':
            'ZenithFi es una aplicación web moderna y elegante de finanzas personales diseñada para ofrecer claridad y facilidad de uso. Permite registrar ingresos y gastos, gestionar categorías personalizadas con colores y emojis, y establecer límites de presupuesto. Cuenta con un panel personalizable, analíticas avanzadas con gráficos interactivos, modo oscuro, internacionalización (Inglés, Español, Catalán) y autenticación segura basada en sesiones.',

        // About Me
        'about.p1':
            '¡Soy Eduard, aunque todos me conocen como Edu! A los 15 años aprendí lógica de programación y creé un Brick Breaker con Visual Basic. Años después, cursé un <strong>doble grado en Ingeniería de Sistemas Aeroespaciales e Ingeniería de Redes</strong> en la <strong>Universitat Politècnica de Catalunya (UPC)</strong>.',
        'about.p2':
            'Por el camino construí proyectos con casi cualquier tecnología que cayera en mis manos, pero fue en el último año — investigando <strong>fotovoltaica de interior en la UPC</strong>, un trabajo que acabó en <strong>cuatro publicaciones revisadas por pares</strong> — cuando decidí que lo mío era el software, y entré en <strong>G+D</strong>.',
        'about.p3':
            'Allí aprendí lo que significa de verdad <strong>trabajar en un <em class="italic">equipo Agile</em></strong>: desplegar a producción, revisar código de otros y aprender lo que hiciera falta para sacar el ticket adelante. En paralelo construí <strong>eGym</strong>, una app iOS con un modelo de visión por computador, como proyecto de fin de grado.',
        'about.p4':
            'Posteriormente, cursé un máster en <strong>Big Data Analytics</strong> en la <strong>Universidad Carlos III de Madrid (UC3M)</strong>, donde profundicé mis conocimientos en ciencia de datos, machine learning y procesamiento de datos a gran escala.',
        'about.p5':
            'Hoy trabajo como <strong>Ingeniero de IA / Datos</strong> en <strong>Carver Advanced Systems</strong>, donde lidero proyectos en la intersección de la IA y los datos — construyendo soluciones con <strong>Modelos de Lenguaje Grande (LLMs)</strong>, <strong>Grafos de Conocimiento con RAG</strong> y <strong><em class="italic">análisis de código Mainframe (COBOL/JCL) con IA</em></strong>. En paralelo curso un máster en <strong>Gestión de Proyectos</strong> en <strong>EAE Business School</strong>, porque saber construir algo es sólo la mitad de conseguir entregarlo.',
        'about.p6':
            'Fuera del trabajo me encontrarás en el gimnasio, cocinando o destripando algún proyecto paralelo que nadie ha pedido. Me gustan los problemas que parecen un caos al principio y acaban teniendo una forma limpia por debajo.',

        'about.photo.candid': 'fuera de horas',
        'about.photo.portrait': 'en el trabajo',
        'about.fact.based': 'vivo en',
        'about.fact.basedValue': 'Barcelona, ES',
        'about.fact.now': 'ahora',
        'about.fact.nowValue': 'Carver Advanced Systems',
        'about.fact.focus': 'foco',
        'about.fact.focusValue': 'LLMs · RAG · Datos',

        // Case studies
        'nav.cases': 'Casos',
        'section.cases': 'Casos de Estudio',
        'case.label': 'Caso',
        'case.challenge': 'El problema',
        'case.approach': 'Cómo funciona',
        'case.outcome': 'Estado actual',

        'case.rdarr.tag': 'IA multi-agente · Regulatorio',
        'case.rdarr.title': 'Trazar el linaje del dato en 24,5M de líneas de Mainframe',
        'case.rdarr.context':
            'Un gran grupo financiero del sector automoción a nivel europeo tiene que demostrar, campo a campo, de dónde sale cada cifra de su reporting regulatorio — el requisito de <strong>linaje del dato</strong> que hay detrás de <strong>RDARR / BCBS 239</strong>. La fuente de la verdad es un parque Mainframe de <strong>~80.000 ficheros COBOL y JCL</strong>, unos <strong>24,5M de líneas de código</strong>, que nadie en la organización puede tener en la cabeza.',
        'case.rdarr.challenge':
            'Leerlo a mano nunca fue una opción — y pasarle el código a un LLM, tampoco. 24,5M de líneas están órdenes de magnitud por encima de cualquier ventana de contexto, y <strong>un linaje alucinado es peor que no tener linaje</strong> cuando quien lee es el regulador.',
        'case.rdarr.step.1.title': 'Parsear antes de preguntar',
        'case.rdarr.step.1.body':
            'Cada fichero se parsea primero a un <strong>Árbol de Sintaxis Abstracta (AST)</strong>, de modo que el sistema razona sobre estructura — párrafos, variables, sentencias MOVE, descriptores de fichero — y no sobre texto plano. El AST es la verdad de base: el modelo no puede inventarse una relación que el parser no ha visto.',
        'case.rdarr.step.2.title': 'Una malla de agentes estrechos',
        'case.rdarr.step.2.body':
            'En lugar de un prompt que lo hace todo, <strong>cada agente tiene un único trabajo</strong>: resolver copybooks, seguir asignaciones de variables, cruzar los steps de JCL con los programas que invocan, validar que un enlace propuesto se sostiene sobre el AST. Los trabajos estrechos son los que se pueden verificar.',
        'case.rdarr.step.3.title': 'Ejecución distribuida',
        'case.rdarr.step.3.body':
            'La carga se reparte en <strong>pods de Azure con multiprocessing</strong>, así que una pasada completa sobre el parque es un batch de horas y no un proyecto de meses. Los resultados persisten en PostgreSQL y se re-ejecutan a medida que el código cambia.',
        'case.rdarr.step.4.title': 'Una salida que el regulador puede leer',
        'case.rdarr.step.4.body':
            'El entregable no es un chat: es un <strong>grafo de linaje a nivel de variable</strong> exportado a reporting <strong>conforme al BCE</strong>, donde cada salto se puede rastrear hasta el fichero y la línea que lo justifican.',
        'case.rdarr.outcome':
            'Responsable único durante los primeros ocho meses — arquitectura, entrega y contacto directo a nivel directivo — y ahora co-liderando un equipo en el proyecto. Es el trabajo que señalo para explicar a qué me dedico de verdad: hacer útil un modelo de lenguaje sobre una base de código demasiado grande para él, dándole estructura en vez de tokens.',

        'case.kg.tag': 'Knowledge Graph · RAG · Herramientas para devs',
        'case.kg.title': 'Preguntarle en lenguaje natural a un millón de líneas de código',
        'case.kg.context':
            'Una entidad de banca-seguros con décadas de código acumulado repartido entre <strong>COBOL/JCL, Java, JavaScript y Python</strong>. Cómo encaja todo vive en la cabeza de unas pocas personas — lo que hace lento el onboarding, convierte el análisis de impacto en una apuesta y cada búsqueda de bugs en un ejercicio de arqueología.',
        'case.kg.challenge':
            'El RAG de manual encaja mal con el código. Trocear ficheros fuente en chunks de embeddings tira por la borda lo único que importa: <strong>el grafo de llamadas</strong>. Una función significa poco sin lo que la llama y lo que toca.',
        'case.kg.step.1.title': 'Otra vez, el AST primero',
        'case.kg.step.1.body':
            'Un parseo agnóstico al lenguaje extrae cada componente del parque — módulos, clases, funciones, párrafos de COBOL, variables — a un único vocabulario estructural, sea cual sea el lenguaje en que se escribió.',
        'case.kg.step.2.title': 'Enriquecer los nodos con significado',
        'case.kg.step.2.body':
            'Un LLM redacta un <strong>resumen técnico para cada nodo</strong>, de forma que el grafo lleva intención — qué hace este componente y por qué — junto a la estructura. Es la parte que un parser nunca te da y que un desarrollador siempre pide.',
        'case.kg.step.3.title': 'Un grafo, no un montón de chunks',
        'case.kg.step.3.body':
            'Todo aterriza en <strong>Neo4j</strong>: los nodos son componentes de código, las aristas son dependencias y llamadas reales, y los resúmenes de IA junto a sus <strong>embeddings vectoriales</strong> viven como propiedades del nodo. La búsqueda combina un pesado basado en MD5 con búsqueda semántica.',
        'case.kg.step.4.title': 'Recuperación que recorre el grafo',
        'case.kg.step.4.body':
            'Una pregunta entra por búsqueda semántica para localizar sus nodos de entrada, y luego <strong>el recorrido se expande por dependencias reales</strong> hasta montar un contexto del tamaño de la respuesta, no del tamaño del repositorio. Cada respuesta vuelve con los componentes que la sostienen.',
        'case.kg.outcome':
            'Diseñé la arquitectura original; ahora el desarrollo lo lleva parte del equipo, indexando todo el repositorio de la compañía mientras los equipos de desarrollo empiezan a adoptarlo. Responde a las preguntas que de verdad cuestan tiempo — dónde implemento esto, qué rompo si lo cambio, de dónde viene este bug — y sirve tanto a un PM dimensionando trabajo como a un dev que abre el código por primera vez.',

        // Theme
        'theme.light': 'Claro',
        'theme.dark': 'Oscuro',
        'theme.system': 'Sistema',
        'theme.srOnly': 'Elige el tema',

        // Experience items
        'experience.seeMore': 'Ver más',
        'experience.current': 'Actual',
        'experience.publications': 'Publicaciones revisadas por pares',

        // Métricas (Carver — escala del trabajo de análisis Mainframe)
        'metric.years': 'Años en el puesto',
        'metric.coffees': 'Cafés',
        'metric.projects': 'Proyectos entregados',

        // Dates
        'date.present': 'Presente',
        'date.august': 'Agosto',
        'date.february': 'Febrero',
        'date.july': 'Julio',
        'date.march': 'Marzo'
    }
} as const
