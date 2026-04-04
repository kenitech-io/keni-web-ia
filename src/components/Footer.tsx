"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

const columns = [
  {
    title: "SERVICES",
    links: [
      { name: "DevOps Consulting", href: "/devops-consulting" },
      { name: "Infrastructure Audit", href: "/infrastructure-audit" },
      { name: "Platform Engineering", href: "/platform-engineering" },
      { name: "CI/CD Consulting", href: "/ci-cd-consulting" },
      { name: "Managed DevOps", href: "/managed-devops" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Health Check", href: "/healthcheck" },
      { name: "Platform", href: "/platform" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "CONNECT",
    links: [
      { name: "LinkedIn", href: "https://www.linkedin.com/company/keniengineering/", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-color">
      <Container>
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-foreground mb-6">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-muted hover:text-foreground transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-xs text-muted hover:text-foreground transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border-color flex items-center justify-between">
            <p className="text-[0.65rem] text-muted/40">
              Keni Engineering &copy; {new Date().getFullYear()}
            </p>
            <p className="text-[0.65rem] text-muted/40">
              Washington, USA
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
