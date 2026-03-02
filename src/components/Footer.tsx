"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

const footerLinks = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-transparent">
      <Container>
        <div className="h-[60px] flex items-center justify-between">
          {/* Left: Copyright */}
          <p className="text-xs text-muted shrink-0">
            Keni &copy; 2026
          </p>

          {/* Center: Nav links */}
          <nav className="hidden sm:flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-foreground-secondary hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Social links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-foreground-secondary hover:text-accent transition-colors duration-200"
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
