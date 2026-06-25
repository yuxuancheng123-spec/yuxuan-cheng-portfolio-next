import Link from "next/link";

const projects = [
  {
    title: "AI-Generated Actor Compliance Assessment",
    description:
      "Consent, labeling, identity risk, and evidence bundles for synthetic actor use cases.",
    tag: "Synthetic media",
    href: "https://yuxuancheng123-spec.github.io/ai-generated-actor-compliance/web/",
    tone: "mint",
    icon: "AI",
    visual: "identity",
    size: "large",
  },
  {
    title: "China AI Compliance Evidence Framework",
    description:
      "Machine-readable compliance evidence for China-facing AIGC actor and digital human platforms.",
    tag: "AIGC compliance",
    href: "https://github.com/yuxuancheng123-spec/china-aigc-compliance-evidence",
    artifactHref: "/china-compliance.pdf",
    tone: "blue",
    icon: "CN",
    visual: "document",
    size: "tall",
  },
  {
    title: "NIST AI RMF Compliance Dashboard",
    description:
      "Govern, Map, Measure, and Manage maturity scoring with missing-control analysis.",
    tag: "Risk dashboard",
    href: "#contact",
    tone: "sand",
    icon: "RMF",
    visual: "dashboard",
    size: "wide",
  },
];

const research = [
  "Navigating Diversity: The Role of Network Crafting in Resource Enrichment Across Work and Home.",
];

const flow = ["Policy", "Evidence", "Controls", "Audit"];

function projectSize(size: string) {
  if (size === "large") return "min-h-[350px]";
  if (size === "tall") return "min-h-[350px]";
  if (size === "wide") return "min-h-[350px]";
  return "min-h-[350px]";
}

function projectTone(tone: string) {
  if (tone === "mint") return "from-emerald-50 to-teal-100/70";
  if (tone === "blue") return "from-sky-50 to-indigo-100/70";
  if (tone === "sand") return "from-stone-50 to-amber-100/70";
  return "from-rose-50 to-pink-100/70";
}

function ProjectVisual({ icon, visual }: { icon: string; visual: string }) {
  if (visual === "document") {
    return (
      <>
        <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
          <div className="absolute left-6 top-28 h-24 w-36 rounded-2xl border border-black/60" />
          <div className="absolute left-9 top-34 h-2 w-28 rounded-full bg-black" />
          <div className="absolute left-9 top-40 h-2 w-20 rounded-full bg-black" />
          <div className="absolute bottom-9 right-7 grid w-44 grid-cols-3 gap-1.5">
            {Array.from({ length: 9 }).map((_, index) => (
              <span key={index} className="h-3 rounded-sm bg-black" />
            ))}
          </div>
        </div>
        <div className="absolute right-5 top-16 h-44 w-52 rotate-3 rounded-[24px] bg-white/70 p-5 shadow-xl shadow-black/10 transition duration-500 group-hover:rotate-0 group-hover:scale-[1.03]">
          <div className="mb-4 flex items-center justify-between">
            <span className="h-7 w-7 rounded-lg bg-red-500 text-center text-[10px] font-bold leading-7 text-white">
              PDF
            </span>
            <span className="rounded-full bg-black px-2.5 py-1 text-[10px] font-bold text-white">
              {icon}
            </span>
          </div>
          <div className="space-y-2.5">
            <div className="h-2.5 rounded-full bg-sky-200" />
            <div className="h-2.5 w-10/12 rounded-full bg-sky-100" />
            <div className="h-14 rounded-2xl bg-red-50" />
            <div className="h-2.5 w-8/12 rounded-full bg-sky-100" />
            <div className="h-2.5 w-5/12 rounded-full bg-sky-100" />
          </div>
        </div>
      </>
    );
  }

  if (visual === "dashboard") {
    return (
      <>
        <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
          <div className="absolute left-6 top-28 flex gap-1.5">
            {["Govern", "Map", "Measure", "Manage"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-black px-2 py-1 text-[9px] font-bold"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="absolute bottom-10 right-8 space-y-2">
            <div className="h-2 w-40 rounded-full bg-black" />
            <div className="h-2 w-28 rounded-full bg-black" />
            <div className="h-2 w-36 rounded-full bg-black" />
          </div>
        </div>
        <div className="absolute right-5 top-16 h-44 w-60 -rotate-2 rounded-[24px] bg-white/70 p-4 shadow-xl shadow-black/10 transition duration-500 group-hover:rotate-0 group-hover:scale-[1.03]">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold text-amber-900">
              {icon}
            </span>
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="h-16 rounded-2xl bg-stone-100 p-3">
              <div className="h-2.5 w-10 rounded-full bg-stone-300" />
              <div className="mt-4 h-5 w-14 rounded-full bg-black" />
            </div>
            <div className="h-16 rounded-2xl bg-white p-3">
              <div className="h-2.5 w-9 rounded-full bg-stone-300" />
              <div className="mt-4 h-5 w-16 rounded-full bg-teal-200" />
            </div>
            <div className="col-span-2 h-12 rounded-2xl bg-white p-3">
              <div className="h-2.5 rounded-full bg-stone-200" />
              <div className="mt-2.5 h-2.5 w-7/12 rounded-full bg-stone-300" />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="pointer-events-none absolute inset-0 opacity-[0.17]">
        <div className="absolute left-7 top-28 h-28 w-28 rounded-full border-2 border-black" />
        <div className="absolute left-14 top-36 h-14 w-14 rounded-full bg-black" />
        <div className="absolute bottom-10 right-8 rounded-full border border-black px-3 py-1 text-[10px] font-bold">
          AI LABEL
        </div>
        <div className="absolute bottom-16 right-20 flex items-center gap-2 rounded-full border border-black px-3 py-1 text-[10px] font-bold">
          <span className="h-2 w-2 rounded-sm border border-black" />
          CONSENT
        </div>
      </div>
      <div className="absolute right-5 top-16 h-44 w-52 -rotate-3 rounded-[24px] bg-white/70 p-5 shadow-xl shadow-black/10 transition duration-500 group-hover:rotate-0 group-hover:scale-[1.03]">
        <div className="relative h-full overflow-hidden rounded-[20px] bg-gradient-to-br from-teal-50 to-white">
          <div className="absolute inset-x-7 top-9 h-20 rounded-full border border-teal-200/80" />
          <div className="absolute left-1/2 top-11 grid h-20 w-20 -translate-x-1/2 place-items-center rounded-full bg-black text-lg font-bold text-white">
            {icon}
          </div>
          <div className="absolute bottom-5 left-5 right-5 h-12 rounded-2xl bg-white/85 shadow-lg shadow-black/10" />
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f4f1] text-[#181916]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(20,184,166,0.14),transparent_28%),radial-gradient(circle_at_78%_8%,rgba(99,102,241,0.1),transparent_26%),linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:auto,auto,80px_80px,80px_80px]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 py-4 pb-24 sm:px-6 sm:py-5">
        <header className="mb-2.5 flex items-center justify-between rounded-[22px] border border-black/5 bg-white/75 px-4 py-3 shadow-sm shadow-black/[0.03] backdrop-blur">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Yuxuan Cheng
          </a>
          <div className="hidden items-center gap-2 text-sm text-black/55 sm:flex">
            <span>AI Governance</span>
            <span>·</span>
            <span>Privacy Engineering</span>
            <span>·</span>
            <span>Responsible AI Systems</span>
          </div>
        </header>

        <section
          id="top"
          className="grid auto-rows-[minmax(165px,auto)] gap-3 lg:grid-cols-4"
        >
          <article className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-white to-[#e6f6f2] p-6 text-[#181916] shadow-sm shadow-black/[0.04] lg:col-span-2">
            <div className="absolute right-6 top-6 grid h-20 w-20 place-items-center rounded-[22px] bg-white/70 shadow-sm shadow-black/5 backdrop-blur">
              <div className="h-10 w-10 rounded-full border border-teal-300/60 bg-teal-100" />
            </div>
            <p className="text-sm font-semibold text-black/45">Positioning</p>
            <h1 className="mt-12 max-w-xl text-4xl font-medium leading-[0.95] tracking-[-0.015em] sm:text-6xl">
              Yuxuan Cheng
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-6 text-black/62">
              AI Governance · Privacy Engineering · Responsible AI Systems
            </p>
          </article>

          <Link
            href="/about"
            className="group relative overflow-hidden rounded-[28px] bg-white p-6 shadow-sm shadow-black/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 lg:col-span-2"
          >
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-teal-100 blur-2xl transition duration-500 group-hover:scale-125" />
            <div className="relative flex h-full min-h-[178px] flex-col justify-between">
              <p className="text-sm font-semibold text-black/45">About</p>
              <div>
                <h2 className="max-w-xl text-4xl font-medium leading-[0.95] tracking-[-0.015em] sm:text-5xl">
                  My journey.
                </h2>
                <p className="mt-4 max-w-lg text-lg leading-6 text-black/62">
                  Research, AI governance, privacy engineering, and synthetic
                  media risk.
                </p>
              </div>
            </div>
          </Link>

          <article className="rounded-[28px] bg-white p-6 shadow-sm shadow-black/[0.04]">
            <p className="text-sm font-semibold text-black/45">Evidence flow</p>
            <div className="mt-6 space-y-2">
              {flow.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#eef7f4] text-xs font-bold text-teal-700">
                    {index + 1}
                  </span>
                  <span className="text-base font-semibold tracking-[-0.02em]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article
            id="research"
            className="rounded-[28px] bg-white p-6 shadow-sm shadow-black/[0.04] lg:col-span-3"
          >
            <p className="text-sm font-semibold text-black/45">Research</p>
            <div className="mt-6 divide-y divide-black/8">
              {research.map((item) => (
                <p
                  key={item}
                  className="py-3 text-lg font-semibold leading-snug tracking-[-0.02em]"
                >
                  {item}
                </p>
              ))}
            </div>
          </article>
        </section>

        <section id="work" className="mt-2.5 grid gap-3 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`${projectSize(project.size)} group relative overflow-hidden rounded-[28px] bg-gradient-to-br ${projectTone(project.tone)} p-6 shadow-sm shadow-black/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10`}
            >
              <div className="absolute inset-x-6 top-20 h-px bg-black/10" />
              <div className="absolute right-5 top-5 rounded-xl bg-white/75 px-2.5 py-1.5 text-[11px] font-bold text-black/55 shadow-sm">
                {project.tag}
              </div>
              <ProjectVisual icon={project.icon} visual={project.visual} />
              <div className="relative flex h-full min-h-[190px] flex-col justify-between">
                <span className="w-fit rounded-full bg-white/70 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-black/50">
                  Selected project
                </span>
                <div className="max-w-xl pt-20">
                  <h2 className="text-2xl font-medium leading-[1.02] tracking-[-0.018em] sm:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-3 max-w-lg text-base leading-6 text-black/62">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={project.href}
                      target={
                        project.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        project.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="rounded-full bg-black px-3.5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-700"
                    >
                      Open project
                    </a>
                    {"artifactHref" in project ? (
                      <a
                        href={project.artifactHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white/75 px-3.5 py-2 text-sm font-semibold text-black/70 transition hover:-translate-y-0.5 hover:bg-white"
                      >
                        PDF artifact
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section
          id="contact"
          className="mt-2.5 rounded-[28px] bg-white p-6 shadow-sm shadow-black/[0.04] sm:p-8"
        >
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-black/45">Contact</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-medium leading-[1] tracking-[-0.038em] sm:text-5xl">
                From AI policy to machine-readable evidence.
              </h2>
            </div>
            <a
              href="mailto:yuxuancheng123@gmail.com"
              className="w-fit rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-700"
            >
              yuxuancheng123@gmail.com
            </a>
          </div>
        </section>
      </div>

      <nav className="fixed bottom-5 left-1/2 z-20 flex -translate-x-1/2 rounded-full border border-black/8 bg-white/80 p-1 shadow-xl shadow-black/10 backdrop-blur">
        {["Home", "About", "Contact"].map((item) => (
          <Link
            key={item}
            href={
              item === "Home"
                ? "#top"
                : item === "About"
                  ? "/about"
                  : "/contact"
            }
            className="rounded-full px-3 py-2.5 text-xs font-medium text-black/70 transition hover:bg-black hover:text-white sm:px-5 sm:py-3 sm:text-sm"
          >
            {item}
          </Link>
        ))}
      </nav>
    </main>
  );
}
