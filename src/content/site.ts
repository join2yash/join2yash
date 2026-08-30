import resumeAsset from "@/assets/resume.pdf.asset.json";

export const site = {
  name: "Yash Parashar",
  role: "Business Systems & Data Analyst",
  tagline: "Enterprise Data • Analytics • Automation",
  location: "New Delhi, India",
  email: "parasharysh16299@gmail.com",
  phone: "+91 7838866778",
  linkedin: "https://www.linkedin.com/in/yash-parashar",
  resumeUrl: resumeAsset.url,
  summary:
    "Business Systems & Data Analyst with 3+ years turning complex enterprise data and business processes into measurable outcomes across Finance, Procurement and Inventory — on production systems serving 10,000+ daily users.",
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Writing" },
  { to: "/contact", label: "Contact" },
] as const;

export const headlineMetrics = [
  { value: "3+", label: "Years in enterprise systems" },
  { value: "10,000+", label: "Daily users supported" },
  { value: "40%", label: "Database latency reduced" },
  { value: "60%", label: "Manual effort automated away" },
] as const;
