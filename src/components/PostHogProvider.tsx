"use client";

import { useEffect, useRef } from "react";

export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initStarted = useRef(false);

  useEffect(() => {
    if (initStarted.current) return;
    initStarted.current = true;

    const initPostHog = async () => {
      const { default: posthog } = await import("posthog-js");
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: true,
        capture_pageleave: true,
      });
    };

    // Defer loading until the browser is idle, or after 2s as a fallback.
    // This keeps PostHog's ~80KB JS out of the critical rendering path.
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(() => initPostHog(), { timeout: 2000 });
    } else {
      setTimeout(() => initPostHog(), 2000);
    }
  }, []);

  // Renderizamos children SIEMPRE con la misma estructura. A propósito no los
  // envolvemos en el PHProvider de posthog-js/react: nada en la app consume el
  // contexto de PostHog (la auto-captura corre sobre el singleton tras init).
  // Antes esto envolvía condicionalmente (Fragment -> PHProvider en cuanto
  // cargaba el cliente), lo que re-parentaba todo el árbol y lo remontaba,
  // repitiendo la animación de entrada del hero. Se notaba sobre todo en iOS
  // Safari, que no tiene requestIdleCallback y cae al timeout de 2s.
  return <>{children}</>;
}
