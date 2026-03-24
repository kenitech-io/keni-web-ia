"use client";

import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect, useRef, useState } from "react";
import type { PostHog } from "posthog-js";

export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client, setClient] = useState<PostHog | null>(null);
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
      setClient(posthog);
    };

    // Defer loading until the browser is idle, or after 2s as a fallback.
    // This keeps PostHog's ~80KB JS out of the critical rendering path.
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(() => initPostHog(), { timeout: 2000 });
    } else {
      setTimeout(() => initPostHog(), 2000);
    }
  }, []);

  if (!client) {
    return <>{children}</>;
  }

  return <PHProvider client={client}>{children}</PHProvider>;
}
