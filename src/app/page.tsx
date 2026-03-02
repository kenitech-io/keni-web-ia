import InfinityLoop from "@/components/home/InfinityLoop";
import ApproachSection from "@/components/home/ApproachSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import TrustSection from "@/components/home/TrustSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <InfinityLoop />
      <ApproachSection />
      <ServicesPreview />
      <TrustSection />
      <CTASection
        headline="Ready to stop worrying about infrastructure?"
        subtext="30 minutes. No pitch, no pressure — just a calm conversation about where you are and how we can help."
        buttonText="Let's Talk"
        buttonHref="/contact"
      />
    </>
  );
}
