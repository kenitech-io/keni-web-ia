"use client";

import { useEffect, useState } from "react";

const pipelineSteps = [
  { name: "Build", status: "done" },
  { name: "Test", status: "done" },
  { name: "Security Scan", status: "done" },
  { name: "Deploy to STG", status: "done" },
  { name: "Deploy to PRO", status: "running" },
];

const logs = [
  "$ terraform plan",
  "Refreshing state...",
  "Plan: 3 to add, 1 to change, 0 to destroy.",
  "$ terraform apply -auto-approve",
  "aws_ecs_service.api: Creating...",
  "aws_ecs_service.api: Creation complete [id=arn:aws:ecs:...]",
  "aws_cloudwatch_log_group.api: Creating...",
  "aws_cloudwatch_log_group.api: Creation complete",
  "Apply complete! Resources: 3 added, 1 changed, 0 destroyed.",
  "",
  "$ kubectl get pods -n production",
  "NAME                    READY   STATUS    RESTARTS   AGE",
  "api-7d4b8c6f9-x2k1p    1/1     Running   0          12s",
  "api-7d4b8c6f9-m3j5q    1/1     Running   0          12s",
  "worker-5f8a9b2c1-h8n3   1/1     Running   0          45s",
  "",
  "$ argocd app sync production",
  "TIMESTAMP    GROUP   KIND        NAME    STATUS   HEALTH",
  "12:34:05     apps    Deployment  api     Synced   Healthy",
  "12:34:05     apps    Deployment  worker  Synced   Healthy",
  "12:34:06            Service     api     Synced   Healthy",
  "",
  "✓ All resources are synced and healthy",
  "",
  "$ promtool check rules alerts.yml",
  "Checking alerts.yml",
  "  SUCCESS: 12 rules found",
  "",
  "$ grafana-cli plugins ls",
  "installed plugins:",
  "  grafana-piechart-panel @ 1.6.2",
  "  grafana-clock-panel @ 2.1.0",
  "",
  "Deployment complete. All systems operational.",
];

function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= logs.length) return 0;
        return prev + 1;
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const displayLines = logs.slice(
    Math.max(0, visibleLines - 14),
    visibleLines
  );

  return (
    <div className="font-mono text-[10px] md:text-xs leading-relaxed">
      {displayLines.map((line, i) => (
        <div
          key={`${visibleLines}-${i}`}
          className={
            line.startsWith("$")
              ? "text-green-400"
              : line.startsWith("✓")
              ? "text-emerald-400"
              : line.startsWith("SUCCESS")
              ? "text-emerald-400"
              : "text-[#8b949e]"
          }
          style={{
            animation: "lineIn 0.3s ease-out",
          }}
        >
          {line || "\u00A0"}
        </div>
      ))}
      <span className="inline-block w-[6px] h-[14px] bg-green-400/70 animate-pulse ml-0.5" />
    </div>
  );
}

function Pipeline() {
  const [activeStep, setActiveStep] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 4 ? 0 : prev + 1));
    }, 2000);
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
              {Math.floor(Math.random() * 20 + 5)}s
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(Math.floor(Math.random() * 15 + 18));
      setMem(Math.floor(Math.random() * 10 + 38));
      setReq(Math.floor(Math.random() * 200 + 750));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

export default function LiveScreen() {
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
            <span className="text-[10px] text-[#484f58] font-mono ml-2">Keni — internal development platform</span>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] h-[420px] md:h-[380px]">
            {/* Terminal */}
            <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-[#1b2028] overflow-hidden">
              <Terminal />
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
