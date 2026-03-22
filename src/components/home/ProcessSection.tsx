"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const services = [
  {
    title: "CI/CD Pipeline Setup",
    description:
      "Automated build, test, and deploy pipelines. Every push triggers the right checks, every merge to main goes to production. No manual steps, no SSH.",
    tools: ["GitHub Actions", "GitLab CI", "ArgoCD", "Tekton"],
  },
  {
    title: "Infrastructure as Code",
    description:
      "Your entire infrastructure defined in version-controlled code. Terraform, Ansible, or whatever fits your stack. Reproducible, auditable, and reviewable.",
    tools: ["Terraform", "Pulumi", "Ansible"],
  },
  {
    title: "Container Orchestration",
    description:
      "Docker environments that match across dev, staging, and production. Consistent behavior everywhere, with automated scaling when you need it.",
    tools: ["Docker", "Kubernetes"],
  },
  {
    title: "Monitoring and Alerting",
    description:
      "Dashboards that show real system health and alerts that fire before your users notice. Structured logs, metrics, and runbooks for every alert.",
    tools: ["Prometheus", "Grafana", "Datadog"],
  },
  {
    title: "Secrets Management",
    description:
      "Centralized vault with automated injection. No more API keys in .env files or credentials shared over Slack. Rotation and audit logs included.",
    tools: ["Vault", "AWS Secrets Manager", "1Password"],
  },
  {
    title: "Disaster Recovery",
    description:
      "Automated backups with tested restores. Documented recovery time objectives. When the worst happens, you know exactly how to come back.",
    tools: ["AWS", "Velero", "Restic"],
  },
];

/* Simple tool icons as inline SVGs — keeps the site self-contained */
function ToolIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    "GitHub Actions": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    "GitLab CI": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#E24329">
        <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.386 9.452.045 13.587a.924.924 0 00.331 1.023L12 23.054l11.624-8.443a.92.92 0 00.331-1.024"/>
      </svg>
    ),
    ArgoCD: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#EF7B4D">
        <circle cx="12" cy="12" r="10" fill="none" stroke="#EF7B4D" strokeWidth="2"/>
        <path d="M8 12l3 3 5-6" fill="none" stroke="#EF7B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Tekton: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FD495C">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="#FD495C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Terraform: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#7B42BC">
        <path d="M1 4.5v6.5l5.6 3.2V7.7L1 4.5zm6.8 3.2v6.5l5.6 3.2V10.9L7.8 7.7zm6.8-3.9v6.5l5.6 3.2V7L14.6 3.8zM7.8 18.1l5.6 3.2v-6.5l-5.6-3.2v6.5z"/>
      </svg>
    ),
    Pulumi: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <circle cx="12" cy="6" r="3" fill="#F7BF2A"/>
        <circle cx="6" cy="14" r="3" fill="#8A3391"/>
        <circle cx="18" cy="14" r="3" fill="#F26E7E"/>
        <circle cx="12" cy="18" r="3" fill="#3DBCE9"/>
      </svg>
    ),
    Ansible: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#EE0000">
        <circle cx="12" cy="12" r="11" fill="none" stroke="#EE0000" strokeWidth="1.5"/>
        <path d="M12 5l5 12-8-6h6" fill="none" stroke="#EE0000" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    Docker: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954 0h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185zm-2.956 0h2.12a.186.186 0 00.184-.185V9.006a.186.186 0 00-.184-.186h-2.12a.185.185 0 00-.184.186v1.887c0 .102.083.185.185.185zm-2.955 0h2.119a.186.186 0 00.184-.185V9.006a.186.186 0 00-.184-.186H5.118a.185.185 0 00-.185.186v1.887c0 .102.084.185.185.185zm2.955-2.317h2.12a.186.186 0 00.184-.185V6.889a.186.186 0 00-.184-.186h-2.12a.185.185 0 00-.184.186v1.887c0 .102.083.185.185.185zm2.956 0h2.118a.186.186 0 00.186-.185V6.889a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185zm2.954 0h2.119a.186.186 0 00.186-.185V6.889a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.316h2.119a.186.186 0 00.186-.186V4.572a.186.186 0 00-.186-.185h-2.119a.186.186 0 00-.185.185v1.887c0 .103.083.186.185.186zM23.763 11.085c-.227-.153-.6-.228-1.108-.228-.317 0-.676.043-1.055.128-.32-1.394-1.378-2.074-1.422-2.1l-.285-.17-.181.278c-.227.353-.41.74-.54 1.147-.256.793-.295 1.598-.118 2.347-.577.33-1.515.413-1.706.42H.727a.726.726 0 00-.727.727c-.01 1.348.173 2.66.552 3.876.435 1.38 1.09 2.405 1.942 3.046 1.012.76 2.66 1.196 4.564 1.196.816 0 1.665-.079 2.526-.245a10.775 10.775 0 003.148-1.196 8.726 8.726 0 002.347-2.048c1.098-1.32 1.752-2.81 2.188-4.108h.19c1.175 0 1.9-.475 2.3-.869.267-.25.467-.553.599-.891l.083-.251-.217-.148z"/>
      </svg>
    ),
    Kubernetes: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#326CE5">
        <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 01-2.075-2.597l2.578-.437.004.005a.44.44 0 01.485.606zm3.59 0a.44.44 0 01.486-.607l.004-.004 2.577.437a5.18 5.18 0 01-2.074 2.596l-.999-2.412.007-.01zm-1.8 1.168a.44.44 0 01-.18.774l-.005.002-.997 2.412a5.115 5.115 0 01-2.445-.09l1.726-2.03.003-.003a.443.443 0 01.442-.222l.003-.002.003.002a.443.443 0 01.442.222l.003.003 1.726 2.03a5.115 5.115 0 01-2.445.09l-.997-2.412-.005-.002a.44.44 0 01-.18-.774zm.826-1.74a.44.44 0 01.66.337l.002.005.43 2.588a5.18 5.18 0 01-2.834.395l1.742-2.325zm-1.652 0l-1.742 2.325a5.178 5.178 0 01-2.834-.395l.43-2.588.002-.005a.44.44 0 01.66-.337zM12 5.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0-2a8.5 8.5 0 110 17 8.5 8.5 0 010-17z"/>
      </svg>
    ),
    Prometheus: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#E6522C">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.168c5.424 0 9.832 4.408 9.832 9.832S17.424 21.832 12 21.832c-1.884 0-3.636-.54-5.127-1.452h10.253v-1.584H5.46a9.757 9.757 0 01-1.292-2.376h7.664v-1.584H3.636a9.79 9.79 0 01-.3-1.584h8.496V11.67H3.276c.072-.54.192-1.068.36-1.584h8.196v-1.58H4.2A9.767 9.767 0 015.46 6.12h13.08V4.536H6.684a9.788 9.788 0 014.5-2.244V5.58h1.584V2.232c.396-.036.804-.064 1.232-.064z"/>
      </svg>
    ),
    Grafana: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#F46800">
        <path d="M22.687 12.37c-.04-.394-.12-.763-.24-1.104a5.017 5.017 0 00-.545-1.095 3.61 3.61 0 00-.478-.602c-.173-.17-.36-.317-.555-.44a2.042 2.042 0 00-.217-.136c-.016-.24-.048-.478-.1-.712a5.376 5.376 0 00-.385-1.216 4.928 4.928 0 00-.664-1.07 4.458 4.458 0 00-.905-.87 4.275 4.275 0 00-1.087-.614 4.42 4.42 0 00-1.192-.304c-.05-.003-.1-.006-.15-.007a3.792 3.792 0 00-.684-1.156 3.817 3.817 0 00-1.042-.84 3.818 3.818 0 00-1.296-.455A3.84 3.84 0 0013.8 2a3.827 3.827 0 00-2.37.818 3.82 3.82 0 00-1.268 2.09c-.12.01-.24.022-.36.04a4.777 4.777 0 00-1.65.594 4.914 4.914 0 00-1.322 1.108 4.88 4.88 0 00-.874 1.5 4.88 4.88 0 00-.292 1.728c0 .055.002.11.004.164a4.13 4.13 0 00-.842.584 4.108 4.108 0 00-.976 1.29 4.12 4.12 0 00-.414 1.57 4.133 4.133 0 00.294 1.8 4.09 4.09 0 001.11 1.478c.01.052.02.104.032.156.153.653.408 1.268.755 1.826a5.463 5.463 0 001.27 1.418 5.497 5.497 0 001.69.912 5.55 5.55 0 001.384.316c.305.44.67.83 1.088 1.162a4.695 4.695 0 001.42.768 4.705 4.705 0 001.628.3 4.705 4.705 0 001.84-.37 4.7 4.7 0 001.518-1.058c.38.04.767.032 1.148-.024a4.664 4.664 0 001.552-.552 4.7 4.7 0 001.208-1.024 4.66 4.66 0 00.792-1.376 4.664 4.664 0 00.304-1.59 4.65 4.65 0 00-.106-1.003 3.4 3.4 0 00.51-.566c.327-.44.562-.936.692-1.468a3.453 3.453 0 00.056-1.2z"/>
      </svg>
    ),
    Datadog: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#632CA6">
        <path d="M13.144 14.103l-1.62-.924-1.572 1.26.444-1.932-1.524-1.116 1.98-.168.696-1.848.696 1.848 1.98.168-1.524 1.116.444 1.596zm5.436-3.6L15.072 3.6 12.384.288 9.72 3.6 6.18 10.503l-3.3 5.4L6.18 21.6h11.64l3.3-5.697-2.54-5.4zM12 19.2a7.2 7.2 0 110-14.4 7.2 7.2 0 010 14.4z"/>
      </svg>
    ),
    Vault: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FFEC6E">
        <path d="M12 0L0 21.253h24L12 0zm0 6.3l7.392 12.753H4.608L12 6.3z"/>
      </svg>
    ),
    "AWS Secrets Manager": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF9900">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 7.5 12 10.82 4.18 7.5 12 4.18zM4 8.96l7 3.5v7.58l-7-3.5V8.96zm9 11.08V12.46l7-3.5v7.58l-7 3.5z"/>
      </svg>
    ),
    "1Password": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0094F5">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="#0094F5" strokeWidth="1.5"/>
        <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0094F5">1</text>
      </svg>
    ),
    AWS: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF9900">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.188 6.188 0 01-.248-.471c-.622.735-1.405 1.102-2.348 1.102-.671 0-1.205-.191-1.596-.575-.391-.384-.59-.894-.59-1.534 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.567.032-.863.104a6.37 6.37 0 00-.862.272 2.287 2.287 0 01-.28.104.488.488 0 01-.127.024c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167 4.593 4.593 0 01.958-.343A4.84 4.84 0 015.09 5.72c.919 0 1.59.208 2.022.631.424.416.64 1.046.64 1.892v2.493h.01zM4.14 11.116c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.558.904c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311l-1.876-6.18a1.293 1.293 0 01-.072-.335c0-.136.064-.208.191-.208h.783c.152 0 .256.024.312.08.064.048.112.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.152-.312a.549.549 0 01.32-.08h.638c.152 0 .256.024.32.08.064.048.12.16.152.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.128 0 .2.064.2.208 0 .04-.008.08-.016.128a1.057 1.057 0 01-.056.216l-1.924 6.18c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.152 0-.256-.024-.32-.08-.063-.056-.12-.16-.151-.32l-1.238-5.148-1.23 5.14c-.04.16-.088.271-.152.327-.064.056-.176.08-.32.08h-.687zm10.465.167a5.35 5.35 0 01-1.23-.144c-.399-.096-.71-.2-.918-.32-.128-.071-.216-.151-.248-.223a.56.56 0 01-.048-.224v-.407c0-.167.064-.248.184-.248.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.886.28.327.064.646.096.974.096.503 0 .894-.088 1.166-.264.272-.176.416-.431.416-.766a.87.87 0 00-.224-.607c-.152-.168-.44-.319-.862-.463l-1.238-.391c-.631-.2-1.094-.495-1.381-.886a2.086 2.086 0 01-.423-1.262c0-.367.08-.687.24-.958.16-.272.376-.503.647-.694.271-.2.575-.343.926-.44A4.132 4.132 0 0119.533 5c.2 0 .407.008.606.032.208.024.399.056.59.088.184.04.36.08.528.136.167.048.296.096.392.152a.85.85 0 01.28.2.437.437 0 01.072.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.534-.311c-.455 0-.815.072-1.07.224-.256.152-.39.383-.39.71 0 .223.08.415.24.574.16.16.463.319.91.463l1.222.375c.623.2 1.078.479 1.357.838.28.36.416.767.416 1.222 0 .375-.08.72-.24 1.023-.168.303-.391.566-.686.782a3.01 3.01 0 01-1.031.503c-.4.12-.83.176-1.302.176z"/>
        <path d="M21.39 16.703c-2.623 1.936-6.43 2.966-9.702 2.966-4.59 0-8.727-1.7-11.853-4.526-.248-.224-.024-.527.272-.352 3.375 1.963 7.55 3.148 11.862 3.148 2.91 0 6.107-.607 9.054-1.852.44-.2.815.288.367.616z"/>
      </svg>
    ),
    Velero: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#4091C9">
        <path d="M12 2l-8 18h16L12 2zm0 4l5.5 12h-11L12 6z"/>
      </svg>
    ),
    Restic: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#00B4A0">
        <rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="#00B4A0" strokeWidth="1.5"/>
        <path d="M7 10h4M7 14h7" stroke="#00B4A0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  };

  return (
    <span className="inline-flex items-center" title={name}>
      {icons[name] || (
        <span className="w-5 h-5 rounded bg-muted/20 flex items-center justify-center text-[8px] font-medium text-muted">
          {name.charAt(0)}
        </span>
      )}
    </span>
  );
}

export default function ProcessSection() {
  return (
    <section className="py-32 md:py-48">
      <Container>
        <FadeIn>
          <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-32 md:mb-40 font-light text-center">
            What we do
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-heading text-foreground font-light tracking-wide mb-16 text-center">
            Everything your team needs to ship with confidence
          </h2>
        </FadeIn>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.08}>
              <div className="bg-surface rounded-2xl p-8 h-full flex flex-col shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
                <h3 className="text-body text-foreground font-light tracking-wide mb-4">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground-secondary/70 leading-relaxed font-light mb-8 flex-1">
                  {service.description}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  {service.tools.map((tool) => (
                    <ToolIcon key={tool} name={tool} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
