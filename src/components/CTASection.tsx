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
  dark?: boolean;
}

export default function CTASection({
  headline,
  subtext,
  buttonText = "Schedule a Call",
  buttonHref,
  external,
}: CTASectionProps) {
  const href = buttonHref === "/contact" ? BOOKING_URL : (buttonHref || BOOKING_URL);
  const isExternal = external ?? (href === BOOKING_URL || !buttonHref);

  return (
    <section className="py-32 md:py-48">
      <Container>
        <FadeIn>
          <div className="text-center">
            <h2 className="text-heading text-foreground font-light tracking-wide mb-8">{headline}</h2>
            {subtext && (
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light max-w-[480px] mx-auto mb-12">
                {subtext}
              </p>
            )}
            {isExternal ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-foreground hover:bg-foreground/85 text-background px-8 py-3 text-sm font-light tracking-wide rounded-full transition-colors"
              >
                {buttonText}
              </a>
            ) : (
              <Link
                id="bottom-cta"
                href={href}
                className="inline-block bg-foreground hover:bg-foreground/85 text-background px-8 py-3 text-sm font-light tracking-wide rounded-full transition-colors"
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
