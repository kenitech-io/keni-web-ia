"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { phases } from "@/data/phases";

export default function PhaseScreen() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % phases.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const phase = phases[active];

  return (
    <div className="w-full max-w-[900px] mx-auto">
      <div className="bg-[#161b22] rounded-2xl overflow-hidden border border-[#30363d]">
        <div className="px-10 md:px-16 py-14 md:py-20 min-h-[420px] flex flex-col items-center justify-center text-center relative overflow-hidden">

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <motion.span
                className="text-[#666] font-mono text-[10px] tracking-[0.3em] block mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                STEP {phase.number}
              </motion.span>

              <motion.h3
                className="text-white font-bold tracking-wide uppercase"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {phase.name}
              </motion.h3>

              <motion.p
                className="text-[#9ca3af] font-light leading-relaxed text-sm max-w-[460px] mt-7"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                {phase.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 40%, rgba(239,108,0,0.03) 0%, transparent 70%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
