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
        headline="Ready to just ship?"
        subtext="30 minutes. No pitch, no pressure. Just a conversation about what's slowing your team down and how to fix it."
        buttonText="Let's Talk"
        buttonHref="/contact"
      />
    </>
  );
}
