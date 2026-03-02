"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { BOOKING_URL } from "@/lib/config";

interface CTASectionProps {
  headline: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
  external?: boolean;
}

export default function CTASection({
  headline,
  subtext,
  buttonText = "Schedule a Call",
  buttonHref,
  external,
}: CTASectionProps) {
  const href = buttonHref || BOOKING_URL;
  const isExternal = external ?? !buttonHref;

  return (
    <section className="py-section">
      <Container>
        <FadeIn>
          <div className="relative rounded-3xl bg-orange-500/20 border border-orange-400/30 overflow-hidden backdrop-blur-xl backdrop-saturate-150">
            {/* Glass inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-orange-500/10 to-orange-600/10" />
            {/* Top edge light */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />

            <div className="relative z-10 text-center py-20 md:py-28 px-8">
              <h2 className="text-display-sm text-foreground mb-6">{headline}</h2>
              {subtext && (
                <p className="text-body-lg text-foreground-secondary max-w-narrow mx-auto mb-10">
                  {subtext}
                </p>
              )}
              {isExternal ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent hover:bg-accent-hover text-background px-8 py-4 text-body font-medium rounded-full transition-colors"
                >
                  {buttonText}
                </a>
              ) : (
                <Link
                  href={href}
                  className="inline-block bg-accent hover:bg-accent-hover text-background px-8 py-4 text-body font-medium rounded-full transition-colors"
                >
                  {buttonText}
                </Link>
              )}
            </div>

            {/* Bottom edge light */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
