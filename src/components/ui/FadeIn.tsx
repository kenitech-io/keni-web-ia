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
  /**
   * Anima al montar en vez de al entrar en viewport. Úsalo en contenido
   * siempre visible (portada/hero): en móvil, whileInView se vuelve a disparar
   * cuando la barra de direcciones se colapsa y cambia la altura del viewport
   * (100svh), repitiendo la aparición de las letras.
   */
  animateOnMount?: boolean;
}

export default function FadeIn({
  children,
  className,
  type = "up",
  delay = 0,
  once = true,
  animateOnMount = false,
}: FadeInProps) {
  const selectedVariant = variants[type];

  const triggerProps = animateOnMount
    ? ({ animate: "visible" } as const)
    : ({ whileInView: "visible", viewport: { once, margin: "-50px" } } as const);

  return (
    <motion.div
      initial="hidden"
      {...triggerProps}
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
