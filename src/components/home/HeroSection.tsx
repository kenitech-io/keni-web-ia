"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="flex flex-col items-center text-center w-full px-6 -mt-16">
        <FadeIn type="up" delay={0.2} className="w-full flex justify-center">
          <h1 className="text-display md:text-display-lg text-foreground text-center max-w-[800px] mx-auto">
            Your developers should write code, not manage servers
          </h1>
        </FadeIn>

        <FadeIn type="up" delay={0.4} className="w-full flex justify-center">
          <p className="text-body text-foreground-secondary max-w-[480px] mx-auto text-center mt-6 md:mt-8 leading-relaxed">
            We build internal development platforms so your team can push code
            and forget about everything else.
          </p>
        </FadeIn>

        <FadeIn type="up" delay={0.6} className="w-full flex justify-center">
          <div className="mt-8 md:mt-10">
            <Link
              href="/contact"
              className="inline-block bg-foreground hover:bg-charcoal text-background rounded-full px-8 py-4 font-medium transition-colors duration-200"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
