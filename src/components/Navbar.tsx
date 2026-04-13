"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";

const exploreLinks = [
  { name: "DevOps Consulting", href: "/devops-consulting" },
  { name: "Infrastructure Audit", href: "/infrastructure-audit" },
  { name: "CI/CD Consulting", href: "/ci-cd-consulting" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

const mobileLinks = [
  { name: "Platform", href: "/platform" },
  { name: "Health Check", href: "/healthcheck" },
  { name: "Pricing", href: "/takeover" },
  ...exploreLinks,
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const pathname = usePathname();
  const exploreRef = useRef<HTMLDivElement>(null);

  const navRef = useRef<HTMLElement>(null);
  const darkRangesRef = useRef<{ top: number; bottom: number }[]>([]);
  const rafRef = useRef<number>(0);
  const lastDarkChange = useRef<number>(0);

  // Cache dark section positions on mount and resize
  const cacheDarkSections = useCallback(() => {
    const scrollY = window.scrollY;
    // data-dark-section elements
    const sections = Array.from(document.querySelectorAll("[data-dark-section]"));
    const ranges = sections.map((el) => {
      const rect = el.getBoundingClientRect();
      return { top: rect.top + scrollY, bottom: rect.bottom + scrollY };
    });
    // Also detect elements with dark computed backgrounds (for homepage)
    const candidates = Array.from(document.querySelectorAll("[class*='bg-[#0'], [class*='bg-[#1'], [class*='bg-black']"));
    candidates.forEach((el) => {
      const bg = window.getComputedStyle(el).backgroundColor;
      if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
        const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
          const brightness = (parseInt(match[1]) * 299 + parseInt(match[2]) * 587 + parseInt(match[3]) * 114) / 1000;
          if (brightness < 80) {
            const rect = el.getBoundingClientRect();
            ranges.push({ top: rect.top + scrollY, bottom: rect.bottom + scrollY });
          }
        }
      }
    });
    darkRangesRef.current = ranges;
  }, []);

  useEffect(() => {
    // Initial cache after a short delay to let page render
    const timer = setTimeout(cacheDarkSections, 100);
    window.addEventListener("resize", cacheDarkSections);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", cacheDarkSections);
    };
  }, [cacheDarkSections, pathname]);

  const handleScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const y = window.scrollY;
      const navMid = y + 32;
      let dark = false;
      const ranges = darkRangesRef.current;
      for (let i = 0; i < ranges.length; i++) {
        if (ranges[i].top < navMid && ranges[i].bottom > navMid) {
          dark = true;
          break;
        }
      }
      // Debounce dark/light transitions to prevent flickering at section edges
      const now = Date.now();
      setOnDark((prev) => {
        if (dark === prev) return prev;
        if (now - lastDarkChange.current < 150) return prev;
        lastDarkChange.current = now;
        return dark;
      });
    });
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setExploreOpen(false);
  }, [pathname]);

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

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 h-[64px] flex items-center bg-transparent"
      >
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className={`text-xs font-medium tracking-tight transition-colors duration-300 ${onDark ? "text-white" : "text-foreground"}`}>
              Keni
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-baseline gap-8">
              <Link href="/platform" className={`text-xs font-medium transition-colors duration-300 ${onDark ? "text-white hover:text-white/70" : "text-foreground hover:text-foreground/70"}`}>
                Platform
              </Link>
              <Link href="/healthcheck" className={`text-xs font-medium transition-colors duration-300 ${onDark ? "text-white hover:text-white/70" : "text-foreground hover:text-foreground/70"}`}>
                Health Check
              </Link>
              <Link href="/takeover" className={`text-xs font-medium transition-colors duration-300 ${onDark ? "text-white hover:text-white/70" : "text-foreground hover:text-foreground/70"}`}>
                Pricing
              </Link>
              {/* Explore dropdown */}
              <div
                ref={exploreRef}
                className="relative"
                onMouseEnter={() => setExploreOpen(true)}
                onMouseLeave={() => setExploreOpen(false)}
              >
                <button className={`text-xs font-medium transition-colors duration-300 ${onDark ? "text-white hover:text-white/70" : "text-foreground hover:text-foreground/70"}`}>
                  Explore
                </button>

                <AnimatePresence>
                  {exploreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-8 right-0 min-w-[180px] py-3 rounded-lg border bg-background border-border-color"
                    >
                      {exploreLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-5 py-2 text-xs font-light transition-colors duration-200 text-foreground hover:text-muted"
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
                className={`text-xs font-medium transition-all duration-300 px-3 py-1 rounded-full ${onDark ? "bg-white hover:bg-white/85 text-black" : "bg-foreground hover:bg-charcoal text-background"}`}
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
                  animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`block h-[1px] w-full origin-center transition-colors duration-300 ${onDark ? "bg-white" : "bg-foreground"}`}
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`block h-[1px] w-full transition-colors duration-300 ${onDark ? "bg-white" : "bg-foreground"}`}
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`block h-[1px] w-full origin-center transition-colors duration-300 ${onDark ? "bg-white" : "bg-foreground"}`}
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
                {mobileLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`text-3xl font-light transition-colors duration-200 ${
                        isActive(link.href) ? "text-foreground" : "text-muted hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                  }}
                >
                  <Link
                    href="/contact"
                    className={`text-3xl font-light transition-colors duration-200 ${
                      isActive("/contact") ? "text-foreground" : "text-muted hover:text-foreground"
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
