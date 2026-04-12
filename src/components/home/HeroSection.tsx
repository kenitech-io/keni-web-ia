import { Suspense } from "react";
import { BOOKING_URL } from "@/lib/config";
import HeroAnimation from "@/components/home/HeroAnimation";

function HeroContent() {
  return (
    <>
      <h1
        className="text-foreground font-bold tracking-tight"
        style={{
          fontSize: "clamp(2.5rem, 8vw, 4rem)",
          lineHeight: 1.1,
        }}
      >
        <span className="block">Push code,</span>
        <span className="block font-light">we handle the rest.</span>
      </h1>
      <p className="text-foreground-secondary text-base md:text-lg font-normal md:font-light mt-5 mb-10 max-w-[520px] mx-auto md:mx-0 leading-relaxed">
        DevOps expertise for your team,<br className="md:hidden" /> without the $200K hire.
      </p>
      <div className="flex flex-row items-center justify-center md:justify-start gap-3 md:gap-4">
        <a
          href="/infrastructure-audit"
          className="inline-block bg-foreground hover:bg-foreground/85 text-background px-6 py-3 md:px-10 md:py-2.5 text-sm font-light tracking-wide rounded-full transition-colors"
        >
          Get a free audit
        </a>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-border-color hover:border-foreground/40 text-foreground px-6 py-3 md:px-10 md:py-2.5 text-sm font-light tracking-wide rounded-full transition-colors"
        >
          Schedule a call
        </a>
      </div>
      <p className="text-xs md:text-[0.7rem] text-muted/50 md:text-muted/30 font-light mt-8 md:mt-10 max-w-[280px] md:max-w-[360px] mx-auto md:mx-0 text-center md:text-left leading-relaxed">
        Deploy time cut by 90% on average. CI/CD, infrastructure, monitoring, and security, all handled.
      </p>
    </>
  );
}

export default function HeroSection() {
  return (
    <Suspense>
      <HeroAnimation>
        <HeroContent />
      </HeroAnimation>
    </Suspense>
  );
}
