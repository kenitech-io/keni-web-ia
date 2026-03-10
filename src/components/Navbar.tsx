"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const visibleCTAs = useRef(new Set<string>());

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const ids = ["hero-cta", "bottom-cta"];
    visibleCTAs.current.clear();

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) {
      setShowBubble(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleCTAs.current.add(entry.target.id);
          } else {
            visibleCTAs.current.delete(entry.target.id);
          }
        });
        setShowBubble(visibleCTAs.current.size === 0);
      },
      { threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

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
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[64px] flex items-center transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-background/80 border-b border-border-color"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xs font-medium text-foreground tracking-tight"
            >
              Keni
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/about"
                className={`text-xs font-medium transition-colors duration-200 ${
                  isActive("/about")
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`text-xs font-medium transition-all duration-300 ${
                  showBubble
                    ? "bg-foreground hover:bg-charcoal text-background px-3 py-1 rounded-full"
                    : isActive("/contact")
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
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
                  className="block h-[1px] w-full bg-foreground origin-center"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="block h-[1px] w-full bg-foreground"
                />
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: -7 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-[1px] w-full bg-foreground origin-center"
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
                    href="/about"
                    className={`text-3xl font-light transition-colors duration-200 ${
                      isActive("/about")
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    About
                  </Link>
                </motion.div>
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
