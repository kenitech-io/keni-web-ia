"use client";

import { useState, useEffect } from "react";
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
    <div className="overflow-hidden">
      <FadeIn>
        <div className="max-w-[700px] mx-auto">
          <p className="text-[clamp(0.9rem,2.5vw,1.25rem)] leading-relaxed text-foreground font-semibold tracking-tight mb-4 md:mb-6">
            Your deploys cost hours. Ours cost seconds.
          </p>
          <p className="text-[clamp(0.75rem,2vw,0.9rem)] text-foreground-secondary/70 leading-loose font-light mb-6 md:mb-10">
            No manual steps, no human error, no firefighting. Push code, it deploys in 60 seconds. Monitoring, alerts, and rollbacks are built in from day one.
          </p>
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
    </div>
  );
}
