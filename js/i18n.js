// Bilingual (ES/EN) text swap. No build step — plain dictionary + data-i18n attributes.
(function () {
  const STRINGS = {
    es: {
      "notice": "Para la mejor experiencia, mirá este portfolio desde una computadora.",
      "nav.about": "Sobre mí",
      "nav.skills": "Habilidades",
      "nav.experience": "Experiencia",
      "nav.portfolio": "Portfolio",
      "nav.testimonials": "Testimonios",
      "nav.contact": "Contacto",
      "nav.home": "Inicio",
      "hero.tagline": "Activá el potencial<br>de tu marca<br>con diseño estratégico.",
      "testimonials.title": "Testimonios",
      "testimonials.intro": "Lo que dicen los clientes que ya trabajaron conmigo.",

      "home.media.title": "Tu foto o video va acá",
      "home.media.hint": "Reemplazá este placeholder en el HTML",

      "about.title": "Sobre mí",
      "about.photo.note": "Agregá tu foto acá.",
      "about.p1": "A lo largo de mi carrera, el diseño gráfico fue mucho más que una profesión: fue mi pasión y mi dedicación. Trabajé en enfoques y proyectos diversos, creando piezas que no solo generan impacto visual sino que también comunican mensajes potentes y efectivos. Mi formación inicial en preprensa offset me dio una base técnica sólida y un conocimiento profundo de la producción gráfica, esencial para cualquier diseñador.",
      "about.p2": "Con el tiempo me volqué al diseño digital, donde descubrí el enorme potencial de crear contenido valioso para publicidad en redes sociales. Mi experiencia como community manager me permitió conectar marcas con sus audiencias de forma efectiva, usando estrategias que maximizan el alcance y el engagement.",
      "about.p3": "Para mantenerme al día con las últimas tendencias aprendí a usar herramientas como Figma y sigo experimentando con IA y las nuevas herramientas que van apareciendo con los avances tecnológicos, aprendiendo algo nuevo cada día. Mi formación en diseño UX-UI también fue clave en este camino, dándome las habilidades para crear experiencias de usuario intuitivas y efectivas.",
      "about.p4": "Como diseñadora gráfica freelance, busco proyectos que me permitan aportar creativamente desde cualquier lugar, aprovechando la flexibilidad del trabajo remoto. Mi objetivo es colaborar con marcas y emprendedores para ayudarlos a contar su historia a través de un diseño impactante y efectivo.",

      "skills.title": "Habilidades",
      "skills.education.title": "Graduada en Diseño Gráfico en Comunicación Visual",
      "skills.education.body": "Universidad Nacional del Litoral · Santa Fe, Argentina",
      "skills.courses.title": "Cursos",
      "skills.course1.title": "¡Skills con Figma!",
      "skills.course1.body": "Jump! — Diciembre 2023",
      "skills.course2.title": "Met Camp UX-UI",
      "skills.course2.body": "3ª edición, Septiembre 2022",
      "skills.course3.title": "Diseño UX-UI",
      "skills.course3.body": "Coderhouse — Agosto 2021",
      "skills.course4.title": "Desarrollo web, HTML, CSS",
      "skills.course4.body": "Jump Educación! — Mayo 2023",
      "skills.course5.title": "Community Manager",
      "skills.course5.body": "Coderhouse — Diciembre 2023",
      "skills.course6.title": "Desarrollo web con WordPress",
      "skills.course6.body": "UTN Fac. Regional Resistencia — Enero 2019",
      "skills.software.title": "Software",
      "skills.skills.title": "Habilidades",
      "skills.skill1": "Trabajo en equipo",
      "skills.skill2": "Comunicación efectiva",
      "skills.skill3": "Flexibilidad",
      "skills.skill4": "Mejora continua",
      "skills.skill5": "Gestión de redes sociales",
      "skills.skill6": "Herramientas de IA",
      "skills.skill7": "Experiencia de usuario (UX)",
      "skills.skill8": "Interfaz de usuario (UI)",
      "skills.languages.title": "Idiomas",
      "skills.lang1": "Español (nativo)",
      "skills.lang2": "Italiano (avanzado)",
      "skills.lang3": "Inglés intermedio (conversacional)",

      "experience.title": "Experiencia",
      "experience.job1.title": "Diseñadora gráfica freelance",
      "experience.job1.body": "Profesional independiente · Remoto o presencial (Córdoba, Argentina)",
      "experience.job2.title": "Diseñadora gráfica, ENCAPA S.A.",
      "experience.job2.body": "Media jornada · Frontera, Santa Fe, Argentina",
      "experience.job3.title": "Diseñadora gráfica freelance",
      "experience.job3.body": "Profesional independiente · San Francisco, Córdoba, Argentina",
      "experience.job4.title": "Diseñadora gráfica, Artec SRL",
      "experience.job4.body": "Jornada completa · San Francisco, Córdoba, Argentina",

      "portfolio.title": "Portfolio",
      "portfolio.intro": "Una selección de trabajos de diseño gráfico, branding y comunicación visual.",
      "portfolio.other": "Otros clientes",
      "portfolio.card.whispers": "Whispers",
      "portfolio.card.fullselling": "Full Selling",
      "portfolio.card.maidana": "Maidana",
      "portfolio.card.uno-eventos": "Uno Eventos",
      "portfolio.card.sc-financiera": "SC Financiera",
      "portfolio.card.plan-hogar": "Plan Hogar",
      "portfolio.card.sala-piaf": "Sala Piaf",
      "portfolio.card.celisan": "Celisan",

      "case.whispers.desc": "Diseño de etiquetas troqueladas para la fragancia Whispers. Armado de pliego de impresión con separación de colores CMYK para offset. Etiquetas para las variantes de color de la fragancia.",
      "case.fullselling.desc": "Diseño de isologotipo con variantes positiva y negativa. Diseño de carpeta institucional y tarjetas personales para Full Selling, consultora comercial.",
      "case.maidana.desc": "Rotulación vehicular en vinilo para la camioneta de Maidana Autoelevadores. Diseño de tarjetas personales a juego.",
      "case.uno-eventos.desc": "Rebranding de isologotipo con variantes de color positivas y negativas. Tarjeta personal, cartel para vía pública, diseño de cabina de fotos, soporte para celular y templates de cotización para combos de fiestas de 15.",
      "case.sc-financiera.desc": "Piezas gráficas estáticas para redes sociales: cambio de divisas, valores del día y comunicación institucional de la financiera.",
      "case.plan-hogar.desc": "Serie de folletos para cada línea de producto (electrodomésticos, comedor, dormitorio, etc.) del plan de ahorro para equipar el hogar.",
      "case.sala-piaf.desc": "Diseño de vidriera en vinilo de corte, piezas gráficas para audiciones y anuncios, e ilustración de identidad para la escuela de canto.",
      "case.celisan.desc": "Rebranding de logo, piezas para redes sociales, etiquetas de producto, mockup de e-commerce mobile y packaging para cajas de desayuno — todo para la marca de productos sin gluten Celisan.",

      "case.back": "← Volver al portfolio",

      "contact.title": "¡Contactame!",
      "contact.tag": "#disponible",
      "social.phone": "WhatsApp",
      "media.mute": "Silenciar",
      "media.unmute": "Activar sonido",
    },
    en: {
      "notice": "For the best experience, please view this portfolio on a desktop or laptop screen.",
      "nav.about": "About Me",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.portfolio": "Portfolio",
      "nav.testimonials": "Testimonials",
      "nav.contact": "Contact",
      "nav.home": "Home",
      "hero.tagline": "Activate your brand's<br>potential with<br>strategic design.",
      "testimonials.title": "Testimonials",
      "testimonials.intro": "What clients who've worked with me have to say.",

      "home.media.title": "Your photo or video goes here",
      "home.media.hint": "Replace this placeholder in the HTML file",

      "about.title": "About me",
      "about.photo.note": "Add your photo here.",
      "about.p1": "Throughout my career, graphic design has been much more than a profession; it has been my passion and dedication. I have worked across diverse approaches and projects, creating pieces that not only make a visual impact but also communicate powerful, effective messages. My initial training in offset prepress gave me a solid technical foundation and a deep understanding of print production, which is essential for any designer.",
      "about.p2": "Over time, I moved into digital design, where I discovered the immense potential of creating valuable content for social media advertising. My experience as a community manager allowed me to connect brands with their audiences effectively, using strategies that maximize reach and engagement.",
      "about.p3": "To stay current with the latest trends, I have learned to use tools like Figma and I continue experimenting with AI and the new tools that keep emerging with technological advances, learning something new every day. My training in UX-UI design has also been a key part of this journey, giving me the skills to create intuitive, effective user experiences.",
      "about.p4": "I'm excited about the opportunity to keep growing in this ever-evolving field. As a freelance graphic designer, I'm looking for projects that let me contribute creatively from anywhere, taking advantage of the flexibility of remote work. My goal is to collaborate with brands and entrepreneurs to help them tell their story through impactful, effective design.",

      "skills.title": "Skills",
      "skills.education.title": "Graphic Design in Visual Communication",
      "skills.education.body": "Universidad Nacional del Litoral · Santa Fe, Argentina",
      "skills.courses.title": "Courses",
      "skills.course1.title": "Skills with Figma!",
      "skills.course1.body": "Jump! — December 2023",
      "skills.course2.title": "Met Camp UX-UI",
      "skills.course2.body": "3rd edition, September 2022",
      "skills.course3.title": "UX-UI Design",
      "skills.course3.body": "Coderhouse — August 2021",
      "skills.course4.title": "Web Development, HTML, CSS",
      "skills.course4.body": "Jump Educación! — May 2023",
      "skills.course5.title": "Community Manager",
      "skills.course5.body": "Coderhouse — December 2023",
      "skills.course6.title": "Web Development with WordPress",
      "skills.course6.body": "UTN Fac. Regional Resistencia — January 2019",
      "skills.software.title": "Software",
      "skills.skills.title": "Skills",
      "skills.skill1": "Team work",
      "skills.skill2": "Strong communication",
      "skills.skill3": "Flexibility",
      "skills.skill4": "Continuous improvement",
      "skills.skill5": "Social media management",
      "skills.skill6": "AI tools",
      "skills.skill7": "User experience (UX)",
      "skills.skill8": "User interface (UI)",
      "skills.languages.title": "Languages",
      "skills.lang1": "Spanish (native)",
      "skills.lang2": "Italian (advanced)",
      "skills.lang3": "English — intermediate (conversational)",

      "experience.title": "Experience",
      "experience.job1.title": "Freelance Graphic Designer",
      "experience.job1.body": "Independent professional · Remote or on-site (Córdoba, Argentina)",
      "experience.job2.title": "Graphic Designer, ENCAPA S.A.",
      "experience.job2.body": "Part time · Frontera, Santa Fe, Argentina",
      "experience.job3.title": "Freelance Graphic Designer",
      "experience.job3.body": "Independent professional · San Francisco, Córdoba, Argentina",
      "experience.job4.title": "Graphic Designer, Artec SRL",
      "experience.job4.body": "Full-time · San Francisco, Córdoba, Argentina",

      "portfolio.title": "Portfolio",
      "portfolio.intro": "A selection of graphic design, branding and visual communication work.",
      "portfolio.other": "Other clients",
      "portfolio.card.whispers": "Whispers",
      "portfolio.card.fullselling": "Full Selling",
      "portfolio.card.maidana": "Maidana",
      "portfolio.card.uno-eventos": "Uno Eventos",
      "portfolio.card.sc-financiera": "SC Financiera",
      "portfolio.card.plan-hogar": "Plan Hogar",
      "portfolio.card.sala-piaf": "Sala Piaf",
      "portfolio.card.celisan": "Celisan",

      "case.whispers.desc": "Die-cut label design for Whispers fragrance. Print sheet layout with CMYK color separation for offset printing. Labels for Whispers fragrance variants in different colors.",
      "case.fullselling.desc": "Logo design with positive and negative variants. Folder and business card design for Full Selling, a commercial consulting firm.",
      "case.maidana.desc": "Vehicle vinyl wrap for Maidana Autoelevadores' truck. Matching business card design.",
      "case.uno-eventos.desc": "Logo rebranding with positive and negative color variations. Business card, outdoor poster, photo booth design, phone stand, and quote templates for quinceañera party combos.",
      "case.sc-financiera.desc": "Static social media graphics for currency exchange, daily rates and institutional communication for the financial services firm.",
      "case.plan-hogar.desc": "Brochure series for each product line (appliances, dining, bedroom, etc.) of the savings plan to equip your home.",
      "case.sala-piaf.desc": "Cut-vinyl store window design, audition and announcement graphics, and identity illustration for the singing school.",
      "case.celisan.desc": "Logo rebranding, social media graphics, product labels, e-commerce mobile mockup and packaging for breakfast boxes — all for Celisan, a gluten-free product brand.",

      "case.back": "← Back to portfolio",

      "contact.title": "Contact me!",
      "contact.tag": "#opentowork",
      "social.phone": "WhatsApp",
      "media.mute": "Mute",
      "media.unmute": "Unmute",
    }
  };

  const DEFAULT_LANG = "es";

  function getLang() {
    try {
      const stored = localStorage.getItem("lang");
      if (stored === "es" || stored === "en") return stored;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    try { localStorage.setItem("lang", lang); } catch (e) {}
    apply(lang);
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    document.documentElement.lang = lang;
  }

  function apply(lang) {
    const dict = STRINGS[lang] || STRINGS[DEFAULT_LANG];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    apply(lang);
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
  });
})();
