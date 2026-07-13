import Link from "next/link";

type SiteNavProps = {
  active?: "Home" | "About" | "Contact";
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteNav({ active }: SiteNavProps) {
  return (
    <nav
      aria-label="Primary navigation"
      className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 rounded-full border border-black/10 bg-white/88 p-1 shadow-[0_16px_44px_rgba(25,43,55,0.12)] backdrop-blur-xl sm:bottom-5"
    >
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          aria-current={active === item.label ? "page" : undefined}
          className={`rounded-full px-4 py-2.5 text-sm font-medium transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315f82] sm:px-5 ${
            active === item.label
              ? "bg-[#17222a] text-white"
              : "text-black/68 hover:bg-[#e8eef1] hover:text-black"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
