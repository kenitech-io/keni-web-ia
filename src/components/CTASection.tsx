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
  dark,
}: CTASectionProps) {
  const href = buttonHref || BOOKING_URL;
  const isExternal = external ?? !buttonHref;

  const headlineClass = dark
    ? "text-heading text-[#d8d4cf] font-light tracking-wide mb-8"
    : "text-heading text-foreground font-light tracking-wide mb-8";

  const subtextClass = dark
    ? "text-sm text-[#a09a93] leading-loose font-light max-w-[480px] mx-auto mb-12"
    : "text-sm text-foreground-secondary/70 leading-loose font-light max-w-[480px] mx-auto mb-12";

  const buttonClass = dark
    ? "inline-block bg-[#c8c3bc] hover:bg-[#b5b0a9] text-[#1a1a1a] px-8 py-3 text-sm font-light tracking-wide rounded-full transition-colors"
    : "inline-block bg-foreground hover:bg-foreground/85 text-background px-8 py-3 text-sm font-light tracking-wide rounded-full transition-colors";

  return (
    <section className="py-32 md:py-48">
      <Container>
        <FadeIn>
          <div className="text-center">
            <h2 className={headlineClass}>{headline}</h2>
            {subtext && (
              <p className={subtextClass}>
                {subtext}
              </p>
            )}
            {isExternal ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
              >
                {buttonText}
              </a>
            ) : (
              <Link
                id="bottom-cta"
                href={href}
                className={buttonClass}
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
