import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="max-w-[480px] mx-auto text-center -mt-16">
          <p className="text-label uppercase tracking-widest text-muted mb-6">
            404
          </p>
          <h1 className="text-display-sm text-foreground mb-6">
            Page not found
          </h1>
          <p className="text-body text-foreground-secondary mb-10">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-foreground hover:bg-charcoal text-background rounded-full px-8 py-4 font-medium transition-colors duration-200"
            >
              Go home
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-border-color hover:border-foreground text-foreground rounded-full px-8 py-4 font-medium transition-colors duration-200"
            >
              Contact us
            </Link>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <Link
              href="/devops-consulting"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              DevOps Consulting
            </Link>
            <Link
              href="/infrastructure-audit"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Infrastructure Audit
            </Link>
            <Link
              href="/blog"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/healthcheck"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Health Check
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
