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
  status: "Research prototype and paper draft",
  roleLabel: "My role",
  role:
    "Research design, legal-clause annotation, schema design, control derivation, validation, and writing",
  methods: ["Python", "YAML", "JSON Schema", "pytest", "SHA-256", "XeLaTeX", "TikZ"],
  visual: "china-evidence",
  links: [
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
  publicationStatus: "Paper draft with planned independent review",
  sections: [],
};

export const chinaFrameworkResults = [
  { value: "5", label: "source instruments" },
  { value: "11", label: "canonical norm artifacts" },
  { value: "12", label: "machine-readable controls" },
  { value: "21 / 21", label: "designed validation cases routed as expected" },
  { value: "46", label: "pytest tests passed" },
];

export const chinaResearchQuestions = [
  "Chinese AIGC legal and regulatory provisions can be decomposed into which semantic elements for machine-readable representation?",
  "How can traceable mappings be established between source clauses, legal interpretations, control objectives, evidence requirements, and executable tests?",
  "Which categories of legal obligations are fully automatable, partially automatable, or dependent on human legal review?",
  "Can the proposed transformation method generate consistent and executable controls for a synthetic actor and digital human use case?",
];

export const chinaTransformationSteps = [
  "Formal Chinese legal provision",
  "Complete legal norm artifact",
  "Human-confirmed interpretation and applicability",
  "Machine-readable control",
  "Evaluator execution",
  "Machine result and human final conclusion",
];

export const automationBoundary = [
  {
    control: "Metadata label",
    applicability: "Fully automatable",
    evidenceTest: "Fully automatable",
    finalDecision: "Fully automatable",
  },
  {
    control: "Visible-label prominence",
    applicability: "Human-confirmed",
    evidenceTest: "Partially automatable",
    finalDecision: "Human review required",
  },
  {
    control: "PIPL separate-consent evidence",
    applicability: "Human-confirmed",
    evidenceTest: "Fully automatable",
    finalDecision: "Human review required",
  },
];
