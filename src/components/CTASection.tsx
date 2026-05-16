"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

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
  dark = false,
}: CTASectionProps) {
  const href = buttonHref === "/contact" ? "/book" : (buttonHref || "/book");
  const isExternal = external ?? false;

  const headlineClass = dark
    ? "text-heading text-white font-light tracking-wide mb-8"
    : "text-heading text-foreground font-light tracking-wide mb-8";
  const subtextClass = dark
    ? "text-sm text-white/60 leading-loose font-light max-w-[480px] mx-auto mb-12"
    : "text-sm text-foreground-secondary/70 leading-loose font-light max-w-[480px] mx-auto mb-12";
  const buttonClass = dark
    ? "inline-block bg-white hover:bg-white/90 text-[#1E1E1E] px-8 py-3 text-sm font-light tracking-wide rounded-full transition-colors"
    : "inline-block bg-foreground hover:bg-foreground/85 text-background px-8 py-3 text-sm font-light tracking-wide rounded-full transition-colors";

  return (
    <section
      {...(dark ? { "data-dark-section": true } : {})}
      className={`py-32 md:py-48 ${dark ? "bg-[#1E1E1E]" : ""}`}
    >
      <Container>
        <FadeIn>
          <div className="text-center">
            <h2 className={headlineClass}>{headline}</h2>
            {subtext && <p className={subtextClass}>{subtext}</p>}
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
              <Link id="bottom-cta" href={href} className={buttonClass}>
                {buttonText}
              </Link>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
