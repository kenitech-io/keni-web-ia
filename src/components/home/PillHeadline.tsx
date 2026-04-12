import FadeIn from "@/components/ui/FadeIn";

function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-border-color bg-background text-xs md:text-sm font-medium text-foreground align-middle mx-0.5 md:mx-1">
      <span className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted">{icon}</span>
      {label}
    </span>
  );
}

export default function PillHeadline() {
  return (
    <section className="py-12 md:py-32 bg-[#fafafa] dark:bg-[#0a0a0a]">
      <FadeIn>
        <p className="text-center text-[clamp(0.9rem,2.5vw,1.5rem)] font-semibold tracking-tight text-foreground leading-loose max-w-[1000px] mx-auto px-6 md:whitespace-nowrap">
          Scale your{" "}
          <Pill
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="8" rx="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
            }
            label="Enterprise"
          />{" "}
          without compromising{" "}
          <Pill
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            }
            label="Security"
          />
        </p>
      </FadeIn>
    </section>
  );
}
