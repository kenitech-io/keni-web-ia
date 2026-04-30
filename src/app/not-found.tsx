import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="max-w-[480px] mx-auto text-center -mt-16">
          <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
            404
          </p>
          <h1 className="text-heading text-foreground font-light tracking-wide mb-6">
            Página no encontrada
          </h1>
          <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-10">
            La página que buscas no existe o se movió.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-foreground hover:bg-foreground/85 text-background px-8 py-3 text-sm font-light tracking-wide rounded-full transition-colors"
            >
              Ir al inicio
            </Link>
            <Link
              href="/book"
              className="inline-block border border-foreground/[0.08] hover:border-foreground/40 text-foreground px-8 py-3 text-sm font-light tracking-wide rounded-full transition-colors"
            >
              Agenda una llamada
            </Link>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <Link
              href="/presencial"
              className="text-sm text-muted/60 font-light hover:text-foreground transition-colors"
            >
              Presencial
            </Link>
            <Link
              href="/web"
              className="text-sm text-muted/60 font-light hover:text-foreground transition-colors"
            >
              Web
            </Link>
            <Link
              href="/casos"
              className="text-sm text-muted/60 font-light hover:text-foreground transition-colors"
            >
              Casos
            </Link>
            <Link
              href="/blog"
              className="text-sm text-muted/60 font-light hover:text-foreground transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
