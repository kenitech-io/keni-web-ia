import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const tools = [
  { name: "Keni", src: "/tools/keni.png" },
  { name: "Docker", src: "/tools/docker.svg" },
  { name: "Terraform", src: "/tools/terraform.svg" },
  { name: "Prometheus", src: "/tools/prometheus.svg" },
  { name: "Grafana", src: "/tools/grafana.svg" },
  { name: "Traefik", src: "/tools/traefik.png" },
  { name: "GitHub Actions", src: "/tools/github.svg", darkInvert: true },
  { name: "Woodpecker CI", src: "/tools/woodpecker.svg" },
  { name: "Ansible", src: "/tools/ansible.svg", darkInvert: true },
  { name: "Loki", src: "/tools/loki.png" },
  { name: "Restic", src: "/tools/restic.png" },
  { name: "WireGuard", src: "/tools/wireguard.svg", darkInvert: true },
];

export default function TechGrid() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-[10%]">
      <FadeIn>
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 max-w-[960px] mx-auto">
          {/* Left: headline + bullets */}
          <div className="md:w-[280px] flex-shrink-0">
            <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight leading-tight mb-8">
              Automate your entire stack in days.
            </h2>
            <ul className="space-y-4">
              {[
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: <><strong className="text-foreground font-medium">GitOps from day one.</strong> Every change is a git commit.</> },
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", text: <><strong className="text-foreground font-medium">Zero vendor lock-in.</strong> All open-source tools.</> },
                { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", text: <><strong className="text-foreground font-medium">Automated backups</strong> with tested restores.</> },
                { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", text: <><strong className="text-foreground font-medium">Automatic HTTPS</strong> for all your domains.</> },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] text-foreground/70 font-light leading-relaxed">
                  <svg className="w-4 h-4 text-foreground/30 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: tech grid */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-3">
              {tools.map((tool) => (
                <div key={tool.name} className={`rounded-md p-4 flex items-center justify-center ${tool.name === "Keni" ? "bg-[#fafafa] dark:bg-[#111] ring-1 ring-[#C65100]/20" : "bg-[#fafafa] dark:bg-[#111]"}`}>
                  <div className="w-6 h-6 relative">
                    <Image
                      src={tool.src}
                      alt={tool.name}
                      fill
                      sizes="24px"
                      className={`object-contain ${"darkInvert" in tool && tool.darkInvert ? "dark:invert" : ""}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
