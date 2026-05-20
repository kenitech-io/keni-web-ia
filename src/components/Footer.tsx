"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";

const columns = [
  {
    title: "RECURSOS",
    links: [
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "EMPRESA",
    links: [
      { name: "Acerca de nosotros", href: "/about" },
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

// Rutas con fondo gris oscuro en toda la página → footer también oscuro
// (experimento: todo blanco → sin rutas oscuras)
const DARK_ROUTES: string[] = [];

export default function Footer() {
  const pathname = usePathname();
  const dark = DARK_ROUTES.includes(pathname);

  const titleClass = dark ? "text-white" : "text-foreground";
  const linkClass = dark
    ? "text-white/55 hover:text-white transition-colors duration-200"
    : "text-muted hover:text-foreground transition-colors duration-200";
  const copyClass = dark ? "text-white/55" : "text-muted";

  return (
    <footer
      {...(dark ? { "data-dark-section": true } : {})}
      className={`border-t ${
        dark ? "bg-[#1E1E1E] border-white/10" : "border-border-color"
      }`}
    >
      <Container>
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p
                  className={`text-[0.6rem] uppercase tracking-[0.2em] mb-6 ${titleClass}`}
                >
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
                          className={`text-xs ${linkClass}`}
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className={`text-xs ${linkClass}`}
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
            <p className={`text-xs ${copyClass}`}>
              &copy; {new Date().getFullYear()} Keni Engineering
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
