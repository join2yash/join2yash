export type Project = {
  slug: string;
  title: string;
  kind: "Enterprise" | "Independent";
  org: string;
  period: string;
  headline: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcomes: { value: string; label: string }[];
  stack: string[];
  award?: string;
  link?: { href: string; label: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "warehouse-digital-transformation",
    title: "Warehouse Digital Transformation",
    kind: "Enterprise",
    org: "Staqo Software — Inventory & Shop Floor",
    period: "2022–2023",
    headline: "Cut dispatch time 55%, paper usage 40%, and won an ESG Award",
    summary:
      "A scalable digitisation architecture for shop-floor and inventory workflows, delivered under an ESG mandate without pausing daily dispatch.",
    challenge:
      "Shop-floor and IT stakeholders ran on incompatible assumptions, and the paper-based process could not be switched off for a migration — dispatch had to keep moving throughout.",
    approach: [
      "Ran process-mapping sessions on the floor to capture what actually happens versus the documented process.",
      "Sequenced digitisation module by module so each stage went live independently and could be rolled back.",
      "Standardised data capture at source, which removed the transcription errors that drove most downstream corrections.",
      "Instrumented dispatch and inventory movement so improvement could be measured rather than asserted.",
    ],
    outcomes: [
      { value: "55%", label: "Reduction in dispatch time" },
      { value: "50%", label: "Improvement in data accuracy" },
      { value: "40%", label: "Reduction in paper usage" },
    ],
    stack: ["Oracle Database", "PL/SQL", "Process design", "Change management"],
    award: "ESG Award",
    featured: true,
  },
  {
    slug: "stock-take-automation",
    title: "Stock Take Automation",
    kind: "Enterprise",
    org: "Staqo Software — Warehouse Operations",
    period: "2024",
    headline: "Eliminated manual reconciliation and made stock counts audit-ready",
    summary:
      "A reusable stock verification and approval framework, adopted across multiple warehouse operations after the first rollout.",
    challenge:
      "Each warehouse reconciled counts its own way. Audits required chasing spreadsheets, and variance investigation had no consistent trail.",
    approach: [
      "Defined a single verification and approval model that fits every site instead of per-site variants.",
      "Automated variance detection between counted and system quantities, with reason coding on each adjustment.",
      "Built a multi-level approval chain so adjustments carry an immutable record of who approved what and when.",
      "Packaged it as reusable components so new warehouses onboard through configuration.",
    ],
    outcomes: [
      { value: "100%", label: "Manual reconciliation removed" },
      { value: "Multi-site", label: "Framework reuse across operations" },
      { value: "Audit-ready", label: "Full adjustment traceability" },
    ],
    stack: ["Oracle PL/SQL", "Oracle Inventory", "Workflow automation"],
  },
  {
    slug: "credit-limit-management-framework",
    title: "Credit Limit Management Framework",
    kind: "Enterprise",
    org: "Staqo Software — Oracle ERP",
    period: "2024-2025",
    headline: "Cut financial risk exposure 15% and lifted receivables collection 22%",
    summary:
      "A configurable credit-control framework that decouples business rules from application code, letting Finance tighten risk policy without an engineering release.",
    challenge:
      "Credit exposure was growing while order controls were hardcoded. Tightening risk rules meant a development cycle every time, and any misstep risked blocking legitimate order fulfilment.",
    approach: [
      "Analysed historical credit exposure and order-hold data to locate where controls were leaking.",
      "Mapped the decision points with Finance stakeholders and separated policy (limits, tolerances, escalation) from enforcement logic.",
      "Designed a rules table plus a PL/SQL evaluation engine so limits, grace thresholds and approval routes are configuration, not code.",
      "Built order-hold and release workflows with a full audit trail for every credit decision.",
    ],
    outcomes: [
      { value: "15%", label: "Lower financial risk exposure" },
      { value: "22%", label: "Increase in receivables collection" },
      { value: "0", label: "Developer dependency for policy changes" },
    ],
    stack: ["Oracle PL/SQL", "Oracle ERP", "Oracle Forms & Reports", "SQL tuning"],
    featured: true,
  },
  {
    slug: "fair-pay-analyzer",
    title: "Fair Pay Analyzer",
    kind: "Independent",
    org: "Independent — live production tool",
    period: "2026",
    headline: "AI salary-benchmarking platform for IT professionals in India",
    summary:
      "Independently built and deployed an AI-powered platform that generates salary-benchmarking insights from resume analysis — a manual consulting workflow turned into a self-serve product.",
    challenge:
      "Salary benchmarking in the Indian IT market is opaque and usually done by hand. The problem was structuring free-form resume text into comparable signals reliable enough to benchmark against.",
    approach: [
      "Broke the manual benchmarking workflow into extraction, normalisation and comparison stages.",
      "Integrated the Claude API to parse resumes into structured role, skill and seniority signals.",
      "Designed the output around actionable ranges and reasoning rather than a single opaque number.",
      "Shipped and operated it as a live production tool, iterating on real usage.",
    ],
    outcomes: [
      { value: "Live", label: "In production with real users" },
      { value: "End-to-end", label: "Built, deployed and operated solo" },
      { value: "Claude API", label: "Production LLM integration" },
    ],
    stack: ["Claude API", "Python", "Web app", "Prompt engineering"],
    featured: true,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
