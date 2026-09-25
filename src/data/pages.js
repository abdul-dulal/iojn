// Content for the inner pages. Placeholder values are marked — replace with real IOJN data.
const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const pageImages = {
  about: img("1581093450021-4a7360e9a6b5", 1100),
  services: img("1454165804606-c3d57bc86b40", 1100),
  research: img("1576086213369-97a306d36557", 1100),
  publications: img("1434030216411-0b793f4b4173", 1100),
  events: img("1540575467063-178a50c2df87", 1100),
  resources: img("1488190211105-8b0e65b80b4e", 1100),
  contact: img("1497366216548-37526070297c", 1100),
};

/* ---------------- About ---------------- */
export const mission = {
  mission:
    "To conduct and support impactful, ethical and trend-changing research that improves health, protects the environment and strengthens communities.",
  vision:
    "A world where every researcher and institution has access to the expertise needed to turn questions into evidence and evidence into action.",
};

export const values = [
  { icon: "ShieldCheck", title: "Integrity", text: "Ethical conduct, transparency and honesty in every study we touch." },
  { icon: "Award", title: "Excellence", text: "Methodological rigour and uncompromising quality standards." },
  { icon: "Handshake", title: "Collaboration", text: "Genuine partnership with researchers, institutions and communities." },
  { icon: "Target", title: "Impact", text: "Research designed to inform policy, practice and positive change." },
];

export const milestones = [
  { year: "2020", title: "IOJN is founded", text: "Established in Dhaka as a research support centre for health and environmental research." },
  { year: "2021", title: "First 50 projects", text: "Completed our first 50 research support projects across public health and social science." },
  { year: "2022", title: "Journal management launched", text: "Began supporting journal development, editorial operations and indexing." },
  { year: "2023", title: "Going international", text: "Built partnerships across Asia, Europe, the Middle East, Africa and North America." },
  { year: "2024", title: "1,000+ researchers trained", text: "Scaled workshops and mentorship programs in methodology and scientific writing." },
  { year: "2025", title: "500 projects milestone", text: "Crossed 500 completed projects and 100 peer-reviewed publications." },
  { year: "2026", title: "International conference", text: "Hosting our first International Conference on Public & Environmental Health." },
];

export const objectives = [
  { icon: "HeartPulse", title: "Advance health research", text: "Promote high-quality research in public and environmental health." },
  { icon: "BookOpen", title: "Strengthen publication", text: "Help researchers publish credible work in reputable journals." },
  { icon: "GraduationCap", title: "Build human capacity", text: "Train early-career researchers and professionals in research skills." },
  { icon: "Building2", title: "Inform policy", text: "Generate evidence that guides decision-makers and practitioners." },
  { icon: "Globe", title: "Foster collaboration", text: "Connect researchers and institutions across borders." },
  { icon: "Scale", title: "Uphold research ethics", text: "Champion ethical, responsible and reproducible research practice." },
];

/* ---------------- Services ---------------- */
export const serviceDetails = [
  {
    eyebrow: "Plan with confidence",
    title: "Protocol Development & Study Design",
    text: "We transform your research question into a rigorous, fundable and ethically sound protocol — ready for review boards and funders.",
    image: img("1532094349884-543bc11b234d", 1000),
    points: ["Research question & objectives refinement", "Study design, sampling & sample size", "Data collection tools & questionnaires", "Ethics (IRB) documentation support"],
    deliverable: "Complete study protocol",
  },
  {
    eyebrow: "Evidence you can defend",
    title: "Data Analysis & Reporting",
    text: "From data cleaning to advanced modelling, our biostatisticians deliver clear, reproducible and publication-ready results.",
    image: img("1551288049-bebda4e38f71", 1000),
    points: ["Descriptive & inferential statistics", "Regression, survival & multilevel models", "Qualitative coding & thematic analysis", "Tables, figures & interpretation report"],
    deliverable: "Analysis report + reproducible code",
  },
  {
    eyebrow: "From draft to acceptance",
    title: "Article Writing & Publication Support",
    text: "We shape your findings into a compelling manuscript and guide it through journal selection, submission and peer review.",
    image: img("1434030216411-0b793f4b4173", 1000),
    points: ["Manuscript writing & structured editing", "Journal selection strategy", "Submission & cover letter preparation", "Reviewer response support"],
    deliverable: "Submission-ready manuscript",
  },
];

export const engagementModels = [
  {
    name: "Expert Consultation",
    tagline: "Targeted guidance on a specific question",
    price: "Per session",
    features: ["60–90 minute expert session", "Methodology or statistics review", "Written recommendations", "Follow-up Q&A by email"],
  },
  {
    name: "Full Research Project",
    tagline: "End-to-end support from idea to publication",
    price: "Custom quote",
    featured: true,
    features: ["Dedicated project lead", "Protocol, analysis & manuscript", "Weekly progress updates", "Publication support until acceptance", "Confidentiality agreement"],
  },
  {
    name: "Institutional Partnership",
    tagline: "Long-term support for universities & NGOs",
    price: "Annual agreement",
    features: ["Priority access to our team", "Capacity-building workshops", "Journal management options", "Co-authored research programs"],
  },
];

export const serviceFaqs = [
  { q: "How long does a typical research project take?", a: "Most full projects take 8–16 weeks depending on scope, data availability and the target journal. Consultations can usually be scheduled within a week." },
  { q: "Is my data and research kept confidential?", a: "Yes. We sign confidentiality agreements on request, store data securely and never share your work or findings without explicit permission." },
  { q: "Which statistical software do you use?", a: "We work with R, SPSS, Stata, Python and NVivo, and can deliver analysis in the software your institution prefers." },
  { q: "Can you guarantee publication?", a: "No ethical provider can guarantee acceptance, but we significantly improve your chances through rigorous methods, strong writing and careful journal targeting." },
  { q: "Do you work with international researchers?", a: "Absolutely. We collaborate remotely with researchers and institutions across five regions and multiple time zones." },
];

/* ---------------- Research ---------------- */
export const projects = [
  {
    title: "Maternal Health Outcomes in Rural Communities",
    area: "Public Health",
    status: "Ongoing",
    period: "2025 – 2026",
    progress: 68,
    partners: "3 partner institutions",
    image: img("1576091160399-112ba8d25d1d", 900),
    text: "A mixed-methods study evaluating community outreach and antenatal care uptake across 40 villages.",
  },
  {
    title: "Urban Air Pollution & Childhood Asthma",
    area: "Environmental Health",
    status: "Ongoing",
    period: "2024 – 2026",
    progress: 82,
    partners: "2 hospitals · 1 university",
    image: img("1542601906990-b4d3fb778b09", 900),
    text: "Linking particulate exposure data with pediatric respiratory admissions in fast-growing cities.",
  },
  {
    title: "Digital Health Literacy Among Young Adults",
    area: "Innovation & Technology",
    status: "Completed",
    period: "2023 – 2024",
    progress: 100,
    partners: "5 universities",
    image: img("1488190211105-8b0e65b80b4e", 900),
    text: "A cross-sectional survey of 2,400 students on the use and trust of online health information.",
  },
  {
    title: "Safe Water Access & Waterborne Disease",
    area: "Environmental Health",
    status: "Completed",
    period: "2022 – 2023",
    progress: 100,
    partners: "NGO consortium",
    image: img("1532187863486-abf9dbad1b69", 900),
    text: "Assessing household water quality and diarrheal disease burden in peri-urban settlements.",
  },
];

export const methodologies = [
  { icon: "ChartColumn", title: "Quantitative Research", text: "Surveys, cohort, case-control and experimental designs with robust statistical analysis.", tags: ["Surveys", "RCTs", "Cohorts"] },
  { icon: "Users", title: "Qualitative Research", text: "In-depth interviews, focus groups and ethnography to understand lived experience.", tags: ["Interviews", "FGDs", "Thematic"] },
  { icon: "Layers", title: "Mixed Methods", text: "Integrating numbers and narratives for a complete, policy-relevant picture.", tags: ["Convergent", "Sequential"] },
  { icon: "Search", title: "Systematic Reviews", text: "PRISMA-compliant reviews and meta-analyses that synthesise global evidence.", tags: ["PRISMA", "Meta-analysis"] },
];

/* ---------------- Publications ---------------- */
export const publicationTypes = ["All", "Journal Article", "Review", "Conference Paper", "Report"];

// Placeholder bibliography
export const library = [
  { title: "Community-based interventions for maternal health in low-resource settings", authors: "Akter S, Rahman A, Islam N", journal: "Journal of Global Public Health", year: 2026, type: "Journal Article", area: "Public Health" },
  { title: "Urban air quality and respiratory outcomes: a five-year cohort study", authors: "Ahmed T, Mitchell D", journal: "Environmental Health Perspectives Review", year: 2026, type: "Journal Article", area: "Environmental Health" },
  { title: "Reproducible statistical workflows for health researchers", authors: "Hasan R, Mitchell D", journal: "IOJN Methods Series", year: 2026, type: "Report", area: "Research Methods" },
  { title: "Building research capacity among early-career academics: a program evaluation", authors: "Varga E, Carter J", journal: "International Journal of Academic Development", year: 2025, type: "Journal Article", area: "Academic Development" },
  { title: "Water, sanitation and diarrheal disease in peri-urban settlements: a systematic review", authors: "Ahmed T, Lopez M, Akter S", journal: "Tropical Medicine & Health Reviews", year: 2025, type: "Review", area: "Environmental Health" },
  { title: "Digital health literacy among university students in South Asia", authors: "Islam N, Hasan R", journal: "Proceedings of the Asia Digital Health Summit", year: 2025, type: "Conference Paper", area: "Innovation & Technology" },
  { title: "Mental health service utilisation among urban youth: a mixed-methods study", authors: "Rahman A, Lopez M", journal: "BMC Public Health Research", year: 2024, type: "Journal Article", area: "Public Health" },
  { title: "Climate change and vector-borne disease risk: a scoping review", authors: "Ahmed T, Varga E", journal: "Global Environmental Health Review", year: 2024, type: "Review", area: "Environmental Health" },
  { title: "Strengthening ethics review capacity in emerging research institutions", authors: "Lopez M, Carter J", journal: "International Research Ethics Conference", year: 2024, type: "Conference Paper", area: "Research Ethics" },
  { title: "State of public health research in Bangladesh: annual report", authors: "IOJN Research Team", journal: "IOJN Annual Report", year: 2023, type: "Report", area: "Public Health" },
];

// Placeholder journals — replace with IOJN's actual managed journals
export const journals = [
  { name: "IOJN Journal of Public Health & Epidemiology", short: "JPHE", issn: "ISSN 0000-0001", frequency: "Quarterly", review: "4–6 weeks", color: "from-teal to-royal" },
  { name: "IOJN Environmental Health Review", short: "EHR", issn: "ISSN 0000-0002", frequency: "Bi-annual", review: "6–8 weeks", color: "from-emerald-500 to-teal" },
  { name: "IOJN Journal of Social Development Studies", short: "JSDS", issn: "ISSN 0000-0003", frequency: "Quarterly", review: "4–6 weeks", color: "from-royal to-navy" },
];

export const submissionSteps = [
  { title: "Prepare manuscript", text: "Follow the author guidelines and formatting template for your target journal." },
  { title: "Submit online", text: "Upload your manuscript, cover letter and declarations through our portal." },
  { title: "Editorial screening", text: "Editors check scope, originality and completeness within 7 days." },
  { title: "Peer review", text: "Double-blind review by at least two independent experts." },
  { title: "Decision & publication", text: "Revise, receive acceptance and get published open access." },
];

/* ---------------- Events ---------------- */
export const featuredEvent = {
  title: "International Conference on Public & Environmental Health 2026",
  date: "2026-10-18T09:00:00+06:00",
  dateLabel: "18–19 October 2026",
  location: "Dhaka, Bangladesh · Hybrid",
  image: img("1505373877841-8d25f7d46678", 1400),
  agenda: [
    { day: "Day 1", items: [["09:00", "Opening ceremony & keynote"], ["11:00", "Public health policy panel"], ["14:00", "Paper presentations — Track A & B"], ["16:30", "Networking reception"]] },
    { day: "Day 2", items: [["09:30", "Environmental health keynote"], ["11:00", "Workshop: Scientific publishing"], ["14:00", "Young researchers session"], ["16:00", "Awards & closing"]] },
  ],
};

export const pastEvents = [
  { title: "Research Methodology Bootcamp", date: "Jun 2026", attendees: "180", image: img("1591115765373-5207764f72e7", 800) },
  { title: "Public Health Symposium", date: "Mar 2026", attendees: "320", image: img("1540575467063-178a50c2df87", 800) },
  { title: "Scientific Writing Workshop", date: "Jan 2026", attendees: "95", image: img("1524178232363-1fb2b075b655", 800) },
  { title: "Environmental Health Forum", date: "Nov 2025", attendees: "240", image: img("1515187029135-18ee286d815b", 800) },
  { title: "Data Analysis with R", date: "Sep 2025", attendees: "120", image: img("1523580494863-6f3031224c94", 800) },
  { title: "Young Researchers Meetup", date: "Jul 2025", attendees: "150", image: img("1475721027785-f74eccf877e2", 800) },
];

/* ---------------- Resources ---------------- */
export const resourceTypes = ["All", "Guide", "Template", "Webinar", "Dataset"];

export const resources = [
  { type: "Guide", title: "Beginner's Guide to Research Protocols", text: "Step-by-step guidance for writing a clear, ethical study protocol.", format: "PDF", meta: "24 pages" },
  { type: "Template", title: "Research Proposal Template", text: "A structured, editable template aligned with common funder requirements.", format: "DOCX", meta: "Editable" },
  { type: "Webinar", title: "Choosing the Right Statistical Test", text: "A recorded session on matching study designs with statistical methods.", format: "Video", meta: "52 min" },
  { type: "Guide", title: "How to Select the Right Journal", text: "Criteria for evaluating scope, indexing, impact and avoiding predatory journals.", format: "PDF", meta: "16 pages" },
  { type: "Template", title: "Informed Consent Form Template", text: "Bilingual consent template ready for adaptation to your study.", format: "DOCX", meta: "Editable" },
  { type: "Dataset", title: "Sample Health Survey Dataset", text: "An anonymised practice dataset for learning data analysis.", format: "CSV", meta: "2,400 rows" },
  { type: "Webinar", title: "Writing a Strong Discussion Section", text: "Editors explain how to interpret findings convincingly.", format: "Video", meta: "38 min" },
  { type: "Guide", title: "Systematic Review Checklist (PRISMA)", text: "A practical checklist for planning and reporting systematic reviews.", format: "PDF", meta: "8 pages" },
];

export const tools = [
  { name: "R & RStudio", use: "Statistical computing", mark: "R" },
  { name: "SPSS", use: "Statistical analysis", mark: "S" },
  { name: "Stata", use: "Econometrics & biostatistics", mark: "St" },
  { name: "Python", use: "Data science & automation", mark: "Py" },
  { name: "NVivo", use: "Qualitative analysis", mark: "Nv" },
  { name: "Zotero", use: "Reference management", mark: "Z" },
  { name: "EndNote", use: "Citation management", mark: "En" },
  { name: "KoboToolbox", use: "Field data collection", mark: "K" },
];

export const resourceFaqs = [
  { q: "Are these resources free to use?", a: "Yes. All guides, templates and recorded webinars are free for personal, academic and non-commercial use." },
  { q: "Can I request a resource on a specific topic?", a: "Absolutely — contact us with your topic and our team will consider it for an upcoming guide or webinar." },
  { q: "Do you offer live training sessions?", a: "Yes. We run regular workshops and bootcamps. See the Events page for upcoming sessions." },
];

/* ---------------- Contact ---------------- */
export const directions = [
  { icon: "Bus", title: "By Bus", text: "Take any bus to Farmgate. The Farmview Super Market is a two-minute walk from the Farmgate bus stop." },
  { icon: "Car", title: "By Car", text: "Drive via Kazi Nazrul Islam Avenue towards Farmgate. Paid parking is available near the market." },
  { icon: "Bike", title: "By Bike", text: "Bike parking is available in front of Farmview Super Market. Take the lift to Level 05." },
  { icon: "TrainFront", title: "By Metro", text: "Get off at Farmgate Metro Station — the office is a short walk from the station exit." },
];

export const contactFaqs = [
  { q: "How quickly will I get a response?", a: "We reply to all enquiries within one business day, Saturday to Thursday." },
  { q: "Can I book a free initial consultation?", a: "Yes. Your first 20-minute call to discuss your project and needs is free of charge." },
  { q: "Do I need an appointment to visit the office?", a: "We recommend booking ahead so the right specialist is available to meet you." },
];
