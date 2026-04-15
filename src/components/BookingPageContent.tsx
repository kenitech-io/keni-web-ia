"use client";

import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { CAL_BOOKING_URL } from "@/lib/config";
import { PLANS, PlanSlug } from "@/lib/plans";

function getCalLink(): string {
  return CAL_BOOKING_URL.replace(/^https?:\/\/cal\.com\//, "").replace(/\/$/, "");
}

export default function BookingPageContent({ planSlug }: { planSlug: PlanSlug | null }) {
  const plan = planSlug ? PLANS[planSlug] : null;
  const calLink = getCalLink();
  const planValue = plan ? `${plan.name} (${plan.price})` : "General inquiry";

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "kickoff" });
      cal("ui", { theme: "auto", hideEventTypeDetails: false, layout: "month_view" });
      const calMobile = await getCalApi({ namespace: "kickoff-mobile" });
      calMobile("ui", { theme: "auto", hideEventTypeDetails: true, layout: "column_view" });
    })();
  }, []);

  return (
    <main className="bg-background min-h-screen">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
          <FadeIn>
            <div className="max-w-[640px] mx-auto mb-0">
              {plan ? (
                <>
                  <Link
                    href="/takeover#pricing"
                    className="text-[12px] text-muted hover:text-foreground transition-colors inline-flex items-center gap-1.5 mb-8"
                  >
                    <span>&larr;</span> Back to plans
                  </Link>

                  <div className={`border ${plan.accent} rounded-lg p-5 mb-16 flex items-center justify-between`}>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted mb-1.5">Selected plan</p>
                      <h2 className="text-[18px] font-semibold text-foreground leading-tight">{plan.name}</h2>
                      <p className="text-[13px] text-muted mt-1">{plan.tagline}</p>
                    </div>
                    <span className="text-[14px] font-semibold text-foreground whitespace-nowrap">{plan.price}</span>
                  </div>

                  <h1 className="text-[clamp(1.4rem,3.5vw,2rem)] font-semibold text-foreground/85 tracking-tight mb-3">
                    Book your kickoff call.
                  </h1>
                  <p className="text-[13px] text-muted leading-relaxed">
                    Pick a time below. We will confirm by email and send a short prep doc so the call moves fast.
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-[clamp(1.4rem,3.5vw,2rem)] font-semibold text-foreground/85 tracking-tight mb-3">
                    Let&apos;s talk.
                  </h1>
                  <p className="text-[13px] text-muted leading-relaxed">
                    Pick a time below. We will confirm by email and send a short prep doc so the call moves fast.
                  </p>
                </>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="max-w-[920px] mx-auto">
              {/* Desktop: full detail view */}
              <div className="hidden lg:block">
                <Cal
                  namespace="kickoff"
                  calLink={calLink}
                  config={{ layout: "month_view", theme: "auto", plan: planValue }}
                  style={{ width: "100%", height: "720px", overflow: "scroll" }}
                />
              </div>
              {/* Mobile + tablet: calendar-first, details hidden */}
              <div className="lg:hidden">
                <Cal
                  namespace="kickoff-mobile"
                  calLink={calLink}
                  config={{ layout: "column_view", theme: "auto", plan: planValue }}
                  style={{ width: "100%", height: "620px", overflow: "scroll" }}
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-[12px] text-muted text-center mt-8 max-w-[480px] mx-auto leading-relaxed">
              Prefer email first?{" "}
              <Link href="/contact" className="text-foreground hover:underline">
                Send us a message
              </Link>{" "}
              and we will reply within 24 hours.
            </p>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
