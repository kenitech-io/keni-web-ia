import FadeIn from "@/components/ui/FadeIn";

const clients = ["Orbex", "Nuvio", "Brightcraft", "Mosaiq Studio", "Tessmark", "Volo Agency", "Stackfield", "Palqo"];

export default function TrustedBy() {
  return (
    <section className="bg-background">
      <div className="max-w-content mx-auto px-6 py-7 md:py-10">
        <FadeIn>
          <p className="text-xs md:text-sm text-muted font-medium text-center mb-5 md:mb-7">
            Trusted by
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee w-max items-center pointer-events-none">
              {[...Array(10)].map((_, setIndex) =>
                clients.map((client, i) => (
                  <span
                    key={`${setIndex}-${i}`}
                    className="flex-shrink-0 px-8 md:px-12 text-xs md:text-sm font-medium tracking-wide text-foreground"
                  >
                    {client}
                  </span>
                ))
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
