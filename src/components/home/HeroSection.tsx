import { Suspense } from "react";
import { BOOKING_URL } from "@/lib/config";
import HeroAnimation from "@/components/home/HeroAnimation";

function HeroContent() {
  return (
    <>
      <h1
        className="text-foreground font-bold tracking-tight"
        style={{
          fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
          lineHeight: 1.1,
        }}
      >
        Push. Build. Deploy.
      </h1>
      <p className="text-foreground-secondary text-base md:text-lg font-light mt-5 mb-9 max-w-[520px] mx-auto leading-relaxed">
        We automate everything so your team can focus on product.
      </p>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-foreground hover:bg-foreground/85 text-background px-10 py-3 text-base font-light tracking-wide rounded-full transition-colors"
      >
        Let&apos;s talk
      </a>
      <div className="mt-12 pt-10 border-t border-border-color w-[130%] -ml-[15%]">
        <a href="/infrastructure-audit">
          <p className="text-sm tracking-wide font-semibold mb-1 hover:opacity-70 transition-opacity">
            <span className="text-[#C65100]">FREE</span> <span className="text-foreground">INFRASTRUCTURE AUDIT</span>
          </p>
        </a>
        <p className="text-sm text-muted font-light">
          CI/CD review, security audit, cost analysis, architecture report & actionable roadmap
        </p>
      </div>
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
