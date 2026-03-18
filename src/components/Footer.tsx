"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";

const footerLinks: { name: string; href: string }[] = [];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/keniengineering/" },
];

export default function Footer() {
  const pathname = usePathname();
  const isDark = pathname === "/devops-consulting" || pathname === "/contact";

  return (
    <footer className={`border-t ${isDark ? "border-[#3a3a3a] bg-[#2c2c2c]" : "border-border-color"}`}>
      <Container>
        <div className="h-[60px] flex items-center justify-between">
          <p className={`text-xs shrink-0 ${isDark ? "text-[#7a756f]" : "text-muted"}`}>
            Keni &copy; 2026
          </p>

          <nav className="hidden sm:flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs transition-colors duration-200 ${
                  isDark
                    ? "text-[#7a756f] hover:text-[#e8e4df]"
                    : "text-muted hover:text-foreground"
                }`}
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
                className={`text-xs transition-colors duration-200 ${
                  isDark
                    ? "text-[#7a756f] hover:text-[#e8e4df]"
                    : "text-muted hover:text-foreground"
                }`}
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
