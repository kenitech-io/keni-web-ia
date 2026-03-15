"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Platform", href: "/platform" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/keniengineering/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-color">
      <Container>
        <div className="h-[60px] flex items-center justify-between">
          <p className="text-xs text-muted shrink-0">
            Keni &copy; 2026
          </p>

          <nav className="hidden sm:flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted hover:text-foreground transition-colors duration-200"
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
                className="text-xs text-muted hover:text-foreground transition-colors duration-200"
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
