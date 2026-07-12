/**
 * Portfolio content for Daniel Reinoso (César Daniel Reinoso Reinoso).
 * Trilingual (en / es / fr) with English fallback. Clinical projects are ANONYMIZED.
 * Co-authors are never named. Only original work is presented as own.
 */
import type { LS, LSA } from "./i18n";

export type ProjectLink = { label: LS; href: string; kind: "live" | "repo" | "paper" | "talk" };

export type Motif =
  | "chess" | "cosmos" | "network" | "molecule" | "brain" | "bot"
  | "topology" | "logic" | "spectral" | "wave" | "stats" | "vision";

export type Project = {
  slug: string;
  index: string;
  title: LS;
  category: LS;
  pillar: "AI / Machine Learning" | "Topological Data Analysis" | "Pure Mathematics" | "Developer" | "Teaching" | "Statistics / R";
  year: string;
  role: LS;
  motif: Motif;
  oneLiner: LS;
  summary: LS;
  problem: LS;
  contributions: LSA;
  tech: { group: string; items: string[] }[];
  metrics?: { label: string; value: string }[];
  links?: ProjectLink[];
  featured: boolean;
  sensitive?: boolean;
  privacyNote?: LS;
};

export const projects: Project[] = [
  {
    slug: "neural-architecture-persistent-homology",
    index: "01",
    pillar: "AI / Machine Learning",
    year: "2026",
    motif: "network",
    title: {
      en: "Neural Architecture Discrimination via Persistent Homology",
      es: "Discriminación de arquitecturas neuronales con homología persistente",
      fr: "Discrimination d'architectures neuronales par homologie persistante",
    },
    category: { en: "Machine Learning · Topology", es: "Machine Learning · Topología", fr: "Machine Learning · Topologie" },
    role: { en: "Lead author & researcher", es: "Autor principal e investigador", fr: "Auteur principal et chercheur" },
    oneLiner: {
      en: "A peer-reviewed descriptor that fingerprints trained neural networks using graph theory and persistent homology.",
      es: "Un descriptor peer-reviewed que identifica redes neuronales entrenadas usando teoría de grafos y homología persistente.",
      fr: "Un descripteur publié qui identifie des réseaux neuronaux entraînés via la théorie des graphes et l'homologie persistante.",
    },
    summary: {
      en: "A published method (Revista Bases de la Ciencia, 2026) that characterizes a trained neural network from two complementary views of its neuron activations — a functional graph and its persistent homology — fused into a single 24-dimensional descriptor that tells architectural families apart.",
      es: "Un método publicado (Revista Bases de la Ciencia, 2026) que caracteriza una red neuronal entrenada desde dos vistas complementarias de sus activaciones — un grafo funcional y su homología persistente — fusionadas en un único descriptor de 24 dimensiones que distingue familias de arquitecturas.",
      fr: "Une méthode publiée (Revista Bases de la Ciencia, 2026) qui caractérise un réseau neuronal entraîné à partir de deux vues complémentaires de ses activations — un graphe fonctionnel et son homologie persistante — fusionnées en un descripteur unique de 24 dimensions qui distingue les familles d'architectures.",
    },
    problem: {
      en: "Can you tell what kind of network you are looking at from its internal activity alone? The goal was a compact, quantitative fingerprint of a trained model's architecture — grounded in topology, not heuristics.",
      es: "¿Se puede saber qué tipo de red es solo por su actividad interna? El objetivo era una huella cuantitativa y compacta de la arquitectura de un modelo entrenado — basada en topología, no en heurísticas.",
      fr: "Peut-on savoir quel type de réseau on observe à partir de sa seule activité interne ? L'objectif : une empreinte quantitative et compacte de l'architecture d'un modèle entraîné — fondée sur la topologie, pas sur des heuristiques.",
    },
    contributions: {
      en: [
        "Functional-graph view (X₁): ten graph-theoretic invariants of the thresholded activation-correlation graph.",
        "Persistent-homology view (X₂): twelve summary statistics of the Vietoris–Rips persistence of the neuron point cloud.",
        "A fused 24-D descriptor (X₃) with accuracy-free and accuracy-weighted variants.",
        "Benchmarked on a 40-network zoo (30 MLP + 10 CNN, 5 families) across CIFAR-10/100 and SVHN, under a leakage-free cross-validation protocol.",
        "Interactive dashboards to explore the descriptor space; full reproducibility code released.",
      ],
      es: [
        "Vista de grafo funcional (X₁): diez invariantes de teoría de grafos del grafo de correlación de activaciones umbralizado.",
        "Vista de homología persistente (X₂): doce estadísticos resumen de la persistencia de Vietoris–Rips de la nube de puntos de neuronas.",
        "Un descriptor fusionado de 24D (X₃) con variantes sin y con ponderación por accuracy.",
        "Evaluado en un zoo de 40 redes (30 MLP + 10 CNN, 5 familias) en CIFAR-10/100 y SVHN, con un protocolo de validación cruzada sin fugas.",
        "Dashboards interactivos para explorar el espacio del descriptor; código de reproducibilidad publicado.",
      ],
      fr: [
        "Vue graphe fonctionnel (X₁) : dix invariants de théorie des graphes du graphe de corrélation d'activations seuillé.",
        "Vue homologie persistante (X₂) : douze statistiques résumées de la persistance de Vietoris–Rips du nuage de points de neurones.",
        "Un descripteur fusionné de 24D (X₃) avec des variantes sans et avec pondération par précision.",
        "Évalué sur un zoo de 40 réseaux (30 MLP + 10 CNN, 5 familles) sur CIFAR-10/100 et SVHN, avec un protocole de validation croisée sans fuite.",
        "Tableaux de bord interactifs pour explorer l'espace du descripteur ; code de reproductibilité publié.",
      ],
    },
    tech: [
      { group: "Deep Learning", items: ["Python", "PyTorch", "CNN / MLP"] },
      { group: "Topology", items: ["Persistent homology", "ripser", "networkx"] },
      { group: "Analysis", items: ["scikit-learn", "Dash", "Plotly"] },
    ],
    metrics: [
      { label: "Family AUC", value: "0.97" },
      { label: "Network zoo", value: "40" },
      { label: "Datasets", value: "3" },
    ],
    links: [{ label: { en: "Reproducibility code", es: "Código reproducible", fr: "Code reproductible" }, href: "https://github.com/Dcrr1717/multiview-nn-descriptor", kind: "repo" }],
    featured: true,
  },
  {
    slug: "hodge-theoretic-descriptor",
    index: "02",
    pillar: "Pure Mathematics",
    year: "2026",
    motif: "topology",
    title: { en: "A Hodge-Theoretic Multiscale Descriptor", es: "Un descriptor multiescala Hodge-teórico", fr: "Un descripteur multi-échelle fondé sur la théorie de Hodge" },
    category: { en: "Pure Mathematics · Data Science", es: "Matemática pura · Ciencia de datos", fr: "Mathématiques pures · Science des données" },
    role: { en: "Author / co-author", es: "Autor / coautor", fr: "Auteur / co-auteur" },
    oneLiner: {
      en: "Bringing Hodge theory to the mathematics of data — a manuscript in SIAM SIMODS format.",
      es: "Llevar la teoría de Hodge a la matemática de los datos — un manuscrito en formato SIAM SIMODS.",
      fr: "Amener la théorie de Hodge aux mathématiques des données — un manuscrit au format SIAM SIMODS.",
    },
    summary: {
      en: "A research manuscript, prepared in SIAM Journal on the Mathematics of Data Science (SIMODS) format, that develops a Hodge-theoretic, multiscale descriptor — where algebraic topology meets the mathematics of data.",
      es: "Un manuscrito de investigación, en formato SIAM Journal on the Mathematics of Data Science (SIMODS), que desarrolla un descriptor multiescala Hodge-teórico — donde la topología algebraica se encuentra con la matemática de los datos.",
      fr: "Un manuscrit de recherche, au format SIAM Journal on the Mathematics of Data Science (SIMODS), qui développe un descripteur multi-échelle fondé sur la théorie de Hodge — où la topologie algébrique rencontre les mathématiques des données.",
    },
    problem: {
      en: "Hodge theory decomposes complex objects into clean, orthogonal pieces. The question this work engages: can that decomposition yield a principled, multiscale way to describe data?",
      es: "La teoría de Hodge descompone objetos complejos en piezas limpias y ortogonales. La pregunta de este trabajo: ¿puede esa descomposición dar una forma fundamentada y multiescala de describir datos?",
      fr: "La théorie de Hodge décompose des objets complexes en pièces propres et orthogonales. La question de ce travail : cette décomposition peut-elle offrir une manière rigoureuse et multi-échelle de décrire les données ?",
    },
    contributions: {
      en: [
        "A descriptor grounded in Hodge theory and combinatorial topology.",
        "A multiscale construction with theoretical backing.",
        "Prepared in SIAM SIMODS format with reproducible, pgfplots-driven figure data.",
      ],
      es: [
        "Un descriptor basado en teoría de Hodge y topología combinatoria.",
        "Una construcción multiescala con respaldo teórico.",
        "Preparado en formato SIAM SIMODS con datos de figuras reproducibles (pgfplots).",
      ],
      fr: [
        "Un descripteur fondé sur la théorie de Hodge et la topologie combinatoire.",
        "Une construction multi-échelle avec un fondement théorique.",
        "Préparé au format SIAM SIMODS avec des données de figures reproductibles (pgfplots).",
      ],
    },
    tech: [
      { group: "Mathematics", items: ["Hodge theory", "Algebraic topology", "Combinatorial topology"] },
      { group: "Authoring", items: ["LaTeX", "pgfplots", "BibTeX"] },
    ],
    metrics: [
      { label: "Field", value: "Hodge theory" },
      { label: "Format", value: "SIAM SIMODS" },
      { label: "Type", value: "Manuscript" },
    ],
    featured: true,
  },
  {
    slug: "spectral-distances-tda",
    index: "03",
    pillar: "Topological Data Analysis",
    year: "2026",
    motif: "spectral",
    title: { en: "Spectral Distances for Topological Data Analysis", es: "Distancias espectrales para análisis topológico de datos", fr: "Distances spectrales pour l'analyse topologique de données" },
    category: { en: "Topological Data Analysis", es: "Análisis topológico de datos", fr: "Analyse topologique de données" },
    role: { en: "Researcher", es: "Investigador", fr: "Chercheur" },
    oneLiner: {
      en: "Measuring how far apart complex networks are, through the spectra of their graph structure.",
      es: "Medir cuán distintas son dos redes complejas a través del espectro de su estructura de grafo.",
      fr: "Mesurer l'écart entre réseaux complexes à travers le spectre de leur structure de graphe.",
    },
    summary: {
      en: "Research on spectral distances between multigraphs — comparing networks through the eigenvalues of their associated operators — applied to real citation networks and controlled synthetic benchmarks, with interactive visualizations.",
      es: "Investigación sobre distancias espectrales entre multigrafos — comparando redes mediante los autovalores de sus operadores asociados — aplicada a redes de citación reales y benchmarks sintéticos controlados, con visualizaciones interactivas.",
      fr: "Recherche sur les distances spectrales entre multigraphes — comparant des réseaux via les valeurs propres de leurs opérateurs associés — appliquée à des réseaux de citations réels et à des benchmarks synthétiques contrôlés, avec des visualisations interactives.",
    },
    problem: {
      en: "How do you quantify the difference between two networks in a way that respects their global structure? Spectral distances give a principled, topology-aware answer.",
      es: "¿Cómo cuantificar la diferencia entre dos redes respetando su estructura global? Las distancias espectrales dan una respuesta fundamentada y consciente de la topología.",
      fr: "Comment quantifier la différence entre deux réseaux en respectant leur structure globale ? Les distances spectrales offrent une réponse rigoureuse et sensible à la topologie.",
    },
    contributions: {
      en: [
        "Spectral distance measures between multigraphs based on their operator spectra.",
        "Applied to a real citation network (arXiv HEP-Ph) and controlled synthetic graphs.",
        "Exploratory analysis combining PCA, graph statistics and persistence.",
        "Interactive HTML visualizations of the results.",
      ],
      es: [
        "Medidas de distancia espectral entre multigrafos basadas en el espectro de sus operadores.",
        "Aplicadas a una red de citación real (arXiv HEP-Ph) y a grafos sintéticos controlados.",
        "Análisis exploratorio combinando PCA, estadísticos de grafos y persistencia.",
        "Visualizaciones HTML interactivas de los resultados.",
      ],
      fr: [
        "Mesures de distance spectrale entre multigraphes basées sur le spectre de leurs opérateurs.",
        "Appliquées à un réseau de citations réel (arXiv HEP-Ph) et à des graphes synthétiques contrôlés.",
        "Analyse exploratoire combinant ACP, statistiques de graphes et persistance.",
        "Visualisations HTML interactives des résultats.",
      ],
    },
    tech: [
      { group: "Topology & Graphs", items: ["networkx", "GUDHI", "Persistent homology"] },
      { group: "Numerics", items: ["NumPy", "SciPy", "scikit-learn"] },
      { group: "Viz", items: ["Plotly", "pandas"] },
    ],
    metrics: [
      { label: "Objects", value: "Networks" },
      { label: "Method", value: "Spectral" },
      { label: "Data", value: "Citations" },
    ],
    featured: true,
  },
  {
    slug: "rnn-cosmos",
    index: "04",
    pillar: "AI / Machine Learning",
    year: "2026",
    motif: "cosmos",
    title: { en: "Recurrent Networks & Topology, in 3D", es: "Redes recurrentes y topología, en 3D", fr: "Réseaux récurrents et topologie, en 3D" },
    category: { en: "AI · Topology · 3D", es: "IA · Topología · 3D", fr: "IA · Topologie · 3D" },
    role: { en: "Concept, ML & graphics", es: "Concepto, ML y gráficos", fr: "Concept, ML et graphismes" },
    oneLiner: {
      en: "An interactive lab where LSTM networks meet topological data analysis on real scientific data — climate, solar, Kepler — visualized in 3D.",
      es: "Un laboratorio interactivo donde las redes LSTM se cruzan con el análisis topológico de datos sobre datos científicos reales — clima, solar, Kepler — visualizado en 3D.",
      fr: "Un laboratoire interactif où les réseaux LSTM rencontrent l'analyse topologique de données sur des données scientifiques réelles — climat, solaire, Kepler — visualisé en 3D.",
    },
    summary: {
      en: "An interactive lab that runs LSTM / recurrent models in the browser (TensorFlow.js) over real scientific time series — climate, solar activity and Kepler light curves — computes topological and spectral metrics, and renders it all in 3D through React Three Fiber.",
      es: "Un laboratorio interactivo que ejecuta modelos LSTM / recurrentes en el navegador (TensorFlow.js) sobre series temporales científicas reales — clima, actividad solar y curvas de luz de Kepler — calcula métricas topológicas y espectrales, y lo renderiza todo en 3D con React Three Fiber.",
      fr: "Un laboratoire interactif qui exécute des modèles LSTM / récurrents dans le navigateur (TensorFlow.js) sur des séries temporelles scientifiques réelles — climat, activité solaire et courbes de lumière de Kepler — calcule des métriques topologiques et spectrales, et rend le tout en 3D avec React Three Fiber.",
    },
    problem: {
      en: "The behavior of a recurrent network is hard to intuit from flat plots — and harder still to connect to the topology of the data it learns. I wanted a single, spatial, interactive space that made both visible, with no server required.",
      es: "El comportamiento de una red recurrente es difícil de intuir en gráficas planas — y aún más difícil de conectar con la topología de los datos que aprende. Quería un único espacio espacial e interactivo que hiciera ambos visibles, sin servidor.",
      fr: "Le comportement d'un réseau récurrent est difficile à saisir sur des graphiques plats — et plus encore à relier à la topologie des données qu'il apprend. Je voulais un seul espace spatial et interactif rendant les deux visibles, sans serveur.",
    },
    contributions: {
      en: [
        "In-browser LSTM inference over real datasets (climate, solar, Kepler) with TensorFlow.js.",
        "Topological metrics (homology) and spectral metrics computed client-side.",
        "Interactive 3D scenes with React Three Fiber and three.js, tuned for 60 fps.",
        "Guided sections: theory, formulas, a live cosmos lab and applied problems.",
      ],
      es: [
        "Inferencia LSTM en el navegador sobre datasets reales (clima, solar, Kepler) con TensorFlow.js.",
        "Métricas topológicas (homología) y espectrales calculadas en el cliente.",
        "Escenas 3D interactivas con React Three Fiber y three.js, optimizadas a 60 fps.",
        "Secciones guiadas: teoría, fórmulas, un laboratorio en vivo y problemas aplicados.",
      ],
      fr: [
        "Inférence LSTM dans le navigateur sur des jeux de données réels (climat, solaire, Kepler) avec TensorFlow.js.",
        "Métriques topologiques (homologie) et spectrales calculées côté client.",
        "Scènes 3D interactives avec React Three Fiber et three.js, optimisées à 60 fps.",
        "Sections guidées : théorie, formules, un laboratoire en direct et des problèmes appliqués.",
      ],
    },
    tech: [
      { group: "AI", items: ["TensorFlow.js", "LSTM"] },
      { group: "Topology", items: ["Homology metrics", "Spectral metrics"] },
      { group: "3D / Web", items: ["React Three Fiber", "three.js", "Next.js"] },
    ],
    metrics: [
      { label: "Inference", value: "In-browser" },
      { label: "Data", value: "Climate · Kepler" },
      { label: "Render", value: "WebGL 3D" },
    ],
    links: [{ label: { en: "Source", es: "Código", fr: "Code source" }, href: "https://github.com/Dcrr1717/rnn-cosmos", kind: "repo" }],
    featured: true,
  },
  {
    slug: "graph-ml-parkinsons",
    index: "05",
    pillar: "AI / Machine Learning",
    year: "2026",
    motif: "brain",
    title: { en: "Graph Machine Learning for Parkinson's Disease", es: "Machine learning en grafos para enfermedad de Parkinson", fr: "Apprentissage automatique sur graphes pour la maladie de Parkinson" },
    category: { en: "AI in Health · Neuroscience", es: "IA en salud · Neurociencia", fr: "IA en santé · Neurosciences" },
    role: { en: "Modeling & analysis", es: "Modelado y análisis", fr: "Modélisation et analyse" },
    oneLiner: {
      en: "Graph-based machine learning and biostatistics on public Parkinson's cohorts.",
      es: "Machine learning basado en grafos y bioestadística sobre cohortes públicas de Parkinson.",
      fr: "Apprentissage automatique sur graphes et biostatistique sur des cohortes publiques de Parkinson.",
    },
    summary: {
      en: "Research in neurodegeneration: graph-based machine learning and statistical analysis on public Parkinson's cohort data (the PPMI initiative), with reproducible, containerized pipelines aimed at Q1 publication.",
      es: "Investigación en neurodegeneración: machine learning basado en grafos y análisis estadístico sobre datos de cohortes públicas de Parkinson (iniciativa PPMI), con pipelines reproducibles y contenedorizados orientados a publicación Q1.",
      fr: "Recherche en neurodégénérescence : apprentissage sur graphes et analyse statistique sur des données de cohortes publiques de Parkinson (initiative PPMI), avec des pipelines reproductibles et conteneurisés visant une publication Q1.",
    },
    problem: {
      en: "Extracting useful clinical signal from complex longitudinal data demands methods that are robust, reproducible and statistically rigorous.",
      es: "Extraer señal clínica útil de datos longitudinales complejos exige métodos robustos, reproducibles y estadísticamente rigurosos.",
      fr: "Extraire un signal clinique utile de données longitudinales complexes exige des méthodes robustes, reproductibles et statistiquement rigoureuses.",
    },
    contributions: {
      en: [
        "Graph-based modeling and machine learning on a public cohort (PPMI).",
        "Statistical validation with statsmodels and SciPy.",
        "Reproducible, containerized pipelines with Docker.",
        "Manuscript preparation targeting Q1 journals.",
      ],
      es: [
        "Modelado basado en grafos y machine learning sobre una cohorte pública (PPMI).",
        "Validación estadística con statsmodels y SciPy.",
        "Pipelines reproducibles y contenedorizados con Docker.",
        "Preparación de manuscrito orientado a revistas Q1.",
      ],
      fr: [
        "Modélisation sur graphes et apprentissage automatique sur une cohorte publique (PPMI).",
        "Validation statistique avec statsmodels et SciPy.",
        "Pipelines reproductibles et conteneurisés avec Docker.",
        "Préparation d'un manuscrit visant des revues Q1.",
      ],
    },
    tech: [
      { group: "ML / Stats", items: ["Python", "scikit-learn", "statsmodels", "networkx"] },
      { group: "Data", items: ["pandas", "NumPy", "PyArrow"] },
      { group: "Reproducibility", items: ["Docker", "docker-compose"] },
    ],
    metrics: [
      { label: "Field", value: "Neurology" },
      { label: "Data", value: "PPMI (public)" },
      { label: "Goal", value: "Q1 article" },
    ],
    featured: true,
    sensitive: true,
    privacyNote: {
      en: "Described only by techniques and medical field. No collaborators, patients, or data are named or published.",
      es: "Descrito solo por técnicas y campo médico. No se nombran ni publican colaboradores, pacientes ni datos.",
      fr: "Décrit uniquement par les techniques et le domaine médical. Aucun collaborateur, patient ou donnée n'est nommé ni publié.",
    },
  },
  {
    slug: "mathematical-logic-incompleteness",
    index: "06",
    pillar: "Pure Mathematics",
    year: "2026",
    motif: "logic",
    title: { en: "Mathematical Logic & Incompleteness", es: "Lógica matemática e incompletitud", fr: "Logique mathématique et incomplétude" },
    category: { en: "Pure Mathematics · Logic", es: "Matemática pura · Lógica", fr: "Mathématiques pures · Logique" },
    role: { en: "Author / co-author", es: "Autor / coautor", fr: "Auteur / co-auteur" },
    oneLiner: {
      en: "A research manuscript in mathematical logic, around Gödel's incompleteness and formal systems.",
      es: "Un manuscrito de investigación en lógica matemática, en torno a la incompletitud de Gödel y los sistemas formales.",
      fr: "Un manuscrit de recherche en logique mathématique, autour de l'incomplétude de Gödel et des systèmes formels.",
    },
    summary: {
      en: "A research manuscript in mathematical logic engaging rigorously with themes around Gödel's incompleteness theorems and the limits of formal systems.",
      es: "Un manuscrito de investigación en lógica matemática que aborda con rigor temas en torno a los teoremas de incompletitud de Gödel y los límites de los sistemas formales.",
      fr: "Un manuscrit de recherche en logique mathématique traitant rigoureusement de thèmes autour des théorèmes d'incomplétude de Gödel et des limites des systèmes formels.",
    },
    problem: {
      en: "The limits of formal reasoning are subtle and beautiful. This work engages with them precisely, in the language of formal logic.",
      es: "Los límites del razonamiento formal son sutiles y bellos. Este trabajo los aborda con precisión, en el lenguaje de la lógica formal.",
      fr: "Les limites du raisonnement formel sont subtiles et belles. Ce travail les aborde avec précision, dans le langage de la logique formelle.",
    },
    contributions: {
      en: [
        "A formal treatment of incompleteness and formal-systems themes.",
        "Written as a research manuscript in LaTeX.",
      ],
      es: [
        "Un tratamiento formal de la incompletitud y los sistemas formales.",
        "Redactado como manuscrito de investigación en LaTeX.",
      ],
      fr: [
        "Un traitement formel de l'incomplétude et des systèmes formels.",
        "Rédigé comme un manuscrit de recherche en LaTeX.",
      ],
    },
    tech: [
      { group: "Mathematics", items: ["Mathematical logic", "Formal systems", "Proof theory"] },
      { group: "Authoring", items: ["LaTeX"] },
    ],
    metrics: [
      { label: "Field", value: "Logic" },
      { label: "Focus", value: "Gödel" },
      { label: "Type", value: "Manuscript" },
    ],
    featured: true,
  },
  {
    slug: "chess-learning-platform",
    index: "07",
    pillar: "Developer",
    year: "2026",
    motif: "chess",
    title: { en: "Engine-Backed Chess Learning Platform", es: "Plataforma de aprendizaje de ajedrez con motor", fr: "Plateforme d'apprentissage des échecs avec moteur" },
    category: { en: "Full-Stack Web · EdTech", es: "Web full-stack · EdTech", fr: "Web full-stack · EdTech" },
    role: { en: "Design & full-stack development", es: "Diseño y desarrollo full-stack", fr: "Conception et développement full-stack" },
    oneLiner: {
      en: "A modular web app that teaches chess step by step, with a real engine behind the board.",
      es: "Una app web modular que enseña ajedrez paso a paso, con un motor real detrás del tablero.",
      fr: "Une application web modulaire qui enseigne les échecs étape par étape, avec un vrai moteur derrière l'échiquier.",
    },
    summary: {
      en: "A web application that teaches chess progressively — from how each piece moves to full games with PGN notation — built with React 19 and deployed on Vercel with continuous integration.",
      es: "Una aplicación web que enseña ajedrez de forma progresiva — de cómo se mueve cada pieza a partidas completas con notación PGN — construida con React 19 y desplegada en Vercel con integración continua.",
      fr: "Une application web qui enseigne les échecs de manière progressive — du mouvement de chaque pièce aux parties complètes en notation PGN — construite avec React 19 et déployée sur Vercel avec intégration continue.",
    },
    problem: {
      en: "Learning chess from scratch is intimidating. The challenge was turning abstract concepts into a guided, tactile, frictionless experience that works as well on a phone as on a desktop.",
      es: "Aprender ajedrez desde cero intimida. El reto era convertir conceptos abstractos en una experiencia guiada, táctil y sin fricción, que funcionara igual de bien en un teléfono que en un escritorio.",
      fr: "Apprendre les échecs de zéro est intimidant. Le défi était de transformer des concepts abstraits en une expérience guidée, tactile et sans friction, aussi efficace sur téléphone que sur ordinateur.",
    },
    contributions: {
      en: [
        "A progressive, module-based SPA with client-side routing.",
        "Interactive board with legal-move validation (chess.js) and engine analysis (Stockfish).",
        "Global state with Zustand; light/dark mode; fully responsive.",
        "Continuous deployment on Vercel — every push to main redeploys.",
      ],
      es: [
        "Una SPA progresiva por módulos con enrutado en el cliente.",
        "Tablero interactivo con validación de jugadas legales (chess.js) y análisis con motor (Stockfish).",
        "Estado global con Zustand; modo claro/oscuro; totalmente responsive.",
        "Despliegue continuo en Vercel — cada push a main redespliega.",
      ],
      fr: [
        "Une SPA progressive par modules avec routage côté client.",
        "Échiquier interactif avec validation des coups légaux (chess.js) et analyse par moteur (Stockfish).",
        "État global avec Zustand ; mode clair/sombre ; entièrement responsive.",
        "Déploiement continu sur Vercel — chaque push sur main redéploie.",
      ],
    },
    tech: [
      { group: "Frontend", items: ["React 19", "TypeScript", "Vite", "Tailwind CSS"] },
      { group: "Chess", items: ["chess.js", "react-chessboard", "stockfish.js"] },
      { group: "State & Infra", items: ["Zustand", "Vercel", "CI/CD"] },
    ],
    metrics: [
      { label: "Modules", value: "3" },
      { label: "Engine", value: "Stockfish" },
      { label: "Deploy", value: "Vercel" },
    ],
    links: [
      { label: { en: "View app", es: "Ver app", fr: "Voir l'app" }, href: "https://ajedrez-bienestar-academico.vercel.app", kind: "live" },
      { label: { en: "Source", es: "Código", fr: "Code source" }, href: "https://github.com/dcrr1717/ajedrez-bienestar-academico", kind: "repo" },
    ],
    featured: true,
  },
  {
    slug: "ai-github-automation",
    index: "08",
    pillar: "Developer",
    year: "2026",
    motif: "bot",
    title: { en: "AI-Driven GitHub Automation", es: "Automatización de GitHub con IA", fr: "Automatisation de GitHub par IA" },
    category: { en: "AI Automation · Developer Tooling", es: "Automatización con IA · Tooling", fr: "Automatisation IA · Outils développeur" },
    role: { en: "Design & implementation", es: "Diseño e implementación", fr: "Conception et implémentation" },
    oneLiner: {
      en: "A tool that generates and improves GitHub profiles on a schedule using large language models.",
      es: "Una herramienta que genera y mejora perfiles de GitHub de forma programada usando modelos de lenguaje.",
      fr: "Un outil qui génère et améliore des profils GitHub de façon programmée à l'aide de grands modèles de langage.",
    },
    summary: {
      en: "An automation tool that orchestrates large language models (OpenAI and Gemini) with the GitHub API to generate and polish profiles on a schedule — with separate modules for generation, beautification, planning and upload.",
      es: "Una herramienta de automatización que orquesta modelos de lenguaje (OpenAI y Gemini) con la API de GitHub para generar y pulir perfiles de forma programada — con módulos separados de generación, embellecido, planificación y subida.",
      fr: "Un outil d'automatisation qui orchestre des grands modèles de langage (OpenAI et Gemini) avec l'API GitHub pour générer et peaufiner des profils de façon programmée — avec des modules séparés de génération, d'embellissement, de planification et de mise en ligne.",
    },
    problem: {
      en: "Keeping a polished technical presence on GitHub is tedious and repetitive. The goal was to automate it with judgment, not spam.",
      es: "Mantener una presencia técnica cuidada en GitHub es tedioso y repetitivo. El objetivo era automatizarlo con criterio, no con spam.",
      fr: "Maintenir une présence technique soignée sur GitHub est fastidieux et répétitif. L'objectif était de l'automatiser avec discernement, pas par du spam.",
    },
    contributions: {
      en: [
        "API integration: GitHub (PyGithub / GitPython), OpenAI and Google GenAI.",
        "Separate modules: generator, profile beautifier, scheduler and uploader.",
        "Scheduled execution with rate control and rich console output.",
        "Configuration via environment variables with careful secret handling.",
      ],
      es: [
        "Integración de APIs: GitHub (PyGithub / GitPython), OpenAI y Google GenAI.",
        "Módulos separados: generador, embellecedor de perfil, planificador y subida.",
        "Ejecución programada con control de frecuencia y salida enriquecida en consola.",
        "Configuración por variables de entorno con manejo cuidadoso de secretos.",
      ],
      fr: [
        "Intégration d'API : GitHub (PyGithub / GitPython), OpenAI et Google GenAI.",
        "Modules séparés : générateur, embellisseur de profil, planificateur et téléversement.",
        "Exécution programmée avec contrôle de fréquence et sortie console enrichie.",
        "Configuration par variables d'environnement avec gestion soigneuse des secrets.",
      ],
    },
    tech: [
      { group: "Backend", items: ["Python", "PyGithub", "schedule", "rich"] },
      { group: "AI", items: ["OpenAI", "Google GenAI"] },
      { group: "Tooling", items: ["TypeScript", "PowerShell"] },
    ],
    metrics: [
      { label: "APIs", value: "3" },
      { label: "Models", value: "GPT · Gemini" },
      { label: "Runs", value: "Scheduled" },
    ],
    featured: true,
    sensitive: true,
    privacyNote: {
      en: "Contains an .env with credentials. Before publishing it must be removed from history and its tokens rotated.",
      es: "Contiene un .env con credenciales. Antes de publicar hay que retirarlo del historial y rotar sus tokens.",
      fr: "Contient un .env avec des identifiants. Avant publication, il doit être retiré de l'historique et ses jetons renouvelés.",
    },
  },
  {
    slug: "mathematical-animations-manim",
    index: "09",
    pillar: "Teaching",
    year: "2026",
    motif: "wave",
    title: { en: "Mathematical Animations for Teaching", es: "Animaciones matemáticas para enseñar", fr: "Animations mathématiques pour l'enseignement" },
    category: { en: "Math Communication · Animation", es: "Divulgación matemática · Animación", fr: "Communication mathématique · Animation" },
    role: { en: "Author & educator", es: "Autor y docente", fr: "Auteur et enseignant" },
    oneLiner: {
      en: "Original Manim animations that turn abstract mathematics into something you can watch.",
      es: "Animaciones originales en Manim que convierten la matemática abstracta en algo que se puede ver.",
      fr: "Des animations Manim originales qui transforment les mathématiques abstraites en quelque chose que l'on peut regarder.",
    },
    summary: {
      en: "A set of original animations built with Manim to teach mathematics to university students, turning abstract concepts into clear, visual narratives for an interactive presentation.",
      es: "Un conjunto de animaciones originales en Manim para enseñar matemáticas a estudiantes universitarios, convirtiendo conceptos abstractos en narrativas visuales claras para una presentación interactiva.",
      fr: "Un ensemble d'animations originales réalisées avec Manim pour enseigner les mathématiques à des étudiants universitaires, transformant des concepts abstraits en récits visuels clairs pour une présentation interactive.",
    },
    problem: {
      en: "Some mathematical ideas only click when you watch them move. The goal was teaching animations that make abstraction tangible.",
      es: "Algunas ideas matemáticas solo encajan cuando las ves moverse. El objetivo eran animaciones didácticas que hicieran tangible la abstracción.",
      fr: "Certaines idées mathématiques ne s'éclairent que lorsqu'on les voit bouger. L'objectif : des animations pédagogiques rendant l'abstraction tangible.",
    },
    contributions: {
      en: [
        "Original mathematical animations authored in Manim.",
        "Interactive presentation material for university teaching.",
        "A focus on clarity and visual intuition over decoration.",
      ],
      es: [
        "Animaciones matemáticas originales creadas en Manim.",
        "Material de presentación interactivo para docencia universitaria.",
        "Enfoque en la claridad y la intuición visual antes que en la decoración.",
      ],
      fr: [
        "Animations mathématiques originales créées avec Manim.",
        "Matériel de présentation interactif pour l'enseignement universitaire.",
        "Priorité à la clarté et à l'intuition visuelle plutôt qu'à la décoration.",
      ],
    },
    tech: [
      { group: "Animation", items: ["Python", "Manim", "NumPy"] },
      { group: "Teaching", items: ["University level", "Interactive slides"] },
    ],
    metrics: [
      { label: "Tool", value: "Manim" },
      { label: "Audience", value: "University" },
      { label: "Focus", value: "Intuition" },
    ],
    featured: true,
  },
  {
    slug: "statistical-modeling-r",
    index: "10",
    pillar: "Statistics / R",
    year: "2026",
    motif: "stats",
    title: { en: "Statistical Modeling & Data Mining in R", es: "Modelado estadístico y minería de datos en R", fr: "Modélisation statistique et fouille de données en R" },
    category: { en: "Statistics · R · Data Mining", es: "Estadística · R · Minería de datos", fr: "Statistique · R · Fouille de données" },
    role: { en: "M.Sc. in Statistics", es: "Maestría en Estadística", fr: "Master en statistique" },
    oneLiner: {
      en: "A graduate body of statistics in R — modeling, data mining, geospatial analysis, and interactive Shiny apps.",
      es: "Un cuerpo de trabajo de posgrado en estadística en R — modelado, minería de datos, análisis geoespacial y apps interactivas en Shiny.",
      fr: "Un ensemble de travaux de master en statistique sous R — modélisation, fouille de données, analyse géospatiale et applications interactives Shiny.",
    },
    summary: {
      en: "The applied core of my M.Sc. in Statistics: statistical modeling, data mining and deep learning in R — spanning geospatial analysis, exploratory data analysis and interactive Shiny dashboards, with data drawn from both SQL and MongoDB.",
      es: "El núcleo aplicado de mi maestría en Estadística: modelado estadístico, minería de datos y deep learning en R — abarcando análisis geoespacial, análisis exploratorio y dashboards interactivos en Shiny, con datos desde SQL y MongoDB.",
      fr: "Le cœur appliqué de mon master en statistique : modélisation statistique, fouille de données et deep learning sous R — couvrant l'analyse géospatiale, l'analyse exploratoire et des tableaux de bord Shiny interactifs, avec des données issues de SQL et de MongoDB.",
    },
    problem: {
      en: "Real statistical practice is broad: from a clean regression to a full data-mining pipeline to an app a non-statistician can actually use. This is that breadth, done rigorously.",
      es: "La práctica estadística real es amplia: de una regresión limpia a un pipeline completo de minería de datos, hasta una app que un no-estadístico pueda usar. Esto es esa amplitud, hecha con rigor.",
      fr: "La pratique statistique réelle est vaste : d'une régression propre à un pipeline complet de fouille de données, jusqu'à une application utilisable par un non-statisticien. Voilà cette étendue, réalisée avec rigueur.",
    },
    contributions: {
      en: [
        "Statistical modeling and data mining across a full graduate curriculum in R.",
        "Interactive R Shiny applications (including a recurrent-network demo).",
        "Geospatial analysis and thorough exploratory data analysis.",
        "Data access from both SQL (SQLite) and NoSQL (MongoDB).",
      ],
      es: [
        "Modelado estadístico y minería de datos a lo largo de un currículo completo de posgrado en R.",
        "Aplicaciones interactivas en R Shiny (incluida una demo de red recurrente).",
        "Análisis geoespacial y análisis exploratorio de datos exhaustivo.",
        "Acceso a datos desde SQL (SQLite) y NoSQL (MongoDB).",
      ],
      fr: [
        "Modélisation statistique et fouille de données sur tout un cursus de master en R.",
        "Applications interactives R Shiny (dont une démo de réseau récurrent).",
        "Analyse géospatiale et analyse exploratoire approfondie.",
        "Accès aux données depuis SQL (SQLite) et NoSQL (MongoDB).",
      ],
    },
    tech: [
      { group: "Language", items: ["R", "tidyverse", "ggplot2"] },
      { group: "Apps & Data", items: ["R Shiny", "SQL / SQLite", "MongoDB"] },
      { group: "Methods", items: ["Regression", "Data mining", "Geospatial"] },
    ],
    metrics: [
      { label: "Language", value: "R" },
      { label: "Apps", value: "Shiny" },
      { label: "Data", value: "SQL · NoSQL" },
    ],
    featured: true,
  },
  {
    slug: "medical-imaging-vision-transformers",
    index: "11",
    pillar: "AI / Machine Learning",
    year: "2026",
    motif: "vision",
    title: { en: "Medical Imaging with Vision Transformers", es: "Imagen médica con Vision Transformers", fr: "Imagerie médicale avec des Vision Transformers" },
    category: { en: "Computer Vision · Deep Learning", es: "Visión por computador · Deep Learning", fr: "Vision par ordinateur · Deep Learning" },
    role: { en: "Modeling & experiments", es: "Modelado y experimentos", fr: "Modélisation et expériences" },
    oneLiner: {
      en: "Fine-tuning Vision Transformers to detect pneumonia from chest imaging, with an end-to-end, explainable CV pipeline.",
      es: "Fine-tuning de Vision Transformers para detectar neumonía en imagen de tórax, con un pipeline de visión explicable de principio a fin.",
      fr: "Affinage de Vision Transformers pour détecter la pneumonie sur imagerie thoracique, avec un pipeline de vision explicable de bout en bout.",
    },
    summary: {
      en: "A computer-vision project fine-tuning Vision Transformers (ViT) for pneumonia detection from chest imaging, alongside object-detection experiments (YOLOv5), with a dataset-to-inference pipeline and explainability built in.",
      es: "Un proyecto de visión por computador que hace fine-tuning de Vision Transformers (ViT) para detectar neumonía en imagen de tórax, junto a experimentos de detección de objetos (YOLOv5), con un pipeline de dataset a inferencia y explicabilidad integrada.",
      fr: "Un projet de vision par ordinateur affinant des Vision Transformers (ViT) pour détecter la pneumonie sur imagerie thoracique, avec des expériences de détection d'objets (YOLOv5), un pipeline du jeu de données à l'inférence et une explicabilité intégrée.",
    },
    problem: {
      en: "Medical imaging demands models that are both accurate and honest about what they see. The goal was a careful transfer-learning pipeline — from dataset to explainable inference.",
      es: "La imagen médica exige modelos que sean precisos y honestos sobre lo que ven. El objetivo era un pipeline cuidadoso de transfer learning — del dataset a la inferencia explicable.",
      fr: "L'imagerie médicale exige des modèles à la fois précis et honnêtes sur ce qu'ils voient. L'objectif : un pipeline de transfert d'apprentissage soigné — du jeu de données à l'inférence explicable.",
    },
    contributions: {
      en: [
        "Fine-tuned a Vision Transformer (ViT) for pneumonia classification from chest imaging.",
        "Object-detection experiments with YOLOv5 (including pose).",
        "Dataset builder → inference pipeline → explainability (Grad-CAM).",
        "Reproducible, staged experiment structure with an ETL step.",
      ],
      es: [
        "Fine-tuning de un Vision Transformer (ViT) para clasificar neumonía en imagen de tórax.",
        "Experimentos de detección de objetos con YOLOv5 (incluida pose).",
        "Constructor de dataset → pipeline de inferencia → explicabilidad (Grad-CAM).",
        "Estructura de experimentos por etapas y reproducible, con un paso de ETL.",
      ],
      fr: [
        "Affinage d'un Vision Transformer (ViT) pour la classification de la pneumonie sur imagerie thoracique.",
        "Expériences de détection d'objets avec YOLOv5 (y compris la pose).",
        "Constructeur de jeu de données → pipeline d'inférence → explicabilité (Grad-CAM).",
        "Structure d'expériences par étapes et reproductible, avec une étape d'ETL.",
      ],
    },
    tech: [
      { group: "Deep Learning", items: ["PyTorch", "Vision Transformer", "YOLOv5"] },
      { group: "Explainability", items: ["Grad-CAM"] },
      { group: "Pipeline", items: ["ETL", "SQLite / Excel"] },
    ],
    metrics: [
      { label: "Model", value: "ViT" },
      { label: "Task", value: "Pneumonia" },
      { label: "XAI", value: "Grad-CAM" },
    ],
    featured: true,
  },
];

export type SecondaryProject = { title: LS; category: LS; tech: string[] };

export const secondaryProjects: SecondaryProject[] = [
  { title: { en: "Graph Neural Networks & Dynamical Systems", es: "Redes neuronales en grafos y sistemas dinámicos", fr: "Réseaux neuronaux sur graphes et systèmes dynamiques" }, category: { en: "Deep Learning · Teaching", es: "Deep Learning · Docencia", fr: "Deep Learning · Enseignement" }, tech: ["PyTorch Geometric", "RDKit", "Lorenz / BZ"] },
  { title: { en: "FEAST Spectral Eigensolver", es: "Eigensolver espectral FEAST", fr: "Solveur spectral FEAST" }, category: { en: "Numerical Mathematics", es: "Matemática numérica", fr: "Mathématiques numériques" }, tech: ["SciPy", "SymPy", "Eigenproblems"] },
  { title: { en: "Teacher-Evaluation Automation Platform", es: "Plataforma de automatización de evaluación docente", fr: "Plateforme d'automatisation de l'évaluation des enseignants" }, category: { en: "Automation · Data", es: "Automatización · Datos", fr: "Automatisation · Données" }, tech: ["Python", "pandas", "Dashboards"] },
  { title: { en: "Survey Prediction & Open-Ended Analysis", es: "Predicción de encuestas y análisis de preguntas abiertas", fr: "Prédiction d'enquêtes et analyse de questions ouvertes" }, category: { en: "NLP · Statistics", es: "NLP · Estadística", fr: "TAL · Statistique" }, tech: ["LLMs", "pandas", "Dash"] },
  { title: { en: "Computer Vision Coursework", es: "Trabajos de visión por computador", fr: "Travaux de vision par ordinateur" }, category: { en: "Deep Learning", es: "Deep Learning", fr: "Deep Learning" }, tech: ["OpenCV", "YOLO", "PyTorch"] },
  { title: { en: "Analytics in R", es: "Analítica en R", fr: "Analytique en R" }, category: { en: "Statistics", es: "Estadística", fr: "Statistique" }, tech: ["R", "Plotly", "Dash"] },
];

export type SkillGroup = { title: LS; items: string[] };

export const skills: SkillGroup[] = [
  { title: { en: "AI & Machine Learning", es: "IA y Machine Learning", fr: "IA et Machine Learning" }, items: ["PyTorch", "TensorFlow.js", "scikit-learn", "CNN / MLP", "Graph Neural Networks", "Vision Transformers · YOLO", "Persistent homology (ripser / GUDHI)", "LLMs (OpenAI · Anthropic · Llama · HF)"] },
  { title: { en: "Statistics & R", es: "Estadística y R", fr: "Statistique et R" }, items: ["R", "R Shiny", "tidyverse", "ggplot2", "Data mining", "Geospatial analysis", "statsmodels"] },
  { title: { en: "Topology & Pure Mathematics", es: "Topología y matemática pura", fr: "Topologie et mathématiques pures" }, items: ["Hodge theory", "Algebraic topology", "Topological data analysis", "Spectral graph theory", "Mathematical logic", "Numerical methods (FEAST)"] },
  { title: { en: "Data & Databases", es: "Datos y bases de datos", fr: "Données et bases de données" }, items: ["SQL / SQLite", "MongoDB (NoSQL)", "ETL pipelines", "pandas", "NumPy", "PyArrow"] },
  { title: { en: "Frontend & Web", es: "Frontend y web", fr: "Frontend et web" }, items: ["React", "Next.js", "Qwik", "TypeScript", "Tailwind", "Three.js / WebGL"] },
  { title: { en: "Backend, DevOps & Tooling", es: "Backend, DevOps y herramientas", fr: "Backend, DevOps et outils" }, items: ["Python", "Docker", "REST APIs", "Automation", "LaTeX", "Git"] },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
