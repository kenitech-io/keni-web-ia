"use client";

import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { CAL_BOOKING_URL } from "@/lib/config";

function getCalLink(): string {
  return CAL_BOOKING_URL.replace(/^https?:\/\/cal\.com\//, "").replace(/\/$/, "");
}

export default function BookingPageContent() {
  const calLink = getCalLink();

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
              <h1 className="text-[clamp(1.4rem,3.5vw,2rem)] font-semibold text-foreground/85 tracking-tight mb-3">
                Hablemos.
              </h1>
              <p className="text-[13px] text-muted leading-relaxed">
                Elige un horario abajo. Te confirmamos por email y te mandamos
                un prep corto para que la llamada avance rápido.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="max-w-[920px] mx-auto">
              {/* Desktop: full detail view */}
              <div className="hidden lg:block">
                <Cal
                  namespace="kickoff"
                  calLink={calLink}
                  config={{ layout: "month_view", theme: "auto" }}
                  style={{ width: "100%", height: "720px", overflow: "scroll" }}
                />
              </div>
              {/* Mobile + tablet: calendar-first, details hidden */}
              <div className="lg:hidden">
                <Cal
                  namespace="kickoff-mobile"
                  calLink={calLink}
                  config={{ layout: "column_view", theme: "auto" }}
                  style={{ width: "100%", height: "620px", overflow: "scroll" }}
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-[12px] text-muted text-center mt-8 max-w-[480px] mx-auto leading-relaxed">
              ¿Prefieres email primero?{" "}
              <Link href="/contact" className="text-foreground hover:underline">
                Mándanos un mensaje
              </Link>{" "}
              y respondemos en menos de 24 horas.
            </p>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
