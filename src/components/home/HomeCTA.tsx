"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import MessageModal from "@/components/MessageModal";
import { BOOKING_URL } from "@/lib/config";

export default function HomeCTA() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-32 md:py-48">
      <div className="px-6 md:px-[10%] max-w-[1200px] mx-auto text-center">
        <FadeIn>
          <h2
            className="text-foreground font-semibold tracking-tight text-center mb-8"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            We&apos;ll find what&apos;s slowing you down. For free.
          </h2>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground font-light transition-colors inline-flex items-center gap-1.5"
          >
            Request your audit <span>&#8594;</span>
          </a>
        </FadeIn>
      </div>

      <AnimatePresence>
        {showForm && <MessageModal onClose={() => setShowForm(false)} />}
      </AnimatePresence>
    </section>
  );
}
