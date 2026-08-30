export type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const roles: Role[] = [
  {
    title: "Oracle (D2K) Developer — Business Systems & Data",
    company: "Staqo Software Pvt Ltd",
    location: "Noida, India",
    period: "Jun 2022 – Apr 2026",
    points: [
      "Partnered with Finance, Procurement and Inventory stakeholders to gather requirements and translate business needs into scalable ERP designs.",
      "Served as point of contact for production issues — triaging and resolving root causes, restructuring fragile logic to lift system uptime 20%.",
      "Evaluated enterprise data flows and workflow bottlenecks to inform architecture decisions and support data-driven process redesign.",
      "Led module architecture, coding standards and reusable design patterns as internal PL/SQL lead, driving team-wide consistency.",
      "Automated Procurement and Asset Management workflows with modular, reusable components, cutting manual effort 60%.",
      "Re-engineered query and indexing strategy to cut database latency 40%, sustaining performance at 10,000+ daily users.",
    ],
  },
];

export const certifications = [
  { name: "MongoDB (SQL Expert)", issuer: "MongoDB", year: "2026" },
  { name: "Agile Software Development", issuer: "PMI", year: "2026" },
  { name: "Advanced SQL Practice", issuer: "LinkedIn", year: "2026" },
  {
    name: "Oracle Cloud Infrastructure Foundations Associate (1Z0-1122-23)",
    issuer: "Oracle",
    year: "2024",
  },
];

export const education = [
  { degree: "MCA — Master of Computer Applications", school: "ISBM University", year: "2022–24" },
  { degree: "PGDCA", school: "ISBM University", year: "2021–22" },
  { degree: "BA Program", school: "Delhi University", year: "2016–20" },
];
