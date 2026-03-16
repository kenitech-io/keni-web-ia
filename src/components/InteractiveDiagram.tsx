"use client";

import { useState, useEffect, useCallback, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ZonePart {
  partLabel: string;
  partDescription: string;
}

interface ZoneInfo {
  id: string;
  label: string;
  description: string;
  parts?: [ZonePart, ZonePart];
}

const zones: ZoneInfo[] = [
  {
    id: "overlay",
    label: "Overlay Network",
    description: "",
    parts: [
      {
        partLabel: "Service (SaaS)",
        partDescription:
          "A managed mesh VPN that creates a private network across all your servers. Traffic is encrypted end-to-end regardless of where nodes are physically hosted. You sign up, install an agent, and your servers can talk to each other securely.",
      },
      {
        partLabel: "Mesh (on each server)",
        partDescription:
          "A lightweight agent running on every server that joins it to the encrypted network. No firewall rules, no port forwarding, no VPN gateways. Nodes discover each other automatically and communicate directly.",
      },
    ],
  },
  {
    id: "secrets",
    label: "Secrets",
    description: "",
    parts: [
      {
        partLabel: "Vault (SaaS)",
        partDescription:
          "A managed service that stores API keys, database passwords, and certificates in one secure, encrypted location. Your team manages credentials from a single dashboard instead of scattering them across config files.",
      },
      {
        partLabel: "Secrets Agent (on each server)",
        partDescription:
          "A process running on each server that pulls credentials from the vault and injects them into containers at runtime. Secrets never touch code, never live in environment files, and rotate without redeploying.",
      },
    ],
  },
  {
    id: "saas-identity",
    label: "Identity (SaaS)",
    description:
      "Single sign-on and access control. One login for every tool and service. Role-based permissions so developers only access what they need.",
  },
  {
    id: "saas-repo",
    label: "Repository (SaaS)",
    description:
      "Your source code host. The single source of truth for all code, configuration, and infrastructure definitions. Every change is tracked, reviewed, and auditable.",
  },
  {
    id: "backup",
    label: "Backup",
    description: "",
    parts: [
      {
        partLabel: "Storage (SaaS)",
        partDescription:
          "Off-site, encrypted storage where your production snapshots are kept. Hosted outside your infrastructure so even a total server failure is recoverable. You never lose data.",
      },
      {
        partLabel: "Backup Agent (on prod)",
        partDescription:
          "A process running in production that takes automated snapshots on a schedule. It compresses, encrypts, and ships data to the off-site storage. The thing that lets you sleep at night.",
      },
    ],
  },
  {
    id: "core",
    label: "Core Server",
    description:
      "The central server that runs your CI/CD pipelines and observability stack. It builds your code, stores artifacts, orchestrates deployments, and monitors everything. This is the brain of the platform.",
  },
  {
    id: "dev",
    label: "Dev Server",
    description:
      "A dedicated environment that mirrors production. Developers deploy here first to catch issues before they reach users. Same deploy process, same container runtime, same networking.",
  },
  {
    id: "prod",
    label: "Prod Server",
    description:
      "The production environment serving real users. Identical to dev, with the addition of automated backups. If it works in dev, it works here.",
  },
  {
    id: "docker",
    label: "Docker",
    description:
      'A technology that packages software into lightweight, portable units called containers. Each container includes everything the app needs to run: code, libraries, and settings. It eliminates the "works on my machine" problem because the container is the machine.',
  },
  {
    id: "ci",
    label: "Continuous Integration",
    description:
      "The practice of automatically building and testing code every time a developer pushes a change. Instead of waiting weeks to find out something is broken, you know within minutes. CI catches problems when they are small and cheap to fix.",
  },
  {
    id: "cd",
    label: "Continuous Delivery",
    description:
      "The practice of automatically deploying code to servers after it passes CI. Instead of a developer manually copying files or running scripts, the system handles it. Releases go from a stressful event to a non-event that happens multiple times a day.",
  },
  {
    id: "observability",
    label: "Observability",
    description:
      'The ability to understand what is happening inside your systems by looking at their outputs: metrics, logs, and traces. Without it, debugging is guesswork. With it, you can answer "why is this slow?" or "what changed?" in minutes instead of hours.',
  },
  {
    id: "build",
    label: "Build",
    description:
      'Every git push triggers an automated build. Code gets compiled, tested, and packaged into a container image. No manual steps, no "works on my machine" problems.',
  },
  {
    id: "store",
    label: "Store",
    description:
      "A private container registry holding every built image. Each version is tagged, so rolling back to any previous release takes seconds, not hours.",
  },
  {
    id: "deploy",
    label: "Deploy",
    description: "",
    parts: [
      {
        partLabel: "Orchestrator (Core)",
        partDescription:
          "The central process that decides what version runs where. It watches your repository, detects new builds, and tells each server what to deploy. One brain, multiple targets.",
      },
      {
        partLabel: "Deploy Agent (on each server)",
        partDescription:
          "A lightweight agent on dev and prod that receives instructions from the orchestrator, pulls the new container image, and rolls it out with zero downtime. No SSH, no scripts, no manual steps.",
      },
    ],
  },
  {
    id: "monitoring",
    label: "Monitoring",
    description:
      "Real-time dashboards showing system health across all environments. CPU, memory, response times, error rates. Problems become visible before they become incidents.",
  },
  {
    id: "alerts",
    label: "Alerts",
    description:
      "Automated notifications when metrics cross thresholds. Your team gets paged before users notice. Each alert includes a runbook with the steps to resolve it.",
  },
  {
    id: "proxy",
    label: "Proxy",
    description:
      "A reverse proxy at every node handling TLS termination, routing, and load balancing. HTTPS everywhere with managed certificates and automatic renewal.",
  },
  {
    id: "apps",
    label: "App Stacks",
    description:
      "Your actual applications. Each runs in an isolated container, independently deployable, with automatic restarts on failure. This is where your team's code lives.",
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
  emailStatus: "idle" | "sending" | "sent" | "error" | "blocked";
  onEmailSubmit: (email: string, note: string) => void;
  submittedEmail?: string;
}

const ENGAGEMENT_THRESHOLD = 1;

export default function InteractiveDiagram({
  isOpen,
  onClose,
  emailStatus,
  onEmailSubmit,
  submittedEmail,
}: Props) {
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [guideOpen, setGuideOpen] = useState(false);
  const exploredRef = useRef<Set<string>>(new Set());
  const [exploredCount, setExploredCount] = useState(0);

  const activeInfo = zones.find((z) => z.id === activeZone);
  const showForm = exploredCount >= ENGAGEMENT_THRESHOLD;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const zoneStyle = useCallback(
    (id: string): React.CSSProperties => ({
      opacity: 1,
      filter: activeZone === id ? "brightness(0.88) saturate(1.4)" : "none",
      transform: activeZone === id ? "scale(1.01)" : "scale(1)",
      transformOrigin: "center",
      transition: "filter 0.3s ease, transform 0.3s ease",
      cursor: "pointer",
    }),
    [activeZone],
  );

  const enter = useCallback((id: string) => {
    setActiveZone(id);
    if (!exploredRef.current.has(id)) {
      exploredRef.current.add(id);
      setExploredCount(exploredRef.current.size);
    }
  }, []);
  const leave = useCallback(() => setActiveZone(null), []);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onEmailSubmit(email, note);
  };

  const inputClasses =
    "bg-transparent border-b border-border-color focus:border-foreground py-2 text-sm text-foreground w-full outline-none transition-colors placeholder:text-muted";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-background"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-6 z-10 w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M1 1L15 15M15 1L1 15"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <div className="h-full flex flex-col lg:flex-row">
            {/* Diagram */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-8 lg:p-12 min-h-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 960 760"
                className="max-w-full max-h-full w-auto h-auto"
                style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
              >
                <rect width="960" height="760" fill="var(--background)" />

                {/* ══════════════════════════════════════
                    LAYER 1: Server boxes (transparent fill = whole area hoverable)
                    Rendered first so inner elements sit on top
                    ══════════════════════════════════════ */}

                <g
                  onPointerEnter={() => enter("core")}
                  onPointerLeave={leave}
                  style={zoneStyle("core")}
                >
                  <rect
                    x="56"
                    y="132"
                    width="836"
                    height="240"
                    rx="6"
                    fill="transparent"
                    stroke="var(--border-color)"
                    strokeWidth="1"
                  />
                  <text
                    x="86"
                    y="154"
                    fontSize="10"
                    fontWeight="500"
                    fill="var(--muted)"
                    letterSpacing="2"
                  >
                    CORE
                  </text>
                  <text
                    x="86"
                    y="170"
                    fontSize="11"
                    fontWeight="300"
                    fill="var(--muted)"
                    style={{ opacity: 0.6 }}
                  >
                    Bare Metal
                  </text>
                </g>

                <g
                  onPointerEnter={() => enter("dev")}
                  onPointerLeave={leave}
                  style={zoneStyle("dev")}
                >
                  <rect
                    x="56"
                    y="408"
                    width="400"
                    height="304"
                    rx="6"
                    fill="transparent"
                    stroke="var(--border-color)"
                    strokeWidth="1"
                  />
                  <text
                    x="86"
                    y="430"
                    fontSize="10"
                    fontWeight="500"
                    fill="var(--muted)"
                    letterSpacing="2"
                  >
                    DEV
                  </text>
                  <text
                    x="86"
                    y="446"
                    fontSize="11"
                    fontWeight="300"
                    fill="var(--muted)"
                    style={{ opacity: 0.6 }}
                  >
                    Bare Metal
                  </text>
                </g>

                <g
                  onPointerEnter={() => enter("prod")}
                  onPointerLeave={leave}
                  style={zoneStyle("prod")}
                >
                  <rect
                    x="492"
                    y="408"
                    width="400"
                    height="304"
                    rx="6"
                    fill="transparent"
                    stroke="var(--border-color)"
                    strokeWidth="1"
                  />
                  <text
                    x="522"
                    y="430"
                    fontSize="10"
                    fontWeight="500"
                    fill="var(--muted)"
                    letterSpacing="2"
                  >
                    PROD
                  </text>
                  <text
                    x="522"
                    y="446"
                    fontSize="11"
                    fontWeight="300"
                    fill="var(--muted)"
                    style={{ opacity: 0.6 }}
                  >
                    Bare Metal
                  </text>
                </g>

                {/* ══════════════════════════════════════
                    LAYER 2: Docker containers (transparent fill)
                    ══════════════════════════════════════ */}

                <g
                  onPointerEnter={() => enter("docker")}
                  onPointerLeave={leave}
                  style={zoneStyle("docker")}
                >
                  <rect
                    x="80"
                    y="214"
                    width="788"
                    height="110"
                    rx="4"
                    fill="transparent"
                    stroke="var(--border-color)"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                  />
                  <text
                    x="96"
                    y="230"
                    fontSize="11"
                    fontWeight="300"
                    fill="var(--muted)"
                  >
                    Docker
                  </text>
                  <rect
                    x="80"
                    y="490"
                    width="352"
                    height="174"
                    rx="4"
                    fill="transparent"
                    stroke="var(--border-color)"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                  />
                  <text
                    x="96"
                    y="506"
                    fontSize="11"
                    fontWeight="300"
                    fill="var(--muted)"
                  >
                    Docker
                  </text>
                  <rect
                    x="516"
                    y="490"
                    width="352"
                    height="174"
                    rx="4"
                    fill="transparent"
                    stroke="var(--border-color)"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                  />
                  <text
                    x="532"
                    y="506"
                    fontSize="11"
                    fontWeight="300"
                    fill="var(--muted)"
                  >
                    Docker
                  </text>
                </g>

                {/* ══════════════════════════════════════
                    LAYER 3: CI / CD / Observability groups (transparent fill)
                    ══════════════════════════════════════ */}

                <g
                  onPointerEnter={() => enter("ci")}
                  onPointerLeave={leave}
                  style={zoneStyle("ci")}
                >
                  <rect
                    x="88"
                    y="242"
                    width="300"
                    height="66"
                    rx="4"
                    fill="transparent"
                    stroke="var(--border-color)"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                  />
                  <text
                    x="238"
                    y="258"
                    fontSize="9"
                    fontWeight="500"
                    fill="var(--muted)"
                    textAnchor="middle"
                    letterSpacing="1.5"
                  >
                    CI
                  </text>
                </g>

                <g
                  onPointerEnter={() => enter("cd")}
                  onPointerLeave={leave}
                  style={zoneStyle("cd")}
                >
                  <rect
                    x="400"
                    y="242"
                    width="162"
                    height="66"
                    rx="4"
                    fill="transparent"
                    stroke="var(--border-color)"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                  />
                  <text
                    x="481"
                    y="258"
                    fontSize="9"
                    fontWeight="500"
                    fill="var(--muted)"
                    textAnchor="middle"
                    letterSpacing="1.5"
                  >
                    CD
                  </text>
                  <rect
                    x="100"
                    y="518"
                    width="168"
                    height="102"
                    rx="4"
                    fill="transparent"
                    stroke="var(--border-color)"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                  />
                  <text
                    x="184"
                    y="534"
                    fontSize="9"
                    fontWeight="500"
                    fill="var(--muted)"
                    textAnchor="middle"
                    letterSpacing="1.5"
                  >
                    CD
                  </text>
                  <rect
                    x="536"
                    y="518"
                    width="168"
                    height="102"
                    rx="4"
                    fill="transparent"
                    stroke="var(--border-color)"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                  />
                  <text
                    x="620"
                    y="534"
                    fontSize="9"
                    fontWeight="500"
                    fill="var(--muted)"
                    textAnchor="middle"
                    letterSpacing="1.5"
                  >
                    CD
                  </text>
                </g>

                <g
                  onPointerEnter={() => enter("observability")}
                  onPointerLeave={leave}
                  style={zoneStyle("observability")}
                >
                  <rect
                    x="574"
                    y="242"
                    width="284"
                    height="66"
                    rx="4"
                    fill="transparent"
                    stroke="var(--border-color)"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                  />
                  <text
                    x="716"
                    y="258"
                    fontSize="9"
                    fontWeight="500"
                    fill="var(--muted)"
                    textAnchor="middle"
                    letterSpacing="1.5"
                  >
                    OBSERVABILITY
                  </text>
                </g>

                {/* ══════════════════════════════════════
                    LAYER 4: SaaS pills (individual)
                    ══════════════════════════════════════ */}

                <text
                  x="56"
                  y="58"
                  fontSize="10"
                  fontWeight="500"
                  fill="#999"
                  letterSpacing="2"
                  style={{
                    opacity: activeZone ? 0.3 : 1,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  SAAS
                </text>
                <line
                  x1="56"
                  y1="96"
                  x2="892"
                  y2="96"
                  stroke="var(--border-color)"
                  strokeWidth="0.6"
                />

                <g
                  onPointerEnter={() => enter("overlay")}
                  onPointerLeave={leave}
                  style={zoneStyle("overlay")}
                >
                  <rect
                    x="136"
                    y="42"
                    width="138"
                    height="34"
                    rx="17"
                    fill="var(--background)"
                    stroke="#ccc"
                    strokeWidth="0.8"
                  />
                  <text
                    x="205"
                    y="64"
                    fontSize="12"
                    fontWeight="400"
                    fill="var(--foreground-secondary)"
                    textAnchor="middle"
                  >
                    Overlay Network
                  </text>
                </g>

                <g
                  onPointerEnter={() => enter("secrets")}
                  onPointerLeave={leave}
                  style={zoneStyle("secrets")}
                >
                  <rect
                    x="290"
                    y="42"
                    width="138"
                    height="34"
                    rx="17"
                    fill="var(--background)"
                    stroke="#ccc"
                    strokeWidth="0.8"
                  />
                  <text
                    x="359"
                    y="64"
                    fontSize="12"
                    fontWeight="400"
                    fill="var(--foreground-secondary)"
                    textAnchor="middle"
                  >
                    Secrets
                  </text>
                </g>

                <g
                  onPointerEnter={() => enter("saas-identity")}
                  onPointerLeave={leave}
                  style={zoneStyle("saas-identity")}
                >
                  <rect
                    x="444"
                    y="42"
                    width="138"
                    height="34"
                    rx="17"
                    fill="var(--background)"
                    stroke="#ccc"
                    strokeWidth="0.8"
                  />
                  <text
                    x="513"
                    y="64"
                    fontSize="12"
                    fontWeight="400"
                    fill="var(--foreground-secondary)"
                    textAnchor="middle"
                  >
                    Identity
                  </text>
                </g>

                <g
                  onPointerEnter={() => enter("saas-repo")}
                  onPointerLeave={leave}
                  style={zoneStyle("saas-repo")}
                >
                  <rect
                    x="598"
                    y="42"
                    width="138"
                    height="34"
                    rx="17"
                    fill="var(--background)"
                    stroke="#ccc"
                    strokeWidth="0.8"
                  />
                  <text
                    x="667"
                    y="64"
                    fontSize="12"
                    fontWeight="400"
                    fill="var(--foreground-secondary)"
                    textAnchor="middle"
                  >
                    Repository
                  </text>
                </g>

                <g
                  onPointerEnter={() => enter("backup")}
                  onPointerLeave={leave}
                  style={zoneStyle("backup")}
                >
                  <rect
                    x="752"
                    y="42"
                    width="138"
                    height="34"
                    rx="17"
                    fill="var(--background)"
                    stroke="#ccc"
                    strokeWidth="0.8"
                  />
                  <text
                    x="821"
                    y="64"
                    fontSize="12"
                    fontWeight="400"
                    fill="var(--foreground-secondary)"
                    textAnchor="middle"
                  >
                    Backup
                  </text>
                </g>

                {/* ══════════════════════════════════════
                    LAYER 5: Overlay Network bars
                    ══════════════════════════════════════ */}

                <g
                  onPointerEnter={() => enter("overlay")}
                  onPointerLeave={leave}
                  style={zoneStyle("overlay")}
                >
                  <rect
                    x="80"
                    y="186"
                    width="788"
                    height="20"
                    rx="10"
                    fill="#f5f5f5"
                    stroke="#e0e0e0"
                    strokeWidth="0.6"
                  />
                  <text
                    x="474"
                    y="200"
                    fontSize="9"
                    fontWeight="400"
                    fill="#aaa"
                    textAnchor="middle"
                    letterSpacing="1"
                  >
                    OVERLAY NETWORK
                  </text>
                  <rect
                    x="80"
                    y="462"
                    width="352"
                    height="20"
                    rx="10"
                    fill="#f5f5f5"
                    stroke="#e0e0e0"
                    strokeWidth="0.6"
                  />
                  <text
                    x="256"
                    y="476"
                    fontSize="9"
                    fontWeight="400"
                    fill="#aaa"
                    textAnchor="middle"
                    letterSpacing="1"
                  >
                    OVERLAY NETWORK
                  </text>
                  <rect
                    x="516"
                    y="462"
                    width="352"
                    height="20"
                    rx="10"
                    fill="#f5f5f5"
                    stroke="#e0e0e0"
                    strokeWidth="0.6"
                  />
                  <text
                    x="692"
                    y="476"
                    fontSize="9"
                    fontWeight="400"
                    fill="#aaa"
                    textAnchor="middle"
                    letterSpacing="1"
                  >
                    OVERLAY NETWORK
                  </text>
                </g>

                {/* ══════════════════════════════════════
                    LAYER 6: Inner components (on top, most specific)
                    ══════════════════════════════════════ */}

                <g
                  onPointerEnter={() => enter("build")}
                  onPointerLeave={leave}
                  style={zoneStyle("build")}
                >
                  <rect
                    x="104"
                    y="270"
                    width="130"
                    height="28"
                    rx="4"
                    fill="#EDE7F6"
                    stroke="#5E35B1"
                    strokeWidth="0.8"
                  />
                  <text
                    x="169"
                    y="289"
                    fontSize="11"
                    fontWeight="400"
                    fill="#4527A0"
                    textAnchor="middle"
                  >
                    Build
                  </text>
                </g>

                <g
                  onPointerEnter={() => enter("store")}
                  onPointerLeave={leave}
                  style={zoneStyle("store")}
                >
                  <rect
                    x="242"
                    y="270"
                    width="130"
                    height="28"
                    rx="4"
                    fill="#FFF9C4"
                    stroke="#D4B000"
                    strokeWidth="0.8"
                  />
                  <text
                    x="307"
                    y="289"
                    fontSize="11"
                    fontWeight="400"
                    fill="#C6A700"
                    textAnchor="middle"
                  >
                    Store
                  </text>
                </g>

                <g
                  onPointerEnter={() => enter("deploy")}
                  onPointerLeave={leave}
                  style={zoneStyle("deploy")}
                >
                  <rect
                    x="416"
                    y="270"
                    width="130"
                    height="28"
                    rx="4"
                    fill="#FFF3E0"
                    stroke="#EF6C00"
                    strokeWidth="0.8"
                  />
                  <text
                    x="481"
                    y="289"
                    fontSize="11"
                    fontWeight="400"
                    fill="#E65100"
                    textAnchor="middle"
                  >
                    Deploy
                  </text>
                  <rect
                    x="119"
                    y="546"
                    width="130"
                    height="28"
                    rx="4"
                    fill="#FFF3E0"
                    stroke="#EF6C00"
                    strokeWidth="0.8"
                  />
                  <text
                    x="184"
                    y="565"
                    fontSize="11"
                    fontWeight="400"
                    fill="#E65100"
                    textAnchor="middle"
                  >
                    Deploy Agent
                  </text>
                  <rect
                    x="555"
                    y="546"
                    width="130"
                    height="28"
                    rx="4"
                    fill="#FFF3E0"
                    stroke="#EF6C00"
                    strokeWidth="0.8"
                  />
                  <text
                    x="620"
                    y="565"
                    fontSize="11"
                    fontWeight="400"
                    fill="#E65100"
                    textAnchor="middle"
                  >
                    Deploy Agent
                  </text>
                </g>

                <g
                  onPointerEnter={() => enter("monitoring")}
                  onPointerLeave={leave}
                  style={zoneStyle("monitoring")}
                >
                  <rect
                    x="582"
                    y="270"
                    width="130"
                    height="28"
                    rx="4"
                    fill="#E0F2F1"
                    stroke="#00897B"
                    strokeWidth="0.8"
                  />
                  <text
                    x="647"
                    y="289"
                    fontSize="11"
                    fontWeight="400"
                    fill="#00695C"
                    textAnchor="middle"
                  >
                    Monitoring
                  </text>
                </g>

                <g
                  onPointerEnter={() => enter("alerts")}
                  onPointerLeave={leave}
                  style={zoneStyle("alerts")}
                >
                  <rect
                    x="720"
                    y="270"
                    width="130"
                    height="28"
                    rx="4"
                    fill="#E0F2F1"
                    stroke="#00897B"
                    strokeWidth="0.8"
                  />
                  <text
                    x="785"
                    y="289"
                    fontSize="11"
                    fontWeight="400"
                    fill="#00695C"
                    textAnchor="middle"
                  >
                    Alerts
                  </text>
                </g>

                <g
                  onPointerEnter={() => enter("proxy")}
                  onPointerLeave={leave}
                  style={zoneStyle("proxy")}
                >
                  <rect
                    x="80"
                    y="336"
                    width="788"
                    height="18"
                    rx="4"
                    fill="#FCE4EC"
                    stroke="#C62828"
                    strokeWidth="0.8"
                  />
                  <text
                    x="474"
                    y="349"
                    fontSize="9"
                    fontWeight="400"
                    fill="#C62828"
                    textAnchor="middle"
                  >
                    Proxy
                  </text>
                  <rect
                    x="80"
                    y="676"
                    width="352"
                    height="18"
                    rx="4"
                    fill="#FCE4EC"
                    stroke="#C62828"
                    strokeWidth="0.8"
                  />
                  <text
                    x="256"
                    y="689"
                    fontSize="9"
                    fontWeight="400"
                    fill="#C62828"
                    textAnchor="middle"
                  >
                    Proxy
                  </text>
                  <rect
                    x="516"
                    y="676"
                    width="352"
                    height="18"
                    rx="4"
                    fill="#FCE4EC"
                    stroke="#C62828"
                    strokeWidth="0.8"
                  />
                  <text
                    x="692"
                    y="689"
                    fontSize="9"
                    fontWeight="400"
                    fill="#C62828"
                    textAnchor="middle"
                  >
                    Proxy
                  </text>
                </g>

                {/* Secrets: SaaS pill + agents (merged zone) */}
                <g
                  onPointerEnter={() => enter("secrets")}
                  onPointerLeave={leave}
                  style={zoneStyle("secrets")}
                >
                  <rect
                    x="119"
                    y="582"
                    width="130"
                    height="28"
                    rx="4"
                    fill="#E3F2FD"
                    stroke="#1565C0"
                    strokeWidth="0.8"
                  />
                  <text
                    x="184"
                    y="601"
                    fontSize="11"
                    fontWeight="400"
                    fill="#0D47A1"
                    textAnchor="middle"
                  >
                    Secrets Agent
                  </text>
                  <rect
                    x="555"
                    y="582"
                    width="130"
                    height="28"
                    rx="4"
                    fill="#E3F2FD"
                    stroke="#1565C0"
                    strokeWidth="0.8"
                  />
                  <text
                    x="620"
                    y="601"
                    fontSize="11"
                    fontWeight="400"
                    fill="#0D47A1"
                    textAnchor="middle"
                  >
                    Secrets Agent
                  </text>
                </g>

                <g
                  onPointerEnter={() => enter("apps")}
                  onPointerLeave={leave}
                  style={zoneStyle("apps")}
                >
                  <rect
                    x="284"
                    y="518"
                    width="130"
                    height="28"
                    rx="4"
                    fill="none"
                    stroke="var(--border-color)"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                  />
                  <text
                    x="349"
                    y="537"
                    fontSize="11"
                    fontWeight="300"
                    fill="var(--muted)"
                    textAnchor="middle"
                  >
                    App Stack
                  </text>
                  <rect
                    x="284"
                    y="554"
                    width="130"
                    height="28"
                    rx="4"
                    fill="none"
                    stroke="var(--border-color)"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                  />
                  <text
                    x="349"
                    y="573"
                    fontSize="11"
                    fontWeight="300"
                    fill="var(--muted)"
                    textAnchor="middle"
                  >
                    App Stack
                  </text>
                  <rect
                    x="284"
                    y="590"
                    width="130"
                    height="28"
                    rx="4"
                    fill="none"
                    stroke="var(--border-color)"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                  />
                  <text
                    x="349"
                    y="609"
                    fontSize="11"
                    fontWeight="300"
                    fill="var(--muted)"
                    textAnchor="middle"
                  >
                    App Stack
                  </text>
                  <rect
                    x="720"
                    y="518"
                    width="130"
                    height="28"
                    rx="4"
                    fill="none"
                    stroke="var(--border-color)"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                  />
                  <text
                    x="785"
                    y="537"
                    fontSize="11"
                    fontWeight="300"
                    fill="var(--muted)"
                    textAnchor="middle"
                  >
                    App Stack
                  </text>
                  <rect
                    x="720"
                    y="554"
                    width="130"
                    height="28"
                    rx="4"
                    fill="none"
                    stroke="var(--border-color)"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                  />
                  <text
                    x="785"
                    y="573"
                    fontSize="11"
                    fontWeight="300"
                    fill="var(--muted)"
                    textAnchor="middle"
                  >
                    App Stack
                  </text>
                  <rect
                    x="720"
                    y="590"
                    width="130"
                    height="28"
                    rx="4"
                    fill="none"
                    stroke="var(--border-color)"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                  />
                  <text
                    x="785"
                    y="609"
                    fontSize="11"
                    fontWeight="300"
                    fill="var(--muted)"
                    textAnchor="middle"
                  >
                    App Stack
                  </text>
                </g>

                {/* Backup: SaaS pill + agent (merged zone) */}
                <g
                  onPointerEnter={() => enter("backup")}
                  onPointerLeave={leave}
                  style={zoneStyle("backup")}
                >
                  <rect
                    x="536"
                    y="633"
                    width="314"
                    height="18"
                    rx="4"
                    fill="#E8F5E9"
                    stroke="#4CAF50"
                    strokeWidth="0.8"
                  />
                  <text
                    x="693"
                    y="646"
                    fontSize="9"
                    fontWeight="400"
                    fill="#2E7D32"
                    textAnchor="middle"
                  >
                    Backup Agent
                  </text>
                </g>
              </svg>
            </div>

            {/* Side Panel - hidden until first hover */}
            <AnimatePresence>
              {exploredCount > 0 && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 380, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 border-t lg:border-t-0 lg:border-l border-border-color p-6 md:p-10 flex flex-col justify-center overflow-y-auto overflow-x-hidden"
                >
                  {/* Component description */}
                  <div className="flex-1 flex items-center min-h-0 min-w-[320px]">
                    <AnimatePresence mode="wait">
                      {activeInfo ? (
                        <motion.div
                          key={activeInfo.id}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-label uppercase tracking-widest text-muted mb-4">
                            {activeInfo.label}
                          </p>
                          {activeInfo.parts ? (
                            <div className="space-y-6">
                              {activeInfo.parts.map((part) => (
                                <div key={part.partLabel}>
                                  <p className="text-xs font-medium text-foreground mb-1.5">
                                    {part.partLabel}
                                  </p>
                                  <p className="text-body text-foreground-secondary leading-relaxed">
                                    {part.partDescription}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-body text-foreground-secondary leading-relaxed">
                              {activeInfo.description}
                            </p>
                          )}
                        </motion.div>
                      ) : (
                        <motion.div
                          key="default"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <p className="text-body text-muted">
                            {showForm
                              ? "Hover over any component to learn more."
                              : "Hover over any component to learn what it does."}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Guide CTA, appears after engagement threshold */}
                  <AnimatePresence>
                    {showForm && emailStatus !== "sent" && (
                      <motion.div
                        key="guide-cta"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="pt-6 mt-6 border-t border-border-color text-center"
                      >
                        <button
                          onClick={() => setGuideOpen(true)}
                          className="bg-foreground hover:bg-charcoal text-background w-full px-4 py-2.5 text-sm font-medium rounded-full transition-colors"
                        >
                          Request guide
                        </button>
                        <p className="text-[10px] text-muted mt-2">
                          Exact tool recommendations and design principles.
                        </p>
                      </motion.div>
                    )}
                    {emailStatus === "sent" && (
                      <motion.div
                        key="email-sent"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="pt-6 mt-6 border-t border-border-color"
                      >
                        <p className="text-sm font-medium text-foreground mb-1">
                          Got it.
                        </p>
                        <p className="text-xs text-foreground-secondary">
                          We will send the full reference to{" "}
                          <span className="text-foreground">
                            {submittedEmail}
                          </span>{" "}
                          shortly.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Guide request modal */}
          <AnimatePresence>
            {guideOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0 }}
                className="absolute inset-0 z-20 flex items-center justify-center p-6"
              >
                <div
                  className="absolute inset-0 bg-background/90 backdrop-blur-sm"
                  onClick={() => setGuideOpen(false)}
                />
                <div className="relative w-full max-w-[400px] border border-border-color bg-background rounded-lg p-8">
                  <button
                    onClick={() => setGuideOpen(false)}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors"
                    aria-label="Close"
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M1 1L15 15M15 1L1 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                  <p className="text-sm font-medium text-foreground mb-1">
                    Get the guide
                  </p>
                  <p className="text-xs text-foreground-secondary mb-6">
                    Exact tool recommendations and design principles.
                  </p>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (
                          emailStatus === "blocked" ||
                          emailStatus === "error"
                        ) {
                          onEmailSubmit("__reset__", "");
                        }
                      }}
                      className={inputClasses}
                      placeholder="you@company.com"
                      required
                    />
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={1}
                      className={`${inputClasses} resize-none`}
                      placeholder="Add a note"
                    />
                    {emailStatus === "blocked" && (
                      <p className="text-xs text-foreground-secondary">
                        Please use your work email.
                      </p>
                    )}
                    {emailStatus === "error" && (
                      <p className="text-xs text-red-600">
                        Something went wrong. Please try again.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={emailStatus === "sending"}
                      className="bg-foreground hover:bg-charcoal disabled:opacity-50 text-background w-full px-4 py-2.5 text-sm font-medium rounded-full transition-colors"
                    >
                      {emailStatus === "sending"
                        ? "Sending..."
                        : "Request guide"}
                    </button>
                    <p className="text-[10px] text-muted text-center">
                      We promise no spam.
                    </p>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
