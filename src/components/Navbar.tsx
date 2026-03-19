"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";

const exploreLinks = [
  { name: "DevOps Consulting", href: "/devops-consulting" },
  { name: "Infrastructure Audit", href: "/infrastructure-audit" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const pathname = usePathname();
  const exploreRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setExploreOpen(false);
  }, [pathname]);

  // Close explore dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (exploreRef.current && !exploreRef.current.contains(e.target as Node)) {
        setExploreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isDark = pathname === "/devops-consulting" || pathname === "/contact";



  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[64px] flex items-center transition-all duration-300 ${
          scrolled
            ? isDark
              ? "backdrop-blur-md bg-[#2c2c2c]/80 border-b border-[#3a3a3a]"
              : "backdrop-blur-md bg-background/80 border-b border-border-color"
            : isDark
              ? "bg-transparent border-b border-[#3a3a3a]"
              : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className={`text-xs font-medium tracking-tight ${isDark ? "text-[#e8e4df]" : "text-foreground"}`}
            >
              Keni
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-baseline gap-8">
              <Link
                href="/platform"
                className={`text-xs font-medium transition-colors duration-200 ${
                  isDark ? "text-[#e8e4df] hover:text-[#e8e4df]/70" : "text-foreground hover:text-foreground/70"
                }`}
              >
                Platform
              </Link>
              <Link
                href="/healthcheck"
                className={`text-xs font-medium transition-colors duration-200 ${
                  isDark ? "text-[#e8e4df] hover:text-[#e8e4df]/70" : "text-foreground hover:text-foreground/70"
                }`}
              >
                Health Check
              </Link>
              {/* Explore dropdown */}
              <div
                ref={exploreRef}
                className="relative"
                onMouseEnter={() => setExploreOpen(true)}
                onMouseLeave={() => setExploreOpen(false)}
              >
                <button
                  className={`text-xs font-medium transition-colors duration-200 ${
                    isDark ? "text-[#e8e4df] hover:text-[#e8e4df]/70" : "text-foreground hover:text-foreground/70"
                  }`}
                >
                  Explore
                </button>

                <AnimatePresence>
                  {exploreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute top-8 right-0 min-w-[180px] py-3 rounded-lg border ${
                        isDark
                          ? "bg-[#333] border-[#3a3a3a]"
                          : "bg-background border-border-color"
                      }`}
                    >
                      {exploreLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-5 py-2 text-xs font-light transition-colors duration-200 ${
                            isDark
                              ? "text-[#e8e4df] hover:text-[#7a756f]"
                              : "text-foreground hover:text-muted"
                          }`}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className={`text-xs font-medium transition-all duration-300 ${
                  isDark
                    ? "bg-[#c8c3bc] hover:bg-[#b5b0a9] text-[#1a1a1a] px-3 py-1 rounded-full"
                    : "bg-foreground hover:bg-charcoal text-background px-3 py-1 rounded-full"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center z-50"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 7 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`block h-[1px] w-full origin-center ${isDark ? "bg-[#e8e4df]" : "bg-foreground"}`}
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`block h-[1px] w-full ${isDark ? "bg-[#e8e4df]" : "bg-foreground"}`}
                />
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: -7 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`block h-[1px] w-full origin-center ${isDark ? "bg-[#e8e4df]" : "bg-foreground"}`}
                />
              </div>
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-center md:hidden"
          >
            <Container>
              <motion.nav
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                  },
                }}
                className="flex flex-col gap-6"
              >
                {[
                  { name: "Platform", href: "/platform" },
                  { name: "Health Check", href: "/healthcheck" },
                  ...exploreLinks,
                ].map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, ease: "easeOut" },
                      },
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`text-3xl font-light transition-colors duration-200 ${
                        isActive(link.href)
                          ? "text-foreground"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: "easeOut" },
                    },
                  }}
                >
                  <Link
                    href="/contact"
                    className={`text-3xl font-light transition-colors duration-200 ${
                      isActive("/contact")
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    Contact
                  </Link>
                </motion.div>
              </motion.nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
