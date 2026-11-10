import type { ResearchItem } from "@/data/content";

export const chinaLegalFrameworkItem: ResearchItem = {
  slug: "china-aigc-legal-clause-to-control",
  kind: "Research",
  typeLabel: "AI Governance Research / Legal Informatics",
  title: "China AIGC Legal-Clause-to-Control Framework",
  subtitle:
    "A research framework for translating selected Chinese AIGC legal provisions into traceable, reviewable, and machine-readable controls.",
  summary:
    "An upstream legal-informatics study of how selected Chinese AIGC provisions become structured legal norms, reviewed controls, executable evidence tests, and human-routed outcomes.",
  seoDescription:
    "Research framework for translating selected Chinese AIGC legal provisions into traceable legal norms, reviewed controls, and executable evidence tests.",
  year: "2026",
  status: "Research prototype; paper in revision",
  roleLabel: "My role",
  role:
    "Research design, legal-clause annotation, schema design, control derivation, validation, and writing",
  methods: ["Python", "YAML", "JSON Schema", "pytest", "SHA-256", "XeLaTeX", "TikZ"],
  visual: "china-evidence",
  links: [
    {
      label: "Open Norm Explorer",
      href: "https://yuxuancheng123-spec.github.io/china-aigc-compliance-evidence/explorer/",
      external: true,
    },
    {
      label: "GitHub repository",
      href: "https://github.com/yuxuancheng123-spec/china-aigc-compliance-evidence",
      external: true,
    },
    {
      label: "View paper draft",
      href: "https://github.com/yuxuancheng123-spec/china-aigc-compliance-evidence/tree/main/paper",
      external: true,
    },
  ],
  relatedItems: ["/work/ai-generated-actor-compliance", "/work/nist-ai-rmf-dashboard"],
  researchQuestion:
    "How can selected Chinese AIGC provisions be represented as traceable legal norms and reviewed controls without presenting machine evidence checks as automated legal judgment?",
  theoreticalBackground:
    "The framework treats legal text, interpretation, operational control, evidence, and final decision as distinct artifacts. This separation lets software execute a reviewed evidence test while preserving the human judgment required for applicability and legal conclusions.",
  theories: ["Legal informatics", "Rules as code", "AI governance", "Human review"],
  studies: [],
  model: ["Legal source", "Legal norm", "Reviewed control", "Evidence test", "Human conclusion"],
  insightLabel: "Research results",
  insights: [],
  publicationStatus: "Paper in revision; independent legal review pending",
  sections: [],
};
