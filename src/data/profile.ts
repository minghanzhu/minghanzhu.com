export const profile = {
  name: "Minghan (Max) Zhu",
  role: "Software engineer and Associate Specialist, Department of Neurology, UCSF.",
  headline: "Software Engineer · UCSF Neurology",
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
  researchIntro:
    "My work focuses on adaptive deep brain stimulation for Parkinson's disease: turning recordings from implanted devices, wearables, sleep, and clinic visits into tools that help decide how stimulation should adapt to each patient.",
  intro:
    "Hi, I'm Max. I'm a software engineer in the Little/Starr Lab at UCSF's Movement Disorders and Neuromodulation Center, working with Dr. Simon Little and Dr. Phil Starr. I build software and ML tools for adaptive deep brain stimulation (DBS): brain implants for Parkinson's disease that adapt to each patient's brain activity.",
  motivation:
    "I got into this work because I wanted to use machine learning and software for real problems in neuroscience and clinical research, especially neuromodulation. It's also personal: my grandma had Parkinson's disease and Alzheimer's, and watching her struggle made me want to build technology that improves life for patients and their families. In the long run, I hope to help move neuromodulation research forward by building reliable, practical tools that clinicians and researchers can use to improve patient outcomes.",
  bio: [
    "I'm a software engineer working across machine learning, neural engineering, and clinical research. At UCSF, I help build a pipeline for adaptive DBS studies: it simulates stimulation settings, models how the brain responds, and helps clinicians choose parameters they can review and trust.",
    "Most of my work is with long-running, messy data: recordings from implanted devices, wearables, sleep studies, and clinic visits. My job is to make it reliable enough that researchers and clinicians can actually use it.",
    "Before UCSF, I built software in very different places: healthcare data pipelines, smart-city IoT research, housing data analytics, and semantic catalog mapping. That mix taught me to build things rigorous enough for science and practical enough for the people using them.",
  ],
  focus: [
    "Adaptive DBS ML pipelines for Parkinson's disease and broader adaptive neuromodulation",
    "Multimodal neural, wearable, sleep, clinical, and device-log data infrastructure",
    "Patient-specific signal processing, probabilistic modeling, surrogate data generation, and constrained optimization",
    "Clinician-facing decision-support visualizations and reproducible research software",
  ],
  quickStats: [
    { value: "5", label: "modules in a custom aDBS ML pipeline" },
    { value: "24", label: "patient longitudinal multimodal study design" },
    { value: "3", label: "neuroscience publications and presentations" },
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
    context: "Little/Starr Lab · Movement Disorders and Neuromodulation Center · UCSF Weill Institute for Neurosciences",
    dates: "May 2025 - Present",
    title: "Associate Specialist",
    summary:
      "Research role focused on adaptive DBS, neural signal analysis, and ML/data infrastructure for movement, motivation, and sleep studies, with clinician-facing visualization tools for aDBS optimization.",
    tags: ["Adaptive DBS", "Neural signals", "Clinical ML"],
  },
  {
    lab: "Columbia University",
    context: "Prof. Gil Zussman",
    dates: "Jan 2021 - May 2021",
    title: "Research Assistant",
    summary:
      "Used signal analysis and machine learning in the NSF-funded COSMOS smart-city IoT intersections project to optimize traffic flow, reduce congestion, and improve urban safety in New York City.",
    tags: ["IoT", "Signal analysis", "Smart cities"],
  },
  {
    lab: "Columbia University",
    context: "Prof. Henning Schulzrinne",
    dates: "May 2019 - Dec 2019",
    title: "Research Assistant",
    summary:
      "Developed a heuristic system that automatically summarizes local government meeting videos using language processing and computer vision to extract key segments.",
    tags: ["NLP", "Computer vision", "Summarization"],
  },
];

export const publications = [
  {
    type: "Preprint",
    title: "Device-embedded accelerometry complements neural signals for tracking parkinsonian motor states",
    venue: "bioRxiv · doi:10.64898/2026.07.08.737286",
    dates: "Jul 9, 2026",
    authors:
      "Tao Liu, Jiaang Yao, Bahman Abdi-Sargezeh, Abhinav Sharma, Camille Lasbareilles, Robert Tsi Lok Ho, Jackson TS Cheung, Timothy Denison, Huiling Tan, Wolf-Julian Neumann, Minghan Max Zhu, Sebastian Liu, Philip A Starr, Simon Little, Ashwini Oswal",
    url: "https://doi.org/10.64898/2026.07.08.737286",
    figure: {
      src: "/assets/publications/accelerometry-fig1.jpg",
      alt: "Figure 1 from the paper: cortical and STN recording contact locations, a person wearing an implanted sensing DBS device and a PKG watch with example ECoG, LFP, accelerometer and symptom-score traces, and a feature matrix used to predict dyskinesia and bradykinesia scores.",
      caption: "Fig. 1 · Multimodal recordings and feature extraction during naturalistic behaviour. From Liu, Yao et al. (2026), bioRxiv, CC BY 4.0.",
    },
    summary:
      "Across 1,900+ hours of chronic STN, cortical, and device-embedded accelerometry recordings, accelerometry tracked bradykinesia and dyskinesia across stimulation conditions and outperformed neural features for symptom decoding, supporting its use as a behavioural biomarker for adaptive DBS.",
  },
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
    degree: "M.S. · Computer Science",
    school: "Columbia University",
    location: "New York, NY",
    dates: "Sep 2021 - Feb 2023",
  },
  {
    degree: "B.S. · Computer Science",
    school: "Columbia University",
    location: "New York, NY",
    dates: "Sep 2018 - May 2020",
  },
  {
    degree: "Computer Science coursework, before transferring to Columbia",
    school: "Brandeis University",
    location: "Waltham, MA",
    dates: "Sep 2015 - May 2018",
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
