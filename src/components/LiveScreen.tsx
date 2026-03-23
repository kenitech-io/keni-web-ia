"use client";

import { useEffect, useState, useRef } from "react";

const pipelineSteps = [
  { name: "Build", status: "done" },
  { name: "Test", status: "done" },
  { name: "Push Image", status: "done" },
  { name: "Deploy STG", status: "done" },
  { name: "Deploy PRO", status: "running" },
];

const infraLogs = [
  "$ ansible-playbook provision.yml -i production",
  "PLAY [Provision infrastructure]",
  "",
  "TASK [Gather facts]",
  "ok: [pro-api-01]",
  "ok: [pro-api-02]",
  "ok: [pro-worker-01]",
  "",
  "TASK [Install Docker]",
  "ok: [pro-api-01]",
  "ok: [pro-api-02]",
  "changed: [pro-worker-01]",
  "",
  "TASK [Configure Caddy reverse proxy]",
  "changed: [pro-api-01]",
  "ok: [pro-api-02]",
  "",
  "TASK [Deploy monitoring stack]",
  "changed: [pro-api-01]",
  "changed: [pro-api-02]",
  "",
  "TASK [Configure firewall rules]",
  "ok: [pro-api-01]",
  "ok: [pro-api-02]",
  "ok: [pro-worker-01]",
  "",
  "PLAY RECAP",
  "pro-api-01    : ok=8  changed=3  failed=0",
  "pro-api-02    : ok=8  changed=1  failed=0",
  "pro-worker-01 : ok=6  changed=2  failed=0",
  "",
  "✓ Infrastructure provisioned successfully.",
];

const devLogs = [
  "$ git checkout -b feature/add-billing-api",
  "Switched to a new branch 'feature/add-billing-api'",
  "",
  "$ git add -A && git commit -m 'Add billing endpoint'",
  "[feature/add-billing-api e7b4a91] Add billing endpoint",
  " 4 files changed, 127 insertions(+), 3 deletions(-)",
  "",
  "$ git push origin feature/add-billing-api",
  "remote: Create a pull request on GitHub:",
  "remote:   https://github.com/client/api/pull/new/...",
  "",
  "$ gh pr create --fill",
  "Creating pull request for feature/add-billing-api",
  "https://github.com/client/api/pull/142",
  "",
  "$ gh pr checks 142 --watch",
  "  Build .......... pass (18s)",
  "  Lint ........... pass (4s)",
  "  Test ........... pass (31s)",
  "  Security scan .. pass (12s)",
  "✓ All checks passed",
  "",
  "$ gh pr merge 142 --squash",
  "Merged pull request #142",
  "",
  "$ git tag v2.4.1 && git push --tags",
  "To github.com:client/api.git",
  "  * [new tag]  v2.4.1 -> v2.4.1",
  "",
  "✓ Release v2.4.1 tagged.",
];

const deployLogs = [
  "$ gh run watch",
  "Run triggered: Deploy v2.4.1 #248",
  "  Build image .... pass (22s)",
  "  Push to registry pass (8s)",
  "  Notify deploy .. pass (1s)",
  "✓ Pipeline #248 completed in 31s",
  "",
  "$ docker compose pull",
  "Pulling api     ... done",
  "Pulling worker  ... done",
  "Pulling redis   ... skipped (up to date)",
  "",
  "$ docker compose up -d",
  "Recreating api    ... done",
  "Recreating worker ... done",
  "",
  "$ docker compose ps",
  "NAME        STATUS          PORTS",
  "api         Up (healthy)    8080/tcp",
  "worker      Up (healthy)    -",
  "redis       Up (healthy)    6379/tcp",
  "caddy       Up (healthy)    80/tcp, 443/tcp",
  "",
  "$ curl -s localhost:8080/health | jq .",
  '{  "status": "ok",  "version": "2.4.1"  }',
  "",
  "✓ Deployment complete. All services healthy.",
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
    <div ref={containerRef} className="font-mono text-[10px] md:text-xs leading-relaxed h-full overflow-hidden">
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

function Pipeline() {
  const [activeStep, setActiveStep] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 4 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[10px] md:text-xs text-[#8b949e] font-mono">main → production</span>
      </div>
      {pipelineSteps.map((step, i) => (
        <div key={step.name} className="flex items-center gap-3">
          <div
            className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-500 ${
              i < activeStep
                ? "bg-green-500/20"
                : i === activeStep
                ? "bg-amber-500/20"
                : "bg-[#1a1f26]"
            }`}
          >
            {i < activeStep ? (
              <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : i === activeStep ? (
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            ) : (
              <div className="w-2 h-2 rounded-full bg-[#30363d]" />
            )}
          </div>
          <span
            className={`text-[10px] md:text-xs font-mono transition-colors duration-500 ${
              i < activeStep
                ? "text-green-400/70"
                : i === activeStep
                ? "text-amber-300"
                : "text-[#484f58]"
            }`}
          >
            {step.name}
          </span>
          {i === activeStep && (
            <span className="text-[9px] text-amber-400/50 font-mono">running...</span>
          )}
          {i < activeStep && (
            <span className="text-[9px] text-green-400/30 font-mono">
              {[18, 4, 31, 12, 9][i]}s
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function Metrics() {
  const [cpu, setCpu] = useState(23);
  const [mem, setMem] = useState(41);
  const [req, setReq] = useState(847);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCpu(Math.floor(Math.random() * 15 + 18));
      setMem(Math.floor(Math.random() * 10 + 38));
      setReq(Math.floor(Math.random() * 200 + 750));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-[10px] md:text-xs text-green-400/70 font-mono">All systems operational</span>
      </div>
      <Metric label="CPU" value={cpu} unit="%" color="emerald" />
      <Metric label="Memory" value={mem} unit="%" color="blue" />
      <Metric label="Requests" value={req} unit="/s" color="violet" />
    </div>
  );
}

function Metric({
  label,
  value,
  unit,
  color,
}: {
  label: string;
  value: number;
  unit: string;
  color: string;
}) {
  const colors: Record<string, string> = {
    emerald: "bg-emerald-500/40",
    blue: "bg-blue-500/40",
    violet: "bg-violet-500/40",
  };

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-[10px] text-[#8b949e] font-mono">{label}</span>
        <span className="text-[10px] text-[#c9d1d9] font-mono">
          {value}{unit}
        </span>
      </div>
      <div className="h-1 bg-[#1a1f26] rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${colors[color]}`}
          style={{ width: `${Math.min(value, 100)}%` }}
        />
      </div>
    </div>
  );
}

const tabs = [
  { label: "Developer", logs: devLogs },
  { label: "Deploy", logs: deployLogs },
  { label: "Infra", logs: infraLogs },
];

export default function LiveScreen() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <style>{`
        @keyframes lineIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="w-full max-w-[1100px] mx-auto">
        {/* Screen frame */}
        <div className="bg-[#0d1117] rounded-2xl overflow-hidden border border-[#30363d]/50">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1b2028]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex gap-0 ml-4">
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-1 text-[10px] font-mono transition-colors ${
                    i === activeTab
                      ? "text-[#c9d1d9] bg-[#161b22] rounded-t"
                      : "text-[#484f58] hover:text-[#8b949e]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] h-[420px] md:h-[380px]">
            {/* Terminal */}
            <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-[#1b2028] overflow-hidden">
              <Terminal lines={tabs[activeTab].logs} />
            </div>

            {/* Sidebar */}
            <div className="p-5 md:p-6 space-y-8">
              <Pipeline />
              <Metrics />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
