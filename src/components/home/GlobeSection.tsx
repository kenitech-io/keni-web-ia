"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

const steps = [
  { label: "Push", color: "#0070f3" },
  { label: "Build", color: "#f5a623" },
  { label: "Test", color: "#7928ca" },
  { label: "Deploy", color: "#50e3c2" },
  { label: "Live", color: "#ee5a24" },
];

export default function GlobeSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((s) => (s + 1) % steps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-32 overflow-hidden">
      <FadeIn>
        <div className="text-center max-w-[700px] mx-auto px-6">
          <p className="text-[clamp(1.1rem,3vw,1.75rem)] leading-relaxed text-foreground">
            <strong className="font-semibold">Your deploys cost hours. Ours cost seconds.</strong>
            <br />
            <span className="text-foreground-secondary/70 font-light">
              No manual steps, no human error, no firefighting. Just code that lands.
            </span>
          </p>
          <div className="flex items-center justify-center gap-3 mt-8">
            <Link
              href="/devops-consulting"
              className="inline-block bg-foreground hover:bg-foreground/85 text-background px-5 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-light tracking-wide rounded-full transition-colors"
            >
              More about services
            </Link>
            <Link
              href="/infrastructure-audit"
              className="inline-block border border-border-color hover:border-foreground/40 text-foreground px-5 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-light tracking-wide rounded-full transition-colors"
            >
              Get a free audit
            </Link>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="relative mt-10 md:mt-20 max-w-[500px] mx-auto px-6">
          <div className="flex items-center justify-between">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full transition-all duration-500"
                    style={{
                      backgroundColor: i <= activeStep ? step.color : "#d4d4d4",
                      transform: i <= activeStep ? "scale(1.3)" : "scale(1)",
                    }}
                  />
                  <span
                    className="text-[0.6rem] md:text-[0.65rem] font-medium tracking-wider uppercase transition-colors duration-500"
                    style={{
                      color: i <= activeStep ? step.color : "#b0b0b0",
                    }}
                  >
                    {step.label}
                  </span>
                </div>

                {i < steps.length - 1 && (
                  <div className="flex-1 mx-3 md:mx-4 relative -mt-5" style={{ height: 1 }}>
                    <div className="absolute inset-0 bg-[#e5e5e5]" />
                    <div
                      className="absolute inset-y-0 left-0 transition-all duration-500"
                      style={{
                        width: i < activeStep ? "100%" : "0%",
                        background: `linear-gradient(90deg, ${step.color}, ${steps[i + 1].color})`,
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
