"use client";

import { useEffect, useState, useRef } from "react";

const infraLogs = [
  "$ ansible-playbook provision.yml -i keni-internal-platform",
  "PLAY [Provision infrastructure]",
  "",
  "TASK [Gather facts]",
  "ok: [keni-core]",
  "ok: [keni-dev]",
  "ok: [keni-prod]",
  "",
  "TASK [Install Docker]",
  "ok: [keni-core]",
  "ok: [keni-dev]",
  "changed: [keni-prod]",
  "",
  "TASK [Configure reverse proxy]",
  "changed: [keni-core]",
  "ok: [keni-dev]",
  "ok: [keni-prod]",
  "",
  "TASK [Install CI/CD runners]",
  "changed: [keni-core]",
  "changed: [keni-dev]",
  "changed: [keni-prod]",
  "",
  "TASK [Deploy monitoring stack]",
  "changed: [keni-core]",
  "changed: [keni-prod]",
  "",
  "TASK [Configure firewall rules]",
  "ok: [keni-core]",
  "ok: [keni-dev]",
  "ok: [keni-prod]",
  "",
  "PLAY RECAP",
  "keni-core : ok=8  changed=3  failed=0",
  "keni-dev  : ok=8  changed=1  failed=0",
  "keni-prod : ok=6  changed=2  failed=0",
  "",
  "✓ Infrastructure provisioned successfully.",
];

const devLogs = [
  "$ git tag v2.4.1-dev",
  "",
  "$ git push --tags",
  "To github.com:client/api.git",
  "  * [new tag]  v2.4.1-dev -> v2.4.1-dev",
  "",
  "Webhook received: tag v2.4.1-dev pushed",
  "Triggering pipeline: Deploy v2.4.1-dev",
  "",
  "  Build .......... pass (18s)",
  "  Test ........... pass (31s)",
  "  Scan ........... pass (12s)",
  "  Deploy DEV ..... pass (14s)",
  "",
  "✓ v2.4.1-dev deployed to keni-dev.",
];

const deployLogs = [
  "[deploy] Webhook received: v2.4.1-dev → keni-dev",
  "",
  "✓ [1/5] Pull tooling",
  "  Already up to date.",
  "",
  "✓ [2/5] Inject secrets",
  "  Injecting secrets for keni-dev...",
  "  DB_URL ......... ok",
  "  API_KEY ........ ok",
  "  JWT_SECRET ..... ok",
  "  REDIS_URL ...... ok",
  "  4 secrets injected",
  "",
  "✓ [3/5] Pull images",
  "  Pulling api     ... done",
  "  Pulling worker  ... done",
  "  Pulling redis   ... skipped (up to date)",
  "",
  "✓ [4/5] Restart services",
  "  Recreating api    ... done",
  "  Recreating worker ... done",
  "",
  "✓ [5/5] Health check",
  "  NAME        STATUS          PORTS",
  "  api         Up (healthy)    8080/tcp",
  "  worker      Up (healthy)    -",
  "  redis       Up (healthy)    6379/tcp",
  "",
  "✓ v2.4.1-dev running on keni-dev",
];

function Terminal({ lines }: { lines: string[] }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleCount(0);
  }, [lines]);

  useEffect(() => {
    if (visibleCount >= lines.length) return;
    const timeout = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, 350);
    return () => clearTimeout(timeout);
  }, [visibleCount, lines]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleCount]);

  return (
    <div ref={containerRef} className={`font-mono text-[10px] md:text-xs leading-relaxed h-full ${visibleCount >= lines.length ? "overflow-y-auto" : "overflow-hidden"}`}>
      {lines.slice(0, visibleCount).map((line, i) => (
        <div
          key={i}
          className={
            line.startsWith("$")
              ? "text-green-400"
              : line.startsWith("✓")
              ? "text-emerald-400"
              : line.startsWith("SUCCESS")
              ? "text-emerald-400"
              : "text-[#8b949e]"
          }
        >
          {line || "\u00A0"}
        </div>
      ))}
      {visibleCount < lines.length && (
        <span className="inline-block w-[6px] h-[14px] bg-green-400/70 animate-pulse ml-0.5" />
      )}
    </div>
  );
}

interface ServerState {
  cpu: number;
  mem: number;
  disk: number;
}

const serverVersions: Record<string, string> = {
  "keni-core": "v2.4.1",
  "keni-dev": "v2.4.1-dev",
  "keni-prod": "v2.4.0",
};

function ServerDashboard() {
  const [servers, setServers] = useState<Record<string, ServerState>>({
    "keni-core": { cpu: 12, mem: 34, disk: 47 },
    "keni-dev": { cpu: 28, mem: 52, disk: 31 },
    "keni-prod": { cpu: 19, mem: 61, disk: 58 },
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setServers({
        "keni-core": {
          cpu: Math.floor(Math.random() * 15 + 8),
          mem: Math.floor(Math.random() * 10 + 30),
          disk: 47,
        },
        "keni-dev": {
          cpu: Math.floor(Math.random() * 20 + 20),
          mem: Math.floor(Math.random() * 12 + 48),
          disk: 31,
        },
        "keni-prod": {
          cpu: Math.floor(Math.random() * 12 + 14),
          mem: Math.floor(Math.random() * 8 + 58),
          disk: 58,
        },
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-6 font-mono">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[10px] text-green-400/70">All systems operational</span>
      </div>

      {Object.entries(servers).map(([name, stats]) => (
        <div key={name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-[#c9d1d9]">{name}</span>
            <span className="text-[9px] text-[#484f58]">{serverVersions[name]}</span>
          </div>
          <ServerBar label="CPU" value={stats.cpu} color="bg-emerald-500/50" />
          <ServerBar label="RAM" value={stats.mem} color="bg-blue-500/50" />
          <ServerBar label="DSK" value={stats.disk} color="bg-violet-500/40" />
        </div>
      ))}
    </div>
  );
}

function ServerBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[9px] text-[#484f58] w-6">{label}</span>
      <div className="flex-1 h-1 bg-[#1a1f26] rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-[9px] text-[#8b949e] w-7 text-right">{value}%</span>
    </div>
  );
}

function CIPipeline() {
  const steps = [
    { name: "Push", status: "done" },
    { name: "Build", status: "done" },
    { name: "Test", status: "done" },
    { name: "Scan", status: "done" },
    { name: "Docker push", status: "done" },
  ];

  return (
    <div className="space-y-2 font-mono">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-[10px] text-green-400/70">main → v2.4.1-dev</span>
      </div>
      {steps.map((step) => (
        <div key={step.name} className="flex items-center gap-3">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[10px] md:text-xs text-green-400/70">{step.name}</span>
          <span className="text-[9px] text-green-400/30 ml-auto">{[3, 18, 31, 12, 9][steps.indexOf(step)]}s</span>
        </div>
      ))}
      <div className="mt-4 pt-4 border-t border-[#1b2028]">
        <span className="text-[10px] text-emerald-400">✓ Pipeline complete in 1m13s</span>
      </div>
    </div>
  );
}

function CDPipeline() {
  const steps = [
    { name: "Docker pull", status: "done" },
    { name: "Inject secrets", status: "done" },
    { name: "Compose up", status: "done" },
    { name: "Health check", status: "done" },
  ];

  return (
    <div className="space-y-2 font-mono">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-[10px] text-green-400/70">deploy → keni-dev</span>
      </div>
      {steps.map((step) => (
        <div key={step.name} className="flex items-center gap-3">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[10px] md:text-xs text-green-400/70">{step.name}</span>
          <span className="text-[9px] text-green-400/30 ml-auto">{[8, 2, 5, 3][steps.indexOf(step)]}s</span>
        </div>
      ))}
      <div className="mt-4 pt-4 border-t border-[#1b2028]">
        <span className="text-[10px] text-emerald-400">✓ Deployed in 18s</span>
      </div>
    </div>
  );
}

const screens = [
  { label: "DevOps", logs: infraLogs },
  { label: "DEV", logs: devLogs },
  { label: "OPS", logs: deployLogs },
];

const s = {
  muted: "text-[#8b949e] border border-[#30363d]",
  purple: "text-[#ce93d8] bg-[#4a148c]/20 border border-[#4a148c]/40",
  green: "text-[#80cbc4] bg-[#004d40]/20 border border-[#004d40]/40",
  yellow: "text-[#fff176] bg-[#f9a825]/10 border border-[#f9a825]/30",
  blue: "text-[#90caf9] bg-[#0d47a1]/20 border border-[#0d47a1]/40",
  orange: "text-[#ffb74d] bg-[#e65100]/20 border border-[#e65100]/40",
};

const pipelines = [
  // DevOps: DevOps → Repo → Core / Dev / Prod
  [
    { label: "DevOps", style: s.muted },
    { label: "Repo", style: s.muted },
    { label: "keni-core", style: s.orange },
    { label: "keni-dev", style: s.orange },
    { label: "keni-prod", style: s.orange },
  ],
  // DEV: dev → Repo → Build → Test → Store
  [
    { label: "dev", style: s.muted },
    { label: "Repo", style: s.muted },
    { label: "Build", style: s.purple },
    { label: "Test", style: s.green },
    { label: "Store", style: s.yellow },
  ],
  // OPS: Store → Secrets → Deploy
  [
    { label: "Store", style: s.yellow },
    { label: "Secrets", style: s.blue },
    { label: "Deploy", style: s.orange },
  ],
];

function TerminalWindow({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="bg-[#0d1117] rounded-2xl overflow-hidden border border-[#30363d]/50">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1b2028]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[10px] text-[#484f58] font-mono ml-2">{title}</span>
      </div>
      <div className="p-5 md:p-6 h-[420px] md:h-[520px] overflow-hidden">
        <Terminal lines={lines} />
      </div>
    </div>
  );
}

export default function LiveScreen() {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <div className="w-full mx-auto">
      {/* Tabs top-left */}
      <div className="flex gap-2 mb-6">
        {screens.map((screen, i) => (
          <button
            key={screen.label}
            onClick={() => setActiveScreen(i)}
            className={`px-3 py-1.5 text-[0.65rem] font-light tracking-wide rounded transition-colors ${
              i === activeScreen
                ? "bg-foreground text-background"
                : "text-foreground-secondary/70 hover:text-foreground border border-foreground/[0.08]"
            }`}
          >
            {screen.label}
          </button>
        ))}
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-4">
        {/* Terminal */}
        <TerminalWindow
          title={screens[activeScreen].label}
          lines={screens[activeScreen].logs}
        />

        {/* Side panel - changes per tab */}
        <div className="bg-[#0d1117] rounded-2xl overflow-hidden border border-[#30363d]/50">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1b2028]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-[10px] text-[#484f58] font-mono ml-2">
              {["monitoring", "CI pipeline", "CD pipeline"][activeScreen]}
            </span>
          </div>
          <div className="p-5 md:p-6 h-[420px] md:h-[520px] overflow-hidden">
            {activeScreen === 0 && <ServerDashboard />}
            {activeScreen === 1 && <CIPipeline />}
            {activeScreen === 2 && <CDPipeline />}
          </div>
        </div>
      </div>

      {/* Pipeline diagram hidden */}
    </div>
  );
}
