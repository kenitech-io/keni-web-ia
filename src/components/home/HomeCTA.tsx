"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import MessageModal from "@/components/MessageModal";
import { BOOKING_URL } from "@/lib/config";

export default function HomeCTA() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-32 md:py-48">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: Support */}
          <FadeIn>
            <div>
              <svg className="w-12 h-12 md:w-14 md:h-14 text-foreground mb-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 24c0-8.837 7.163-16 16-16s16 7.163 16 16" />
                <path d="M6 28v-4a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-2z" />
                <path d="M36 28v-4a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                <path d="M40 32v2a4 4 0 01-4 4h-8" />
                <circle cx="26" cy="38" r="2" />
              </svg>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-4">
                Real engineers, real support.
              </h3>
              <p className="text-sm md:text-base text-foreground-secondary/70 font-light leading-relaxed">
                Get direct access to senior DevOps engineers, with <strong className="text-foreground font-medium">guaranteed response times</strong>, proactive monitoring, and full incident management.
              </p>
            </div>
          </FadeIn>

          {/* Right: Free audit */}
          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-5">
                Get a free infrastructure audit.
              </h3>
              <p className="text-sm md:text-base text-foreground-secondary/70 font-light leading-relaxed mb-10">
                Discover what is slowing your team down. We will review your CI/CD, infrastructure, and security, and give you a clear roadmap to fix it.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-foreground hover:bg-foreground/85 text-background px-10 py-3 text-base font-light tracking-wide rounded-full transition-colors"
              >
                Let&apos;s talk
              </a>
              <div className="mt-6">
                <button
                  onClick={() => setShowForm(true)}
                  className="text-sm text-muted font-light hover:text-foreground transition-colors"
                >
                  Prefer to send a message instead?
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      <AnimatePresence>
        {showForm && <MessageModal onClose={() => setShowForm(false)} />}
      </AnimatePresence>
    </section>
  );
}
