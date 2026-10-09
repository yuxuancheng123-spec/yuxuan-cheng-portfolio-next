import Link from "next/link";

type SiteNavProps = {
  active?: "Home" | "About" | "Contact";
};

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Research", href: "/#research-writing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteNav({ active }: SiteNavProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur">
      <div className="yc-container flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          aria-current={active === "Home" ? "page" : undefined}
          className="whitespace-nowrap text-[15px] font-semibold text-ink hover:text-accent"
        >
          Yuxuan Cheng
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-0.5 text-sm sm:gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={active === item.label ? "page" : undefined}
              className={`rounded-md px-1.5 py-1.5 transition-colors sm:px-2.5 ${
                active === item.label
                  ? "font-medium text-ink"
                  : "text-subtle hover:text-ink"
              } ${item.label === "Research" ? "hidden sm:inline-flex" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/cv/Yuxuan_Cheng_CV.pdf"
            className="ml-1 rounded-md border border-line bg-white px-2.5 py-1 font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line">
      <div className="yc-container flex flex-col gap-3 py-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>Yuxuan Cheng · AI governance, privacy engineering, responsible AI</p>
        <div className="flex gap-4">
          <a className="hover:text-accent" href="mailto:yuxuancheng123@gmail.com">Email</a>
          <a className="hover:text-accent" href="https://www.linkedin.com/in/yuxuan-cheng-86743631a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="hover:text-accent" href="https://github.com/yuxuancheng123-spec" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:text-accent" href="/cv/Yuxuan_Cheng_CV.pdf">CV</a>
        </div>
      </div>
    </footer>
  );
}
