export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  body: { heading?: string; paragraphs?: string[]; list?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "cutting-database-latency-40-percent",
    title: "How I Cut Database Latency 40% on a 10,000-User ERP",
    description:
      "The query and indexing changes that kept an Oracle ERP responsive at 10,000+ daily users — and the diagnostic order that found them.",
    date: "2026-06-18",
    readingTime: "6 min read",
    tags: ["SQL", "Performance", "Oracle"],
    body: [
      {
        paragraphs: [
          'Performance complaints almost never arrive as performance complaints. They arrive as "the dispatch screen is stuck" or "month-end close is taking two days." The work is translating that into a measurable statement before touching anything.',
        ],
      },
      {
        heading: "Measure before you optimise",
        paragraphs: [
          "The first move is never an index. It is establishing which statements actually consume the time. Once you rank statements by total elapsed time rather than by how loudly users complain about the screen they sit behind, the target list usually shrinks to a handful.",
          "On this system, three query patterns accounted for the majority of the wait. Everything else was noise that would have felt productive to fix and changed nothing.",
        ],
      },
      {
        heading: "What actually moved the needle",
        list: [
          "Replacing row-by-row processing with set-based logic where the procedural loop existed only for readability.",
          "Composite indexes matched to real predicate order, not to the order columns happen to appear in the table.",
          "Removing functions from WHERE clauses that silently disabled index usage on high-cardinality columns.",
          "Reshaping a handful of correlated subqueries into joins so the optimiser could pick a sane plan.",
        ],
      },
      {
        heading: "The part people skip",
        paragraphs: [
          "Every index you add is a write cost you pay forever. In a system with heavy transactional inserts, an index that fixes one report can quietly slow down the thing the business actually depends on. Before adding one, I check what it costs on the write path.",
          "The final result was a 40% cut in database latency, sustained as concurrency grew — not a benchmark number, a production one.",
        ],
      },
    ],
  },
  {
    slug: "decoupling-business-rules-from-code",
    title: "Business Rules Do Not Belong in Your Code",
    description:
      "Why hardcoded policy creates a permanent engineering dependency, and how a configurable rules layer removed it for a finance team.",
    date: "2026-07-02",
    readingTime: "5 min read",
    tags: ["Architecture", "Business Analysis", "ERP"],
    body: [
      {
        paragraphs: [
          "If Finance has to file a ticket to change a credit limit tolerance, the system has a design problem, not a process problem. Policy changes at the speed of business; code changes at the speed of a release cycle. Coupling the two guarantees friction.",
        ],
      },
      {
        heading: "The tell",
        paragraphs: [
          "You can spot the problem in a backlog. When a meaningful share of change requests are numeric — a threshold, a percentage, an approval level — those are not features. They are configuration that got compiled in.",
        ],
      },
      {
        heading: "Separating policy from enforcement",
        list: [
          "Enforcement logic — how a rule is evaluated and applied — stays in code and stays stable.",
          "Policy — the actual limits, tolerances, escalation paths — moves to data the business owns.",
          "Every evaluation writes an audit record, so a configurable system stays defensible under audit.",
          "Changes are versioned and effective-dated, so you can reconstruct what the rule was on any past date.",
        ],
      },
      {
        heading: "What it bought",
        paragraphs: [
          "Finance updates credit policy directly. Engineering stopped being a bottleneck on a decision it was never qualified to make. And risk exposure dropped 15% simply because the team could now tune the policy as conditions changed, instead of waiting for a slot in the sprint.",
        ],
      },
    ],
  },
  {
    slug: "digitising-a-shop-floor-without-stopping-it",
    title: "Digitising a Shop Floor Without Stopping It",
    description: "Lessons from replacing paper inventory workflows while dispatch kept running every single day.",
    date: "2026-07-22",
    readingTime: "5 min read",
    tags: ["Process Design", "Inventory", "Change Management"],
    body: [
      {
        paragraphs: [
          "The hardest constraint in a digitisation project is rarely technical. It is that the operation cannot pause. Dispatch goes out today whether or not your rollout is ready.",
        ],
      },
      {
        heading: "Map what happens, not what is documented",
        paragraphs: [
          "The documented process and the floor process are different documents. People build workarounds for real constraints, and those workarounds carry information about the system you are replacing. Digitising the documented version ships a tool nobody uses.",
        ],
      },
      {
        heading: "Sequence for reversibility",
        list: [
          "Each module goes live independently, with the paper path still available behind it.",
          "Capture data at the point it is created — transcription is where accuracy goes to die.",
          "Instrument before and after, so the improvement is a number and not an opinion.",
          "Give the floor team a way to report friction that reaches you the same day.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Dispatch time fell 55%, data accuracy rose 50%, and paper usage dropped 40% — with no interruption to daily operations. The project was recognised with an ESG Award, but the durable win was that the floor team trusted the new process enough to stop keeping a paper backup.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
