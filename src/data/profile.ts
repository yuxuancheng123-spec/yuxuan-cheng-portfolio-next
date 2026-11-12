// Homepage content. Facts here mirror public/cv/Yuxuan_Cheng_CV.pdf — keep the two in sync.

export type LinkItem = { label: string; href: string; external?: boolean };

export const profile = {
  name: "Yuxuan Cheng",
  role: "Researcher, AI Governance",
  affiliation: { label: "FacesMarket 元脸", href: null as string | null },
  location: "Hong Kong · Shenzhen",
  photo: "/images/soul-chibi-avatar.webp" as string | null,
  email: "yuxuancheng123@gmail.com",
  cv: "/cv/Yuxuan_Cheng_CV.pdf",
  socials: [
    { label: "github.com/yuxuancheng123-spec", href: "https://github.com/yuxuancheng123-spec", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yuxuan-cheng-86743631a", icon: "linkedin" },
  ],
} as const;

export const education = [
  {
    period: "2025 — 2026",
    school: "The University of Hong Kong",
    degree: "M.A. in AI, Ethics and Society",
  },
  {
    period: "2021 — 2025",
    school: "Lingnan University",
    degree: "B.Soc.Sc. in Business Psychology",
  },
];

export type ResearchEntry = {
  venue: string;
  badge?: string;
  title: string;
  authors?: string;
  note?: string;
  summary: string;
  href: string;
  image?: { src: string; alt: string };
  links: LinkItem[];
};

export const research: ResearchEntry[] = [
  {
    venue: "Career Development International",
    badge: "Revise & resubmit",
    title: "Navigating Diversity: The Role of Network Crafting in Resource Enrichment Across Work and Home",
    authors: "Wang, H.*, Cheng, Y.*, van Gool, P., & Zhang, Z.",
    note: "* Co-first authors",
    summary:
      "A three-wave survey (N = 222) and a diary study (N = 199) on how network crafting builds resources that carry over from work to home in diverse workgroups.",
    href: "/research/network-crafting",
    image: { src: "/images/work/network-model.jpg", alt: "Conceptual pathway from network crafting to work-to-family facilitation" },
    links: [{ label: "Project", href: "/research/network-crafting" }],
  },
  {
    venue: "Paper in revision · 2026",
    title: "China AIGC Legal-Clause-to-Control Framework",
    summary:
      "When can software close a legal check? Separates applicability, evidence testing, and final review for Chinese AIGC rules; targeted counterexamples found five defects that designed test cases missed.",
    href: "/research/china-aigc-legal-clause-to-control",
    image: { src: "/images/work/china-method.jpg", alt: "Six-step method from formal legal provision to human final conclusion" },
    links: [
      { label: "Project", href: "/research/china-aigc-legal-clause-to-control" },
      { label: "Paper", href: "https://github.com/yuxuancheng123-spec/china-aigc-compliance-evidence/tree/main/paper", external: true },
      { label: "Code", href: "https://github.com/yuxuancheng123-spec/china-aigc-compliance-evidence", external: true },
      { label: "Norm Explorer", href: "https://yuxuancheng123-spec.github.io/china-aigc-compliance-evidence/explorer/", external: true },
    ],
  },
  {
    venue: "CASP Annual Meeting · Guilin, 2024",
    badge: "First-author talk",
    title: "Enhancing Creativity in Diverse Workgroups: The Role of Network Crafting",
    authors: "Cheng, Y., Wang, H., van Gool, P., & Zhang, Z.",
    summary: "Presented at the Chinese Association of Social Psychology Annual Meeting.",
    href: "/research/network-crafting",
    links: [],
  },
];

export const experience = [
  {
    period: "Jun 2026 — Present",
    title: "Researcher, AI Governance & Synthetic Media",
    org: "FacesMarket (元脸) · Shenzhen",
    detail:
      "Research on AI-generated actors, likeness and voice rights, labeling, and provenance; helping shape permission-first workflows for likeness use.",
  },
  {
    period: "Jan — Aug 2026",
    title: "Research Assistant, Organizational Behavior",
    org: "The Chinese University of Hong Kong",
    supervisor: "Supervisor: Prof. Xuan Liu",
    detail:
      "Construct development on AI and career behavior; bilingual Qualtrics survey design; labor-market data cleaning.",
  },
  {
    period: "May — Aug 2025",
    title: "AI Product Development Intern",
    org: "Best Top Consulting · Remote / Singapore",
    detail:
      "Refined prompts and conversational flows for an AI-supported assessment, contributing to a ~40% increase in completion.",
  },
  {
    period: "Jun — Aug 2024",
    title: "Research Assistant, I/O Psychology",
    org: "The Chinese University of Hong Kong",
    supervisor: "Supervisor: Prof. Julian Pfrombeck",
    detail: "Supported a four-wave longitudinal study of digitization and successful aging at work.",
  },
];

export type ProjectEntry = {
  title: string;
  status: string;
  summary: string;
  href: string;
  tags: string[];
  image: { src: string; alt: string };
  links: LinkItem[];
};

export const projects: ProjectEntry[] = [
  {
    title: "AI-Generated Actor Compliance Assessment",
    status: "Working prototype",
    summary:
      "Can this face or voice be used — and who can prove it? Scoped consent records, evidence gates, and 13 rules with PRC legal bases; the browser demo and the backend share one rulebook, checked by a parity test.",
    href: "/work/ai-generated-actor-compliance",
    tags: ["FastAPI", "Pydantic", "SQLite", "JSON Schema"],
    image: {
      src: "/images/work/actor-review-queue.jpg",
      alt: "Compliance review queue of the demo workspace, with three cases blocked at consent and authorization",
    },
    links: [
      { label: "Project", href: "/work/ai-generated-actor-compliance" },
      { label: "Live demo", href: "https://yuxuancheng123-spec.github.io/ai-generated-actor-compliance/web/", external: true },
      { label: "Code", href: "https://github.com/yuxuancheng123-spec/ai-generated-actor-compliance", external: true },
    ],
  },
];
