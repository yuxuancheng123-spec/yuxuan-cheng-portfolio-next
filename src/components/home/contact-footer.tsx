const links = [
  { label: "Email", href: "mailto:yuxuancheng123@gmail.com" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yuxuan-cheng-86743631a",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/yuxuancheng123-spec",
    external: true,
  },
  {
    label: "CV",
    href: "/cv/Yuxuan_Cheng_CV.pdf",
  },
];

export function ContactFooter() {
  return (
    <section id="contact" className="yc-section">
      <div className="rounded-xl border border-line bg-white px-5 py-6 sm:px-6">
        <h2 className="yc-h2">Let&apos;s talk.</h2>
        <p className="yc-body mt-1.5 max-w-xl">
          Interested in responsible AI, privacy engineering, or research
          collaboration?
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`yc-button ${index === 0 ? "yc-button-primary" : "yc-button-secondary"}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
