import { Suspense } from "react";
import Link from "next/link";
import HeroAnimation from "@/components/home/HeroAnimation";

function HeroContent() {
  return (
    <div className="flex flex-col md:flex-row md:items-start md:gap-20 w-full">
      {/* Left: headline + CTAs */}
      <div className="flex-1 flex flex-col justify-center">
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
        <p className="text-foreground-secondary text-base md:text-lg font-normal md:font-light mt-5 mb-6 md:mb-10 max-w-[520px] mx-auto md:mx-0 leading-relaxed">
          DevOps expertise for your team,<br className="md:hidden" /> without the $200K hire.
        </p>

        {/* Mobile: offer card */}
        <div className="md:hidden mb-6">
          <div className="border border-border-color rounded-lg px-5 py-5">
            <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[#C65100] font-medium mb-3">
              Limited slots
            </p>
            <p className="text-sm font-medium text-foreground tracking-tight mb-1">
              14-Day DevOps Takeover. <span className="text-[#C65100]">Free.</span>
            </p>
            <p className="text-xs text-muted font-light mb-4">
              We rebuild your DevOps in 14 days. You owe nothing.
            </p>
            <Link
              href="/takeover"
              className="block text-center bg-[#C65100] hover:bg-[#a84400] text-white px-5 py-1.5 text-[11px] font-light tracking-wide rounded-full transition-colors"
            >
              Claim your slot
            </Link>
          </div>
        </div>

        <p className="text-xs md:text-[0.7rem] text-muted/50 md:text-muted/30 font-light max-w-[300px] md:max-w-[400px] mx-auto md:mx-0 text-center md:text-left leading-relaxed">
          We set up your CI/CD, infrastructure, monitoring, and security. Your team pushes code, everything else happens automatically. No more SSH into servers, no more broken deploys on Friday.
        </p>
      </div>

      {/* Right: desktop card */}
      <div className="hidden md:block flex-shrink-0 w-[400px]">
        <div className="border border-foreground/40 rounded-lg p-6">
          <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[#C65100] font-medium mb-3">
            Limited slots
          </p>
          <h3 className="text-lg tracking-tight mb-2">
            <span className="font-medium">14-Day DevOps Takeover.</span> <span className="font-bold text-[#C65100]">Free.</span>
          </h3>
          <p className="text-[13px] text-foreground-secondary/70 font-light leading-relaxed mb-4">
            We rebuild your DevOps in 14 days. Keep us on retainer, or walk away with everything documented.
          </p>
          <div className="space-y-2 mb-5">
            <div className="flex items-center gap-2 text-[13px] text-foreground/80 font-light">
              <span className="text-[#C65100]">&#10003;</span> Full IDP deployed in your environment
            </div>
            <div className="flex items-center gap-2 text-[13px] text-foreground/80 font-light">
              <span className="text-[#C65100]">&#10003;</span> One service building and deploying
            </div>
            <div className="flex items-center gap-2 text-[13px] text-foreground/80 font-light">
              <span className="text-[#C65100]">&#10003;</span> Fully documented. You owe nothing.
            </div>
          </div>
          <Link
            href="/takeover"
            className="block text-center bg-[#C65100] hover:bg-[#a84400] text-white px-5 py-2 text-[13px] font-light tracking-wide rounded-full transition-colors"
          >
            Claim your slot
          </Link>
        </div>
      </div>
    </div>
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
