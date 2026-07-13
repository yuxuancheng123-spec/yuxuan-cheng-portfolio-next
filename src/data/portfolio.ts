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
  image?: string;
  imageAlt?: string;
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
    image: "/images/ai-actor-cover.jpg",
    imageAlt:
      "Abstract glass portrait and identity evidence representing synthetic actor governance",
  },
  {
    title: "China AI Compliance Evidence Framework",
    description:
      "A machine-readable evidence pipeline for China-facing AIGC platforms.",
    type: "Framework",
    href: "/projects/china-ai-compliance",
    size: "standard",
    visual: "china",
    image: "/images/china-evidence-cover.jpg",
    imageAlt:
      "Editorial arrangement of evidence documents, structured data, and an archival seal",
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
    image: "/images/nist-rmf-cover.jpg",
    imageAlt:
      "Abstract modular system representing AI risk controls and governance functions",
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
    image: "/images/about-lifestyle.jpg",
    imageAlt:
      "Research notebook, headphones, and iced coffee beside a Hong Kong city view",
  },
];

export const researchWriting = [
  {
    type: "Research",
    title: "Network Crafting and Workgroup Diversity",
    description:
      "Examining resource enrichment across work and home through network crafting.",
    href: "/research",
  },
  {
    type: "Framework",
    title: "China AIGC Compliance Evidence",
    description:
      "Turning governance requirements into request-level, machine-readable records.",
    href: "/projects/china-ai-compliance",
  },
  {
    type: "Writing",
    title: "Synthetic Media Governance",
    description:
      "Consent, provenance, disclosure, and platform accountability for AI actors.",
    href: "https://github.com/yuxuancheng123-spec/ai-generated-actor-compliance",
    external: true,
  },
  {
    type: "Tool",
    title: "NIST AI RMF Control Review",
    description:
      "A practical route from risk mapping to missing-control analysis.",
    href: "/#contact",
  },
];

export const personalNotes = [
  {
    label: "Based in",
    value: "Hong Kong / Shenzhen",
    tone: "blue",
  },
  {
    label: "Researching",
    value: "AI governance and organizational behavior",
    tone: "mist",
  },
  {
    label: "Favorite film",
    value: "La La Land",
    tone: "rose",
  },
  {
    label: "Usually",
    value: "Apex, CS2, and an iced Americano",
    tone: "green",
  },
];
