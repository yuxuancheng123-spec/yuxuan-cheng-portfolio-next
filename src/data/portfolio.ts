export type ProjectSize = "hero" | "wide" | "standard" | "research" | "about";
export type ProjectVisual = "actor" | "china" | "nist" | "network" | "journey";

export type PortfolioProject = {
  title: string;
  description: string;
  type: string;
  tags?: string[];
  href: string;
  external?: boolean;
  size: ProjectSize;
  visual: ProjectVisual;
  artifactHref?: string;
  image?: { src: string; alt: string };
};

export const featuredProjects: PortfolioProject[] = [
  {
    title: "AI-Generated Actor Compliance Assessment",
    description:
      "Privacy engineering prototype for managing synthetic-media compliance cases across intake, risk assessment, evidence review, remediation, approval, and audit logging.",
    type: "Privacy Engineering",
    tags: ["AI Governance", "Synthetic Media", "Case Management"],
    href: "/work/ai-generated-actor-compliance",
    image: { src: "/images/work/ai-actor-demo.jpg", alt: "Review queue screen from the live compliance workspace demo" },
    size: "hero",
    visual: "actor",
  },
  {
    title: "China AIGC Legal-Clause-to-Control Framework",
    description:
      "Research framework for transforming selected Chinese AIGC provisions into traceable legal norms, reviewed controls, and machine-executable evidence tests.",
    type: "AI Governance Research",
    tags: ["Legal Informatics", "Rules as Code", "Human Review"],
    href: "/research/china-aigc-legal-clause-to-control",
    image: { src: "/images/work/china-method.jpg", alt: "Six-step method from formal legal provision to human final conclusion" },
    size: "standard",
    visual: "china",
  },
  {
    title: "NIST AI RMF Compliance Dashboard",
    description:
      "Control maturity and missing-evidence analysis across Govern, Map, Measure, and Manage.",
    type: "Governance tool",
    href: "/work/nist-ai-rmf-dashboard",
    image: { src: "/images/work/nist-logic.jpg", alt: "Assessment logic: Scope, Map, Score, Diagnose, Act" },
    size: "wide",
    visual: "nist",
  },
  {
    title: "Network Crafting Research",
    description:
      "How people reshape workplace networks to access resources across work and home.",
    type: "Organizational behavior",
    href: "/research/network-crafting",
    image: { src: "/images/work/network-model.jpg", alt: "Conceptual pathway from network crafting to work-to-family facilitation" },
    size: "research",
    visual: "network",
  },
  {
    title: "My Journey",
    description:
      "Research, products, coffee, films, and the questions I keep returning to.",
    type: "About",
    href: "/about",
    size: "about",
    visual: "journey",
  },
];

export const researchWriting = [
  {
    year: "2026",
    type: "Research / Legal Informatics",
    title: "China AIGC Legal-Clause-to-Control Framework",
    description:
      "Examining how selected Chinese AIGC provisions can be represented as traceable legal norms, reviewed controls, and executable evidence tests without automating legal judgment.",
    href: "/research/china-aigc-legal-clause-to-control",
  },
  {
    year: "2026",
    type: "Research",
    title: "Network Crafting and Workgroup Diversity",
    description:
      "Examining resource enrichment across work and home through network crafting.",
    href: "/research/network-crafting",
  },
  {
    year: "2026",
    type: "Writing",
    title: "Why AI Short Dramas Became a Hotspot for Face Theft",
    description:
      "A platform-governance view of likeness abuse, rapid production, and commercial distribution.",
    href: "/writing/ai-short-drama-face-theft",
  },
  {
    year: "2026",
    type: "Writing",
    title: "From Post-hoc Enforcement to Permission-first Infrastructure",
    description:
      "Why consent records and identity controls need to exist before synthetic media is generated.",
    href: "/writing/permission-first-infrastructure",
  },
  {
    year: "2026",
    type: "Research",
    title: "AI Awareness, Job Crafting, and the Future of Work",
    description:
      "Exploring how people adapt their roles, networks, and opportunities around AI at work.",
    href: "/research/ai-awareness-job-crafting",
  },
];

export const personalNotes = [
  {
    label: "Based in",
    value: "Hong Kong / Shenzhen",
    visual: "map",
  },
  {
    label: "Researching",
    value: "AI governance and organizational behavior",
    visual: "notes",
  },
  {
    label: "Favorite film",
    value: "La La Land",
    visual: "film",
  },
  {
    label: "Usually",
    value: "Apex, CS2, and an iced Americano",
    visual: "play",
  },
];
