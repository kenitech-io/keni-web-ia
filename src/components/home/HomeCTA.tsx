"use client";

import { useState } from "react";
import Image from "next/image";
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
        <div className="max-w-[520px] mx-auto text-center">
          <FadeIn>
            <h2 className="text-heading text-foreground font-light tracking-wide mb-4">
              Let&apos;s talk about your infrastructure
            </h2>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-10">
              30 minutes with us. No pitch, no pressure.
              Just a conversation about what&apos;s slowing your team down.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-foreground hover:bg-foreground/85 text-background px-10 py-3 text-base font-light tracking-wide rounded-full transition-colors"
            >
              Book a free call
            </a>
          </FadeIn>
          <FadeIn delay={0.25}>
            <button
              onClick={() => setShowForm(true)}
              className="inline-block mt-6 text-sm text-muted font-light hover:text-foreground transition-colors"
            >
              Prefer to send a message instead?
            </button>
          </FadeIn>
        </div>
      </Container>

      <AnimatePresence>
        {showForm && <MessageModal onClose={() => setShowForm(false)} />}
      </AnimatePresence>
    </section>
  );
}
