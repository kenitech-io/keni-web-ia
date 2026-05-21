import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones de Keni.",
  alternates: { canonical: "https://ia.kenitech.io/terminos" },
  // Placeholder en preparación: no indexar hasta tener contenido real.
  robots: { index: false, follow: true },
};

export default function TerminosPage() {
  return (
    <main>
      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <Container>
          <div className="max-w-[760px] mx-auto text-center">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                Legal
              </p>
              <h1
                className="text-foreground font-medium tracking-tight mb-8"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
              >
                Términos y condiciones
              </h1>
              <p className="text-body text-foreground-secondary/70 font-light leading-relaxed max-w-[620px] mx-auto">
                Estamos preparando este documento. Mientras tanto, para cualquier
                consulta puedes escribirnos a través de{" "}
                <Link
                  href="/contact"
                  className="underline underline-offset-4 decoration-border-color hover:decoration-foreground transition-all"
                >
                  contacto
                </Link>
                .
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}
