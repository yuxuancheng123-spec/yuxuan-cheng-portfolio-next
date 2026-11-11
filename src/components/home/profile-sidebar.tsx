import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import {
  ArrowUpRight,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PinIcon,
} from "@/components/home/icons";

const socialIcons = { github: GithubIcon, linkedin: LinkedinIcon } as const;

function Portrait() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl md:w-[65%]">
      {profile.photo ? (
        <Image
          src={profile.photo}
          alt={profile.name}
          fill
          priority
          sizes="(max-width: 768px) 33vw, 220px"
          className="object-cover object-center"
        />
      ) : (
        <div className="grid h-full w-full place-items-center bg-[#efe9df] font-serif text-4xl font-light tracking-wider text-[#8a7f70]">
          YC
        </div>
      )}
    </div>
  );
}

export function ProfileSidebar() {
  const quickLinks = [
    { label: "CV", href: profile.cv, external: true },
    { label: "Notes", href: "/notes" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="md:sticky md:top-12">
      <div className="flex flex-row-reverse gap-5 md:flex-col md:gap-8">
        <div className="w-1/3 shrink-0 md:w-full">
          <Portrait />
        </div>

        <div className="w-2/3 md:w-full">
          <h1 className="font-serif text-3xl font-light tracking-wide text-ink">
            {profile.name}
          </h1>
          <p className="mt-3 text-xs uppercase leading-relaxed tracking-wide text-subtle">
            {profile.role}
            <br />
            {profile.affiliation.href ? (
              <a
                href={profile.affiliation.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-ink"
              >
                {profile.affiliation.label}
              </a>
            ) : (
              profile.affiliation.label
            )}
          </p>

          <nav
            aria-label="Site"
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2"
          >
            {quickLinks.map((link) => {
              const content = (
                <>
                  <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span className="uppercase tracking-wider">{link.label}</span>
                </>
              );
              const className =
                "group inline-flex items-center gap-1.5 text-xs text-subtle transition-colors duration-300 hover:text-ink";
              return link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <Link key={link.label} href={link.href} className={className}>
                  {content}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <ul className="mt-6 space-y-2 text-sm text-muted">
        <li>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-ink"
          >
            <MailIcon className="shrink-0" />
            <span className="break-words">{profile.email}</span>
          </a>
        </li>
        {profile.socials.map((social) => {
          const Icon = socialIcons[social.icon];
          return (
            <li key={social.href}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-ink"
              >
                <Icon className="shrink-0" />
                <span className="break-words">{social.label}</span>
              </a>
            </li>
          );
        })}
        <li className="inline-flex items-center gap-2">
          <PinIcon className="shrink-0" />
          {profile.location}
        </li>
      </ul>
    </div>
  );
}
