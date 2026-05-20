"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";

const exploreLinks = [
  { name: "Plan de transformación con IA", href: "/plan-transformacion-ia" },
  { name: "Capacitación de equipos", href: "/capacitacion-equipos" },
  { name: "Automatización de flujos", href: "/automatizacion-flujos" },
  { name: "Blog", href: "/blog" },
  { name: "Acerca de", href: "/about" },
];

const mobileLinks = [...exploreLinks];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  // Color del fondo que tiene detrás cada lado del navbar (medido en vivo)
  const [bgLeft, setBgLeft] = useState<"dark" | "light">("light");
  const [bgRight, setBgRight] = useState<"dark" | "light">("light");
  const pathname = usePathname();
  const exploreRef = useRef<HTMLDivElement>(null);

  const navRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);
  const lastChangeLeft = useRef<number>(0);
  const lastChangeRight = useRef<number>(0);

  // Sondea el elemento que hay bajo (x, y) en viewport, sube por padres
  // hasta encontrar un bg no transparente y devuelve "dark" o "light".
  const detectBgAt = useCallback((x: number, y: number): "dark" | "light" => {
    // Silencia el propio navbar para que elementFromPoint atraviese
    const nav = navRef.current;
    const prevPE = nav?.style.pointerEvents;
    if (nav) nav.style.pointerEvents = "none";
    let el = document.elementFromPoint(x, y) as HTMLElement | null;
    if (nav) nav.style.pointerEvents = prevPE || "";

    while (el) {
      const bg = window.getComputedStyle(el).backgroundColor;
      if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
        const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);
        if (m) {
          const alpha = m[4] !== undefined ? parseFloat(m[4]) : 1;
          if (alpha > 0.5) {
            const brightness =
              (parseInt(m[1]) * 299 + parseInt(m[2]) * 587 + parseInt(m[3]) * 114) /
              1000;
            return brightness < 128 ? "dark" : "light";
          }
        }
      }
      el = el.parentElement;
    }
    return "light";
  }, []);

  const handleScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const w = window.innerWidth;
      const sampleY = 32; // mitad vertical del navbar (h=64px)
      const newLeft = detectBgAt(40, sampleY);
      const newRight = detectBgAt(Math.max(w - 40, 0), sampleY);
      const now = Date.now();
      setBgLeft((prev) => {
        if (newLeft === prev) return prev;
        if (now - lastChangeLeft.current < 150) return prev;
        lastChangeLeft.current = now;
        return newLeft;
      });
      setBgRight((prev) => {
        if (newRight === prev) return prev;
        if (now - lastChangeRight.current < 150) return prev;
        lastChangeRight.current = now;
        return newRight;
      });
    });
  }, [detectBgAt]);

  useEffect(() => {
    // Pequeño delay inicial para dejar que la página pinte antes del primer sondeo
    const timer = setTimeout(handleScroll, 100);
    const onResize = () => handleScroll();
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, [handleScroll, pathname]);

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
            <Link
              href="/"
              className={`text-xs font-medium tracking-tight transition-colors duration-300 ${
                bgLeft === "dark" ? "text-white" : "text-foreground"
              }`}
            >
              Keni
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-baseline gap-8">
              {/* Explore dropdown */}
              <div
                ref={exploreRef}
                className="relative"
                onMouseEnter={() => setExploreOpen(true)}
                onMouseLeave={() => setExploreOpen(false)}
              >
                <button
                  className={`text-xs font-medium transition-colors duration-300 ${
                    bgRight === "dark"
                      ? "text-white hover:text-white/70"
                      : "text-foreground hover:text-foreground/70"
                  }`}
                >
                  Explorar
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
                          className="block px-5 py-2 text-xs font-light whitespace-nowrap transition-colors duration-200 text-foreground hover:text-muted"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/book"
                className={`text-xs font-medium transition-all duration-300 px-3 py-1 rounded-full ${
                  bgRight === "dark"
                    ? "bg-white hover:bg-white/85 text-black"
                    : "bg-foreground hover:bg-charcoal text-background"
                }`}
              >
                Agenda una llamada
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
                  className={`block h-[1px] w-full origin-center transition-colors duration-300 ${bgRight === "dark" ? "bg-white" : "bg-foreground"}`}
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`block h-[1px] w-full transition-colors duration-300 ${bgRight === "dark" ? "bg-white" : "bg-foreground"}`}
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`block h-[1px] w-full origin-center transition-colors duration-300 ${bgRight === "dark" ? "bg-white" : "bg-foreground"}`}
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
                    href="/book"
                    className={`text-3xl font-light transition-colors duration-200 ${
                      isActive("/book") ? "text-foreground" : "text-muted hover:text-foreground"
                    }`}
                  >
                    Agenda una llamada
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
