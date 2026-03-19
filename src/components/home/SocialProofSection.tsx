import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function SocialProofSection() {
  return (
    <section className="py-32 md:py-48">
      <Container>
        <FadeIn>
          <p className="text-sm text-foreground-secondary/70 font-light text-center tracking-wide">
            63 companies. 220 workloads. 54K EUR/year average savings.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
