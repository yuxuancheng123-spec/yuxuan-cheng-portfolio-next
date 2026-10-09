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
    <footer id="contact" className="yc-section pb-28 sm:pb-32">
      <div className="relative overflow-hidden rounded-[30px] bg-[#17222a] px-5 py-8 text-[#f5f7f5] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="footer-signal" aria-hidden="true" />
        <p className="relative max-w-xl text-base leading-6 text-white/58 sm:text-lg">
          Interested in responsible AI, privacy engineering, or research
          collaboration?
        </p>
        <div className="relative mt-12 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:items-end lg:justify-between">
          <a
            href="mailto:yuxuancheng123@gmail.com"
            className="group w-fit text-[clamp(3rem,8vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.055em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9cc2d8]"
          >
            Let&apos;s talk<span className="inline-block text-[#9cc2d8] transition duration-300 group-hover:translate-x-2">.</span>
          </a>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="border-b border-white/25 pb-1 text-sm text-white/72 transition hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9cc2d8]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-[#334652]/48">
        Yuxuan Cheng, 2026
      </p>
    </footer>
  );
}
