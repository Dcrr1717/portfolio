/**
 * Portfolio content for Daniel Reinoso (César Daniel Reinoso Reinoso).
 * English copy. Clinical projects are ANONYMIZED (techniques + field only).
 * Co-authors are never named (privacy rule). Only original work is presented as own.
 */

export type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "repo" | "paper" | "talk";
};

export type Motif =
  | "chess" | "cosmos" | "network" | "molecule" | "brain" | "bot"
  | "topology" | "logic" | "spectral" | "wave";

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  pillar: "AI / Machine Learning" | "Topological Data Analysis" | "Pure Mathematics" | "Developer" | "Teaching";
  year: string;
  role: string;
  motif: Motif;
  oneLiner: string;
  summary: string;
  problem: string;
  contributions: string[];
  tech: { group: string; items: string[] }[];
  metrics?: { label: string; value: string }[];
  links?: ProjectLink[];
  featured: boolean;
  sensitive?: boolean;
  privacyNote?: string;
};

export const projects: Project[] = [
  {
    slug: "neural-architecture-persistent-homology",
    index: "01",
    title: "Neural Architecture Discrimination via Persistent Homology",
    category: "Machine Learning · Topology",
    pillar: "AI / Machine Learning",
    year: "2026",
    role: "Lead author & researcher",
    motif: "network",
    oneLiner:
      "A peer-reviewed descriptor that fingerprints trained neural networks using graph theory and persistent homology.",
    summary:
      "A published method (Revista Bases de la Ciencia, 2026) that characterizes a trained neural network from two complementary views of its neuron activations — a functional graph and its persistent homology — fused into a single 24-dimensional descriptor that tells architectural families apart.",
    problem:
      "Can you tell what kind of network you are looking at from its internal activity alone? The goal was a compact, quantitative fingerprint of a trained model's architecture — one grounded in topology, not heuristics.",
    contributions: [
      "Functional-graph view (X₁): ten graph-theoretic invariants of the thresholded activation-correlation graph.",
      "Persistent-homology view (X₂): twelve summary statistics of the Vietoris–Rips persistence of the neuron point cloud.",
      "A fused 24-D descriptor (X₃) with accuracy-free and accuracy-weighted variants.",
      "Benchmarked on a 40-network zoo (30 MLP + 10 CNN, 5 families) across CIFAR-10/100 and SVHN, under a leakage-free cross-validation protocol.",
      "Interactive dashboards to explore the descriptor space; full reproducibility code released.",
    ],
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
    links: [
      { label: "Reproducibility code", href: "https://github.com/Dcrr1717/multiview-nn-descriptor", kind: "repo" },
    ],
    featured: true,
  },
  {
    slug: "hodge-theoretic-descriptor",
    index: "02",
    title: "A Hodge-Theoretic Multiscale Descriptor",
    category: "Pure Mathematics · Data Science",
    pillar: "Pure Mathematics",
    year: "2026",
    role: "Author / co-author",
    motif: "topology",
    oneLiner:
      "Bringing Hodge theory to the mathematics of data — a manuscript in SIAM SIMODS format.",
    summary:
      "A research manuscript, prepared in SIAM Journal on the Mathematics of Data Science (SIMODS) format, that develops a Hodge-theoretic, multiscale descriptor — where algebraic topology meets the mathematics of data.",
    problem:
      "Hodge theory decomposes complex objects into clean, orthogonal pieces. The question this work engages: can that decomposition yield a principled, multiscale way to describe data?",
    contributions: [
      "A descriptor grounded in Hodge theory and combinatorial topology.",
      "A multiscale construction with theoretical backing.",
      "Prepared in SIAM SIMODS format with reproducible, pgfplots-driven figure data.",
    ],
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
    title: "Spectral Distances for Topological Data Analysis",
    category: "Topological Data Analysis",
    pillar: "Topological Data Analysis",
    year: "2026",
    role: "Researcher",
    motif: "spectral",
    oneLiner:
      "Measuring how far apart complex networks are, through the spectra of their graph structure.",
    summary:
      "Research on spectral distances between multigraphs — comparing networks through the eigenvalues of their associated operators — applied to real citation networks and controlled synthetic benchmarks, with interactive visualizations.",
    problem:
      "How do you quantify the difference between two networks in a way that respects their global structure? Spectral distances give a principled, topology-aware answer.",
    contributions: [
      "Spectral distance measures between multigraphs based on their operator spectra.",
      "Applied to a real citation network (arXiv HEP-Ph) and controlled synthetic graphs.",
      "Exploratory analysis combining PCA, graph statistics and persistence.",
      "Interactive HTML visualizations of the results.",
    ],
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
    title: "Recurrent Networks & Topology, in 3D",
    category: "AI · Topology · 3D",
    pillar: "AI / Machine Learning",
    year: "2026",
    role: "Concept, ML & graphics",
    motif: "cosmos",
    oneLiner:
      "An interactive lab where LSTM networks meet topological data analysis on real scientific data — climate, solar, Kepler — visualized in 3D.",
    summary:
      "An interactive lab that runs LSTM / recurrent models in the browser (TensorFlow.js) over real scientific time series — climate, solar activity and Kepler light curves — computes topological and spectral metrics, and renders it all in 3D through React Three Fiber.",
    problem:
      "The behavior of a recurrent network is hard to intuit from flat plots — and harder still to connect to the topology of the data it learns. I wanted a single, spatial, interactive space that made both visible, with no server required.",
    contributions: [
      "In-browser LSTM inference over real datasets (climate, solar, Kepler) with TensorFlow.js.",
      "Topological metrics (homology) and spectral metrics computed client-side.",
      "Interactive 3D scenes with React Three Fiber and three.js, tuned for 60 fps.",
      "Guided sections: theory, formulas, a live cosmos lab and applied problems.",
    ],
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
    links: [
      { label: "Source", href: "https://github.com/Dcrr1717/rnn-cosmos", kind: "repo" },
    ],
    featured: true,
  },
  {
    slug: "graph-ml-parkinsons",
    index: "05",
    title: "Graph Machine Learning for Parkinson's Disease",
    category: "AI in Health · Neuroscience",
    pillar: "AI / Machine Learning",
    year: "2026",
    role: "Modeling & analysis",
    motif: "brain",
    oneLiner:
      "Graph-based machine learning and biostatistics on public Parkinson's cohorts.",
    summary:
      "Research in neurodegeneration: graph-based machine learning and statistical analysis on public Parkinson's cohort data (the PPMI initiative), with reproducible, containerized pipelines aimed at Q1 publication.",
    problem:
      "Extracting useful clinical signal from complex longitudinal data demands methods that are robust, reproducible and statistically rigorous.",
    contributions: [
      "Graph-based modeling and machine learning on a public cohort (PPMI).",
      "Statistical validation with statsmodels and SciPy.",
      "Reproducible, containerized pipelines with Docker.",
      "Manuscript preparation targeting Q1 journals.",
    ],
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
    privacyNote:
      "Described only by techniques and medical field. No collaborators, patients, or data are named or published.",
  },
  {
    slug: "mathematical-logic-incompleteness",
    index: "06",
    title: "Mathematical Logic & Incompleteness",
    category: "Pure Mathematics · Logic",
    pillar: "Pure Mathematics",
    year: "2026",
    role: "Author / co-author",
    motif: "logic",
    oneLiner:
      "A research manuscript in mathematical logic, around Gödel's incompleteness and formal systems.",
    summary:
      "A research manuscript in mathematical logic engaging rigorously with themes around Gödel's incompleteness theorems and the limits of formal systems.",
    problem:
      "The limits of formal reasoning are subtle and beautiful. This work engages with them precisely, in the language of formal logic.",
    contributions: [
      "A formal treatment of incompleteness and formal-systems themes.",
      "Written as a research manuscript in LaTeX.",
    ],
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
    title: "Engine-Backed Chess Learning Platform",
    category: "Full-Stack Web · EdTech",
    pillar: "Developer",
    year: "2026",
    role: "Design & full-stack development",
    motif: "chess",
    oneLiner:
      "A modular web app that teaches chess step by step, with a real engine behind the board.",
    summary:
      "A web application that teaches chess progressively — from how each piece moves to full games with PGN notation — built with React 19 and deployed on Vercel with continuous integration.",
    problem:
      "Learning chess from scratch is intimidating. The challenge was turning abstract concepts into a guided, tactile, frictionless experience that works as well on a phone as on a desktop.",
    contributions: [
      "A progressive, module-based SPA with client-side routing.",
      "Interactive board with legal-move validation (chess.js) and engine analysis (Stockfish).",
      "Global state with Zustand; light/dark mode; fully responsive.",
      "Continuous deployment on Vercel — every push to main redeploys.",
    ],
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
      { label: "View app", href: "https://ajedrez-bienestar-academico.vercel.app", kind: "live" },
      { label: "Source", href: "https://github.com/dcrr1717/ajedrez-bienestar-academico", kind: "repo" },
    ],
    featured: true,
  },
  {
    slug: "ai-github-automation",
    index: "08",
    title: "AI-Driven GitHub Automation",
    category: "AI Automation · Developer Tooling",
    pillar: "Developer",
    year: "2026",
    role: "Design & implementation",
    motif: "bot",
    oneLiner:
      "A tool that generates and improves GitHub profiles on a schedule using large language models.",
    summary:
      "An automation tool that orchestrates large language models (OpenAI and Gemini) with the GitHub API to generate and polish profiles on a schedule — with separate modules for generation, beautification, planning and upload.",
    problem:
      "Keeping a polished technical presence on GitHub is tedious and repetitive. The goal was to automate it with judgment, not spam.",
    contributions: [
      "API integration: GitHub (PyGithub / GitPython), OpenAI and Google GenAI.",
      "Separate modules: generator, profile beautifier, scheduler and uploader.",
      "Scheduled execution with rate control and rich console output.",
      "Configuration via environment variables with careful secret handling.",
    ],
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
    privacyNote:
      "Contains an .env with credentials. Before publishing it must be removed from history and its tokens rotated.",
  },
  {
    slug: "mathematical-animations-manim",
    index: "09",
    title: "Mathematical Animations for Teaching",
    category: "Math Communication · Animation",
    pillar: "Teaching",
    year: "2026",
    role: "Author & educator",
    motif: "wave",
    oneLiner:
      "Original Manim animations that turn abstract mathematics into something you can watch.",
    summary:
      "A set of original animations built with Manim to teach mathematics to university students, turning abstract concepts into clear, visual narratives for an interactive presentation.",
    problem:
      "Some mathematical ideas only click when you watch them move. The goal was teaching animations that make abstraction tangible.",
    contributions: [
      "Original mathematical animations authored in Manim.",
      "Interactive presentation material for university teaching.",
      "A focus on clarity and visual intuition over decoration.",
    ],
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
];

export type SecondaryProject = {
  title: string;
  category: string;
  tech: string[];
};

export const secondaryProjects: SecondaryProject[] = [
  { title: "Graph Neural Networks & Dynamical Systems", category: "Deep Learning · Teaching", tech: ["PyTorch Geometric", "RDKit", "Lorenz / BZ"] },
  { title: "FEAST Spectral Eigensolver", category: "Numerical Mathematics", tech: ["SciPy", "SymPy", "Eigenproblems"] },
  { title: "Teacher-Evaluation Automation Platform", category: "Automation · Data", tech: ["Python", "pandas", "Dashboards"] },
  { title: "Survey Prediction & Open-Ended Analysis", category: "NLP · Statistics", tech: ["LLMs", "pandas", "Dash"] },
  { title: "Computer Vision Coursework", category: "Deep Learning", tech: ["OpenCV", "YOLO", "PyTorch"] },
  { title: "Analytics in R", category: "Statistics", tech: ["R", "Plotly", "Dash"] },
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "AI & Machine Learning",
    items: [
      "PyTorch",
      "TensorFlow.js",
      "scikit-learn",
      "CNN / MLP",
      "Graph Neural Networks",
      "Persistent homology (ripser / GUDHI)",
      "LLMs (OpenAI · Anthropic · Llama · Hugging Face)",
    ],
  },
  {
    title: "Topology & Pure Mathematics",
    items: [
      "Hodge theory",
      "Algebraic topology",
      "Topological data analysis",
      "Spectral graph theory",
      "Mathematical logic",
      "Numerical methods (FEAST)",
    ],
  },
  {
    title: "Data Science & Statistics",
    items: ["pandas", "NumPy", "SciPy", "statsmodels", "networkx", "Plotly / Dash", "R"],
  },
  {
    title: "Frontend & Web",
    items: ["React", "Next.js", "Qwik", "TypeScript", "Tailwind", "Three.js / WebGL"],
  },
  {
    title: "Backend, DevOps & Tooling",
    items: ["Python", "Docker", "REST APIs", "Automation", "LaTeX", "Git"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
