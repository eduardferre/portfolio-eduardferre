export const languages = {
    en: 'English',
    es: 'Español'
} as const

export const defaultLang = 'en' as const

export type Lang = keyof typeof languages

export const ui = {
    en: {
        // Meta
        'meta.title': "Eduard Ferré's Portfolio - Software Engineer",
        'meta.description':
            'Hire Eduard Ferré to develop full stack applications. Software Engineer and Data Analytics student. Experience with Java, JavaScript/TypeScript, Python and database management (SQL and noSQL).',

        // Nav
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.aboutMe': 'About Me',
        'nav.contact': 'Contact',

        // Hero
        'hero.badge': "I'm Open to Offers",
        'hero.greeting': "Hello, I'm",
        'hero.bio':
            "+3 years of professional experience. <strong>Data Engineer</strong> at <strong>Carver Advanced Systems</strong> from Girona, Spain 🇪🇸. Currently working on projects involving <strong>LLMs</strong>, <strong>Knowledge Graphs with RAG</strong>, and <strong>Mainframe Analysis using AI</strong>. Living in Barcelona, pursuing an online master's degree in <strong>Project Management</strong> at <strong>EAE Business School</strong>, specialising in Agile Methodologies and Digital Transformation. Passionate about building scalable data solutions and leveraging AI to drive strategic decisions.",

        // Section titles
        'section.experience': 'Job Experience',
        'section.projects': 'Projects',
        'section.aboutMe': 'About Me',

        // Experience
        'experience.0.title': 'Data Engineer',
        'experience.0.description':
            'Leading multiple projects involving Large Language Models (LLMs), Knowledge Graphs with Retrieval-Augmented Generation (RAG), and Mainframe Analysis using AI techniques.',
        'experience.1.title': 'Software Engineer',
        'experience.1.description':
            'Full Stack development of multiple backend solutions with Java and JavaScript/TypeScript using Oracle SQL and MongoDB, and also involved in the design of a website using Angular.',
        'experience.2.title': 'Researcher',
        'experience.2.description':
            'Research on indoor light energy harvesting. Responsible for conducting multiple studies on photovoltaic cells under various types of light at different levels of light intensity.',

        // Projects
        'project.0.title': 'eGym - Fitness application with Machine Learning',
        'project.0.description':
            "eGym is an iOS application developed for my final Software Engineering bachelor's thesis. The application is a combination of a social network, a fitness tracking app and a personal trainer powered with machine learning. All the data is stored in two databases (access control and data storage) via an API Rest. The machine learning is based on a personalized model, which has been trained with multiple videos of different exercises.",

        // About Me
        'about.p1':
            "I'm Eduard, although everyone knows me as Edu! At 15 years old, I learned programming logic and was able to create a Brick Breaker with Visual Basic. Years later, I pursued a <strong>double degree in Aerospace Engineering and Software Engineering</strong> at <strong>Universitat Politècnica de Catalunya (UPC)</strong>.",
        'about.p2':
            "Although I developed multiple projects with different technologies during my degree, it wasn't until my final year that I decided to develop software and <strong>work at G+D</strong>.",
        'about.p3':
            'There, I learned to <strong>work in an <em class="italic">Agile team</em> and adapt to new technologies</strong>. During my evolution as a <strong><em class="italic">Software Engineer</em></strong>, I created a gym application as my final degree project, which turned out to be a great success.',
        'about.p4':
            "Later, I pursued a master's degree in <strong>Big Data Analytics</strong> at <strong>Universidad Carlos III de Madrid (UC3M)</strong>, where I deepened my knowledge in data science, machine learning, and large-scale data processing.",
        'about.p5':
            'Today, I work as a <strong>Data Engineer</strong> at <strong>Carver Advanced Systems</strong>, where I lead projects at the intersection of AI and data — building solutions with <strong>Large Language Models (LLMs)</strong>, <strong>Knowledge Graphs with RAG</strong>, and <strong><em class="italic">Mainframe Analysis using AI</em></strong>.',

        // Footer
        'footer.about': 'About',
        'footer.contact': 'Contact',

        // Theme
        'theme.light': 'Light',
        'theme.dark': 'Dark',
        'theme.system': 'System',
        'theme.srOnly': 'Choose the theme',

        // Experience items
        'experience.seeMore': 'See more',

        // Dates
        'date.august': 'August',
        'date.february': 'February',
        'date.july': 'July',
        'date.march': 'March'
    },
    es: {
        // Meta
        'meta.title': 'Portfolio de Eduard Ferré - Ingeniero de Software',
        'meta.description':
            'Contrata a Eduard Ferré para desarrollar aplicaciones full stack. Ingeniero de Software y estudiante de Analítica de Datos. Experiencia con Java, JavaScript/TypeScript, Python y gestión de bases de datos (SQL y noSQL).',

        // Nav
        'nav.experience': 'Experiencia',
        'nav.projects': 'Proyectos',
        'nav.aboutMe': 'Sobre Mí',
        'nav.contact': 'Contacto',

        // Hero
        'hero.badge': 'Abierto a Ofertas',
        'hero.greeting': 'Hola, soy',
        'hero.bio':
            '+3 años de experiencia profesional. <strong>Ingeniero de Datos</strong> en <strong>Carver Advanced Systems</strong> de Girona, España 🇪🇸. Actualmente trabajo en proyectos con <strong>LLMs</strong>, <strong>Knowledge Graphs con RAG</strong> y <strong>Análisis de Mainframes con IA</strong>. Vivo en Barcelona, cursando un máster online en <strong>Gestión de Proyectos</strong> en <strong>EAE Business School</strong>, especializado en Metodologías Ágiles y Transformación Digital. Apasionado por construir soluciones de datos escalables y aprovechar la IA para impulsar decisiones estratégicas.',

        // Section titles
        'section.experience': 'Experiencia Laboral',
        'section.projects': 'Proyectos',
        'section.aboutMe': 'Sobre Mí',

        // Experience
        'experience.0.title': 'Ingeniero de Datos',
        'experience.0.description':
            'Liderando múltiples proyectos con Modelos de Lenguaje Grande (LLMs), Grafos de Conocimiento con Generación Aumentada por Recuperación (RAG) y Análisis de Mainframes con técnicas de IA.',
        'experience.1.title': 'Ingeniero de Software',
        'experience.1.description':
            'Desarrollo Full Stack de múltiples soluciones backend con Java y JavaScript/TypeScript utilizando Oracle SQL y MongoDB, además de participar en el diseño de un sitio web con Angular.',
        'experience.2.title': 'Investigador',
        'experience.2.description':
            'Investigación sobre la captación de energía lumínica en interiores. Responsable de realizar múltiples estudios sobre células fotovoltaicas bajo diversos tipos de luz a diferentes niveles de intensidad.',

        // Projects
        'project.0.title': 'eGym - Aplicación de fitness con Machine Learning',
        'project.0.description':
            'eGym es una aplicación iOS desarrollada para mi trabajo de fin de grado en Ingeniería de Software. La aplicación combina una red social, una app de seguimiento fitness y un entrenador personal potenciado con machine learning. Todos los datos se almacenan en dos bases de datos (control de acceso y almacenamiento) mediante una API Rest. El machine learning se basa en un modelo personalizado, entrenado con múltiples vídeos de diferentes ejercicios.',

        // About Me
        'about.p1':
            '¡Soy Eduard, aunque todos me conocen como Edu! A los 15 años aprendí lógica de programación y creé un Brick Breaker con Visual Basic. Años después, cursé un <strong>doble grado en Ingeniería Aeroespacial e Ingeniería de Software</strong> en la <strong>Universitat Politècnica de Catalunya (UPC)</strong>.',
        'about.p2':
            'Aunque desarrollé múltiples proyectos con diferentes tecnologías durante la carrera, no fue hasta mi último año cuando decidí dedicarme al desarrollo de software y <strong>trabajar en G+D</strong>.',
        'about.p3':
            'Allí aprendí a <strong>trabajar en un <em class="italic">equipo Agile</em> y adaptarme a nuevas tecnologías</strong>. Durante mi evolución como <strong><em class="italic">Ingeniero de Software</em></strong>, creé una aplicación de gimnasio como proyecto de fin de grado, que resultó ser un gran éxito.',
        'about.p4':
            'Posteriormente, cursé un máster en <strong>Big Data Analytics</strong> en la <strong>Universidad Carlos III de Madrid (UC3M)</strong>, donde profundicé mis conocimientos en ciencia de datos, machine learning y procesamiento de datos a gran escala.',
        'about.p5':
            'Hoy trabajo como <strong>Ingeniero de Datos</strong> en <strong>Carver Advanced Systems</strong>, donde lidero proyectos en la intersección de la IA y los datos — construyendo soluciones con <strong>Modelos de Lenguaje Grande (LLMs)</strong>, <strong>Grafos de Conocimiento con RAG</strong> y <strong><em class="italic">Análisis de Mainframes con IA</em></strong>.',

        // Footer
        'footer.about': 'Sobre Mí',
        'footer.contact': 'Contacto',

        // Theme
        'theme.light': 'Claro',
        'theme.dark': 'Oscuro',
        'theme.system': 'Sistema',
        'theme.srOnly': 'Elige el tema',

        // Experience items
        'experience.seeMore': 'Ver más',

        // Dates
        'date.august': 'Agosto',
        'date.february': 'Febrero',
        'date.july': 'Julio',
        'date.march': 'Marzo'
    }
} as const
