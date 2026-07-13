export type ProjectSize = "hero" | "wide" | "standard" | "research" | "about";
export type ProjectVisual = "actor" | "china" | "nist" | "network" | "journey";

export type PortfolioProject = {
  title: string;
  description: string;
  type: string;
  href: string;
  external?: boolean;
  size: ProjectSize;
  visual: ProjectVisual;
  artifactHref?: string;
};

export const featuredProjects: PortfolioProject[] = [
  {
    title: "AI-Generated Actor Compliance Assessment",
    description:
      "A working review system for consent, identity risk, labeling, and synthetic media evidence.",
    type: "Synthetic media",
    href: "https://yuxuancheng123-spec.github.io/ai-generated-actor-compliance/web/",
    external: true,
    size: "hero",
    visual: "actor",
  },
  {
    title: "China AI Compliance Evidence Framework",
    description:
      "A machine-readable evidence pipeline for China-facing AIGC platforms.",
    type: "Framework",
    href: "/projects/china-ai-compliance",
    size: "standard",
    visual: "china",
    artifactHref: "/china-compliance.pdf",
  },
  {
    title: "NIST AI RMF Compliance Dashboard",
    description:
      "Control maturity and missing-evidence analysis across Govern, Map, Measure, and Manage.",
    type: "Governance tool",
    href: "/#contact",
    size: "wide",
    visual: "nist",
  },
  {
    title: "Network Crafting Research",
    description:
      "How people reshape workplace networks to access resources across work and home.",
    type: "Organizational behavior",
    href: "/research",
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
    type: "Research",
    title: "Network Crafting and Workgroup Diversity",
    description:
      "Examining resource enrichment across work and home through network crafting.",
    href: "/research",
  },
  {
    year: "2026",
    type: "Writing",
    title: "Why AI Short Dramas Became a Hotspot for Face Theft",
    description:
      "A platform-governance view of likeness abuse, rapid production, and commercial distribution.",
    href: "https://github.com/yuxuancheng123-spec/ai-generated-actor-compliance",
    external: true,
  },
  {
    year: "2026",
    type: "Writing",
    title: "From Post-hoc Enforcement to Permission-first Infrastructure",
    description:
      "Why consent records and identity controls need to exist before synthetic media is generated.",
    href: "https://github.com/yuxuancheng123-spec/china-aigc-compliance-evidence",
    external: true,
  },
  {
    year: "2026",
    type: "Research",
    title: "AI Awareness, Job Crafting, and the Future of Work",
    description:
      "Exploring how people adapt their roles, networks, and opportunities around AI at work.",
    href: "/research",
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
