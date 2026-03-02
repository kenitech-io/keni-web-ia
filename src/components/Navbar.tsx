"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";

const services = [
  { name: "Monitoring & Observability", href: "/services/monitoring" },
  { name: "Cloud Migration", href: "/services/cloud-migration" },
  { name: "Cloud Management", href: "/services/cloud-management" },
  { name: "CI/CD Pipelines", href: "/services/ci-cd" },
  { name: "Infrastructure as Code", href: "/services/iac" },
];

const navLinks = [
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[64px] flex items-center transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-background/15"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Wordmark */}
            <Link
              href="/"
              className="text-sm font-semibold text-foreground tracking-tight"
            >
              Keni
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`text-xs font-normal transition-colors duration-200 flex items-center gap-1 ${
                    isActive("/services")
                      ? "text-foreground"
                      : "text-foreground-secondary hover:text-foreground"
                  }`}
                >
                  <span
                    className={`pb-1 ${
                      isActive("/services")
                        ? "border-b-2 border-accent"
                        : ""
                    }`}
                  >
                    Services
                  </span>
                  <motion.svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="mt-[-2px]"
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      d="M2.5 4L5 6.5L7.5 4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                    >
                      <div className="bg-surface border border-border-color rounded-lg shadow-2xl shadow-black/50 backdrop-blur-xl py-2 min-w-[260px]">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={`block px-4 py-2.5 mx-2 text-sm rounded-md transition-colors duration-150 ${
                              isActive(service.href)
                                ? "text-foreground bg-surface-light"
                                : "text-foreground-secondary hover:text-foreground hover:bg-surface-light"
                            }`}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-normal transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-foreground"
                      : "text-foreground-secondary hover:text-foreground"
                  }`}
                >
                  <span
                    className={`pb-1 ${
                      isActive(link.href)
                        ? "border-b-2 border-accent"
                        : ""
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}

              {/* CTA */}
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-hover text-background text-xs font-medium px-4 py-1.5 rounded-full transition-colors duration-200"
              >
                Let&apos;s Talk
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center z-50"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 flex flex-col gap-[6px]">
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 8 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-[1.5px] w-full bg-foreground origin-center"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="block h-[1.5px] w-full bg-foreground"
                />
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: -8 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-[1.5px] w-full bg-foreground origin-center"
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
                className="flex flex-col gap-2"
              >
                {/* Services section */}
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
                  <p className="text-muted text-xs uppercase tracking-widest mb-4 font-mono">
                    Services
                  </p>
                  <div className="flex flex-col gap-3 mb-10">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`text-2xl font-light transition-colors duration-200 ${
                          isActive(service.href)
                            ? "text-foreground"
                            : "text-foreground-secondary hover:text-foreground"
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Other links */}
                {navLinks.map((link) => (
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
                          : "text-foreground-secondary hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* CTA */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: "easeOut" },
                    },
                  }}
                  className="mt-10"
                >
                  <Link
                    href="/contact"
                    className="inline-block bg-accent hover:bg-accent-hover text-background text-lg font-medium px-8 py-4 rounded-full transition-colors duration-200"
                  >
                    Let&apos;s Talk
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
