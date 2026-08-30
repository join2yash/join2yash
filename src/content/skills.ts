export type SkillGroupData = {
  title: string;
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroupData[] = [
  {
    title: "Business Analysis",
    blurb: "Turning ambiguous business problems into specifications engineers can build.",
    items: [
      "BRD & FRD authoring",
      "Requirements gathering",
      "Stakeholder management",
      "Process improvement",
      "Root cause analysis",
      "Change management",
    ],
  },
  {
    title: "Data & Analytics",
    blurb: "Validating, reconciling and interpreting enterprise data at production scale.",
    items: [
      "SQL",
      "PL/SQL",
      "Data validation & reconciliation",
      "Advanced Excel",
      "Reporting & business insights",
    ],
  },
  {
    title: "Engineering & Automation",
    blurb: "Building the modular, reusable components that remove manual work permanently.",
    items: [
      "Database development",
      "Query & index optimisation",
      "Python",
      "Workflow automation",
      "Linux / Unix",
    ],
  },
  {
    title: "Enterprise Systems",
    blurb: "Deep familiarity with the Oracle ERP surface across three business domains.",
    items: [
      "Oracle Database 10g / 11g / 12c",
      "Oracle ERP",
      "Finance",
      "Procurement",
      "Inventory",
      "Oracle Forms & Reports",
    ],
  },
  {
    title: "Cloud & Modern Data",
    blurb: "Where I am actively expanding — modern data engineering and AI-assisted delivery.",
    items: [
      "Microsoft Azure",
      "MongoDB",
      "Oracle Cloud Infrastructure",
      "AI-assisted development",
      "LLM API integration",
    ],
  },
];
