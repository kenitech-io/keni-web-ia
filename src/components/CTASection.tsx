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
          <div className="text-center py-20 md:py-28">
            <h2 className="text-display-sm text-foreground mb-6">{headline}</h2>
            {subtext && (
              <p className="text-body text-foreground-secondary max-w-narrow mx-auto mb-10">
                {subtext}
              </p>
            )}
            {isExternal ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-foreground hover:bg-charcoal text-background px-8 py-4 text-body font-medium rounded-full transition-colors"
              >
                {buttonText}
              </a>
            ) : (
              <Link
                href={href}
                className="inline-block bg-foreground hover:bg-charcoal text-background px-8 py-4 text-body font-medium rounded-full transition-colors"
              >
                {buttonText}
              </Link>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
