import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <CTASection
        headline="Let's talk about your infrastructure"
        subtext="30 minutes. No pitch, no pressure — just a calm conversation about what's keeping your team from shipping faster."
        buttonText="Let's Talk"
        buttonHref="/contact"
      />
    </>
  );
}
