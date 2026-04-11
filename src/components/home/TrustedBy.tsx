const clients = ["Orbex", "Nuvio", "Brightcraft", "Mosaiq Studio", "Tessmark", "Volo Agency", "Stackfield", "Palqo"];

export default function TrustedBy() {
  return (
    <section className="py-10 md:py-14">
      <p className="text-[0.6rem] uppercase tracking-[0.25em] text-muted/40 font-light text-center mb-8">
        Trusted by
      </p>
      <div className="relative max-w-[800px] mx-auto overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex animate-marquee w-max items-center pointer-events-none">
          {[...Array(10)].map((_, setIndex) =>
            clients.map((client, i) => (
              <span
                key={`${setIndex}-${i}`}
                className="flex-shrink-0 px-8 md:px-12 text-sm md:text-base font-medium tracking-wide text-foreground/20"
              >
                {client}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
