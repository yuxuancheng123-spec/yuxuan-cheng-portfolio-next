import { chinaLegalFrameworkItem } from "@/data/china-legal-framework";

export type ContentKind = "Work" | "Research" | "Writing";
export type DetailVisual =
  | "actor-assessment"
  | "china-evidence"
  | "nist-dashboard"
  | "network-study"
  | "ai-awareness"
  | "face-theft"
  | "permission-first";

export type ContentLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ContentSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type DetailBase = {
  slug: string;
  kind: ContentKind;
  typeLabel?: string;
  title: string;
  subtitle: string;
  summary: string;
  seoDescription: string;
  year: string;
  status: string;
  roleLabel: string;
  role: string;
  methods: string[];
  visual: DetailVisual;
  links: ContentLink[];
  relatedItems: string[];
};

export type WorkItem = DetailBase & {
  kind: "Work";
  overview: string;
  workflowTitle: string;
  workflow: Array<{ label: string; detail: string }>;
  signals: Array<{ label: string; value: string; note: string }>;
  evidenceChecklist: string[];
  sample: {
    label: string;
    title: string;
    description: string;
    lines: string[];
  };
  sections: ContentSection[];
};

export type ResearchItem = DetailBase & {
  kind: "Research";
  researchQuestion: string;
  theoreticalBackground: string;
  theories: string[];
  studies: Array<{
    label: string;
    title: string;
    description: string;
    meta: string;
  }>;
  model: string[];
  insightLabel: string;
  insights: string[];
  publicationStatus: string;
  conference?: string;
  sections: ContentSection[];
};

export type WritingItem = DetailBase & {
  kind: "Writing";
  published: string;
  readingTime: string;
  lede: string;
  pullQuote: string;
  sections: ContentSection[];
  references: string[];
};

export type DetailItem = WorkItem | ResearchItem | WritingItem;

export const workItems: WorkItem[] = [
  {
    slug: "ai-generated-actor-compliance",
    kind: "Work",
    typeLabel: "Privacy Engineering / AI Governance",
    title: "AI-Generated Actor Compliance Assessment",
    subtitle: "A privacy engineering and AI governance prototype for synthetic-media compliance operations.",
    summary:
      "A privacy engineering prototype for managing synthetic-media compliance cases across intake, risk assessment, evidence review, remediation, approval, and audit logging.",
    seoDescription:
      "A privacy engineering and AI governance prototype for synthetic-media compliance case management, evidence review, approval, reporting, and audit logging.",
    year: "2026",
    status: "Working prototype",
    roleLabel: "My role",
    role: "Problem framing, privacy architecture, rule design, workflow design, development, and validation",
    methods: ["Python", "FastAPI", "Pydantic", "SQLAlchemy", "SQLite", "pytest", "JSON Schema", "Docker", "JavaScript"],
    visual: "actor-assessment",
    links: [
      {
        label: "Live workspace",
        href: "https://yuxuancheng123-spec.github.io/ai-generated-actor-compliance/web/",
        external: true,
      },
      {
        label: "GitHub repository",
        href: "https://github.com/yuxuancheng123-spec/ai-generated-actor-compliance",
        external: true,
      },
    ],
    relatedItems: ["/research/china-aigc-legal-clause-to-control", "/work/nist-ai-rmf-dashboard"],
    overview:
      "The assessment is designed for a fictional synthetic-media platform that accepts face, voice, motion, video, and authorization records. It moves a compliance case toward an evidence-supported, accountable, and auditable decision instead of stopping at a questionnaire score.",
    workflowTitle: "Compliance case workflow",
    workflow: [
      { label: "Intake", detail: "Capture project facts, represented person, source media, intended use, and jurisdiction." },
      { label: "Risk assessment", detail: "Run explainable, versioned rules and route hard stops or missing facts to reviewers." },
      { label: "Evidence review", detail: "Request, submit, inspect, accept, reject, or clarify evidence against linked requirements." },
      { label: "Remediation", detail: "Turn open findings into assigned tasks, due dates, and release-blocking actions." },
      { label: "Approval", detail: "Move through business, privacy, legal, brand-safety, and final-approval gates." },
      { label: "Audit trail", detail: "Retain activity history, report versions, evidence status, and decision reasoning." },
    ],
    signals: [
      { label: "Case", value: "Traceable", note: "A stable case record links facts, rules, evidence, owners, and outcomes" },
      { label: "Consent", value: "Scoped", note: "Likeness, voice, training, territory, duration, and revocation stay distinct" },
      { label: "Rules", value: "Explainable", note: "Triggered rules, hard stops, gaps, controls, and reviewer paths are visible" },
      { label: "Evidence", value: "Lifecycle", note: "Artifacts move through requested, submitted, reviewed, accepted, or rejected states" },
      { label: "Approval", value: "Gated", note: "Privacy and legal review remain explicit release gates" },
      { label: "Audit", value: "Recorded", note: "Activity events and report output preserve the decision context" },
    ],
    evidenceChecklist: [
      "Verified likeness or rights-holder authorization",
      "Separate voice and digital-replica authorization",
      "Purpose, commercial-use, territory, and duration scope",
      "Training, fine-tuning, secondary-use, and revocation terms",
      "Visible disclosure and machine-readable metadata plan",
      "Watermark or provenance record where required",
      "Vendor deletion commitment and retention date",
      "Reviewer, remediation owner, and approval condition",
    ],
    sample: {
      label: "Sample result",
      title: "Evidence-supported decision",
      description:
        "A case can expose the difference between a valid likeness license and a missing voice or training permission, then keep release blocked until the required evidence and reviewer gates are complete.",
      lines: [
        '"case_id": "FM-2026-014"',
        '"risk_level": "high"',
        '"triggered_rule": "R-01"',
        '"evidence_status": "under_review"',
        '"release_gate": "legal_review"',
      ],
    },
    sections: [
      {
        heading: "Why synthetic-media compliance becomes an operational problem",
        paragraphs: [
          "Synthetic-media risks do not end when a reviewer labels a request high or low risk. Face, voice, and motion data move through intake, generation, publication, redistribution, complaints, and remediation. Each step needs an accountable owner and an inspectable record.",
          "The project therefore treats compliance as operational case management: a decision must be connected to the person represented, the intended use, the required evidence, the reviewer path, and the release gate.",
        ],
      },
      {
        heading: "From risk assessment to compliance case management",
        paragraphs: [
          "The original interaction pattern of filling a form and receiving a score is now embedded within a case workspace. Dashboard, Review Queue, Case Detail, Intake, Risks, Evidence, Findings, Tasks, Approvals, Activity, and Report each support a different decision step.",
        ],
        points: [
          "A risk label does not replace an evidence review.",
          "A visible AI label does not cure missing authorization.",
          "A completed task does not skip required approvals.",
          "A report is a decision artifact, not the workflow itself.",
        ],
      },
      {
        heading: "Canonical case, consent, and evidence schema",
        paragraphs: [
          "The reference backend models canonical intake, consent, evidence, assessment, triggered-rule, and audit-log records. Consent scope includes purpose limitation, likeness and voice coverage, territory, duration, training use, secondary use, revocation, and compensation rather than reducing authorization to a single checkbox.",
        ],
      },
      {
        heading: "Explainable rules engine",
        paragraphs: [
          "The rule engine returns total score, risk level, decision, triggered rules, hard stops, missing information, recommended controls, reviewer path, and a Markdown report. Rule reasoning and versioning make a result inspectable rather than presenting a hidden model verdict.",
        ],
      },
      {
        heading: "Evidence, findings, tasks, and approvals",
        paragraphs: [
          "Evidence is treated as a lifecycle object with owner, reviewer, status, collection date, expiry date, version, and linked requirement. Open evidence gaps become findings and remediation tasks; approval stages make release conditions explicit rather than implicit in a score.",
        ],
      },
      {
        heading: "Privacy controls and LINDDUN threat model",
        paragraphs: [
          "The privacy architecture maps face, voice, motion, consent, prompt, generated media, provenance metadata, and incident records through the lifecycle. LINDDUN misuse cases cover forged consent, label stripping, vendor training misuse, unauthorized likeness use, and insider access.",
        ],
      },
      {
        heading: "Testing and validation",
        paragraphs: [
          "The reference implementation uses pytest to exercise authorization failures, sensitive contexts, labeling and provenance controls, rule precedence, role checks, audit logging, retention, and soft deletion. The deployed GitHub Pages interface remains a static workflow prototype using demo data.",
        ],
      },
      {
        heading: "Prototype boundaries",
        paragraphs: [
          "GitHub Pages demonstrates case-management interaction with in-memory demo data. It is not connected to the FastAPI backend, does not provide authentication, persistent collaboration, real file upload, production access control, or jurisdiction-specific legal advice.",
        ],
      },
      {
        heading: "My contribution",
        paragraphs: [
          "I framed the synthetic-media problem, designed the privacy architecture and schemas, defined rules and controls, built the workflow and static interface, and developed the reference backend, documentation, validation approach, and evidence artifacts.",
        ],
      },
    ],
  },
  {
    slug: "china-ai-compliance-evidence",
    kind: "Work",
    title: "China AIGC Legal-Clause-to-Control Framework",
    subtitle: "Legacy route for the research framework now presented in the Research section.",
    summary:
      "A legacy route retained for existing links; it redirects to the current legal-clause-to-control research framework.",
    seoDescription:
      "A legacy route retained for the China AIGC legal-clause-to-control research framework.",
    year: "2026",
    status: "Research prototype",
    roleLabel: "My role",
    role: "Governance researcher and evidence-system designer",
    methods: ["Policy mapping", "Evidence schema", "Control design", "Lifecycle modeling"],
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
    overview:
      "The framework addresses a recurring governance gap: policy documents describe what an organization should do, but they rarely show whether a specific request, model run, publication, or incident actually satisfied the requirement.",
    workflowTitle: "Evidence pipeline",
    workflow: [
      { label: "Policy", detail: "Identify the authoritative rule, policy version, and applicable scope." },
      { label: "Requirement", detail: "Translate the rule into a testable obligation with a clear trigger." },
      { label: "Control", detail: "Assign the technical or operational mechanism that satisfies the obligation." },
      { label: "Evidence", detail: "Collect the event, decision, artifact, or verification output produced by the control." },
      { label: "Record", detail: "Bind evidence to owner, source, timestamp, status, and retention history." },
    ],
    signals: [
      { label: "Evidence ID", value: "EV-2048", note: "Stable identifier for retrieval and review" },
      { label: "Requirement", value: "LABEL-04", note: "Machine-readable synthetic content marking" },
      { label: "Owner", value: "Publishing", note: "Accountable operational team" },
      { label: "Source", value: "Release API", note: "System that generated the record" },
      { label: "Status", value: "Verified", note: "Validation state and reviewer outcome" },
      { label: "Timestamp", value: "Immutable", note: "Event time plus policy version" },
    ],
    evidenceChecklist: [
      "Applicable policy and version",
      "Machine-testable requirement",
      "Control owner and system boundary",
      "Evidence source and generation event",
      "Verification status and reviewer",
      "Timestamp and retention rule",
      "Failure or exception reason",
      "Remediation and closure record",
    ],
    sample: {
      label: "Schema example",
      title: "Synthetic content label evidence",
      description:
        "A release event records that both the visible label and the machine-readable identifier were applied before publication, with the policy version and responsible service preserved.",
      lines: [
        '"evidence_id": "EV-2048"',
        '"requirement_id": "LABEL-04"',
        '"source": "publication_gateway"',
        '"status": "verified"',
        '"policy_version": "2026.01"',
      ],
    },
    sections: [
      {
        heading: "Why policy documents are not enough",
        paragraphs: [
          "A policy can require labeling, consent checks, or complaint handling without proving that those actions occurred for a particular piece of content. Evidence becomes useful only when it is linked to the triggering event and can be traced to a responsible control.",
        ],
      },
      {
        heading: "Where the framework fits",
        paragraphs: [
          "The model is suitable for generative AI services, synthetic media workflows, digital-human production, content moderation, and other systems where organizations need request-level proof of a governance decision.",
        ],
        points: [
          "Release and labeling decisions",
          "Consent and authorization verification",
          "Safety evaluation and exception handling",
          "Complaint, takedown, and remediation workflows",
        ],
      },
      {
        heading: "Key design decision",
        paragraphs: [
          "The schema treats evidence as a lifecycle object rather than a static attachment. Records can be created, validated, superseded, revoked, linked to an incident, and retained according to policy.",
        ],
      },
      {
        heading: "Prototype boundary",
        paragraphs: [
          "This is a governance prototype, not a legal certification or production audit system. Field definitions, signing methods, retention controls, and integrations would need to be adapted to the organization, system architecture, and applicable requirements.",
        ],
      },
    ],
  },
  {
    slug: "nist-ai-rmf-dashboard",
    kind: "Work",
    title: "NIST AI RMF Compliance Dashboard",
    subtitle: "A maturity view of governance functions, evidence coverage, and missing controls.",
    summary:
      "A dashboard concept that translates Govern, Map, Measure, and Manage into an assessment workflow with maturity scores and evidence gaps.",
    seoDescription:
      "A NIST AI RMF dashboard concept for assessing Govern, Map, Measure, and Manage maturity, evidence coverage, missing controls, and risk status.",
    year: "2026",
    status: "Dashboard concept",
    roleLabel: "My role",
    role: "AI governance researcher and interaction designer",
    methods: ["NIST AI RMF mapping", "Maturity scoring", "Gap analysis", "Dashboard prototyping"],
    visual: "nist-dashboard",
    links: [],
    relatedItems: ["/research/china-aigc-legal-clause-to-control", "/research/network-crafting"],
    overview:
      "The dashboard is designed for teams that need a structured view of AI risk-management practices without presenting a framework checklist as a formal audit opinion.",
    workflowTitle: "Assessment logic",
    workflow: [
      { label: "Scope", detail: "Define the AI system, decision context, owners, users, and affected groups." },
      { label: "Map", detail: "Connect assessment questions to RMF functions, categories, and organizational controls." },
      { label: "Score", detail: "Rate implementation maturity and confidence in the supporting evidence." },
      { label: "Diagnose", detail: "Identify control gaps, weak evidence, overdue actions, and concentrated risk." },
      { label: "Act", detail: "Assign priorities, owners, due dates, and evidence needed for closure." },
    ],
    signals: [
      { label: "Govern", value: "82 / 100", note: "Policies, roles, accountability, and oversight" },
      { label: "Map", value: "76 / 100", note: "Context, impacts, stakeholders, and risk framing" },
      { label: "Measure", value: "64 / 100", note: "Testing, metrics, uncertainty, and monitoring" },
      { label: "Manage", value: "71 / 100", note: "Prioritization, treatment, response, and recovery" },
      { label: "Coverage", value: "73%", note: "Controls with acceptable supporting evidence" },
      { label: "Risk status", value: "Attention", note: "Four priority gaps remain open" },
    ],
    evidenceChecklist: [
      "System owner and governance charter",
      "Intended use and impacted-stakeholder map",
      "Evaluation plan and metric rationale",
      "Model and data documentation",
      "Human oversight and escalation design",
      "Monitoring and incident response records",
      "Third-party assurance evidence",
      "Risk acceptance and remediation decisions",
    ],
    sample: {
      label: "Sample assessment",
      title: "Evidence coverage needs attention",
      description:
        "Governance ownership is well documented, but vendor evidence, appeal service levels, model-event logging, and post-deployment test cadence remain below the target maturity level.",
      lines: [
        '"overall_maturity": 2.9',
        '"evidence_coverage": 0.73',
        '"priority_gaps": 4',
        '"risk_status": "attention"',
        '"next_review": "2026-Q4"',
      ],
    },
    sections: [
      {
        heading: "Who could use it",
        paragraphs: [
          "The concept is aimed at product governance, model risk, privacy, safety, internal audit, and operational owners who need a shared view of risk treatment and evidence readiness.",
        ],
      },
      {
        heading: "How maturity is interpreted",
        paragraphs: [
          "A score represents the demonstrated maturity of a practice, not the inherent safety of the AI system. Evidence confidence is shown separately so a polished policy cannot receive the same treatment as an implemented and monitored control.",
        ],
      },
      {
        heading: "Key decisions",
        paragraphs: [
          "The dashboard keeps RMF functions visible while prioritizing action. Missing controls are presented with owners and evidence requests rather than as abstract compliance failures.",
        ],
      },
      {
        heading: "Limitations and next steps",
        paragraphs: [
          "This is not a NIST-endorsed assessment or formal audit tool. A production version would require organization-specific scoring criteria, calibrated reviewer guidance, access controls, evidence provenance, and integrations with issue-management systems.",
        ],
      },
    ],
  },
];

export const researchItems: ResearchItem[] = [
  {
    slug: "network-crafting",
    kind: "Research",
    title: "Enhancing Creativity in Diverse Workgroups: The Role of Network Crafting",
    subtitle: "How employees actively reshape relationships to access resources across work and home.",
    summary:
      "A two-study research project examining network crafting, positive affect, performance, work-to-family facilitation, and the moderating role of workgroup diversity.",
    seoDescription:
      "Research on how network crafting supports positive affect, task and creative performance, and work-to-family facilitation in diverse workgroups.",
    year: "2026",
    status: "Working paper",
    roleLabel: "Contribution",
    role: "Theory development, study design, analysis, and manuscript development",
    methods: ["SEM", "PROCESS", "Multilevel analysis", "Diary study"],
    visual: "network-study",
    links: [],
    relatedItems: ["/research/china-aigc-legal-clause-to-control", "/work/nist-ai-rmf-dashboard"],
    researchQuestion:
      "When and how does network crafting help employees in diverse workgroups acquire resources that improve performance at work and enrichment at home?",
    theoreticalBackground:
      "Network crafting treats workplace relationships as something employees can actively shape. The project connects this behavior to resource generation and positive affect, while examining whether workgroup diversity changes the value of those efforts.",
    theories: ["Job crafting", "Conservation of resources", "Work-home resources", "Workgroup diversity"],
    studies: [
      {
        label: "Study 1",
        title: "Three-wave field design",
        description:
          "A temporally separated design testing the proposed indirect effects across network crafting, positive affect, performance, and work-to-family facilitation.",
        meta: "N = 222",
      },
      {
        label: "Study 2",
        title: "Three-day diary study",
        description:
          "A repeated-measures design examining within-person variation in network crafting and daily resource enrichment.",
        meta: "Final N = 199",
      },
    ],
    model: [
      "Network crafting",
      "Positive affect",
      "Task performance",
      "Creative performance",
      "Work-to-family facilitation",
    ],
    insightLabel: "Main findings",
    insights: [
      "Network crafting is modeled as a proactive route to relational and emotional resources.",
      "Positive affect explains how network crafting can translate into task and creative performance.",
      "The model extends beyond work outcomes to work-to-family facilitation.",
      "Workgroup diversity is examined as a boundary condition rather than assumed to be uniformly beneficial or harmful.",
    ],
    publicationStatus: "Manuscript in progress",
    conference: "Presented at the CSSPA Annual Meeting",
    sections: [
      {
        heading: "My contribution",
        paragraphs: [
          "My work spans theoretical framing, the two-study research design, analytical strategy, interpretation, and manuscript development. I am especially interested in connecting workplace network behavior to both performance and resource enrichment beyond work.",
        ],
      },
      {
        heading: "Reflection",
        paragraphs: [
          "The project reinforced the importance of separating between-person patterns from daily within-person behavior. It also sharpened my interest in systems where individual agency interacts with structural conditions such as team composition and access to resources.",
        ],
      },
    ],
  },
];

// Writing pages were retired from the site; restore entries from git history if needed.
export const writingItems: WritingItem[] = [];

export const allContent: DetailItem[] = [...workItems, ...researchItems, chinaLegalFrameworkItem, ...writingItems];

export function getWorkItem(slug: string) {
  return workItems.find((item) => item.slug === slug);
}

export function getResearchItem(slug: string) {
  return researchItems.find((item) => item.slug === slug);
}

export function getWritingItem(slug: string) {
  return writingItems.find((item) => item.slug === slug);
}

export function getContentPath(item: DetailItem) {
  return `/${item.kind.toLowerCase()}/${item.slug}`;
}

export function getContentByPath(path: string) {
  return allContent.find((item) => getContentPath(item) === path);
}

export function getAdjacentItems<T extends DetailItem>(collection: T[], slug: string) {
  const index = collection.findIndex((item) => item.slug === slug);
  return {
    previous: index > 0 ? collection[index - 1] : undefined,
    next: index >= 0 && index < collection.length - 1 ? collection[index + 1] : undefined,
  };
}
