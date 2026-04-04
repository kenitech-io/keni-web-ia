"use client";

import { phases } from "@/data/phases";

export default function PhaseCarousel() {
  return (
    <div className="max-w-[1000px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {phases.map((phase) => (
          <div
            key={phase.number}
            className="group bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between p-10 md:p-14 pt-12 md:pt-16"
            style={{ aspectRatio: "4 / 3" }}
          >
            <div className="mt-2 h-[80px] md:h-[90px]">
              <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-6">
                STEP {phase.number}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-wide uppercase text-black dark:text-white leading-tight">
                {phase.name}
              </h3>
            </div>

            <p className="text-sm text-black dark:text-white leading-relaxed font-light max-w-[380px] mb-8">
              {phase.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
