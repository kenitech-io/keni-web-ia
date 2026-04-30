"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

const columns = [
  {
    title: "MODALIDADES",
    links: [
      { name: "Presencial", href: "/presencial" },
      { name: "Web", href: "/web" },
    ],
  },
  {
    title: "RECURSOS",
    links: [
      { name: "Casos", href: "/casos" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "EMPRESA",
    links: [
      { name: "Equipo", href: "/about" },
      { name: "Contacto", href: "/contact" },
      { name: "Agenda una llamada", href: "/book" },
    ],
  },
  {
    title: "CONECTA",
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
                          className="text-xs text-muted hover:text-foreground transition-colors duration-200 visited:text-muted"
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

          <div className="mt-24">
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} Keni Engineering
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
