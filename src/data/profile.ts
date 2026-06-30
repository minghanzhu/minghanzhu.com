export const profile = {
  name: "Minghan (Max) Zhu",
  role: "Research engineer and Associate Specialist, Department of Neurology, UCSF.",
  location: "San Francisco, CA",
  email: "mz2716@columbia.edu",
  linkedin: "https://www.linkedin.com/in/minghan-zhu",
  affiliations: [
    {
      name: "UCSF Weill Institute for Neurosciences",
      url: "https://weill.ucsf.edu/content/ucsf-weill-institute-for-neurosciences",
    },
  ],
  heroImage: "/assets/neural-hardware-lab.jpg",
  profileImage: "/assets/minghan-zhu-profile.jpg",
  profileImageAlt: "Minghan Zhu at the San Francisco waterfront with the Bay Bridge in the background.",
  diagramImage: "/assets/dbs-system-illustration.jpg",
  intro:
    "I build the data infrastructure, neural signal models, and clinician-facing software behind adaptive DBS research at UCSF. My work turns implanted-device recordings, wearable data, sleep measures, and clinical assessments into reproducible ML pipelines for biomarker-guided neuromodulation.",
  bio: [
    "I am a computer scientist working between machine learning, neural engineering, and clinical research operations. In UCSF Neurology, I help design and maintain a custom adaptive DBS pipeline for Parkinson's disease studies, connecting simulator-driven parameter testing, probabilistic stimulation-effect models, surrogate neural-signal generation, symptom-profile metrics, and constrained optimization for clinician-reviewed parameter selection.",
    "That work sits on longitudinal, multimodal data from implanted sensing devices, wearables, sleep recordings, clinical assessments, and device logs. My day-to-day focus is making experimental ML systems reliable, reproducible, and usable by investigators and clinicians, while keeping enough domain context to reason about neural signals, device constraints, and the clinical questions behind the code.",
    "Before UCSF, I built data-heavy software across healthcare ETL, LLM search, IoT systems, and semantic catalog mapping. That background shaped how I approach research engineering: rigorous enough for science, practical enough for real workflows, and designed so specialists can inspect, trust, and extend the system.",
  ],
  focus: [
    "Adaptive DBS ML pipelines for Parkinson's disease and broader adaptive neuromodulation",
    "Multimodal neural, wearable, sleep, clinical, and device-log data infrastructure",
    "Patient-specific signal processing, probabilistic modeling, surrogate data generation, and constrained optimization",
    "Clinician-facing decision-support visualizations and reproducible research software",
  ],
  quickStats: [
    {
      value: "5",
      label: "integrated modules in a custom aDBS ML pipeline",
    },
    {
      value: "24",
      label: "patient longitudinal study data design across neural, wearable, sleep, and clinical sources",
    },
    {
      value: "2",
      label: "neural decoding conference publications",
    },
    {
      value: "1",
      label: "patent application publication in catalog mapping",
    },
  ],
};

export const experience = [
  {
    company: "University of California, San Francisco (UCSF)",
    location: "San Francisco, CA",
    title: "Associate Specialist, Department of Neurology, UCSF",
    dates: "May 2025 - Present",
    summary:
      "Building ML and data infrastructure for adaptive DBS research, from neural signal processing to clinician-reviewed parameter-selection workflows.",
    bullets: [
      "Design and maintain pipelines for implanted neural recordings, wearable motor data, sleep measures, clinical assessments, and device telemetry.",
      "Develop ML modules for adaptive DBS research, including stimulation simulation, probabilistic biomarker response modeling, surrogate LFP generation, symptom-profile metrics, and constrained optimization.",
      "Build clinician-facing visualization and analysis tools that support review of adaptive stimulation parameters and experimental outcomes.",
    ],
    tags: ["Adaptive DBS", "Neural devices", "Signal processing", "Clinical ML"],
  },
  {
    company: "ANIUNA Inc.",
    location: "New York, NY",
    title: "Co-Founder & Solutions Architect",
    dates: "Sep 2024 - May 2025",
    summary:
      "Co-founded an AI pet-tech startup funded by the Eugene M. Lang Center.",
    bullets: [
      "Designed and implemented a custom ERP system for pet product manufacturers, integrating with CRM and inventory management systems.",
      "Reduced manual data entry time by 67% through workflow automation.",
      "Used SDXL, ControlNet, Shap-E, and agentic LLMs to build a semi-supervised prototype pipeline for custom pet apparel design.",
    ],
    tags: ["ERP", "LLMs", "SDXL", "ControlNet", "Supply chain"],
  },
  {
    company: "Cerno Labs",
    location: "New York, NY",
    title: "Software Engineer",
    dates: "Aug 2023 - May 2025",
    summary:
      "Built LLM-powered search and due-diligence software for vertical research.",
    bullets: [
      "Designed and built an enterprise-grade LLM search engine with a Next.js frontend and Redis caching for high-speed results.",
      "Developed an agent-based copilot for financial due diligence with real-time analysis of filings, reports, and social media.",
      "Helped triage leads and generate investment insights through research automation.",
    ],
    tags: ["LLM search", "Next.js", "Redis", "Agents", "Finance"],
  },
  {
    company: "Cadence OneFive Inc.",
    location: "New York, NY",
    title: "Software & Data Engineer Intern",
    dates: "Apr 2023 - Aug 2023",
    summary:
      "Created housing data pipelines and analytics tooling for carbon analysis.",
    bullets: [
      "Developed Airflow pipelines for municipal housing data ingestion, expanding coverage and improving accuracy.",
      "Built a web portal for US housing carbon analysis with Laravel, PHP, and React.",
      "Reduced manual entry time by 37%.",
    ],
    tags: ["Airflow", "React", "Laravel", "Housing data"],
  },
  {
    company: "Cedar Cares Inc.",
    location: "New York, NY",
    title: "Software Engineer Intern",
    dates: "May 2022 - Aug 2022",
    summary:
      "Improved healthcare data ingestion, reconciliation, and support diagnostics.",
    bullets: [
      "Redesigned Cedar's SFTP data puller with Python, Django, PostgreSQL, and Airflow.",
      "Consolidated 43 providers, patched an ETL vulnerability, and built HIPAA-compliant pipelines for real-time patient record reconciliation.",
      "Standardized alerting runbooks and reduced support engineering time by deduplicating AWS CloudWatch and Sentry diagnoses.",
    ],
    tags: ["Healthcare data", "Python", "Django", "Airflow", "PostgreSQL"],
  },
  {
    company: "Your Fare Inc.",
    location: "Austin, TX",
    title: "Software Engineer",
    dates: "Feb 2021 - Jul 2021",
    summary:
      "Built delivery analytics, dashboard workflows, and menu-mapping automation.",
    bullets: [
      "Developed a dynamic client dashboard with Angular and Blazor, integrating third-party delivery APIs and real-time analytics.",
      "Improved client retention by 23.5%.",
      "Designed semantic mapping tools in Python using Word2vec and fastText to reduce manual menu mapping by 66.2%.",
    ],
    tags: ["Angular", "Blazor", "NLP", "Delivery APIs"],
  },
  {
    company: "Your Fare Inc.",
    location: "Austin, TX",
    title: "Software Engineer Intern",
    dates: "Sep 2020 - Feb 2021",
    summary:
      "Co-invented a semantic catalog mapping system later issued as a patent.",
    bullets: [
      "Co-invented a semantic-based catalog data mapping system filed on December 30, 2020 and issued on June 30, 2022.",
      "Patent: US20220207507A1.",
    ],
    tags: ["Patent", "Semantic mapping", "Catalog data"],
  },
];

export const research = [
  {
    lab: "University of California, San Francisco (UCSF)",
    context: "Department of Neurology / UCSF Weill Institute for Neurosciences",
    dates: "May 2025 - Present",
    title: "Associate Specialist",
    summary:
      "Research role focused on adaptive DBS, neural signal analysis, and ML/data infrastructure for movement, motivation, and sleep studies, with clinician-facing visualization tools for aDBS optimization.",
  },
  {
    lab: "Columbia University",
    context: "Prof. Gil Zussman",
    dates: "Jan 2021 - May 2021",
    title: "Research Assistant",
    summary:
      "Used signal analysis and machine learning in the NSF-funded COSMOS smart-city IoT intersections project to optimize traffic flow, reduce congestion, and improve urban safety in New York City.",
  },
  {
    lab: "Columbia University",
    context: "Prof. Henning Schulzrinne",
    dates: "May 2019 - Dec 2019",
    title: "Research Assistant",
    summary:
      "Developed a heuristic system that automatically summarizes local government meeting videos using language processing and computer vision to extract key segments.",
  },
];

export const publications = [
  {
    type: "Conference poster",
    title: "Machine Learning Decoding of Emotional Valence from Intracranial Cortical and Subcortical Electrophysiological Signals",
    venue: "Cognitive Neuroscience Society, Poster Session D",
    dates: "Mar 9, 2026",
    authors: "Max Zhu, Jinxiao Zhang, Clay Smyth, Lexin Li, Philip Starr, Simon Little",
    url: "https://www.cogneurosociety.org/poster/?id=7524",
    summary:
      "Poster on decoding emotional valence from intracranial cortical and subcortical electrophysiological signals.",
  },
  {
    type: "Conference abstract",
    title: "Machine Learning Decoding of Emotional Responses to Stimuli from Intracranial Brain Signals",
    venue: "Neuroscience 2025, Session LBP047 - H.04. Emotion",
    dates: "Nov 17, 2025",
    authors: "M. Zhu, J. Zhang, C. Smyth, P. A. Starr, L. Li, S. Little",
    url: "https://www.abstractsonline.com/pp8/#!/21171/presentation/42854",
    summary:
      "Abstract on machine-learning classification of emotional responses from intracranial neural signals.",
  },
  {
    type: "Patent application publication",
    title: "Automatic Creation of Master Catalog and Catalog Map for Reconciliation of Merchant Point-of-Sale Catalog and Third-Party Service Catalog",
    venue: "US20220207507A1",
    dates: "Published Jun 30, 2022",
    authors: "Charles Robert Berg, Minghan Zhu, Christopher David Monk",
    url: "https://patents.google.com/patent/US20220207507A1/en?oq=US20220207507A1",
    summary:
      "Patent application publication for automated catalog mapping and reconciliation across merchant point-of-sale and third-party service catalogs.",
  },
];

export const education = [
  {
    school: "Columbia University",
    location: "New York, NY",
    credentials: [
      "Master of Science in Computer Science, Sep 2021 - Feb 2023",
      "Bachelor of Science in Computer Science, Sep 2018 - May 2020",
    ],
  },
  {
    school: "Brandeis University",
    location: "Waltham, MA",
    credentials: [
      "Majored in Computer Science before transferring to Columbia University, Sep 2015 - May 2018",
    ],
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "Java", "C#", "TypeScript", "JavaScript", "SQL", "Go", "C++", "Swift", "MATLAB", "R"],
  },
  {
    group: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Flask", "Django", "Spring Boot", ".NET Core"],
  },
  {
    group: "ML & Data",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Airflow", "Redis", "PostgreSQL", "MongoDB"],
  },
  {
    group: "Cloud & Infrastructure",
    items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub CI/CD"],
  },
];
