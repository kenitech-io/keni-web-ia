"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp, fadeIn, slideInLeft, scaleIn } from "@/lib/animations";

type AnimationType = "up" | "fade" | "left" | "scale";

const variants = {
  up: fadeInUp,
  fade: fadeIn,
  left: slideInLeft,
  scale: scaleIn,
};

interface FadeInProps {
  children: ReactNode;
  className?: string;
  type?: AnimationType;
  delay?: number;
  once?: boolean;
}

export default function FadeIn({
  children,
  className,
  type = "up",
  delay = 0,
  once = true,
}: FadeInProps) {
  const selectedVariant = variants[type];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...((selectedVariant.visible as Record<string, unknown>) || {}),
          transition: {
            ...(
              (selectedVariant.visible as Record<string, unknown>)
                ?.transition as Record<string, unknown>
            ),
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
