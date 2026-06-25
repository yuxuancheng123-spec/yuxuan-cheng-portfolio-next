import Link from "next/link";

export default function ChinaComplianceProjectPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f1] text-[#181916]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(59,130,246,0.12),transparent_30%),linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:auto,80px_80px,80px_80px]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-4 py-4 pb-24 sm:px-6 sm:py-6">
        <section className="rounded-[28px] bg-gradient-to-br from-sky-50 to-indigo-100/70 p-6 shadow-sm shadow-black/[0.04] sm:p-8">
          <p className="text-sm font-semibold text-black/45">Latest Project</p>
          <h1 className="mt-8 max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.015em] sm:text-6xl">
            China AI Compliance Evidence Framework
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-black/62">
            A prototype for generating machine-readable compliance evidence for
            China-facing AIGC actor and digital human platforms.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <a
              href="https://github.com/yuxuancheng123-spec/china-aigc-compliance-evidence"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-700"
            >
              Open GitHub
            </a>
            <a
              href="/china-compliance.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-black/70 transition hover:-translate-y-0.5 hover:bg-white"
            >
              View PDF
            </a>
          </div>
        </section>
      </div>

      <nav className="fixed bottom-5 left-1/2 z-20 flex -translate-x-1/2 rounded-full border border-black/8 bg-white/80 p-1.5 shadow-xl shadow-black/10 backdrop-blur">
        <Link
          href="/"
          className="rounded-full px-5 py-3 text-sm font-medium text-black/70 transition hover:bg-black hover:text-white"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="rounded-full px-5 py-3 text-sm font-medium text-black/70 transition hover:bg-black hover:text-white"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="rounded-full px-5 py-3 text-sm font-medium text-black/70 transition hover:bg-black hover:text-white"
        >
          Contact
        </Link>
      </nav>
    </main>
  );
}
