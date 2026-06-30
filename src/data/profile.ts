export const profile = {
  name: "Minghan (Max) Zhu",
  role: "Associate Specialist, Department of Neurology, UCSF.",
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
  diagramImage: "/assets/dbs-system-illustration.jpg",
  intro:
    "I design production software, data pipelines, and applied AI workflows across neural signal analysis, financial research, health data, and operations-heavy products.",
  focus: [
    "Adaptive DBS research tooling and neural signal analysis",
    "Data pipelines, ETL reliability, and clinician-facing visualizations",
    "Applied AI prototyping for manufacturing and supply-chain workflows",
  ],
  quickStats: [
    {
      value: "67%",
      label: "less manual data entry in custom ERP workflows",
    },
    {
      value: "45%",
      label: "shorter design cycles through AI prototype pipelines",
    },
    {
      value: "43",
      label: "provider data pulls consolidated into HIPAA-conscious ETL",
    },
    {
      value: "1",
      label: "issued patent for semantic catalog data mapping",
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
      "Building data and ML systems for neural signal analysis in adaptive DBS research.",
    bullets: [
      "Design and develop data and machine-learning pipelines to analyze neural signals related to movement and motivation for aDBS research.",
      "Build real-time data processing and visualization tools for clinicians to monitor and analyze neural signals.",
      "Develop machine-learning pipelines and visualizations in collaboration with clinicians for aDBS optimization.",
    ],
    tags: ["Neural signals", "ML pipelines", "Visualization", "Clinical tooling"],
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
      "Research role focused on adaptive DBS, neural signal analysis, and ML/data pipelines for movement and motivation studies, with clinician-facing visualization tools for aDBS optimization.",
  },
  {
    lab: "Columbia University",
    context: "Prof. Gil Zussman",
    dates: "Jan 2021 - May 2021",
    title: "Research Assistant",
    summary:
      "Used signal analysis and machine learning in the NSF-funded COSMOS Smart City Intersections project to optimize traffic flow, reduce congestion, and improve urban safety in New York City.",
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
