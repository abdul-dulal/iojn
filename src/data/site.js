const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const site = {
  name: "IJA",
  fullName: "International Online Journal Network",
  tagline: "Global Research & Innovation Network",
  founded: 2020,
  address:
    "20-21 Farmview Super Market, Level 05, Farmgate, Dhaka-1215, Bangladesh",
  phone: "+880 1917-601590",
  phoneHref: "tel:+8801917601590",
  email: "ija.org@gmail.com",
  hours: "Sat – Thu, 9:00 AM – 6:00 PM",
  mapQuery: "Farmview Super Market, Farmgate, Dhaka",
};

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Discover Us",
    children: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Events", href: "/events" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  // { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

// Flat list of every nav page (dropdown children included)
export const flatNavLinks = navLinks.flatMap((l) => l.children ?? [l]);

export const images = {
  heroMain: img("1581091226825-a6a2a5aee158", 1100),
  heroSecondary: img("1532187863486-abf9dbad1b69", 600),
  aboutMain: img("1582719471384-894fbb16e074", 1100),
  aboutSecondary: img("1522202176988-66273c2fd55f", 700),
  why: img("1507413245164-6160d8298b31", 1800),
};

export const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Research Projects",
    note: "Completed across 12 disciplines",
  },
  {
    value: 100,
    suffix: "+",
    label: "Published Articles",
    note: "In peer-reviewed journals",
  },
  {
    value: 50,
    suffix: "+",
    label: "Academic Partners",
    note: "Universities & institutes",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years of Experience",
    note: "Collective team expertise",
  },
];

export const researchAreas = [
  {
    icon: "HeartPulse",
    title: "Public Health",
    text: "Research focused on improving health outcomes, disease prevention and community wellbeing.",
  },
  {
    icon: "Leaf",
    title: "Environmental Health",
    text: "Studies addressing environmental challenges, climate exposure and sustainable development.",
  },
  {
    icon: "Users",
    title: "Social Development",
    text: "Evidence-based research that informs policy and strengthens communities.",
  },
  {
    icon: "GraduationCap",
    title: "Academic Research",
    text: "Supporting researchers and institutions with rigorous, high-quality academic inquiry.",
  },
  {
    icon: "Lightbulb",
    title: "Human Capacity Development",
    text: "Training and mentorship that equip professionals and early-career researchers.",
  },
  {
    icon: "Cpu",
    title: "Innovation & Technology",
    text: "Applying digital tools and novel methods to solve modern research challenges.",
  },
];

export const services = [
  {
    icon: "ClipboardList",
    title: "Protocol Development",
    text: "Study design, sampling strategy, ethics documentation and a clear research plan.",
    tags: ["Study design", "Ethics"],
  },
  {
    icon: "PenTool",
    title: "Article Writing",
    text: "Manuscript preparation aligned with journal guidelines and academic standards.",
    tags: ["Manuscripts", "Editing"],
  },
  {
    icon: "Search",
    title: "Article Research",
    text: "Systematic literature review, methodology selection and evidence synthesis.",
    tags: ["Literature review", "Meta-analysis"],
  },
  {
    icon: "ChartColumn",
    title: "Data Analysis",
    text: "Statistical analysis, interpretation, visualization and publication-ready reporting.",
    tags: ["SPSS / R / Stata", "Visualization"],
  },
  {
    icon: "Send",
    title: "Publication Support",
    text: "Journal selection, submission, reviewer responses and end-to-end guidance.",
    tags: ["Submission", "Peer review"],
  },
  {
    icon: "BookOpen",
    title: "Journal Management",
    text: "Journal development, editorial workflows, indexing strategy and operations.",
    tags: ["Editorial", "Indexing"],
  },
];

export const processSteps = [
  {
    title: "Research Idea",
    text: "We refine your question, objectives and significance into a focused research concept.",
  },
  {
    title: "Protocol Development",
    text: "A robust protocol covering design, sampling, instruments and ethical approval.",
  },
  {
    title: "Data Collection",
    text: "Structured field or secondary data collection with quality control at every stage.",
  },
  {
    title: "Data Analysis",
    text: "Rigorous statistical analysis and clear interpretation of the findings.",
  },
  {
    title: "Article Development",
    text: "Findings shaped into a compelling, well-structured scientific manuscript.",
  },
  {
    title: "Publication",
    text: "Targeted journal submission and expert support through peer review.",
  },
  {
    title: "Knowledge & Impact",
    text: "Dissemination to policymakers, practitioners and the wider research community.",
  },
];

export const benefits = [
  {
    icon: "Award",
    title: "Experienced Research Professionals",
    text: "Multidisciplinary experts in health, environment and social science.",
  },
  {
    icon: "Microscope",
    title: "Evidence-Based Approach",
    text: "Every recommendation grounded in sound methodology and data.",
  },
  {
    icon: "Globe",
    title: "International Collaboration",
    text: "A network of partners and reviewers across five regions.",
  },
  {
    icon: "Send",
    title: "Professional Publication Support",
    text: "Guidance from manuscript to acceptance in reputable journals.",
  },
  {
    icon: "Database",
    title: "Data-Driven Research",
    text: "Modern statistical tools and transparent, reproducible analysis.",
  },
  {
    icon: "ShieldCheck",
    title: "Quality & Confidentiality",
    text: "Strict data protection, originality checks and ethical standards.",
  },
];

export const achievements = [
  { value: 500, suffix: "+", label: "Successful Projects" },
  { value: 100, suffix: "+", label: "Publications" },
  { value: 50, suffix: "+", label: "Partner Organizations" },
  { value: 12, suffix: "", label: "Research Areas" },
];

// Illustrative partner wordmarks — replace with real partner logos (SVG/PNG) when available.
export const partners = [
  { name: "Northbridge University", icon: "GraduationCap", color: "#145DA0" },
  { name: "Helix Health Institute", icon: "HeartPulse", color: "#D14D72" },
  { name: "Verdant Earth Lab", icon: "Leaf", color: "#2E9E5B" },
  { name: "Meridian Research", icon: "Globe", color: "#0F8B8D" },
  { name: "Axiom Data Society", icon: "Database", color: "#6B4FD8" },
  { name: "Lumen Academy", icon: "Lightbulb", color: "#E09F1F" },
  { name: "Atlas Public Health", icon: "Building2", color: "#0B1F33" },
  { name: "Quantum Bio Sciences", icon: "Atom", color: "#1E88C8" },
];

export const publications = [
  {
    image: img("1576091160399-112ba8d25d1d", 900),
    category: "Public Health",
    date: "Sep 12, 2026",
    read: "8 min read",
    title:
      "Community-Based Interventions for Maternal Health in Low-Resource Settings",
    text: "A mixed-methods evaluation of outreach programs and their effect on antenatal care uptake.",
  },
  {
    image: img("1542601906990-b4d3fb778b09", 900),
    category: "Environmental Health",
    date: "Aug 28, 2026",
    read: "6 min read",
    title:
      "Urban Air Quality and Respiratory Outcomes: A Five-Year Cohort Study",
    text: "Linking particulate exposure data with hospital admissions across rapidly growing cities.",
  },
  {
    image: img("1551288049-bebda4e38f71", 900),
    category: "Research",
    date: "Aug 09, 2026",
    read: "5 min read",
    title: "Reproducible Statistical Workflows for Health Researchers",
    text: "Practical guidance on transparent analysis pipelines using open-source tools.",
  },
  {
    image: img("1522202176988-66273c2fd55f", 900),
    category: "Academic Development",
    date: "Jul 21, 2026",
    read: "7 min read",
    title: "Building Research Capacity Among Early-Career Academics",
    text: "Lessons from a two-year mentorship program spanning twelve institutions.",
  },
];

export const events = [
  {
    day: "18",
    month: "Oct",
    year: "2026",
    type: "Conference",
    title: "International Conference on Public & Environmental Health",
    location: "Dhaka, Bangladesh · Hybrid",
    time: "9:00 AM – 5:00 PM",
    text: "Two days of keynotes, paper presentations and panels on health and sustainability.",
  },
  {
    day: "07",
    month: "Nov",
    year: "2026",
    type: "Workshop",
    title: "Advanced Data Analysis with R for Health Researchers",
    location: "Online · Live Session",
    time: "3:00 PM – 6:00 PM",
    text: "A hands-on workshop on regression modelling, visualization and reproducible reports.",
  },
  {
    day: "02",
    month: "Dec",
    year: "2026",
    type: "Seminar",
    title: "Scientific Writing & Publishing in High-Impact Journals",
    location: "Farmgate, Dhaka · In person",
    time: "10:00 AM – 1:00 PM",
    text: "Editors and reviewers share what makes a manuscript stand out in peer review.",
  },
];

export const testimonials = [
  {
    image: img("1573496359142-b8d87734a5a2", 200),
    name: "Dr. Nusrat Jahan",
    role: "Assistant Professor, Public Health",
    org: "State University",
    quote:
      "IOJN's protocol and data analysis support transformed my study. Their team was rigorous, responsive and genuinely invested in the quality of the research.",
  },
  {
    image: img("1560250097-0b93528c311a", 200),
    name: "Dr. Michael Harrington",
    role: "Senior Research Fellow",
    org: "Institute of Global Health",
    quote:
      "From literature review to final submission, the process was seamless. Our manuscript was accepted after a single round of revisions.",
  },
  {
    image: img("1580489944761-15a19d654956", 200),
    name: "Farhana Rahman",
    role: "PhD Candidate, Environmental Science",
    org: "University of Dhaka",
    quote:
      "The statistical guidance I received was clear and educational. I didn't just get results, I understood them and could defend them confidently.",
  },
  {
    image: img("1507003211169-0a1dd7228f2d", 200),
    name: "Dr. Ahmed Karim",
    role: "Program Director",
    org: "Community Health Initiative",
    quote:
      "A trustworthy research partner. Their evidence helped us redesign a community program that now reaches thousands of families.",
  },
];

export const regions = [
  {
    name: "North America",
    lon: -98,
    lat: 40,
    partners: 8,
    countries: "USA · Canada",
  },
  {
    name: "Europe",
    lon: 10,
    lat: 50,
    partners: 12,
    countries: "UK · Germany · Sweden",
  },
  {
    name: "Middle East",
    lon: 46,
    lat: 26,
    partners: 9,
    countries: "KSA · UAE · Qatar",
  },
  {
    name: "Africa",
    lon: 22,
    lat: 4,
    partners: 6,
    countries: "Nigeria · Kenya · Egypt",
  },
  {
    name: "Asia",
    lon: 90,
    lat: 23.8,
    partners: 18,
    countries: "Bangladesh · India · Malaysia",
    hub: true,
  },
];

export const serviceLinks = [
  "Protocol Development",
  "Article Writing",
  "Data Analysis",
  "Publication Support",
  "Journal Management",
];

const portrait = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&crop=faces&w=800&h=1000&q=80`;

export const teamDepartments = [
  "All",
  "Leadership",
  "Research",
  "Data & Analytics",
  "Publication",
];

// Placeholder team — replace names, photos and links with real IOJN members.
export const team = [
  {
    name: "Dr. Arif Rahman",
    role: "Founder & Executive Director",
    dept: "Leadership",
    image: portrait("1612349317150-e413f6a5b16d"),
    expertise:
      "Public health epidemiologist leading IOJN's research strategy and partnerships.",
    focus: ["Epidemiology", "Health Policy", "Research Strategy"],
    credentials: "MBBS, MPH, PhD in Epidemiology",
    quote:
      "Great research begins with a meaningful question and ends with real change in people's lives.",
    links: { linkedin: "#", scholar: "#", email: "mailto:iojn.org@gmail.com" },
  },
  {
    name: "Dr. Sharmin Akter",
    role: "Head of Public Health Research",
    dept: "Leadership",
    image: portrait("1559839734-2b71ea197ec2"),
    expertise:
      "Maternal and community health researcher with 12+ years of field experience.",
    focus: ["Maternal Health", "Community Trials"],
    links: { linkedin: "#", scholar: "#", email: "mailto:iojn.org@gmail.com" },
  },
  {
    name: "Prof. David Mitchell",
    role: "Senior Biostatistician",
    dept: "Data & Analytics",
    image: portrait("1472099645785-5658abf4ff4e"),
    expertise:
      "Designs robust statistical models for clinical and population-level studies.",
    focus: ["Biostatistics", "R / Stata", "Meta-analysis"],
    links: { linkedin: "#", scholar: "#", email: "mailto:iojn.org@gmail.com" },
  },
  {
    name: "Dr. Elena Varga",
    role: "Director of Publications",
    dept: "Publication",
    image: portrait("1544005313-94ddf0286df2"),
    expertise:
      "Former journal editor guiding manuscripts from draft to peer-reviewed acceptance.",
    focus: ["Scientific Writing", "Peer Review"],
    links: { linkedin: "#", scholar: "#", email: "mailto:iojn.org@gmail.com" },
  },
  {
    name: "Dr. Tanvir Ahmed",
    role: "Environmental Health Scientist",
    dept: "Research",
    image: portrait("1500648767791-00dcc994a43e"),
    expertise:
      "Studies air quality, climate exposure and their impact on urban health.",
    focus: ["Air Quality", "Climate & Health"],
    links: { linkedin: "#", scholar: "#", email: "mailto:iojn.org@gmail.com" },
  },
  {
    name: "Nadia Islam",
    role: "Journal Management Lead",
    dept: "Publication",
    image: portrait("1551836022-d5d88e9218df"),
    expertise:
      "Runs editorial workflows, indexing strategy and journal operations.",
    focus: ["Editorial Ops", "Indexing"],
    links: { linkedin: "#", scholar: "#", email: "mailto:iojn.org@gmail.com" },
  },
  {
    name: "Rafiq Hasan",
    role: "Data Analyst",
    dept: "Data & Analytics",
    image: portrait("1557862921-37829c790f19"),
    expertise:
      "Turns complex datasets into clear visualizations and reproducible reports.",
    focus: ["Python", "Visualization", "SPSS"],
    links: { linkedin: "#", scholar: "#", email: "mailto:iojn.org@gmail.com" },
  },
  {
    name: "Maria Lopez",
    role: "Clinical Research Coordinator",
    dept: "Research",
    image: portrait("1594824476967-48c8b964273f"),
    expertise:
      "Coordinates protocols, ethics approvals and data collection across sites.",
    focus: ["Clinical Trials", "Ethics & IRB"],
    links: { linkedin: "#", scholar: "#", email: "mailto:iojn.org@gmail.com" },
  },
  {
    name: "James Carter",
    role: "Partnerships & Outreach Manager",
    dept: "Leadership",
    image: portrait("1519085360753-af0119f7cbe7"),
    expertise:
      "Builds collaborations with universities, NGOs and international agencies.",
    focus: ["Partnerships", "Grants"],
    links: { linkedin: "#", scholar: "#", email: "mailto:iojn.org@gmail.com" },
  },
];
