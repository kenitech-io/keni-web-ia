"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

const footerLinks: { name: string; href: string }[] = [
  { name: "DevOps Consulting", href: "/devops-consulting" },
  { name: "Infrastructure Audit", href: "/infrastructure-audit" },
  { name: "Managed DevOps", href: "/managed-devops" },
  { name: "Platform Engineering", href: "/platform-engineering" },
  { name: "CI/CD Consulting", href: "/ci-cd-consulting" },
  { name: "Blog", href: "/blog" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/keniengineering/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-color">
      <Container>
        <div className="h-[60px] flex items-center justify-between">
          <p className="text-xs shrink-0 text-muted">
            Keni &copy; 2026
          </p>

          <nav className="hidden sm:flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-colors duration-200 text-muted hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs transition-colors duration-200 text-muted hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
