import { createContextId } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

export type Locale = "en" | "es" | "fr";
export const LOCALES: Locale[] = ["en", "es", "fr"];
export const LOCALE_LABELS: Record<Locale, string> = { en: "EN", es: "ES", fr: "FR" };

export const LocaleContext = createContextId<Signal<Locale>>("app.locale");

/** Localized string with English fallback. */
export type LS = { en: string; es?: string; fr?: string };
export const tr = (v: LS, loc: Locale): string => v[loc] ?? v.en;
export type LSA = { en: string[]; es?: string[]; fr?: string[] };
export const tra = (v: LSA, loc: Locale): string[] => v[loc] ?? v.en;

/** Static UI strings. */
export const ui = {
  nav: {
    projects: { en: "Projects", es: "Proyectos", fr: "Projets" },
    research: { en: "Research", es: "Investigación", fr: "Recherche" },
    about: { en: "About", es: "Sobre mí", fr: "À propos" },
    contact: { en: "Contact", es: "Contacto", fr: "Contact" },
    menuOpen: { en: "Open menu", es: "Abrir menú", fr: "Ouvrir le menu" },
    menuClose: { en: "Close menu", es: "Cerrar menú", fr: "Fermer le menu" },
    theme: { en: "Toggle light/dark theme", es: "Cambiar tema claro/oscuro", fr: "Basculer le thème clair/sombre" },
    skip: { en: "Skip to content", es: "Saltar al contenido", fr: "Aller au contenu" },
  },
  hero: {
    eyebrow: { en: "Peer-reviewed researcher · AI × Topology", es: "Investigador peer-reviewed · IA × Topología", fr: "Chercheur publié · IA × Topologie" },
    line1: { en: "Mathematician", es: "Matemático", fr: "Mathématicien" },
    line2a: { en: "who ", es: "que ", fr: "qui " },
    line2b: { en: "builds", es: "construye", fr: "construit" },
    subline: {
      en: "I turn deep mathematics — topology, spectral methods, statistics — into AI research and software that ships. From a peer-reviewed paper to a 3D neural lab in your browser.",
      es: "Convierto matemática profunda —topología, métodos espectrales, estadística— en investigación de IA y software que se despliega. De un paper peer-reviewed a un laboratorio neuronal 3D en tu navegador.",
      fr: "Je transforme des mathématiques profondes — topologie, méthodes spectrales, statistique — en recherche en IA et en logiciels qui sont déployés. D'un article publié à un laboratoire neuronal 3D dans votre navigateur.",
    },
    cta1: { en: "Explore the work", es: "Explora el trabajo", fr: "Explorer le travail" },
    cta2: { en: "Let's talk", es: "Hablemos", fr: "Discutons" },
    statProjects: { en: "Projects", es: "Proyectos", fr: "Projets" },
    statResearch: { en: "Research", es: "Investigación", fr: "Recherche" },
    statResearchV: { en: "Peer-reviewed", es: "Peer-reviewed", fr: "Publiée" },
    statFocus: { en: "Focus", es: "Enfoque", fr: "Axe" },
    featuredTag: { en: "Featured · peer-reviewed", es: "Destacado · peer-reviewed", fr: "À la une · publié" },
    featuredTitle: {
      en: "Persistent homology tells neural architectures apart.",
      es: "La homología persistente distingue arquitecturas neuronales.",
      fr: "L'homologie persistante distingue les architectures neuronales.",
    },
    scroll: { en: "Scroll", es: "Desliza", fr: "Défiler" },
  },
  projects: {
    label: { en: "Projects", es: "Proyectos", fr: "Projets" },
    title: { en: "Eleven projects, one thread: rigor, applied.", es: "Once proyectos, un mismo hilo: rigor aplicado.", fr: "Onze projets, un même fil : la rigueur, appliquée." },
    lede: {
      en: "From pure mathematics and topological data analysis to AI research, statistics in R and shipped web apps — each project solves a real problem with the right tool.",
      es: "De la matemática pura y el análisis topológico de datos a la investigación en IA, la estadística en R y apps web desplegadas — cada proyecto resuelve un problema real con la herramienta adecuada.",
      fr: "Des mathématiques pures et l'analyse topologique de données à la recherche en IA, aux statistiques en R et aux applications web déployées — chaque projet résout un vrai problème avec le bon outil.",
    },
    moreWork: { en: "More work", es: "Otros trabajos", fr: "Autres travaux" },
    viewProject: { en: "View project", es: "Ver proyecto", fr: "Voir le projet" },
  },
  skills: {
    label: { en: "Skills", es: "Habilidades", fr: "Compétences" },
    title: { en: "The stack I use, proven in real code.", es: "El stack que uso, demostrado en código real.", fr: "Les technologies que j'utilise, prouvées dans du vrai code." },
    lede: {
      en: "Not a wishlist: every technology here shows up in at least one of the projects above.",
      es: "No es una lista de deseos: cada tecnología aparece en al menos uno de los proyectos de arriba.",
      fr: "Pas une liste de souhaits : chaque technologie apparaît dans au moins un des projets ci-dessus.",
    },
  },
  research: {
    label: { en: "Research", es: "Investigación", fr: "Recherche" },
    title: { en: "A single thread: topological & spectral descriptors.", es: "Un solo hilo: descriptores topológicos y espectrales.", fr: "Un seul fil : descripteurs topologiques et spectraux." },
    lede: {
      en: "My research characterizes data and neural networks through topology, spectra and Hodge theory — bridging pure mathematics and applied AI.",
      es: "Mi investigación caracteriza datos y redes neuronales mediante topología, espectros y teoría de Hodge — uniendo matemática pura e IA aplicada.",
      fr: "Ma recherche caractérise les données et les réseaux neuronaux par la topologie, les spectres et la théorie de Hodge — reliant mathématiques pures et IA appliquée.",
    },
    privacy: {
      en: "Privacy note: clinical projects are described only by their methods and medical field. No patient data, collaborators, or sensitive material are included.",
      es: "Nota de privacidad: los proyectos clínicos se describen solo por sus métodos y campo médico. No se incluyen datos de pacientes, colaboradores ni material sensible.",
      fr: "Note de confidentialité : les projets cliniques ne sont décrits que par leurs méthodes et leur domaine médical. Aucune donnée de patient, collaborateur ou élément sensible n'est inclus.",
    },
  },
  about: {
    label: { en: "About", es: "Sobre mí", fr: "À propos" },
    title: { en: "Mathematician, by training and by method.", es: "Matemático, por formación y por método.", fr: "Mathématicien, par formation et par méthode." },
    p1: {
      en: "I'm Daniel Reinoso (I also publish as César Daniel Reinoso Reinoso), a mathematician. I move naturally between abstraction — topology, spectral methods, logic — and putting it to work in code that runs and ships.",
      es: "Soy Daniel Reinoso (también publico como César Daniel Reinoso Reinoso), matemático. Me muevo con naturalidad entre la abstracción —topología, métodos espectrales, lógica— y su puesta en práctica en código que funciona y se despliega.",
      fr: "Je suis Daniel Reinoso (je publie aussi sous César Daniel Reinoso Reinoso), mathématicien. Je navigue naturellement entre l'abstraction — topologie, méthodes spectrales, logique — et sa mise en œuvre dans du code qui tourne et se déploie.",
    },
    p2: {
      en: "I've built everything from a chess web app with a real engine and in-browser 3D neural visualizations to peer-reviewed research fusing persistent homology with machine learning. The common thread is rigor: understand the problem before touching it, and validate before believing.",
      es: "He construido desde una app web de ajedrez con motor real y visualizaciones neuronales 3D en el navegador, hasta investigación peer-reviewed que fusiona homología persistente con machine learning. El hilo común es el rigor: entender el problema antes de tocarlo, y validar antes de creer.",
      fr: "J'ai construit aussi bien une application web d'échecs avec un vrai moteur et des visualisations neuronales 3D dans le navigateur que des recherches publiées fusionnant homologie persistante et apprentissage automatique. Le fil conducteur est la rigueur : comprendre le problème avant d'y toucher, et valider avant de croire.",
    },
    p3: {
      en: "I'm preparing my doctoral application, aiming to keep uniting mathematics, computation, and questions worth asking.",
      es: "Preparo mi postulación al doctorado, con la intención de seguir uniendo matemática, computación y preguntas que valgan la pena.",
      fr: "Je prépare ma candidature au doctorat, avec l'intention de continuer à unir mathématiques, informatique et questions qui en valent la peine.",
    },
  },
  contact: {
    label: { en: "Contact", es: "Contacto", fr: "Contact" },
    titleA: { en: "Let's work ", es: "¿Trabajamos ", fr: "Travaillons " },
    titleB: { en: "together", es: "juntos", fr: "ensemble" },
    titleC: { en: ".", es: "?", fr: "." },
    lede: {
      en: "Open to research collaborations, doctoral opportunities, and projects at the intersection of mathematics, AI and software.",
      es: "Abierto a colaboraciones de investigación, oportunidades doctorales y proyectos que crucen matemática, IA y software.",
      fr: "Ouvert aux collaborations de recherche, aux opportunités doctorales et aux projets à l'intersection des mathématiques, de l'IA et du logiciel.",
    },
  },
  footer: {
    tagline: {
      en: "Mathematician. I build AI, topology, and production-grade software — with rigor.",
      es: "Matemático. Construyo IA, topología y software de nivel producción — con rigor.",
      fr: "Mathématicien. Je construis de l'IA, de la topologie et des logiciels de niveau production — avec rigueur.",
    },
    sections: { en: "Sections", es: "Secciones", fr: "Sections" },
    links: { en: "Links", es: "Enlaces", fr: "Liens" },
    built: { en: "Built with Qwik · Swiss Modernism design", es: "Hecho con Qwik · Diseño Swiss Modernism", fr: "Réalisé avec Qwik · Design Swiss Modernism" },
  },
  detail: {
    projects: { en: "Projects", es: "Proyectos", fr: "Projets" },
    challenge: { en: "The challenge", es: "El reto", fr: "Le défi" },
    built: { en: "What I built", es: "Lo que construí", fr: "Ce que j'ai construit" },
    tech: { en: "Technologies", es: "Tecnologías", fr: "Technologies" },
    year: { en: "Year", es: "Año", fr: "Année" },
    role: { en: "Role", es: "Rol", fr: "Rôle" },
    next: { en: "Next project", es: "Siguiente proyecto", fr: "Projet suivant" },
    notFound: { en: "Project not found", es: "Proyecto no encontrado", fr: "Projet introuvable" },
    back: { en: "Back to projects", es: "Volver a proyectos", fr: "Retour aux projets" },
  },
};
