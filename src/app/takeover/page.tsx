import { Metadata } from "next";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import FAQAccordion from "@/components/FAQAccordion";
import { BOOKING_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "14-Day DevOps Takeover | Keni Engineering",
  description: "A DevOps team, without hiring one. In 14 days we design, build, and deploy an Internal Developer Platform that fits you. You pay nothing.",
};

const faqs = [
  { q: "What do I need to do?", a: "Install our GitHub App (5 minutes) and join one kickoff call. We handle everything else." },
  { q: "Do you touch our production servers?", a: "No. The 14-day pilot deploys to a new, clean environment only. Zero production risk. Production cutover happens after you decide to continue." },
  { q: "What happens on day 15?", a: "You choose. Sign us on as your dedicated DevOps team, or keep what we built and walk your own way. Full documentation, zero owed." },
  { q: "What if we already have some DevOps?", a: "Most of our clients do. The takeover complements your existing setup and fills the gaps your team does not have time to address." },
  { q: "Is this really free?", a: "Yes. No credit card, no contract, no hidden fees. We invest 14 days because we know the platform sells itself." },
  { q: "What tools do you use?", a: "All open-source: Docker, Traefik, Woodpecker CI, Prometheus, Grafana, Restic. Zero licensing costs. No vendor lock-in." },
  { q: "How long is the retainer commitment?", a: "12-month term with a 30-day exit clause after month 3. We earn your business every month." },
];

function Check() {
  return <svg className="w-4 h-4 text-foreground/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>;
}

function TableCheck() {
  return <div className="flex justify-center"><svg className="w-4 h-4 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg></div>;
}

function Dash() {
  return <span className="text-foreground/15">&ndash;</span>;
}

export default function TakeoverPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-44 md:pb-16">
        <Container>
          <FadeIn>
            <h1 className="text-[clamp(1.5rem,4vw,2.25rem)] font-semibold text-foreground/85 tracking-tight text-center mb-3">
              From 1 deploy a week to 7 a day.
            </h1>
            <p className="text-sm text-muted text-center max-w-[500px] mx-auto font-light leading-relaxed">
              Not because your devs are slow. Because deploying is. Manual SSH, brittle scripts, setup docs nobody trusts. In 14 days we give you a platform that does it all on autopilot. For free.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* The Offer */}
      <section className="pb-16 md:pb-24">
        <Container>
          <FadeIn delay={0.05}>
            <div className="max-w-[860px] mx-auto bg-[#fafafa] dark:bg-[#0a0a0a] rounded-lg px-10 py-6">
              <p className="text-[13px] text-foreground/70 leading-relaxed mb-4">
                <strong className="text-foreground font-medium">Why free?</strong> Because if you see the platform running your code in 14 days, you won&apos;t want to run DevOps any other way. We bet our time on it.
              </p>
              <p className="text-[13px] text-foreground/70 leading-relaxed">
                <strong className="text-foreground font-medium">Day 14, you choose:</strong> sign us on for the long term as your dedicated DevOps team, or keep what we built and walk your own way. No auto-renewal, no pressure call. In any case, you get full documentation and owe us zero. Your team&apos;s total time investment: ~2 hours of calls plus access grants.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Timeline */}
      <section className="pb-20 md:pb-32">
        <Container>
          <FadeIn delay={0.1}>
            <div className="max-w-[640px] mx-auto">
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted mb-6">What happens in 14 days</p>
              <table className="w-full">
                <tbody className="text-[13px]">
                  {[
                    ["Day 0", "You send us whatever documentation you have on your infrastructure and deploy process."],
                    ["Day 1", "Kickoff call. We align on scope and set everything up on our side."],
                    ["Day 4", "Your new platform is deployed: CI/CD, deployment orchestration, reverse proxy with TLS, observability, private registry, automated backups. Fully IaC, GitOps from day one."],
                    ["Day 8", "We integrate the platform with your existing tools: SSO, secrets manager, whatever you already use."],
                    ["Day 10", "One of your services is already being developed through the platform on dev or staging. Zero production touch during the pilot."],
                    ["Day 14", "Decision call. You pick a tier, or we walk and you keep what we built."],
                  ].map(([day, desc], i, arr) => (
                    <tr key={day} className={i < arr.length - 1 ? "border-b border-[#f0f0f0] dark:border-[#222]" : ""}>
                      <td className="py-3 pr-6 text-foreground font-medium whitespace-nowrap align-top w-[18%]">{day}</td>
                      <td className="py-3 text-foreground/60 leading-relaxed">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Pricing cards */}
      <section className="pb-20 md:pb-32">
        <Container>
          <FadeIn delay={0.15}>
            <div className="max-w-[960px] mx-auto">
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted mb-6">If you continue: Managed DevOps</p>

              {/* Popular badge */}
              <div className="hidden md:grid grid-cols-3 mb-0 relative">
                <div />
                <div className="flex justify-center">
                  <span className="bg-foreground text-background text-[11px] font-medium px-3.5 py-1 rounded-full relative top-3 z-10">Popular</span>
                </div>
                <div />
              </div>

              {/* Cards */}
              <div className="border-t border-[#eaeaea] dark:border-[#333]">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#eaeaea] dark:divide-[#333]">

                  {/* Platform */}
                  <div className="py-8 md:py-10 md:pr-8">
                    <h3 className="text-[17px] font-semibold text-foreground mb-2">Platform</h3>
                    <p className="text-[13px] text-muted leading-relaxed mb-1">Always-on, fully featured development platform. Unlimited deploys, 8x5 support, monitoring, and incident response.</p>
                    <p className="text-[13px] text-foreground font-semibold mb-8">$3,000/mo</p>

                    <ul className="space-y-2.5 mb-10">
                      {[
                        "Unlimited deploys",
                        "8x5 support",
                        "Monitoring + incident response",
                        "Hands-on help for every app",
                        "Full DevOps team output",
                        "Less than a junior hire",
                      ].map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-[13px] text-foreground/80"><Check />{f}</li>
                      ))}
                    </ul>

                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full border border-[#eaeaea] dark:border-[#333] hover:border-foreground/30 text-foreground text-[13px] font-medium px-4 py-2 rounded-full transition-colors">
                      Start Deploying <span className="text-foreground/30">&#8594;</span>
                    </a>
                  </div>

                  {/* Evolve */}
                  <div className="py-8 md:py-10 md:px-8">
                    <h3 className="text-[17px] font-semibold text-foreground mb-2">Evolve</h3>
                    <p className="text-[13px] text-muted leading-relaxed mb-1">Everything in Platform, plus we build alongside your team. Continuous improvements, architecture reviews, and dedicated hours.</p>
                    <p className="text-[13px] text-foreground font-semibold mb-8">$8,000/mo</p>

                    <p className="text-[11px] text-muted mb-2.5">All Platform features, plus:</p>
                    <ul className="space-y-2.5 mb-10">
                      {[
                        "Continuous platform improvements",
                        "Infrastructure modernization",
                        "Architecture reviews",
                        "Dedicated hours for your stack",
                        "Built for ambitious teams",
                        "Partner, not vendor",
                      ].map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-[13px] text-foreground/80"><Check />{f}</li>
                      ))}
                    </ul>

                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-[#0070f3] hover:bg-[#0060df] text-white text-[13px] font-medium px-4 py-2 rounded-full transition-colors">
                      Start a free trial <span>&#8594;</span>
                    </a>
                  </div>

                  {/* Independence */}
                  <div className="py-8 md:py-10 md:pl-8">
                    <h3 className="text-[17px] font-semibold text-foreground mb-2">Independence</h3>
                    <p className="text-[13px] text-muted leading-relaxed mb-1">Full production migration. We move all your services onto the platform, document everything, train your team, and leave. You own it.</p>
                    <p className="text-[13px] text-foreground font-semibold mb-8">$20,000 once</p>

                    <p className="text-[11px] text-muted mb-2.5">Everything you need to run it yourself:</p>
                    <ul className="space-y-2.5 mb-10">
                      {[
                        "Full production migration",
                        "Complete handover",
                        "Documentation + training",
                        "No strings attached",
                        "You own everything",
                        "Run it yourselves",
                      ].map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-[13px] text-foreground/80"><Check />{f}</li>
                      ))}
                    </ul>

                    <div className="flex gap-2">
                      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between flex-1 bg-foreground hover:bg-foreground/85 text-background text-[13px] font-medium px-4 py-2 rounded-full transition-colors">
                        Get a demo <span>&#8594;</span>
                      </a>
                      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border border-[#eaeaea] dark:border-[#333] hover:border-foreground/30 text-foreground text-[13px] font-medium px-4 py-2 rounded-full transition-colors">
                        Request Trial
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="py-16 md:py-24 bg-[#fafafa] dark:bg-[#0a0a0a]">
        <Container>
          <FadeIn>
            <h2 className="text-xl font-semibold text-foreground text-center mb-12 md:mb-16">Compare plans in detail</h2>
            <div className="max-w-[900px] mx-auto text-[13px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#eaeaea] dark:border-[#333]">
                    <th className="text-left py-3 font-medium text-foreground w-[40%]"></th>
                    <th className="text-center py-3 font-medium text-foreground w-[20%]">Platform</th>
                    <th className="text-center py-3 font-medium text-foreground w-[20%]">Evolve</th>
                    <th className="text-center py-3 font-medium text-foreground w-[20%]">Independence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#eaeaea] dark:border-[#333]"><td colSpan={4} className="py-3 font-semibold text-foreground text-[12px] uppercase tracking-wide">Platform</td></tr>
                  {[
                    ["Internal Developer Platform", "✓", "✓", "✓"],
                    ["CI/CD pipelines", "✓", "✓", "✓"],
                    ["Reverse proxy + automatic TLS", "✓", "✓", "✓"],
                    ["Private container registry", "✓", "✓", "✓"],
                    ["Automated encrypted backups", "✓", "✓", "✓"],
                    ["GitOps workflow", "✓", "✓", "✓"],
                    ["Infrastructure as Code", "✓", "✓", "✓"],
                  ].map(([f, p, e, i]) => (
                    <tr key={f} className="border-b border-[#eaeaea]/60 dark:border-[#333]/60">
                      <td className="py-3 pl-4 text-foreground/70">{f}</td>
                      <td className="text-center py-3">{p === "✓" ? <TableCheck /> : <Dash />}</td>
                      <td className="text-center py-3">{e === "✓" ? <TableCheck /> : <Dash />}</td>
                      <td className="text-center py-3">{i === "✓" ? <TableCheck /> : <Dash />}</td>
                    </tr>
                  ))}

                  <tr className="border-b border-[#eaeaea] dark:border-[#333]"><td colSpan={4} className="py-3 font-semibold text-foreground text-[12px] uppercase tracking-wide">Monitoring</td></tr>
                  {[
                    ["Prometheus + Grafana", "✓", "✓", "✓"],
                    ["Custom dashboards", "✓", "✓", "✓"],
                    ["Structured logs", "✓", "✓", "✓"],
                    ["Proactive alerts", "✓", "✓", "—"],
                    ["Incident response", "✓", "✓", "—"],
                  ].map(([f, p, e, i]) => (
                    <tr key={f} className="border-b border-[#eaeaea]/60 dark:border-[#333]/60">
                      <td className="py-3 pl-4 text-foreground/70">{f}</td>
                      <td className="text-center py-3">{p === "✓" ? <TableCheck /> : <Dash />}</td>
                      <td className="text-center py-3">{e === "✓" ? <TableCheck /> : <Dash />}</td>
                      <td className="text-center py-3">{i === "✓" ? <TableCheck /> : <Dash />}</td>
                    </tr>
                  ))}

                  <tr className="border-b border-[#eaeaea] dark:border-[#333]"><td colSpan={4} className="py-3 font-semibold text-foreground text-[12px] uppercase tracking-wide">Deploys</td></tr>
                  {[
                    ["Unlimited deploys", "✓", "✓", "✓"],
                    ["Zero-downtime deploys", "✓", "✓", "✓"],
                    ["Rollback support", "✓", "✓", "✓"],
                    ["Production migration", "—", "✓", "✓"],
                  ].map(([f, p, e, i]) => (
                    <tr key={f} className="border-b border-[#eaeaea]/60 dark:border-[#333]/60">
                      <td className="py-3 pl-4 text-foreground/70">{f}</td>
                      <td className="text-center py-3">{p === "✓" ? <TableCheck /> : <Dash />}</td>
                      <td className="text-center py-3">{e === "✓" ? <TableCheck /> : <Dash />}</td>
                      <td className="text-center py-3">{i === "✓" ? <TableCheck /> : <Dash />}</td>
                    </tr>
                  ))}

                  <tr className="border-b border-[#eaeaea] dark:border-[#333]"><td colSpan={4} className="py-3 font-semibold text-foreground text-[12px] uppercase tracking-wide">Support</td></tr>
                  {[
                    ["Support coverage", "8x5", "8x5", "—"],
                    ["Hands-on app help", "✓", "✓", "—"],
                    ["Architecture reviews", "—", "✓", "—"],
                    ["Dedicated hours", "—", "✓", "—"],
                    ["Infrastructure modernization", "—", "✓", "—"],
                  ].map(([f, p, e, i]) => (
                    <tr key={f} className="border-b border-[#eaeaea]/60 dark:border-[#333]/60">
                      <td className="py-3 pl-4 text-foreground/70">{f}</td>
                      <td className="text-center py-3">{p === "✓" ? <TableCheck /> : p === "—" ? <Dash /> : <span className="text-foreground/50">{p}</span>}</td>
                      <td className="text-center py-3">{e === "✓" ? <TableCheck /> : e === "—" ? <Dash /> : <span className="text-foreground/50">{e}</span>}</td>
                      <td className="text-center py-3">{i === "✓" ? <TableCheck /> : i === "—" ? <Dash /> : <span className="text-foreground/50">{i}</span>}</td>
                    </tr>
                  ))}

                  <tr className="border-b border-[#eaeaea] dark:border-[#333]"><td colSpan={4} className="py-3 font-semibold text-foreground text-[12px] uppercase tracking-wide">Ownership</td></tr>
                  {[
                    ["Full documentation", "✓", "✓", "✓"],
                    ["Open-source tools only", "✓", "✓", "✓"],
                    ["No vendor lock-in", "✓", "✓", "✓"],
                    ["Training + handover", "—", "—", "✓"],
                    ["You run it yourselves", "—", "—", "✓"],
                  ].map(([f, p, e, i]) => (
                    <tr key={f} className="border-b border-[#eaeaea]/60 dark:border-[#333]/60">
                      <td className="py-3 pl-4 text-foreground/70">{f}</td>
                      <td className="text-center py-3">{p === "✓" ? <TableCheck /> : <Dash />}</td>
                      <td className="text-center py-3">{e === "✓" ? <TableCheck /> : <Dash />}</td>
                      <td className="text-center py-3">{i === "✓" ? <TableCheck /> : <Dash />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-40">
        <Container>
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 max-w-[900px] mx-auto">
              <div className="md:w-[260px] flex-shrink-0">
                <h2 className="text-3xl md:text-[2.5rem] font-bold text-foreground tracking-tight leading-[1.15]">
                  Frequently<br />asked<br />questions.
                </h2>
              </div>
              <div className="flex-1">
                <FAQAccordion faqs={faqs} />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 border-t border-[#eaeaea] dark:border-[#333]">
        <Container>
          <FadeIn>
            <div className="max-w-[480px] mx-auto text-center">
              <h2 className="text-xl font-semibold text-foreground tracking-tight mb-3">
                The DevOps you deserve is one call away.
              </h2>
              <p className="text-[13px] text-muted mb-8">
                Book a 15-minute call. We will tell you if your stack qualifies for the 14-day takeover.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0070f3] hover:bg-[#0060df] text-white text-[13px] font-medium px-5 py-2 rounded-full transition-colors"
              >
                Book the kickoff call <span>&#8594;</span>
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
